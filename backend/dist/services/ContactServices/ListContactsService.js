const a418_0x4616d7=a418_0x1332;(function(_0x35faee,_0x20ef24){const _0x312b0b=a418_0x1332,_0xf246a2=_0x35faee();while(!![]){try{const _0xe414a2=-parseInt(_0x312b0b(0xd9))/0x1*(parseInt(_0x312b0b(0xe1))/0x2)+-parseInt(_0x312b0b(0xd5))/0x3*(parseInt(_0x312b0b(0xce))/0x4)+-parseInt(_0x312b0b(0xe8))/0x5+-parseInt(_0x312b0b(0xe6))/0x6*(parseInt(_0x312b0b(0xcf))/0x7)+-parseInt(_0x312b0b(0xd6))/0x8+-parseInt(_0x312b0b(0xcc))/0x9*(parseInt(_0x312b0b(0xd0))/0xa)+parseInt(_0x312b0b(0xcd))/0xb*(parseInt(_0x312b0b(0xd3))/0xc);if(_0xe414a2===_0x20ef24)break;else _0xf246a2['push'](_0xf246a2['shift']());}catch(_0xeadc36){_0xf246a2['push'](_0xf246a2['shift']());}}}(a418_0x4427,0xe0675));const a418_0x47bd1d=(function(){let _0x40f06b=!![];return function(_0xd9dd49,_0x6065a4){const _0x104585=_0x40f06b?function(){const _0x1f5bdd=a418_0x1332;if(_0x6065a4){const _0x11b6e9=_0x6065a4[_0x1f5bdd(0xe5)](_0xd9dd49,arguments);return _0x6065a4=null,_0x11b6e9;}}:function(){};return _0x40f06b=![],_0x104585;};}()),a418_0x53527d=a418_0x47bd1d(this,function(){const _0x45dd29=a418_0x1332;return a418_0x53527d[_0x45dd29(0xe2)]()[_0x45dd29(0xdc)](_0x45dd29(0xe9))[_0x45dd29(0xe2)]()[_0x45dd29(0xd4)](a418_0x53527d)[_0x45dd29(0xdc)](_0x45dd29(0xe9));});a418_0x53527d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x42d0f3){return _0x42d0f3&&_0x42d0f3['__esModule']?_0x42d0f3:{'default':_0x42d0f3};};Object['defineProperty'](exports,a418_0x4616d7(0xe7),{'value':!![]});const sequelize_1=require(a418_0x4616d7(0xe0)),Contact_1=__importDefault(require(a418_0x4616d7(0xda))),ListContactsService=async({searchParam:searchParam='',pageNumber:pageNumber='1',companyId:_0x4c4aaf})=>{const _0x2f1edd=a418_0x4616d7,_0x143858={[sequelize_1['Op']['or']]:[{'name':sequelize_1[_0x2f1edd(0xdf)][_0x2f1edd(0xe3)](sequelize_1['Sequelize']['fn']('LOWER',sequelize_1[_0x2f1edd(0xdf)][_0x2f1edd(0xe4)]('name')),_0x2f1edd(0xd2),'%'+searchParam[_0x2f1edd(0xd7)]()['trim']()+'%')},{'number':{[sequelize_1['Op'][_0x2f1edd(0xdb)]]:'%'+searchParam[_0x2f1edd(0xd7)]()[_0x2f1edd(0xde)]()+'%'}}],'companyId':{[sequelize_1['Op']['eq']]:_0x4c4aaf}},_0x4650fd=0x64,_0x53b367=_0x4650fd*(+pageNumber-0x1),{count:_0x367694,rows:_0x1167b1}=await Contact_1[_0x2f1edd(0xd1)]['findAndCountAll']({'where':_0x143858,'limit':_0x4650fd,'offset':_0x53b367,'order':[[_0x2f1edd(0xd8),'ASC']]}),_0xe9c013=_0x367694>_0x53b367+_0x1167b1[_0x2f1edd(0xdd)];return{'contacts':_0x1167b1,'count':_0x367694,'hasMore':_0xe9c013};};exports[a418_0x4616d7(0xd1)]=ListContactsService;function a418_0x1332(_0x24f31c,_0x523ad4){const _0x186bd3=a418_0x4427();return a418_0x1332=function(_0x53527d,_0x47bd1d){_0x53527d=_0x53527d-0xcc;let _0x4427e1=_0x186bd3[_0x53527d];return _0x4427e1;},a418_0x1332(_0x24f31c,_0x523ad4);}function a418_0x4427(){const _0x40e6ae=['401488UpOepL','681436LOfgDO','30cQSyxU','default','LIKE','24HwZAgA','constructor','33IMOdyO','10004632IyprIA','toLowerCase','name','1007wCHYYA','../../models/Contact','like','search','length','trim','Sequelize','sequelize','2692RHynSV','toString','where','col','apply','6SkTTjq','__esModule','1341535ETsuTJ','(((.+)+)+)+$','5353443yJHZaM','37286623BsQaym'];a418_0x4427=function(){return _0x40e6ae;};return a418_0x4427();}