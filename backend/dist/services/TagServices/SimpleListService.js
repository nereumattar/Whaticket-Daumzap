function a511_0x8a9d(_0x350b20,_0x262b1f){const _0xe72acb=a511_0x58ac();return a511_0x8a9d=function(_0x595a28,_0x28ce68){_0x595a28=_0x595a28-0x9a;let _0x58acad=_0xe72acb[_0x595a28];return _0x58acad;},a511_0x8a9d(_0x350b20,_0x262b1f);}const a511_0x54c288=a511_0x8a9d;(function(_0x43dece,_0x527ff1){const _0x16a81a=a511_0x8a9d,_0x4ac5fa=_0x43dece();while(!![]){try{const _0x122d0b=parseInt(_0x16a81a(0xa0))/0x1+-parseInt(_0x16a81a(0xa8))/0x2*(-parseInt(_0x16a81a(0xa3))/0x3)+-parseInt(_0x16a81a(0xa4))/0x4*(parseInt(_0x16a81a(0xa2))/0x5)+-parseInt(_0x16a81a(0xb2))/0x6+-parseInt(_0x16a81a(0x9c))/0x7*(parseInt(_0x16a81a(0x9e))/0x8)+parseInt(_0x16a81a(0xaf))/0x9*(-parseInt(_0x16a81a(0xa5))/0xa)+parseInt(_0x16a81a(0xaa))/0xb;if(_0x122d0b===_0x527ff1)break;else _0x4ac5fa['push'](_0x4ac5fa['shift']());}catch(_0x315806){_0x4ac5fa['push'](_0x4ac5fa['shift']());}}}(a511_0x58ac,0x927e2));function a511_0x58ac(){const _0x214244=['3InSKnA','3449168jqumfa','10FgrIbc','name','findAll','61554ZJqVZQ','../../models/Tag','22346841VOTJaQ','__esModule','(((.+)+)+)+$','constructor','defineProperty','1566279YiLrcX','ASC','default','2429832uudrcg','__importDefault','sequelize','20083TwwTLd','toString','1720EkgvmA','search','595856kMTbLm','like','5JdwtaO'];a511_0x58ac=function(){return _0x214244;};return a511_0x58ac();}const a511_0x28ce68=(function(){let _0x3ea8ab=!![];return function(_0x1c95c3,_0x5bf56f){const _0x4f6936=_0x3ea8ab?function(){if(_0x5bf56f){const _0x2fb728=_0x5bf56f['apply'](_0x1c95c3,arguments);return _0x5bf56f=null,_0x2fb728;}}:function(){};return _0x3ea8ab=![],_0x4f6936;};}()),a511_0x595a28=a511_0x28ce68(this,function(){const _0x39438b=a511_0x8a9d;return a511_0x595a28[_0x39438b(0x9d)]()[_0x39438b(0x9f)](_0x39438b(0xac))[_0x39438b(0x9d)]()[_0x39438b(0xad)](a511_0x595a28)[_0x39438b(0x9f)]('(((.+)+)+)+$');});a511_0x595a28();'use strict';var __importDefault=this&&this[a511_0x54c288(0x9a)]||function(_0x1b04d3){const _0x3afb64=a511_0x54c288;return _0x1b04d3&&_0x1b04d3[_0x3afb64(0xab)]?_0x1b04d3:{'default':_0x1b04d3};};Object[a511_0x54c288(0xae)](exports,a511_0x54c288(0xab),{'value':!![]});const sequelize_1=require(a511_0x54c288(0x9b)),Tag_1=__importDefault(require(a511_0x54c288(0xa9))),ListService=async({companyId:_0x13684d,searchParam:_0x1fa738})=>{const _0x1ed9d8=a511_0x54c288;let _0xd26a16={};_0x1fa738&&(_0xd26a16={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x1ed9d8(0xa1)]]:'%'+_0x1fa738+'%'}},{'color':{[sequelize_1['Op'][_0x1ed9d8(0xa1)]]:'%'+_0x1fa738+'%'}}]});const _0x403741=await Tag_1[_0x1ed9d8(0xb1)][_0x1ed9d8(0xa7)]({'where':{..._0xd26a16,'companyId':_0x13684d},'order':[[_0x1ed9d8(0xa6),_0x1ed9d8(0xb0)]]});return _0x403741;};exports[a511_0x54c288(0xb1)]=ListService;