const a445_0xaa092a=a445_0x4b93;function a445_0x48b9(){const _0x3fa0cb=['contact','ERR_CREATING_MESSAGE','oldMessages','findByPk','../../models/Message','reload','status','toString','ticket','117FnRMyd','../../models/Ticket','update','1131VUWCmf','40TbMlvN','quotedMsg','../../libs/socket','546tPreNv','20797Wwvoxw','company-','174864VpYHev','-appMessage','(((.+)+)+)+$','6YUZoUK','__importDefault','available','getIO','5jcfIzk','1161512QXgujJ','create','queueId','5092NJembq','156883nSzWlT','-notification','default','search','emit','defineProperty','944900yYsSQE','__esModule','39372fnyfVN','queue','queue-'];a445_0x48b9=function(){return _0x3fa0cb;};return a445_0x48b9();}(function(_0x38f302,_0x1ef946){const _0x1a93cb=a445_0x4b93,_0xad5314=_0x38f302();while(!![]){try{const _0x588bfe=-parseInt(_0x1a93cb(0x176))/0x1+-parseInt(_0x1a93cb(0x175))/0x2*(parseInt(_0x1a93cb(0x197))/0x3)+parseInt(_0x1a93cb(0x17c))/0x4*(parseInt(_0x1a93cb(0x171))/0x5)+-parseInt(_0x1a93cb(0x191))/0x6*(parseInt(_0x1a93cb(0x192))/0x7)+-parseInt(_0x1a93cb(0x194))/0x8*(parseInt(_0x1a93cb(0x18a))/0x9)+-parseInt(_0x1a93cb(0x18e))/0xa*(-parseInt(_0x1a93cb(0x172))/0xb)+-parseInt(_0x1a93cb(0x17e))/0xc*(-parseInt(_0x1a93cb(0x18d))/0xd);if(_0x588bfe===_0x1ef946)break;else _0xad5314['push'](_0xad5314['shift']());}catch(_0x1c0222){_0xad5314['push'](_0xad5314['shift']());}}}(a445_0x48b9,0x378de));const a445_0x385385=(function(){let _0x4b11b6=!![];return function(_0x2d33d6,_0x568117){const _0x261b61=_0x4b11b6?function(){if(_0x568117){const _0x1ba577=_0x568117['apply'](_0x2d33d6,arguments);return _0x568117=null,_0x1ba577;}}:function(){};return _0x4b11b6=![],_0x261b61;};}()),a445_0x298673=a445_0x385385(this,function(){const _0x1220e1=a445_0x4b93;return a445_0x298673[_0x1220e1(0x188)]()[_0x1220e1(0x179)](_0x1220e1(0x196))[_0x1220e1(0x188)]()['constructor'](a445_0x298673)['search'](_0x1220e1(0x196));});a445_0x298673();'use strict';var __importDefault=this&&this[a445_0xaa092a(0x198)]||function(_0x22d612){const _0x4de610=a445_0xaa092a;return _0x22d612&&_0x22d612[_0x4de610(0x17d)]?_0x22d612:{'default':_0x22d612};};Object[a445_0xaa092a(0x17b)](exports,a445_0xaa092a(0x17d),{'value':!![]});const socket_1=require(a445_0xaa092a(0x190)),Message_1=__importDefault(require(a445_0xaa092a(0x185))),Ticket_1=__importDefault(require(a445_0xaa092a(0x18b))),OldMessage_1=__importDefault(require('../../models/OldMessage')),CreateMessageService=async({messageData:_0x270491,ticket:_0x3f6308,companyId:_0x5ea553})=>{const _0x496cb8=a445_0xaa092a;await Message_1[_0x496cb8(0x178)]['upsert']({..._0x270491,'companyId':_0x5ea553});const _0x492be7=await Message_1[_0x496cb8(0x178)][_0x496cb8(0x184)](_0x270491['id'],{'include':['contact',{'model':Ticket_1[_0x496cb8(0x178)],'as':_0x496cb8(0x189),'include':[_0x496cb8(0x181),_0x496cb8(0x17f),'whatsapp']},{'model':Message_1['default'],'as':_0x496cb8(0x18f),'include':['contact']},{'model':OldMessage_1['default'],'as':_0x496cb8(0x183)}]});if(_0x3f6308[_0x496cb8(0x181)])await _0x3f6308[_0x496cb8(0x181)]['update']({'presence':_0x496cb8(0x199)}),await _0x3f6308[_0x496cb8(0x181)][_0x496cb8(0x186)](),_0x3f6308[_0x496cb8(0x174)]!==null&&_0x492be7[_0x496cb8(0x174)]===null&&await _0x492be7[_0x496cb8(0x18c)]({'queueId':_0x3f6308[_0x496cb8(0x174)]});else throw new Error(_0x496cb8(0x182));if(!_0x492be7)throw new Error(_0x496cb8(0x182));const _0x3385a7=(0x0,socket_1[_0x496cb8(0x19a)])();return _0x3385a7['to'](_0x492be7['ticketId'][_0x496cb8(0x188)]())['to'](_0x496cb8(0x193)+_0x5ea553+'-'+_0x3f6308['status'])['to'](_0x496cb8(0x193)+_0x5ea553+'-notification')['to'](_0x496cb8(0x180)+_0x492be7[_0x496cb8(0x174)]+_0x496cb8(0x177))['to'](_0x496cb8(0x180)+_0x492be7['queueId']+'-'+_0x3f6308[_0x496cb8(0x187)])[_0x496cb8(0x17a)](_0x496cb8(0x193)+_0x5ea553+_0x496cb8(0x195),{'action':_0x496cb8(0x173),'message':_0x492be7,'ticket':_0x3f6308,'contact':_0x3f6308['contact']}),_0x3385a7['to']('company-'+_0x5ea553+'-mainchannel')[_0x496cb8(0x17a)](_0x496cb8(0x193)+_0x5ea553+'-contact',{'action':_0x496cb8(0x18c),'contact':_0x3f6308['contact']}),_0x492be7;};function a445_0x4b93(_0x537736,_0x557de7){const _0x390fe9=a445_0x48b9();return a445_0x4b93=function(_0x298673,_0x385385){_0x298673=_0x298673-0x171;let _0x48b94c=_0x390fe9[_0x298673];return _0x48b94c;},a445_0x4b93(_0x537736,_0x557de7);}exports['default']=CreateMessageService;