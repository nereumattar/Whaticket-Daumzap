const a249_0x41918e=a249_0x5d6f;(function(_0x464c09,_0xab36d1){const _0x1d673e=a249_0x5d6f,_0x2678c1=_0x464c09();while(!![]){try{const _0x1c71bf=-parseInt(_0x1d673e(0x87))/0x1+-parseInt(_0x1d673e(0x9e))/0x2+parseInt(_0x1d673e(0x8a))/0x3*(parseInt(_0x1d673e(0x86))/0x4)+parseInt(_0x1d673e(0x90))/0x5+-parseInt(_0x1d673e(0x89))/0x6*(-parseInt(_0x1d673e(0x85))/0x7)+-parseInt(_0x1d673e(0x74))/0x8*(-parseInt(_0x1d673e(0x70))/0x9)+-parseInt(_0x1d673e(0x9f))/0xa*(-parseInt(_0x1d673e(0x7f))/0xb);if(_0x1c71bf===_0xab36d1)break;else _0x2678c1['push'](_0x2678c1['shift']());}catch(_0x5408fb){_0x2678c1['push'](_0x2678c1['shift']());}}}(a249_0x1f56,0x40936));const a249_0x4cafe9=(function(){let _0x1e26ac=!![];return function(_0x45ef1c,_0x160054){const _0x21820b=_0x1e26ac?function(){if(_0x160054){const _0x450a47=_0x160054['apply'](_0x45ef1c,arguments);return _0x160054=null,_0x450a47;}}:function(){};return _0x1e26ac=![],_0x21820b;};}()),a249_0x4dc486=a249_0x4cafe9(this,function(){const _0x2a67cb=a249_0x5d6f;return a249_0x4dc486[_0x2a67cb(0x71)]()[_0x2a67cb(0x96)](_0x2a67cb(0x7b))[_0x2a67cb(0x71)]()[_0x2a67cb(0x76)](a249_0x4dc486)[_0x2a67cb(0x96)](_0x2a67cb(0x7b));});function a249_0x1f56(){const _0x408bc4=['516qwFSnm','substring','-notification','./GetTicketWbot','__esModule',':unreads','280025zEEEaU','number','warn','logger','defineProperty','default','search','key','cacheLayer','contact','Could\x20not\x20mark\x20messages\x20as\x20read.\x20Maybe\x20whatsapp\x20session\x20disconnected?\x20Err:\x20','../libs/socket','updateUnread','contactId','646454hfFyCY','10aKibvi','map','readMessages','getIO','companyId','18KuOyRn','toString','parse','isGroup','314144DPoPhi','read','constructor','DESC','findAll','company-','emit','(((.+)+)+)+$','chatModify','fromMe','contacts:','8856826Sbeheo','createdAt','dataJson','update','set','sendReceipt','259VBktJX','56VpNWyY','520627nunXYJ','-ticket','26958DTSBhu'];a249_0x1f56=function(){return _0x408bc4;};return a249_0x1f56();}a249_0x4dc486();'use strict';function a249_0x5d6f(_0x11488b,_0x1be5a5){const _0x459663=a249_0x1f56();return a249_0x5d6f=function(_0x4dc486,_0x4cafe9){_0x4dc486=_0x4dc486-0x6d;let _0x1f56b2=_0x459663[_0x4dc486];return _0x1f56b2;},a249_0x5d6f(_0x11488b,_0x1be5a5);}var __importDefault=this&&this['__importDefault']||function(_0x3d9fa3){const _0x5570f8=a249_0x5d6f;return _0x3d9fa3&&_0x3d9fa3[_0x5570f8(0x8e)]?_0x3d9fa3:{'default':_0x3d9fa3};};Object[a249_0x41918e(0x94)](exports,a249_0x41918e(0x8e),{'value':!![]});const socket_1=require(a249_0x41918e(0x9b)),Message_1=__importDefault(require('../models/Message')),logger_1=require('../utils/logger'),GetTicketWbot_1=__importDefault(require(a249_0x41918e(0x8d))),cache_1=require('../libs/cache'),SetTicketMessagesAsRead=async _0x52da89=>{const _0x2c00e4=a249_0x41918e;async function _0x7706ae(_0x372c3c,_0x5ac855,_0x116b0f,_0x4197da){const _0x4f0c21=a249_0x5d6f;await _0x372c3c[_0x4f0c21(0x84)](_0x5ac855,_0x116b0f,[_0x4197da],_0x4f0c21(0x75));}await _0x52da89['update']({'unreadMessages':0x0});try{const _0x445334=await(0x0,GetTicketWbot_1['default'])(_0x52da89),_0x10a337=await Message_1['default'][_0x2c00e4(0x78)]({'where':{'ticketId':_0x52da89['id'],'fromMe':![],'read':![]},'order':[[_0x2c00e4(0x80),_0x2c00e4(0x77)]]});_0x10a337[_0x2c00e4(0xa0)](async _0x3fa4e8=>{const _0x1d36eb=_0x2c00e4,_0x27ae86=JSON['parse'](_0x3fa4e8[_0x1d36eb(0x81)]);_0x27ae86['key']&&await _0x445334[_0x1d36eb(0x6d)]([_0x27ae86[_0x1d36eb(0x97)]]);});if(_0x10a337['length']>0x0){const _0x544b89=JSON[_0x2c00e4(0x72)](_0x10a337[0x0]['dataJson']),_0x296845=_0x52da89[_0x2c00e4(0x73)]?_0x52da89[_0x2c00e4(0x99)][_0x2c00e4(0x91)][_0x2c00e4(0x8b)](0xc,0x0)+'-'+_0x52da89[_0x2c00e4(0x99)]['number'][_0x2c00e4(0x8b)](0xc)+'@g.us':_0x52da89['contact'][_0x2c00e4(0x91)]+'@s.whatsapp.net';_0x544b89[_0x2c00e4(0x97)]&&_0x544b89[_0x2c00e4(0x97)][_0x2c00e4(0x7d)]===![]&&await _0x445334[_0x2c00e4(0x7c)]({'markRead':!![],'lastMessages':[_0x544b89]},_0x296845);}await Message_1['default'][_0x2c00e4(0x82)]({'read':!![]},{'where':{'ticketId':_0x52da89['id'],'read':![]}}),await cache_1[_0x2c00e4(0x98)][_0x2c00e4(0x83)](_0x2c00e4(0x7e)+_0x52da89[_0x2c00e4(0x9d)]+_0x2c00e4(0x8f),'0');}catch(_0x5936cb){logger_1[_0x2c00e4(0x93)][_0x2c00e4(0x92)](_0x2c00e4(0x9a)+_0x5936cb);}const _0x6d4ca=(0x0,socket_1[_0x2c00e4(0x6e)])();_0x6d4ca['to']('company-'+_0x52da89[_0x2c00e4(0x6f)]+'-'+_0x52da89['status'])['to']('company-'+_0x52da89[_0x2c00e4(0x6f)]+_0x2c00e4(0x8c))[_0x2c00e4(0x7a)](_0x2c00e4(0x79)+_0x52da89[_0x2c00e4(0x6f)]+_0x2c00e4(0x88),{'action':_0x2c00e4(0x9c),'ticketId':_0x52da89['id']});};exports[a249_0x41918e(0x95)]=SetTicketMessagesAsRead;