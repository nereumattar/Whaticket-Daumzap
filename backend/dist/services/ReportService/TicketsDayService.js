function a490_0x298e(_0x1acdf8,_0x515732){const _0x2dc248=a490_0x3bc6();return a490_0x298e=function(_0x3dae1c,_0xe7110d){_0x3dae1c=_0x3dae1c-0x1ea;let _0x3bc691=_0x2dc248[_0x3dae1c];return _0x3bc691;},a490_0x298e(_0x1acdf8,_0x515732);}const a490_0x80e4d1=a490_0x298e;(function(_0x2d24a5,_0x19fa36){const _0x44a6d9=a490_0x298e,_0x348255=_0x2d24a5();while(!![]){try{const _0x568f5c=-parseInt(_0x44a6d9(0x205))/0x1*(-parseInt(_0x44a6d9(0x203))/0x2)+parseInt(_0x44a6d9(0x209))/0x3*(parseInt(_0x44a6d9(0x1ec))/0x4)+-parseInt(_0x44a6d9(0x1f3))/0x5*(parseInt(_0x44a6d9(0x1f8))/0x6)+parseInt(_0x44a6d9(0x1f4))/0x7+-parseInt(_0x44a6d9(0x20e))/0x8*(-parseInt(_0x44a6d9(0x1f5))/0x9)+parseInt(_0x44a6d9(0x1f1))/0xa*(parseInt(_0x44a6d9(0x1eb))/0xb)+-parseInt(_0x44a6d9(0x20b))/0xc*(parseInt(_0x44a6d9(0x202))/0xd);if(_0x568f5c===_0x19fa36)break;else _0x348255['push'](_0x348255['shift']());}catch(_0x2d2a67){_0x348255['push'](_0x348255['shift']());}}}(a490_0x3bc6,0x5f288));const a490_0xe7110d=(function(){let _0x26c3a5=!![];return function(_0x48c179,_0x1bb5f5){const _0x1517ea=_0x26c3a5?function(){const _0x4bb67e=a490_0x298e;if(_0x1bb5f5){const _0x44ceab=_0x1bb5f5[_0x4bb67e(0x210)](_0x48c179,arguments);return _0x1bb5f5=null,_0x44ceab;}}:function(){};return _0x26c3a5=![],_0x1517ea;};}()),a490_0x3dae1c=a490_0xe7110d(this,function(){const _0x2907fa=a490_0x298e;return a490_0x3dae1c['toString']()['search'](_0x2907fa(0x208))[_0x2907fa(0x20a)]()['constructor'](a490_0x3dae1c)[_0x2907fa(0x200)](_0x2907fa(0x208));});a490_0x3dae1c();'use strict';var __importDefault=this&&this[a490_0x80e4d1(0x1fc)]||function(_0x43cde5){return _0x43cde5&&_0x43cde5['__esModule']?_0x43cde5:{'default':_0x43cde5};};Object['defineProperty'](exports,a490_0x80e4d1(0x20f),{'value':!![]});const sequelize_1=require(a490_0x80e4d1(0x1f9)),TicketTraking_1=__importDefault(require(a490_0x80e4d1(0x1ea))),sequelize_typescript_1=require(a490_0x80e4d1(0x207)),moment_1=__importDefault(require(a490_0x80e4d1(0x1ef))),TicketsDayService=async({companyId:_0x133d67,dateStart:_0x2bbe3c,dateEnd:_0xe38cda})=>{const _0x26e6ff=a490_0x80e4d1;var _0xacb68b,_0x2e460e={'where':{'companyId':_0x133d67,'createdAt':{[sequelize_1['Op'][_0x26e6ff(0x1f6)]]:(0x0,moment_1[_0x26e6ff(0x20d)])(_0x2bbe3c)['startOf']('day')[_0x26e6ff(0x1f0)](),[sequelize_1['Op']['lte']]:(0x0,moment_1[_0x26e6ff(0x20d)])(_0xe38cda)['endOf']('day')['toDate']()}}};_0x2bbe3c&&_0x2bbe3c[_0x26e6ff(0x1ed)]()===_0xe38cda&&_0xe38cda[_0x26e6ff(0x1ed)]()?(_0x2e460e[_0x26e6ff(0x1fd)]=[[sequelize_typescript_1[_0x26e6ff(0x213)][_0x26e6ff(0x1ee)](_0x26e6ff(0x204)),_0x26e6ff(0x201)],[sequelize_typescript_1[_0x26e6ff(0x213)]['literal']('COUNT(*)'),_0x26e6ff(0x1f7)]],_0x2e460e[_0x26e6ff(0x20c)]=_0x26e6ff(0x201),_0x2e460e[_0x26e6ff(0x1ff)]=[sequelize_typescript_1['Sequelize'][_0x26e6ff(0x1ee)](_0x26e6ff(0x1f2))]):(_0x2e460e[_0x26e6ff(0x1fd)]=[[sequelize_typescript_1[_0x26e6ff(0x213)]['literal'](_0x26e6ff(0x1fe)),_0x26e6ff(0x211)],[sequelize_typescript_1[_0x26e6ff(0x213)]['fn'](_0x26e6ff(0x1fb),'*'),'total']],_0x2e460e[_0x26e6ff(0x20c)]=_0x26e6ff(0x211),_0x2e460e[_0x26e6ff(0x1ff)]=[sequelize_typescript_1['Sequelize'][_0x26e6ff(0x1ee)](_0x26e6ff(0x1fa))]);_0xacb68b=await TicketTraking_1['default']['findAll'](_0x2e460e);var _0x612782=0x0;return _0xacb68b=_0xacb68b[_0x26e6ff(0x206)](_0x2d0a6c=>{const _0xb07dca=_0x26e6ff;return _0x612782+=Number(_0x2d0a6c[_0xb07dca(0x212)][_0xb07dca(0x1f7)]),{'horario':_0x2d0a6c[_0xb07dca(0x212)]['horario'],'data':_0x2d0a6c['dataValues'][_0xb07dca(0x211)],'total':_0x2d0a6c['dataValues'][_0xb07dca(0x1f7)]};}),{'data':_0xacb68b,'count':_0x612782};};exports[a490_0x80e4d1(0x20d)]=TicketsDayService;function a490_0x3bc6(){const _0x260f43=['sequelize','\x22data\x22\x20ASC','COUNT','__importDefault','attributes','TO_CHAR(DATE(\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)','order','search','horario','578617iZxgqN','1090660gJtjUr','EXTRACT(HOUR\x20FROM\x20\x22createdAt\x22)','1HJbQlS','map','sequelize-typescript','(((.+)+)+)+$','3507aZNZjC','toString','300PcPRmQ','group','default','8inUfuF','__esModule','apply','data','dataValues','Sequelize','../../models/TicketTraking','759zgcLhJ','196OqXnYW','trim','literal','moment','toDate','65980ecXGux','\x22horario\x22\x20ASC','25aJMiPR','4297552QaLasV','4175541SFmRLZ','gte','total','759918wINJnA'];a490_0x3bc6=function(){return _0x260f43;};return a490_0x3bc6();}