const a402_0x4b9dc4=a402_0x5d10;(function(_0x502d11,_0x3ca34e){const _0x43952a=a402_0x5d10,_0x3f39ec=_0x502d11();while(!![]){try{const _0x468672=-parseInt(_0x43952a(0xc9))/0x1+parseInt(_0x43952a(0xbe))/0x2+parseInt(_0x43952a(0xb8))/0x3*(parseInt(_0x43952a(0xca))/0x4)+-parseInt(_0x43952a(0xc1))/0x5+-parseInt(_0x43952a(0xc3))/0x6*(parseInt(_0x43952a(0xc8))/0x7)+-parseInt(_0x43952a(0xc4))/0x8*(-parseInt(_0x43952a(0xb9))/0x9)+-parseInt(_0x43952a(0xc0))/0xa*(parseInt(_0x43952a(0xb7))/0xb);if(_0x468672===_0x3ca34e)break;else _0x3f39ec['push'](_0x3f39ec['shift']());}catch(_0x504867){_0x3f39ec['push'](_0x3f39ec['shift']());}}}(a402_0x38e9,0xe3f49));const a402_0x580449=(function(){let _0xe86a69=!![];return function(_0x1e64d9,_0x220a9a){const _0x30f8c0=_0xe86a69?function(){const _0x5b855e=a402_0x5d10;if(_0x220a9a){const _0x5d22ff=_0x220a9a[_0x5b855e(0xba)](_0x1e64d9,arguments);return _0x220a9a=null,_0x5d22ff;}}:function(){};return _0xe86a69=![],_0x30f8c0;};}()),a402_0x1c16cf=a402_0x580449(this,function(){const _0x2a3874=a402_0x5d10;return a402_0x1c16cf['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](a402_0x1c16cf)[_0x2a3874(0xaf)](_0x2a3874(0xc7));});a402_0x1c16cf();function a402_0x38e9(){const _0xef2912=['1474363UacEzw','61844oMpCnT','name','search','sequelize','LIKE','LOWER','../../models/ContactListItem','default','trim','like','4547433oFCoux','333NiPDKP','27rfJktJ','apply','col','__esModule','ASC','2808280iaprln','length','10mIfqhA','673995Krqysr','Sequelize','9186864kHDxmX','3645608LuhoVS','toLowerCase','where','(((.+)+)+)+$','7OHwwHN'];a402_0x38e9=function(){return _0xef2912;};return a402_0x38e9();}function a402_0x5d10(_0x314648,_0x2ef03d){const _0x550cb1=a402_0x38e9();return a402_0x5d10=function(_0x1c16cf,_0x580449){_0x1c16cf=_0x1c16cf-0xaf;let _0x38e9b1=_0x550cb1[_0x1c16cf];return _0x38e9b1;},a402_0x5d10(_0x314648,_0x2ef03d);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x181efa){return _0x181efa&&_0x181efa['__esModule']?_0x181efa:{'default':_0x181efa};};Object['defineProperty'](exports,a402_0x4b9dc4(0xbc),{'value':!![]});const sequelize_1=require(a402_0x4b9dc4(0xb0)),ContactListItem_1=__importDefault(require(a402_0x4b9dc4(0xb3))),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x5520ae,contactListId:_0x5400da})=>{const _0x66f291=a402_0x4b9dc4,_0x42cc64={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x66f291(0xc2)][_0x66f291(0xc6)](sequelize_1['Sequelize']['fn'](_0x66f291(0xb2),sequelize_1[_0x66f291(0xc2)][_0x66f291(0xbb)](_0x66f291(0xcb))),_0x66f291(0xb1),'%'+searchParam[_0x66f291(0xc5)]()[_0x66f291(0xb5)]()+'%')},{'number':{[sequelize_1['Op'][_0x66f291(0xb6)]]:'%'+searchParam['toLowerCase']()[_0x66f291(0xb5)]()+'%'}}],'companyId':_0x5520ae,'contactListId':_0x5400da},_0x7ca325=0x14,_0x4f5274=_0x7ca325*(+pageNumber-0x1),{count:_0x51d00a,rows:_0x48d7a7}=await ContactListItem_1['default']['findAndCountAll']({'where':_0x42cc64,'limit':_0x7ca325,'offset':_0x4f5274,'order':[['name',_0x66f291(0xbd)]]}),_0x46b3e3=_0x51d00a>_0x4f5274+_0x48d7a7[_0x66f291(0xbf)];return{'contacts':_0x48d7a7,'count':_0x51d00a,'hasMore':_0x46b3e3};};exports[a402_0x4b9dc4(0xb4)]=ListService;