const a517_0x86dd=a517_0x2910;(function(_0x22b785,_0x3e1e07){const _0x2ea696=a517_0x2910,_0xa5198=_0x22b785();while(!![]){try{const _0x251b6a=parseInt(_0x2ea696(0x186))/0x1+-parseInt(_0x2ea696(0x185))/0x2*(parseInt(_0x2ea696(0x181))/0x3)+parseInt(_0x2ea696(0x183))/0x4*(parseInt(_0x2ea696(0x18a))/0x5)+-parseInt(_0x2ea696(0x18d))/0x6+parseInt(_0x2ea696(0x182))/0x7+parseInt(_0x2ea696(0x18e))/0x8+parseInt(_0x2ea696(0x176))/0x9*(parseInt(_0x2ea696(0x175))/0xa);if(_0x251b6a===_0x3e1e07)break;else _0xa5198['push'](_0xa5198['shift']());}catch(_0x4440c9){_0xa5198['push'](_0xa5198['shift']());}}}(a517_0x131b,0x74112));const a517_0x51f439=(function(){let _0xbd2074=!![];return function(_0x5201ca,_0x4d7b51){const _0x277e11=_0xbd2074?function(){const _0x357d70=a517_0x2910;if(_0x4d7b51){const _0x5cd01f=_0x4d7b51[_0x357d70(0x17b)](_0x5201ca,arguments);return _0x4d7b51=null,_0x5cd01f;}}:function(){};return _0xbd2074=![],_0x277e11;};}()),a517_0x2850af=a517_0x51f439(this,function(){const _0x2c380a=a517_0x2910;return a517_0x2850af[_0x2c380a(0x17c)]()[_0x2c380a(0x179)](_0x2c380a(0x17a))[_0x2c380a(0x17c)]()[_0x2c380a(0x17d)](a517_0x2850af)[_0x2c380a(0x179)]('(((.+)+)+)+$');});a517_0x2850af();'use strict';var __importDefault=this&&this[a517_0x86dd(0x18c)]||function(_0x10fa0d){const _0x102af4=a517_0x86dd;return _0x10fa0d&&_0x10fa0d[_0x102af4(0x187)]?_0x10fa0d:{'default':_0x10fa0d};};Object['defineProperty'](exports,a517_0x86dd(0x187),{'value':!![]});const TicketNote_1=__importDefault(require(a517_0x86dd(0x17e))),User_1=__importDefault(require('../../models/User')),Contact_1=__importDefault(require(a517_0x86dd(0x184))),Ticket_1=__importDefault(require(a517_0x86dd(0x17f))),FindNotesByContactIdAndTicketId=async({contactId:_0x2630c9,ticketId:_0x2abbae})=>{const _0x34734c=a517_0x86dd,_0x2d9055=await TicketNote_1[_0x34734c(0x18b)]['findAll']({'where':{'contactId':_0x2630c9,'ticketId':_0x2abbae},'include':[{'model':User_1[_0x34734c(0x18b)],'as':'user','attributes':['id',_0x34734c(0x180),'email']},{'model':Contact_1['default'],'as':_0x34734c(0x177),'attributes':['id',_0x34734c(0x180)]},{'model':Ticket_1['default'],'as':_0x34734c(0x189),'attributes':['id','status',_0x34734c(0x178)]}],'order':[['createdAt',_0x34734c(0x188)]]});return _0x2d9055;};function a517_0x2910(_0x673dc5,_0x292cf2){const _0x55a9ff=a517_0x131b();return a517_0x2910=function(_0x2850af,_0x51f439){_0x2850af=_0x2850af-0x175;let _0x131bd4=_0x55a9ff[_0x2850af];return _0x131bd4;},a517_0x2910(_0x673dc5,_0x292cf2);}exports[a517_0x86dd(0x18b)]=FindNotesByContactIdAndTicketId;function a517_0x131b(){const _0xab3fa=['372ulYdwy','3763417UsVmsM','938908tKncVy','../../models/Contact','4604uYQvuQ','4688KsMwoA','__esModule','DESC','ticket','5MjkqyN','default','__importDefault','4439640rokpKL','942744WNysaG','6059090Fchwjf','9BUGhzf','contact','createdAt','search','(((.+)+)+)+$','apply','toString','constructor','../../models/TicketNote','../../models/Ticket','name'];a517_0x131b=function(){return _0xab3fa;};return a517_0x131b();}