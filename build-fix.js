// build-fix.js
const fs = require('fs');
const path = require('path');

// Check if the tailwind dependency exists and install it if not
try {
  require.resolve('tailwindcss');
  console.log('Tailwind CSS is already installed');
} catch (e) {
  console.log('Installing Tailwind CSS...');
  const { execSync } = require('child_process');
  execSync('npm install tailwindcss postcss autoprefixer --legacy-peer-deps', { stdio: 'inherit' });
}

// Ensure we have a JavaScript version of the configs
const tailwindConfigTs = path.join(__dirname, 'tailwind.config.ts');
const tailwindConfigJs = path.join(__dirname, 'tailwind.config.js');

if (!fs.existsSync(tailwindConfigJs) && fs.existsSync(tailwindConfigTs)) {
  console.log('Creating JavaScript version of Tailwind config...');
  const tsConfig = fs.readFileSync(tailwindConfigTs, 'utf8');
  
  // Convert TypeScript export to CommonJS
  const jsConfig = tsConfig
    .replace('import type { Config } from "tailwindcss";', '')
    .replace('const config: Config = {', '/** @type {import("tailwindcss").Config} */\nmodule.exports = {')
    .replace('export default config;', '');
  
  fs.writeFileSync(tailwindConfigJs, jsConfig, 'utf8');
}

// Ensure postcss.config.js exists
const postcssConfigMjs = path.join(__dirname, 'postcss.config.mjs');
const postcssConfigJs = path.join(__dirname, 'postcss.config.js');

if (!fs.existsSync(postcssConfigJs) && fs.existsSync(postcssConfigMjs)) {
  console.log('Creating JavaScript version of PostCSS config...');
  const mjsConfig = fs.readFileSync(postcssConfigMjs, 'utf8');
  
  // Convert ESM to CommonJS
  const jsConfig = mjsConfig
    .replace('export default config;', 'module.exports = config;');
  
  fs.writeFileSync(postcssConfigJs, jsConfig, 'utf8');
}

console.log('Build preparation completed successfully!');
