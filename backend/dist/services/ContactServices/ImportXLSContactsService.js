const a419_0x283252=a419_0x5138;(function(_0x4635d8,_0x471ffd){const _0x1b1d73=a419_0x5138,_0x21abbc=_0x4635d8();while(!![]){try{const _0x4a68a7=-parseInt(_0x1b1d73(0x170))/0x1*(-parseInt(_0x1b1d73(0x175))/0x2)+parseInt(_0x1b1d73(0x14f))/0x3+parseInt(_0x1b1d73(0x151))/0x4*(-parseInt(_0x1b1d73(0x153))/0x5)+-parseInt(_0x1b1d73(0x165))/0x6*(parseInt(_0x1b1d73(0x160))/0x7)+-parseInt(_0x1b1d73(0x155))/0x8*(-parseInt(_0x1b1d73(0x164))/0x9)+-parseInt(_0x1b1d73(0x154))/0xa*(parseInt(_0x1b1d73(0x157))/0xb)+-parseInt(_0x1b1d73(0x148))/0xc*(-parseInt(_0x1b1d73(0x156))/0xd);if(_0x4a68a7===_0x471ffd)break;else _0x21abbc['push'](_0x21abbc['shift']());}catch(_0x228e28){_0x21abbc['push'](_0x21abbc['shift']());}}}(a419_0x1e0d,0xd7aef));const a419_0x41ed4b=(function(){let _0xbc37da=!![];return function(_0x14d0f8,_0x496fff){const _0xe9f057=_0xbc37da?function(){const _0x3f9d88=a419_0x5138;if(_0x496fff){const _0x5aa907=_0x496fff[_0x3f9d88(0x15d)](_0x14d0f8,arguments);return _0x496fff=null,_0x5aa907;}}:function(){};return _0xbc37da=![],_0xe9f057;};}()),a419_0x5f0c6d=a419_0x41ed4b(this,function(){const _0x2d9e1d=a419_0x5138;return a419_0x5f0c6d[_0x2d9e1d(0x169)]()['search'](_0x2d9e1d(0x176))[_0x2d9e1d(0x169)]()['constructor'](a419_0x5f0c6d)['search'](_0x2d9e1d(0x176));});a419_0x5f0c6d();'use strict';var __importDefault=this&&this[a419_0x283252(0x15b)]||function(_0x5e0623){const _0x544fb1=a419_0x283252;return _0x5e0623&&_0x5e0623[_0x544fb1(0x167)]?_0x5e0623:{'default':_0x5e0623};};function a419_0x5138(_0x1bb64a,_0x42c681){const _0x4cbe05=a419_0x1e0d();return a419_0x5138=function(_0x5f0c6d,_0x41ed4b){_0x5f0c6d=_0x5f0c6d-0x147;let _0x1e0dac=_0x4cbe05[_0x5f0c6d];return _0x1e0dac;},a419_0x5138(_0x1bb64a,_0x42c681);}Object[a419_0x283252(0x14c)](exports,a419_0x283252(0x167),{'value':!![]}),exports[a419_0x283252(0x14b)]=void 0x0;const lodash_1=require(a419_0x283252(0x14e)),xlsx_1=__importDefault(require(a419_0x283252(0x15c))),lodash_2=require('lodash'),CheckNumber_1=__importDefault(require(a419_0x283252(0x163))),logger_1=require('../../utils/logger'),Contact_1=__importDefault(require(a419_0x283252(0x147))),attrNames={'NAME':['nome',a419_0x283252(0x14a)],'NUMBER':[a419_0x283252(0x15e),'número','Numero','Número'],'EMAIL':[a419_0x283252(0x168),a419_0x283252(0x166),'Email',a419_0x283252(0x16f)]};function extractContact(_0x2c6e4c,_0xdd105){const _0x22b76b=a419_0x283252,_0x1bc698=getValue(_0x2c6e4c,attrNames[_0x22b76b(0x159)]);let _0x849f10=getValue(_0x2c6e4c,attrNames[_0x22b76b(0x162)]);_0x849f10=(''+_0x849f10)[_0x22b76b(0x173)](/\D/g,'');const _0x4294c0=getValue(_0x2c6e4c,attrNames[_0x22b76b(0x171)]);return{'name':_0x1bc698,'number':_0x849f10,'email':_0x4294c0,'companyId':_0xdd105};}function getValue(_0x2df80b,_0x108314){const _0x585aa0=a419_0x283252;for(const _0x5678a4 of _0x108314){if((0x0,lodash_2[_0x585aa0(0x15a)])(_0x2df80b,_0x5678a4))return _0x2df80b[_0x5678a4];}return'';}function a419_0x1e0d(){const _0x46a5ec=['1960lPoHvn','3185656QPbMae','3562tDUlRu','80531zcvayF','sheet_to_json','NAME','has','__importDefault','xlsx','apply','numero','number','294042jWAfrK','Número\x20de\x20contato\x20inválido:\x20','NUMBER','../WbotServices/CheckNumber','9ZtHHWV','12dNKOOL','e-mail','__esModule','email','toString','map','readFile','path','default','companyId','E-mail','47eojXvm','EMAIL','logger','replace','error','69406gqVaKz','(((.+)+)+)+$','../../models/Contact','45948WlXstq','head','Nome','ImportXLSContactsService','defineProperty','utils','lodash','3114009mOABlT','save','685612NjdivB','findOrCreate','50lfJigp'];a419_0x1e0d=function(){return _0x46a5ec;};return a419_0x1e0d();}async function ImportXLSContactsService(_0x5b02ff,_0x450d54){const _0x218abb=a419_0x283252,_0x15ba5e=xlsx_1[_0x218abb(0x16d)][_0x218abb(0x16b)](_0x450d54?.[_0x218abb(0x16c)]),_0x5ae726=(0x0,lodash_1[_0x218abb(0x149)])(Object['values'](_0x15ba5e['Sheets'])),_0x45df77=xlsx_1[_0x218abb(0x16d)][_0x218abb(0x14d)][_0x218abb(0x158)](_0x5ae726,{'header':0x0}),_0x2a0cd2=_0x45df77[_0x218abb(0x16a)](_0x53f9fa=>extractContact(_0x53f9fa,_0x5b02ff)),_0x583c97=[];for(const _0x5dd4b2 of _0x2a0cd2){const [_0x305c39,_0x45fd45]=await Contact_1['default'][_0x218abb(0x152)]({'where':{'number':''+_0x5dd4b2[_0x218abb(0x15f)],'companyId':_0x5dd4b2[_0x218abb(0x16e)]},'defaults':_0x5dd4b2});_0x45fd45&&_0x583c97['push'](_0x305c39);}if(_0x583c97)for(let _0x57bcdd of _0x583c97){try{const _0x1f42a4=await(0x0,CheckNumber_1[_0x218abb(0x16d)])(_0x57bcdd[_0x218abb(0x15f)],_0x5b02ff),_0x33ce34=_0x1f42a4['jid'][_0x218abb(0x173)](/\D/g,'');_0x57bcdd[_0x218abb(0x15f)]=_0x33ce34,await _0x57bcdd[_0x218abb(0x150)]();}catch(_0x2e1410){logger_1[_0x218abb(0x172)][_0x218abb(0x174)](_0x218abb(0x161)+_0x57bcdd[_0x218abb(0x15f)]);}}return _0x583c97;}exports['ImportXLSContactsService']=ImportXLSContactsService;