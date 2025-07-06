// Immediate error suppression - loaded as early as possible
(function() {
  'use strict';
  
  // Store original console methods
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalLog = console.log;
  
  const shouldSuppress = (message) => {
    if (!message) return false;
    const msgStr = message.toString();
    
    return (
      msgStr.includes('hybridaction') ||
      msgStr.includes('autotrack.studyquicks.com') ||
      msgStr.includes('chrome-extension') ||
      msgStr.includes('questionai') ||
      msgStr.includes('studyquicks') ||
      msgStr.includes('ERR_BLOCKED_BY_CLIENT') ||
      msgStr.includes('CONFIGURATION_NOT_FOUND') ||
      msgStr.includes('Failed to load resource') ||
      msgStr.includes('net::ERR_BLOCKED_BY_CLIENT') ||
      msgStr.includes('zybTrackerStatisticsAction') ||
      msgStr.includes('WAP plat undefined') ||
      msgStr.includes('WAP plat') ||
      msgStr.includes('copilot.b68e6a51.js') ||
      msgStr.includes('main.3b8695ff.js') ||
      msgStr.includes('sidebar.cc1d36ec.js') ||
      msgStr.includes('chromeos-questionnaire') ||
      msgStr.includes('Service is currently unstable') ||
      msgStr.includes('errNo: -2') ||
      msgStr.includes('Unexpected end of JSON input') ||
      msgStr.includes('questionai.com') ||
      msgStr.includes('hajphibbdloomfdkeoejchiikjggnaif') ||
      msgStr.includes('googleapis.com/identitytoolkit') ||
      msgStr.includes('GET http://localhost:3000/hybridaction') ||
      msgStr.includes('GET https://autotrack.studyquicks.com') ||
      msgStr.includes('was preloaded using link preload') ||
      msgStr.includes('FormAssistantStatus') ||
      msgStr.includes('extension_track') ||
      msgStr.includes('ISC_004') ||
      msgStr.includes('ISC_001') ||
      msgStr.includes('H60_112') ||
      msgStr.includes('J0C_001') ||
      msgStr.includes('ets=') ||
      msgStr.includes('cuid=') ||
      msgStr.includes('installChannel=store')
    );
  };
  
  // Override console methods
  console.error = function(...args) {
    if (shouldSuppress(args[0])) return;
    originalError.apply(console, args);
  };
  
  console.warn = function(...args) {
    if (shouldSuppress(args[0])) return;
    originalWarn.apply(console, args);
  };
  
  console.log = function(...args) {
    if (shouldSuppress(args[0])) return;
    originalLog.apply(console, args);
  };
  
  // Global error handler
  window.addEventListener('error', function(event) {
    const message = event.message || event.error?.message || '';
    
    if (shouldSuppress(message)) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);
  
  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', function(event) {
    const message = event.reason?.message || event.reason?.toString() || '';
    const reasonObj = event.reason || {};
    
    if (
      shouldSuppress(message) ||
      reasonObj.errNo === -2 ||
      (reasonObj.errMsg && reasonObj.errMsg.includes('Service is currently unstable'))
    ) {
      event.preventDefault();
      return false;
    }
  }, true);
  
})();
