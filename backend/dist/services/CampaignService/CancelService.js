const a365_0x1366da=a365_0x363e;(function(_0x4863ef,_0x53a2e5){const _0x20dae1=a365_0x363e,_0x597ccd=_0x4863ef();while(!![]){try{const _0x481aaa=-parseInt(_0x20dae1(0x133))/0x1+-parseInt(_0x20dae1(0x138))/0x2+-parseInt(_0x20dae1(0x13a))/0x3*(-parseInt(_0x20dae1(0x127))/0x4)+parseInt(_0x20dae1(0x126))/0x5+-parseInt(_0x20dae1(0x13b))/0x6*(parseInt(_0x20dae1(0x12b))/0x7)+parseInt(_0x20dae1(0x13e))/0x8+parseInt(_0x20dae1(0x12e))/0x9;if(_0x481aaa===_0x53a2e5)break;else _0x597ccd['push'](_0x597ccd['shift']());}catch(_0x3e20d){_0x597ccd['push'](_0x597ccd['shift']());}}}(a365_0x29d0,0x514dd));const a365_0x2d3ee0=(function(){let _0x25acbb=!![];return function(_0xf0971d,_0x308f5d){const _0x2ac468=_0x25acbb?function(){const _0x49c842=a365_0x363e;if(_0x308f5d){const _0x2044ed=_0x308f5d[_0x49c842(0x132)](_0xf0971d,arguments);return _0x308f5d=null,_0x2044ed;}}:function(){};return _0x25acbb=![],_0x2ac468;};}()),a365_0x1b0821=a365_0x2d3ee0(this,function(){const _0x19071b=a365_0x363e;return a365_0x1b0821['toString']()[_0x19071b(0x13c)](_0x19071b(0x12f))['toString']()[_0x19071b(0x131)](a365_0x1b0821)[_0x19071b(0x13c)](_0x19071b(0x12f));});function a365_0x363e(_0x222c47,_0x2b65d5){const _0x44c057=a365_0x29d0();return a365_0x363e=function(_0x1b0821,_0x2d3ee0){_0x1b0821=_0x1b0821-0x126;let _0x29d02a=_0x44c057[_0x1b0821];return _0x29d02a;},a365_0x363e(_0x222c47,_0x2b65d5);}a365_0x1b0821();'use strict';var __importDefault=this&&this[a365_0x1366da(0x130)]||function(_0x55e0b6){const _0x8a41d8=a365_0x1366da;return _0x55e0b6&&_0x55e0b6[_0x8a41d8(0x128)]?_0x55e0b6:{'default':_0x55e0b6};};Object['defineProperty'](exports,a365_0x1366da(0x128),{'value':!![]}),exports['CancelService']=void 0x0;function a365_0x29d0(){const _0x5fb76a=['constructor','apply','321831FxRnif','findByPk','../../models/Campaign','campaignQueue','remove','783748qSHhXl','findAll','3jQYZZG','2765346vRMhOg','search','push','4701872OFWozo','all','default','213215WTXInt','2528164ygGocM','__esModule','../../queues','not','7igpoLa','jobId','update','2206791xlDyOI','(((.+)+)+)+$','__importDefault'];a365_0x29d0=function(){return _0x5fb76a;};return a365_0x29d0();}const sequelize_1=require('sequelize'),Campaign_1=__importDefault(require(a365_0x1366da(0x135))),CampaignShipping_1=__importDefault(require('../../models/CampaignShipping')),queues_1=require(a365_0x1366da(0x129));async function CancelService(_0x384e50){const _0x3fb72c=a365_0x1366da,_0x47b964=await Campaign_1['default'][_0x3fb72c(0x134)](_0x384e50);await _0x47b964[_0x3fb72c(0x12d)]({'status':'CANCELADA'});const _0x1aa307=await CampaignShipping_1[_0x3fb72c(0x140)][_0x3fb72c(0x139)]({'where':{'campaignId':_0x47b964['id'],'jobId':{[sequelize_1['Op'][_0x3fb72c(0x12a)]]:null},'deliveredAt':null}}),_0x5aabd9=[];for(let _0x4f9e6a of _0x1aa307){const _0x1a811d=await queues_1[_0x3fb72c(0x136)]['getJob'](_0x4f9e6a[_0x3fb72c(0x12c)]);_0x5aabd9[_0x3fb72c(0x13d)](_0x1a811d?.[_0x3fb72c(0x137)]());}await Promise[_0x3fb72c(0x13f)](_0x5aabd9);}exports['CancelService']=CancelService;