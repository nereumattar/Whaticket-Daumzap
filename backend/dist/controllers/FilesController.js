const a19_0x5bea5e=a19_0x3625;(function(_0xd2820a,_0x18ef8b){const _0x23f9fd=a19_0x3625,_0x344106=_0xd2820a();while(!![]){try{const _0x461643=parseInt(_0x23f9fd(0x1b3))/0x1*(parseInt(_0x23f9fd(0x1a0))/0x2)+parseInt(_0x23f9fd(0x1c0))/0x3*(-parseInt(_0x23f9fd(0x1ab))/0x4)+-parseInt(_0x23f9fd(0x19e))/0x5+-parseInt(_0x23f9fd(0x19d))/0x6+-parseInt(_0x23f9fd(0x1c8))/0x7+parseInt(_0x23f9fd(0x1d2))/0x8*(-parseInt(_0x23f9fd(0x1a7))/0x9)+-parseInt(_0x23f9fd(0x1bc))/0xa*(-parseInt(_0x23f9fd(0x1b2))/0xb);if(_0x461643===_0x18ef8b)break;else _0x344106['push'](_0x344106['shift']());}catch(_0x5db5d4){_0x344106['push'](_0x344106['shift']());}}}(a19_0x2e89,0x6873c));const a19_0x5b641e=(function(){let _0x3851ad=!![];return function(_0x3768f6,_0x48a920){const _0x1b3c3b=_0x3851ad?function(){if(_0x48a920){const _0x46a58d=_0x48a920['apply'](_0x3768f6,arguments);return _0x48a920=null,_0x46a58d;}}:function(){};return _0x3851ad=![],_0x1b3c3b;};}()),a19_0x43b953=a19_0x5b641e(this,function(){const _0x472e0a=a19_0x3625;return a19_0x43b953['toString']()[_0x472e0a(0x1b6)](_0x472e0a(0x1c4))['toString']()[_0x472e0a(0x1ca)](a19_0x43b953)[_0x472e0a(0x1b6)](_0x472e0a(0x1c4));});a19_0x43b953();'use strict';var __importDefault=this&&this[a19_0x5bea5e(0x1bb)]||function(_0x1e39ff){const _0x1aa847=a19_0x5bea5e;return _0x1e39ff&&_0x1e39ff[_0x1aa847(0x1c5)]?_0x1e39ff:{'default':_0x1e39ff};};function a19_0x3625(_0x23a8a8,_0x206b93){const _0x7689d6=a19_0x2e89();return a19_0x3625=function(_0x43b953,_0x5b641e){_0x43b953=_0x43b953-0x19c;let _0x2e893a=_0x7689d6[_0x43b953];return _0x2e893a;},a19_0x3625(_0x23a8a8,_0x206b93);}Object[a19_0x5bea5e(0x1a5)](exports,a19_0x5bea5e(0x1c5),{'value':!![]}),exports[a19_0x5bea5e(0x1a1)]=exports[a19_0x5bea5e(0x1d3)]=exports[a19_0x5bea5e(0x1cb)]=exports[a19_0x5bea5e(0x1af)]=exports[a19_0x5bea5e(0x1b8)]=exports[a19_0x5bea5e(0x1b4)]=exports[a19_0x5bea5e(0x1d0)]=exports[a19_0x5bea5e(0x1be)]=void 0x0;const socket_1=require('../libs/socket'),AppError_1=__importDefault(require(a19_0x5bea5e(0x1ce))),lodash_1=require(a19_0x5bea5e(0x1d1)),CreateService_1=__importDefault(require(a19_0x5bea5e(0x1c1))),ListService_1=__importDefault(require(a19_0x5bea5e(0x1a9))),UpdateService_1=__importDefault(require('../services/FileServices/UpdateService')),ShowService_1=__importDefault(require(a19_0x5bea5e(0x1c6))),DeleteService_1=__importDefault(require(a19_0x5bea5e(0x1cc))),SimpleListService_1=__importDefault(require('../services/FileServices/SimpleListService')),DeleteAllService_1=__importDefault(require(a19_0x5bea5e(0x1ba))),FilesOptions_1=__importDefault(require(a19_0x5bea5e(0x1b5))),index=async(_0x21a131,_0x32887e)=>{const _0x48f9fe=a19_0x5bea5e,{pageNumber:_0x1793b7,searchParam:_0x73eb74}=_0x21a131[_0x48f9fe(0x1d4)],{companyId:_0x1d6b15}=_0x21a131['user'],{files:_0x113793,count:_0x58504d,hasMore:_0x3d7df9}=await(0x0,ListService_1['default'])({'searchParam':_0x73eb74,'pageNumber':_0x1793b7,'companyId':_0x1d6b15});return _0x32887e[_0x48f9fe(0x19c)]({'files':_0x113793,'count':_0x58504d,'hasMore':_0x3d7df9});};exports['index']=index;const store=async(_0x337ebf,_0x5de244)=>{const _0x2dae72=a19_0x5bea5e,{name:_0x5cfa3e,message:_0x4fd5c1,options:_0x4070a0}=_0x337ebf[_0x2dae72(0x1a6)],{companyId:_0x5f4aad}=_0x337ebf[_0x2dae72(0x19f)],_0x57dada=await(0x0,CreateService_1[_0x2dae72(0x1c3)])({'name':_0x5cfa3e,'message':_0x4fd5c1,'options':_0x4070a0,'companyId':_0x5f4aad}),_0x2ef9ee=(0x0,socket_1[_0x2dae72(0x1a3)])();return _0x2ef9ee['to'](_0x2dae72(0x1a8)+_0x5f4aad+_0x2dae72(0x1aa))['emit'](_0x2dae72(0x1c7)+_0x5f4aad+_0x2dae72(0x1ae),{'action':_0x2dae72(0x1b0),'fileList':_0x57dada}),_0x5de244[_0x2dae72(0x1b9)](0xc8)[_0x2dae72(0x19c)](_0x57dada);};function a19_0x2e89(){const _0x11fea6=['../errors/AppError','emit','store','lodash','88vrYUFS','removeAll','query','json','2255754XARvRg','2579265SQIufU','user','4jRNIhW','list','head','getIO','Arquivos\x20atualizados','defineProperty','body','39672VPPFbq','company-','../services/FileServices/ListService','-mainchannel','8DxIaWI','isArray','File\x20List\x20deleted','-file','update','create','files','29117GptqvA','108552mrgIUG','show','../models/FilesOptions','search','delete','uploadMedias','status','../services/FileServices/DeleteAllService','__importDefault','4580brYChF','ERR_NO_PERMISSION','index','profile','71883CaGpvl','../services/FileServices/CreateService','send','default','(((.+)+)+)+$','__esModule','../services/FileServices/ShowService','company','93604TuVokN','length','constructor','remove','../services/FileServices/DeleteService','params'];a19_0x2e89=function(){return _0x11fea6;};return a19_0x2e89();}exports[a19_0x5bea5e(0x1d0)]=store;const show=async(_0x5b1cf4,_0x48a145)=>{const _0x44cd51=a19_0x5bea5e,{fileId:_0x3309f2}=_0x5b1cf4[_0x44cd51(0x1cd)],{companyId:_0x3118be}=_0x5b1cf4[_0x44cd51(0x19f)],_0x83843e=await(0x0,ShowService_1['default'])(_0x3309f2,_0x3118be);return _0x48a145[_0x44cd51(0x1b9)](0xc8)[_0x44cd51(0x19c)](_0x83843e);};exports[a19_0x5bea5e(0x1b4)]=show;const uploadMedias=async(_0xde5866,_0x32848e)=>{const _0x1038a5=a19_0x5bea5e,{fileId:_0x570c15,id:_0x52c316,mediaType:_0x771439}=_0xde5866['body'],_0x5f1f41=_0xde5866[_0x1038a5(0x1b1)],_0x2b16df=(0x0,lodash_1[_0x1038a5(0x1a2)])(_0x5f1f41);try{let _0x3a17cd;if(_0x5f1f41[_0x1038a5(0x1c9)]>0x0)for(const [_0x46c4ce,_0x41bdd9]of _0x5f1f41['entries']()){_0x3a17cd=await FilesOptions_1[_0x1038a5(0x1c3)]['findOne']({'where':{'fileId':_0x570c15,'id':Array['isArray'](_0x52c316)?_0x52c316[_0x46c4ce]:_0x52c316}}),_0x3a17cd['update']({'path':_0x41bdd9['filename']['replace']('/','-'),'mediaType':Array[_0x1038a5(0x1ac)](_0x771439)?_0x771439[_0x46c4ce]:_0x771439});}return _0x32848e['send']({'mensagem':_0x1038a5(0x1a4)});}catch(_0x5c7610){throw new AppError_1[(_0x1038a5(0x1c3))](_0x5c7610['message']);}};exports[a19_0x5bea5e(0x1b8)]=uploadMedias;const update=async(_0x57b8b4,_0x56c651)=>{const _0x5480b3=a19_0x5bea5e;if(_0x57b8b4[_0x5480b3(0x19f)][_0x5480b3(0x1bf)]!=='admin')throw new AppError_1['default'](_0x5480b3(0x1bd),0x193);const {fileId:_0x3eacd4}=_0x57b8b4[_0x5480b3(0x1cd)],_0x498462=_0x57b8b4['body'],{companyId:_0x4d3123}=_0x57b8b4['user'],_0x368862=await(0x0,UpdateService_1[_0x5480b3(0x1c3)])({'fileData':_0x498462,'id':_0x3eacd4,'companyId':_0x4d3123}),_0x13069a=(0x0,socket_1['getIO'])();return _0x13069a['to'](_0x5480b3(0x1a8)+_0x4d3123+_0x5480b3(0x1aa))[_0x5480b3(0x1cf)](_0x5480b3(0x1c7)+_0x4d3123+'-file',{'action':_0x5480b3(0x1af),'fileList':_0x368862}),_0x56c651['status'](0xc8)[_0x5480b3(0x19c)](_0x368862);};exports[a19_0x5bea5e(0x1af)]=update;const remove=async(_0x5305ba,_0x28d624)=>{const _0x27c604=a19_0x5bea5e,{fileId:_0x4970a0}=_0x5305ba['params'],{companyId:_0x5a342d}=_0x5305ba[_0x27c604(0x19f)];await(0x0,DeleteService_1[_0x27c604(0x1c3)])(_0x4970a0,_0x5a342d);const _0x213c4b=(0x0,socket_1[_0x27c604(0x1a3)])();return _0x213c4b['to'](_0x27c604(0x1a8)+_0x5a342d+'-mainchannel')[_0x27c604(0x1cf)](_0x27c604(0x1c7)+_0x5a342d+_0x27c604(0x1ae),{'action':_0x27c604(0x1b7),'fileId':_0x4970a0}),_0x28d624['status'](0xc8)['json']({'message':_0x27c604(0x1ad)});};exports[a19_0x5bea5e(0x1cb)]=remove;const removeAll=async(_0x27f969,_0x455391)=>{const _0x4470c0=a19_0x5bea5e,{companyId:_0xdbad6d}=_0x27f969[_0x4470c0(0x19f)];return await(0x0,DeleteAllService_1[_0x4470c0(0x1c3)])(_0xdbad6d),_0x455391[_0x4470c0(0x1c2)]();};exports['removeAll']=removeAll;const list=async(_0x1f6052,_0x29b928)=>{const _0x23c99d=a19_0x5bea5e,{searchParam:_0x33e62e}=_0x1f6052[_0x23c99d(0x1d4)],{companyId:_0x27fa43}=_0x1f6052[_0x23c99d(0x19f)],_0x5c051d=await(0x0,SimpleListService_1[_0x23c99d(0x1c3)])({'searchParam':_0x33e62e,'companyId':_0x27fa43});return _0x29b928[_0x23c99d(0x19c)](_0x5c051d);};exports['list']=list;