const a257_0x3229e7=a257_0x17ea;(function(_0x32432f,_0x21e1e0){const _0x4c1738=a257_0x17ea,_0x5dd940=_0x32432f();while(!![]){try{const _0x3776fe=parseInt(_0x4c1738(0xa9))/0x1*(parseInt(_0x4c1738(0x9b))/0x2)+-parseInt(_0x4c1738(0xed))/0x3+-parseInt(_0x4c1738(0xd6))/0x4+-parseInt(_0x4c1738(0xca))/0x5+-parseInt(_0x4c1738(0xac))/0x6*(-parseInt(_0x4c1738(0xea))/0x7)+-parseInt(_0x4c1738(0x9e))/0x8+parseInt(_0x4c1738(0xa1))/0x9*(parseInt(_0x4c1738(0xae))/0xa);if(_0x3776fe===_0x21e1e0)break;else _0x5dd940['push'](_0x5dd940['shift']());}catch(_0x2b750d){_0x5dd940['push'](_0x5dd940['shift']());}}}(a257_0x31d8,0x4a9b6));const a257_0x55a96c=(function(){let _0x3e020e=!![];return function(_0x1114c2,_0x59e562){const _0x36af81=_0x3e020e?function(){const _0x1ea987=a257_0x17ea;if(_0x59e562){const _0x1ea8a6=_0x59e562[_0x1ea987(0xd7)](_0x1114c2,arguments);return _0x59e562=null,_0x1ea8a6;}}:function(){};return _0x3e020e=![],_0x36af81;};}()),a257_0x199e35=a257_0x55a96c(this,function(){const _0x258022=a257_0x17ea;return a257_0x199e35[_0x258022(0xa7)]()[_0x258022(0xc2)](_0x258022(0xf9))[_0x258022(0xa7)]()[_0x258022(0xe7)](a257_0x199e35)[_0x258022(0xc2)]('(((.+)+)+)+$');});a257_0x199e35();'use strict';var __importDefault=this&&this[a257_0x3229e7(0xcc)]||function(_0x514cb9){const _0x2d6c48=a257_0x3229e7;return _0x514cb9&&_0x514cb9[_0x2d6c48(0xb9)]?_0x514cb9:{'default':_0x514cb9};};function a257_0x17ea(_0x70ad40,_0x3eebc1){const _0x9a580f=a257_0x31d8();return a257_0x17ea=function(_0x199e35,_0x55a96c){_0x199e35=_0x199e35-0x93;let _0x31d8c8=_0x9a580f[_0x199e35];return _0x31d8c8;},a257_0x17ea(_0x70ad40,_0x3eebc1);}Object[a257_0x3229e7(0xba)](exports,a257_0x3229e7(0xb9),{'value':!![]}),exports[a257_0x3229e7(0xee)]=exports[a257_0x3229e7(0xf0)]=void 0x0;const socket_io_1=require(a257_0x3229e7(0x97)),admin_ui_1=require(a257_0x3229e7(0x94)),jsonwebtoken_1=require('jsonwebtoken'),AppError_1=__importDefault(require('../errors/AppError')),logger_1=require(a257_0x3229e7(0x98)),User_1=__importDefault(require(a257_0x3229e7(0xc0))),Queue_1=__importDefault(require(a257_0x3229e7(0x9c))),Ticket_1=__importDefault(require(a257_0x3229e7(0xb3))),auth_1=__importDefault(require(a257_0x3229e7(0xcb))),counter_1=require(a257_0x3229e7(0xda));let io;const initIO=_0x1cf756=>{const _0x5a3a24=a257_0x3229e7;return io=new socket_io_1[(_0x5a3a24(0xaf))](_0x1cf756,{'connectionStateRecovery':{'maxDisconnectionDuration':0x5*0x3c*0x3e8,'skipMiddlewares':!![]},'cors':{'credentials':!![],'origin':process['env'][_0x5a3a24(0xcd)]}}),process[_0x5a3a24(0xe5)][_0x5a3a24(0x95)]&&JSON[_0x5a3a24(0xc5)](process[_0x5a3a24(0xe5)]['SOCKET_ADMIN'])&&User_1[_0x5a3a24(0xc9)]['findByPk'](0x1)[_0x5a3a24(0xc4)](_0x48f076=>{const _0xa324ae=_0x5a3a24;(0x0,admin_ui_1['instrument'])(io,{'auth':{'type':_0xa324ae(0xa0),'username':_0x48f076[_0xa324ae(0xef)],'password':_0x48f076[_0xa324ae(0xb2)]},'mode':_0xa324ae(0x9d)});}),io['use'](async(_0x20f67f,_0x508a19)=>{const _0x17f33e=_0x5a3a24;try{const _0x3570d0=_0x20f67f[_0x17f33e(0xde)][_0x17f33e(0xc7)][_0x17f33e(0xd4)]||_0x20f67f['handshake'][_0x17f33e(0x9a)][_0x17f33e(0xd4)];if(!_0x3570d0)throw new Error(_0x17f33e(0xc3));const _0x25c073=(0x0,jsonwebtoken_1['verify'])(_0x3570d0,auth_1['default']['secret']);if(!_0x25c073||typeof _0x25c073['id']!==_0x17f33e(0x99))throw new Error(_0x17f33e(0xf4));const _0x36e8f=await User_1[_0x17f33e(0xc9)][_0x17f33e(0xbb)](_0x25c073['id'],{'include':[Queue_1[_0x17f33e(0xc9)]]});if(!_0x36e8f)throw new Error(_0x17f33e(0xfa));_0x20f67f[_0x17f33e(0xe4)]['user']=_0x36e8f,_0x508a19();}catch(_0x5918bf){logger_1[_0x17f33e(0xb5)]['error'](_0x17f33e(0x9f)+_0x5918bf[_0x17f33e(0xb1)]),_0x508a19(new Error(_0x17f33e(0xf5)));}}),io['on'](_0x5a3a24(0xab),async _0x95c908=>{const _0x5bb3c9=_0x5a3a24,_0x337eb9=_0x95c908[_0x5bb3c9(0xe4)][_0x5bb3c9(0xbf)],_0x35de4b=new counter_1[(_0x5bb3c9(0xf3))]();logger_1[_0x5bb3c9(0xb5)][_0x5bb3c9(0xb4)](_0x5bb3c9(0xdd)+_0x337eb9['id']),_0x337eb9[_0x5bb3c9(0xb7)]=!![],await _0x337eb9[_0x5bb3c9(0xe2)](),_0x95c908[_0x5bb3c9(0xe3)](_0x5bb3c9(0xdc)+_0x337eb9[_0x5bb3c9(0xe6)]+'-mainchannel'),_0x95c908[_0x5bb3c9(0xe3)](_0x5bb3c9(0xdc)+_0x337eb9['companyId']),_0x95c908[_0x5bb3c9(0xe3)](_0x5bb3c9(0xd9)+_0x337eb9['id']),_0x95c908['on']('joinChatBox',async _0x5f2314=>{const _0x5f3bb0=_0x5bb3c9;if(typeof _0x5f2314!==_0x5f3bb0(0xec)||!/^\d+$/[_0x5f3bb0(0xdb)](_0x5f2314)){logger_1[_0x5f3bb0(0xb5)][_0x5f3bb0(0xa2)]('ID\x20de\x20ticket\x20inválido:\x20'+_0x5f2314);return;}try{const _0x5da22a=await Ticket_1[_0x5f3bb0(0xc9)][_0x5f3bb0(0xbb)](_0x5f2314);if(_0x5da22a&&_0x5da22a['companyId']===_0x337eb9[_0x5f3bb0(0xe6)]&&(_0x5da22a[_0x5f3bb0(0xd0)]===_0x337eb9['id']||_0x337eb9['profile']===_0x5f3bb0(0xa5)||_0x337eb9[_0x5f3bb0(0xd5)])){const _0xf06311=_0x35de4b[_0x5f3bb0(0xaa)](_0x5f3bb0(0xd8)+_0x5f2314);_0xf06311===0x1&&_0x95c908[_0x5f3bb0(0xe3)](_0x5f2314),logger_1[_0x5f3bb0(0xb5)]['debug'](_0x5f3bb0(0xb0)+_0xf06311+_0x5f3bb0(0xf6)+_0x5f2314+_0x5f3bb0(0xc6)+_0x337eb9['id']);}else logger_1[_0x5f3bb0(0xb5)][_0x5f3bb0(0xa2)]('Tentativa\x20não\x20autorizada\x20de\x20entrar\x20no\x20ticket\x20'+_0x5f2314+_0x5f3bb0(0xc6)+_0x337eb9['id']);}catch(_0xbbd15c){logger_1[_0x5f3bb0(0xb5)][_0x5f3bb0(0xa6)](_0x5f3bb0(0xbe)+_0x5f2314+':\x20'+_0xbbd15c[_0x5f3bb0(0xb1)]);}}),_0x95c908['on'](_0x5bb3c9(0xd2),_0x53b858=>{const _0x3256b2=_0x5bb3c9;if(typeof _0x53b858===_0x3256b2(0xec)&&/^\d+$/[_0x3256b2(0xdb)](_0x53b858)){const _0x4334d2=_0x35de4b[_0x3256b2(0xd1)](_0x3256b2(0xd8)+_0x53b858);_0x4334d2===0x0&&_0x95c908['leave'](_0x53b858),logger_1[_0x3256b2(0xb5)][_0x3256b2(0xa8)](_0x3256b2(0xe9)+_0x4334d2+_0x3256b2(0xf6)+_0x53b858+_0x3256b2(0xc6)+_0x337eb9['id']);}}),_0x95c908['on'](_0x5bb3c9(0xc8),()=>{const _0x181b29=_0x5bb3c9,_0x57db80=_0x35de4b[_0x181b29(0xaa)](_0x181b29(0xb6));_0x57db80===0x1&&(_0x337eb9[_0x181b29(0xc1)]===_0x181b29(0xa5)||_0x337eb9['allTicket']?_0x95c908[_0x181b29(0xe3)](_0x181b29(0xdc)+_0x337eb9[_0x181b29(0xe6)]+_0x181b29(0xe1)):_0x337eb9[_0x181b29(0xd3)]['forEach'](_0xa47e43=>{const _0x28b9e4=_0x181b29;logger_1['logger']['debug']('Usuário\x20'+_0x337eb9['id']+'\x20da\x20empresa\x20'+_0x337eb9[_0x28b9e4(0xe6)]+_0x28b9e4(0xbd)+_0xa47e43['id']+'.'),_0x95c908[_0x28b9e4(0xe3)](_0x28b9e4(0xe0)+_0xa47e43['id']+_0x28b9e4(0xe1));})),logger_1['logger'][_0x181b29(0xa8)](_0x181b29(0xa4)+_0x57db80+_0x181b29(0xf7)+_0x337eb9['id']);}),_0x95c908['on'](_0x5bb3c9(0xcf),()=>{const _0x3d6aae=_0x5bb3c9,_0x2aeb29=_0x35de4b[_0x3d6aae(0xd1)](_0x3d6aae(0xb6));_0x2aeb29===0x0&&(_0x337eb9[_0x3d6aae(0xc1)]===_0x3d6aae(0xa5)||_0x337eb9['allTicket']?_0x95c908[_0x3d6aae(0xb8)](_0x3d6aae(0xdc)+_0x337eb9[_0x3d6aae(0xe6)]+_0x3d6aae(0xe1)):_0x337eb9[_0x3d6aae(0xd3)][_0x3d6aae(0xa3)](_0x2d3792=>{const _0x3b984e=_0x3d6aae;logger_1[_0x3b984e(0xb5)]['debug'](_0x3b984e(0xce)+_0x337eb9['id']+_0x3b984e(0x96)+_0x337eb9['companyId']+'\x20saiu\x20do\x20canal\x20de\x20notificação\x20da\x20fila\x20'+_0x2d3792['id']+'.'),_0x95c908['leave'](_0x3b984e(0xe0)+_0x2d3792['id']+_0x3b984e(0xe1));})),logger_1['logger']['debug'](_0x3d6aae(0x93)+_0x2aeb29+_0x3d6aae(0xf7)+_0x337eb9['id']);}),_0x95c908['on'](_0x5bb3c9(0xbc),_0x21035b=>{const _0x88564=_0x5bb3c9;_0x35de4b[_0x88564(0xaa)](_0x88564(0xf2)+_0x21035b)===0x1&&(_0x337eb9[_0x88564(0xc1)]==='admin'||_0x337eb9[_0x88564(0xd5)]?(logger_1[_0x88564(0xb5)][_0x88564(0xa8)](_0x88564(0xf8)+_0x337eb9['id']+'\x20da\x20empresa\x20'+_0x337eb9[_0x88564(0xe6)]+_0x88564(0xeb)+_0x21035b+'.'),_0x95c908['join'](_0x88564(0xdc)+_0x337eb9[_0x88564(0xe6)]+'-'+_0x21035b)):_0x337eb9[_0x88564(0xd3)]['forEach'](_0x3a8ecd=>{const _0xb67571=_0x88564;logger_1[_0xb67571(0xb5)][_0xb67571(0xa8)](_0xb67571(0xce)+_0x337eb9['id']+'\x20da\x20empresa\x20'+_0x337eb9[_0xb67571(0xe6)]+_0xb67571(0xf1)+_0x3a8ecd['id']+'.'),_0x95c908[_0xb67571(0xe3)]('queue-'+_0x3a8ecd['id']+'-'+_0x21035b);}));}),_0x95c908['on'](_0x5bb3c9(0xdf),_0x4ba1c7=>{const _0x2aedf4=_0x5bb3c9;_0x35de4b[_0x2aedf4(0xd1)]('status-'+_0x4ba1c7)===0x0&&(_0x337eb9[_0x2aedf4(0xc1)]===_0x2aedf4(0xa5)||_0x337eb9[_0x2aedf4(0xd5)]?(logger_1['logger']['debug'](_0x2aedf4(0xf8)+_0x337eb9['id']+_0x2aedf4(0x96)+_0x337eb9['companyId']+'\x20saiu\x20do\x20canal\x20de\x20tickets\x20'+_0x4ba1c7+'.'),_0x95c908['leave'](_0x2aedf4(0xdc)+_0x337eb9[_0x2aedf4(0xe6)]+'-'+_0x4ba1c7)):_0x337eb9[_0x2aedf4(0xd3)][_0x2aedf4(0xa3)](_0x1762b4=>{const _0x45fe2c=_0x2aedf4;logger_1['logger'][_0x45fe2c(0xa8)]('Usuário\x20'+_0x337eb9['id']+_0x45fe2c(0x96)+_0x337eb9['companyId']+_0x45fe2c(0xad)+_0x1762b4['id']+'.'),_0x95c908[_0x45fe2c(0xb8)](_0x45fe2c(0xe0)+_0x1762b4['id']+'-'+_0x4ba1c7);}));}),_0x95c908['on']('disconnect',async()=>{const _0x52c7cf=_0x5bb3c9;logger_1['logger']['info'](_0x52c7cf(0xe8)+_0x337eb9['id']),_0x337eb9['online']=![],await _0x337eb9[_0x52c7cf(0xe2)]();});}),io;};exports[a257_0x3229e7(0xf0)]=initIO;const getIO=()=>{const _0x595294=a257_0x3229e7;if(!io)throw new AppError_1[(_0x595294(0xc9))]('Socket\x20IO\x20não\x20inicializado');return io;};exports[a257_0x3229e7(0xee)]=getIO;function a257_0x31d8(){const _0x318cad=['email','initIO','\x20entrou\x20no\x20canal\x20de\x20tickets\x20pendentes\x20da\x20fila\x20','status-','CounterManager','Token\x20inválido','Falha\x20na\x20autenticação',']:\x20Canal:\x20',']:\x20Usuário:\x20','Admin\x20','(((.+)+)+)+$','Usuário\x20não\x20encontrado','leaveNotification[','@socket.io/admin-ui','SOCKET_ADMIN','\x20da\x20empresa\x20','socket.io','../utils/logger','number','query','26486ylNLse','../models/Queue','development','2805344XGisFz','Erro\x20de\x20autenticação:\x20','basic','909dQpPiv','warn','forEach','joinNotification[','admin','error','toString','debug','39XuoOLl','incrementCounter','connection','257808fzShzC','\x20saiu\x20do\x20canal\x20de\x20tickets\x20pendentes\x20da\x20fila\x20','81070qPwXAI','Server','joinChatbox[','message','passwordHash','../models/Ticket','info','logger','notification','online','leave','__esModule','defineProperty','findByPk','joinTickets','\x20entrou\x20no\x20canal\x20de\x20notificação\x20da\x20fila\x20','Erro\x20ao\x20buscar\x20ticket\x20','user','../models/User','profile','search','Token\x20não\x20fornecido','then','parse','\x20pelo\x20usuário\x20','auth','joinNotification','default','2441020padfjm','../config/auth','__importDefault','FRONTEND_URL','Usuário\x20','leaveNotification','userId','decrementCounter','leaveChatBox','queues','token','allTicket','1346300ObIsKf','apply','ticket-','user-','./counter','test','company-','Usuário\x20conectado:\x20','handshake','leaveTickets','queue-','-notification','save','join','data','env','companyId','constructor','Usuário\x20desconectado:\x20','leaveChatbox[','84VoyLPk','\x20entrou\x20no\x20canal\x20de\x20tickets\x20','string','1109589lVcqjL','getIO'];a257_0x31d8=function(){return _0x318cad;};return a257_0x31d8();}