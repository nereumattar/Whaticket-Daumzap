const a552_0xb221f1=a552_0x1b74;(function(_0x3c13b5,_0x2360b8){const _0x1defb6=a552_0x1b74,_0x4ac801=_0x3c13b5();while(!![]){try{const _0x2255ca=-parseInt(_0x1defb6(0xe6))/0x1*(-parseInt(_0x1defb6(0xe4))/0x2)+parseInt(_0x1defb6(0xf3))/0x3+parseInt(_0x1defb6(0xea))/0x4*(parseInt(_0x1defb6(0x101))/0x5)+parseInt(_0x1defb6(0xfd))/0x6+-parseInt(_0x1defb6(0xe0))/0x7+-parseInt(_0x1defb6(0xe3))/0x8+-parseInt(_0x1defb6(0xeb))/0x9;if(_0x2255ca===_0x2360b8)break;else _0x4ac801['push'](_0x4ac801['shift']());}catch(_0x2cd6f4){_0x4ac801['push'](_0x4ac801['shift']());}}}(a552_0xaf55,0x26aaf));function a552_0xaf55(){const _0x402042=['defineProperty','default','1880772SJUIrV','number','g.us','resolve','10czyryc','.pdf','application/pdf','../../helpers/SendPresenceStatus','companyId','sendMessage','ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789','34916qDsjkW','../../helpers/GetTicketWbot','search','626016ebpgqc','22xxwrsK','length','8861BxjTSJ','contact','toString','SendPresenceStatus','340924ESNAYK','5105970FPfZin','../../errors/AppError','readFileSync','/company','ERR_SENDING_WAPP_MSG','__esModule','(((.+)+)+)+$','charAt','682674RqTQgp','apply','path','isGroup','public','constructor','random','__importDefault'];a552_0xaf55=function(){return _0x402042;};return a552_0xaf55();}const a552_0x575616=(function(){let _0x384e43=!![];return function(_0xd7d80a,_0x1bbf72){const _0x317725=_0x384e43?function(){const _0x587fa5=a552_0x1b74;if(_0x1bbf72){const _0x4a50e0=_0x1bbf72[_0x587fa5(0xf4)](_0xd7d80a,arguments);return _0x1bbf72=null,_0x4a50e0;}}:function(){};return _0x384e43=![],_0x317725;};}()),a552_0x15c256=a552_0x575616(this,function(){const _0x11cbb7=a552_0x1b74;return a552_0x15c256[_0x11cbb7(0xe8)]()[_0x11cbb7(0xe2)](_0x11cbb7(0xf1))['toString']()[_0x11cbb7(0xf8)](a552_0x15c256)[_0x11cbb7(0xe2)](_0x11cbb7(0xf1));});a552_0x15c256();'use strict';var __importDefault=this&&this[a552_0xb221f1(0xfa)]||function(_0x3bae70){const _0x509851=a552_0xb221f1;return _0x3bae70&&_0x3bae70[_0x509851(0xf0)]?_0x3bae70:{'default':_0x3bae70};};function a552_0x1b74(_0x3be291,_0x51144e){const _0x3d67b7=a552_0xaf55();return a552_0x1b74=function(_0x15c256,_0x575616){_0x15c256=_0x15c256-0xda;let _0xaf5534=_0x3d67b7[_0x15c256];return _0xaf5534;},a552_0x1b74(_0x3be291,_0x51144e);}Object[a552_0xb221f1(0xfb)](exports,a552_0xb221f1(0xf0),{'value':!![]});const AppError_1=__importDefault(require(a552_0xb221f1(0xec))),GetTicketWbot_1=__importDefault(require(a552_0xb221f1(0xe1))),fs_1=__importDefault(require('fs')),path_1=__importDefault(require(a552_0xb221f1(0xf5))),SendPresenceStatus_1=require(a552_0xb221f1(0xdc));function makeid(_0x3fa52c){const _0x4b990d=a552_0xb221f1;var _0x20fb70='',_0x1d2e26=_0x4b990d(0xdf),_0x11c2fb=_0x1d2e26[_0x4b990d(0xe5)];for(var _0x22a9fc=0x0;_0x22a9fc<_0x3fa52c;_0x22a9fc++){_0x20fb70+=_0x1d2e26[_0x4b990d(0xf2)](Math['floor'](Math[_0x4b990d(0xf9)]()*_0x11c2fb));}return _0x20fb70;}const publicFolder=path_1[a552_0xb221f1(0xfc)][a552_0xb221f1(0x100)](__dirname,'..','..','..',a552_0xb221f1(0xf7)),SendWhatsAppMessageLink=async({ticket:_0xc17fb9,url:_0x4f3442,caption:_0x583902,msdelay:_0x3cf0c9})=>{const _0x1a659c=a552_0xb221f1,_0x558362=await(0x0,GetTicketWbot_1[_0x1a659c(0xfc)])(_0xc17fb9),_0x20c609=_0xc17fb9[_0x1a659c(0xe7)][_0x1a659c(0xfe)]+'@'+(_0xc17fb9[_0x1a659c(0xf6)]?_0x1a659c(0xff):'s.whatsapp.net');try{await(0x0,SendPresenceStatus_1[_0x1a659c(0xe9)])(_0x558362,_0x20c609,_0x3cf0c9);const _0x182c9f=await _0x558362[_0x1a659c(0xde)](''+_0x20c609,{'document':_0x4f3442?{'url':_0x4f3442}:fs_1[_0x1a659c(0xfc)][_0x1a659c(0xed)](publicFolder+_0x1a659c(0xee)+_0xc17fb9[_0x1a659c(0xdd)]+'/'+_0x583902+'-'+makeid(0x5)+_0x1a659c(0xda)),'fileName':_0x583902,'mimetype':_0x1a659c(0xdb)});return await(0x0,SendPresenceStatus_1['SendPresenceStatus'])(_0x558362,_0x20c609,_0x3cf0c9),_0x182c9f;}catch(_0x5b9e37){throw new AppError_1[(_0x1a659c(0xfc))](_0x1a659c(0xef));}};exports[a552_0xb221f1(0xfc)]=SendWhatsAppMessageLink;