function a534_0x48e5(_0x41d9e5,_0x16297b){const _0x3099d8=a534_0x23d2();return a534_0x48e5=function(_0x282fa1,_0x3a9bff){_0x282fa1=_0x282fa1-0xd5;let _0x23d2cd=_0x3099d8[_0x282fa1];return _0x23d2cd;},a534_0x48e5(_0x41d9e5,_0x16297b);}const a534_0x11e694=a534_0x48e5;(function(_0x166869,_0x459b1a){const _0x52e3f9=a534_0x48e5,_0x2cb8e2=_0x166869();while(!![]){try{const _0x3ef9e4=-parseInt(_0x52e3f9(0xf4))/0x1*(parseInt(_0x52e3f9(0xdb))/0x2)+-parseInt(_0x52e3f9(0xda))/0x3+parseInt(_0x52e3f9(0xeb))/0x4+-parseInt(_0x52e3f9(0xee))/0x5+parseInt(_0x52e3f9(0xe3))/0x6*(-parseInt(_0x52e3f9(0xd8))/0x7)+parseInt(_0x52e3f9(0xe8))/0x8*(-parseInt(_0x52e3f9(0xe7))/0x9)+parseInt(_0x52e3f9(0xdf))/0xa;if(_0x3ef9e4===_0x459b1a)break;else _0x2cb8e2['push'](_0x2cb8e2['shift']());}catch(_0x5e4fb6){_0x2cb8e2['push'](_0x2cb8e2['shift']());}}}(a534_0x23d2,0x20648));const a534_0x3a9bff=(function(){let _0x5981fc=!![];return function(_0x1df378,_0xd6c9f0){const _0x2798a4=_0x5981fc?function(){const _0x8ffc62=a534_0x48e5;if(_0xd6c9f0){const _0x3287fb=_0xd6c9f0[_0x8ffc62(0xe9)](_0x1df378,arguments);return _0xd6c9f0=null,_0x3287fb;}}:function(){};return _0x5981fc=![],_0x2798a4;};}()),a534_0x282fa1=a534_0x3a9bff(this,function(){const _0xda43d9=a534_0x48e5;return a534_0x282fa1[_0xda43d9(0xe5)]()['search']('(((.+)+)+)+$')[_0xda43d9(0xe5)]()['constructor'](a534_0x282fa1)[_0xda43d9(0xd6)](_0xda43d9(0xe1));});a534_0x282fa1();'use strict';function a534_0x23d2(){const _0x1f183d=['6ngrcds','createRefreshToken','toString','split','319860rbRyvL','32DvisQP','apply','../../models/Company','444988RPPTxl','defineProperty','ERR_INVALID_CREDENTIALS','281195iAEPoK','__importDefault','endWork','getMinutes','findOne','SerializeUser','1341vxQJDd','__esModule','../../models/User','search','ERR_OUT_OF_HOURS','296247YPcuAP','createAccessToken','104673KrVxKU','18ikcXIS','default','startWork','../../helpers/CreateTokens','3091130JfNFeE','queues','(((.+)+)+)+$','../../errors/AppError'];a534_0x23d2=function(){return _0x1f183d;};return a534_0x23d2();}var __importDefault=this&&this[a534_0x11e694(0xef)]||function(_0x4f4953){const _0x2ca4ff=a534_0x11e694;return _0x4f4953&&_0x4f4953[_0x2ca4ff(0xf5)]?_0x4f4953:{'default':_0x4f4953};};Object[a534_0x11e694(0xec)](exports,a534_0x11e694(0xf5),{'value':!![]});const User_1=__importDefault(require(a534_0x11e694(0xd5))),AppError_1=__importDefault(require(a534_0x11e694(0xe2))),CreateTokens_1=require(a534_0x11e694(0xde)),SerializeUser_1=require('../../helpers/SerializeUser'),Company_1=__importDefault(require(a534_0x11e694(0xea))),Setting_1=__importDefault(require('../../models/Setting')),AuthUserService=async({email:_0x31f1a0,password:_0x30bc91})=>{const _0x3ff92a=a534_0x11e694,_0x404d07=await User_1[_0x3ff92a(0xdc)][_0x3ff92a(0xf2)]({'where':{'email':_0x31f1a0},'include':[_0x3ff92a(0xe0),{'model':Company_1[_0x3ff92a(0xdc)],'include':[{'model':Setting_1[_0x3ff92a(0xdc)]}]}]});if(!_0x404d07)throw new AppError_1['default'](_0x3ff92a(0xed),0x191);const _0xd8fee7=new Date(),_0x422118=_0xd8fee7['getHours']()*0x3c*0x3c,_0xc4eab8=_0xd8fee7[_0x3ff92a(0xf1)]()*0x3c,_0x5a50fb=_0x422118+_0xc4eab8,_0x2678be=_0x404d07[_0x3ff92a(0xdd)],_0x2c47d4=Number(_0x2678be[_0x3ff92a(0xe6)](':')[0x0])*0x3c*0x3c,_0x3b2631=Number(_0x2678be[_0x3ff92a(0xe6)](':')[0x1])*0x3c,_0x296657=_0x2c47d4+_0x3b2631,_0x3e991f=_0x404d07[_0x3ff92a(0xf0)],_0x120b4d=Number(_0x3e991f[_0x3ff92a(0xe6)](':')[0x0])*0x3c*0x3c,_0x3f6c0e=Number(_0x3e991f[_0x3ff92a(0xe6)](':')[0x1])*0x3c,_0x13315c=_0x120b4d+_0x3f6c0e;if(_0x5a50fb<_0x296657||_0x5a50fb>_0x13315c)throw new AppError_1[(_0x3ff92a(0xdc))](_0x3ff92a(0xd7),0x191);if(!await _0x404d07['checkPassword'](_0x30bc91))throw new AppError_1[(_0x3ff92a(0xdc))](_0x3ff92a(0xed),0x191);await _0x404d07['incrementTokenVersion']();const _0x2b2af3=(0x0,CreateTokens_1[_0x3ff92a(0xd9)])(_0x404d07),_0x13e3f4=(0x0,CreateTokens_1[_0x3ff92a(0xe4)])(_0x404d07),_0x377192=await(0x0,SerializeUser_1[_0x3ff92a(0xf3)])(_0x404d07);return{'serializedUser':_0x377192,'token':_0x2b2af3,'refreshToken':_0x13e3f4};};exports[a534_0x11e694(0xdc)]=AuthUserService;