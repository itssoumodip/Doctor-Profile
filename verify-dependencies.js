const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Read the package.json file
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const installedDeps = Object.keys(packageJson.dependencies || {});

// Array to store all found imports
const requiredPackages = new Set();

// Function to scan a file for imports
function scanFileForImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Check for RadixUI imports
  const radixImportRegex = /from\s+['"]@radix-ui\/react-([a-z-]+)['"]/g;
  let match;
  
  while ((match = radixImportRegex.exec(content)) !== null) {
    const packageName = `@radix-ui/react-${match[1]}`;
    requiredPackages.add(packageName);
  }
}

// Scan all UI component files
const componentsDir = path.join(__dirname, 'components', 'ui');
const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.jsx') || file.endsWith('.js'));

files.forEach(file => {
  scanFileForImports(path.join(componentsDir, file));
});

// Check admin pages for imports
const adminPagesDir = path.join(__dirname, 'app', 'admin');
if (fs.existsSync(adminPagesDir)) {
  const scanDirectory = (dir) => {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(dirent => {
      const fullPath = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        scanDirectory(fullPath);
      } else if (dirent.name.endsWith('.jsx') || dirent.name.endsWith('.js')) {
        scanFileForImports(fullPath);
      }
    });
  };
  
  scanDirectory(adminPagesDir);
}

console.log('Required Radix UI packages:');
const missingPackages = [...requiredPackages].filter(pkg => !installedDeps.includes(pkg));

if (missingPackages.length > 0) {
  console.log('Missing packages:', missingPackages);
  console.log('Installing missing packages...');
  
  try {
    const installCommand = `npm install ${missingPackages.join(' ')} --save`;
    execSync(installCommand, { stdio: 'inherit' });
    console.log('Successfully installed missing packages!');
  } catch (error) {
    console.error('Failed to install packages:', error);
  }
} else {
  console.log('All required packages are already installed!');
}
