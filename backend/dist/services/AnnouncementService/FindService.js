const a354_0x15b32e=a354_0x4184;function a354_0x3d1d(){const _0x5dd3d9=['(((.+)+)+)+$','175735BTSDQJ','7020207ookfbE','toString','1078566zEWFag','../../models/Announcement','defineProperty','10OAwrqy','53266ZmogBv','8qjXLUH','60770EsuhFC','__esModule','search','apply','488458kjPYom','name','DESC','__importDefault','24dEytfV','company','default','createdAt','88424waLBRm'];a354_0x3d1d=function(){return _0x5dd3d9;};return a354_0x3d1d();}(function(_0x344a5a,_0x42e4fb){const _0x145a7d=a354_0x4184,_0x1f9b67=_0x344a5a();while(!![]){try{const _0x4a4171=-parseInt(_0x145a7d(0x1ee))/0x1+-parseInt(_0x145a7d(0x1f4))/0x2+parseInt(_0x145a7d(0x1e1))/0x3*(-parseInt(_0x145a7d(0x1e5))/0x4)+-parseInt(_0x145a7d(0x1f0))/0x5+-parseInt(_0x145a7d(0x1ea))/0x6+-parseInt(_0x145a7d(0x1e7))/0x7*(-parseInt(_0x145a7d(0x1ef))/0x8)+parseInt(_0x145a7d(0x1e8))/0x9*(parseInt(_0x145a7d(0x1ed))/0xa);if(_0x4a4171===_0x42e4fb)break;else _0x1f9b67['push'](_0x1f9b67['shift']());}catch(_0x2f5a6d){_0x1f9b67['push'](_0x1f9b67['shift']());}}}(a354_0x3d1d,0x21e76));const a354_0x44f323=(function(){let _0x23f00e=!![];return function(_0x2ab854,_0x45dc33){const _0xaed988=_0x23f00e?function(){const _0x47aae3=a354_0x4184;if(_0x45dc33){const _0x3b6ba0=_0x45dc33[_0x47aae3(0x1f3)](_0x2ab854,arguments);return _0x45dc33=null,_0x3b6ba0;}}:function(){};return _0x23f00e=![],_0xaed988;};}()),a354_0x1bc22d=a354_0x44f323(this,function(){const _0x4420ec=a354_0x4184;return a354_0x1bc22d[_0x4420ec(0x1e9)]()[_0x4420ec(0x1f2)](_0x4420ec(0x1e6))[_0x4420ec(0x1e9)]()['constructor'](a354_0x1bc22d)['search'](_0x4420ec(0x1e6));});a354_0x1bc22d();function a354_0x4184(_0x11f9f2,_0x464965){const _0x23a138=a354_0x3d1d();return a354_0x4184=function(_0x1bc22d,_0x44f323){_0x1bc22d=_0x1bc22d-0x1de;let _0x3d1d98=_0x23a138[_0x1bc22d];return _0x3d1d98;},a354_0x4184(_0x11f9f2,_0x464965);}'use strict';var __importDefault=this&&this[a354_0x15b32e(0x1e0)]||function(_0xa65ca8){const _0x3b87b6=a354_0x15b32e;return _0xa65ca8&&_0xa65ca8[_0x3b87b6(0x1f1)]?_0xa65ca8:{'default':_0xa65ca8};};Object[a354_0x15b32e(0x1ec)](exports,a354_0x15b32e(0x1f1),{'value':!![]});const Announcement_1=__importDefault(require(a354_0x15b32e(0x1eb))),Company_1=__importDefault(require('../../models/Company')),FindService=async({companyId:_0x14bf37})=>{const _0x319a6e=a354_0x15b32e,_0x66928f=await Announcement_1[_0x319a6e(0x1e3)]['findAll']({'where':{'companyId':_0x14bf37},'include':[{'model':Company_1[_0x319a6e(0x1e3)],'as':_0x319a6e(0x1e2),'attributes':['id',_0x319a6e(0x1de)]}],'order':[[_0x319a6e(0x1e4),_0x319a6e(0x1df)]]});return _0x66928f;};exports[a354_0x15b32e(0x1e3)]=FindService;