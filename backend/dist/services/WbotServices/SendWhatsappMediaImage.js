const a549_0x2d1fa7=a549_0x3a83;(function(_0x1a7b71,_0x515d99){const _0xcd82a=a549_0x3a83,_0x56a811=_0x1a7b71();while(!![]){try{const _0x26fd8a=parseInt(_0xcd82a(0x1d8))/0x1+parseInt(_0xcd82a(0x1da))/0x2+parseInt(_0xcd82a(0x1db))/0x3+parseInt(_0xcd82a(0x1f8))/0x4*(-parseInt(_0xcd82a(0x1f6))/0x5)+-parseInt(_0xcd82a(0x1e5))/0x6+-parseInt(_0xcd82a(0x1e8))/0x7+parseInt(_0xcd82a(0x1ed))/0x8;if(_0x26fd8a===_0x515d99)break;else _0x56a811['push'](_0x56a811['shift']());}catch(_0x545765){_0x56a811['push'](_0x56a811['shift']());}}}(a549_0x3a19,0xe6274));const a549_0x318087=(function(){let _0x4d4838=!![];return function(_0x4be70e,_0x5faaa0){const _0x17c9e8=_0x4d4838?function(){if(_0x5faaa0){const _0x31ea2d=_0x5faaa0['apply'](_0x4be70e,arguments);return _0x5faaa0=null,_0x31ea2d;}}:function(){};return _0x4d4838=![],_0x17c9e8;};}()),a549_0x1d8971=a549_0x318087(this,function(){const _0xb3dfe5=a549_0x3a83;return a549_0x1d8971[_0xb3dfe5(0x1f7)]()['search'](_0xb3dfe5(0x1e7))[_0xb3dfe5(0x1f7)]()[_0xb3dfe5(0x1ea)](a549_0x1d8971)[_0xb3dfe5(0x1de)](_0xb3dfe5(0x1e7));});a549_0x1d8971();function a549_0x3a83(_0x91d54e,_0x125693){const _0x58af98=a549_0x3a19();return a549_0x3a83=function(_0x1d8971,_0x318087){_0x1d8971=_0x1d8971-0x1d7;let _0x3a198c=_0x58af98[_0x1d8971];return _0x3a198c;},a549_0x3a83(_0x91d54e,_0x125693);}'use strict';var __importDefault=this&&this[a549_0x2d1fa7(0x1e3)]||function(_0x58aa9f){return _0x58aa9f&&_0x58aa9f['__esModule']?_0x58aa9f:{'default':_0x58aa9f};};Object[a549_0x2d1fa7(0x1f4)](exports,a549_0x2d1fa7(0x1d7),{'value':!![]});const AppError_1=__importDefault(require(a549_0x2d1fa7(0x1ef))),GetTicketWbot_1=__importDefault(require(a549_0x2d1fa7(0x1f2))),Mustache_1=__importDefault(require('../../helpers/Mustache')),path_1=__importDefault(require(a549_0x2d1fa7(0x1f5))),fs_1=__importDefault(require('fs')),SendPresenceStatus_1=require('../../helpers/SendPresenceStatus');function makeid(_0x4ff150){const _0xa87b23=a549_0x2d1fa7;var _0x14b678='',_0x5a49b1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',_0x2b7e28=_0x5a49b1[_0xa87b23(0x1f9)];for(var _0x4e976f=0x0;_0x4e976f<_0x4ff150;_0x4e976f++){_0x14b678+=_0x5a49b1[_0xa87b23(0x1e4)](Math[_0xa87b23(0x1f0)](Math[_0xa87b23(0x1f1)]()*_0x2b7e28));}return _0x14b678;}const publicFolder=path_1['default']['resolve'](__dirname,'..','..','..',a549_0x2d1fa7(0x1d9)),SendWhatsAppMediaImage=async({ticket:_0x3431f2,url:_0x4a94fb,caption:_0x239f7f,msdelay:_0x177b8d})=>{const _0x5a210a=a549_0x2d1fa7,_0x47abeb=await(0x0,GetTicketWbot_1['default'])(_0x3431f2),_0x73928d=_0x3431f2[_0x5a210a(0x1e2)][_0x5a210a(0x1eb)]+'@'+(_0x3431f2['isGroup']?_0x5a210a(0x1e1):_0x5a210a(0x1ec));try{await(0x0,SendPresenceStatus_1[_0x5a210a(0x1ee)])(_0x47abeb,_0x73928d,_0x177b8d);const _0x468876=await _0x47abeb[_0x5a210a(0x1dc)](''+_0x73928d,{'image':_0x4a94fb?{'url':_0x4a94fb}:fs_1[_0x5a210a(0x1dd)][_0x5a210a(0x1df)](publicFolder+_0x5a210a(0x1e6)+_0x3431f2[_0x5a210a(0x1f3)]+'/'+_0x239f7f+'-'+makeid(0x5)+_0x5a210a(0x1e9)),'caption':(0x0,Mustache_1[_0x5a210a(0x1dd)])(''+_0x239f7f,_0x3431f2),'mimetype':'image/jpeg'});return _0x468876;}catch(_0x3dc985){throw new AppError_1['default'](_0x5a210a(0x1e0));}};function a549_0x3a19(){const _0x413268=['defineProperty','path','5286425CqHIZZ','toString','4verfiz','length','__esModule','1811228FTNwdN','public','2755352rskHkB','687966kKcdHD','sendMessage','default','search','readFileSync','ERR_SENDING_WAPP_MSG','g.us','contact','__importDefault','charAt','8909136vkEHhe','/company','(((.+)+)+)+$','1456014URvaVF','.png','constructor','number','s.whatsapp.net','2197000xDverN','SendPresenceStatus','../../errors/AppError','floor','random','../../helpers/GetTicketWbot','companyId'];a549_0x3a19=function(){return _0x413268;};return a549_0x3a19();}exports[a549_0x2d1fa7(0x1dd)]=SendWhatsAppMediaImage;