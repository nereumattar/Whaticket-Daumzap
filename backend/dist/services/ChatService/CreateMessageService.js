const a376_0x3fd08b=a376_0x3709;(function(_0x2c8e90,_0x5dce49){const _0x58906a=a376_0x3709,_0x444bbc=_0x2c8e90();while(!![]){try{const _0x212671=parseInt(_0x58906a(0x1fc))/0x1+parseInt(_0x58906a(0x1fd))/0x2+-parseInt(_0x58906a(0x1ef))/0x3*(-parseInt(_0x58906a(0x1e7))/0x4)+-parseInt(_0x58906a(0x1f7))/0x5+-parseInt(_0x58906a(0x1f4))/0x6*(-parseInt(_0x58906a(0x1f2))/0x7)+-parseInt(_0x58906a(0x202))/0x8*(parseInt(_0x58906a(0x1ff))/0x9)+-parseInt(_0x58906a(0x1f6))/0xa;if(_0x212671===_0x5dce49)break;else _0x444bbc['push'](_0x444bbc['shift']());}catch(_0xaa2a7f){_0x444bbc['push'](_0x444bbc['shift']());}}}(a376_0x3a0f,0xbd0a6));function a376_0x3a0f(){const _0x3f2281=['../../models/User','2472TZCShk','../../models/ChatMessage','apply','update','userId','../../models/ChatUser','sender','defineProperty','3150aRelTj','../../models/Chat','users','2839347jtiaLh','chat','6LtQmec','findByPk','10777160tNjNWW','932400yvbsww','search','__esModule','default','toString','1003408KgjYNY','2468786yvnGiL','__importDefault','72lEorKg','reload','(((.+)+)+)+$','1253816cGkmJy'];a376_0x3a0f=function(){return _0x3f2281;};return a376_0x3a0f();}function a376_0x3709(_0x2dcf66,_0x2b5bd0){const _0x2700de=a376_0x3a0f();return a376_0x3709=function(_0x5eb6a3,_0x315706){_0x5eb6a3=_0x5eb6a3-0x1e7;let _0x3a0fd1=_0x2700de[_0x5eb6a3];return _0x3a0fd1;},a376_0x3709(_0x2dcf66,_0x2b5bd0);}const a376_0x315706=(function(){let _0xb61de3=!![];return function(_0x14662c,_0x2f03bd){const _0x55f025=_0xb61de3?function(){const _0x150a0d=a376_0x3709;if(_0x2f03bd){const _0x595df2=_0x2f03bd[_0x150a0d(0x1e9)](_0x14662c,arguments);return _0x2f03bd=null,_0x595df2;}}:function(){};return _0xb61de3=![],_0x55f025;};}()),a376_0x5eb6a3=a376_0x315706(this,function(){const _0x5e7c2f=a376_0x3709;return a376_0x5eb6a3[_0x5e7c2f(0x1fb)]()[_0x5e7c2f(0x1f8)](_0x5e7c2f(0x201))['toString']()['constructor'](a376_0x5eb6a3)['search']('(((.+)+)+)+$');});a376_0x5eb6a3();'use strict';var __importDefault=this&&this[a376_0x3fd08b(0x1fe)]||function(_0x18a938){const _0x4a8e08=a376_0x3fd08b;return _0x18a938&&_0x18a938[_0x4a8e08(0x1f9)]?_0x18a938:{'default':_0x18a938};};Object[a376_0x3fd08b(0x1ee)](exports,a376_0x3fd08b(0x1f9),{'value':!![]});const Chat_1=__importDefault(require(a376_0x3fd08b(0x1f0))),ChatMessage_1=__importDefault(require(a376_0x3fd08b(0x1e8))),ChatUser_1=__importDefault(require(a376_0x3fd08b(0x1ec))),User_1=__importDefault(require(a376_0x3fd08b(0x203)));async function CreateMessageService({senderId:_0x210d2a,chatId:_0x14f61e,message:_0x4bea88}){const _0x4dab93=a376_0x3fd08b,_0x109d04=await ChatMessage_1[_0x4dab93(0x1fa)]['create']({'senderId':_0x210d2a,'chatId':_0x14f61e,'message':_0x4bea88});await _0x109d04[_0x4dab93(0x200)]({'include':[{'model':User_1[_0x4dab93(0x1fa)],'as':_0x4dab93(0x1ed),'attributes':['id','name']},{'model':Chat_1[_0x4dab93(0x1fa)],'as':_0x4dab93(0x1f3),'include':[{'model':ChatUser_1['default'],'as':_0x4dab93(0x1f1)}]}]});const _0x363bff=await User_1[_0x4dab93(0x1fa)][_0x4dab93(0x1f5)](_0x210d2a);await _0x109d04['chat']['update']({'lastMessage':_0x363bff['name']+':\x20'+_0x4bea88});const _0x5ae3be=await ChatUser_1[_0x4dab93(0x1fa)]['findAll']({'where':{'chatId':_0x14f61e}});for(let _0x8eb1d9 of _0x5ae3be){_0x8eb1d9[_0x4dab93(0x1eb)]===_0x210d2a?await _0x8eb1d9[_0x4dab93(0x1ea)]({'unreads':0x0}):await _0x8eb1d9[_0x4dab93(0x1ea)]({'unreads':_0x8eb1d9['unreads']+0x1});}return _0x109d04;}exports['default']=CreateMessageService;