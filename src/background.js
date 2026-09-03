chrome.runtime.onMessage.addListener((msg, s, resp) => { if(msg.action === 'getEliteTools') { resp({tools: ['Search', 'Bookmark', 'Screenshot', 'Export', 'QR Code', 'Color Picker']}); } });
