function a428_0x511e(_0x3979f4,_0x390200){const _0x17e548=a428_0x314f();return a428_0x511e=function(_0x5d2701,_0x2c1139){_0x5d2701=_0x5d2701-0xf4;let _0x314f19=_0x17e548[_0x5d2701];return _0x314f19;},a428_0x511e(_0x3979f4,_0x390200);}const a428_0x24322c=a428_0x511e;(function(_0x126cbf,_0x211b1c){const _0x40e604=a428_0x511e,_0x692ecf=_0x126cbf();while(!![]){try{const _0x3ff26a=parseInt(_0x40e604(0xfb))/0x1*(-parseInt(_0x40e604(0xf6))/0x2)+-parseInt(_0x40e604(0x105))/0x3*(parseInt(_0x40e604(0x10c))/0x4)+parseInt(_0x40e604(0xfd))/0x5+-parseInt(_0x40e604(0x106))/0x6*(-parseInt(_0x40e604(0x107))/0x7)+parseInt(_0x40e604(0x101))/0x8*(parseInt(_0x40e604(0xf9))/0x9)+-parseInt(_0x40e604(0x100))/0xa*(parseInt(_0x40e604(0x104))/0xb)+-parseInt(_0x40e604(0x10a))/0xc*(-parseInt(_0x40e604(0x109))/0xd);if(_0x3ff26a===_0x211b1c)break;else _0x692ecf['push'](_0x692ecf['shift']());}catch(_0x597157){_0x692ecf['push'](_0x692ecf['shift']());}}}(a428_0x314f,0x9e49c));const a428_0x2c1139=(function(){let _0x23044b=!![];return function(_0x2582db,_0x10221a){const _0x3fda7f=_0x23044b?function(){const _0x39554e=a428_0x511e;if(_0x10221a){const _0x44ceb8=_0x10221a[_0x39554e(0xf5)](_0x2582db,arguments);return _0x10221a=null,_0x44ceb8;}}:function(){};return _0x23044b=![],_0x3fda7f;};}()),a428_0x5d2701=a428_0x2c1139(this,function(){const _0x277f78=a428_0x511e;return a428_0x5d2701[_0x277f78(0x102)]()[_0x277f78(0xf8)]('(((.+)+)+)+$')[_0x277f78(0x102)]()[_0x277f78(0xfc)](a428_0x5d2701)[_0x277f78(0xf8)](_0x277f78(0xfa));});a428_0x5d2701();'use strict';function a428_0x314f(){const _0x32801d=['4EIYDYr','name','__importDefault','apply','14fABvcp','__esModule','search','9VJblan','(((.+)+)+)+$','180145AebJkX','constructor','6078865aREVQi','sequelize','default','126870jjtDNY','6924488VbiAhM','toString','../../models/Files','319xNVJWR','3529209oViozn','4374114jTRLAr','7CumceX','like','13hRIXav','7720032NlnSPM','defineProperty'];a428_0x314f=function(){return _0x32801d;};return a428_0x314f();}var __importDefault=this&&this[a428_0x24322c(0xf4)]||function(_0x3347cd){const _0x3c69ff=a428_0x24322c;return _0x3347cd&&_0x3347cd[_0x3c69ff(0xf7)]?_0x3347cd:{'default':_0x3347cd};};Object[a428_0x24322c(0x10b)](exports,a428_0x24322c(0xf7),{'value':!![]});const sequelize_1=require(a428_0x24322c(0xfe)),Files_1=__importDefault(require(a428_0x24322c(0x103))),ListService=async({searchParam:_0x3049dc,pageNumber:pageNumber='1',companyId:_0x7605ff})=>{const _0x10d715=a428_0x24322c;let _0x51b0d9={};const _0x3207cc=0x14,_0x4c9071=_0x3207cc*(+pageNumber-0x1);_0x3049dc&&(_0x51b0d9={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x10d715(0x108)]]:'%'+_0x3049dc+'%'}}]});const {count:_0x1ddacf,rows:_0x3c7beb}=await Files_1[_0x10d715(0xff)]['findAndCountAll']({'where':{'companyId':_0x7605ff,..._0x51b0d9},'limit':_0x3207cc,'offset':_0x4c9071,'order':[[_0x10d715(0x10d),'ASC']]}),_0x37c36c=_0x1ddacf>_0x4c9071+_0x3c7beb['length'];return{'files':_0x3c7beb,'count':_0x1ddacf,'hasMore':_0x37c36c};};exports[a428_0x24322c(0xff)]=ListService;