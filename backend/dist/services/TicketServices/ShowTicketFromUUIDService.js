function a527_0x3fe3(){const _0x32880f=['10902GhrmKf','320841ZTZfci','contact','469074hGTzOS','../../models/Contact','__importDefault','toString','color','4375856LBJSKQ','constructor','tags','profilePicUrl','ERR_NO_TICKET_FOUND','queue','40SeMozE','user','default','whatsapp','__esModule','738868ABljXn','name','../../models/Tag','extraInfo','../../models/Ticket','search','6687729vaqUiY','presence','disableBot','findOne','312wfoYMJ','(((.+)+)+)+$','../../models/Whatsapp','../../errors/AppError','number','2446843TBYjNx','apply'];a527_0x3fe3=function(){return _0x32880f;};return a527_0x3fe3();}const a527_0x52909c=a527_0x4084;function a527_0x4084(_0x40aa5d,_0x137662){const _0xc34780=a527_0x3fe3();return a527_0x4084=function(_0x5a470c,_0x364d88){_0x5a470c=_0x5a470c-0xd2;let _0x3fe3e5=_0xc34780[_0x5a470c];return _0x3fe3e5;},a527_0x4084(_0x40aa5d,_0x137662);}(function(_0x5a7b2c,_0x2b5271){const _0x1ccc6e=a527_0x4084,_0x5e9756=_0x5a7b2c();while(!![]){try{const _0x534221=parseInt(_0x1ccc6e(0xdb))/0x1+parseInt(_0x1ccc6e(0xed))/0x2+parseInt(_0x1ccc6e(0xda))/0x3*(-parseInt(_0x1ccc6e(0xd3))/0x4)+-parseInt(_0x1ccc6e(0xe8))/0x5*(parseInt(_0x1ccc6e(0xdd))/0x6)+parseInt(_0x1ccc6e(0xd8))/0x7+-parseInt(_0x1ccc6e(0xe2))/0x8+parseInt(_0x1ccc6e(0xf3))/0x9;if(_0x534221===_0x2b5271)break;else _0x5e9756['push'](_0x5e9756['shift']());}catch(_0x4e0990){_0x5e9756['push'](_0x5e9756['shift']());}}}(a527_0x3fe3,0x4fd7f));const a527_0x364d88=(function(){let _0x143a8f=!![];return function(_0x4eb953,_0x188833){const _0x33020b=_0x143a8f?function(){const _0x58ee4b=a527_0x4084;if(_0x188833){const _0x1e0352=_0x188833[_0x58ee4b(0xd9)](_0x4eb953,arguments);return _0x188833=null,_0x1e0352;}}:function(){};return _0x143a8f=![],_0x33020b;};}()),a527_0x5a470c=a527_0x364d88(this,function(){const _0x3778a6=a527_0x4084;return a527_0x5a470c[_0x3778a6(0xe0)]()[_0x3778a6(0xf2)](_0x3778a6(0xd4))[_0x3778a6(0xe0)]()[_0x3778a6(0xe3)](a527_0x5a470c)[_0x3778a6(0xf2)](_0x3778a6(0xd4));});a527_0x5a470c();'use strict';var __importDefault=this&&this[a527_0x52909c(0xdf)]||function(_0x26f61f){const _0x59ea8a=a527_0x52909c;return _0x26f61f&&_0x26f61f[_0x59ea8a(0xec)]?_0x26f61f:{'default':_0x26f61f};};Object['defineProperty'](exports,a527_0x52909c(0xec),{'value':!![]});const Ticket_1=__importDefault(require(a527_0x52909c(0xf1))),AppError_1=__importDefault(require(a527_0x52909c(0xd6))),Contact_1=__importDefault(require(a527_0x52909c(0xde))),User_1=__importDefault(require('../../models/User')),Queue_1=__importDefault(require('../../models/Queue')),Tag_1=__importDefault(require(a527_0x52909c(0xef))),Whatsapp_1=__importDefault(require(a527_0x52909c(0xd5))),ShowTicketUUIDService=async _0x46dbab=>{const _0x4cd95e=a527_0x52909c,_0x177cd3=await Ticket_1[_0x4cd95e(0xea)][_0x4cd95e(0xd2)]({'where':{'uuid':_0x46dbab},'include':[{'model':Contact_1['default'],'as':_0x4cd95e(0xdc),'attributes':['id',_0x4cd95e(0xee),_0x4cd95e(0xd7),'email',_0x4cd95e(0xe5),_0x4cd95e(0xf4),_0x4cd95e(0xf5)],'include':[_0x4cd95e(0xf0)]},{'model':User_1[_0x4cd95e(0xea)],'as':_0x4cd95e(0xe9),'attributes':['id',_0x4cd95e(0xee)]},{'model':Queue_1[_0x4cd95e(0xea)],'as':_0x4cd95e(0xe7),'attributes':['id',_0x4cd95e(0xee),_0x4cd95e(0xe1)]},{'model':Whatsapp_1[_0x4cd95e(0xea)],'as':_0x4cd95e(0xeb),'attributes':[_0x4cd95e(0xee)]},{'model':Tag_1[_0x4cd95e(0xea)],'as':_0x4cd95e(0xe4),'attributes':['id',_0x4cd95e(0xee),'color']}]});if(!_0x177cd3)throw new AppError_1[(_0x4cd95e(0xea))](_0x4cd95e(0xe6),0x194);return _0x177cd3;};exports['default']=ShowTicketUUIDService;