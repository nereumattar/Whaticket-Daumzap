const a512_0x424934=a512_0x1032;(function(_0x3a4830,_0x3a2509){const _0x357bf0=a512_0x1032,_0x42fa0a=_0x3a4830();while(!![]){try{const _0x27452f=parseInt(_0x357bf0(0xae))/0x1+-parseInt(_0x357bf0(0xc1))/0x2*(parseInt(_0x357bf0(0xc4))/0x3)+-parseInt(_0x357bf0(0xba))/0x4+parseInt(_0x357bf0(0xb8))/0x5+-parseInt(_0x357bf0(0xbf))/0x6*(parseInt(_0x357bf0(0xc2))/0x7)+parseInt(_0x357bf0(0xb9))/0x8+-parseInt(_0x357bf0(0xad))/0x9*(-parseInt(_0x357bf0(0xb0))/0xa);if(_0x27452f===_0x3a2509)break;else _0x42fa0a['push'](_0x42fa0a['shift']());}catch(_0x225bac){_0x42fa0a['push'](_0x42fa0a['shift']());}}}(a512_0xdf63,0xee3b7));const a512_0x506ebd=(function(){let _0x26dccd=!![];return function(_0x389295,_0x14cb6e){const _0x1592d3=_0x26dccd?function(){const _0x3199bb=a512_0x1032;if(_0x14cb6e){const _0x255798=_0x14cb6e[_0x3199bb(0xc5)](_0x389295,arguments);return _0x14cb6e=null,_0x255798;}}:function(){};return _0x26dccd=![],_0x1592d3;};}()),a512_0xc5f07b=a512_0x506ebd(this,function(){const _0x79b420=a512_0x1032;return a512_0xc5f07b['toString']()[_0x79b420(0xb3)]('(((.+)+)+)+$')[_0x79b420(0xac)]()[_0x79b420(0xb6)](a512_0xc5f07b)['search'](_0x79b420(0xc0));});a512_0xc5f07b();'use strict';function a512_0xdf63(){const _0x92f1b2=['defineProperty','findByPk','search','save','Erro\x20ao\x20excluir\x20a\x20tarefa.','constructor','__esModule','8845470XreLYs','13182472JBCEyC','3380108rcKjsi','Erro\x20ao\x20atualizar\x20a\x20descrição\x20da\x20tarefa.','Erro\x20ao\x20buscar\x20a\x20tarefa.','default','../../models/Task','48234JouePB','(((.+)+)+)+$','19858szyKFP','1694yrxNVh','destroy','87CDSFqt','apply','Erro\x20ao\x20buscar\x20tarefas.','error','Erro\x20ao\x20criar\x20a\x20tarefa.','Erro\x20ao\x20atualizar\x20a\x20tarefa.','description','toString','27RYgPcm','485268MnRgrj','text','506780ExvFEb'];a512_0xdf63=function(){return _0x92f1b2;};return a512_0xdf63();}var __importDefault=this&&this['__importDefault']||function(_0x37caf5){const _0x121393=a512_0x1032;return _0x37caf5&&_0x37caf5[_0x121393(0xb7)]?_0x37caf5:{'default':_0x37caf5};};function a512_0x1032(_0x5f8841,_0x135935){const _0x4614f9=a512_0xdf63();return a512_0x1032=function(_0xc5f07b,_0x506ebd){_0xc5f07b=_0xc5f07b-0xa9;let _0xdf633f=_0x4614f9[_0xc5f07b];return _0xdf633f;},a512_0x1032(_0x5f8841,_0x135935);}Object[a512_0x424934(0xb1)](exports,a512_0x424934(0xb7),{'value':!![]});const Task_1=__importDefault(require(a512_0x424934(0xbe))),TaskService={'createTask':async(_0xabc154,_0x257ea8,_0x51cd88)=>{const _0x9d8a04=a512_0x424934;try{const _0x587753=await Task_1[_0x9d8a04(0xbd)]['create']({'text':_0xabc154,'description':_0x257ea8,'companyId':_0x51cd88});return _0x587753;}catch(_0x1d22fc){console[_0x9d8a04(0xc7)](_0x1d22fc);throw new Error(_0x9d8a04(0xa9));}},'getAllTasks':async _0x385dae=>{const _0x58fbfa=a512_0x424934;try{const _0x18c4e8=await Task_1[_0x58fbfa(0xbd)]['findAll']({'where':{'companyId':_0x385dae}});return _0x18c4e8;}catch(_0x407811){console[_0x58fbfa(0xc7)](_0x407811);throw new Error(_0x58fbfa(0xc6));}},'getTaskById':async(_0x142b90,_0x5a338b)=>{const _0x55e083=a512_0x424934;try{const _0x498440=await Task_1[_0x55e083(0xbd)][_0x55e083(0xb2)](_0x142b90,{'where':{'companyId':_0x5a338b}});if(!_0x498440)return null;return _0x498440;}catch(_0x590b14){console['error'](_0x590b14);throw new Error(_0x55e083(0xbc));}},'updateTask':async(_0x46fb43,_0x36300f,_0x1b044f)=>{const _0x474f83=a512_0x424934;try{const _0x3e26a1=await Task_1[_0x474f83(0xbd)]['findByPk'](_0x46fb43,{'where':{'companyId':_0x1b044f}});if(!_0x3e26a1)return null;return _0x36300f!==undefined&&(_0x3e26a1[_0x474f83(0xaf)]=_0x36300f),await _0x3e26a1[_0x474f83(0xb4)](),_0x3e26a1;}catch(_0x30ddf5){console[_0x474f83(0xc7)](_0x30ddf5);throw new Error(_0x474f83(0xaa));}},'deleteTask':async(_0x109e00,_0x5de7bd)=>{const _0x58d2f8=a512_0x424934;try{const _0x20b778=await Task_1[_0x58d2f8(0xbd)][_0x58d2f8(0xb2)](_0x109e00,{'where':{'companyId':_0x5de7bd}});if(!_0x20b778)return![];return await _0x20b778[_0x58d2f8(0xc3)](),!![];}catch(_0x43b353){console[_0x58d2f8(0xc7)](_0x43b353);throw new Error(_0x58d2f8(0xb5));}},'updateTaskDescription':async(_0x1eeb0d,_0x437bc6,_0x50925c)=>{const _0x484f33=a512_0x424934;try{const _0x438247=await Task_1['default'][_0x484f33(0xb2)](_0x1eeb0d,{'where':{'companyId':_0x50925c}});if(!_0x438247)return null;return _0x438247[_0x484f33(0xab)]=_0x437bc6,await _0x438247[_0x484f33(0xb4)](),_0x438247;}catch(_0x5de02c){console[_0x484f33(0xc7)](_0x5de02c);throw new Error(_0x484f33(0xbb));}}};exports[a512_0x424934(0xbd)]=TaskService;