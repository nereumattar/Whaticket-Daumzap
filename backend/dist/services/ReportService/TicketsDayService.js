function a489_0x205f(_0x98ad12,_0x1154fc){const _0x18d8ea=a489_0x1412();return a489_0x205f=function(_0xb43905,_0x1cb8f3){_0xb43905=_0xb43905-0x124;let _0x141256=_0x18d8ea[_0xb43905];return _0x141256;},a489_0x205f(_0x98ad12,_0x1154fc);}const a489_0x51db6a=a489_0x205f;(function(_0x5b66fd,_0x213dc9){const _0x25091f=a489_0x205f,_0x462a35=_0x5b66fd();while(!![]){try{const _0x37b2dd=parseInt(_0x25091f(0x136))/0x1+parseInt(_0x25091f(0x13b))/0x2+parseInt(_0x25091f(0x138))/0x3*(-parseInt(_0x25091f(0x13e))/0x4)+-parseInt(_0x25091f(0x13c))/0x5*(-parseInt(_0x25091f(0x135))/0x6)+parseInt(_0x25091f(0x140))/0x7*(-parseInt(_0x25091f(0x12e))/0x8)+parseInt(_0x25091f(0x130))/0x9+-parseInt(_0x25091f(0x12c))/0xa;if(_0x37b2dd===_0x213dc9)break;else _0x462a35['push'](_0x462a35['shift']());}catch(_0x200200){_0x462a35['push'](_0x462a35['shift']());}}}(a489_0x1412,0x58bca));const a489_0x1cb8f3=(function(){let _0x58a5c5=!![];return function(_0x20d517,_0x38d998){const _0x16e8d2=_0x58a5c5?function(){const _0x522577=a489_0x205f;if(_0x38d998){const _0x3a607c=_0x38d998[_0x522577(0x131)](_0x20d517,arguments);return _0x38d998=null,_0x3a607c;}}:function(){};return _0x58a5c5=![],_0x16e8d2;};}()),a489_0xb43905=a489_0x1cb8f3(this,function(){const _0x8c956f=a489_0x205f;return a489_0xb43905[_0x8c956f(0x145)]()['search'](_0x8c956f(0x143))[_0x8c956f(0x145)]()[_0x8c956f(0x13a)](a489_0xb43905)[_0x8c956f(0x125)](_0x8c956f(0x143));});a489_0xb43905();function a489_0x1412(){const _0x114d9b=['apply','trim','findAll','Sequelize','1506gSOQGG','599086VqhirE','literal','546930gPKehh','toDate','constructor','965464OCWgRD','13425OBQCyy','dataValues','8NZkEBD','COUNT(*)','42161jSkXep','COUNT','sequelize','(((.+)+)+)+$','default','toString','__esModule','attributes','\x22horario\x22\x20ASC','search','startOf','horario','total','order','EXTRACT(HOUR\x20FROM\x20\x22createdAt\x22)','day','13573810xejRHg','group','304ukcpaz','data','5027292oQdANF'];a489_0x1412=function(){return _0x114d9b;};return a489_0x1412();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x32df2f){const _0x41426a=a489_0x205f;return _0x32df2f&&_0x32df2f[_0x41426a(0x146)]?_0x32df2f:{'default':_0x32df2f};};Object['defineProperty'](exports,a489_0x51db6a(0x146),{'value':!![]});const sequelize_1=require(a489_0x51db6a(0x142)),TicketTraking_1=__importDefault(require('../../models/TicketTraking')),sequelize_typescript_1=require('sequelize-typescript'),moment_1=__importDefault(require('moment')),TicketsDayService=async({companyId:_0x49e834,dateStart:_0xc7d158,dateEnd:_0x44914c})=>{const _0x4ca8c6=a489_0x51db6a;var _0x2dd7b9,_0x52c083={'where':{'companyId':_0x49e834,'createdAt':{[sequelize_1['Op']['gte']]:(0x0,moment_1['default'])(_0xc7d158)[_0x4ca8c6(0x126)](_0x4ca8c6(0x12b))[_0x4ca8c6(0x139)](),[sequelize_1['Op']['lte']]:(0x0,moment_1[_0x4ca8c6(0x144)])(_0x44914c)['endOf'](_0x4ca8c6(0x12b))[_0x4ca8c6(0x139)]()}}};_0xc7d158&&_0xc7d158[_0x4ca8c6(0x132)]()===_0x44914c&&_0x44914c['trim']()?(_0x52c083[_0x4ca8c6(0x147)]=[[sequelize_typescript_1[_0x4ca8c6(0x134)]['literal'](_0x4ca8c6(0x12a)),_0x4ca8c6(0x127)],[sequelize_typescript_1[_0x4ca8c6(0x134)]['literal'](_0x4ca8c6(0x13f)),_0x4ca8c6(0x128)]],_0x52c083[_0x4ca8c6(0x12d)]=_0x4ca8c6(0x127),_0x52c083[_0x4ca8c6(0x129)]=[sequelize_typescript_1['Sequelize'][_0x4ca8c6(0x137)](_0x4ca8c6(0x124))]):(_0x52c083[_0x4ca8c6(0x147)]=[[sequelize_typescript_1['Sequelize']['literal']('TO_CHAR(DATE(\x22createdAt\x22),\x20\x27dd/mm/YYYY\x27)'),'data'],[sequelize_typescript_1['Sequelize']['fn'](_0x4ca8c6(0x141),'*'),_0x4ca8c6(0x128)]],_0x52c083[_0x4ca8c6(0x12d)]=_0x4ca8c6(0x12f),_0x52c083['order']=[sequelize_typescript_1['Sequelize'][_0x4ca8c6(0x137)]('\x22data\x22\x20ASC')]);_0x2dd7b9=await TicketTraking_1[_0x4ca8c6(0x144)][_0x4ca8c6(0x133)](_0x52c083);var _0x3399ca=0x0;return _0x2dd7b9=_0x2dd7b9['map'](_0x75a454=>{const _0x28e1ad=_0x4ca8c6;return _0x3399ca+=Number(_0x75a454['dataValues'][_0x28e1ad(0x128)]),{'horario':_0x75a454['dataValues'][_0x28e1ad(0x127)],'data':_0x75a454['dataValues']['data'],'total':_0x75a454[_0x28e1ad(0x13d)][_0x28e1ad(0x128)]};}),{'data':_0x2dd7b9,'count':_0x3399ca};};exports[a489_0x51db6a(0x144)]=TicketsDayService;