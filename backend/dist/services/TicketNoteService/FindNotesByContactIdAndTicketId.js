const a519_0x1be226=a519_0x51e3;function a519_0x51e3(_0x451c8a,_0x577d3d){const _0x2a0c9a=a519_0x2f0a();return a519_0x51e3=function(_0x2e54fc,_0x15425a){_0x2e54fc=_0x2e54fc-0x9c;let _0x2f0ac5=_0x2a0c9a[_0x2e54fc];return _0x2f0ac5;},a519_0x51e3(_0x451c8a,_0x577d3d);}function a519_0x2f0a(){const _0x3a1bdd=['search','(((.+)+)+)+$','892590pPOalf','__importDefault','DESC','443720DKZXTH','createdAt','../../models/TicketNote','819486UEWLoc','defineProperty','constructor','5427912kwYdfw','status','45011872yuKQzu','user','../../models/User','../../models/Contact','25puNeFq','../../models/Ticket','11767560WxUFmw','ticket','apply','toString','1502348vSETdj','__esModule','default','name','contact'];a519_0x2f0a=function(){return _0x3a1bdd;};return a519_0x2f0a();}(function(_0x1f0522,_0x298052){const _0x4656da=a519_0x51e3,_0x42c8d8=_0x1f0522();while(!![]){try{const _0x3a4082=parseInt(_0x4656da(0xa4))/0x1+parseInt(_0x4656da(0xa7))/0x2+-parseInt(_0x4656da(0xaa))/0x3+-parseInt(_0x4656da(0xb6))/0x4*(parseInt(_0x4656da(0xb0))/0x5)+-parseInt(_0x4656da(0xa1))/0x6+-parseInt(_0x4656da(0xb2))/0x7+parseInt(_0x4656da(0xac))/0x8;if(_0x3a4082===_0x298052)break;else _0x42c8d8['push'](_0x42c8d8['shift']());}catch(_0x5911c3){_0x42c8d8['push'](_0x42c8d8['shift']());}}}(a519_0x2f0a,0xeb12f));const a519_0x15425a=(function(){let _0x1327eb=!![];return function(_0xcde210,_0x4a3952){const _0x5da13e=_0x1327eb?function(){const _0xc1ccf6=a519_0x51e3;if(_0x4a3952){const _0x12ce21=_0x4a3952[_0xc1ccf6(0xb4)](_0xcde210,arguments);return _0x4a3952=null,_0x12ce21;}}:function(){};return _0x1327eb=![],_0x5da13e;};}()),a519_0x2e54fc=a519_0x15425a(this,function(){const _0x3ce704=a519_0x51e3;return a519_0x2e54fc[_0x3ce704(0xb5)]()[_0x3ce704(0x9f)](_0x3ce704(0xa0))[_0x3ce704(0xb5)]()[_0x3ce704(0xa9)](a519_0x2e54fc)[_0x3ce704(0x9f)]('(((.+)+)+)+$');});a519_0x2e54fc();'use strict';var __importDefault=this&&this[a519_0x1be226(0xa2)]||function(_0x4e96b2){const _0xacd946=a519_0x1be226;return _0x4e96b2&&_0x4e96b2[_0xacd946(0xb7)]?_0x4e96b2:{'default':_0x4e96b2};};Object[a519_0x1be226(0xa8)](exports,'__esModule',{'value':!![]});const TicketNote_1=__importDefault(require(a519_0x1be226(0xa6))),User_1=__importDefault(require(a519_0x1be226(0xae))),Contact_1=__importDefault(require(a519_0x1be226(0xaf))),Ticket_1=__importDefault(require(a519_0x1be226(0xb1))),FindNotesByContactIdAndTicketId=async({contactId:_0x25017f,ticketId:_0x4bfdc7})=>{const _0x3e5084=a519_0x1be226,_0x2ea3ea=await TicketNote_1['default']['findAll']({'where':{'contactId':_0x25017f,'ticketId':_0x4bfdc7},'include':[{'model':User_1[_0x3e5084(0x9c)],'as':_0x3e5084(0xad),'attributes':['id',_0x3e5084(0x9d),'email']},{'model':Contact_1['default'],'as':_0x3e5084(0x9e),'attributes':['id',_0x3e5084(0x9d)]},{'model':Ticket_1[_0x3e5084(0x9c)],'as':_0x3e5084(0xb3),'attributes':['id',_0x3e5084(0xab),_0x3e5084(0xa5)]}],'order':[['createdAt',_0x3e5084(0xa3)]]});return _0x2ea3ea;};exports[a519_0x1be226(0x9c)]=FindNotesByContactIdAndTicketId;