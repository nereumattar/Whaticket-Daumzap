function a35_0x1eaf(){const _0x3004b3=['default','user','3132128iPPTKM','store','ERR_SESSION_EXPIRED','cookies','18046UksMjC','437997uFrZlj','../helpers/SendRefreshToken','20406474SUxIbh','RefreshTokenService','status','send','2NBbCPp','../services/UserServices/AuthUserService','remove','companyId','(((.+)+)+)+$','toString','1918460amwxKN','update','jrt','2248KpAewP','body','email','findByPk','json','company-','../services/AuthServices/RefreshTokenService','search','SendRefreshToken','30tMbWnm','793906JLtCCG','../errors/AppError','570MfehSY','__esModule','__importDefault','18icIfwD','constructor','emit'];a35_0x1eaf=function(){return _0x3004b3;};return a35_0x1eaf();}const a35_0x3282f5=a35_0x59e9;(function(_0x2bcb7c,_0x2eccb4){const _0x1d0883=a35_0x59e9,_0x275710=_0x2bcb7c();while(!![]){try{const _0x3b4c58=-parseInt(_0x1d0883(0x1a2))/0x1*(parseInt(_0x1d0883(0x1b7))/0x2)+-parseInt(_0x1d0883(0x1b1))/0x3+parseInt(_0x1d0883(0x1ac))/0x4+-parseInt(_0x1d0883(0x1a4))/0x5*(-parseInt(_0x1d0883(0x1a1))/0x6)+-parseInt(_0x1d0883(0x1b0))/0x7*(parseInt(_0x1d0883(0x1c0))/0x8)+-parseInt(_0x1d0883(0x1a7))/0x9*(parseInt(_0x1d0883(0x1bd))/0xa)+parseInt(_0x1d0883(0x1b3))/0xb;if(_0x3b4c58===_0x2eccb4)break;else _0x275710['push'](_0x275710['shift']());}catch(_0x197adf){_0x275710['push'](_0x275710['shift']());}}}(a35_0x1eaf,0x90381));const a35_0x5de462=(function(){let _0x2e3ab4=!![];return function(_0x332191,_0x5821d8){const _0x52dac4=_0x2e3ab4?function(){if(_0x5821d8){const _0x1f3244=_0x5821d8['apply'](_0x332191,arguments);return _0x5821d8=null,_0x1f3244;}}:function(){};return _0x2e3ab4=![],_0x52dac4;};}()),a35_0x5cee0f=a35_0x5de462(this,function(){const _0x4fd778=a35_0x59e9;return a35_0x5cee0f[_0x4fd778(0x1bc)]()[_0x4fd778(0x19f)]('(((.+)+)+)+$')[_0x4fd778(0x1bc)]()[_0x4fd778(0x1a8)](a35_0x5cee0f)['search'](_0x4fd778(0x1bb));});a35_0x5cee0f();'use strict';var __importDefault=this&&this[a35_0x3282f5(0x1a6)]||function(_0x1ac501){const _0x19409a=a35_0x3282f5;return _0x1ac501&&_0x1ac501[_0x19409a(0x1a5)]?_0x1ac501:{'default':_0x1ac501};};Object['defineProperty'](exports,a35_0x3282f5(0x1a5),{'value':!![]}),exports[a35_0x3282f5(0x1b9)]=exports['me']=exports[a35_0x3282f5(0x1be)]=exports[a35_0x3282f5(0x1ad)]=void 0x0;const AppError_1=__importDefault(require(a35_0x3282f5(0x1a3))),socket_1=require('../libs/socket'),AuthUserService_1=__importDefault(require(a35_0x3282f5(0x1b8))),SendRefreshToken_1=require(a35_0x3282f5(0x1b2)),RefreshTokenService_1=require(a35_0x3282f5(0x19e)),FindUserFromToken_1=__importDefault(require('../services/AuthServices/FindUserFromToken')),User_1=__importDefault(require('../models/User')),store=async(_0x363f59,_0x84e9fd)=>{const _0x9fc7c7=a35_0x3282f5,{email:_0x24b206,password:_0x56c7d5}=_0x363f59[_0x9fc7c7(0x199)],{token:_0x250021,serializedUser:_0x1b69c3,refreshToken:_0x25c7fc}=await(0x0,AuthUserService_1[_0x9fc7c7(0x1aa)])({'email':_0x24b206,'password':_0x56c7d5});(0x0,SendRefreshToken_1[_0x9fc7c7(0x1a0)])(_0x84e9fd,_0x25c7fc);const _0x87a9ae=(0x0,socket_1['getIO'])();return _0x87a9ae['to'](_0x9fc7c7(0x19d)+_0x1b69c3[_0x9fc7c7(0x1ba)]+'-mainchannel')[_0x9fc7c7(0x1a9)]('company-'+_0x1b69c3['companyId']+'-auth',{'action':_0x9fc7c7(0x1be),'user':{'id':_0x1b69c3['id'],'email':_0x1b69c3[_0x9fc7c7(0x19a)],'companyId':_0x1b69c3[_0x9fc7c7(0x1ba)]}}),_0x84e9fd[_0x9fc7c7(0x1b5)](0xc8)[_0x9fc7c7(0x19c)]({'token':_0x250021,'user':_0x1b69c3});};function a35_0x59e9(_0x5601a5,_0x191c09){const _0x50931d=a35_0x1eaf();return a35_0x59e9=function(_0x5cee0f,_0x5de462){_0x5cee0f=_0x5cee0f-0x199;let _0x1eafa5=_0x50931d[_0x5cee0f];return _0x1eafa5;},a35_0x59e9(_0x5601a5,_0x191c09);}exports[a35_0x3282f5(0x1ad)]=store;const update=async(_0x1fe142,_0x14a7e4)=>{const _0xac0560=a35_0x3282f5,_0x429f08=_0x1fe142[_0xac0560(0x1af)][_0xac0560(0x1bf)];if(!_0x429f08)throw new AppError_1[(_0xac0560(0x1aa))](_0xac0560(0x1ae),0x191);const {user:_0x513f28,newToken:_0x6558ee,refreshToken:_0x4c7c29}=await(0x0,RefreshTokenService_1[_0xac0560(0x1b4)])(_0x14a7e4,_0x429f08);return(0x0,SendRefreshToken_1['SendRefreshToken'])(_0x14a7e4,_0x4c7c29),_0x14a7e4[_0xac0560(0x19c)]({'token':_0x6558ee,'user':_0x513f28});};exports[a35_0x3282f5(0x1be)]=update;const me=async(_0x5068cd,_0x5263e6)=>{const _0x4c0fce=a35_0x3282f5,_0x2accba=_0x5068cd[_0x4c0fce(0x1af)][_0x4c0fce(0x1bf)],_0x25ed81=await(0x0,FindUserFromToken_1[_0x4c0fce(0x1aa)])(_0x2accba),{id:_0x4ac810,profile:_0x5b30e4,super:_0x30c4dc}=_0x25ed81;if(!_0x2accba)throw new AppError_1[(_0x4c0fce(0x1aa))](_0x4c0fce(0x1ae),0x191);return _0x5263e6[_0x4c0fce(0x19c)]({'id':_0x4ac810,'profile':_0x5b30e4,'super':_0x30c4dc});};exports['me']=me;const remove=async(_0x11bba3,_0x40522a)=>{const _0x205411=a35_0x3282f5,{id:_0x4bde1e}=_0x11bba3[_0x205411(0x1ab)],_0x408b74=await User_1[_0x205411(0x1aa)][_0x205411(0x19b)](_0x4bde1e);return await _0x408b74[_0x205411(0x1be)]({'online':![]}),_0x40522a['clearCookie'](_0x205411(0x1bf)),_0x40522a[_0x205411(0x1b6)]();};exports['remove']=remove;