const a564_0x135677=a564_0x5d45;(function(_0x3313f4,_0x3d85a7){const _0xaf3f75=a564_0x5d45,_0x68fb94=_0x3313f4();while(!![]){try{const _0x5f1583=parseInt(_0xaf3f75(0x92))/0x1*(parseInt(_0xaf3f75(0xba))/0x2)+-parseInt(_0xaf3f75(0xa1))/0x3+-parseInt(_0xaf3f75(0xb8))/0x4+parseInt(_0xaf3f75(0xc0))/0x5+-parseInt(_0xaf3f75(0xbe))/0x6*(parseInt(_0xaf3f75(0xb0))/0x7)+parseInt(_0xaf3f75(0xa6))/0x8*(parseInt(_0xaf3f75(0xc3))/0x9)+-parseInt(_0xaf3f75(0xa0))/0xa*(-parseInt(_0xaf3f75(0xb4))/0xb);if(_0x5f1583===_0x3d85a7)break;else _0x68fb94['push'](_0x68fb94['shift']());}catch(_0xd3a780){_0x68fb94['push'](_0x68fb94['shift']());}}}(a564_0x3533,0x9b4e8));const a564_0xefa645=(function(){let _0x386d71=!![];return function(_0x11e1e0,_0x19ebff){const _0x13b0b9=_0x386d71?function(){const _0x1ec3e5=a564_0x5d45;if(_0x19ebff){const _0x18919f=_0x19ebff[_0x1ec3e5(0x98)](_0x11e1e0,arguments);return _0x19ebff=null,_0x18919f;}}:function(){};return _0x386d71=![],_0x13b0b9;};}()),a564_0x461096=a564_0xefa645(this,function(){const _0x1b4054=a564_0x5d45;return a564_0x461096[_0x1b4054(0xa9)]()[_0x1b4054(0x9a)](_0x1b4054(0xc1))[_0x1b4054(0xa9)]()[_0x1b4054(0xbb)](a564_0x461096)[_0x1b4054(0x9a)]('(((.+)+)+)+$');});a564_0x461096();'use strict';var __importDefault=this&&this[a564_0x135677(0xa7)]||function(_0x1b8309){const _0x183ecd=a564_0x135677;return _0x1b8309&&_0x1b8309[_0x183ecd(0x8d)]?_0x1b8309:{'default':_0x1b8309};};Object[a564_0x135677(0xbd)](exports,a564_0x135677(0x8d),{'value':!![]}),exports[a564_0x135677(0xaa)]=void 0x0;function a564_0x3533(){const _0x28d628=['5163752jOMkxc','emit','importMessages-','has','3242652dgyhKd','companyId','242698LUcLAA','constructor','default','defineProperty','2514xWnQLR','moment','821240lggGim','(((.+)+)+)+$','closedTicketsPostImported','2497221MiodQN','dataMessages','add','messageTimestamp','key','__esModule','sort','ERR_NOT_MESSAGE_TO_IMPORT','refresh','../../models/Ticket','10jZbBzU','set','../TicketServices/UpdateTicketService','getIO','company-','handleMessage','apply','date-fns','search','floor','closed','getWbot','processImportMessagesWppId','format','30gWAfge','1364451dPiTMk','../../errors/AppError','DD/MM/YY\x20HH:mm:ss','pending','length','8DCkXzL','__importDefault','update','toString','closeImportedTickets','findByPk','findAll','sequelize','../../models/Whatsapp','log','19411vltlvm','push','low','-mainchannel'];a564_0x3533=function(){return _0x28d628;};return a564_0x3533();}const AppError_1=__importDefault(require(a564_0x135677(0xa2))),Whatsapp_1=__importDefault(require(a564_0x135677(0xae))),Ticket_1=__importDefault(require(a564_0x135677(0x91))),UpdateTicketService_1=__importDefault(require(a564_0x135677(0x94))),wbot_1=require('../../libs/wbot'),socket_1=require('../../libs/socket'),wbotMessageListener_1=require('../WbotServices/wbotMessageListener'),moment_1=__importDefault(require(a564_0x135677(0xbf))),sequelize_1=require(a564_0x135677(0xad)),date_fns_1=require(a564_0x135677(0x99)),closeImportedTickets=async _0x4fbc96=>{const _0x405ccd=a564_0x135677;console[_0x405ccd(0xaf)](_0x405ccd(0xaa));const _0x410c8c=await Ticket_1[_0x405ccd(0xbc)][_0x405ccd(0xac)]({'where':{'status':_0x405ccd(0xa4),'whatsappId':_0x4fbc96,'imported':{[sequelize_1['Op']['lt']]:(0x0,date_fns_1[_0x405ccd(0x8a)])(new Date(),{'hours':0x5})}}});for(const _0x2f952 of _0x410c8c){await new Promise(_0x185d80=>setTimeout(_0x185d80,0x14a)),await(0x0,UpdateTicketService_1[_0x405ccd(0xbc)])({'ticketData':{'status':_0x405ccd(0x9c)},'ticketId':_0x2f952['id'],'companyId':_0x2f952[_0x405ccd(0xb9)]});}let _0x27969e=await Whatsapp_1['default'][_0x405ccd(0xab)](_0x4fbc96);_0x27969e[_0x405ccd(0xa8)]({'statusImportMessages':null});const _0x3b22ee=(0x0,socket_1[_0x405ccd(0x95)])();_0x3b22ee['to'](_0x405ccd(0x96)+_0x27969e[_0x405ccd(0xb9)]+_0x405ccd(0xb3))[_0x405ccd(0xb5)](_0x405ccd(0xb6)+_0x27969e[_0x405ccd(0xb9)],{'action':_0x405ccd(0x90)});};exports[a564_0x135677(0xaa)]=closeImportedTickets;function compareMessageTimestamps(_0x483f76,_0x4b6587){return _0x483f76['messageTimestamp']-_0x4b6587['messageTimestamp'];}function removeDuplicateById(_0x22c915){const _0xfd9584=a564_0x135677,_0x30edf1=new Map(),_0x27058f=[];for(const _0xaf0ff4 of _0x22c915){const _0x2a4ef0=_0xaf0ff4[_0xfd9584(0x8c)]['id'];!_0x30edf1[_0xfd9584(0xb7)](_0x2a4ef0)&&(_0x30edf1[_0xfd9584(0x93)](_0x2a4ef0,!![]),_0x27058f[_0xfd9584(0xb1)](_0xaf0ff4));}return _0x27058f[_0xfd9584(0x8e)](compareMessageTimestamps);}const ImportWhatsAppService=async _0x32b00a=>{const _0xf34a95=a564_0x135677,_0x386bb1=(0x0,wbot_1[_0xf34a95(0x9d)])(_0x32b00a['id']);try{const _0x2cd5bc=(0x0,socket_1[_0xf34a95(0x95)])(),_0x28bbe0=removeDuplicateById(wbot_1[_0xf34a95(0x89)][_0x32b00a['id']]);console[_0xf34a95(0xaf)](_0xf34a95(0x9e));const _0x184b48=_0x28bbe0[_0xf34a95(0xa5)];let _0x5b3a1d=0x0;while(_0x5b3a1d<_0x184b48){try{const _0x4e2c85=_0x28bbe0[_0x5b3a1d];await(0x0,wbotMessageListener_1[_0xf34a95(0x97)])(_0x4e2c85,_0x386bb1,_0x32b00a[_0xf34a95(0xb9)],!![]);if(_0x5b3a1d%0x2===0x0){const _0x569e51=Math[_0xf34a95(0x9b)](_0x4e2c85[_0xf34a95(0x8b)][_0xf34a95(0xb2)]*0x3e8);_0x2cd5bc[_0xf34a95(0xb5)](_0xf34a95(0xb6)+_0x32b00a['companyId'],{'action':_0xf34a95(0xa8),'status':{'this':_0x5b3a1d+0x1,'all':_0x184b48,'date':(0x0,moment_1['default'])(_0x569e51)[_0xf34a95(0x9f)](_0xf34a95(0xa3))}});}_0x5b3a1d+0x1===_0x184b48&&(wbot_1[_0xf34a95(0x89)][_0x32b00a['id']]=[],_0x32b00a[_0xf34a95(0xc2)]&&await(0x0,exports[_0xf34a95(0xaa)])(_0x32b00a['id']),await _0x32b00a['update']({'statusImportMessages':_0x32b00a[_0xf34a95(0xc2)]?null:'renderButtonCloseTickets','importOldMessages':null,'importRecentMessages':null}),_0x2cd5bc['to']('company-'+_0x32b00a[_0xf34a95(0xb9)]+_0xf34a95(0xb3))[_0xf34a95(0xb5)](_0xf34a95(0xb6)+_0x32b00a[_0xf34a95(0xb9)],{'action':_0xf34a95(0x90)}));}catch(_0x1c43da){console[_0xf34a95(0xaf)](_0x1c43da),console[_0xf34a95(0xaf)]('ERROR_IMPORTING_MESSAGE');}_0x5b3a1d++;}}catch(_0x4c0747){console['log'](_0x4c0747);throw new AppError_1[(_0xf34a95(0xbc))](_0xf34a95(0x8f),0x193);}return'whatsapps';};function a564_0x5d45(_0x4ba148,_0x216151){const _0x3b3d0f=a564_0x3533();return a564_0x5d45=function(_0x461096,_0xefa645){_0x461096=_0x461096-0x89;let _0x3533b4=_0x3b3d0f[_0x461096];return _0x3533b4;},a564_0x5d45(_0x4ba148,_0x216151);}exports[a564_0x135677(0xbc)]=ImportWhatsAppService;