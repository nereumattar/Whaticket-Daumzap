const a436_0x59e163=a436_0x281e;function a436_0x281e(_0xe3877b,_0xfa8527){const _0x4393ab=a436_0x25d9();return a436_0x281e=function(_0x29ca08,_0x12a12e){_0x29ca08=_0x29ca08-0xb7;let _0x25d95d=_0x4393ab[_0x29ca08];return _0x25d95d;},a436_0x281e(_0xe3877b,_0xfa8527);}(function(_0x33d9f1,_0x116038){const _0x1d5f2b=a436_0x281e,_0x51d267=_0x33d9f1();while(!![]){try{const _0x544238=-parseInt(_0x1d5f2b(0xd1))/0x1*(-parseInt(_0x1d5f2b(0xc1))/0x2)+-parseInt(_0x1d5f2b(0xd2))/0x3+parseInt(_0x1d5f2b(0xc6))/0x4*(-parseInt(_0x1d5f2b(0xd4))/0x5)+-parseInt(_0x1d5f2b(0xd0))/0x6*(parseInt(_0x1d5f2b(0xb8))/0x7)+parseInt(_0x1d5f2b(0xcb))/0x8+-parseInt(_0x1d5f2b(0xcf))/0x9*(parseInt(_0x1d5f2b(0xc3))/0xa)+-parseInt(_0x1d5f2b(0xcc))/0xb*(-parseInt(_0x1d5f2b(0xc2))/0xc);if(_0x544238===_0x116038)break;else _0x51d267['push'](_0x51d267['shift']());}catch(_0xe31c67){_0x51d267['push'](_0x51d267['shift']());}}}(a436_0x25d9,0xea03b));const a436_0x12a12e=(function(){let _0x25b465=!![];return function(_0x20b2c0,_0x416996){const _0x12f736=_0x25b465?function(){const _0x4c2641=a436_0x281e;if(_0x416996){const _0x5a7776=_0x416996[_0x4c2641(0xc4)](_0x20b2c0,arguments);return _0x416996=null,_0x5a7776;}}:function(){};return _0x25b465=![],_0x12f736;};}()),a436_0x29ca08=a436_0x12a12e(this,function(){const _0xa8b3e9=a436_0x281e;return a436_0x29ca08[_0xa8b3e9(0xce)]()[_0xa8b3e9(0xc9)]('(((.+)+)+)+$')[_0xa8b3e9(0xce)]()['constructor'](a436_0x29ca08)['search'](_0xa8b3e9(0xbb));});a436_0x29ca08();function a436_0x25d9(){const _0x54f9af=['toString','4041kSzxYI','198zwPQye','19QSItnK','609111mRDHJb','toLowerCase','10BklpBV','defineProperty','../../models/Help','233821YpRJzD','where','title','(((.+)+)+)+$','sequelize','col','Sequelize','__importDefault','length','1004DvhqHl','911124qJWoIu','14310zVywqM','apply','__esModule','55316JpTRRz','default','trim','search','findAndCountAll','9425416uScHsa','253fYhFbn','LOWER'];a436_0x25d9=function(){return _0x54f9af;};return a436_0x25d9();}'use strict';var __importDefault=this&&this[a436_0x59e163(0xbf)]||function(_0xc412ac){const _0x3572f9=a436_0x59e163;return _0xc412ac&&_0xc412ac[_0x3572f9(0xc5)]?_0xc412ac:{'default':_0xc412ac};};Object[a436_0x59e163(0xd5)](exports,a436_0x59e163(0xc5),{'value':!![]});const sequelize_1=require(a436_0x59e163(0xbc)),Help_1=__importDefault(require(a436_0x59e163(0xb7))),ListService=async({searchParam:searchParam='',pageNumber:pageNumber='1'})=>{const _0x3e8573=a436_0x59e163,_0x2297da={[sequelize_1['Op']['or']]:[{'title':sequelize_1[_0x3e8573(0xbe)][_0x3e8573(0xb9)](sequelize_1['Sequelize']['fn'](_0x3e8573(0xcd),sequelize_1[_0x3e8573(0xbe)][_0x3e8573(0xbd)](_0x3e8573(0xba))),'LIKE','%'+searchParam[_0x3e8573(0xd3)]()[_0x3e8573(0xc8)]()+'%')}]},_0x2c5e11=0x14,_0x4bdf06=_0x2c5e11*(+pageNumber-0x1),{count:_0x76dc8c,rows:_0x3c0a10}=await Help_1[_0x3e8573(0xc7)][_0x3e8573(0xca)]({'where':_0x2297da,'limit':_0x2c5e11,'offset':_0x4bdf06,'order':[['title','ASC']]}),_0x2a03dc=_0x76dc8c>_0x4bdf06+_0x3c0a10[_0x3e8573(0xc0)];return{'records':_0x3c0a10,'count':_0x76dc8c,'hasMore':_0x2a03dc};};exports[a436_0x59e163(0xc7)]=ListService;