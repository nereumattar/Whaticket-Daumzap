function a491_0x277c(){const _0x2fef71=['Sequelize','3885164xiwChr','(((.+)+)+)+$','291148eqgXvj','COUNT','findAll','32veSVCK','\x2023:59:59','\x2000:00:00','toString','gte','defineProperty','151184BochwN','name','find','userId','quantidade','330384JBMeqq','6427252xijjDF','sequelize','28ChGbYw','apply','col','lte','../../models/User','5GLYTzF','130nbrmZx','search','map','3218679kjKJsB','constructor','5486469PaHfBz','default','dataValues'];a491_0x277c=function(){return _0x2fef71;};return a491_0x277c();}function a491_0x4eef(_0x1b26ed,_0x577d5b){const _0x2a8c96=a491_0x277c();return a491_0x4eef=function(_0x72addd,_0x45d1d3){_0x72addd=_0x72addd-0x17f;let _0x277c95=_0x2a8c96[_0x72addd];return _0x277c95;},a491_0x4eef(_0x1b26ed,_0x577d5b);}const a491_0x3e7a3c=a491_0x4eef;(function(_0x3dce9c,_0x17f595){const _0x24d91e=a491_0x4eef,_0x4712b3=_0x3dce9c();while(!![]){try{const _0x4713b5=parseInt(_0x24d91e(0x182))/0x1+parseInt(_0x24d91e(0x180))/0x2+parseInt(_0x24d91e(0x19e))/0x3+parseInt(_0x24d91e(0x191))/0x4*(-parseInt(_0x24d91e(0x198))/0x5)+parseInt(_0x24d91e(0x190))/0x6*(-parseInt(_0x24d91e(0x193))/0x7)+-parseInt(_0x24d91e(0x185))/0x8*(parseInt(_0x24d91e(0x19c))/0x9)+parseInt(_0x24d91e(0x199))/0xa*(parseInt(_0x24d91e(0x18b))/0xb);if(_0x4713b5===_0x17f595)break;else _0x4712b3['push'](_0x4712b3['shift']());}catch(_0x352d03){_0x4712b3['push'](_0x4712b3['shift']());}}}(a491_0x277c,0xf0250));const a491_0x45d1d3=(function(){let _0x20d170=!![];return function(_0xcc8df9,_0x163bf6){const _0x556de3=_0x20d170?function(){const _0xd1c779=a491_0x4eef;if(_0x163bf6){const _0x3dbb7b=_0x163bf6[_0xd1c779(0x194)](_0xcc8df9,arguments);return _0x163bf6=null,_0x3dbb7b;}}:function(){};return _0x20d170=![],_0x556de3;};}()),a491_0x72addd=a491_0x45d1d3(this,function(){const _0x21ac1e=a491_0x4eef;return a491_0x72addd[_0x21ac1e(0x188)]()['search']('(((.+)+)+)+$')[_0x21ac1e(0x188)]()[_0x21ac1e(0x19d)](a491_0x72addd)[_0x21ac1e(0x19a)](_0x21ac1e(0x181));});a491_0x72addd();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x317912){return _0x317912&&_0x317912['__esModule']?_0x317912:{'default':_0x317912};};Object[a491_0x3e7a3c(0x18a)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a491_0x3e7a3c(0x192)),User_1=__importDefault(require(a491_0x3e7a3c(0x197))),TicketTraking_1=__importDefault(require('../../models/TicketTraking')),TicketsAttendanceService=async({companyId:_0x639777,dateStart:_0x21747b,dateEnd:_0x6e8d0d})=>{const _0x1a9163=a491_0x3e7a3c,_0x5601f5=await User_1['default'][_0x1a9163(0x184)]({'attributes':['id',_0x1a9163(0x18c)],'where':{'companyId':_0x639777}}),_0x337e42=(await TicketTraking_1[_0x1a9163(0x19f)][_0x1a9163(0x184)]({'attributes':['userId',[sequelize_1[_0x1a9163(0x17f)]['fn'](_0x1a9163(0x183),sequelize_1[_0x1a9163(0x17f)][_0x1a9163(0x195)](_0x1a9163(0x18e))),_0x1a9163(0x18f)]],'where':{'companyId':_0x639777,'createdAt':{[sequelize_1['Op'][_0x1a9163(0x189)]]:_0x21747b+_0x1a9163(0x187),[sequelize_1['Op'][_0x1a9163(0x196)]]:_0x6e8d0d+_0x1a9163(0x186)},'ticketId':{[sequelize_1['Op']['ne']]:null}},'group':[_0x1a9163(0x18e)]}))[_0x1a9163(0x19b)](_0x127ef9=>{const _0x320e57=_0x1a9163;return _0x127ef9[_0x320e57(0x1a0)];}),_0xb3efa=_0x5601f5[_0x1a9163(0x19b)](_0x1c4076=>{const _0x3f0eb4=_0x1a9163,_0x58af99=_0x337e42[_0x3f0eb4(0x18d)](_0x37e8f5=>_0x37e8f5[_0x3f0eb4(0x18e)]===_0x1c4076['id']);return{'name':_0x1c4076[_0x3f0eb4(0x18c)],'quantity':_0x58af99?.[_0x3f0eb4(0x18f)]||0x0};});return{'data':_0xb3efa};};exports[a491_0x3e7a3c(0x19f)]=TicketsAttendanceService;