const a31_0x5aba03=a31_0x17f8;(function(_0x3ab440,_0x545047){const _0x3adaa8=a31_0x17f8,_0x10b54a=_0x3ab440();while(!![]){try{const _0x3de311=-parseInt(_0x3adaa8(0x198))/0x1*(-parseInt(_0x3adaa8(0x19d))/0x2)+parseInt(_0x3adaa8(0x1a6))/0x3+parseInt(_0x3adaa8(0x189))/0x4+-parseInt(_0x3adaa8(0x1a4))/0x5*(parseInt(_0x3adaa8(0x1a7))/0x6)+parseInt(_0x3adaa8(0x181))/0x7*(parseInt(_0x3adaa8(0x192))/0x8)+-parseInt(_0x3adaa8(0x1ac))/0x9*(parseInt(_0x3adaa8(0x1b1))/0xa)+-parseInt(_0x3adaa8(0x1a8))/0xb*(parseInt(_0x3adaa8(0x177))/0xc);if(_0x3de311===_0x545047)break;else _0x10b54a['push'](_0x10b54a['shift']());}catch(_0x283cf7){_0x10b54a['push'](_0x10b54a['shift']());}}}(a31_0x1165,0x4fd25));function a31_0x17f8(_0x3deeaf,_0x50c5b5){const _0x431dc8=a31_0x1165();return a31_0x17f8=function(_0x140a45,_0x385a81){_0x140a45=_0x140a45-0x177;let _0x116550=_0x431dc8[_0x140a45];return _0x116550;},a31_0x17f8(_0x3deeaf,_0x50c5b5);}function a31_0x1165(){const _0x4b0f0f=['findByPk','__importDefault','body','Option\x20Updated','../services/QueueOptionService/ListService','15MvUXya','existsSync','1598295mMxmPM','551790yzQbwM','11qZjTGE','../services/QueueOptionService/ShowService','Arquivo\x20Salvo','Option\x20Delected','1879371aiGlFV','head','save','mediaPath','../errors/AppError','30lwTUHQ','5002380HAOkYY','../services/QueueOptionService/UpdateService','originalname','default','../models/QueueOption','uploadFile','mediaName','filename','deleteMedia','remove','44296HnOceu','message','store','QueueOption\x20not\x20found','Arquivo\x20excluído','params','file','lodash','1493428ngQkbK','apply','path','send','search','status','companyId','toString','constructor','512rQwsQm','(((.+)+)+)+$','index','json','public','queue','227eGgrAs','resolve','files','unlinkSync','company','2952MilRjt','mediaUpload'];a31_0x1165=function(){return _0x4b0f0f;};return a31_0x1165();}const a31_0x385a81=(function(){let _0xe35fdf=!![];return function(_0xf24753,_0x3937e9){const _0x2e3c53=_0xe35fdf?function(){const _0x371768=a31_0x17f8;if(_0x3937e9){const _0xee8431=_0x3937e9[_0x371768(0x18a)](_0xf24753,arguments);return _0x3937e9=null,_0xee8431;}}:function(){};return _0xe35fdf=![],_0x2e3c53;};}()),a31_0x140a45=a31_0x385a81(this,function(){const _0x17c509=a31_0x17f8;return a31_0x140a45[_0x17c509(0x190)]()[_0x17c509(0x18d)](_0x17c509(0x193))['toString']()[_0x17c509(0x191)](a31_0x140a45)[_0x17c509(0x18d)](_0x17c509(0x193));});a31_0x140a45();'use strict';var __importDefault=this&&this[a31_0x5aba03(0x1a0)]||function(_0x4e8db3){return _0x4e8db3&&_0x4e8db3['__esModule']?_0x4e8db3:{'default':_0x4e8db3};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a31_0x5aba03(0x17f)]=exports[a31_0x5aba03(0x19e)]=exports['remove']=exports['uploadFile']=exports['update']=exports['show']=exports[a31_0x5aba03(0x183)]=exports[a31_0x5aba03(0x194)]=void 0x0;const CreateService_1=__importDefault(require('../services/QueueOptionService/CreateService')),ListService_1=__importDefault(require(a31_0x5aba03(0x1a3))),UpdateService_1=__importDefault(require(a31_0x5aba03(0x178))),ShowService_1=__importDefault(require(a31_0x5aba03(0x1a9))),DeleteService_1=__importDefault(require('../services/QueueOptionService/DeleteService')),lodash_1=require(a31_0x5aba03(0x188)),fs_1=__importDefault(require('fs')),path_1=__importDefault(require(a31_0x5aba03(0x18b))),AppError_1=__importDefault(require(a31_0x5aba03(0x1b0))),QueueOption_1=__importDefault(require(a31_0x5aba03(0x17b))),index=async(_0xd1352c,_0x153066)=>{const _0x520ed2=a31_0x5aba03,{queueId:_0x4f9609,queueOptionId:_0x5be02,parentId:_0x5230d7}=_0xd1352c['query'],_0x26c573=await(0x0,ListService_1[_0x520ed2(0x17a)])({'queueId':_0x4f9609,'queueOptionId':_0x5be02,'parentId':_0x5230d7});return _0x153066[_0x520ed2(0x195)](_0x26c573);};exports['index']=index;const store=async(_0x3b768a,_0x44d85b)=>{const _0x18da87=a31_0x5aba03,_0x592e11=_0x3b768a[_0x18da87(0x1a1)],_0xaebcb6=await(0x0,CreateService_1[_0x18da87(0x17a)])(_0x592e11);return _0x44d85b[_0x18da87(0x18e)](0xc8)['json'](_0xaebcb6);};exports[a31_0x5aba03(0x183)]=store;const show=async(_0x46c289,_0x17e137)=>{const _0x28a25d=a31_0x5aba03,{queueOptionId:_0x40bcec}=_0x46c289[_0x28a25d(0x186)],_0x2cd13b=await(0x0,ShowService_1[_0x28a25d(0x17a)])(_0x40bcec);return _0x17e137[_0x28a25d(0x18e)](0xc8)['json'](_0x2cd13b);};exports['show']=show;const update=async(_0x4640ab,_0xf49b6c)=>{const _0x25b3cf=a31_0x5aba03,{queueOptionId:_0x5bfa88}=_0x4640ab[_0x25b3cf(0x186)],_0x36cd1a=_0x4640ab[_0x25b3cf(0x1a1)],_0x1708fe=await(0x0,UpdateService_1[_0x25b3cf(0x17a)])(_0x5bfa88,_0x36cd1a);return _0xf49b6c[_0x25b3cf(0x18e)](0xc8)['json'](_0x1708fe);};exports['update']=update;const uploadFile=async(_0x4d9c68,_0x1594d2)=>{const _0x402e98=a31_0x5aba03,{queueOptionId:_0x2232dc}=_0x4d9c68['params'],_0x2df00a=_0x4d9c68[_0x402e98(0x1a1)],_0x5e1cea=_0x4d9c68[_0x402e98(0x187)],_0x479877=await QueueOption_1['default'][_0x402e98(0x19f)](_0x2232dc);if(!_0x479877)throw new Error(_0x402e98(0x184));const _0x239e36=_0x479877[_0x402e98(0x182)];return fs_1[_0x402e98(0x17a)][_0x402e98(0x1a5)](_0x239e36)&&fs_1[_0x402e98(0x17a)][_0x402e98(0x19b)](_0x239e36),_0x479877['message']=_0x5e1cea['filename'],await _0x479877['save'](),_0x1594d2[_0x402e98(0x18e)](0xc8)[_0x402e98(0x195)]({'message':_0x402e98(0x1a2)});};exports[a31_0x5aba03(0x17c)]=uploadFile;const remove=async(_0x1a6d9c,_0x126007)=>{const _0xf03ba4=a31_0x5aba03,{queueOptionId:_0x54ccc7}=_0x1a6d9c[_0xf03ba4(0x186)],_0x2720cb=await QueueOption_1[_0xf03ba4(0x17a)][_0xf03ba4(0x19f)](_0x54ccc7);if(!_0x2720cb)throw new Error(_0xf03ba4(0x184));const _0x2270f9=_0x2720cb[_0xf03ba4(0x182)];return fs_1[_0xf03ba4(0x17a)][_0xf03ba4(0x1a5)](_0x2270f9)&&fs_1['default'][_0xf03ba4(0x19b)](_0x2270f9),await(0x0,DeleteService_1[_0xf03ba4(0x17a)])(_0x54ccc7),_0x126007[_0xf03ba4(0x18e)](0xc8)[_0xf03ba4(0x195)]({'message':_0xf03ba4(0x1ab)});};exports[a31_0x5aba03(0x180)]=remove;const mediaUpload=async(_0x4234d3,_0x5d0c4a)=>{const _0x4deaa6=a31_0x5aba03,{queueOptionId:_0x159515}=_0x4234d3[_0x4deaa6(0x186)],_0x4b95c3=_0x4234d3[_0x4deaa6(0x19a)],_0x543b65=(0x0,lodash_1[_0x4deaa6(0x1ad)])(_0x4b95c3);try{const _0x2eb0e4=await QueueOption_1[_0x4deaa6(0x17a)][_0x4deaa6(0x19f)](_0x159515);return _0x2eb0e4['update']({'mediaPath':_0x543b65[_0x4deaa6(0x17e)],'mediaName':_0x543b65[_0x4deaa6(0x179)]}),_0x5d0c4a[_0x4deaa6(0x18c)]({'mensagem':_0x4deaa6(0x1aa)});}catch(_0x5f2c22){throw new AppError_1[(_0x4deaa6(0x17a))](_0x5f2c22['message']);}};exports[a31_0x5aba03(0x19e)]=mediaUpload;const deleteMedia=async(_0x24b272,_0x283d4c)=>{const _0x3bd7b9=a31_0x5aba03,{queueOptionId:_0x1100ff}=_0x24b272['params'];try{const _0x57d249=await QueueOption_1[_0x3bd7b9(0x17a)][_0x3bd7b9(0x19f)](_0x1100ff,{'include':['queue']}),_0x564707=path_1['default'][_0x3bd7b9(0x199)](_0x3bd7b9(0x196),_0x3bd7b9(0x19c)+_0x57d249[_0x3bd7b9(0x197)][_0x3bd7b9(0x18f)],_0x57d249[_0x3bd7b9(0x1af)]),_0x558a45=fs_1[_0x3bd7b9(0x17a)][_0x3bd7b9(0x1a5)](_0x564707);return _0x558a45&&fs_1['default'][_0x3bd7b9(0x19b)](_0x564707),_0x57d249[_0x3bd7b9(0x1af)]=null,_0x57d249[_0x3bd7b9(0x17d)]=null,await _0x57d249[_0x3bd7b9(0x1ae)](),_0x283d4c[_0x3bd7b9(0x18c)]({'mensagem':_0x3bd7b9(0x185)});}catch(_0x4365ea){throw new AppError_1[(_0x3bd7b9(0x17a))](_0x4365ea[_0x3bd7b9(0x182)]);}};exports[a31_0x5aba03(0x17f)]=deleteMedia;