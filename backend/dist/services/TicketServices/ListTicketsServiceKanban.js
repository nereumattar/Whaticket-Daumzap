const a527_0x1700fd=a527_0x3872;(function(_0x1e9075,_0x4a34b2){const _0x231a4c=a527_0x3872,_0x4d4a74=_0x1e9075();while(!![]){try{const _0x65acbc=parseInt(_0x231a4c(0xfb))/0x1+-parseInt(_0x231a4c(0xea))/0x2*(-parseInt(_0x231a4c(0xcf))/0x3)+-parseInt(_0x231a4c(0xc0))/0x4*(parseInt(_0x231a4c(0xd7))/0x5)+parseInt(_0x231a4c(0xef))/0x6+parseInt(_0x231a4c(0xd3))/0x7*(parseInt(_0x231a4c(0xc4))/0x8)+parseInt(_0x231a4c(0xbf))/0x9+-parseInt(_0x231a4c(0xe9))/0xa*(parseInt(_0x231a4c(0xeb))/0xb);if(_0x65acbc===_0x4a34b2)break;else _0x4d4a74['push'](_0x4d4a74['shift']());}catch(_0x2cd674){_0x4d4a74['push'](_0x4d4a74['shift']());}}}(a527_0xba4c,0x5f4b0));const a527_0x3a7b53=(function(){let _0x3732d6=!![];return function(_0x3fb5d6,_0x6d5ac4){const _0x11ad27=_0x3732d6?function(){const _0x4f49c9=a527_0x3872;if(_0x6d5ac4){const _0x5853e6=_0x6d5ac4[_0x4f49c9(0xf6)](_0x3fb5d6,arguments);return _0x6d5ac4=null,_0x5853e6;}}:function(){};return _0x3732d6=![],_0x11ad27;};}()),a527_0x4bbe88=a527_0x3a7b53(this,function(){const _0x3972c6=a527_0x3872;return a527_0x4bbe88[_0x3972c6(0xf8)]()[_0x3972c6(0xf7)](_0x3972c6(0xd4))[_0x3972c6(0xf8)]()[_0x3972c6(0xd0)](a527_0x4bbe88)[_0x3972c6(0xf7)]('(((.+)+)+)+$');});function a527_0xba4c(){const _0x2ca965=['486647vDwNAu','ticketId','../../models/Tag','2153214Lzaiai','23416wnjbKW','../../models/TicketTag','presence','sequelize','24664gjSpnJ','trim','pending','like','startOfDay','true','queues','contact','../../models/Ticket','LOWER','parseISO','57CsLelc','constructor','name','push','553NbZZoN','(((.+)+)+)+$','body','where','15WsZlSH','__esModule','LIKE','../UserServices/ShowUserService','../../models/Message','__importDefault','map','intersection','defineProperty','length','default','../../models/User','date-fns','col','../../models/Whatsapp','tags','toLocaleLowerCase','messages','10PNBmpV','57730vqlxyu','20285969qlvMTW','color','between','findAll','4405056fAuDEx','user','isArray','queue','updatedAt','email','../../models/Contact','apply','search','toString','contact.name','whatsapp'];a527_0xba4c=function(){return _0x2ca965;};return a527_0xba4c();}a527_0x4bbe88();'use strict';var __importDefault=this&&this[a527_0x1700fd(0xdc)]||function(_0x5301fd){const _0xddba23=a527_0x1700fd;return _0x5301fd&&_0x5301fd[_0xddba23(0xd8)]?_0x5301fd:{'default':_0x5301fd};};Object[a527_0x1700fd(0xdf)](exports,a527_0x1700fd(0xd8),{'value':!![]});function a527_0x3872(_0x571d77,_0x2e59e8){const _0x11b377=a527_0xba4c();return a527_0x3872=function(_0x4bbe88,_0x3a7b53){_0x4bbe88=_0x4bbe88-0xbe;let _0xba4cf=_0x11b377[_0x4bbe88];return _0xba4cf;},a527_0x3872(_0x571d77,_0x2e59e8);}const sequelize_1=require(a527_0x1700fd(0xc3)),date_fns_1=require(a527_0x1700fd(0xe3)),Ticket_1=__importDefault(require(a527_0x1700fd(0xcc))),Contact_1=__importDefault(require(a527_0x1700fd(0xf5))),Message_1=__importDefault(require(a527_0x1700fd(0xdb))),Queue_1=__importDefault(require('../../models/Queue')),User_1=__importDefault(require(a527_0x1700fd(0xe2))),ShowUserService_1=__importDefault(require(a527_0x1700fd(0xda))),Tag_1=__importDefault(require(a527_0x1700fd(0xbe))),TicketTag_1=__importDefault(require(a527_0x1700fd(0xc1))),lodash_1=require('lodash'),Whatsapp_1=__importDefault(require(a527_0x1700fd(0xe5))),ListTicketsServiceKanban=async({searchParam:searchParam='',pageNumber:pageNumber='1',queueIds:_0x66c839,tags:_0x4d8e6d,users:_0x2024f8,status:_0x2ae087,date:_0x5c5bfc,updatedAt:_0x1eeabd,showAll:_0x51e4d7,userId:_0x26b779,withUnreadMessages:_0x5ca1a0,companyId:_0x401870})=>{const _0x198a34=a527_0x1700fd;let _0x672aa4={[sequelize_1['Op']['or']]:[{'userId':_0x26b779},{'status':_0x198a34(0xc6)}],'queueId':{[sequelize_1['Op']['or']]:[_0x66c839,null]}},_0x2d0db5;_0x2d0db5=[{'model':Contact_1[_0x198a34(0xe1)],'as':_0x198a34(0xcb),'attributes':['id',_0x198a34(0xd1),'number',_0x198a34(0xf4),_0x198a34(0xc2)]},{'model':Queue_1[_0x198a34(0xe1)],'as':_0x198a34(0xf2),'attributes':['id',_0x198a34(0xd1),'color']},{'model':User_1[_0x198a34(0xe1)],'as':_0x198a34(0xf0),'attributes':['id','name']},{'model':Tag_1['default'],'as':_0x198a34(0xe6),'attributes':['id',_0x198a34(0xd1),_0x198a34(0xec)]},{'model':Whatsapp_1[_0x198a34(0xe1)],'as':_0x198a34(0xfa),'attributes':[_0x198a34(0xd1)]}];_0x51e4d7===_0x198a34(0xc9)&&(_0x672aa4={'queueId':{[sequelize_1['Op']['or']]:[_0x66c839,null]},'userId':_0x26b779});_0x672aa4={..._0x672aa4,'status':{[sequelize_1['Op']['or']]:['pending','open']}};if(searchParam){const _0x1fc059=searchParam[_0x198a34(0xe7)]()[_0x198a34(0xc5)]();_0x2d0db5=[..._0x2d0db5,{'model':Message_1[_0x198a34(0xe1)],'as':_0x198a34(0xe8),'attributes':['id',_0x198a34(0xd5)],'where':{'body':(0x0,sequelize_1[_0x198a34(0xd6)])((0x0,sequelize_1['fn'])(_0x198a34(0xcd),(0x0,sequelize_1[_0x198a34(0xe4)])('body')),_0x198a34(0xd9),'%'+_0x1fc059+'%')},'required':![],'duplicating':![]}],_0x672aa4={..._0x672aa4,[sequelize_1['Op']['or']]:[{'$contact.name$':(0x0,sequelize_1[_0x198a34(0xd6)])((0x0,sequelize_1['fn'])(_0x198a34(0xcd),(0x0,sequelize_1[_0x198a34(0xe4)])(_0x198a34(0xf9))),'LIKE','%'+_0x1fc059+'%')},{'$contact.number$':{[sequelize_1['Op'][_0x198a34(0xc7)]]:'%'+_0x1fc059+'%'}},{'$message.body$':(0x0,sequelize_1[_0x198a34(0xd6)])((0x0,sequelize_1['fn'])('LOWER',(0x0,sequelize_1['col'])(_0x198a34(0xd5))),'LIKE','%'+_0x1fc059+'%')}]};}_0x5c5bfc&&(_0x672aa4={'createdAt':{[sequelize_1['Op'][_0x198a34(0xed)]]:[+(0x0,date_fns_1[_0x198a34(0xc8)])((0x0,date_fns_1[_0x198a34(0xce)])(_0x5c5bfc)),+(0x0,date_fns_1['endOfDay'])((0x0,date_fns_1[_0x198a34(0xce)])(_0x5c5bfc))]}});_0x1eeabd&&(_0x672aa4={'updatedAt':{[sequelize_1['Op'][_0x198a34(0xed)]]:[+(0x0,date_fns_1[_0x198a34(0xc8)])((0x0,date_fns_1['parseISO'])(_0x1eeabd)),+(0x0,date_fns_1['endOfDay'])((0x0,date_fns_1[_0x198a34(0xce)])(_0x1eeabd))]}});if(_0x5ca1a0===_0x198a34(0xc9)){const _0x3f9e34=await(0x0,ShowUserService_1[_0x198a34(0xe1)])(_0x26b779),_0x297c2a=_0x3f9e34[_0x198a34(0xca)][_0x198a34(0xdd)](_0x2e488a=>_0x2e488a['id']);_0x672aa4={[sequelize_1['Op']['or']]:[{'userId':_0x26b779},{'status':'pending'}],'queueId':{[sequelize_1['Op']['or']]:[_0x297c2a,null]},'unreadMessages':{[sequelize_1['Op']['gt']]:0x0}};}if(Array[_0x198a34(0xf1)](_0x4d8e6d)&&_0x4d8e6d['length']>0x0){const _0x2cd1b0=[];for(let _0x40d08a of _0x4d8e6d){const _0x2eacee=await TicketTag_1[_0x198a34(0xe1)][_0x198a34(0xee)]({'where':{'tagId':_0x40d08a}});_0x2eacee&&_0x2cd1b0[_0x198a34(0xd2)](_0x2eacee[_0x198a34(0xdd)](_0x5a5fe7=>_0x5a5fe7[_0x198a34(0xfc)]));}const _0x366c03=(0x0,lodash_1['intersection'])(..._0x2cd1b0);_0x672aa4={..._0x672aa4,'id':{[sequelize_1['Op']['in']]:_0x366c03}};}if(Array[_0x198a34(0xf1)](_0x2024f8)&&_0x2024f8[_0x198a34(0xe0)]>0x0){const _0x4dc9e9=[];for(let _0x198813 of _0x2024f8){const _0x3332b0=await Ticket_1['default'][_0x198a34(0xee)]({'where':{'userId':_0x198813}});_0x3332b0&&_0x4dc9e9[_0x198a34(0xd2)](_0x3332b0[_0x198a34(0xdd)](_0x2dfcbb=>_0x2dfcbb['id']));}const _0x2041fc=(0x0,lodash_1[_0x198a34(0xde)])(..._0x4dc9e9);_0x672aa4={..._0x672aa4,'id':{[sequelize_1['Op']['in']]:_0x2041fc}};}const _0x595a5e=0x28,_0x18b2e1=_0x595a5e*(+pageNumber-0x1);_0x672aa4={..._0x672aa4,'companyId':_0x401870};const {count:_0x236b09,rows:_0x2b8c71}=await Ticket_1[_0x198a34(0xe1)]['findAndCountAll']({'where':_0x672aa4,'include':_0x2d0db5,'distinct':!![],'limit':_0x595a5e,'offset':_0x18b2e1,'order':[[_0x198a34(0xf3),'DESC']],'subQuery':![]}),_0x95dc1d=_0x236b09>_0x18b2e1+_0x2b8c71['length'];return{'tickets':_0x2b8c71,'count':_0x236b09,'hasMore':_0x95dc1d};};exports[a527_0x1700fd(0xe1)]=ListTicketsServiceKanban;