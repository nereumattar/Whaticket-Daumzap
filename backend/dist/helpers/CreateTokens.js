const a235_0x4138df=a235_0x30f8;function a235_0x30f8(_0x5480fa,_0x1f26d0){const _0x4494f9=a235_0x310c();return a235_0x30f8=function(_0x23cac9,_0x5e9212){_0x23cac9=_0x23cac9-0x11e;let _0x310cb1=_0x4494f9[_0x23cac9];return _0x310cb1;},a235_0x30f8(_0x5480fa,_0x1f26d0);}(function(_0x32137e,_0x283c79){const _0x2360b7=a235_0x30f8,_0x17769d=_0x32137e();while(!![]){try{const _0x1a9457=-parseInt(_0x2360b7(0x11e))/0x1*(-parseInt(_0x2360b7(0x139))/0x2)+parseInt(_0x2360b7(0x127))/0x3*(parseInt(_0x2360b7(0x12c))/0x4)+parseInt(_0x2360b7(0x128))/0x5+parseInt(_0x2360b7(0x129))/0x6*(-parseInt(_0x2360b7(0x12f))/0x7)+parseInt(_0x2360b7(0x131))/0x8+-parseInt(_0x2360b7(0x132))/0x9*(-parseInt(_0x2360b7(0x130))/0xa)+-parseInt(_0x2360b7(0x135))/0xb;if(_0x1a9457===_0x283c79)break;else _0x17769d['push'](_0x17769d['shift']());}catch(_0x323313){_0x17769d['push'](_0x17769d['shift']());}}}(a235_0x310c,0x28d76));const a235_0x5e9212=(function(){let _0x62c7e1=!![];return function(_0x3849b9,_0x5f068d){const _0x4bc361=_0x62c7e1?function(){const _0x2debd3=a235_0x30f8;if(_0x5f068d){const _0x4f7225=_0x5f068d[_0x2debd3(0x137)](_0x3849b9,arguments);return _0x5f068d=null,_0x4f7225;}}:function(){};return _0x62c7e1=![],_0x4bc361;};}()),a235_0x23cac9=a235_0x5e9212(this,function(){const _0xa9a317=a235_0x30f8;return a235_0x23cac9[_0xa9a317(0x138)]()[_0xa9a317(0x136)](_0xa9a317(0x124))[_0xa9a317(0x138)]()[_0xa9a317(0x122)](a235_0x23cac9)[_0xa9a317(0x136)](_0xa9a317(0x124));});function a235_0x310c(){const _0x3617a2=['224265OwkPNR','1249200LYqjFv','655692rQOuCT','jsonwebtoken','super','4BbAeUe','__importDefault','defineProperty','7KkRavu','10QSLLqg','1387728aJisIF','1857060BHCboN','../config/auth','__esModule','5566088uyiXLy','search','apply','toString','2kLpuTl','companyId','name','78175bucpsH','tokenVersion','sign','default','constructor','profile','(((.+)+)+)+$','createRefreshToken','createAccessToken'];a235_0x310c=function(){return _0x3617a2;};return a235_0x310c();}a235_0x23cac9();'use strict';var __importDefault=this&&this[a235_0x4138df(0x12d)]||function(_0x541f5e){const _0x35105c=a235_0x4138df;return _0x541f5e&&_0x541f5e[_0x35105c(0x134)]?_0x541f5e:{'default':_0x541f5e};};Object[a235_0x4138df(0x12e)](exports,a235_0x4138df(0x134),{'value':!![]}),exports[a235_0x4138df(0x125)]=exports[a235_0x4138df(0x126)]=void 0x0;const jsonwebtoken_1=require(a235_0x4138df(0x12a)),auth_1=__importDefault(require(a235_0x4138df(0x133))),createAccessToken=_0x3597cb=>{const _0x2e4540=a235_0x4138df,{secret:_0x31ec6f,expiresIn:_0x2c958d}=auth_1[_0x2e4540(0x121)];return(0x0,jsonwebtoken_1[_0x2e4540(0x120)])({'username':_0x3597cb[_0x2e4540(0x13b)],'profile':_0x3597cb[_0x2e4540(0x123)],'super':_0x3597cb[_0x2e4540(0x12b)],'id':_0x3597cb['id'],'companyId':_0x3597cb[_0x2e4540(0x13a)]},_0x31ec6f,{'expiresIn':_0x2c958d});};exports[a235_0x4138df(0x126)]=createAccessToken;const createRefreshToken=_0x5dabc0=>{const _0x102041=a235_0x4138df,{refreshSecret:_0x194904,refreshExpiresIn:_0x5e60ef}=auth_1[_0x102041(0x121)];return(0x0,jsonwebtoken_1['sign'])({'id':_0x5dabc0['id'],'tokenVersion':_0x5dabc0[_0x102041(0x11f)],'companyId':_0x5dabc0['companyId']},_0x194904,{'expiresIn':_0x5e60ef});};exports[a235_0x4138df(0x125)]=createRefreshToken;