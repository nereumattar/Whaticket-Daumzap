const a379_0x10771c=a379_0x547c;function a379_0x35ee(){const _0x595a79=['86160PpVspd','constructor','toString','apply','108916YtaIuk','30408RmUuTi','user','3692vwTnJA','2877uxWcXm','search','12bIBqEG','889775EYclOK','../../models/User','create','1440216nkkNRO','1979772zJuLCJ','7362JgvjIa','owner','default','../../models/Chat','__importDefault','16HajjSY','reload','isArray','(((.+)+)+)+$','__esModule','1012XPyEbR','2uXvQhZ'];a379_0x35ee=function(){return _0x595a79;};return a379_0x35ee();}(function(_0xcab55a,_0x1e41ad){const _0x145bd4=a379_0x547c,_0x5a2100=_0xcab55a();while(!![]){try{const _0x47a801=-parseInt(_0x145bd4(0x147))/0x1*(parseInt(_0x145bd4(0x14c))/0x2)+-parseInt(_0x145bd4(0x13b))/0x3+-parseInt(_0x145bd4(0x152))/0x4*(-parseInt(_0x145bd4(0x153))/0x5)+parseInt(_0x145bd4(0x13c))/0x6*(parseInt(_0x145bd4(0x150))/0x7)+parseInt(_0x145bd4(0x141))/0x8*(parseInt(_0x145bd4(0x13a))/0x9)+-parseInt(_0x145bd4(0x148))/0xa*(parseInt(_0x145bd4(0x146))/0xb)+parseInt(_0x145bd4(0x14d))/0xc*(parseInt(_0x145bd4(0x14f))/0xd);if(_0x47a801===_0x1e41ad)break;else _0x5a2100['push'](_0x5a2100['shift']());}catch(_0x587a0e){_0x5a2100['push'](_0x5a2100['shift']());}}}(a379_0x35ee,0x7e102));const a379_0x13fd92=(function(){let _0x5adde8=!![];return function(_0x1f89ee,_0x33be24){const _0x3412a0=_0x5adde8?function(){const _0x181ccd=a379_0x547c;if(_0x33be24){const _0x2e5b1f=_0x33be24[_0x181ccd(0x14b)](_0x1f89ee,arguments);return _0x33be24=null,_0x2e5b1f;}}:function(){};return _0x5adde8=![],_0x3412a0;};}()),a379_0x2216a6=a379_0x13fd92(this,function(){const _0x31f95b=a379_0x547c;return a379_0x2216a6[_0x31f95b(0x14a)]()[_0x31f95b(0x151)](_0x31f95b(0x144))['toString']()[_0x31f95b(0x149)](a379_0x2216a6)[_0x31f95b(0x151)]('(((.+)+)+)+$');});a379_0x2216a6();function a379_0x547c(_0x36dd68,_0x47f52b){const _0x48c852=a379_0x35ee();return a379_0x547c=function(_0x2216a6,_0x13fd92){_0x2216a6=_0x2216a6-0x13a;let _0x35eece=_0x48c852[_0x2216a6];return _0x35eece;},a379_0x547c(_0x36dd68,_0x47f52b);}'use strict';var __importDefault=this&&this[a379_0x10771c(0x140)]||function(_0x332e1b){return _0x332e1b&&_0x332e1b['__esModule']?_0x332e1b:{'default':_0x332e1b};};Object['defineProperty'](exports,a379_0x10771c(0x145),{'value':!![]});const Chat_1=__importDefault(require(a379_0x10771c(0x13f))),ChatUser_1=__importDefault(require('../../models/ChatUser')),User_1=__importDefault(require(a379_0x10771c(0x154))),CreateService=async _0x30c189=>{const _0x19c5b5=a379_0x10771c,{ownerId:_0x3e87cb,companyId:_0x5e2226,users:_0x878105,title:_0x1042fe}=_0x30c189,_0x42fb64=await Chat_1[_0x19c5b5(0x13e)]['create']({'ownerId':_0x3e87cb,'companyId':_0x5e2226,'title':_0x1042fe});if(Array[_0x19c5b5(0x143)](_0x878105)&&_0x878105['length']>0x0){await ChatUser_1['default'][_0x19c5b5(0x155)]({'chatId':_0x42fb64['id'],'userId':_0x3e87cb});for(let _0xa90dd2 of _0x878105){await ChatUser_1['default'][_0x19c5b5(0x155)]({'chatId':_0x42fb64['id'],'userId':_0xa90dd2['id']});}}return await _0x42fb64[_0x19c5b5(0x142)]({'include':[{'model':ChatUser_1[_0x19c5b5(0x13e)],'as':'users','include':[{'model':User_1[_0x19c5b5(0x13e)],'as':_0x19c5b5(0x14e)}]},{'model':User_1[_0x19c5b5(0x13e)],'as':_0x19c5b5(0x13d)}]}),_0x42fb64;};exports['default']=CreateService;