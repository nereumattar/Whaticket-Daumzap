function a411_0x5458(){const _0x4149ac=['18uHwFmw','ContactList.name','1lqLrxI','toLowerCase','default','search','length','3010716eQokxT','../../models/ContactListItem','col','(((.+)+)+)+$','18lIkfoq','LOWER','count','where','__esModule','isEmpty','LIKE','2809860msrTDu','120OVDkPl','constructor','4163370YuTyOu','contacts','../../models/ContactList','defineProperty','351757sGcbXv','330473bhQumu','sequelize','491812krWWEZ','toString','apply','lodash','1690160kfdXhc'];a411_0x5458=function(){return _0x4149ac;};return a411_0x5458();}const a411_0x2ad759=a411_0x2a01;(function(_0x389465,_0x29e0bf){const _0x268305=a411_0x2a01,_0x5d4300=_0x389465();while(!![]){try{const _0x116fce=-parseInt(_0x268305(0x98))/0x1*(-parseInt(_0x268305(0xb2))/0x2)+parseInt(_0x268305(0xab))/0x3+parseInt(_0x268305(0x9d))/0x4+-parseInt(_0x268305(0xa8))/0x5+parseInt(_0x268305(0x96))/0x6*(-parseInt(_0x268305(0xaf))/0x7)+parseInt(_0x268305(0x95))/0x8*(-parseInt(_0x268305(0xa1))/0x9)+-parseInt(_0x268305(0xa9))/0xa*(parseInt(_0x268305(0xb0))/0xb);if(_0x116fce===_0x29e0bf)break;else _0x5d4300['push'](_0x5d4300['shift']());}catch(_0x36491e){_0x5d4300['push'](_0x5d4300['shift']());}}}(a411_0x5458,0xd96e2));const a411_0x416f9a=(function(){let _0x6cc2b9=!![];return function(_0x21a95e,_0x4b4617){const _0x37b3e2=_0x6cc2b9?function(){const _0x1d9cf9=a411_0x2a01;if(_0x4b4617){const _0x5df245=_0x4b4617[_0x1d9cf9(0xb4)](_0x21a95e,arguments);return _0x4b4617=null,_0x5df245;}}:function(){};return _0x6cc2b9=![],_0x37b3e2;};}()),a411_0x5952db=a411_0x416f9a(this,function(){const _0x1b7be9=a411_0x2a01;return a411_0x5952db[_0x1b7be9(0xb3)]()['search'](_0x1b7be9(0xa0))['toString']()[_0x1b7be9(0xaa)](a411_0x5952db)[_0x1b7be9(0x9b)]('(((.+)+)+)+$');});function a411_0x2a01(_0x405ba1,_0x479dcc){const _0x138f8c=a411_0x5458();return a411_0x2a01=function(_0x5952db,_0x416f9a){_0x5952db=_0x5952db-0x94;let _0x545843=_0x138f8c[_0x5952db];return _0x545843;},a411_0x2a01(_0x405ba1,_0x479dcc);}a411_0x5952db();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5b62ac){const _0x4e0fd3=a411_0x2a01;return _0x5b62ac&&_0x5b62ac[_0x4e0fd3(0xa5)]?_0x5b62ac:{'default':_0x5b62ac};};Object[a411_0x2ad759(0xae)](exports,a411_0x2ad759(0xa5),{'value':!![]});const sequelize_1=require(a411_0x2ad759(0xb1)),ContactList_1=__importDefault(require(a411_0x2ad759(0xad))),ContactListItem_1=__importDefault(require(a411_0x2ad759(0x9e))),lodash_1=require(a411_0x2ad759(0x94)),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0xf5053b})=>{const _0xe3da74=a411_0x2ad759;let _0x5a2a85={'companyId':_0xf5053b};!(0x0,lodash_1[_0xe3da74(0xa6)])(searchParam)&&(_0x5a2a85={..._0x5a2a85,[sequelize_1['Op']['or']]:[{'name':(0x0,sequelize_1[_0xe3da74(0xa4)])((0x0,sequelize_1['fn'])(_0xe3da74(0xa2),(0x0,sequelize_1[_0xe3da74(0x9f)])(_0xe3da74(0x97))),_0xe3da74(0xa7),'%'+searchParam[_0xe3da74(0x99)]()['trim']()+'%')}]});const _0x587c12=0x14,_0x169e3f=_0x587c12*(+pageNumber-0x1),{count:_0x114471,rows:_0x5103c9}=await ContactList_1['default']['findAndCountAll']({'where':_0x5a2a85,'limit':_0x587c12,'offset':_0x169e3f,'order':[['name','ASC']],'subQuery':![],'include':[{'model':ContactListItem_1[_0xe3da74(0x9a)],'as':_0xe3da74(0xac),'attributes':[],'required':![]}],'attributes':['id','name',[(0x0,sequelize_1['fn'])(_0xe3da74(0xa3),(0x0,sequelize_1['col'])('contacts.id')),'contactsCount']],'group':['ContactList.id']}),_0x452f9b=_0x114471>_0x169e3f+_0x5103c9[_0xe3da74(0x9c)];return{'records':_0x5103c9,'count':_0x114471,'hasMore':_0x452f9b};};exports[a411_0x2ad759(0x9a)]=ListService;