function a359_0x4c88(_0x167a55,_0x232da3){const _0x2c5ffd=a359_0x5d8a();return a359_0x4c88=function(_0x8b3134,_0x3b0ef3){_0x8b3134=_0x8b3134-0x1b7;let _0x5d8aee=_0x2c5ffd[_0x8b3134];return _0x5d8aee;},a359_0x4c88(_0x167a55,_0x232da3);}const a359_0x2b4b4a=a359_0x4c88;(function(_0x1fb57a,_0x88b716){const _0x14bf1a=a359_0x4c88,_0x384430=_0x1fb57a();while(!![]){try{const _0x505307=parseInt(_0x14bf1a(0x1be))/0x1+-parseInt(_0x14bf1a(0x1cc))/0x2*(parseInt(_0x14bf1a(0x1c0))/0x3)+-parseInt(_0x14bf1a(0x1b9))/0x4+-parseInt(_0x14bf1a(0x1c2))/0x5+parseInt(_0x14bf1a(0x1ce))/0x6*(parseInt(_0x14bf1a(0x1bb))/0x7)+-parseInt(_0x14bf1a(0x1bd))/0x8*(parseInt(_0x14bf1a(0x1c9))/0x9)+parseInt(_0x14bf1a(0x1c6))/0xa*(parseInt(_0x14bf1a(0x1cb))/0xb);if(_0x505307===_0x88b716)break;else _0x384430['push'](_0x384430['shift']());}catch(_0x401f40){_0x384430['push'](_0x384430['shift']());}}}(a359_0x5d8a,0x88561));const a359_0x3b0ef3=(function(){let _0x4c1b6e=!![];return function(_0x1f86c4,_0x1a2b5f){const _0xea37c=_0x4c1b6e?function(){if(_0x1a2b5f){const _0x44bce2=_0x1a2b5f['apply'](_0x1f86c4,arguments);return _0x1a2b5f=null,_0x44bce2;}}:function(){};return _0x4c1b6e=![],_0xea37c;};}()),a359_0x8b3134=a359_0x3b0ef3(this,function(){const _0x3e5524=a359_0x4c88;return a359_0x8b3134[_0x3e5524(0x1c4)]()[_0x3e5524(0x1cd)]('(((.+)+)+)+$')[_0x3e5524(0x1c4)]()[_0x3e5524(0x1c3)](a359_0x8b3134)[_0x3e5524(0x1cd)](_0x3e5524(0x1bc));});a359_0x8b3134();'use strict';var __importDefault=this&&this[a359_0x2b4b4a(0x1ba)]||function(_0x4c95af){const _0x54923a=a359_0x2b4b4a;return _0x4c95af&&_0x4c95af[_0x54923a(0x1c5)]?_0x4c95af:{'default':_0x4c95af};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a359_0x2b4b4a(0x1c8)]=void 0x0;const jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require(a359_0x2b4b4a(0x1c1))),ShowUserService_1=__importDefault(require('../UserServices/ShowUserService')),auth_1=__importDefault(require(a359_0x2b4b4a(0x1b7))),CreateTokens_1=require('../../helpers/CreateTokens'),RefreshTokenService=async(_0x3fc7de,_0x5cc0fd)=>{const _0x553ec5=a359_0x2b4b4a;try{const _0x1604b5=(0x0,jsonwebtoken_1[_0x553ec5(0x1bf)])(_0x5cc0fd,auth_1[_0x553ec5(0x1c7)]['refreshSecret']),{id:_0x2cf154,tokenVersion:_0x300af6,companyId:_0x3e53f2}=_0x1604b5,_0x41adc0=await(0x0,ShowUserService_1[_0x553ec5(0x1c7)])(_0x2cf154),_0x1c9fcd=(0x0,CreateTokens_1[_0x553ec5(0x1b8)])(_0x41adc0),_0x1747f0=(0x0,CreateTokens_1[_0x553ec5(0x1ca)])(_0x41adc0);return{'user':_0x41adc0,'newToken':_0x1c9fcd,'refreshToken':_0x1747f0};}catch(_0x30d596){console['log'](_0x30d596),_0x3fc7de['clearCookie']('jrt');throw new AppError_1['default']('ERR_SESSION_EXPIRED',0x191);}};exports[a359_0x2b4b4a(0x1c8)]=RefreshTokenService;function a359_0x5d8a(){const _0x1a5b6c=['__importDefault','7wXoZJF','(((.+)+)+)+$','178624jNOvDK','755969OTowYl','verify','99hHKGXU','../../errors/AppError','2906050BiEyNg','constructor','toString','__esModule','2590IYqMRk','default','RefreshTokenService','189myYjTt','createRefreshToken','76307CLEmKZ','5926rfiZRI','search','1269948veisjN','../../config/auth','createAccessToken','4232000ejQQZG'];a359_0x5d8a=function(){return _0x1a5b6c;};return a359_0x5d8a();}