const a29_0x46dc6a=a29_0x1bfd;(function(_0xe69f73,_0x1d3fe7){const _0x2f2050=a29_0x1bfd,_0x4757d6=_0xe69f73();while(!![]){try{const _0xe18d8a=-parseInt(_0x2f2050(0x121))/0x1*(-parseInt(_0x2f2050(0x112))/0x2)+-parseInt(_0x2f2050(0x145))/0x3+parseInt(_0x2f2050(0x126))/0x4+parseInt(_0x2f2050(0x139))/0x5+-parseInt(_0x2f2050(0x14e))/0x6+-parseInt(_0x2f2050(0x132))/0x7*(parseInt(_0x2f2050(0x128))/0x8)+parseInt(_0x2f2050(0x127))/0x9;if(_0xe18d8a===_0x1d3fe7)break;else _0x4757d6['push'](_0x4757d6['shift']());}catch(_0x461cba){_0x4757d6['push'](_0x4757d6['shift']());}}}(a29_0x41a4,0x25a3e));const a29_0x355c34=(function(){let _0x4ae981=!![];return function(_0x4505f3,_0x18e234){const _0x4e81b5=_0x4ae981?function(){const _0x2a1aca=a29_0x1bfd;if(_0x18e234){const _0x1dc1cb=_0x18e234[_0x2a1aca(0x144)](_0x4505f3,arguments);return _0x18e234=null,_0x1dc1cb;}}:function(){};return _0x4ae981=![],_0x4e81b5;};}()),a29_0xd86a72=a29_0x355c34(this,function(){const _0x17a73f=a29_0x1bfd;return a29_0xd86a72[_0x17a73f(0x129)]()['search'](_0x17a73f(0x147))[_0x17a73f(0x129)]()[_0x17a73f(0x14b)](a29_0xd86a72)[_0x17a73f(0x146)](_0x17a73f(0x147));});a29_0xd86a72();'use strict';var __importDefault=this&&this[a29_0x46dc6a(0x11b)]||function(_0x4baab2){const _0x45f325=a29_0x46dc6a;return _0x4baab2&&_0x4baab2[_0x45f325(0x13c)]?_0x4baab2:{'default':_0x4baab2};};Object[a29_0x46dc6a(0x137)](exports,a29_0x46dc6a(0x13c),{'value':!![]}),exports[a29_0x46dc6a(0x119)]=exports[a29_0x46dc6a(0x11a)]=exports[a29_0x46dc6a(0x124)]=exports[a29_0x46dc6a(0x12f)]=exports[a29_0x46dc6a(0x136)]=exports[a29_0x46dc6a(0x13a)]=exports[a29_0x46dc6a(0x12e)]=void 0x0;const socket_1=require(a29_0x46dc6a(0x14a)),CreateQueueService_1=__importDefault(require(a29_0x46dc6a(0x123))),DeleteQueueService_1=__importDefault(require(a29_0x46dc6a(0x14c))),ListQueuesService_1=__importDefault(require(a29_0x46dc6a(0x150))),ShowQueueService_1=__importDefault(require('../services/QueueService/ShowQueueService')),UpdateQueueService_1=__importDefault(require(a29_0x46dc6a(0x133))),lodash_1=require(a29_0x46dc6a(0x11f)),Queue_1=__importDefault(require(a29_0x46dc6a(0x111))),lodash_2=require(a29_0x46dc6a(0x11f)),fs_1=__importDefault(require('fs')),path_1=__importDefault(require('path')),AppError_1=__importDefault(require(a29_0x46dc6a(0x131))),index=async(_0x4fe6cd,_0x5356cb)=>{const _0x10bc37=a29_0x46dc6a,{companyId:_0x434f2e}=_0x4fe6cd[_0x10bc37(0x11d)],{companyId:_0x33eb46}=_0x4fe6cd[_0x10bc37(0x141)];let _0x1fe366=_0x434f2e;!(0x0,lodash_1[_0x10bc37(0x11e)])(_0x33eb46)&&(_0x1fe366=+_0x33eb46);const _0x552de3=await(0x0,ListQueuesService_1['default'])({'companyId':_0x1fe366});return _0x5356cb[_0x10bc37(0x14f)](0xc8)[_0x10bc37(0x115)](_0x552de3);};exports[a29_0x46dc6a(0x12e)]=index;const store=async(_0x5a706f,_0x48a45a)=>{const _0x24b405=a29_0x46dc6a,{name:_0x148b4e,color:_0x3e651a,greetingMessage:_0xb89b64,outOfHoursMessage:_0x353d16,keywords:_0x2b92f8,schedules:_0x222ae0,orderQueue:_0x40a7a8,integrationId:_0x340c1a,promptId:_0x1cf4b6}=_0x5a706f['body'],{companyId:_0x45242a}=_0x5a706f[_0x24b405(0x11d)],_0x2ee5d6=await(0x0,CreateQueueService_1[_0x24b405(0x120)])({'name':_0x148b4e,'color':_0x3e651a,'greetingMessage':_0xb89b64,'companyId':_0x45242a,'outOfHoursMessage':_0x353d16,'keywords':_0x2b92f8,'schedules':_0x222ae0,'orderQueue':_0x40a7a8===''?null:_0x40a7a8,'integrationId':_0x340c1a===''?null:_0x340c1a,'promptId':_0x1cf4b6===''?null:_0x1cf4b6}),_0x1e8465=(0x0,socket_1[_0x24b405(0x143)])();return _0x1e8465['to'](_0x24b405(0x116)+_0x45242a+_0x24b405(0x148))['emit']('company-'+_0x45242a+'-queue',{'action':_0x24b405(0x12f),'queue':_0x2ee5d6}),_0x48a45a[_0x24b405(0x14f)](0xc8)[_0x24b405(0x115)](_0x2ee5d6);};exports[a29_0x46dc6a(0x13a)]=store;const show=async(_0x29dbf5,_0x475dbe)=>{const _0x16326b=a29_0x46dc6a,{queueId:_0x51b924}=_0x29dbf5[_0x16326b(0x140)],{companyId:_0x5296e0}=_0x29dbf5[_0x16326b(0x11d)],_0x3023e3=await(0x0,ShowQueueService_1[_0x16326b(0x120)])(_0x51b924,_0x5296e0);return _0x475dbe[_0x16326b(0x14f)](0xc8)[_0x16326b(0x115)](_0x3023e3);};exports[a29_0x46dc6a(0x136)]=show;const update=async(_0x583fb2,_0x1fe3d3)=>{const _0x2d1027=a29_0x46dc6a,{queueId:_0x4901cc}=_0x583fb2[_0x2d1027(0x140)],{companyId:_0xfb0356}=_0x583fb2['user'],{name:_0x1388f6,color:_0x29ff33,greetingMessage:_0x8c27d8,outOfHoursMessage:_0x395de4,keywords:_0x20d4ca,newTicketOnTransfer:_0x25c31a,schedules:_0x551948,orderQueue:_0x5e359e,integrationId:_0x2f89e4,promptId:_0x4a195a}=_0x583fb2[_0x2d1027(0x13d)],_0x383309=await(0x0,UpdateQueueService_1[_0x2d1027(0x120)])(_0x4901cc,{'name':_0x1388f6,'color':_0x29ff33,'greetingMessage':_0x8c27d8,'outOfHoursMessage':_0x395de4,'keywords':_0x20d4ca,'newTicketOnTransfer':_0x25c31a,'schedules':_0x551948,'orderQueue':_0x5e359e===''?null:_0x5e359e,'integrationId':_0x2f89e4===''?null:_0x2f89e4,'promptId':_0x4a195a===''?null:_0x4a195a},_0xfb0356),_0x3c5b8c=(0x0,socket_1['getIO'])();return _0x3c5b8c['to'](_0x2d1027(0x116)+_0xfb0356+_0x2d1027(0x148))[_0x2d1027(0x122)](_0x2d1027(0x116)+_0xfb0356+_0x2d1027(0x13f),{'action':_0x2d1027(0x12f),'queue':_0x383309}),_0x1fe3d3[_0x2d1027(0x14f)](0xc9)[_0x2d1027(0x115)](_0x383309);};exports[a29_0x46dc6a(0x12f)]=update;const remove=async(_0x2e9080,_0x3dcfe9)=>{const _0xbb97ae=a29_0x46dc6a,{queueId:_0x5cab62}=_0x2e9080[_0xbb97ae(0x140)],{companyId:_0x4c0746}=_0x2e9080[_0xbb97ae(0x11d)];await(0x0,DeleteQueueService_1[_0xbb97ae(0x120)])(_0x5cab62,_0x4c0746);const _0x2e6d41=(0x0,socket_1[_0xbb97ae(0x143)])();return _0x2e6d41['to'](_0xbb97ae(0x116)+_0x4c0746+'-mainchannel')[_0xbb97ae(0x122)](_0xbb97ae(0x116)+_0x4c0746+_0xbb97ae(0x13f),{'action':_0xbb97ae(0x117),'queueId':+_0x5cab62}),_0x3dcfe9[_0xbb97ae(0x14f)](0xc8)['send']();};exports[a29_0x46dc6a(0x124)]=remove;function a29_0x1bfd(_0x335738,_0x1d8017){const _0x53a086=a29_0x41a4();return a29_0x1bfd=function(_0xd86a72,_0x355c34){_0xd86a72=_0xd86a72-0x111;let _0x41a4b2=_0x53a086[_0xd86a72];return _0x41a4b2;},a29_0x1bfd(_0x335738,_0x1d8017);}const mediaUpload=async(_0x286abb,_0x28a503)=>{const _0x508392=a29_0x46dc6a,{queueId:_0x1b7c82}=_0x286abb['params'],_0x54822b=_0x286abb[_0x508392(0x134)],_0x2c3391=(0x0,lodash_2[_0x508392(0x12c)])(_0x54822b);try{const _0x1d41fb=await Queue_1[_0x508392(0x120)][_0x508392(0x13e)](_0x1b7c82);return _0x1d41fb[_0x508392(0x12f)]({'mediaPath':_0x2c3391[_0x508392(0x12b)],'mediaName':_0x2c3391[_0x508392(0x149)]}),_0x28a503[_0x508392(0x113)]({'mensagem':_0x508392(0x138)});}catch(_0x208284){throw new AppError_1['default'](_0x208284[_0x508392(0x142)]);}};exports[a29_0x46dc6a(0x11a)]=mediaUpload;const deleteMedia=async(_0x11c3c6,_0x1b5a04)=>{const _0x22929c=a29_0x46dc6a,{queueId:_0x24dbfd}=_0x11c3c6['params'];try{const _0x136db4=await Queue_1[_0x22929c(0x120)][_0x22929c(0x13e)](_0x24dbfd),_0xa3b1fc=path_1[_0x22929c(0x120)][_0x22929c(0x135)](_0x22929c(0x11c),_0x22929c(0x130)+_0x136db4[_0x22929c(0x14d)],_0x136db4[_0x22929c(0x114)]),_0x22d7b4=fs_1['default'][_0x22929c(0x118)](_0xa3b1fc);return _0x22d7b4&&fs_1[_0x22929c(0x120)][_0x22929c(0x125)](_0xa3b1fc),_0x136db4[_0x22929c(0x114)]=null,_0x136db4[_0x22929c(0x12a)]=null,await _0x136db4[_0x22929c(0x12d)](),_0x1b5a04[_0x22929c(0x113)]({'mensagem':_0x22929c(0x13b)});}catch(_0x3db027){throw new AppError_1['default'](_0x3db027[_0x22929c(0x142)]);}};exports[a29_0x46dc6a(0x119)]=deleteMedia;function a29_0x41a4(){const _0x4f4802=['index','update','company','../errors/AppError','11263JBcVcH','../services/QueueService/UpdateQueueService','files','resolve','show','defineProperty','Arquivo\x20Salvo','1104555ypzNaO','store','Arquivo\x20excluído','__esModule','body','findByPk','-queue','params','query','message','getIO','apply','456909RTmYua','search','(((.+)+)+)+$','-mainchannel','originalname','../libs/socket','constructor','../services/QueueService/DeleteQueueService','companyId','1262520lspNfl','status','../services/QueueService/ListQueuesService','../models/Queue','2QxiUWv','send','mediaPath','json','company-','delete','existsSync','deleteMedia','mediaUpload','__importDefault','public','user','isNil','lodash','default','226133qopSju','emit','../services/QueueService/CreateQueueService','remove','unlinkSync','333052vzIhCF','1892169quqxpx','1112IOpYdq','toString','mediaName','filename','head','save'];a29_0x41a4=function(){return _0x4f4802;};return a29_0x41a4();}