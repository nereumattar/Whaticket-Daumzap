const a46_0x145a92=a46_0x5461;(function(_0x32afb1,_0x5ca2a0){const _0x1bc6a4=a46_0x5461,_0x32f9d0=_0x32afb1();while(!![]){try{const _0x38bc2b=parseInt(_0x1bc6a4(0x116))/0x1*(parseInt(_0x1bc6a4(0xf8))/0x2)+parseInt(_0x1bc6a4(0x12e))/0x3+-parseInt(_0x1bc6a4(0x12b))/0x4*(-parseInt(_0x1bc6a4(0xfe))/0x5)+parseInt(_0x1bc6a4(0x11b))/0x6*(-parseInt(_0x1bc6a4(0x10f))/0x7)+-parseInt(_0x1bc6a4(0xfb))/0x8*(parseInt(_0x1bc6a4(0x107))/0x9)+parseInt(_0x1bc6a4(0x12d))/0xa+-parseInt(_0x1bc6a4(0x112))/0xb;if(_0x38bc2b===_0x5ca2a0)break;else _0x32f9d0['push'](_0x32f9d0['shift']());}catch(_0x424676){_0x32f9d0['push'](_0x32f9d0['shift']());}}}(a46_0x1295,0x8d5fd));const a46_0x2958a9=(function(){let _0xdc9468=!![];return function(_0x4dc603,_0x3d2c67){const _0x31d163=_0xdc9468?function(){const _0x3f4997=a46_0x5461;if(_0x3d2c67){const _0x41d228=_0x3d2c67[_0x3f4997(0x10b)](_0x4dc603,arguments);return _0x3d2c67=null,_0x41d228;}}:function(){};return _0xdc9468=![],_0x31d163;};}()),a46_0x2efc5d=a46_0x2958a9(this,function(){const _0x477f0e=a46_0x5461;return a46_0x2efc5d[_0x477f0e(0x109)]()[_0x477f0e(0x10e)](_0x477f0e(0x114))[_0x477f0e(0x109)]()[_0x477f0e(0xff)](a46_0x2efc5d)[_0x477f0e(0x10e)](_0x477f0e(0x114));});a46_0x2efc5d();function a46_0x1295(){const _0x284219=['store','../services/WhatsappService/UpdateWhatsAppService','47490TPVsMz','constructor','open','json','status','restart','tickets','../services/WhatsappService/ShowWhatsAppService','user','9wspZoH','Não\x20é\x20possível\x20remover\x20conexão\x20que\x20contém\x20tickets\x20não\x20resolvidos','toString','getAllConnections','apply','$get','error','search','4592wwnBBL','Whatsapp\x20deleted.','query','21290720hjTbXq','__esModule','(((.+)+)+)+$','show','1101841vbzvOc','../services/WhatsappService/CreateWhatsAppService','../services/WhatsappService/ImportWhatsAppMessageService','../services/WhatsappService/ListWhatsAppsService','params','9744wRhdjR','Failed\x20to\x20fetch\x20connections','No\x20companies\x20found','-whatsapp','body','../services/WbotServices/StartWhatsAppSession','ERR_NO_PERMISSION','restartWbot','-mainchannel','closedTickets','defineProperty','company-','delete','../errors/AppError','default','closeImportedTickets','460TVHYEF','StartWhatsAppSession','7441060hldToO','2388894McNwnN','whatsapp','../services/WhatsappService/DeleteWhatsAppService','index','removeWbot','../libs/socket','update','sequelize','../models/Whatsapp','remove','__importDefault','2UKkSVy','getIO','emit','1236656RlsawM'];a46_0x1295=function(){return _0x284219;};return a46_0x1295();}'use strict';var __importDefault=this&&this[a46_0x145a92(0xf7)]||function(_0x5a71f8){return _0x5a71f8&&_0x5a71f8['__esModule']?_0x5a71f8:{'default':_0x5a71f8};};Object[a46_0x145a92(0x125)](exports,a46_0x145a92(0x113),{'value':!![]}),exports[a46_0x145a92(0x103)]=exports['remove']=exports['update']=exports['getAllConnections']=exports[a46_0x145a92(0x115)]=exports[a46_0x145a92(0xfc)]=exports[a46_0x145a92(0x131)]=exports[a46_0x145a92(0x124)]=void 0x0;const socket_1=require(a46_0x145a92(0x133)),wbot_1=require('../libs/wbot'),StartWhatsAppSession_1=require(a46_0x145a92(0x120)),FindAllCompaniesService_1=__importDefault(require('../services/CompanyService/FindAllCompaniesService')),CreateWhatsAppService_1=__importDefault(require(a46_0x145a92(0x117))),DeleteWhatsAppService_1=__importDefault(require(a46_0x145a92(0x130))),ListWhatsAppsService_1=__importDefault(require(a46_0x145a92(0x119))),ShowWhatsAppService_1=__importDefault(require(a46_0x145a92(0x105))),UpdateWhatsAppService_1=__importDefault(require(a46_0x145a92(0xfd))),AppError_1=__importDefault(require(a46_0x145a92(0x128))),sequelize_1=require(a46_0x145a92(0xf4)),ImportWhatsAppMessageService_1=require(a46_0x145a92(0x118)),Whatsapp_1=__importDefault(require(a46_0x145a92(0xf5))),closedTickets=async(_0x374ec8,_0x11460e)=>{const _0x5644c7=a46_0x145a92,{whatsappId:_0x20138f}=_0x374ec8[_0x5644c7(0x11a)];return await(0x0,ImportWhatsAppMessageService_1[_0x5644c7(0x12a)])(_0x20138f),_0x11460e[_0x5644c7(0x102)](0xc8)[_0x5644c7(0x101)](_0x5644c7(0x12f));};exports['closedTickets']=closedTickets;const index=async(_0x22a766,_0x4bad71)=>{const _0xce30c3=a46_0x145a92,{companyId:_0x41dd52}=_0x22a766[_0xce30c3(0x106)],{session:_0x1a8aac}=_0x22a766['query'],_0x412705=await(0x0,ListWhatsAppsService_1[_0xce30c3(0x129)])({'companyId':_0x41dd52,'session':_0x1a8aac});return _0x4bad71[_0xce30c3(0x102)](0xc8)['json'](_0x412705);};exports['index']=index;const store=async(_0x5dd685,_0xf25fc9)=>{const _0x5a2e94=a46_0x145a92,{name:_0x1d4738,status:_0x1185a0,isDefault:_0x3b391e,greetingMessage:_0x526a61,complationMessage:_0x33eeae,outOfHoursMessage:_0x1a3aad,queueIds:_0x2aed4b,token:_0x292ae9,allowGroup:_0x20c2bf,timeSendQueue:_0x3e71ee,sendIdQueue:_0x32fc4c,promptId:_0x2c6fee,maxUseBotQueues:_0x2aa11c,timeUseBotQueues:_0x33c160,expiresTicket:_0x24ce70,expiresInactiveMessage:_0x5d8c17,importOldMessages:_0x1be294,importRecentMessages:_0x54f4e7,closedTicketsPostImported:_0x397907,importOldMessagesGroups:_0x576b40}=_0x5dd685[_0x5a2e94(0x11f)],{companyId:_0x5cb60d}=_0x5dd685[_0x5a2e94(0x106)],{whatsapp:_0x946f2f,oldDefaultWhatsapp:_0x4210d6}=await(0x0,CreateWhatsAppService_1[_0x5a2e94(0x129)])({'name':_0x1d4738,'status':_0x1185a0,'isDefault':_0x3b391e,'greetingMessage':_0x526a61,'complationMessage':_0x33eeae,'outOfHoursMessage':_0x1a3aad,'queueIds':_0x2aed4b,'companyId':_0x5cb60d,'token':_0x292ae9,'timeSendQueue':_0x3e71ee,'sendIdQueue':_0x32fc4c,'promptId':_0x2c6fee,'maxUseBotQueues':_0x2aa11c,'timeUseBotQueues':_0x33c160,'expiresTicket':_0x24ce70,'expiresInactiveMessage':_0x5d8c17,'allowGroup':_0x20c2bf,'importOldMessages':_0x1be294,'importRecentMessages':_0x54f4e7,'closedTicketsPostImported':_0x397907,'importOldMessagesGroups':_0x576b40});(0x0,StartWhatsAppSession_1[_0x5a2e94(0x12c)])(_0x946f2f,_0x5cb60d);const _0x33aac1=(0x0,socket_1[_0x5a2e94(0xf9)])();return _0x33aac1['to'](_0x5a2e94(0x126)+_0x5cb60d+_0x5a2e94(0x123))['emit'](_0x5a2e94(0x126)+_0x5cb60d+'-whatsapp',{'action':_0x5a2e94(0xf3),'whatsapp':_0x946f2f}),_0x4210d6&&_0x33aac1['to'](_0x5a2e94(0x126)+_0x5cb60d+_0x5a2e94(0x123))[_0x5a2e94(0xfa)](_0x5a2e94(0x126)+_0x5cb60d+_0x5a2e94(0x11e),{'action':'update','whatsapp':_0x4210d6}),_0xf25fc9[_0x5a2e94(0x102)](0xc8)[_0x5a2e94(0x101)](_0x946f2f);};exports[a46_0x145a92(0xfc)]=store;const show=async(_0x2d712f,_0x25caf0)=>{const _0x44fac2=a46_0x145a92,{whatsappId:_0x47d1c8}=_0x2d712f[_0x44fac2(0x11a)],{companyId:_0x20fe48}=_0x2d712f['user'],{session:_0x4222a1}=_0x2d712f[_0x44fac2(0x111)],_0x6d94e9=await(0x0,ShowWhatsAppService_1['default'])(_0x47d1c8,_0x20fe48,_0x4222a1);return _0x25caf0['status'](0xc8)[_0x44fac2(0x101)](_0x6d94e9);};exports[a46_0x145a92(0x115)]=show;const getAllConnections=async(_0x5b330f,_0x2bcfb9)=>{const _0x14f149=a46_0x145a92;try{const _0x5bc57a=await(0x0,FindAllCompaniesService_1[_0x14f149(0x129)])();if(!_0x5bc57a||_0x5bc57a['length']===0x0)return _0x2bcfb9[_0x14f149(0x102)](0x194)[_0x14f149(0x101)]({'error':_0x14f149(0x11d)});const _0x2e1e0a=[];for(const _0x1897fd of _0x5bc57a){if(typeof _0x1897fd['id']!=='number')continue;const _0x587cbe=await Whatsapp_1[_0x14f149(0x129)]['findAll']({'where':{'companyId':_0x1897fd['id']}});_0x2e1e0a['push'](..._0x587cbe);}return _0x2bcfb9[_0x14f149(0x102)](0xc8)['json'](_0x2e1e0a);}catch(_0x2351a6){return console[_0x14f149(0x10d)](_0x2351a6),_0x2bcfb9['status'](0x1f4)[_0x14f149(0x101)]({'error':_0x14f149(0x11c)});}};exports[a46_0x145a92(0x10a)]=getAllConnections;const update=async(_0x297be2,_0x33660e)=>{const _0x1a220b=a46_0x145a92,{whatsappId:_0x12a33b}=_0x297be2[_0x1a220b(0x11a)],_0x1a4881=_0x297be2[_0x1a220b(0x11f)],{companyId:_0x4fd4ea}=_0x297be2['user'],{whatsapp:_0x39df3c,oldDefaultWhatsapp:_0x2af9d1}=await(0x0,UpdateWhatsAppService_1[_0x1a220b(0x129)])({'whatsappData':_0x1a4881,'whatsappId':_0x12a33b,'companyId':_0x4fd4ea}),_0x4a1571=(0x0,socket_1[_0x1a220b(0xf9)])();return _0x4a1571['to'](_0x1a220b(0x126)+_0x4fd4ea+_0x1a220b(0x123))[_0x1a220b(0xfa)]('company-'+_0x4fd4ea+'-whatsapp',{'action':_0x1a220b(0xf3),'whatsapp':_0x39df3c}),_0x2af9d1&&_0x4a1571['to']('company-'+_0x4fd4ea+_0x1a220b(0x123))[_0x1a220b(0xfa)](_0x1a220b(0x126)+_0x4fd4ea+_0x1a220b(0x11e),{'action':_0x1a220b(0xf3),'whatsapp':_0x2af9d1}),_0x33660e[_0x1a220b(0x102)](0xc8)['json'](_0x39df3c);};exports[a46_0x145a92(0xf3)]=update;const remove=async(_0x2c1dec,_0x400376)=>{const _0x5e32bd=a46_0x145a92,{whatsappId:_0x16ea1d}=_0x2c1dec[_0x5e32bd(0x11a)],{companyId:_0x568537}=_0x2c1dec['user'],_0x551eaf=await(0x0,ShowWhatsAppService_1[_0x5e32bd(0x129)])(_0x16ea1d,_0x568537),_0xa138b3=await _0x551eaf[_0x5e32bd(0x10c)](_0x5e32bd(0x104),{'where':{'status':{[sequelize_1['Op']['or']]:[_0x5e32bd(0x100),'pending']}}});if(_0xa138b3['length']>0x0)throw new AppError_1[(_0x5e32bd(0x129))](_0x5e32bd(0x108));await(0x0,DeleteWhatsAppService_1[_0x5e32bd(0x129)])(_0x16ea1d),await(0x0,wbot_1[_0x5e32bd(0x132)])(+_0x16ea1d);const _0x4d4eb4=(0x0,socket_1[_0x5e32bd(0xf9)])();return _0x4d4eb4['to'](_0x5e32bd(0x126)+_0x568537+'-mainchannel')[_0x5e32bd(0xfa)](_0x5e32bd(0x126)+_0x568537+_0x5e32bd(0x11e),{'action':_0x5e32bd(0x127),'whatsappId':+_0x16ea1d}),_0x400376[_0x5e32bd(0x102)](0xc8)[_0x5e32bd(0x101)]({'message':_0x5e32bd(0x110)});};exports[a46_0x145a92(0xf6)]=remove;const restart=async(_0x2e5487,_0x1af5f5)=>{const _0xaa5f77=a46_0x145a92,{companyId:_0x5b43c5,profile:_0xf7a982}=_0x2e5487[_0xaa5f77(0x106)];if(_0xf7a982!=='admin')throw new AppError_1['default'](_0xaa5f77(0x121),0x193);return await(0x0,wbot_1[_0xaa5f77(0x122)])(_0x5b43c5),_0x1af5f5[_0xaa5f77(0x102)](0xc8)[_0xaa5f77(0x101)]({'message':'Whatsapp\x20restart.'});};function a46_0x5461(_0x438fb4,_0x84f34e){const _0x1f945c=a46_0x1295();return a46_0x5461=function(_0x2efc5d,_0x2958a9){_0x2efc5d=_0x2efc5d-0xf3;let _0x129535=_0x1f945c[_0x2efc5d];return _0x129535;},a46_0x5461(_0x438fb4,_0x84f34e);}exports['restart']=restart;