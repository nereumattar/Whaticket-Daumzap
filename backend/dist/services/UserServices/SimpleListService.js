const a537_0x4f5615=a537_0x5c11;(function(_0x394118,_0x378656){const _0x3b51a7=a537_0x5c11,_0x2635e5=_0x394118();while(!![]){try{const _0xa24288=-parseInt(_0x3b51a7(0x17c))/0x1*(parseInt(_0x3b51a7(0x180))/0x2)+parseInt(_0x3b51a7(0x185))/0x3*(-parseInt(_0x3b51a7(0x17f))/0x4)+parseInt(_0x3b51a7(0x18a))/0x5+-parseInt(_0x3b51a7(0x181))/0x6+parseInt(_0x3b51a7(0x188))/0x7*(parseInt(_0x3b51a7(0x18e))/0x8)+parseInt(_0x3b51a7(0x17d))/0x9*(parseInt(_0x3b51a7(0x189))/0xa)+parseInt(_0x3b51a7(0x184))/0xb;if(_0xa24288===_0x378656)break;else _0x2635e5['push'](_0x2635e5['shift']());}catch(_0x246758){_0x2635e5['push'](_0x2635e5['shift']());}}}(a537_0x1b08,0x63ac8));const a537_0x145d5f=(function(){let _0x1b0b16=!![];return function(_0x3a4247,_0x29c028){const _0x4bc24b=_0x1b0b16?function(){const _0x361da3=a537_0x5c11;if(_0x29c028){const _0x5ece39=_0x29c028[_0x361da3(0x17a)](_0x3a4247,arguments);return _0x29c028=null,_0x5ece39;}}:function(){};return _0x1b0b16=![],_0x4bc24b;};}()),a537_0x4dd0c9=a537_0x145d5f(this,function(){const _0x5ee96c=a537_0x5c11;return a537_0x4dd0c9['toString']()['search'](_0x5ee96c(0x192))[_0x5ee96c(0x186)]()['constructor'](a537_0x4dd0c9)[_0x5ee96c(0x18d)](_0x5ee96c(0x192));});a537_0x4dd0c9();'use strict';function a537_0x1b08(){const _0x19f26a=['default','ASC','../../models/Queue','(((.+)+)+)+$','findAll','apply','queues','7nHkozH','11898HThNCy','../../models/User','1368232mmbMyt','60502Xwkmso','3982188KbXTBh','__importDefault','__esModule','184954wovSBE','6yEzDvg','toString','name','112rCxFWo','5150TPRBYy','3666155bpVQJM','ERR_NO_USER_FOUND','ERR_INVALID_COMPANY_ID','search','268480QPHNGf'];a537_0x1b08=function(){return _0x19f26a;};return a537_0x1b08();}var __importDefault=this&&this[a537_0x4f5615(0x182)]||function(_0x2e3f14){const _0x5aad02=a537_0x4f5615;return _0x2e3f14&&_0x2e3f14[_0x5aad02(0x183)]?_0x2e3f14:{'default':_0x2e3f14};};Object['defineProperty'](exports,a537_0x4f5615(0x183),{'value':!![]});const User_1=__importDefault(require(a537_0x4f5615(0x17e))),AppError_1=__importDefault(require('../../errors/AppError')),Queue_1=__importDefault(require(a537_0x4f5615(0x191))),SimpleListService=async({companyId:_0x43238c})=>{const _0x1d3510=a537_0x4f5615;if(!_0x43238c)throw new AppError_1[(_0x1d3510(0x18f))](_0x1d3510(0x18c),0x190);const _0x49a291=await User_1[_0x1d3510(0x18f)][_0x1d3510(0x179)]({'where':{'companyId':_0x43238c},'attributes':[_0x1d3510(0x187),'id','email'],'include':[{'model':Queue_1[_0x1d3510(0x18f)],'as':_0x1d3510(0x17b)}],'order':[['id',_0x1d3510(0x190)]]});if(_0x49a291['length']===0x0)throw new AppError_1[(_0x1d3510(0x18f))](_0x1d3510(0x18b),0x194);return _0x49a291;};function a537_0x5c11(_0x279e3a,_0x3765e){const _0x2c4309=a537_0x1b08();return a537_0x5c11=function(_0x4dd0c9,_0x145d5f){_0x4dd0c9=_0x4dd0c9-0x179;let _0x1b0835=_0x2c4309[_0x4dd0c9];return _0x1b0835;},a537_0x5c11(_0x279e3a,_0x3765e);}exports[a537_0x4f5615(0x18f)]=SimpleListService;