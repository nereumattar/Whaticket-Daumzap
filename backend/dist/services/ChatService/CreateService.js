function a377_0x5ef3(_0x85dd38,_0x50d619){const _0xcb49b=a377_0x5747();return a377_0x5ef3=function(_0x19bef2,_0x2cd8c2){_0x19bef2=_0x19bef2-0x163;let _0x5747b6=_0xcb49b[_0x19bef2];return _0x5747b6;},a377_0x5ef3(_0x85dd38,_0x50d619);}const a377_0xd57f49=a377_0x5ef3;(function(_0x75c9fb,_0x538889){const _0x1659b8=a377_0x5ef3,_0xb782d4=_0x75c9fb();while(!![]){try{const _0x445910=-parseInt(_0x1659b8(0x171))/0x1+-parseInt(_0x1659b8(0x173))/0x2*(parseInt(_0x1659b8(0x16d))/0x3)+parseInt(_0x1659b8(0x176))/0x4+-parseInt(_0x1659b8(0x169))/0x5*(-parseInt(_0x1659b8(0x167))/0x6)+-parseInt(_0x1659b8(0x16e))/0x7+-parseInt(_0x1659b8(0x177))/0x8+-parseInt(_0x1659b8(0x165))/0x9*(-parseInt(_0x1659b8(0x17a))/0xa);if(_0x445910===_0x538889)break;else _0xb782d4['push'](_0xb782d4['shift']());}catch(_0x261ad4){_0xb782d4['push'](_0xb782d4['shift']());}}}(a377_0x5747,0x18847));function a377_0x5747(){const _0x5d8a0e=['26263OwUCQp','(((.+)+)+)+$','4oUjvbf','toString','reload','414156cSAfBI','922328CIBIgY','default','../../models/ChatUser','20QBpWrS','defineProperty','constructor','length','__esModule','1432251CGnggP','create','854142DLDJKR','users','5gYsCeF','isArray','search','../../models/Chat','260328LjnClP','1040515NVfPXc','apply','__importDefault'];a377_0x5747=function(){return _0x5d8a0e;};return a377_0x5747();}const a377_0x2cd8c2=(function(){let _0x529cbd=!![];return function(_0x216063,_0x3d94f6){const _0x5edbdc=_0x529cbd?function(){const _0x52bb17=a377_0x5ef3;if(_0x3d94f6){const _0x1b5edf=_0x3d94f6[_0x52bb17(0x16f)](_0x216063,arguments);return _0x3d94f6=null,_0x1b5edf;}}:function(){};return _0x529cbd=![],_0x5edbdc;};}()),a377_0x19bef2=a377_0x2cd8c2(this,function(){const _0x345f82=a377_0x5ef3;return a377_0x19bef2[_0x345f82(0x174)]()[_0x345f82(0x16b)](_0x345f82(0x172))['toString']()[_0x345f82(0x17c)](a377_0x19bef2)[_0x345f82(0x16b)](_0x345f82(0x172));});a377_0x19bef2();'use strict';var __importDefault=this&&this[a377_0xd57f49(0x170)]||function(_0x1362f4){const _0x12f775=a377_0xd57f49;return _0x1362f4&&_0x1362f4[_0x12f775(0x164)]?_0x1362f4:{'default':_0x1362f4};};Object[a377_0xd57f49(0x17b)](exports,a377_0xd57f49(0x164),{'value':!![]});const Chat_1=__importDefault(require(a377_0xd57f49(0x16c))),ChatUser_1=__importDefault(require(a377_0xd57f49(0x179))),User_1=__importDefault(require('../../models/User')),CreateService=async _0x48d51e=>{const _0x305233=a377_0xd57f49,{ownerId:_0x3dc8e2,companyId:_0x5bb5a4,users:_0x533cee,title:_0x29783a}=_0x48d51e,_0x45ffd6=await Chat_1[_0x305233(0x178)][_0x305233(0x166)]({'ownerId':_0x3dc8e2,'companyId':_0x5bb5a4,'title':_0x29783a});if(Array[_0x305233(0x16a)](_0x533cee)&&_0x533cee[_0x305233(0x163)]>0x0){await ChatUser_1['default'][_0x305233(0x166)]({'chatId':_0x45ffd6['id'],'userId':_0x3dc8e2});for(let _0x440e45 of _0x533cee){await ChatUser_1[_0x305233(0x178)][_0x305233(0x166)]({'chatId':_0x45ffd6['id'],'userId':_0x440e45['id']});}}return await _0x45ffd6[_0x305233(0x175)]({'include':[{'model':ChatUser_1[_0x305233(0x178)],'as':_0x305233(0x168),'include':[{'model':User_1[_0x305233(0x178)],'as':'user'}]},{'model':User_1[_0x305233(0x178)],'as':'owner'}]}),_0x45ffd6;};exports['default']=CreateService;