const a409_0x4e25cb=a409_0x50b5;function a409_0x2a34(){const _0x1b4585=['length','contacts','116568beEAor','lodash','search','contactsCount','4763316ocVYcZ','ContactList.name','isEmpty','3232710SNjblL','name','findAndCountAll','__importDefault','1300535acycPT','sequelize','23472580Lhvjyc','../../models/ContactListItem','LOWER','col','3astsKw','55802rqIdTq','23UelHRc','__esModule','504RcSRrq','apply','ContactList.id','ASC','../../models/ContactList','toString','LIKE','default','contacts.id','count','8606994bmpKrW','constructor','(((.+)+)+)+$'];a409_0x2a34=function(){return _0x1b4585;};return a409_0x2a34();}(function(_0x41638a,_0x406d88){const _0x4d877b=a409_0x50b5,_0x23c42f=_0x41638a();while(!![]){try{const _0x5558b3=parseInt(_0x4d877b(0xda))/0x1*(parseInt(_0x4d877b(0xd9))/0x2)+-parseInt(_0x4d877b(0xd8))/0x3*(parseInt(_0x4d877b(0xcb))/0x4)+-parseInt(_0x4d877b(0xd2))/0x5+-parseInt(_0x4d877b(0xc2))/0x6+parseInt(_0x4d877b(0xdc))/0x7*(parseInt(_0x4d877b(0xc7))/0x8)+-parseInt(_0x4d877b(0xce))/0x9+parseInt(_0x4d877b(0xd4))/0xa;if(_0x5558b3===_0x406d88)break;else _0x23c42f['push'](_0x23c42f['shift']());}catch(_0x5bca60){_0x23c42f['push'](_0x23c42f['shift']());}}}(a409_0x2a34,0xc1b7c));const a409_0x60d194=(function(){let _0x3224bf=!![];return function(_0x3bbb90,_0x563031){const _0x26b8df=_0x3224bf?function(){const _0x416e00=a409_0x50b5;if(_0x563031){const _0x375bff=_0x563031[_0x416e00(0xdd)](_0x3bbb90,arguments);return _0x563031=null,_0x375bff;}}:function(){};return _0x3224bf=![],_0x26b8df;};}()),a409_0x37eb6c=a409_0x60d194(this,function(){const _0x170593=a409_0x50b5;return a409_0x37eb6c[_0x170593(0xe1)]()[_0x170593(0xc9)](_0x170593(0xc4))[_0x170593(0xe1)]()[_0x170593(0xc3)](a409_0x37eb6c)[_0x170593(0xc9)](_0x170593(0xc4));});a409_0x37eb6c();'use strict';function a409_0x50b5(_0x5543b0,_0x44eb04){const _0x5c6d9c=a409_0x2a34();return a409_0x50b5=function(_0x37eb6c,_0x60d194){_0x37eb6c=_0x37eb6c-0xc2;let _0x2a343a=_0x5c6d9c[_0x37eb6c];return _0x2a343a;},a409_0x50b5(_0x5543b0,_0x44eb04);}var __importDefault=this&&this[a409_0x4e25cb(0xd1)]||function(_0x2f004a){return _0x2f004a&&_0x2f004a['__esModule']?_0x2f004a:{'default':_0x2f004a};};Object['defineProperty'](exports,a409_0x4e25cb(0xdb),{'value':!![]});const sequelize_1=require(a409_0x4e25cb(0xd3)),ContactList_1=__importDefault(require(a409_0x4e25cb(0xe0))),ContactListItem_1=__importDefault(require(a409_0x4e25cb(0xd5))),lodash_1=require(a409_0x4e25cb(0xc8)),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x485100})=>{const _0x4d3be0=a409_0x4e25cb;let _0x401984={'companyId':_0x485100};!(0x0,lodash_1[_0x4d3be0(0xcd)])(searchParam)&&(_0x401984={..._0x401984,[sequelize_1['Op']['or']]:[{'name':(0x0,sequelize_1['where'])((0x0,sequelize_1['fn'])(_0x4d3be0(0xd6),(0x0,sequelize_1[_0x4d3be0(0xd7)])(_0x4d3be0(0xcc))),_0x4d3be0(0xe2),'%'+searchParam['toLowerCase']()['trim']()+'%')}]});const _0x2249b6=0x14,_0x598ed1=_0x2249b6*(+pageNumber-0x1),{count:_0x20181d,rows:_0x5a4c65}=await ContactList_1[_0x4d3be0(0xe3)][_0x4d3be0(0xd0)]({'where':_0x401984,'limit':_0x2249b6,'offset':_0x598ed1,'order':[[_0x4d3be0(0xcf),_0x4d3be0(0xdf)]],'subQuery':![],'include':[{'model':ContactListItem_1[_0x4d3be0(0xe3)],'as':_0x4d3be0(0xc6),'attributes':[],'required':![]}],'attributes':['id','name',[(0x0,sequelize_1['fn'])(_0x4d3be0(0xe5),(0x0,sequelize_1[_0x4d3be0(0xd7)])(_0x4d3be0(0xe4))),_0x4d3be0(0xca)]],'group':[_0x4d3be0(0xde)]}),_0xc95a1=_0x20181d>_0x598ed1+_0x5a4c65[_0x4d3be0(0xc5)];return{'records':_0x5a4c65,'count':_0x20181d,'hasMore':_0xc95a1};};exports[a409_0x4e25cb(0xe3)]=ListService;