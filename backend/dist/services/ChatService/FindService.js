const a381_0x53670a=a381_0x36ef;(function(_0x5de1d3,_0x49960c){const _0x5c637c=a381_0x36ef,_0x4708a2=_0x5de1d3();while(!![]){try{const _0xbb2109=-parseInt(_0x5c637c(0x1e0))/0x1+parseInt(_0x5c637c(0x1e7))/0x2*(-parseInt(_0x5c637c(0x1e1))/0x3)+-parseInt(_0x5c637c(0x1e2))/0x4+parseInt(_0x5c637c(0x1eb))/0x5+parseInt(_0x5c637c(0x1ea))/0x6+-parseInt(_0x5c637c(0x1e4))/0x7*(-parseInt(_0x5c637c(0x1e5))/0x8)+-parseInt(_0x5c637c(0x1dd))/0x9*(parseInt(_0x5c637c(0x1e8))/0xa);if(_0xbb2109===_0x49960c)break;else _0x4708a2['push'](_0x4708a2['shift']());}catch(_0x37d1fe){_0x4708a2['push'](_0x4708a2['shift']());}}}(a381_0x4eb1,0x95f6d));const a381_0x2dac40=(function(){let _0x438cfc=!![];return function(_0x20041c,_0x397848){const _0x2f9792=_0x438cfc?function(){if(_0x397848){const _0xcbbd84=_0x397848['apply'](_0x20041c,arguments);return _0x397848=null,_0xcbbd84;}}:function(){};return _0x438cfc=![],_0x2f9792;};}()),a381_0x3774ae=a381_0x2dac40(this,function(){const _0xafa2c4=a381_0x36ef;return a381_0x3774ae[_0xafa2c4(0x1e6)]()['search']('(((.+)+)+)+$')[_0xafa2c4(0x1e6)]()['constructor'](a381_0x3774ae)[_0xafa2c4(0x1e3)](_0xafa2c4(0x1dc));});function a381_0x36ef(_0x2e37b7,_0x100cf5){const _0x2624dc=a381_0x4eb1();return a381_0x36ef=function(_0x3774ae,_0x2dac40){_0x3774ae=_0x3774ae-0x1d9;let _0x4eb135=_0x2624dc[_0x3774ae];return _0x4eb135;},a381_0x36ef(_0x2e37b7,_0x100cf5);}a381_0x3774ae();function a381_0x4eb1(){const _0x17874c=['8029mzKxAj','616XTBkgY','toString','245886qtjWnG','762100HExQfP','company','6197010UGZpAr','6139075ympBFY','default','findAll','../../models/Company','__esModule','../../models/User','defineProperty','name','(((.+)+)+)+$','9naMtEG','__importDefault','createdAt','1103639pGOPlg','3pvXNeV','1727696YRytnM','search'];a381_0x4eb1=function(){return _0x17874c;};return a381_0x4eb1();}'use strict';var __importDefault=this&&this[a381_0x53670a(0x1de)]||function(_0x237fac){const _0x1663d4=a381_0x53670a;return _0x237fac&&_0x237fac[_0x1663d4(0x1ef)]?_0x237fac:{'default':_0x237fac};};Object[a381_0x53670a(0x1da)](exports,a381_0x53670a(0x1ef),{'value':!![]});const Chat_1=__importDefault(require('../../models/Chat')),Company_1=__importDefault(require(a381_0x53670a(0x1ee))),User_1=__importDefault(require(a381_0x53670a(0x1d9))),FindService=async({ownerId:_0x554b93,companyId:_0x2c6715})=>{const _0xb0e8f6=a381_0x53670a,_0x130562=await Chat_1[_0xb0e8f6(0x1ec)][_0xb0e8f6(0x1ed)]({'where':{'ownerId':_0x554b93,'companyId':_0x2c6715},'include':[{'model':Company_1[_0xb0e8f6(0x1ec)],'as':_0xb0e8f6(0x1e9),'attributes':['id',_0xb0e8f6(0x1db)]},{'model':User_1['default'],'as':'owner','attributes':['id',_0xb0e8f6(0x1db)]}],'order':[[_0xb0e8f6(0x1df),'DESC']]});return _0x130562;};exports['default']=FindService;