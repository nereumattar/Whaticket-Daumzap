const a38_0x13b84e=a38_0x50ba;function a38_0x50ba(_0x4b06a7,_0x180b5f){const _0x20fffd=a38_0x433e();return a38_0x50ba=function(_0x4bab03,_0x585b1d){_0x4bab03=_0x4bab03-0x9a;let _0x433e54=_0x20fffd[_0x4bab03];return _0x433e54;},a38_0x50ba(_0x4b06a7,_0x180b5f);}(function(_0x275fd4,_0xa5721c){const _0x87effc=a38_0x50ba,_0x1ac939=_0x275fd4();while(!![]){try{const _0x1b6878=parseInt(_0x87effc(0x9e))/0x1*(parseInt(_0x87effc(0xb5))/0x2)+parseInt(_0x87effc(0xca))/0x3*(parseInt(_0x87effc(0xc3))/0x4)+parseInt(_0x87effc(0xc4))/0x5*(parseInt(_0x87effc(0xa9))/0x6)+parseInt(_0x87effc(0xb4))/0x7*(parseInt(_0x87effc(0x9b))/0x8)+parseInt(_0x87effc(0xcb))/0x9*(-parseInt(_0x87effc(0xb9))/0xa)+-parseInt(_0x87effc(0xb8))/0xb+parseInt(_0x87effc(0xb3))/0xc*(parseInt(_0x87effc(0xa0))/0xd);if(_0x1b6878===_0xa5721c)break;else _0x1ac939['push'](_0x1ac939['shift']());}catch(_0x3b6da1){_0x1ac939['push'](_0x1ac939['shift']());}}}(a38_0x433e,0xb1e05));const a38_0x585b1d=(function(){let _0x11ef3a=!![];return function(_0xa1a3ec,_0x2ea9ae){const _0x463532=_0x11ef3a?function(){const _0x4003a3=a38_0x50ba;if(_0x2ea9ae){const _0x1a67d5=_0x2ea9ae[_0x4003a3(0xab)](_0xa1a3ec,arguments);return _0x2ea9ae=null,_0x1a67d5;}}:function(){};return _0x11ef3a=![],_0x463532;};}()),a38_0x4bab03=a38_0x585b1d(this,function(){const _0x5d6947=a38_0x50ba;return a38_0x4bab03['toString']()[_0x5d6947(0xbb)](_0x5d6947(0xcc))['toString']()['constructor'](a38_0x4bab03)[_0x5d6947(0xbb)](_0x5d6947(0xcc));});a38_0x4bab03();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x3fa816){const _0x560ea6=a38_0x50ba;return _0x3fa816&&_0x3fa816[_0x560ea6(0xa1)]?_0x3fa816:{'default':_0x3fa816};};Object[a38_0x13b84e(0xa6)](exports,a38_0x13b84e(0xa1),{'value':!![]}),exports[a38_0x13b84e(0xa2)]=exports[a38_0x13b84e(0xaa)]=exports['removeAll']=exports[a38_0x13b84e(0xa7)]=exports[a38_0x13b84e(0xb6)]=exports['show']=exports[a38_0x13b84e(0xc1)]=exports[a38_0x13b84e(0xce)]=exports[a38_0x13b84e(0xc0)]=void 0x0;const socket_1=require('../libs/socket'),AppError_1=__importDefault(require(a38_0x13b84e(0xba))),CreateService_1=__importDefault(require(a38_0x13b84e(0x9a))),ListService_1=__importDefault(require(a38_0x13b84e(0xae))),UpdateService_1=__importDefault(require(a38_0x13b84e(0xd2))),ShowService_1=__importDefault(require(a38_0x13b84e(0xbd))),DeleteService_1=__importDefault(require(a38_0x13b84e(0xd0))),DeleteAllTagService_1=__importDefault(require(a38_0x13b84e(0xa3))),SimpleListService_1=__importDefault(require('../services/TagServices/SimpleListService')),SyncTagsService_1=__importDefault(require(a38_0x13b84e(0xa8))),KanbanListService_1=__importDefault(require(a38_0x13b84e(0xc8))),index=async(_0x47cd5b,_0x4c82c7)=>{const _0x126d41=a38_0x13b84e,{pageNumber:_0x2cedd0,searchParam:_0x437a60}=_0x47cd5b[_0x126d41(0xb7)],{companyId:_0x460b99}=_0x47cd5b[_0x126d41(0xaf)],{tags:_0x5a49b5,count:_0x436e7f,hasMore:_0x100649}=await(0x0,ListService_1['default'])({'searchParam':_0x437a60,'pageNumber':_0x2cedd0,'companyId':_0x460b99});return _0x4c82c7[_0x126d41(0xc5)]({'tags':_0x5a49b5,'count':_0x436e7f,'hasMore':_0x100649});};exports[a38_0x13b84e(0xc0)]=index;const store=async(_0x13ef5d,_0x509962)=>{const _0x37b1ac=a38_0x13b84e,{name:_0x2cd7d3,color:_0x51890c,kanban:_0x2c905e}=_0x13ef5d[_0x37b1ac(0xb2)],{companyId:_0x4747f0}=_0x13ef5d[_0x37b1ac(0xaf)],_0x161be2=await(0x0,CreateService_1[_0x37b1ac(0xa5)])({'name':_0x2cd7d3,'color':_0x51890c,'kanban':_0x2c905e||null,'companyId':_0x4747f0}),_0x48d3c0=(0x0,socket_1[_0x37b1ac(0xad)])();return _0x48d3c0['to'](_0x37b1ac(0xd1)+_0x4747f0+_0x37b1ac(0xbe))[_0x37b1ac(0xbf)](_0x37b1ac(0xac),{'action':_0x37b1ac(0xc7),'tag':_0x161be2}),_0x509962[_0x37b1ac(0xb0)](0xc8)[_0x37b1ac(0xc5)](_0x161be2);};function a38_0x433e(){const _0x4b2b79=['getIO','../services/TagServices/ListService','user','status','removeAll','body','156fhGrat','7ZgtBhD','3242oEjzJT','update','query','14276757MuFkNL','30950zhDfcQ','../errors/AppError','search','show','../services/TagServices/ShowService','-mainchannel','emit','index','kanban','delete','5483732cLxgLv','6304755DElxGg','json','Error\x20deleting\x20all\x20tags','create','../services/TagServices/KanbanListService','All\x20tags\x20deleted\x20successfully','3TrhgvP','4086RtFQMM','(((.+)+)+)+$','profile','store','send','../services/TagServices/DeleteService','company-','../services/TagServices/UpdateService','../services/TagServices/CreateService','1427408WOeTqh','params','admin','353dYpjqW','Tag\x20deleted','49075JEqQzX','__esModule','syncTags','../services/TagServices/DeleteAllTagService','error','default','defineProperty','remove','../services/TagServices/SyncTagsService','6mQqINs','list','apply','tag'];a38_0x433e=function(){return _0x4b2b79;};return a38_0x433e();}exports[a38_0x13b84e(0xce)]=store;const kanban=async(_0x1878e2,_0x3c9d50)=>{const _0x260837=a38_0x13b84e,{companyId:_0x27dc38}=_0x1878e2[_0x260837(0xaf)],_0x42bf95=await(0x0,KanbanListService_1[_0x260837(0xa5)])({'companyId':_0x27dc38});return _0x3c9d50[_0x260837(0xc5)]({'lista':_0x42bf95});};exports[a38_0x13b84e(0xc1)]=kanban;const show=async(_0xf60c89,_0x2ca16f)=>{const _0xd5a150=a38_0x13b84e,{tagId:_0x318e33}=_0xf60c89['params'],_0x5a2fe0=await(0x0,ShowService_1[_0xd5a150(0xa5)])(_0x318e33);return _0x2ca16f[_0xd5a150(0xb0)](0xc8)[_0xd5a150(0xc5)](_0x5a2fe0);};exports[a38_0x13b84e(0xbc)]=show;const update=async(_0x2e39cb,_0x34fe95)=>{const _0x370e51=a38_0x13b84e;if(_0x2e39cb[_0x370e51(0xaf)][_0x370e51(0xcd)]!==_0x370e51(0x9d))throw new AppError_1[(_0x370e51(0xa5))]('ERR_NO_PERMISSION',0x193);const {tagId:_0x27b547}=_0x2e39cb[_0x370e51(0x9c)],_0x53f744=_0x2e39cb[_0x370e51(0xb2)],_0x2b496d=await(0x0,UpdateService_1[_0x370e51(0xa5)])({'tagData':_0x53f744,'id':_0x27b547}),_0x3ab30b=(0x0,socket_1['getIO'])();return _0x3ab30b[_0x370e51(0xbf)](_0x370e51(0xac),{'action':_0x370e51(0xb6),'tag':_0x2b496d}),_0x34fe95['status'](0xc8)[_0x370e51(0xc5)](_0x2b496d);};exports[a38_0x13b84e(0xb6)]=update;const remove=async(_0x414840,_0x1c0cbb)=>{const _0x289603=a38_0x13b84e,{tagId:_0x1729a3}=_0x414840[_0x289603(0x9c)];await(0x0,DeleteService_1[_0x289603(0xa5)])(_0x1729a3);const _0x435451=(0x0,socket_1['getIO'])();return _0x435451[_0x289603(0xbf)](_0x289603(0xac),{'action':_0x289603(0xc2),'tagId':_0x1729a3}),_0x1c0cbb[_0x289603(0xb0)](0xc8)[_0x289603(0xc5)]({'message':_0x289603(0x9f)});};exports[a38_0x13b84e(0xa7)]=remove;const removeAll=async(_0x4c0d17,_0x2c5d48)=>{const _0x20b879=a38_0x13b84e,{companyId:_0x2f355b}=_0x4c0d17['user'];try{return await(0x0,DeleteAllTagService_1['default'])(_0x2f355b),_0x2c5d48[_0x20b879(0xb0)](0xc8)[_0x20b879(0xcf)]({'message':_0x20b879(0xc9)});}catch(_0x329cc9){return console[_0x20b879(0xa4)](_0x329cc9),_0x2c5d48[_0x20b879(0xb0)](0x1f4)[_0x20b879(0xcf)]({'message':_0x20b879(0xc6)});}};exports[a38_0x13b84e(0xb1)]=removeAll;const list=async(_0x22e850,_0x64098b)=>{const _0x5182b4=a38_0x13b84e,{searchParam:_0x1bf0e8}=_0x22e850[_0x5182b4(0xb7)],{companyId:_0xc8af0}=_0x22e850[_0x5182b4(0xaf)],_0x23a63a=await(0x0,SimpleListService_1['default'])({'searchParam':_0x1bf0e8,'companyId':_0xc8af0});return _0x64098b[_0x5182b4(0xc5)](_0x23a63a);};exports[a38_0x13b84e(0xaa)]=list;const syncTags=async(_0x4f1553,_0x37f509)=>{const _0x19a017=a38_0x13b84e,_0x4fa9e2=_0x4f1553['body'],{companyId:_0x530927}=_0x4f1553[_0x19a017(0xaf)],_0x2b3da4=await(0x0,SyncTagsService_1['default'])({..._0x4fa9e2,'companyId':_0x530927});return _0x37f509['json'](_0x2b3da4);};exports[a38_0x13b84e(0xa2)]=syncTags;