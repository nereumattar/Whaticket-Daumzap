const a541_0x1ecfcc=a541_0x1ed8;(function(_0x5181f4,_0x3dbaaa){const _0x9fc965=a541_0x1ed8,_0x542bca=_0x5181f4();while(!![]){try{const _0x41012b=parseInt(_0x9fc965(0xcb))/0x1*(parseInt(_0x9fc965(0xc0))/0x2)+-parseInt(_0x9fc965(0xcd))/0x3*(parseInt(_0x9fc965(0xd3))/0x4)+-parseInt(_0x9fc965(0xcf))/0x5+parseInt(_0x9fc965(0xd5))/0x6+-parseInt(_0x9fc965(0xd1))/0x7+parseInt(_0x9fc965(0xcc))/0x8+parseInt(_0x9fc965(0xce))/0x9;if(_0x41012b===_0x3dbaaa)break;else _0x542bca['push'](_0x542bca['shift']());}catch(_0x592fc9){_0x542bca['push'](_0x542bca['shift']());}}}(a541_0x33b8,0xe4d40));function a541_0x1ed8(_0x4ee936,_0x24b5ba){const _0x59b76c=a541_0x33b8();return a541_0x1ed8=function(_0xc34775,_0xaa70f0){_0xc34775=_0xc34775-0xc0;let _0x33b8f3=_0x59b76c[_0xc34775];return _0x33b8f3;},a541_0x1ed8(_0x4ee936,_0x24b5ba);}const a541_0xaa70f0=(function(){let _0x3ba6ff=!![];return function(_0x18c256,_0x3ea650){const _0x259954=_0x3ba6ff?function(){if(_0x3ea650){const _0x1b31cd=_0x3ea650['apply'](_0x18c256,arguments);return _0x3ea650=null,_0x1b31cd;}}:function(){};return _0x3ba6ff=![],_0x259954;};}()),a541_0xc34775=a541_0xaa70f0(this,function(){const _0x171008=a541_0x1ed8;return a541_0xc34775[_0x171008(0xc5)]()[_0x171008(0xca)](_0x171008(0xc8))[_0x171008(0xc5)]()[_0x171008(0xd4)](a541_0xc34775)[_0x171008(0xca)](_0x171008(0xc8));});a541_0xc34775();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x6bf0f5){const _0x32f52d=a541_0x1ed8;return _0x6bf0f5&&_0x6bf0f5[_0x32f52d(0xd0)]?_0x6bf0f5:{'default':_0x6bf0f5};};Object[a541_0x1ecfcc(0xc7)](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),GetTicketWbot_1=__importDefault(require('../../helpers/GetTicketWbot')),GetWbotMessage_1=__importDefault(require(a541_0x1ecfcc(0xc6))),Message_1=__importDefault(require(a541_0x1ecfcc(0xc2))),Ticket_1=__importDefault(require(a541_0x1ecfcc(0xc1))),DeleteWhatsAppMessage=async _0x28af07=>{const _0x528782=a541_0x1ecfcc,_0x6801ac=await Message_1[_0x528782(0xc4)]['findOne']({'where':{'id':_0x28af07},'include':[{'model':Ticket_1[_0x528782(0xc4)],'as':'ticket','include':[_0x528782(0xd6)]}]});if(!_0x6801ac)throw new AppError_1[(_0x528782(0xc4))](_0x528782(0xc3));const {ticket:_0x4d25d2}=_0x6801ac,_0x13dc8a=await(0x0,GetWbotMessage_1[_0x528782(0xc4)])(_0x4d25d2,_0x28af07);try{const _0x772529=await(0x0,GetTicketWbot_1[_0x528782(0xc4)])(_0x4d25d2),_0xa85563=_0x13dc8a,_0x2861bc=_0x13dc8a;await _0x772529['sendMessage'](_0x2861bc[_0x528782(0xd2)],{'delete':{'id':_0x2861bc['id'],'remoteJid':_0x2861bc[_0x528782(0xd2)],'participant':_0x2861bc[_0x528782(0xc9)],'fromMe':_0x2861bc['fromMe']}});}catch(_0x2d589b){throw new AppError_1['default']('ERR_DELETE_WAPP_MSG');}return _0x6801ac;};exports[a541_0x1ecfcc(0xc4)]=DeleteWhatsAppMessage;function a541_0x33b8(){const _0x339d9e=['20985849WIrzLR','5743960DndwpI','__esModule','9872016eCVEdT','remoteJid','1227064OLKDJo','constructor','1556082yDcqqB','contact','2441900hoxftZ','../../models/Ticket','../../models/Message','No\x20message\x20found\x20with\x20this\x20ID.','default','toString','../../helpers/GetWbotMessage','defineProperty','(((.+)+)+)+$','participant','search','1yMqxKe','4836800zAubXj','9QUCZkC'];a541_0x33b8=function(){return _0x339d9e;};return a541_0x33b8();}