const a448_0x186c8c=a448_0x54f4;(function(_0x5c5c58,_0x4bdac7){const _0x13d241=a448_0x54f4,_0x2549f2=_0x5c5c58();while(!![]){try{const _0x40accb=-parseInt(_0x13d241(0x1f0))/0x1*(-parseInt(_0x13d241(0x1ec))/0x2)+-parseInt(_0x13d241(0x1dd))/0x3+-parseInt(_0x13d241(0x1ef))/0x4*(parseInt(_0x13d241(0x1dc))/0x5)+-parseInt(_0x13d241(0x1ed))/0x6*(parseInt(_0x13d241(0x1ea))/0x7)+parseInt(_0x13d241(0x1e5))/0x8*(-parseInt(_0x13d241(0x1e8))/0x9)+-parseInt(_0x13d241(0x1f2))/0xa*(parseInt(_0x13d241(0x1e1))/0xb)+parseInt(_0x13d241(0x1df))/0xc*(parseInt(_0x13d241(0x1db))/0xd);if(_0x40accb===_0x4bdac7)break;else _0x2549f2['push'](_0x2549f2['shift']());}catch(_0x482fa0){_0x2549f2['push'](_0x2549f2['shift']());}}}(a448_0x47c2,0x9d8a4));const a448_0x3bb3f6=(function(){let _0x5e6eee=!![];return function(_0x1786b3,_0x425012){const _0x3512ac=_0x5e6eee?function(){const _0x5d97ec=a448_0x54f4;if(_0x425012){const _0x3d0b44=_0x425012[_0x5d97ec(0x1e7)](_0x1786b3,arguments);return _0x425012=null,_0x3d0b44;}}:function(){};return _0x5e6eee=![],_0x3512ac;};}()),a448_0x25a47d=a448_0x3bb3f6(this,function(){const _0x2057eb=a448_0x54f4;return a448_0x25a47d[_0x2057eb(0x1e4)]()[_0x2057eb(0x1de)](_0x2057eb(0x1f1))[_0x2057eb(0x1e4)]()[_0x2057eb(0x1f3)](a448_0x25a47d)[_0x2057eb(0x1de)](_0x2057eb(0x1f1));});a448_0x25a47d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x13be45){const _0x5c00a5=a448_0x54f4;return _0x13be45&&_0x13be45[_0x5c00a5(0x1e3)]?_0x13be45:{'default':_0x13be45};};Object['defineProperty'](exports,a448_0x186c8c(0x1e3),{'value':!![]}),exports[a448_0x186c8c(0x1ee)]=void 0x0;const database_1=__importDefault(require(a448_0x186c8c(0x1d9))),Message_1=__importDefault(require('../../models/Message')),Ticket_1=__importDefault(require(a448_0x186c8c(0x1e9))),ShowMessageService=async _0x56311b=>{const _0x28f92c=a448_0x186c8c,_0x2e3cda=await database_1[_0x28f92c(0x1da)][_0x28f92c(0x1e6)](_0x28f92c(0x1e0)+_0x56311b+'\x27',{'model':Message_1[_0x28f92c(0x1da)],'mapToModel':!![]});if(_0x2e3cda[_0x28f92c(0x1eb)]>0x0)return _0x2e3cda[0x0];return undefined;},GetWhatsAppFromMessage=async _0x3f9df4=>{const _0x37da17=a448_0x186c8c,_0x5a01e0=_0x3f9df4['ticketId'],_0x533daf=await Ticket_1[_0x37da17(0x1da)]['findByPk'](_0x5a01e0);if(!_0x533daf)return null;return _0x533daf[_0x37da17(0x1e2)];};function a448_0x54f4(_0x43772b,_0x34fbc6){const _0x486bb8=a448_0x47c2();return a448_0x54f4=function(_0x25a47d,_0x3bb3f6){_0x25a47d=_0x25a47d-0x1d9;let _0x47c277=_0x486bb8[_0x25a47d];return _0x47c277;},a448_0x54f4(_0x43772b,_0x34fbc6);}function a448_0x47c2(){const _0x429a2d=['312fBxGTn','select\x20*\x20from\x20\x22Messages\x22\x20where\x20id\x20=\x20\x27','11hSMggn','whatsappId','__esModule','toString','24ytdfOk','query','apply','3838932OQiDcI','../../models/Ticket','35VvSupx','length','98RnbUkw','378702JZbozV','GetWhatsAppFromMessage','1935124MFNipY','1151pMuuQo','(((.+)+)+)+$','6095410pWpOcf','constructor','../../database','default','2498665vvgIlD','10CrqJMG','3708339WzJzZD','search'];a448_0x47c2=function(){return _0x429a2d;};return a448_0x47c2();}exports[a448_0x186c8c(0x1ee)]=GetWhatsAppFromMessage,exports[a448_0x186c8c(0x1da)]=ShowMessageService;