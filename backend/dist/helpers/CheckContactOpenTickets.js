function a233_0x26d7(_0x112495,_0x32ae3f){const _0x58de39=a233_0x31cc();return a233_0x26d7=function(_0x3562d8,_0x8048e8){_0x3562d8=_0x3562d8-0xf1;let _0x31cc39=_0x58de39[_0x3562d8];return _0x31cc39;},a233_0x26d7(_0x112495,_0x32ae3f);}const a233_0x3525f3=a233_0x26d7;function a233_0x31cc(){const _0x58ee57=['513472rUvrUR','default','6imdIWY','5555VoOihT','../models/Ticket','(((.+)+)+)+$','findOne','2221933QGDIPE','defineProperty','search','531wLcIct','apply','18204LzXuOD','4311592bPfpoc','1780ftBxwh','open','toString','pending','7156ljSixa','sequelize','41430CEknUu','constructor','__esModule','10eJpBPM','65994wjhxRF'];a233_0x31cc=function(){return _0x58ee57;};return a233_0x31cc();}(function(_0x33f9fe,_0x1d105b){const _0xb89746=a233_0x26d7,_0x222895=_0x33f9fe();while(!![]){try{const _0x2db3aa=parseInt(_0xb89746(0xf5))/0x1+-parseInt(_0xb89746(0xf3))/0x2*(-parseInt(_0xb89746(0xf4))/0x3)+parseInt(_0xb89746(0x107))/0x4*(-parseInt(_0xb89746(0x103))/0x5)+-parseInt(_0xb89746(0xf7))/0x6*(-parseInt(_0xb89746(0xfc))/0x7)+parseInt(_0xb89746(0x102))/0x8+-parseInt(_0xb89746(0xff))/0x9*(-parseInt(_0xb89746(0x109))/0xa)+parseInt(_0xb89746(0xf8))/0xb*(-parseInt(_0xb89746(0x101))/0xc);if(_0x2db3aa===_0x1d105b)break;else _0x222895['push'](_0x222895['shift']());}catch(_0x5b01ed){_0x222895['push'](_0x222895['shift']());}}}(a233_0x31cc,0x4e712));const a233_0x8048e8=(function(){let _0x2f58cb=!![];return function(_0x1960f2,_0x33aec5){const _0x43d86f=_0x2f58cb?function(){const _0x505993=a233_0x26d7;if(_0x33aec5){const _0x5b20f5=_0x33aec5[_0x505993(0x100)](_0x1960f2,arguments);return _0x33aec5=null,_0x5b20f5;}}:function(){};return _0x2f58cb=![],_0x43d86f;};}()),a233_0x3562d8=a233_0x8048e8(this,function(){const _0x39a527=a233_0x26d7;return a233_0x3562d8[_0x39a527(0x105)]()[_0x39a527(0xfe)](_0x39a527(0xfa))[_0x39a527(0x105)]()[_0x39a527(0xf1)](a233_0x3562d8)[_0x39a527(0xfe)]('(((.+)+)+)+$');});a233_0x3562d8();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x5512fc){const _0xa61f5c=a233_0x26d7;return _0x5512fc&&_0x5512fc[_0xa61f5c(0xf2)]?_0x5512fc:{'default':_0x5512fc};};Object[a233_0x3525f3(0xfd)](exports,'__esModule',{'value':!![]});const sequelize_1=require(a233_0x3525f3(0x108)),Ticket_1=__importDefault(require(a233_0x3525f3(0xf9))),CheckContactOpenTickets=async(_0x75f970,_0x7c05a2)=>{const _0x8251f2=a233_0x3525f3;let _0x49b106;return!_0x7c05a2?_0x49b106=await Ticket_1[_0x8251f2(0xf6)]['findOne']({'where':{'contactId':_0x75f970,'status':{[sequelize_1['Op']['or']]:[_0x8251f2(0x104),'pending']}}}):_0x49b106=await Ticket_1[_0x8251f2(0xf6)][_0x8251f2(0xfb)]({'where':{'contactId':_0x75f970,'status':{[sequelize_1['Op']['or']]:[_0x8251f2(0x104),_0x8251f2(0x106)]},'whatsappId':_0x7c05a2}}),_0x49b106;};exports[a233_0x3525f3(0xf6)]=CheckContactOpenTickets;