const a415_0x44d07a=a415_0x152d;(function(_0x1d9ec5,_0x2dfba3){const _0x4a6360=a415_0x152d,_0x5e38e4=_0x1d9ec5();while(!![]){try{const _0x2ab45f=-parseInt(_0x4a6360(0x1b9))/0x1*(-parseInt(_0x4a6360(0x1b0))/0x2)+-parseInt(_0x4a6360(0x1af))/0x3+parseInt(_0x4a6360(0x1ba))/0x4*(-parseInt(_0x4a6360(0x1ab))/0x5)+-parseInt(_0x4a6360(0x1ae))/0x6+-parseInt(_0x4a6360(0x1a8))/0x7+-parseInt(_0x4a6360(0x1bc))/0x8*(-parseInt(_0x4a6360(0x1b6))/0x9)+parseInt(_0x4a6360(0x1b4))/0xa;if(_0x2ab45f===_0x2dfba3)break;else _0x5e38e4['push'](_0x5e38e4['shift']());}catch(_0x155111){_0x5e38e4['push'](_0x5e38e4['shift']());}}}(a415_0x59c4,0xf001d));const a415_0x218f65=(function(){let _0x42cd65=!![];return function(_0x4c0036,_0x595aa9){const _0x5b8793=_0x42cd65?function(){const _0x3652c2=a415_0x152d;if(_0x595aa9){const _0x2ad934=_0x595aa9[_0x3652c2(0x1b7)](_0x4c0036,arguments);return _0x595aa9=null,_0x2ad934;}}:function(){};return _0x42cd65=![],_0x5b8793;};}()),a415_0x2e8144=a415_0x218f65(this,function(){const _0x171a6a=a415_0x152d;return a415_0x2e8144[_0x171a6a(0x1b2)]()[_0x171a6a(0x1a9)](_0x171a6a(0x1aa))[_0x171a6a(0x1b2)]()['constructor'](a415_0x2e8144)['search'](_0x171a6a(0x1aa));});a415_0x2e8144();'use strict';function a415_0x152d(_0x10538d,_0x1abfcf){const _0x4277ff=a415_0x59c4();return a415_0x152d=function(_0x2e8144,_0x218f65){_0x2e8144=_0x2e8144-0x1a8;let _0x59c4b9=_0x4277ff[_0x2e8144];return _0x59c4b9;},a415_0x152d(_0x10538d,_0x1abfcf);}var __importDefault=this&&this[a415_0x44d07a(0x1ad)]||function(_0x4230e8){const _0x52616c=a415_0x44d07a;return _0x4230e8&&_0x4230e8[_0x52616c(0x1bb)]?_0x4230e8:{'default':_0x4230e8};};Object[a415_0x44d07a(0x1b8)](exports,a415_0x44d07a(0x1bb),{'value':!![]});function a415_0x59c4(){const _0x1c19da=['7245522CDkwXP','4683660BndMhq','2OLBrKs','../../errors/AppError','toString','default','40691710imQkTa','../../models/Contact','3772287RUYmvb','apply','defineProperty','873034byhyzL','4411356MDsKcL','__esModule','8eNHDWz','ERR_NO_CONTACT_FOUND','3546431bdlytT','search','(((.+)+)+)+$','5hfdATG','destroy','__importDefault'];a415_0x59c4=function(){return _0x1c19da;};return a415_0x59c4();}const Contact_1=__importDefault(require(a415_0x44d07a(0x1b5))),AppError_1=__importDefault(require(a415_0x44d07a(0x1b1))),DeleteAllContactService=async _0x1f36d2=>{const _0x2135b4=a415_0x44d07a;var _0x2dcd8c=await Contact_1['default']['count']({'where':{'companyId':_0x1f36d2}});if(!_0x2dcd8c)throw new AppError_1[(_0x2135b4(0x1b3))](_0x2135b4(0x1bd),0x194);await Contact_1['default'][_0x2135b4(0x1ac)]({'where':{'companyId':_0x1f36d2}});};exports['default']=DeleteAllContactService;