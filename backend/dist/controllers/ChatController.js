const a12_0x356595=a12_0x5d23;(function(_0x53eb76,_0x3d9eae){const _0x25ddbc=a12_0x5d23,_0x37b6f5=_0x53eb76();while(!![]){try{const _0x5e77ad=-parseInt(_0x25ddbc(0x133))/0x1+parseInt(_0x25ddbc(0x157))/0x2*(parseInt(_0x25ddbc(0x13c))/0x3)+parseInt(_0x25ddbc(0x12e))/0x4+parseInt(_0x25ddbc(0x132))/0x5*(parseInt(_0x25ddbc(0x128))/0x6)+-parseInt(_0x25ddbc(0x13b))/0x7+parseInt(_0x25ddbc(0x14e))/0x8+parseInt(_0x25ddbc(0x14d))/0x9*(-parseInt(_0x25ddbc(0x153))/0xa);if(_0x5e77ad===_0x3d9eae)break;else _0x37b6f5['push'](_0x37b6f5['shift']());}catch(_0x1de34a){_0x37b6f5['push'](_0x37b6f5['shift']());}}}(a12_0x4b44,0xd62c2));const a12_0x4b571b=(function(){let _0x8be667=!![];return function(_0xd4f7a7,_0x3f3437){const _0x5700dc=_0x8be667?function(){const _0x3032f1=a12_0x5d23;if(_0x3f3437){const _0x1d6987=_0x3f3437[_0x3032f1(0x131)](_0xd4f7a7,arguments);return _0x3f3437=null,_0x1d6987;}}:function(){};return _0x8be667=![],_0x5700dc;};}()),a12_0x1cb318=a12_0x4b571b(this,function(){const _0x4d4f87=a12_0x5d23;return a12_0x1cb318[_0x4d4f87(0x139)]()[_0x4d4f87(0x13e)](_0x4d4f87(0x137))[_0x4d4f87(0x139)]()['constructor'](a12_0x1cb318)[_0x4d4f87(0x13e)](_0x4d4f87(0x137));});a12_0x1cb318();'use strict';var __importDefault=this&&this[a12_0x356595(0x124)]||function(_0x1001a2){const _0x4daa05=a12_0x356595;return _0x1001a2&&_0x1001a2[_0x4daa05(0x146)]?_0x1001a2:{'default':_0x1001a2};};Object[a12_0x356595(0x14f)](exports,a12_0x356595(0x146),{'value':!![]}),exports[a12_0x356595(0x130)]=exports[a12_0x356595(0x151)]=exports['saveMessage']=exports[a12_0x356595(0x12d)]=exports[a12_0x356595(0x13d)]=exports[a12_0x356595(0x15a)]=exports[a12_0x356595(0x138)]=exports[a12_0x356595(0x126)]=void 0x0;const socket_1=require(a12_0x356595(0x143)),CreateService_1=__importDefault(require(a12_0x356595(0x134))),ListService_1=__importDefault(require(a12_0x356595(0x12f))),ShowFromUuidService_1=__importDefault(require('../services/ChatService/ShowFromUuidService')),DeleteService_1=__importDefault(require(a12_0x356595(0x155))),FindMessages_1=__importDefault(require(a12_0x356595(0x145))),UpdateService_1=__importDefault(require('../services/ChatService/UpdateService')),Chat_1=__importDefault(require(a12_0x356595(0x147))),CreateMessageService_1=__importDefault(require(a12_0x356595(0x12c))),User_1=__importDefault(require(a12_0x356595(0x144))),ChatUser_1=__importDefault(require(a12_0x356595(0x13a))),index=async(_0x4525c9,_0x56cb7f)=>{const _0x2d1c1a=a12_0x356595,{pageNumber:_0x1c0fe2}=_0x4525c9[_0x2d1c1a(0x13f)],_0x5e6c27=+_0x4525c9[_0x2d1c1a(0x140)]['id'],{records:_0x12a162,count:_0x96af82,hasMore:_0x5ba059}=await(0x0,ListService_1[_0x2d1c1a(0x125)])({'ownerId':_0x5e6c27,'pageNumber':_0x1c0fe2});return _0x56cb7f[_0x2d1c1a(0x154)]({'records':_0x12a162,'count':_0x96af82,'hasMore':_0x5ba059});};exports[a12_0x356595(0x126)]=index;function a12_0x4b44(){const _0x1db00d=['(((.+)+)+)+$','store','toString','../models/ChatUser','9465484AbeEka','189WYSUnU','show','search','query','user','getIO','-chat-','../libs/socket','../models/User','../services/ChatService/FindMessages','__esModule','../models/Chat','body','delete','status','forEach','saveMessage','9CTevHQ','9705184ohcOHi','defineProperty','-chat-user-','checkAsRead','emit','11858930rbJUlW','json','../services/ChatService/DeleteService','company-','12444RXWjBf','findByPk','params','update','-chat','-mainchannel','__importDefault','default','index','users','12Jbabiy','userId','new-message','Chat\x20deleted','../services/ChatService/CreateMessageService','remove','898620RqTJnG','../services/ChatService/ListService','messages','apply','4037545SakjEW','29452dIYLqI','../services/ChatService/CreateService','owner','findOne'];a12_0x4b44=function(){return _0x1db00d;};return a12_0x4b44();}const store=async(_0x5d590f,_0x2fa41d)=>{const _0x5814c8=a12_0x356595,{companyId:_0x130e5c}=_0x5d590f[_0x5814c8(0x140)],_0x50e9fc=+_0x5d590f[_0x5814c8(0x140)]['id'],_0x25c0a2=_0x5d590f[_0x5814c8(0x148)],_0x43d6cf=await(0x0,CreateService_1[_0x5814c8(0x125)])({..._0x25c0a2,'ownerId':_0x50e9fc,'companyId':_0x130e5c}),_0x3b3b5d=(0x0,socket_1['getIO'])();return _0x43d6cf[_0x5814c8(0x127)][_0x5814c8(0x14b)](_0x2dcc2d=>{const _0x35506e=_0x5814c8;_0x3b3b5d['to']('company-'+_0x130e5c+_0x35506e(0x123))['emit']('company-'+_0x130e5c+_0x35506e(0x150)+_0x2dcc2d['userId'],{'action':'create','record':_0x43d6cf});}),_0x2fa41d['status'](0xc8)[_0x5814c8(0x154)](_0x43d6cf);};exports[a12_0x356595(0x138)]=store;const update=async(_0x483cbd,_0x478b93)=>{const _0x27dc65=a12_0x356595,{companyId:_0x545ac4}=_0x483cbd[_0x27dc65(0x140)],_0x335e20=_0x483cbd[_0x27dc65(0x148)],{id:_0x29a8e5}=_0x483cbd[_0x27dc65(0x159)],_0x151e38=await(0x0,UpdateService_1[_0x27dc65(0x125)])({..._0x335e20,'id':+_0x29a8e5}),_0x435560=(0x0,socket_1[_0x27dc65(0x141)])();return _0x151e38[_0x27dc65(0x127)]['forEach'](_0x41ffd3=>{const _0x218ce9=_0x27dc65;_0x435560['to'](_0x218ce9(0x156)+_0x545ac4+_0x218ce9(0x123))[_0x218ce9(0x152)](_0x218ce9(0x156)+_0x545ac4+_0x218ce9(0x150)+_0x41ffd3[_0x218ce9(0x129)],{'action':_0x218ce9(0x15a),'record':_0x151e38});}),_0x478b93['status'](0xc8)[_0x27dc65(0x154)](_0x151e38);};exports['update']=update;const show=async(_0xcc064b,_0x5012e0)=>{const _0x5aa094=a12_0x356595,{id:_0x36c8ca}=_0xcc064b[_0x5aa094(0x159)],_0x5b0e49=await(0x0,ShowFromUuidService_1['default'])(_0x36c8ca);return _0x5012e0[_0x5aa094(0x14a)](0xc8)[_0x5aa094(0x154)](_0x5b0e49);};exports[a12_0x356595(0x13d)]=show;const remove=async(_0x496b82,_0x5e810c)=>{const _0x276ae7=a12_0x356595,{id:_0x40c054}=_0x496b82[_0x276ae7(0x159)],{companyId:_0x47453c}=_0x496b82[_0x276ae7(0x140)];await(0x0,DeleteService_1[_0x276ae7(0x125)])(_0x40c054);const _0xeafec4=(0x0,socket_1['getIO'])();return _0xeafec4['to'](_0x276ae7(0x156)+_0x47453c+_0x276ae7(0x123))[_0x276ae7(0x152)](_0x276ae7(0x156)+_0x47453c+_0x276ae7(0x122),{'action':_0x276ae7(0x149),'id':_0x40c054}),_0x5e810c[_0x276ae7(0x14a)](0xc8)[_0x276ae7(0x154)]({'message':_0x276ae7(0x12b)});};exports[a12_0x356595(0x12d)]=remove;const saveMessage=async(_0x263dbb,_0x4cc424)=>{const _0x6ac866=a12_0x356595,{companyId:_0x3ba9eb}=_0x263dbb[_0x6ac866(0x140)],{message:_0x29e442}=_0x263dbb[_0x6ac866(0x148)],{id:_0x5e1b3a}=_0x263dbb['params'],_0xe404fc=+_0x263dbb[_0x6ac866(0x140)]['id'],_0x2038e8=+_0x5e1b3a,_0x521a4a=await(0x0,CreateMessageService_1[_0x6ac866(0x125)])({'chatId':_0x2038e8,'senderId':_0xe404fc,'message':_0x29e442}),_0x507e95=await Chat_1[_0x6ac866(0x125)]['findByPk'](_0x2038e8,{'include':[{'model':User_1[_0x6ac866(0x125)],'as':_0x6ac866(0x135)},{'model':ChatUser_1[_0x6ac866(0x125)],'as':_0x6ac866(0x127)}]}),_0x3acfab=(0x0,socket_1['getIO'])();return _0x3acfab['to']('company-'+_0x3ba9eb+_0x6ac866(0x123))[_0x6ac866(0x152)](_0x6ac866(0x156)+_0x3ba9eb+_0x6ac866(0x142)+_0x2038e8,{'action':'new-message','newMessage':_0x521a4a,'chat':_0x507e95}),_0x3acfab['to'](_0x6ac866(0x156)+_0x3ba9eb+'-mainchannel')[_0x6ac866(0x152)](_0x6ac866(0x156)+_0x3ba9eb+_0x6ac866(0x122),{'action':_0x6ac866(0x12a),'newMessage':_0x521a4a,'chat':_0x507e95}),_0x4cc424[_0x6ac866(0x154)](_0x521a4a);};exports[a12_0x356595(0x14c)]=saveMessage;const checkAsRead=async(_0x1bed49,_0x5bcc66)=>{const _0x24c817=a12_0x356595,{companyId:_0x5f31d7}=_0x1bed49[_0x24c817(0x140)],{userId:_0x3a4122}=_0x1bed49[_0x24c817(0x148)],{id:_0x482243}=_0x1bed49[_0x24c817(0x159)],_0x17b9fb=await ChatUser_1[_0x24c817(0x125)][_0x24c817(0x136)]({'where':{'chatId':_0x482243,'userId':_0x3a4122}});await _0x17b9fb[_0x24c817(0x15a)]({'unreads':0x0});const _0x561372=await Chat_1[_0x24c817(0x125)][_0x24c817(0x158)](_0x482243,{'include':[{'model':User_1['default'],'as':_0x24c817(0x135)},{'model':ChatUser_1[_0x24c817(0x125)],'as':_0x24c817(0x127)}]}),_0x5e2874=(0x0,socket_1['getIO'])();return _0x5e2874['to'](_0x24c817(0x156)+_0x5f31d7+_0x24c817(0x123))[_0x24c817(0x152)]('company-'+_0x5f31d7+_0x24c817(0x142)+_0x482243,{'action':_0x24c817(0x15a),'chat':_0x561372}),_0x5e2874['to'](_0x24c817(0x156)+_0x5f31d7+_0x24c817(0x123))[_0x24c817(0x152)]('company-'+_0x5f31d7+_0x24c817(0x122),{'action':_0x24c817(0x15a),'chat':_0x561372}),_0x5bcc66[_0x24c817(0x154)](_0x561372);};exports[a12_0x356595(0x151)]=checkAsRead;function a12_0x5d23(_0x981eb9,_0x1e6a94){const _0x9247f1=a12_0x4b44();return a12_0x5d23=function(_0x1cb318,_0x4b571b){_0x1cb318=_0x1cb318-0x122;let _0x4b4474=_0x9247f1[_0x1cb318];return _0x4b4474;},a12_0x5d23(_0x981eb9,_0x1e6a94);}const messages=async(_0x4ddc76,_0x327ca6)=>{const _0xdcac5=a12_0x356595,{pageNumber:_0x2a08dd}=_0x4ddc76[_0xdcac5(0x13f)],{id:_0x1f0ac5}=_0x4ddc76[_0xdcac5(0x159)],_0x4a5aaf=+_0x4ddc76[_0xdcac5(0x140)]['id'],{records:_0xe84165,count:_0xda69a6,hasMore:_0x292be4}=await(0x0,FindMessages_1[_0xdcac5(0x125)])({'chatId':_0x1f0ac5,'ownerId':_0x4a5aaf,'pageNumber':_0x2a08dd});return _0x327ca6['json']({'records':_0xe84165,'count':_0xda69a6,'hasMore':_0x292be4});};exports[a12_0x356595(0x130)]=messages;