function a380_0x4eee(){const _0x323d53=['constructor','(((.+)+)+)+$','findAndCountAll','sortBy','defineProperty','count','5574yRnrDW','lodash','apply','../../models/User','__importDefault','UNAUTHORIZED','__esModule','639708NOCFWv','1414dDFlFV','../../errors/AppError','ASC','842280awieNu','toString','length','96668IkioLl','1491390crSVlB','default','8234336eSlMgb','../../models/ChatUser','92918VdkIhN','createdAt','../../models/ChatMessage'];a380_0x4eee=function(){return _0x323d53;};return a380_0x4eee();}const a380_0x186abe=a380_0x5a3a;(function(_0x182269,_0x28874d){const _0xd1c775=a380_0x5a3a,_0x1ac893=_0x182269();while(!![]){try{const _0x188bd5=parseInt(_0xd1c775(0xcc))/0x1+-parseInt(_0xd1c775(0xd1))/0x2+-parseInt(_0xd1c775(0xc9))/0x3+-parseInt(_0xd1c775(0xe1))/0x4+-parseInt(_0xd1c775(0xcd))/0x5+parseInt(_0xd1c775(0xda))/0x6*(-parseInt(_0xd1c775(0xc6))/0x7)+parseInt(_0xd1c775(0xcf))/0x8;if(_0x188bd5===_0x28874d)break;else _0x1ac893['push'](_0x1ac893['shift']());}catch(_0xf0fe62){_0x1ac893['push'](_0x1ac893['shift']());}}}(a380_0x4eee,0x2552e));const a380_0x43ad5b=(function(){let _0x1cb1bc=!![];return function(_0x378815,_0x140a91){const _0x1b93dd=_0x1cb1bc?function(){const _0x1d057e=a380_0x5a3a;if(_0x140a91){const _0x2b9723=_0x140a91[_0x1d057e(0xdc)](_0x378815,arguments);return _0x140a91=null,_0x2b9723;}}:function(){};return _0x1cb1bc=![],_0x1b93dd;};}()),a380_0x3604ca=a380_0x43ad5b(this,function(){const _0x128aee=a380_0x5a3a;return a380_0x3604ca[_0x128aee(0xca)]()['search'](_0x128aee(0xd5))[_0x128aee(0xca)]()[_0x128aee(0xd4)](a380_0x3604ca)['search'](_0x128aee(0xd5));});a380_0x3604ca();'use strict';var __importDefault=this&&this[a380_0x186abe(0xde)]||function(_0x380bc4){return _0x380bc4&&_0x380bc4['__esModule']?_0x380bc4:{'default':_0x380bc4};};function a380_0x5a3a(_0x317f79,_0x452bd7){const _0xc939f0=a380_0x4eee();return a380_0x5a3a=function(_0x3604ca,_0x43ad5b){_0x3604ca=_0x3604ca-0xc6;let _0x4eee95=_0xc939f0[_0x3604ca];return _0x4eee95;},a380_0x5a3a(_0x317f79,_0x452bd7);}Object[a380_0x186abe(0xd8)](exports,a380_0x186abe(0xe0),{'value':!![]});const AppError_1=__importDefault(require(a380_0x186abe(0xc7))),ChatMessage_1=__importDefault(require(a380_0x186abe(0xd3))),ChatUser_1=__importDefault(require(a380_0x186abe(0xd0))),User_1=__importDefault(require(a380_0x186abe(0xdd))),lodash_1=require(a380_0x186abe(0xdb)),FindMessages=async({chatId:_0x1bfc2a,ownerId:_0x6ba2cb,pageNumber:pageNumber='1'})=>{const _0x1bd3be=a380_0x186abe,_0x455897=await ChatUser_1[_0x1bd3be(0xce)][_0x1bd3be(0xd9)]({'where':{'chatId':_0x1bfc2a,'userId':_0x6ba2cb}});if(_0x455897===0x0)throw new AppError_1['default'](_0x1bd3be(0xdf),0x190);const _0x30512c=0x14,_0x14e46c=_0x30512c*(+pageNumber-0x1),{count:_0x52500c,rows:_0x52e64b}=await ChatMessage_1['default'][_0x1bd3be(0xd6)]({'where':{'chatId':_0x1bfc2a},'include':[{'model':User_1['default'],'as':'sender','attributes':['id','name']}],'limit':_0x30512c,'offset':_0x14e46c,'order':[[_0x1bd3be(0xd2),'DESC']]}),_0x172d64=_0x52500c>_0x14e46c+_0x52e64b[_0x1bd3be(0xcb)],_0x290f37=(0x0,lodash_1[_0x1bd3be(0xd7)])(_0x52e64b,['id',_0x1bd3be(0xc8)]);return{'records':_0x290f37,'count':_0x52500c,'hasMore':_0x172d64};};exports[a380_0x186abe(0xce)]=FindMessages;