const a28_0x5a6b29=a28_0x39cf;function a28_0x5ed5(){const _0x3470cf=['292560zWUuWX','search','542440bDoJsA','getIO','-mainchannel','498429yZWWmX','index','default','__esModule','authorization','255702afEdVh','secret','company-','update','emit','apply','__importDefault','16qTMSBn','prompt','toString','../libs/socket','5223350VBjAWb','remove','jsonwebtoken','35RUhUZz','488955BSiYwI','../config/auth','query','6GqTMWf','../services/PromptServices/DeletePromptService','../services/PromptServices/CreatePromptService','Não\x20foi\x20possível\x20excluir!\x20Verifique\x20se\x20este\x20prompt\x20está\x20sendo\x20usado!','Não\x20foi\x20possível\x20excluir!\x20Verifique\x20se\x20este\x20prompt\x20está\x20sendo\x20usado\x20nas\x20conexões\x20Whatsapp!','(((.+)+)+)+$','constructor','607436NceZRC','json','verify','headers','status','defineProperty','../services/PromptServices/ListPromptsService','params','Prompt\x20deleted','split','body','../services/PromptServices/UpdatePromptService','delete','findAndCountAll'];a28_0x5ed5=function(){return _0x3470cf;};return a28_0x5ed5();}(function(_0x578282,_0x316bc3){const _0x347d7a=a28_0x39cf,_0x12004c=_0x578282();while(!![]){try{const _0x2de403=-parseInt(_0x347d7a(0x1f8))/0x1+parseInt(_0x347d7a(0x1fa))/0x2+-parseInt(_0x347d7a(0x214))/0x3*(parseInt(_0x347d7a(0x1ea))/0x4)+-parseInt(_0x347d7a(0x211))/0x5+-parseInt(_0x347d7a(0x202))/0x6*(-parseInt(_0x347d7a(0x210))/0x7)+-parseInt(_0x347d7a(0x209))/0x8*(parseInt(_0x347d7a(0x1fd))/0x9)+parseInt(_0x347d7a(0x20d))/0xa;if(_0x2de403===_0x316bc3)break;else _0x12004c['push'](_0x12004c['shift']());}catch(_0x34c6e1){_0x12004c['push'](_0x12004c['shift']());}}}(a28_0x5ed5,0x31451));const a28_0x527de6=(function(){let _0x13d7b3=!![];return function(_0x199c0c,_0x24dc45){const _0x5c3a8c=_0x13d7b3?function(){const _0x2c6266=a28_0x39cf;if(_0x24dc45){const _0x4e1d64=_0x24dc45[_0x2c6266(0x207)](_0x199c0c,arguments);return _0x24dc45=null,_0x4e1d64;}}:function(){};return _0x13d7b3=![],_0x5c3a8c;};}()),a28_0x1c7c39=a28_0x527de6(this,function(){const _0x23227e=a28_0x39cf;return a28_0x1c7c39['toString']()[_0x23227e(0x1f9)]('(((.+)+)+)+$')[_0x23227e(0x20b)]()[_0x23227e(0x21a)](a28_0x1c7c39)[_0x23227e(0x1f9)](_0x23227e(0x219));});function a28_0x39cf(_0x3c94c0,_0x394d63){const _0x1fdc07=a28_0x5ed5();return a28_0x39cf=function(_0x1c7c39,_0x527de6){_0x1c7c39=_0x1c7c39-0x1ea;let _0x5ed5b7=_0x1fdc07[_0x1c7c39];return _0x5ed5b7;},a28_0x39cf(_0x3c94c0,_0x394d63);}a28_0x1c7c39();'use strict';var __importDefault=this&&this[a28_0x5a6b29(0x208)]||function(_0x105d8a){const _0x5bd33c=a28_0x5a6b29;return _0x105d8a&&_0x105d8a[_0x5bd33c(0x200)]?_0x105d8a:{'default':_0x105d8a};};Object[a28_0x5a6b29(0x1ef)](exports,a28_0x5a6b29(0x200),{'value':!![]}),exports[a28_0x5a6b29(0x20e)]=exports[a28_0x5a6b29(0x205)]=exports['show']=exports['store']=exports['index']=void 0x0;const socket_1=require(a28_0x5a6b29(0x20c)),CreatePromptService_1=__importDefault(require(a28_0x5a6b29(0x216))),DeletePromptService_1=__importDefault(require(a28_0x5a6b29(0x215))),ListPromptsService_1=__importDefault(require(a28_0x5a6b29(0x1f0))),ShowPromptService_1=__importDefault(require('../services/PromptServices/ShowPromptService')),UpdatePromptService_1=__importDefault(require(a28_0x5a6b29(0x1f5))),Whatsapp_1=__importDefault(require('../models/Whatsapp')),jsonwebtoken_1=require(a28_0x5a6b29(0x20f)),auth_1=__importDefault(require(a28_0x5a6b29(0x212))),index=async(_0x562018,_0x3fce95)=>{const _0x3b143e=a28_0x5a6b29,{pageNumber:_0x2e7257,searchParam:_0x1a89c9}=_0x562018[_0x3b143e(0x213)],_0x4b9ef8=_0x562018[_0x3b143e(0x1ed)][_0x3b143e(0x201)],[,_0x159cc3]=_0x4b9ef8[_0x3b143e(0x1f3)]('\x20'),_0x41f5c9=(0x0,jsonwebtoken_1['verify'])(_0x159cc3,auth_1[_0x3b143e(0x1ff)]['secret']),{companyId:_0x27749d}=_0x41f5c9,{prompts:_0x43dfad,count:_0x709305,hasMore:_0x30dcf8}=await(0x0,ListPromptsService_1[_0x3b143e(0x1ff)])({'searchParam':_0x1a89c9,'pageNumber':_0x2e7257,'companyId':_0x27749d});return _0x3fce95['status'](0xc8)[_0x3b143e(0x1eb)]({'prompts':_0x43dfad,'count':_0x709305,'hasMore':_0x30dcf8});};exports[a28_0x5a6b29(0x1fe)]=index;const store=async(_0x42453c,_0x541f7a)=>{const _0x1b24a2=a28_0x5a6b29,_0x54be97=_0x42453c[_0x1b24a2(0x1ed)][_0x1b24a2(0x201)],[,_0x2a2fb9]=_0x54be97[_0x1b24a2(0x1f3)]('\x20'),_0x2cdc71=(0x0,jsonwebtoken_1[_0x1b24a2(0x1ec)])(_0x2a2fb9,auth_1[_0x1b24a2(0x1ff)][_0x1b24a2(0x203)]),{companyId:_0x23d547}=_0x2cdc71,{name:_0x4d8c28,apiKey:_0x124e1a,prompt:_0x44e860,maxTokens:_0x4212f6,temperature:_0x59353b,promptTokens:_0x1d97ec,completionTokens:_0x364fbb,totalTokens:_0x1057e2,queueId:_0x503548,maxMessages:_0xf5346d,voice:_0x389fe5,voiceKey:_0x3ce822,voiceRegion:_0xb5d6cf}=_0x42453c['body'],_0x29b35b=await(0x0,CreatePromptService_1[_0x1b24a2(0x1ff)])({'name':_0x4d8c28,'apiKey':_0x124e1a,'prompt':_0x44e860,'maxTokens':_0x4212f6,'temperature':_0x59353b,'promptTokens':_0x1d97ec,'completionTokens':_0x364fbb,'totalTokens':_0x1057e2,'queueId':_0x503548,'maxMessages':_0xf5346d,'companyId':_0x23d547,'voice':_0x389fe5,'voiceKey':_0x3ce822,'voiceRegion':_0xb5d6cf}),_0x486abc=(0x0,socket_1[_0x1b24a2(0x1fb)])();return _0x486abc['to'](_0x1b24a2(0x204)+_0x23d547+_0x1b24a2(0x1fc))[_0x1b24a2(0x206)]('prompt',{'action':_0x1b24a2(0x205),'prompt':_0x29b35b}),_0x541f7a[_0x1b24a2(0x1ee)](0xc8)['json'](_0x29b35b);};exports['store']=store;const show=async(_0x124343,_0x5c7d53)=>{const _0x1895dd=a28_0x5a6b29,{promptId:_0x30e0da}=_0x124343[_0x1895dd(0x1f1)],_0x5bd084=_0x124343[_0x1895dd(0x1ed)][_0x1895dd(0x201)],[,_0x4fa58a]=_0x5bd084[_0x1895dd(0x1f3)]('\x20'),_0x4a7736=(0x0,jsonwebtoken_1[_0x1895dd(0x1ec)])(_0x4fa58a,auth_1['default'][_0x1895dd(0x203)]),{companyId:_0x1b201b}=_0x4a7736,_0xc5da51=await(0x0,ShowPromptService_1['default'])({'promptId':_0x30e0da,'companyId':_0x1b201b});return _0x5c7d53['status'](0xc8)[_0x1895dd(0x1eb)](_0xc5da51);};exports['show']=show;const update=async(_0x4c3032,_0x185944)=>{const _0x469728=a28_0x5a6b29,{promptId:_0x3002fe}=_0x4c3032['params'],_0x285be0=_0x4c3032[_0x469728(0x1f4)],_0x411e9a=_0x4c3032[_0x469728(0x1ed)][_0x469728(0x201)],[,_0x23e837]=_0x411e9a[_0x469728(0x1f3)]('\x20'),_0x4ae128=(0x0,jsonwebtoken_1[_0x469728(0x1ec)])(_0x23e837,auth_1['default']['secret']),{companyId:_0x31a461}=_0x4ae128,_0x4447aa=await(0x0,UpdatePromptService_1[_0x469728(0x1ff)])({'promptData':_0x285be0,'promptId':_0x3002fe,'companyId':_0x31a461}),_0x3ff31e=(0x0,socket_1['getIO'])();return _0x3ff31e[_0x469728(0x206)](_0x469728(0x20a),{'action':_0x469728(0x205),'prompt':_0x4447aa}),_0x185944[_0x469728(0x1ee)](0xc8)[_0x469728(0x1eb)](_0x4447aa);};exports[a28_0x5a6b29(0x205)]=update;const remove=async(_0x106c31,_0x30f4bf)=>{const _0x1ec149=a28_0x5a6b29,{promptId:_0x23686f}=_0x106c31[_0x1ec149(0x1f1)],_0x3beef6=_0x106c31[_0x1ec149(0x1ed)][_0x1ec149(0x201)],[,_0x488518]=_0x3beef6['split']('\x20'),_0x545c92=(0x0,jsonwebtoken_1[_0x1ec149(0x1ec)])(_0x488518,auth_1[_0x1ec149(0x1ff)][_0x1ec149(0x203)]),{companyId:_0x4acd97}=_0x545c92;try{const {count:_0x5b9e34}=await Whatsapp_1[_0x1ec149(0x1ff)][_0x1ec149(0x1f7)]({'where':{'promptId':+_0x23686f,'companyId':_0x4acd97}});if(_0x5b9e34>0x0)return _0x30f4bf[_0x1ec149(0x1ee)](0xc8)[_0x1ec149(0x1eb)]({'message':_0x1ec149(0x218)});await(0x0,DeletePromptService_1['default'])(_0x23686f,_0x4acd97);const _0x1ca611=(0x0,socket_1['getIO'])();return _0x1ca611[_0x1ec149(0x206)](_0x1ec149(0x20a),{'action':_0x1ec149(0x1f6),'intelligenceId':+_0x23686f}),_0x30f4bf['status'](0xc8)[_0x1ec149(0x1eb)]({'message':_0x1ec149(0x1f2)});}catch(_0xd3a93d){return _0x30f4bf[_0x1ec149(0x1ee)](0x1f4)[_0x1ec149(0x1eb)]({'message':_0x1ec149(0x217)});}};exports[a28_0x5a6b29(0x20e)]=remove;