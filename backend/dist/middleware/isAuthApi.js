const a263_0x28d524=a263_0x3e7b;(function(_0x4fac72,_0x4fd1e9){const _0x1f2ab7=a263_0x3e7b,_0xbe47e6=_0x4fac72();while(!![]){try{const _0x5af1ea=-parseInt(_0x1f2ab7(0x9b))/0x1+-parseInt(_0x1f2ab7(0xa4))/0x2*(parseInt(_0x1f2ab7(0xae))/0x3)+parseInt(_0x1f2ab7(0x9e))/0x4*(parseInt(_0x1f2ab7(0xac))/0x5)+-parseInt(_0x1f2ab7(0xa7))/0x6*(parseInt(_0x1f2ab7(0xa1))/0x7)+parseInt(_0x1f2ab7(0xa9))/0x8*(-parseInt(_0x1f2ab7(0x9c))/0x9)+-parseInt(_0x1f2ab7(0x9d))/0xa+-parseInt(_0x1f2ab7(0xa8))/0xb*(-parseInt(_0x1f2ab7(0xa2))/0xc);if(_0x5af1ea===_0x4fd1e9)break;else _0xbe47e6['push'](_0xbe47e6['shift']());}catch(_0x208033){_0xbe47e6['push'](_0xbe47e6['shift']());}}}(a263_0x165d,0x5a624));const a263_0x90d89c=(function(){let _0xd737dd=!![];return function(_0x594f23,_0x395f99){const _0x4520f2=_0xd737dd?function(){const _0x4e35c1=a263_0x3e7b;if(_0x395f99){const _0x595f4b=_0x395f99[_0x4e35c1(0xa5)](_0x594f23,arguments);return _0x395f99=null,_0x595f4b;}}:function(){};return _0xd737dd=![],_0x4520f2;};}()),a263_0x9d65d3=a263_0x90d89c(this,function(){const _0x5e9d3d=a263_0x3e7b;return a263_0x9d65d3[_0x5e9d3d(0xa3)]()['search']('(((.+)+)+)+$')['toString']()[_0x5e9d3d(0xad)](a263_0x9d65d3)[_0x5e9d3d(0x9a)](_0x5e9d3d(0x99));});function a263_0x165d(){const _0x25a824=['ERR_SESSION_EXPIRED','__esModule','3208390CGLzFn','constructor','3NqrBUc','default','__importDefault','(((.+)+)+)+$','search','394479rvkXng','1042425fcccmV','6498410zFyJTB','4xbyVOk','split','../services/SettingServices/ListSettingByValueService','42QWgPGu','13891332QRGkEX','toString','1451194UBWoKM','apply','log','469296CqCMNU','22yFvYPU','24MmCVRV'];a263_0x165d=function(){return _0x25a824;};return a263_0x165d();}a263_0x9d65d3();'use strict';var __importDefault=this&&this[a263_0x28d524(0x98)]||function(_0x3658f3){return _0x3658f3&&_0x3658f3['__esModule']?_0x3658f3:{'default':_0x3658f3};};function a263_0x3e7b(_0x191681,_0x1e74fc){const _0x2d76ef=a263_0x165d();return a263_0x3e7b=function(_0x9d65d3,_0x90d89c){_0x9d65d3=_0x9d65d3-0x97;let _0x165d87=_0x2d76ef[_0x9d65d3];return _0x165d87;},a263_0x3e7b(_0x191681,_0x1e74fc);}Object['defineProperty'](exports,a263_0x28d524(0xab),{'value':!![]});const AppError_1=__importDefault(require('../errors/AppError')),ListSettingByValueService_1=__importDefault(require(a263_0x28d524(0xa0))),isAuthApi=async(_0x12232a,_0x3ae879,_0x11546f)=>{const _0x1332f1=a263_0x28d524,_0x2400d5=_0x12232a['headers']['authorization'];if(!_0x2400d5)throw new AppError_1['default']('ERR_SESSION_EXPIRED',0x191);const [,_0x1c27d8]=_0x2400d5[_0x1332f1(0x9f)]('\x20');try{const _0x47a0b0=await(0x0,ListSettingByValueService_1['default'])(_0x1c27d8);if(!_0x47a0b0)throw new AppError_1[(_0x1332f1(0x97))]('ERR_SESSION_EXPIRED',0x191);if(_0x47a0b0['value']!==_0x1c27d8)throw new AppError_1[(_0x1332f1(0x97))](_0x1332f1(0xaa),0x191);}catch(_0x3e4d7e){console[_0x1332f1(0xa6)](_0x3e4d7e);throw new AppError_1[(_0x1332f1(0x97))]('Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request',0x193);}return _0x11546f();};exports['default']=isAuthApi;