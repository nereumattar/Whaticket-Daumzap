function a526_0x2d30(){const _0x282cbd=['3VPyUHe','4860784NKlucV','../../models/Whatsapp','name','../../models/User','../../models/Queue','user','default','extraInfo','9zFDFMp','12cDTmfz','color','2487632XDNRLS','3582592JqTRNd','constructor','(((.+)+)+)+$','search','../../models/Tag','ERR_NO_TICKET_FOUND','../../models/Contact','../../models/Ticket','3749015OGspPY','findOne','presence','contact','email','34043300kVGjGv','__importDefault','defineProperty','profilePicUrl','588244FArzeK','73140AiNUUZ'];a526_0x2d30=function(){return _0x282cbd;};return a526_0x2d30();}const a526_0x181a8a=a526_0x1b62;(function(_0x211383,_0x152c2d){const _0x1df16b=a526_0x1b62,_0x3edec7=_0x211383();while(!![]){try{const _0x460267=-parseInt(_0x1df16b(0xfe))/0x1+parseInt(_0x1df16b(0xec))/0x2+parseInt(_0x1df16b(0xff))/0x3*(parseInt(_0x1df16b(0xfd))/0x4)+parseInt(_0x1df16b(0xf4))/0x5*(parseInt(_0x1df16b(0x109))/0x6)+parseInt(_0x1df16b(0xeb))/0x7+parseInt(_0x1df16b(0x100))/0x8*(parseInt(_0x1df16b(0x108))/0x9)+-parseInt(_0x1df16b(0xf9))/0xa;if(_0x460267===_0x152c2d)break;else _0x3edec7['push'](_0x3edec7['shift']());}catch(_0x51c89a){_0x3edec7['push'](_0x3edec7['shift']());}}}(a526_0x2d30,0xe174b));const a526_0x38047c=(function(){let _0x26a8d9=!![];return function(_0x2d6409,_0x45b835){const _0x3e7b2f=_0x26a8d9?function(){if(_0x45b835){const _0x252b06=_0x45b835['apply'](_0x2d6409,arguments);return _0x45b835=null,_0x252b06;}}:function(){};return _0x26a8d9=![],_0x3e7b2f;};}()),a526_0x4e701e=a526_0x38047c(this,function(){const _0x4d2b1f=a526_0x1b62;return a526_0x4e701e['toString']()[_0x4d2b1f(0xef)](_0x4d2b1f(0xee))['toString']()[_0x4d2b1f(0xed)](a526_0x4e701e)[_0x4d2b1f(0xef)](_0x4d2b1f(0xee));});a526_0x4e701e();'use strict';var __importDefault=this&&this[a526_0x181a8a(0xfa)]||function(_0x2d85c6){return _0x2d85c6&&_0x2d85c6['__esModule']?_0x2d85c6:{'default':_0x2d85c6};};Object[a526_0x181a8a(0xfb)](exports,'__esModule',{'value':!![]});function a526_0x1b62(_0x1575a2,_0x3a36b8){const _0x4a852a=a526_0x2d30();return a526_0x1b62=function(_0x4e701e,_0x38047c){_0x4e701e=_0x4e701e-0xeb;let _0x2d3056=_0x4a852a[_0x4e701e];return _0x2d3056;},a526_0x1b62(_0x1575a2,_0x3a36b8);}const Ticket_1=__importDefault(require(a526_0x181a8a(0xf3))),AppError_1=__importDefault(require('../../errors/AppError')),Contact_1=__importDefault(require(a526_0x181a8a(0xf2))),User_1=__importDefault(require(a526_0x181a8a(0x103))),Queue_1=__importDefault(require(a526_0x181a8a(0x104))),Tag_1=__importDefault(require(a526_0x181a8a(0xf0))),Whatsapp_1=__importDefault(require(a526_0x181a8a(0x101))),ShowTicketUUIDService=async _0x9c0d62=>{const _0x10796b=a526_0x181a8a,_0x277cc8=await Ticket_1[_0x10796b(0x106)][_0x10796b(0xf5)]({'where':{'uuid':_0x9c0d62},'include':[{'model':Contact_1[_0x10796b(0x106)],'as':_0x10796b(0xf7),'attributes':['id',_0x10796b(0x102),'number',_0x10796b(0xf8),_0x10796b(0xfc),_0x10796b(0xf6),'disableBot'],'include':[_0x10796b(0x107)]},{'model':User_1['default'],'as':_0x10796b(0x105),'attributes':['id','name']},{'model':Queue_1[_0x10796b(0x106)],'as':'queue','attributes':['id',_0x10796b(0x102),'color']},{'model':Whatsapp_1[_0x10796b(0x106)],'as':'whatsapp','attributes':['name']},{'model':Tag_1[_0x10796b(0x106)],'as':'tags','attributes':['id',_0x10796b(0x102),_0x10796b(0x10a)]}]});if(!_0x277cc8)throw new AppError_1[(_0x10796b(0x106))](_0x10796b(0xf1),0x194);return _0x277cc8;};exports['default']=ShowTicketUUIDService;