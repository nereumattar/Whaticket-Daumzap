const a377_0x2c2cac=a377_0x4deb;function a377_0x2d62(){const _0x58afd0=['2826632DjvOAk','(((.+)+)+)+$','__importDefault','7255370MtSadO','reload','34092qjMJYb','17224056tzTGmC','725jMdxNJ','toString','search','create','length','3061514tBKJBx','248aWrZMU','../../models/ChatUser','user','owner','users','7BVGFcY','defineProperty','../../models/Chat','1853736dKnLNa','__esModule','constructor','../../models/User','default','3702EmsdpW','11YquuVY'];a377_0x2d62=function(){return _0x58afd0;};return a377_0x2d62();}(function(_0xd742ae,_0x1f3ce5){const _0x4748ad=a377_0x4deb,_0x4667c0=_0xd742ae();while(!![]){try{const _0x496e9b=parseInt(_0x4748ad(0xf9))/0x1+-parseInt(_0x4748ad(0x10c))/0x2+-parseInt(_0x4748ad(0xfe))/0x3*(parseInt(_0x4748ad(0x10d))/0x4)+-parseInt(_0x4748ad(0x107))/0x5*(parseInt(_0x4748ad(0x105))/0x6)+-parseInt(_0x4748ad(0x112))/0x7*(-parseInt(_0x4748ad(0x100))/0x8)+parseInt(_0x4748ad(0x106))/0x9+-parseInt(_0x4748ad(0x103))/0xa*(parseInt(_0x4748ad(0xff))/0xb);if(_0x496e9b===_0x1f3ce5)break;else _0x4667c0['push'](_0x4667c0['shift']());}catch(_0x342b30){_0x4667c0['push'](_0x4667c0['shift']());}}}(a377_0x2d62,0xeb63d));function a377_0x4deb(_0x4ae6b5,_0x391cb8){const _0x1efbe4=a377_0x2d62();return a377_0x4deb=function(_0x5b97b5,_0x419b35){_0x5b97b5=_0x5b97b5-0xf7;let _0x2d626e=_0x1efbe4[_0x5b97b5];return _0x2d626e;},a377_0x4deb(_0x4ae6b5,_0x391cb8);}const a377_0x419b35=(function(){let _0x35d302=!![];return function(_0x6d9ac,_0x27c7ae){const _0x4ca694=_0x35d302?function(){if(_0x27c7ae){const _0x42c097=_0x27c7ae['apply'](_0x6d9ac,arguments);return _0x27c7ae=null,_0x42c097;}}:function(){};return _0x35d302=![],_0x4ca694;};}()),a377_0x5b97b5=a377_0x419b35(this,function(){const _0x1e4f25=a377_0x4deb;return a377_0x5b97b5[_0x1e4f25(0x108)]()[_0x1e4f25(0x109)](_0x1e4f25(0x101))[_0x1e4f25(0x108)]()[_0x1e4f25(0xfb)](a377_0x5b97b5)['search'](_0x1e4f25(0x101));});a377_0x5b97b5();'use strict';var __importDefault=this&&this[a377_0x2c2cac(0x102)]||function(_0x3d56e4){const _0x204e63=a377_0x2c2cac;return _0x3d56e4&&_0x3d56e4[_0x204e63(0xfa)]?_0x3d56e4:{'default':_0x3d56e4};};Object[a377_0x2c2cac(0xf7)](exports,a377_0x2c2cac(0xfa),{'value':!![]});const Chat_1=__importDefault(require(a377_0x2c2cac(0xf8))),ChatUser_1=__importDefault(require(a377_0x2c2cac(0x10e))),User_1=__importDefault(require(a377_0x2c2cac(0xfc))),CreateService=async _0x8b9fe3=>{const _0x56d61b=a377_0x2c2cac,{ownerId:_0x4cc041,companyId:_0x55a101,users:_0x807e9f,title:_0x3de32b}=_0x8b9fe3,_0x5564ba=await Chat_1[_0x56d61b(0xfd)][_0x56d61b(0x10a)]({'ownerId':_0x4cc041,'companyId':_0x55a101,'title':_0x3de32b});if(Array['isArray'](_0x807e9f)&&_0x807e9f[_0x56d61b(0x10b)]>0x0){await ChatUser_1[_0x56d61b(0xfd)][_0x56d61b(0x10a)]({'chatId':_0x5564ba['id'],'userId':_0x4cc041});for(let _0x45883d of _0x807e9f){await ChatUser_1[_0x56d61b(0xfd)][_0x56d61b(0x10a)]({'chatId':_0x5564ba['id'],'userId':_0x45883d['id']});}}return await _0x5564ba[_0x56d61b(0x104)]({'include':[{'model':ChatUser_1[_0x56d61b(0xfd)],'as':_0x56d61b(0x111),'include':[{'model':User_1[_0x56d61b(0xfd)],'as':_0x56d61b(0x10f)}]},{'model':User_1['default'],'as':_0x56d61b(0x110)}]}),_0x5564ba;};exports[a377_0x2c2cac(0xfd)]=CreateService;