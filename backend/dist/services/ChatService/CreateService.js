function a377_0x4301(){const _0x31e84e=['../../models/ChatUser','search','../../models/Chat','../../models/User','length','create','owner','user','430INOuTH','__esModule','toString','966882wxcqgl','default','766080gIbGNP','__importDefault','907575AeQweq','reload','defineProperty','users','190611zkgCld','2rrTtQB','apply','194776eyfRvr','41967Xrcyzl','52PoWbpC','(((.+)+)+)+$','173040sUEpFO'];a377_0x4301=function(){return _0x31e84e;};return a377_0x4301();}function a377_0x5c94(_0x13f0f6,_0x5b8f12){const _0xa09163=a377_0x4301();return a377_0x5c94=function(_0x58dae6,_0x41b03a){_0x58dae6=_0x58dae6-0x6b;let _0x430109=_0xa09163[_0x58dae6];return _0x430109;},a377_0x5c94(_0x13f0f6,_0x5b8f12);}const a377_0x2b3530=a377_0x5c94;(function(_0x1d57e1,_0x54fba2){const _0x12ec1e=a377_0x5c94,_0x28a20a=_0x1d57e1();while(!![]){try{const _0xa4b012=parseInt(_0x12ec1e(0x80))/0x1*(-parseInt(_0x12ec1e(0x7e))/0x2)+parseInt(_0x12ec1e(0x81))/0x3*(-parseInt(_0x12ec1e(0x82))/0x4)+-parseInt(_0x12ec1e(0x79))/0x5+-parseInt(_0x12ec1e(0x75))/0x6+-parseInt(_0x12ec1e(0x77))/0x7+parseInt(_0x12ec1e(0x84))/0x8+parseInt(_0x12ec1e(0x7d))/0x9*(parseInt(_0x12ec1e(0x72))/0xa);if(_0xa4b012===_0x54fba2)break;else _0x28a20a['push'](_0x28a20a['shift']());}catch(_0x1d0f1b){_0x28a20a['push'](_0x28a20a['shift']());}}}(a377_0x4301,0x194a8));const a377_0x41b03a=(function(){let _0x17d83d=!![];return function(_0x306f01,_0x32967c){const _0x5e144f=_0x17d83d?function(){const _0xe353d9=a377_0x5c94;if(_0x32967c){const _0x18ddc5=_0x32967c[_0xe353d9(0x7f)](_0x306f01,arguments);return _0x32967c=null,_0x18ddc5;}}:function(){};return _0x17d83d=![],_0x5e144f;};}()),a377_0x58dae6=a377_0x41b03a(this,function(){const _0x5d910b=a377_0x5c94;return a377_0x58dae6[_0x5d910b(0x74)]()[_0x5d910b(0x6b)](_0x5d910b(0x83))[_0x5d910b(0x74)]()['constructor'](a377_0x58dae6)['search'](_0x5d910b(0x83));});a377_0x58dae6();'use strict';var __importDefault=this&&this[a377_0x2b3530(0x78)]||function(_0x4ae956){const _0x1ad079=a377_0x2b3530;return _0x4ae956&&_0x4ae956[_0x1ad079(0x73)]?_0x4ae956:{'default':_0x4ae956};};Object[a377_0x2b3530(0x7b)](exports,'__esModule',{'value':!![]});const Chat_1=__importDefault(require(a377_0x2b3530(0x6c))),ChatUser_1=__importDefault(require(a377_0x2b3530(0x85))),User_1=__importDefault(require(a377_0x2b3530(0x6d))),CreateService=async _0x4e7cdb=>{const _0x2759ac=a377_0x2b3530,{ownerId:_0x32bd52,companyId:_0x17c7bb,users:_0x525b5e,title:_0x4d1854}=_0x4e7cdb,_0x3d5606=await Chat_1[_0x2759ac(0x76)][_0x2759ac(0x6f)]({'ownerId':_0x32bd52,'companyId':_0x17c7bb,'title':_0x4d1854});if(Array['isArray'](_0x525b5e)&&_0x525b5e[_0x2759ac(0x6e)]>0x0){await ChatUser_1[_0x2759ac(0x76)]['create']({'chatId':_0x3d5606['id'],'userId':_0x32bd52});for(let _0x1b457e of _0x525b5e){await ChatUser_1[_0x2759ac(0x76)][_0x2759ac(0x6f)]({'chatId':_0x3d5606['id'],'userId':_0x1b457e['id']});}}return await _0x3d5606[_0x2759ac(0x7a)]({'include':[{'model':ChatUser_1[_0x2759ac(0x76)],'as':_0x2759ac(0x7c),'include':[{'model':User_1[_0x2759ac(0x76)],'as':_0x2759ac(0x71)}]},{'model':User_1['default'],'as':_0x2759ac(0x70)}]}),_0x3d5606;};exports['default']=CreateService;