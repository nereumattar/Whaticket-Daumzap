const a12_0x265588=a12_0x1b2d;(function(_0x224741,_0x27660e){const _0x3f7946=a12_0x1b2d,_0x114ffb=_0x224741();while(!![]){try{const _0x57d439=-parseInt(_0x3f7946(0x166))/0x1*(-parseInt(_0x3f7946(0x151))/0x2)+parseInt(_0x3f7946(0x168))/0x3+-parseInt(_0x3f7946(0x13d))/0x4+parseInt(_0x3f7946(0x169))/0x5+parseInt(_0x3f7946(0x142))/0x6*(parseInt(_0x3f7946(0x16b))/0x7)+-parseInt(_0x3f7946(0x15f))/0x8+parseInt(_0x3f7946(0x13a))/0x9*(-parseInt(_0x3f7946(0x156))/0xa);if(_0x57d439===_0x27660e)break;else _0x114ffb['push'](_0x114ffb['shift']());}catch(_0x13dc10){_0x114ffb['push'](_0x114ffb['shift']());}}}(a12_0x8fcb,0xdf109));const a12_0x5cfe85=(function(){let _0xfb0b5b=!![];return function(_0x19f73c,_0x33746b){const _0x5c02c6=_0xfb0b5b?function(){const _0x4ee77d=a12_0x1b2d;if(_0x33746b){const _0x1efba5=_0x33746b[_0x4ee77d(0x170)](_0x19f73c,arguments);return _0x33746b=null,_0x1efba5;}}:function(){};return _0xfb0b5b=![],_0x5c02c6;};}()),a12_0x46c9bd=a12_0x5cfe85(this,function(){const _0x450e72=a12_0x1b2d;return a12_0x46c9bd['toString']()[_0x450e72(0x158)]('(((.+)+)+)+$')['toString']()[_0x450e72(0x160)](a12_0x46c9bd)[_0x450e72(0x158)](_0x450e72(0x149));});a12_0x46c9bd();'use strict';var __importDefault=this&&this[a12_0x265588(0x138)]||function(_0x5d91bf){const _0xa8f21b=a12_0x265588;return _0x5d91bf&&_0x5d91bf[_0xa8f21b(0x140)]?_0x5d91bf:{'default':_0x5d91bf};};Object[a12_0x265588(0x15c)](exports,a12_0x265588(0x140),{'value':!![]}),exports[a12_0x265588(0x16a)]=exports[a12_0x265588(0x143)]=exports['saveMessage']=exports[a12_0x265588(0x15b)]=exports[a12_0x265588(0x171)]=exports[a12_0x265588(0x153)]=exports['store']=exports[a12_0x265588(0x161)]=void 0x0;const socket_1=require(a12_0x265588(0x150)),CreateService_1=__importDefault(require(a12_0x265588(0x154))),ListService_1=__importDefault(require(a12_0x265588(0x13c))),ShowFromUuidService_1=__importDefault(require(a12_0x265588(0x145))),DeleteService_1=__importDefault(require(a12_0x265588(0x144))),FindMessages_1=__importDefault(require(a12_0x265588(0x159))),UpdateService_1=__importDefault(require(a12_0x265588(0x15d))),Chat_1=__importDefault(require(a12_0x265588(0x155))),CreateMessageService_1=__importDefault(require(a12_0x265588(0x136))),User_1=__importDefault(require(a12_0x265588(0x14e))),ChatUser_1=__importDefault(require(a12_0x265588(0x16d))),index=async(_0x3b2637,_0x397593)=>{const _0x1f7c60=a12_0x265588,{pageNumber:_0x1abfdf}=_0x3b2637[_0x1f7c60(0x14d)],_0x371c90=+_0x3b2637[_0x1f7c60(0x167)]['id'],{records:_0x3088a3,count:_0x2eeee5,hasMore:_0x13006d}=await(0x0,ListService_1[_0x1f7c60(0x163)])({'ownerId':_0x371c90,'pageNumber':_0x1abfdf});return _0x397593[_0x1f7c60(0x137)]({'records':_0x3088a3,'count':_0x2eeee5,'hasMore':_0x13006d});};exports[a12_0x265588(0x161)]=index;const store=async(_0x35ed25,_0x3e583e)=>{const _0xa2c818=a12_0x265588,{companyId:_0x3c9046}=_0x35ed25[_0xa2c818(0x167)],_0x266fda=+_0x35ed25[_0xa2c818(0x167)]['id'],_0x19d6f1=_0x35ed25[_0xa2c818(0x16f)],_0x559722=await(0x0,CreateService_1[_0xa2c818(0x163)])({..._0x19d6f1,'ownerId':_0x266fda,'companyId':_0x3c9046}),_0x171ca3=(0x0,socket_1[_0xa2c818(0x146)])();return _0x559722[_0xa2c818(0x147)][_0xa2c818(0x16e)](_0x5640ee=>{const _0x43d94a=_0xa2c818;_0x171ca3['to'](_0x43d94a(0x157)+_0x3c9046+_0x43d94a(0x14c))[_0x43d94a(0x14b)](_0x43d94a(0x157)+_0x3c9046+_0x43d94a(0x162)+_0x5640ee[_0x43d94a(0x141)],{'action':_0x43d94a(0x152),'record':_0x559722});}),_0x3e583e[_0xa2c818(0x13b)](0xc8)[_0xa2c818(0x137)](_0x559722);};exports[a12_0x265588(0x16c)]=store;const update=async(_0x176b90,_0x58e7ef)=>{const _0x1e8acd=a12_0x265588,{companyId:_0xaba779}=_0x176b90[_0x1e8acd(0x167)],_0x3a8a43=_0x176b90[_0x1e8acd(0x16f)],{id:_0x53d97c}=_0x176b90[_0x1e8acd(0x13e)],_0x2ef455=await(0x0,UpdateService_1['default'])({..._0x3a8a43,'id':+_0x53d97c}),_0x3183af=(0x0,socket_1[_0x1e8acd(0x146)])();return _0x2ef455[_0x1e8acd(0x147)][_0x1e8acd(0x16e)](_0x2c01ad=>{const _0xaacb0a=_0x1e8acd;_0x3183af['to']('company-'+_0xaba779+_0xaacb0a(0x14c))['emit'](_0xaacb0a(0x157)+_0xaba779+_0xaacb0a(0x162)+_0x2c01ad[_0xaacb0a(0x141)],{'action':_0xaacb0a(0x153),'record':_0x2ef455});}),_0x58e7ef[_0x1e8acd(0x13b)](0xc8)[_0x1e8acd(0x137)](_0x2ef455);};exports[a12_0x265588(0x153)]=update;const show=async(_0x30cfd1,_0x53cc63)=>{const _0x12cece=a12_0x265588,{id:_0xc9f7fd}=_0x30cfd1[_0x12cece(0x13e)],_0x1bd72a=await(0x0,ShowFromUuidService_1['default'])(_0xc9f7fd);return _0x53cc63[_0x12cece(0x13b)](0xc8)['json'](_0x1bd72a);};exports[a12_0x265588(0x171)]=show;const remove=async(_0x179996,_0x1e7d61)=>{const _0x3e8d16=a12_0x265588,{id:_0x5b1453}=_0x179996[_0x3e8d16(0x13e)],{companyId:_0x4feee3}=_0x179996[_0x3e8d16(0x167)];await(0x0,DeleteService_1[_0x3e8d16(0x163)])(_0x5b1453);const _0x3cd83b=(0x0,socket_1[_0x3e8d16(0x146)])();return _0x3cd83b['to'](_0x3e8d16(0x157)+_0x4feee3+_0x3e8d16(0x14c))[_0x3e8d16(0x14b)]('company-'+_0x4feee3+_0x3e8d16(0x15a),{'action':_0x3e8d16(0x139),'id':_0x5b1453}),_0x1e7d61[_0x3e8d16(0x13b)](0xc8)[_0x3e8d16(0x137)]({'message':_0x3e8d16(0x13f)});};exports['remove']=remove;const saveMessage=async(_0x5a011e,_0x2c7e9c)=>{const _0x4d58af=a12_0x265588,{companyId:_0x2543ce}=_0x5a011e[_0x4d58af(0x167)],{message:_0x2c770c}=_0x5a011e[_0x4d58af(0x16f)],{id:_0x1be5e0}=_0x5a011e['params'],_0x5a861f=+_0x5a011e[_0x4d58af(0x167)]['id'],_0x54951d=+_0x1be5e0,_0x5d8ee9=await(0x0,CreateMessageService_1[_0x4d58af(0x163)])({'chatId':_0x54951d,'senderId':_0x5a861f,'message':_0x2c770c}),_0x1951f7=await Chat_1['default'][_0x4d58af(0x14f)](_0x54951d,{'include':[{'model':User_1[_0x4d58af(0x163)],'as':'owner'},{'model':ChatUser_1[_0x4d58af(0x163)],'as':'users'}]}),_0x458002=(0x0,socket_1[_0x4d58af(0x146)])();return _0x458002['to'](_0x4d58af(0x157)+_0x2543ce+_0x4d58af(0x14c))[_0x4d58af(0x14b)](_0x4d58af(0x157)+_0x2543ce+_0x4d58af(0x15e)+_0x54951d,{'action':'new-message','newMessage':_0x5d8ee9,'chat':_0x1951f7}),_0x458002['to'](_0x4d58af(0x157)+_0x2543ce+_0x4d58af(0x14c))['emit'](_0x4d58af(0x157)+_0x2543ce+_0x4d58af(0x15a),{'action':_0x4d58af(0x165),'newMessage':_0x5d8ee9,'chat':_0x1951f7}),_0x2c7e9c[_0x4d58af(0x137)](_0x5d8ee9);};exports[a12_0x265588(0x148)]=saveMessage;const checkAsRead=async(_0x18d618,_0x593242)=>{const _0x39950b=a12_0x265588,{companyId:_0x416f2d}=_0x18d618[_0x39950b(0x167)],{userId:_0x2ebe28}=_0x18d618[_0x39950b(0x16f)],{id:_0x4248b7}=_0x18d618[_0x39950b(0x13e)],_0x5effef=await ChatUser_1[_0x39950b(0x163)][_0x39950b(0x164)]({'where':{'chatId':_0x4248b7,'userId':_0x2ebe28}});await _0x5effef[_0x39950b(0x153)]({'unreads':0x0});const _0x5c585e=await Chat_1[_0x39950b(0x163)]['findByPk'](_0x4248b7,{'include':[{'model':User_1[_0x39950b(0x163)],'as':_0x39950b(0x14a)},{'model':ChatUser_1[_0x39950b(0x163)],'as':_0x39950b(0x147)}]}),_0x398a75=(0x0,socket_1[_0x39950b(0x146)])();return _0x398a75['to']('company-'+_0x416f2d+'-mainchannel')[_0x39950b(0x14b)](_0x39950b(0x157)+_0x416f2d+_0x39950b(0x15e)+_0x4248b7,{'action':_0x39950b(0x153),'chat':_0x5c585e}),_0x398a75['to']('company-'+_0x416f2d+_0x39950b(0x14c))[_0x39950b(0x14b)](_0x39950b(0x157)+_0x416f2d+'-chat',{'action':'update','chat':_0x5c585e}),_0x593242['json'](_0x5c585e);};function a12_0x1b2d(_0x1b619b,_0x21d1b0){const _0x48fea9=a12_0x8fcb();return a12_0x1b2d=function(_0x46c9bd,_0x5cfe85){_0x46c9bd=_0x46c9bd-0x136;let _0x8fcb69=_0x48fea9[_0x46c9bd];return _0x8fcb69;},a12_0x1b2d(_0x1b619b,_0x21d1b0);}exports[a12_0x265588(0x143)]=checkAsRead;const messages=async(_0x2e3160,_0xfb18bd)=>{const _0x64ac33=a12_0x265588,{pageNumber:_0x223ed4}=_0x2e3160[_0x64ac33(0x14d)],{id:_0x4488c4}=_0x2e3160[_0x64ac33(0x13e)],_0x1a09ff=+_0x2e3160[_0x64ac33(0x167)]['id'],{records:_0x2d0d47,count:_0x2c690f,hasMore:_0x47dbcd}=await(0x0,FindMessages_1[_0x64ac33(0x163)])({'chatId':_0x4488c4,'ownerId':_0x1a09ff,'pageNumber':_0x223ed4});return _0xfb18bd[_0x64ac33(0x137)]({'records':_0x2d0d47,'count':_0x2c690f,'hasMore':_0x47dbcd});};exports[a12_0x265588(0x16a)]=messages;function a12_0x8fcb(){const _0x2a3f45=['search','../services/ChatService/FindMessages','-chat','remove','defineProperty','../services/ChatService/UpdateService','-chat-','10118192ImQOfr','constructor','index','-chat-user-','default','findOne','new-message','27039dwdwHl','user','4946739JYgAtx','5240380Ffmlxr','messages','41671GbSjxO','store','../models/ChatUser','forEach','body','apply','show','../services/ChatService/CreateMessageService','json','__importDefault','delete','54ovXsMe','status','../services/ChatService/ListService','950456PKsYGs','params','Chat\x20deleted','__esModule','userId','978KKlqLx','checkAsRead','../services/ChatService/DeleteService','../services/ChatService/ShowFromUuidService','getIO','users','saveMessage','(((.+)+)+)+$','owner','emit','-mainchannel','query','../models/User','findByPk','../libs/socket','22YpPFHb','create','update','../services/ChatService/CreateService','../models/Chat','2581160eXbRsh','company-'];a12_0x8fcb=function(){return _0x2a3f45;};return a12_0x8fcb();}