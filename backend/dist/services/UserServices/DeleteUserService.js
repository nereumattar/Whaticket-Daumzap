function a535_0x1fd9(){const _0xe1e7c1=['300561yYiXMS','search','24cVkcZy','94713wHcLQz','__esModule','(((.+)+)+)+$','__importDefault','companyId','destroy','tickets','ERR_FORBIDDEN','ERR_NO_USER_DELETE','open','toString','../../helpers/UpdateDeletedUserOpenTicketsStatus','super','178422NbsYBa','length','724239vyWlHk','24VLAWmQ','2587288YKTnJs','defineProperty','findOne','1940162WjMHlw','12jmBcjM','54745JBCIEC','$get','default','../../errors/AppError','apply','10hhMlLf'];a535_0x1fd9=function(){return _0xe1e7c1;};return a535_0x1fd9();}const a535_0x2a85ad=a535_0x3db6;(function(_0x1e1512,_0x6fa82e){const _0x397c55=a535_0x3db6,_0xc8f0db=_0x1e1512();while(!![]){try{const _0x32f035=-parseInt(_0x397c55(0x1a7))/0x1+parseInt(_0x397c55(0x198))/0x2+parseInt(_0x397c55(0x18b))/0x3*(parseInt(_0x397c55(0x19b))/0x4)+parseInt(_0x397c55(0x1a1))/0x5*(-parseInt(_0x397c55(0x1a0))/0x6)+-parseInt(_0x397c55(0x19f))/0x7+parseInt(_0x397c55(0x1a9))/0x8*(parseInt(_0x397c55(0x19a))/0x9)+-parseInt(_0x397c55(0x1a6))/0xa*(-parseInt(_0x397c55(0x19c))/0xb);if(_0x32f035===_0x6fa82e)break;else _0xc8f0db['push'](_0xc8f0db['shift']());}catch(_0x4f3a79){_0xc8f0db['push'](_0xc8f0db['shift']());}}}(a535_0x1fd9,0x25ff1));const a535_0x45bed4=(function(){let _0x425f97=!![];return function(_0x1c570,_0x4d9be0){const _0x923240=_0x425f97?function(){const _0x2c81e0=a535_0x3db6;if(_0x4d9be0){const _0x488339=_0x4d9be0[_0x2c81e0(0x1a5)](_0x1c570,arguments);return _0x4d9be0=null,_0x488339;}}:function(){};return _0x425f97=![],_0x923240;};}()),a535_0x2378e=a535_0x45bed4(this,function(){const _0x5c0534=a535_0x3db6;return a535_0x2378e[_0x5c0534(0x195)]()[_0x5c0534(0x1a8)](_0x5c0534(0x18d))[_0x5c0534(0x195)]()['constructor'](a535_0x2378e)['search'](_0x5c0534(0x18d));});a535_0x2378e();function a535_0x3db6(_0x44bd8c,_0x18ff60){const _0x5aa805=a535_0x1fd9();return a535_0x3db6=function(_0x2378e,_0x45bed4){_0x2378e=_0x2378e-0x18b;let _0x1fd9b2=_0x5aa805[_0x2378e];return _0x1fd9b2;},a535_0x3db6(_0x44bd8c,_0x18ff60);}'use strict';var __importDefault=this&&this[a535_0x2a85ad(0x18e)]||function(_0x2de46c){return _0x2de46c&&_0x2de46c['__esModule']?_0x2de46c:{'default':_0x2de46c};};Object[a535_0x2a85ad(0x19d)](exports,a535_0x2a85ad(0x18c),{'value':!![]});const User_1=__importDefault(require('../../models/User')),AppError_1=__importDefault(require(a535_0x2a85ad(0x1a4))),UpdateDeletedUserOpenTicketsStatus_1=__importDefault(require(a535_0x2a85ad(0x196))),DeleteUserService=async(_0x18f55d,_0x16c6d1)=>{const _0x5897bb=a535_0x2a85ad,_0x376366=await User_1[_0x5897bb(0x1a3)][_0x5897bb(0x19e)]({'where':{'id':_0x18f55d}});if(!_0x376366)throw new AppError_1[(_0x5897bb(0x1a3))]('ERR_NO_USER_FOUND',0x194);const _0x5090c6=await User_1['default']['findByPk'](_0x16c6d1);if(!_0x5090c6)throw new AppError_1[(_0x5897bb(0x1a3))]('ERR_NO_USER_FOUND',0x194);if(!_0x5090c6[_0x5897bb(0x197)]&&_0x376366[_0x5897bb(0x18f)]!==_0x5090c6[_0x5897bb(0x18f)])throw new AppError_1[(_0x5897bb(0x1a3))](_0x5897bb(0x192),0x193);if(_0x376366['super'])throw new AppError_1[(_0x5897bb(0x1a3))](_0x5897bb(0x193),0x193);const _0x2dad9f=await _0x376366[_0x5897bb(0x1a2)](_0x5897bb(0x191),{'where':{'status':_0x5897bb(0x194)}});_0x2dad9f[_0x5897bb(0x199)]>0x0&&await(0x0,UpdateDeletedUserOpenTicketsStatus_1[_0x5897bb(0x1a3)])(_0x2dad9f,_0x376366[_0x5897bb(0x18f)]),await _0x376366[_0x5897bb(0x190)]();};exports['default']=DeleteUserService;