const a259_0x1f0890=a259_0x2a4a;(function(_0x4eae48,_0x26f683){const _0x341c53=a259_0x2a4a,_0x231e38=_0x4eae48();while(!![]){try{const _0x4945ce=-parseInt(_0x341c53(0x113))/0x1*(parseInt(_0x341c53(0x117))/0x2)+-parseInt(_0x341c53(0x115))/0x3*(parseInt(_0x341c53(0x12d))/0x4)+-parseInt(_0x341c53(0x121))/0x5+-parseInt(_0x341c53(0x11f))/0x6*(-parseInt(_0x341c53(0x12b))/0x7)+parseInt(_0x341c53(0x124))/0x8*(-parseInt(_0x341c53(0x11d))/0x9)+parseInt(_0x341c53(0x11c))/0xa*(parseInt(_0x341c53(0x114))/0xb)+parseInt(_0x341c53(0x110))/0xc;if(_0x4945ce===_0x26f683)break;else _0x231e38['push'](_0x231e38['shift']());}catch(_0x100e32){_0x231e38['push'](_0x231e38['shift']());}}}(a259_0x18a5,0xcfb2a));function a259_0x18a5(){const _0x1ce36a=['authorization','replace','headers','(((.+)+)+)+$','37883280bXqVjf','default','../models/User','1gesOKB','15852584UsNrOq','42114rpZYwZ','../errors/AppError','3059656JZKjKr','Bearer\x20','toString','defineProperty','admin','10tPWDPG','2547pRmcoZ','Token\x20inválido','2226myzQOr','user','4593310oOryfR','findOne','constructor','19688EVIwew','../models/Setting','__esModule','apply','__importDefault','search','profile','553ORehKD','log','180JExfQj'];a259_0x18a5=function(){return _0x1ce36a;};return a259_0x18a5();}const a259_0x353957=(function(){let _0x4aefb1=!![];return function(_0xed6bd2,_0x9fb118){const _0x19304f=_0x4aefb1?function(){const _0x98474e=a259_0x2a4a;if(_0x9fb118){const _0x2283da=_0x9fb118[_0x98474e(0x127)](_0xed6bd2,arguments);return _0x9fb118=null,_0x2283da;}}:function(){};return _0x4aefb1=![],_0x19304f;};}()),a259_0x42fe85=a259_0x353957(this,function(){const _0x41f1ec=a259_0x2a4a;return a259_0x42fe85[_0x41f1ec(0x119)]()[_0x41f1ec(0x129)](_0x41f1ec(0x10f))[_0x41f1ec(0x119)]()[_0x41f1ec(0x123)](a259_0x42fe85)[_0x41f1ec(0x129)]('(((.+)+)+)+$');});a259_0x42fe85();function a259_0x2a4a(_0x5f2416,_0x30fc72){const _0x1c73f7=a259_0x18a5();return a259_0x2a4a=function(_0x42fe85,_0x353957){_0x42fe85=_0x42fe85-0x10e;let _0x18a5b8=_0x1c73f7[_0x42fe85];return _0x18a5b8;},a259_0x2a4a(_0x5f2416,_0x30fc72);}'use strict';var __importDefault=this&&this[a259_0x1f0890(0x128)]||function(_0xcd501c){const _0xfe4970=a259_0x1f0890;return _0xcd501c&&_0xcd501c[_0xfe4970(0x126)]?_0xcd501c:{'default':_0xcd501c};};Object[a259_0x1f0890(0x11a)](exports,a259_0x1f0890(0x126),{'value':!![]});const AppError_1=__importDefault(require(a259_0x1f0890(0x116))),User_1=__importDefault(require(a259_0x1f0890(0x112))),Setting_1=__importDefault(require(a259_0x1f0890(0x125))),apiTokenAuth=async(_0x27748f,_0x3246c0,_0xfb92d9)=>{const _0x45d24f=a259_0x1f0890;try{const _0x3a727f=_0x27748f[_0x45d24f(0x10e)][_0x45d24f(0x12e)][_0x45d24f(0x12f)](_0x45d24f(0x118),'');if(!_0x3a727f)return _0xfb92d9();const _0x3019f8=await Setting_1[_0x45d24f(0x111)][_0x45d24f(0x122)]({'where':{'key':'apiToken','value':_0x3a727f}});if(!_0x3019f8)return _0xfb92d9();const _0x21ef39=await User_1[_0x45d24f(0x111)][_0x45d24f(0x122)]({'where':{'profile':_0x45d24f(0x11b),'companyId':_0x3019f8['companyId']}});return _0x21ef39&&(_0x27748f[_0x45d24f(0x120)]={'id':''+_0x21ef39['id'],'profile':_0x21ef39[_0x45d24f(0x12a)],'isSuper':![],'companyId':_0x3019f8['companyId']}),_0xfb92d9();}catch(_0x1909b7){console[_0x45d24f(0x12c)](_0x1909b7);}throw new AppError_1['default'](_0x45d24f(0x11e),0x193);};exports['default']=apiTokenAuth;