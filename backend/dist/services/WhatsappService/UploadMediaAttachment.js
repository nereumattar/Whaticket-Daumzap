const a568_0x32f46d=a568_0x4ebc;(function(_0x459097,_0x56bdfc){const _0x312643=a568_0x4ebc,_0x5de013=_0x459097();while(!![]){try{const _0x5551c8=-parseInt(_0x312643(0x1e8))/0x1+-parseInt(_0x312643(0x1ea))/0x2+-parseInt(_0x312643(0x1d6))/0x3+parseInt(_0x312643(0x1d4))/0x4*(parseInt(_0x312643(0x1ec))/0x5)+-parseInt(_0x312643(0x1f0))/0x6+-parseInt(_0x312643(0x1f3))/0x7+parseInt(_0x312643(0x1ef))/0x8*(parseInt(_0x312643(0x1d7))/0x9);if(_0x5551c8===_0x56bdfc)break;else _0x5de013['push'](_0x5de013['shift']());}catch(_0x1f2017){_0x5de013['push'](_0x5de013['shift']());}}}(a568_0x449f,0x925ab));const a568_0x646eba=(function(){let _0x1e49a3=!![];return function(_0x8041c,_0x2b436d){const _0x351fb3=_0x1e49a3?function(){const _0x1646c6=a568_0x4ebc;if(_0x2b436d){const _0xdc844c=_0x2b436d[_0x1646c6(0x1db)](_0x8041c,arguments);return _0x2b436d=null,_0xdc844c;}}:function(){};return _0x1e49a3=![],_0x351fb3;};}()),a568_0x11d6f7=a568_0x646eba(this,function(){const _0x258a0f=a568_0x4ebc;return a568_0x11d6f7[_0x258a0f(0x1da)]()[_0x258a0f(0x1e3)](_0x258a0f(0x1ee))[_0x258a0f(0x1da)]()[_0x258a0f(0x1d3)](a568_0x11d6f7)[_0x258a0f(0x1e3)](_0x258a0f(0x1ee));});function a568_0x449f(){const _0x40e787=['constructor','69392ezXeLK','Arquivo\x20excluído','668772XtlDNP','20276955zYsCeC','message','unlinkSync','toString','apply','../../errors/AppError','mediaUpload','defineProperty','resolve','deleteMedia','files','default','search','public','../../models/Whatsapp','__importDefault','path','1091146WRMIAN','existsSync','851790MVbgKM','head','165OjyElg','findByPk','(((.+)+)+)+$','8iwiarP','1184772GmnFmx','save','greetingMediaAttachment','2020095TVslwt','Arquivo\x20adicionado!','lodash','status','__esModule'];a568_0x449f=function(){return _0x40e787;};return a568_0x449f();}a568_0x11d6f7();'use strict';var __importDefault=this&&this[a568_0x32f46d(0x1e6)]||function(_0x393255){const _0x9e9d1f=a568_0x32f46d;return _0x393255&&_0x393255[_0x9e9d1f(0x1d2)]?_0x393255:{'default':_0x393255};};Object[a568_0x32f46d(0x1de)](exports,'__esModule',{'value':!![]}),exports['deleteMedia']=exports['mediaUpload']=void 0x0;const lodash_1=require(a568_0x32f46d(0x1f5)),AppError_1=__importDefault(require(a568_0x32f46d(0x1dc))),Whatsapp_1=__importDefault(require(a568_0x32f46d(0x1e5))),path_1=__importDefault(require(a568_0x32f46d(0x1e7))),fs_1=__importDefault(require('fs')),mediaUpload=async(_0xd30526,_0x2d58ce)=>{const _0x315cbd=a568_0x32f46d,{whatsappId:_0x31b722}=_0xd30526['params'],_0x9c8c84=_0xd30526[_0x315cbd(0x1e1)],_0x46aaad=(0x0,lodash_1[_0x315cbd(0x1eb)])(_0x9c8c84);try{const _0x277dbe=await Whatsapp_1['default']['findByPk'](_0x31b722);if(_0x277dbe[_0x315cbd(0x1f2)]){const _0x205ce8=path_1[_0x315cbd(0x1e2)][_0x315cbd(0x1df)](_0x315cbd(0x1e4),_0x277dbe[_0x315cbd(0x1f2)]),_0x5f1b53=fs_1['default']['existsSync'](_0x205ce8);_0x5f1b53&&fs_1[_0x315cbd(0x1e2)][_0x315cbd(0x1d9)](_0x205ce8);}return _0x277dbe['greetingMediaAttachment']=_0x46aaad['filename'],await _0x277dbe[_0x315cbd(0x1f1)](),_0x2d58ce[_0x315cbd(0x1d1)](0xc8)['json']({'mensagem':_0x315cbd(0x1f4)});}catch(_0x25d413){throw new AppError_1[(_0x315cbd(0x1e2))](_0x25d413['message']);}};function a568_0x4ebc(_0x47987a,_0x5cb5ba){const _0x236bf9=a568_0x449f();return a568_0x4ebc=function(_0x11d6f7,_0x646eba){_0x11d6f7=_0x11d6f7-0x1d1;let _0x449f4c=_0x236bf9[_0x11d6f7];return _0x449f4c;},a568_0x4ebc(_0x47987a,_0x5cb5ba);}exports[a568_0x32f46d(0x1dd)]=mediaUpload;const deleteMedia=async(_0x39bc7b,_0x5c0360)=>{const _0x5d0452=a568_0x32f46d,{whatsappId:_0xcd36a4}=_0x39bc7b['params'];try{const _0x13e503=await Whatsapp_1[_0x5d0452(0x1e2)][_0x5d0452(0x1ed)](_0xcd36a4),_0x36fc03=path_1[_0x5d0452(0x1e2)][_0x5d0452(0x1df)](_0x5d0452(0x1e4),_0x13e503[_0x5d0452(0x1f2)]),_0x3cadb4=fs_1[_0x5d0452(0x1e2)][_0x5d0452(0x1e9)](_0x36fc03);return _0x3cadb4&&fs_1[_0x5d0452(0x1e2)]['unlinkSync'](_0x36fc03),_0x13e503[_0x5d0452(0x1f2)]=null,await _0x13e503[_0x5d0452(0x1f1)](),_0x5c0360['send']({'message':_0x5d0452(0x1d5)});}catch(_0xc1ef55){throw new AppError_1[(_0x5d0452(0x1e2))](_0xc1ef55[_0x5d0452(0x1d8)]);}};exports[a568_0x32f46d(0x1e0)]=deleteMedia;