const a536_0x111249=a536_0xb043;(function(_0x5debdb,_0x5e23ce){const _0x21a14c=a536_0xb043,_0x46d4ef=_0x5debdb();while(!![]){try{const _0x44ee73=parseInt(_0x21a14c(0xd1))/0x1*(-parseInt(_0x21a14c(0xbf))/0x2)+parseInt(_0x21a14c(0xc6))/0x3+parseInt(_0x21a14c(0xd0))/0x4+-parseInt(_0x21a14c(0xc7))/0x5+-parseInt(_0x21a14c(0xc8))/0x6*(parseInt(_0x21a14c(0xd6))/0x7)+parseInt(_0x21a14c(0xd9))/0x8*(parseInt(_0x21a14c(0xd3))/0x9)+parseInt(_0x21a14c(0xdd))/0xa;if(_0x44ee73===_0x5e23ce)break;else _0x46d4ef['push'](_0x46d4ef['shift']());}catch(_0x47c7b0){_0x46d4ef['push'](_0x46d4ef['shift']());}}}(a536_0x5559,0x2cd49));const a536_0x4255ae=(function(){let _0x3270cb=!![];return function(_0x50b6c6,_0x1d9e2b){const _0x54b962=_0x3270cb?function(){const _0x28a2b8=a536_0xb043;if(_0x1d9e2b){const _0x378d36=_0x1d9e2b[_0x28a2b8(0xda)](_0x50b6c6,arguments);return _0x1d9e2b=null,_0x378d36;}}:function(){};return _0x3270cb=![],_0x54b962;};}()),a536_0x3063a5=a536_0x4255ae(this,function(){const _0x4aeb3b=a536_0xb043;return a536_0x3063a5[_0x4aeb3b(0xcc)]()[_0x4aeb3b(0xc5)](_0x4aeb3b(0xd8))['toString']()[_0x4aeb3b(0xc9)](a536_0x3063a5)['search'](_0x4aeb3b(0xd8));});function a536_0xb043(_0x42a006,_0x1a0327){const _0x5bb6b1=a536_0x5559();return a536_0xb043=function(_0x3063a5,_0x4255ae){_0x3063a5=_0x3063a5-0xbf;let _0x555909=_0x5bb6b1[_0x3063a5];return _0x555909;},a536_0xb043(_0x42a006,_0x1a0327);}a536_0x3063a5();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3799a6){const _0x56085b=a536_0xb043;return _0x3799a6&&_0x3799a6[_0x56085b(0xd5)]?_0x3799a6:{'default':_0x3799a6};};Object[a536_0x111249(0xde)](exports,'__esModule',{'value':!![]});const User_1=__importDefault(require(a536_0x111249(0xd4))),AppError_1=__importDefault(require(a536_0x111249(0xd2))),UpdateDeletedUserOpenTicketsStatus_1=__importDefault(require(a536_0x111249(0xcb))),DeleteUserService=async(_0x2d7515,_0x4a92e2)=>{const _0x3eff68=a536_0x111249,_0x4f3d9d=await User_1['default'][_0x3eff68(0xcd)]({'where':{'id':_0x2d7515}});if(!_0x4f3d9d)throw new AppError_1['default'](_0x3eff68(0xc0),0x194);const _0x4f25d3=await User_1[_0x3eff68(0xdb)][_0x3eff68(0xca)](_0x4a92e2);if(!_0x4f25d3)throw new AppError_1[(_0x3eff68(0xdb))](_0x3eff68(0xc0),0x194);if(!_0x4f25d3[_0x3eff68(0xc4)]&&_0x4f3d9d[_0x3eff68(0xc1)]!==_0x4f25d3['companyId'])throw new AppError_1[(_0x3eff68(0xdb))](_0x3eff68(0xc2),0x193);if(_0x4f3d9d[_0x3eff68(0xc4)])throw new AppError_1[(_0x3eff68(0xdb))](_0x3eff68(0xd7),0x193);const _0x28115f=await _0x4f3d9d[_0x3eff68(0xce)](_0x3eff68(0xc3),{'where':{'status':_0x3eff68(0xdc)}});_0x28115f[_0x3eff68(0xcf)]>0x0&&await(0x0,UpdateDeletedUserOpenTicketsStatus_1[_0x3eff68(0xdb)])(_0x28115f,_0x4f3d9d['companyId']),await _0x4f3d9d['destroy']();};exports['default']=DeleteUserService;function a536_0x5559(){const _0x1a8c0f=['companyId','ERR_FORBIDDEN','tickets','super','search','698184RsjkfJ','1417620GGBEId','12wILCwE','constructor','findByPk','../../helpers/UpdateDeletedUserOpenTicketsStatus','toString','findOne','$get','length','1027180OXOQdZ','246868gDqpeQ','../../errors/AppError','1899EUeeer','../../models/User','__esModule','627781gUzSUI','ERR_NO_USER_DELETE','(((.+)+)+)+$','11432tPxlAY','apply','default','open','1023410yFdMDl','defineProperty','2RRKUdJ','ERR_NO_USER_FOUND'];a536_0x5559=function(){return _0x1a8c0f;};return a536_0x5559();}