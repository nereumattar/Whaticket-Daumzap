function a527_0x5246(){const _0x1351c6=['40SiyYbJ','../../models/Contact','9GRovxV','__esModule','10542462KzEBWa','user','3468396iGzibs','../../models/Queue','../../errors/AppError','toString','prompt','../../models/Tag','61354UNtEGC','disableBot','24frZShj','12382030GeDJKs','default','name','../../models/User','5ZPTRSL','constructor','apply','limitAttendance','../../models/Ticket','color','email','number','__importDefault','3554436uAYpOR','contact','companyId','search','Não\x20é\x20possível\x20consultar\x20registros\x20de\x20outra\x20empresa','506pybOHd','863079aBcyle','(((.+)+)+)+$','tags','182580NXrVnM','findByPk'];a527_0x5246=function(){return _0x1351c6;};return a527_0x5246();}function a527_0x2818(_0x5073eb,_0x12ffe7){const _0x4707e=a527_0x5246();return a527_0x2818=function(_0x479969,_0x2f305f){_0x479969=_0x479969-0x8d;let _0x52462e=_0x4707e[_0x479969];return _0x52462e;},a527_0x2818(_0x5073eb,_0x12ffe7);}const a527_0x150e6f=a527_0x2818;(function(_0x1a64c5,_0x243212){const _0x49c5c4=a527_0x2818,_0xa2b650=_0x1a64c5();while(!![]){try{const _0x350bbe=-parseInt(_0x49c5c4(0xa3))/0x1*(parseInt(_0x49c5c4(0xaf))/0x2)+parseInt(_0x49c5c4(0xa9))/0x3+parseInt(_0x49c5c4(0x98))/0x4*(-parseInt(_0x49c5c4(0x8f))/0x5)+parseInt(_0x49c5c4(0xa7))/0x6+parseInt(_0x49c5c4(0x9e))/0x7*(-parseInt(_0x49c5c4(0xb1))/0x8)+parseInt(_0x49c5c4(0xa5))/0x9*(parseInt(_0x49c5c4(0xb2))/0xa)+-parseInt(_0x49c5c4(0x9d))/0xb*(parseInt(_0x49c5c4(0xa1))/0xc);if(_0x350bbe===_0x243212)break;else _0xa2b650['push'](_0xa2b650['shift']());}catch(_0x410a21){_0xa2b650['push'](_0xa2b650['shift']());}}}(a527_0x5246,0xebd36));const a527_0x2f305f=(function(){let _0x47c112=!![];return function(_0xf15a,_0x3e0646){const _0x58f822=_0x47c112?function(){const _0x1ad2df=a527_0x2818;if(_0x3e0646){const _0x1fdb87=_0x3e0646[_0x1ad2df(0x91)](_0xf15a,arguments);return _0x3e0646=null,_0x1fdb87;}}:function(){};return _0x47c112=![],_0x58f822;};}()),a527_0x479969=a527_0x2f305f(this,function(){const _0x2a14fe=a527_0x2818;return a527_0x479969['toString']()[_0x2a14fe(0x9b)](_0x2a14fe(0x9f))[_0x2a14fe(0xac)]()[_0x2a14fe(0x90)](a527_0x479969)[_0x2a14fe(0x9b)](_0x2a14fe(0x9f));});a527_0x479969();'use strict';var __importDefault=this&&this[a527_0x150e6f(0x97)]||function(_0x43d86b){const _0x61f490=a527_0x150e6f;return _0x43d86b&&_0x43d86b[_0x61f490(0xa6)]?_0x43d86b:{'default':_0x43d86b};};Object['defineProperty'](exports,a527_0x150e6f(0xa6),{'value':!![]});const Ticket_1=__importDefault(require(a527_0x150e6f(0x93))),AppError_1=__importDefault(require(a527_0x150e6f(0xab))),Contact_1=__importDefault(require(a527_0x150e6f(0xa4))),User_1=__importDefault(require(a527_0x150e6f(0x8e))),Queue_1=__importDefault(require(a527_0x150e6f(0xaa))),Tag_1=__importDefault(require(a527_0x150e6f(0xae))),Whatsapp_1=__importDefault(require('../../models/Whatsapp')),ShowTicketService=async(_0x4fdf79,_0x435c33)=>{const _0x1c809c=a527_0x150e6f,_0x1d4341=await Ticket_1[_0x1c809c(0xb3)][_0x1c809c(0xa2)](_0x4fdf79,{'include':[{'model':Contact_1[_0x1c809c(0xb3)],'as':_0x1c809c(0x99),'attributes':['id',_0x1c809c(0x8d),_0x1c809c(0x96),_0x1c809c(0x95),'profilePicUrl','presence',_0x1c809c(0xb0)],'include':['extraInfo']},{'model':User_1[_0x1c809c(0xb3)],'as':_0x1c809c(0xa8),'attributes':['id',_0x1c809c(0x8d),_0x1c809c(0x92)]},{'model':Queue_1[_0x1c809c(0xb3)],'as':'queue','attributes':['id','name',_0x1c809c(0x94)],'include':[_0x1c809c(0xad),'queueIntegrations']},{'model':Whatsapp_1[_0x1c809c(0xb3)],'as':'whatsapp','attributes':[_0x1c809c(0x8d)]},{'model':Tag_1['default'],'as':_0x1c809c(0xa0),'attributes':['id',_0x1c809c(0x8d),_0x1c809c(0x94)]}]});if(_0x1d4341?.[_0x1c809c(0x9a)]!==_0x435c33)throw new AppError_1[(_0x1c809c(0xb3))](_0x1c809c(0x9c));if(!_0x1d4341)throw new AppError_1['default']('ERR_NO_TICKET_FOUND',0x194);return _0x1d4341;};exports[a527_0x150e6f(0xb3)]=ShowTicketService;