const a258_0x5e73db=a258_0x1524;(function(_0x176e07,_0x3d6e44){const _0x4398e0=a258_0x1524,_0x441951=_0x176e07();while(!![]){try{const _0x165ddc=parseInt(_0x4398e0(0x12d))/0x1*(-parseInt(_0x4398e0(0x13e))/0x2)+parseInt(_0x4398e0(0x142))/0x3+parseInt(_0x4398e0(0xf8))/0x4*(-parseInt(_0x4398e0(0xf0))/0x5)+-parseInt(_0x4398e0(0x127))/0x6*(parseInt(_0x4398e0(0x131))/0x7)+-parseInt(_0x4398e0(0x130))/0x8*(-parseInt(_0x4398e0(0x105))/0x9)+-parseInt(_0x4398e0(0xec))/0xa+parseInt(_0x4398e0(0x106))/0xb;if(_0x165ddc===_0x3d6e44)break;else _0x441951['push'](_0x441951['shift']());}catch(_0x5be92c){_0x441951['push'](_0x441951['shift']());}}}(a258_0x1be4,0x24e27));const a258_0x3567f5=(function(){let _0x8652c=!![];return function(_0x51bb6d,_0x333f79){const _0x5a4329=_0x8652c?function(){const _0x18ba87=a258_0x1524;if(_0x333f79){const _0xb1f3c3=_0x333f79[_0x18ba87(0x124)](_0x51bb6d,arguments);return _0x333f79=null,_0xb1f3c3;}}:function(){};return _0x8652c=![],_0x5a4329;};}()),a258_0x3c250a=a258_0x3567f5(this,function(){const _0x139477=a258_0x1524;return a258_0x3c250a[_0x139477(0xf3)]()[_0x139477(0x135)](_0x139477(0x102))[_0x139477(0xf3)]()[_0x139477(0x121)](a258_0x3c250a)[_0x139477(0x135)](_0x139477(0x102));});a258_0x3c250a();'use strict';function a258_0x1524(_0x47e462,_0x5126b8){const _0x32a9d4=a258_0x1be4();return a258_0x1524=function(_0x3c250a,_0x3567f5){_0x3c250a=_0x3c250a-0xe5;let _0x1be499=_0x32a9d4[_0x3c250a];return _0x1be499;},a258_0x1524(_0x47e462,_0x5126b8);}var __importDefault=this&&this[a258_0x5e73db(0xed)]||function(_0x4f324d){const _0x29bd71=a258_0x5e73db;return _0x4f324d&&_0x4f324d[_0x29bd71(0x143)]?_0x4f324d:{'default':_0x4f324d};};Object[a258_0x5e73db(0x100)](exports,a258_0x5e73db(0x143),{'value':!![]}),exports[a258_0x5e73db(0x10a)]=exports['initIO']=void 0x0;const socket_io_1=require(a258_0x5e73db(0xff)),admin_ui_1=require(a258_0x5e73db(0x11d)),jsonwebtoken_1=require(a258_0x5e73db(0xe9)),AppError_1=__importDefault(require(a258_0x5e73db(0x13b))),logger_1=require(a258_0x5e73db(0x145)),User_1=__importDefault(require('../models/User')),Queue_1=__importDefault(require('../models/Queue')),Ticket_1=__importDefault(require('../models/Ticket')),auth_1=__importDefault(require(a258_0x5e73db(0xeb))),counter_1=require('./counter');let io;const initIO=_0x2a3745=>{const _0x1b54d8=a258_0x5e73db;return io=new socket_io_1[(_0x1b54d8(0xe7))](_0x2a3745,{'connectionStateRecovery':{'maxDisconnectionDuration':0x5*0x3c*0x3e8,'skipMiddlewares':!![]},'cors':{'credentials':!![],'origin':process[_0x1b54d8(0x10b)][_0x1b54d8(0x13d)]}}),process[_0x1b54d8(0x10b)]['SOCKET_ADMIN']&&JSON[_0x1b54d8(0x126)](process['env'][_0x1b54d8(0x114)])&&User_1[_0x1b54d8(0xef)]['findByPk'](0x1)['then'](_0x25cac7=>{const _0xd6049f=_0x1b54d8;(0x0,admin_ui_1['instrument'])(io,{'auth':{'type':'basic','username':_0x25cac7['email'],'password':_0x25cac7[_0xd6049f(0xf6)]},'mode':_0xd6049f(0x104)});}),io[_0x1b54d8(0x11b)](async(_0x3fc338,_0x4a6689)=>{const _0x29c629=_0x1b54d8;try{const _0x4bc318=_0x3fc338[_0x29c629(0x122)][_0x29c629(0xe6)]['token']||_0x3fc338['handshake'][_0x29c629(0x125)][_0x29c629(0xf5)];if(!_0x4bc318)throw new Error('Token\x20não\x20fornecido');const _0x43262d=(0x0,jsonwebtoken_1[_0x29c629(0x12b)])(_0x4bc318,auth_1[_0x29c629(0xef)][_0x29c629(0x13f)]);if(!_0x43262d||typeof _0x43262d['id']!==_0x29c629(0xf9))throw new Error('Token\x20inválido');const _0x14525b=await User_1[_0x29c629(0xef)]['findByPk'](_0x43262d['id'],{'include':[Queue_1[_0x29c629(0xef)]]});if(!_0x14525b)throw new Error('Usuário\x20não\x20encontrado');_0x3fc338[_0x29c629(0x132)]['user']=_0x14525b,_0x4a6689();}catch(_0xfc72d){logger_1[_0x29c629(0x13a)]['error']('Erro\x20de\x20autenticação:\x20'+_0xfc72d[_0x29c629(0x139)]),_0x4a6689(new Error(_0x29c629(0xee)));}}),io['on'](_0x1b54d8(0xf2),async _0x6adea9=>{const _0x15cb0b=_0x1b54d8,_0x1ab023=_0x6adea9['data'][_0x15cb0b(0x115)],_0x56aee=new counter_1[(_0x15cb0b(0x108))]();logger_1[_0x15cb0b(0x13a)][_0x15cb0b(0x12f)](_0x15cb0b(0x133)+_0x1ab023['id']),_0x1ab023[_0x15cb0b(0xfe)]=!![],await _0x1ab023[_0x15cb0b(0x11f)](),_0x6adea9[_0x15cb0b(0x109)](_0x15cb0b(0x119)+_0x1ab023[_0x15cb0b(0x120)]+_0x15cb0b(0xfa)),_0x6adea9[_0x15cb0b(0x109)]('company-'+_0x1ab023['companyId']),_0x6adea9['join'](_0x15cb0b(0x116)+_0x1ab023['id']),_0x6adea9['on'](_0x15cb0b(0xfc),async _0x92840d=>{const _0x10cf96=_0x15cb0b;if(typeof _0x92840d!=='string'||!/^\d+$/['test'](_0x92840d)){logger_1[_0x10cf96(0x13a)][_0x10cf96(0x140)](_0x10cf96(0xea)+_0x92840d);return;}try{const _0x4c6ffe=await Ticket_1[_0x10cf96(0xef)][_0x10cf96(0x123)](_0x92840d);if(_0x4c6ffe&&_0x4c6ffe[_0x10cf96(0x120)]===_0x1ab023['companyId']&&(_0x4c6ffe['userId']===_0x1ab023['id']||_0x1ab023['profile']===_0x10cf96(0x129)||_0x1ab023[_0x10cf96(0x134)])){const _0x57e7f4=_0x56aee[_0x10cf96(0x11c)](_0x10cf96(0x12e)+_0x92840d);_0x57e7f4===0x1&&_0x6adea9[_0x10cf96(0x109)](_0x92840d),logger_1[_0x10cf96(0x13a)][_0x10cf96(0xf7)]('joinChatbox['+_0x57e7f4+_0x10cf96(0x101)+_0x92840d+_0x10cf96(0x144)+_0x1ab023['id']);}else logger_1[_0x10cf96(0x13a)][_0x10cf96(0x140)](_0x10cf96(0x146)+_0x92840d+'\x20pelo\x20usuário\x20'+_0x1ab023['id']);}catch(_0x57dd13){logger_1[_0x10cf96(0x13a)][_0x10cf96(0x138)](_0x10cf96(0x137)+_0x92840d+':\x20'+_0x57dd13[_0x10cf96(0x139)]);}}),_0x6adea9['on']('leaveChatBox',_0x54c35f=>{const _0x5574e3=_0x15cb0b;if(typeof _0x54c35f===_0x5574e3(0x12c)&&/^\d+$/[_0x5574e3(0x118)](_0x54c35f)){const _0x4be9bb=_0x56aee['decrementCounter']('ticket-'+_0x54c35f);_0x4be9bb===0x0&&_0x6adea9[_0x5574e3(0x10f)](_0x54c35f),logger_1['logger'][_0x5574e3(0xf7)](_0x5574e3(0xf1)+_0x4be9bb+_0x5574e3(0x101)+_0x54c35f+_0x5574e3(0x144)+_0x1ab023['id']);}}),_0x6adea9['on'](_0x15cb0b(0x12a),()=>{const _0xc6dfd9=_0x15cb0b,_0x51b895=_0x56aee[_0xc6dfd9(0x11c)](_0xc6dfd9(0xe8));_0x51b895===0x1&&(_0x1ab023['profile']===_0xc6dfd9(0x129)||_0x1ab023['allTicket']?_0x6adea9['join'](_0xc6dfd9(0x119)+_0x1ab023[_0xc6dfd9(0x120)]+'-notification'):_0x1ab023['queues'][_0xc6dfd9(0x10d)](_0x5480d9=>{const _0x374e74=_0xc6dfd9;logger_1[_0x374e74(0x13a)][_0x374e74(0xf7)](_0x374e74(0x110)+_0x1ab023['id']+_0x374e74(0xfb)+_0x1ab023['companyId']+'\x20entrou\x20no\x20canal\x20de\x20notificação\x20da\x20fila\x20'+_0x5480d9['id']+'.'),_0x6adea9[_0x374e74(0x109)](_0x374e74(0x141)+_0x5480d9['id']+_0x374e74(0x112));})),logger_1[_0xc6dfd9(0x13a)][_0xc6dfd9(0xf7)](_0xc6dfd9(0xfd)+_0x51b895+_0xc6dfd9(0x13c)+_0x1ab023['id']);}),_0x6adea9['on'](_0x15cb0b(0x11e),()=>{const _0x193dac=_0x15cb0b,_0xa0907b=_0x56aee['decrementCounter'](_0x193dac(0xe8));_0xa0907b===0x0&&(_0x1ab023[_0x193dac(0xe5)]===_0x193dac(0x129)||_0x1ab023[_0x193dac(0x134)]?_0x6adea9[_0x193dac(0x10f)](_0x193dac(0x119)+_0x1ab023[_0x193dac(0x120)]+'-notification'):_0x1ab023[_0x193dac(0x107)][_0x193dac(0x10d)](_0x2374e4=>{const _0x498bf1=_0x193dac;logger_1['logger'][_0x498bf1(0xf7)]('Usuário\x20'+_0x1ab023['id']+_0x498bf1(0xfb)+_0x1ab023[_0x498bf1(0x120)]+_0x498bf1(0x117)+_0x2374e4['id']+'.'),_0x6adea9['leave']('queue-'+_0x2374e4['id']+_0x498bf1(0x112));})),logger_1['logger'][_0x193dac(0xf7)](_0x193dac(0x11a)+_0xa0907b+_0x193dac(0x13c)+_0x1ab023['id']);}),_0x6adea9['on']('joinTickets',_0x17ca13=>{const _0x458ec4=_0x15cb0b;_0x56aee[_0x458ec4(0x11c)]('status-'+_0x17ca13)===0x1&&(_0x1ab023['profile']==='admin'||_0x1ab023['allTicket']?(logger_1[_0x458ec4(0x13a)][_0x458ec4(0xf7)](_0x458ec4(0x10c)+_0x1ab023['id']+'\x20da\x20empresa\x20'+_0x1ab023['companyId']+'\x20entrou\x20no\x20canal\x20de\x20tickets\x20'+_0x17ca13+'.'),_0x6adea9['join'](_0x458ec4(0x119)+_0x1ab023[_0x458ec4(0x120)]+'-'+_0x17ca13)):_0x1ab023[_0x458ec4(0x107)]['forEach'](_0x3da40c=>{const _0x417a6c=_0x458ec4;logger_1[_0x417a6c(0x13a)][_0x417a6c(0xf7)]('Usuário\x20'+_0x1ab023['id']+'\x20da\x20empresa\x20'+_0x1ab023['companyId']+'\x20entrou\x20no\x20canal\x20de\x20tickets\x20pendentes\x20da\x20fila\x20'+_0x3da40c['id']+'.'),_0x6adea9[_0x417a6c(0x109)](_0x417a6c(0x141)+_0x3da40c['id']+'-'+_0x17ca13);}));}),_0x6adea9['on']('leaveTickets',_0x9e5b61=>{const _0x1859ab=_0x15cb0b;_0x56aee['decrementCounter'](_0x1859ab(0x136)+_0x9e5b61)===0x0&&(_0x1ab023[_0x1859ab(0xe5)]===_0x1859ab(0x129)||_0x1ab023[_0x1859ab(0x134)]?(logger_1['logger'][_0x1859ab(0xf7)](_0x1859ab(0x10c)+_0x1ab023['id']+'\x20da\x20empresa\x20'+_0x1ab023[_0x1859ab(0x120)]+_0x1859ab(0x128)+_0x9e5b61+'.'),_0x6adea9['leave'](_0x1859ab(0x119)+_0x1ab023[_0x1859ab(0x120)]+'-'+_0x9e5b61)):_0x1ab023[_0x1859ab(0x107)][_0x1859ab(0x10d)](_0x1173cf=>{const _0x41aa63=_0x1859ab;logger_1[_0x41aa63(0x13a)]['debug'](_0x41aa63(0x110)+_0x1ab023['id']+_0x41aa63(0xfb)+_0x1ab023[_0x41aa63(0x120)]+_0x41aa63(0x103)+_0x1173cf['id']+'.'),_0x6adea9[_0x41aa63(0x10f)](_0x41aa63(0x141)+_0x1173cf['id']+'-'+_0x9e5b61);}));}),_0x6adea9['on'](_0x15cb0b(0x10e),async()=>{const _0x51cac0=_0x15cb0b;logger_1[_0x51cac0(0x13a)][_0x51cac0(0x12f)](_0x51cac0(0x111)+_0x1ab023['id']),_0x1ab023['online']=![],await _0x1ab023[_0x51cac0(0x11f)]();});}),io;};exports[a258_0x5e73db(0xf4)]=initIO;function a258_0x1be4(){const _0x52db5a=['toString','initIO','token','passwordHash','debug','7204DyhgcF','number','-mainchannel','\x20da\x20empresa\x20','joinChatBox','joinNotification[','online','socket.io','defineProperty',']:\x20Canal:\x20','(((.+)+)+)+$','\x20saiu\x20do\x20canal\x20de\x20tickets\x20pendentes\x20da\x20fila\x20','development','513576ZpaXkG','4685560aWmRcb','queues','CounterManager','join','getIO','env','Admin\x20','forEach','disconnect','leave','Usuário\x20','Usuário\x20desconectado:\x20','-notification','Socket\x20IO\x20não\x20inicializado','SOCKET_ADMIN','user','user-','\x20saiu\x20do\x20canal\x20de\x20notificação\x20da\x20fila\x20','test','company-','leaveNotification[','use','incrementCounter','@socket.io/admin-ui','leaveNotification','save','companyId','constructor','handshake','findByPk','apply','query','parse','558378qUmBEq','\x20saiu\x20do\x20canal\x20de\x20tickets\x20','admin','joinNotification','verify','string','129682NlJoHH','ticket-','info','16oMsgsH','7cSBaBY','data','Usuário\x20conectado:\x20','allTicket','search','status-','Erro\x20ao\x20buscar\x20ticket\x20','error','message','logger','../errors/AppError',']:\x20Usuário:\x20','FRONTEND_URL','4xVumIe','secret','warn','queue-','797868GgxJaV','__esModule','\x20pelo\x20usuário\x20','../utils/logger','Tentativa\x20não\x20autorizada\x20de\x20entrar\x20no\x20ticket\x20','profile','auth','Server','notification','jsonwebtoken','ID\x20de\x20ticket\x20inválido:\x20','../config/auth','125770dmyqij','__importDefault','Falha\x20na\x20autenticação','default','805ejEqLM','leaveChatbox[','connection'];a258_0x1be4=function(){return _0x52db5a;};return a258_0x1be4();}const getIO=()=>{const _0x3ebe6c=a258_0x5e73db;if(!io)throw new AppError_1['default'](_0x3ebe6c(0x113));return io;};exports['getIO']=getIO;