const a420_0x5eed2b=a420_0x7498;(function(_0x5c51b9,_0x3b450b){const _0x5c14d3=a420_0x7498,_0x1c757f=_0x5c51b9();while(!![]){try{const _0x48f065=-parseInt(_0x5c14d3(0x8b))/0x1*(-parseInt(_0x5c14d3(0x8a))/0x2)+parseInt(_0x5c14d3(0x87))/0x3+-parseInt(_0x5c14d3(0x89))/0x4+-parseInt(_0x5c14d3(0x8f))/0x5*(-parseInt(_0x5c14d3(0x75))/0x6)+-parseInt(_0x5c14d3(0x78))/0x7*(-parseInt(_0x5c14d3(0x88))/0x8)+parseInt(_0x5c14d3(0x7c))/0x9*(-parseInt(_0x5c14d3(0x7d))/0xa)+-parseInt(_0x5c14d3(0x83))/0xb;if(_0x48f065===_0x3b450b)break;else _0x1c757f['push'](_0x1c757f['shift']());}catch(_0x2e836a){_0x1c757f['push'](_0x1c757f['shift']());}}}(a420_0x472a,0x1e7b4));function a420_0x472a(){const _0x56a990=['6ETkbKP','defineProperty','(((.+)+)+)+$','23359tqKYuR','default','constructor','like','9SmsSrW','204330HIiWHY','findAndCountAll','__importDefault','__esModule','search','ASC','1442584VZSbzt','Sequelize','apply','trim','129291SOKSSY','104rEBTQR','197332rEZHOf','103158iYlBPN','2xmNPuM','../../models/Contact','toString','LIKE','680630IUFpiP','name','col','toLowerCase'];a420_0x472a=function(){return _0x56a990;};return a420_0x472a();}const a420_0x43962c=(function(){let _0x1726d4=!![];return function(_0x29e053,_0x4947c5){const _0x2f14f6=_0x1726d4?function(){const _0x12de0b=a420_0x7498;if(_0x4947c5){const _0xad84bb=_0x4947c5[_0x12de0b(0x85)](_0x29e053,arguments);return _0x4947c5=null,_0xad84bb;}}:function(){};return _0x1726d4=![],_0x2f14f6;};}()),a420_0x3c59da=a420_0x43962c(this,function(){const _0x4c4c3c=a420_0x7498;return a420_0x3c59da[_0x4c4c3c(0x8d)]()[_0x4c4c3c(0x81)](_0x4c4c3c(0x77))[_0x4c4c3c(0x8d)]()[_0x4c4c3c(0x7a)](a420_0x3c59da)[_0x4c4c3c(0x81)](_0x4c4c3c(0x77));});a420_0x3c59da();'use strict';var __importDefault=this&&this[a420_0x5eed2b(0x7f)]||function(_0x6524cc){const _0x59fd00=a420_0x5eed2b;return _0x6524cc&&_0x6524cc[_0x59fd00(0x80)]?_0x6524cc:{'default':_0x6524cc};};Object[a420_0x5eed2b(0x76)](exports,a420_0x5eed2b(0x80),{'value':!![]});const sequelize_1=require('sequelize'),Contact_1=__importDefault(require(a420_0x5eed2b(0x8c))),ListContactsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x586287})=>{const _0x237dd4=a420_0x5eed2b,_0xff4395={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x237dd4(0x84)]['where'](sequelize_1[_0x237dd4(0x84)]['fn']('LOWER',sequelize_1['Sequelize'][_0x237dd4(0x73)](_0x237dd4(0x72))),_0x237dd4(0x8e),'%'+searchParam[_0x237dd4(0x74)]()[_0x237dd4(0x86)]()+'%')},{'number':{[sequelize_1['Op'][_0x237dd4(0x7b)]]:'%'+searchParam['toLowerCase']()['trim']()+'%'}}],'companyId':{[sequelize_1['Op']['eq']]:_0x586287}},_0x56d799=0x64,_0x36c753=_0x56d799*(+pageNumber-0x1),{count:_0x459940,rows:_0x473fa6}=await Contact_1[_0x237dd4(0x79)][_0x237dd4(0x7e)]({'where':_0xff4395,'limit':_0x56d799,'offset':_0x36c753,'order':[[_0x237dd4(0x72),_0x237dd4(0x82)]]}),_0x1dbf5a=_0x459940>_0x36c753+_0x473fa6['length'];return{'contacts':_0x473fa6,'count':_0x459940,'hasMore':_0x1dbf5a};};function a420_0x7498(_0x18dc57,_0x31b8d1){const _0x5a6a19=a420_0x472a();return a420_0x7498=function(_0x3c59da,_0x43962c){_0x3c59da=_0x3c59da-0x72;let _0x472a26=_0x5a6a19[_0x3c59da];return _0x472a26;},a420_0x7498(_0x18dc57,_0x31b8d1);}exports[a420_0x5eed2b(0x79)]=ListContactsService;