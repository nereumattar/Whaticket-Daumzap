const a46_0x461c8e=a46_0x4c78;(function(_0x4be205,_0x30c948){const _0x213064=a46_0x4c78,_0x3f33d6=_0x4be205();while(!![]){try{const _0x4d30c8=-parseInt(_0x213064(0x1bc))/0x1*(parseInt(_0x213064(0x1b6))/0x2)+parseInt(_0x213064(0x19f))/0x3+-parseInt(_0x213064(0x19e))/0x4*(-parseInt(_0x213064(0x1aa))/0x5)+-parseInt(_0x213064(0x1bf))/0x6*(parseInt(_0x213064(0x192))/0x7)+-parseInt(_0x213064(0x1b9))/0x8+-parseInt(_0x213064(0x1a2))/0x9*(parseInt(_0x213064(0x1c0))/0xa)+parseInt(_0x213064(0x1a3))/0xb;if(_0x4d30c8===_0x30c948)break;else _0x3f33d6['push'](_0x3f33d6['shift']());}catch(_0x1d026b){_0x3f33d6['push'](_0x3f33d6['shift']());}}}(a46_0x4dc8,0xa2919));const a46_0x5e2c51=(function(){let _0x42a71d=!![];return function(_0x226f79,_0x1feacb){const _0x1cbad1=_0x42a71d?function(){const _0xe13dcd=a46_0x4c78;if(_0x1feacb){const _0x50754f=_0x1feacb[_0xe13dcd(0x1c2)](_0x226f79,arguments);return _0x1feacb=null,_0x50754f;}}:function(){};return _0x42a71d=![],_0x1cbad1;};}()),a46_0x1f2dd0=a46_0x5e2c51(this,function(){const _0x2ddcbc=a46_0x4c78;return a46_0x1f2dd0[_0x2ddcbc(0x199)]()[_0x2ddcbc(0x198)]('(((.+)+)+)+$')['toString']()[_0x2ddcbc(0x1ab)](a46_0x1f2dd0)[_0x2ddcbc(0x198)](_0x2ddcbc(0x186));});a46_0x1f2dd0();'use strict';var __importDefault=this&&this[a46_0x461c8e(0x1ac)]||function(_0x48e537){return _0x48e537&&_0x48e537['__esModule']?_0x48e537:{'default':_0x48e537};};Object[a46_0x461c8e(0x190)](exports,a46_0x461c8e(0x1b4),{'value':!![]}),exports[a46_0x461c8e(0x1c4)]=exports[a46_0x461c8e(0x18f)]=exports['update']=exports['getAllConnections']=exports[a46_0x461c8e(0x183)]=exports[a46_0x461c8e(0x18b)]=exports[a46_0x461c8e(0x1b3)]=exports[a46_0x461c8e(0x1be)]=void 0x0;const socket_1=require(a46_0x461c8e(0x19b)),wbot_1=require(a46_0x461c8e(0x1bd)),StartWhatsAppSession_1=require(a46_0x461c8e(0x1a0)),FindAllCompaniesService_1=__importDefault(require('../services/CompanyService/FindAllCompaniesService')),CreateWhatsAppService_1=__importDefault(require('../services/WhatsappService/CreateWhatsAppService')),DeleteWhatsAppService_1=__importDefault(require(a46_0x461c8e(0x18d))),ListWhatsAppsService_1=__importDefault(require(a46_0x461c8e(0x193))),ShowWhatsAppService_1=__importDefault(require('../services/WhatsappService/ShowWhatsAppService')),UpdateWhatsAppService_1=__importDefault(require(a46_0x461c8e(0x182))),AppError_1=__importDefault(require(a46_0x461c8e(0x188))),sequelize_1=require(a46_0x461c8e(0x184)),ImportWhatsAppMessageService_1=require(a46_0x461c8e(0x1a4)),Whatsapp_1=__importDefault(require('../models/Whatsapp')),closedTickets=async(_0x1cce71,_0x56a1a3)=>{const _0xc0232f=a46_0x461c8e,{whatsappId:_0x5b831a}=_0x1cce71['params'];return await(0x0,ImportWhatsAppMessageService_1['closeImportedTickets'])(_0x5b831a),_0x56a1a3[_0xc0232f(0x1a9)](0xc8)[_0xc0232f(0x1b1)](_0xc0232f(0x18a));};exports[a46_0x461c8e(0x1be)]=closedTickets;const index=async(_0x595c47,_0x3f52e6)=>{const _0x1eabfc=a46_0x461c8e,{companyId:_0x1d5f2b}=_0x595c47['user'],{session:_0x50b3b3}=_0x595c47[_0x1eabfc(0x1a7)],_0x2ffb1d=await(0x0,ListWhatsAppsService_1['default'])({'companyId':_0x1d5f2b,'session':_0x50b3b3});return _0x3f52e6[_0x1eabfc(0x1a9)](0xc8)[_0x1eabfc(0x1b1)](_0x2ffb1d);};exports[a46_0x461c8e(0x1b3)]=index;const store=async(_0xba34b1,_0xab6e26)=>{const _0x5b03f9=a46_0x461c8e,{name:_0xd3e9d7,status:_0x9ca9da,isDefault:_0x417ad5,greetingMessage:_0x3ff1af,complationMessage:_0x46ad2e,outOfHoursMessage:_0x2c69d7,queueIds:_0x365cc7,token:_0x13d38d,allowGroup:_0x2f6641,timeSendQueue:_0x5628bd,sendIdQueue:_0x2554ee,promptId:_0x59cc39,maxUseBotQueues:_0x287e94,timeUseBotQueues:_0x3c2745,expiresTicket:_0x30fb38,expiresInactiveMessage:_0x3de974,importOldMessages:_0x506e3e,importRecentMessages:_0x20f659,closedTicketsPostImported:_0x1a261f,importOldMessagesGroups:_0x1c9a3d}=_0xba34b1[_0x5b03f9(0x185)],{companyId:_0x4df7a5}=_0xba34b1[_0x5b03f9(0x18e)],{whatsapp:_0x2f1d6b,oldDefaultWhatsapp:_0x1525a6}=await(0x0,CreateWhatsAppService_1[_0x5b03f9(0x19c)])({'name':_0xd3e9d7,'status':_0x9ca9da,'isDefault':_0x417ad5,'greetingMessage':_0x3ff1af,'complationMessage':_0x46ad2e,'outOfHoursMessage':_0x2c69d7,'queueIds':_0x365cc7,'companyId':_0x4df7a5,'token':_0x13d38d,'timeSendQueue':_0x5628bd,'sendIdQueue':_0x2554ee,'promptId':_0x59cc39,'maxUseBotQueues':_0x287e94,'timeUseBotQueues':_0x3c2745,'expiresTicket':_0x30fb38,'expiresInactiveMessage':_0x3de974,'allowGroup':_0x2f6641,'importOldMessages':_0x506e3e,'importRecentMessages':_0x20f659,'closedTicketsPostImported':_0x1a261f,'importOldMessagesGroups':_0x1c9a3d});(0x0,StartWhatsAppSession_1[_0x5b03f9(0x1ae)])(_0x2f1d6b,_0x4df7a5);const _0x59cfb9=(0x0,socket_1[_0x5b03f9(0x1a6)])();return _0x59cfb9['to'](_0x5b03f9(0x1b7)+_0x4df7a5+_0x5b03f9(0x191))[_0x5b03f9(0x197)](_0x5b03f9(0x1b7)+_0x4df7a5+_0x5b03f9(0x195),{'action':_0x5b03f9(0x1bb),'whatsapp':_0x2f1d6b}),_0x1525a6&&_0x59cfb9['to'](_0x5b03f9(0x1b7)+_0x4df7a5+'-mainchannel')['emit'](_0x5b03f9(0x1b7)+_0x4df7a5+_0x5b03f9(0x195),{'action':_0x5b03f9(0x1bb),'whatsapp':_0x1525a6}),_0xab6e26[_0x5b03f9(0x1a9)](0xc8)['json'](_0x2f1d6b);};function a46_0x4dc8(){const _0x3754f2=['__esModule','ERR_NO_PERMISSION','2PfOsXA','company-','pending','6923232yGrwPZ','length','update','580914DfIkIE','../libs/wbot','closedTickets','2533002fCMhZu','2173670wWkvWW','admin','apply','restartWbot','restart','../services/WhatsappService/UpdateWhatsAppService','show','sequelize','body','(((.+)+)+)+$','removeWbot','../errors/AppError','params','whatsapp','store','getAllConnections','../services/WhatsappService/DeleteWhatsAppService','user','remove','defineProperty','-mainchannel','14lfoAMo','../services/WhatsappService/ListWhatsAppsService','delete','-whatsapp','Não\x20é\x20possível\x20remover\x20conexão\x20que\x20contém\x20tickets\x20não\x20resolvidos','emit','search','toString','Whatsapp\x20deleted.','../libs/socket','default','No\x20companies\x20found','568cUMMDP','1906947iXRvbs','../services/WbotServices/StartWhatsAppSession','Failed\x20to\x20fetch\x20connections','36zPwgac','24205170fAOMFc','../services/WhatsappService/ImportWhatsAppMessageService','Whatsapp\x20restart.','getIO','query','push','status','34855mPAfpz','constructor','__importDefault','findAll','StartWhatsAppSession','open','number','json','tickets','index'];a46_0x4dc8=function(){return _0x3754f2;};return a46_0x4dc8();}function a46_0x4c78(_0x32c62b,_0x235530){const _0x211b68=a46_0x4dc8();return a46_0x4c78=function(_0x1f2dd0,_0x5e2c51){_0x1f2dd0=_0x1f2dd0-0x182;let _0x4dc80b=_0x211b68[_0x1f2dd0];return _0x4dc80b;},a46_0x4c78(_0x32c62b,_0x235530);}exports[a46_0x461c8e(0x18b)]=store;const show=async(_0x303c4f,_0x25c39f)=>{const _0x29a0eb=a46_0x461c8e,{whatsappId:_0x5726e3}=_0x303c4f[_0x29a0eb(0x189)],{companyId:_0x26f2cd}=_0x303c4f[_0x29a0eb(0x18e)],{session:_0x3cbb64}=_0x303c4f['query'],_0x39383d=await(0x0,ShowWhatsAppService_1[_0x29a0eb(0x19c)])(_0x5726e3,_0x26f2cd,_0x3cbb64);return _0x25c39f['status'](0xc8)[_0x29a0eb(0x1b1)](_0x39383d);};exports[a46_0x461c8e(0x183)]=show;const getAllConnections=async(_0x58a1cf,_0x22ff4d)=>{const _0xc674f6=a46_0x461c8e;try{const _0x4b5e50=await(0x0,FindAllCompaniesService_1[_0xc674f6(0x19c)])();if(!_0x4b5e50||_0x4b5e50[_0xc674f6(0x1ba)]===0x0)return _0x22ff4d[_0xc674f6(0x1a9)](0x194)[_0xc674f6(0x1b1)]({'error':_0xc674f6(0x19d)});const _0x1d7745=[];for(const _0x4a91ee of _0x4b5e50){if(typeof _0x4a91ee['id']!==_0xc674f6(0x1b0))continue;const _0x38e463=await Whatsapp_1[_0xc674f6(0x19c)][_0xc674f6(0x1ad)]({'where':{'companyId':_0x4a91ee['id']}});_0x1d7745[_0xc674f6(0x1a8)](..._0x38e463);}return _0x22ff4d[_0xc674f6(0x1a9)](0xc8)[_0xc674f6(0x1b1)](_0x1d7745);}catch(_0x12790d){return console['error'](_0x12790d),_0x22ff4d['status'](0x1f4)[_0xc674f6(0x1b1)]({'error':_0xc674f6(0x1a1)});}};exports[a46_0x461c8e(0x18c)]=getAllConnections;const update=async(_0x25ca00,_0x13a64a)=>{const _0x36e135=a46_0x461c8e,{whatsappId:_0x29f464}=_0x25ca00[_0x36e135(0x189)],_0x4f42ee=_0x25ca00[_0x36e135(0x185)],{companyId:_0x2fcd47}=_0x25ca00[_0x36e135(0x18e)],{whatsapp:_0x404675,oldDefaultWhatsapp:_0x28c078}=await(0x0,UpdateWhatsAppService_1[_0x36e135(0x19c)])({'whatsappData':_0x4f42ee,'whatsappId':_0x29f464,'companyId':_0x2fcd47}),_0x1d29bd=(0x0,socket_1[_0x36e135(0x1a6)])();return _0x1d29bd['to']('company-'+_0x2fcd47+_0x36e135(0x191))['emit']('company-'+_0x2fcd47+_0x36e135(0x195),{'action':_0x36e135(0x1bb),'whatsapp':_0x404675}),_0x28c078&&_0x1d29bd['to'](_0x36e135(0x1b7)+_0x2fcd47+_0x36e135(0x191))['emit'](_0x36e135(0x1b7)+_0x2fcd47+_0x36e135(0x195),{'action':_0x36e135(0x1bb),'whatsapp':_0x28c078}),_0x13a64a['status'](0xc8)['json'](_0x404675);};exports[a46_0x461c8e(0x1bb)]=update;const remove=async(_0x29841a,_0x3b081a)=>{const _0x1d40d6=a46_0x461c8e,{whatsappId:_0x14d697}=_0x29841a[_0x1d40d6(0x189)],{companyId:_0x34ceb1}=_0x29841a[_0x1d40d6(0x18e)],_0x2f6f85=await(0x0,ShowWhatsAppService_1[_0x1d40d6(0x19c)])(_0x14d697,_0x34ceb1),_0x19754c=await _0x2f6f85['$get'](_0x1d40d6(0x1b2),{'where':{'status':{[sequelize_1['Op']['or']]:[_0x1d40d6(0x1af),_0x1d40d6(0x1b8)]}}});if(_0x19754c[_0x1d40d6(0x1ba)]>0x0)throw new AppError_1[(_0x1d40d6(0x19c))](_0x1d40d6(0x196));await(0x0,DeleteWhatsAppService_1['default'])(_0x14d697),await(0x0,wbot_1[_0x1d40d6(0x187)])(+_0x14d697);const _0x2fbd46=(0x0,socket_1[_0x1d40d6(0x1a6)])();return _0x2fbd46['to'](_0x1d40d6(0x1b7)+_0x34ceb1+_0x1d40d6(0x191))[_0x1d40d6(0x197)]('company-'+_0x34ceb1+_0x1d40d6(0x195),{'action':_0x1d40d6(0x194),'whatsappId':+_0x14d697}),_0x3b081a[_0x1d40d6(0x1a9)](0xc8)['json']({'message':_0x1d40d6(0x19a)});};exports[a46_0x461c8e(0x18f)]=remove;const restart=async(_0x552874,_0x4f0c1c)=>{const _0x35e812=a46_0x461c8e,{companyId:_0x116e1f,profile:_0x3bcc1f}=_0x552874[_0x35e812(0x18e)];if(_0x3bcc1f!==_0x35e812(0x1c1))throw new AppError_1['default'](_0x35e812(0x1b5),0x193);return await(0x0,wbot_1[_0x35e812(0x1c3)])(_0x116e1f),_0x4f0c1c[_0x35e812(0x1a9)](0xc8)[_0x35e812(0x1b1)]({'message':_0x35e812(0x1a5)});};exports[a46_0x461c8e(0x1c4)]=restart;