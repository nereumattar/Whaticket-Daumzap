const a417_0xe198cd=a417_0x80b3;function a417_0x31a8(){const _0x4a3663=['logger','9TmnXhV','../../utils/logger','Nome','jid','235wJRrWy','map','521322PMgByO','2587mBDzcQ','../../models/Contact','número','readFile','(((.+)+)+)+$','error','findOrCreate','EMAIL','xlsx','ImportXLSContactsService','../WbotServices/CheckNumber','__esModule','head','constructor','e-mail','NAME','4327624QBQLIt','__importDefault','NUMBER','6180lOLwxT','apply','email','nome','number','2990085ikRElP','4oCMdEb','replace','lodash','35664ROMmPq','toString','companyId','1933467Gwxalx','42fyCjIH','search','save','utils','E-mail','numero','Sheets','default','path','values','10BfcOpt','has','Numero','7555559RmhWqi'];a417_0x31a8=function(){return _0x4a3663;};return a417_0x31a8();}(function(_0xefb769,_0x2741c9){const _0x347c6c=a417_0x80b3,_0x3f6fe6=_0xefb769();while(!![]){try{const _0x317e0b=-parseInt(_0x347c6c(0x1ac))/0x1*(parseInt(_0x347c6c(0x1c2))/0x2)+parseInt(_0x347c6c(0x1ce))/0x3+-parseInt(_0x347c6c(0x1c8))/0x4*(parseInt(_0x347c6c(0x1c7))/0x5)+parseInt(_0x347c6c(0x1ae))/0x6*(parseInt(_0x347c6c(0x1cf))/0x7)+parseInt(_0x347c6c(0x1bf))/0x8*(parseInt(_0x347c6c(0x1a8))/0x9)+parseInt(_0x347c6c(0x1a3))/0xa*(parseInt(_0x347c6c(0x1a6))/0xb)+-parseInt(_0x347c6c(0x1cb))/0xc*(parseInt(_0x347c6c(0x1af))/0xd);if(_0x317e0b===_0x2741c9)break;else _0x3f6fe6['push'](_0x3f6fe6['shift']());}catch(_0x37d800){_0x3f6fe6['push'](_0x3f6fe6['shift']());}}}(a417_0x31a8,0x74b56));const a417_0x47fea5=(function(){let _0x483e96=!![];return function(_0x3737ab,_0x3af891){const _0x5e625c=_0x483e96?function(){const _0x5ea36d=a417_0x80b3;if(_0x3af891){const _0x68bb68=_0x3af891[_0x5ea36d(0x1c3)](_0x3737ab,arguments);return _0x3af891=null,_0x68bb68;}}:function(){};return _0x483e96=![],_0x5e625c;};}()),a417_0x2e5706=a417_0x47fea5(this,function(){const _0x55f3a5=a417_0x80b3;return a417_0x2e5706[_0x55f3a5(0x1cc)]()['search']('(((.+)+)+)+$')[_0x55f3a5(0x1cc)]()[_0x55f3a5(0x1bc)](a417_0x2e5706)[_0x55f3a5(0x1d0)](_0x55f3a5(0x1b3));});a417_0x2e5706();'use strict';var __importDefault=this&&this[a417_0xe198cd(0x1c0)]||function(_0x48c633){return _0x48c633&&_0x48c633['__esModule']?_0x48c633:{'default':_0x48c633};};Object['defineProperty'](exports,a417_0xe198cd(0x1ba),{'value':!![]}),exports[a417_0xe198cd(0x1b8)]=void 0x0;function a417_0x80b3(_0x49ce98,_0x1abd84){const _0x35f249=a417_0x31a8();return a417_0x80b3=function(_0x2e5706,_0x47fea5){_0x2e5706=_0x2e5706-0x1a2;let _0x31a815=_0x35f249[_0x2e5706];return _0x31a815;},a417_0x80b3(_0x49ce98,_0x1abd84);}const lodash_1=require(a417_0xe198cd(0x1ca)),xlsx_1=__importDefault(require(a417_0xe198cd(0x1b7))),lodash_2=require('lodash'),CheckNumber_1=__importDefault(require(a417_0xe198cd(0x1b9))),logger_1=require(a417_0xe198cd(0x1a9)),Contact_1=__importDefault(require(a417_0xe198cd(0x1b0))),attrNames={'NAME':[a417_0xe198cd(0x1c5),a417_0xe198cd(0x1aa)],'NUMBER':[a417_0xe198cd(0x1d4),a417_0xe198cd(0x1b1),a417_0xe198cd(0x1a5),'Número'],'EMAIL':[a417_0xe198cd(0x1c4),a417_0xe198cd(0x1bd),'Email',a417_0xe198cd(0x1d3)]};function extractContact(_0x46b5aa,_0x4b71de){const _0x13065e=a417_0xe198cd,_0x5de214=getValue(_0x46b5aa,attrNames[_0x13065e(0x1be)]);let _0x127944=getValue(_0x46b5aa,attrNames[_0x13065e(0x1c1)]);_0x127944=(''+_0x127944)['replace'](/\D/g,'');const _0x3fc643=getValue(_0x46b5aa,attrNames[_0x13065e(0x1b6)]);return{'name':_0x5de214,'number':_0x127944,'email':_0x3fc643,'companyId':_0x4b71de};}function getValue(_0x3a1b16,_0x53967b){const _0x3b89c1=a417_0xe198cd;for(const _0x24a0ff of _0x53967b){if((0x0,lodash_2[_0x3b89c1(0x1a4)])(_0x3a1b16,_0x24a0ff))return _0x3a1b16[_0x24a0ff];}return'';}async function ImportXLSContactsService(_0x20f7ee,_0x6c4d8d){const _0xbf3460=a417_0xe198cd,_0x5f0599=xlsx_1[_0xbf3460(0x1d6)][_0xbf3460(0x1b2)](_0x6c4d8d?.[_0xbf3460(0x1d7)]),_0x360db6=(0x0,lodash_1[_0xbf3460(0x1bb)])(Object[_0xbf3460(0x1a2)](_0x5f0599[_0xbf3460(0x1d5)])),_0x5f5b0c=xlsx_1[_0xbf3460(0x1d6)][_0xbf3460(0x1d2)]['sheet_to_json'](_0x360db6,{'header':0x0}),_0x367438=_0x5f5b0c[_0xbf3460(0x1ad)](_0x7cdd49=>extractContact(_0x7cdd49,_0x20f7ee)),_0x5e56d8=[];for(const _0x54d0d9 of _0x367438){const [_0x55d609,_0x469c3b]=await Contact_1[_0xbf3460(0x1d6)][_0xbf3460(0x1b5)]({'where':{'number':''+_0x54d0d9[_0xbf3460(0x1c6)],'companyId':_0x54d0d9[_0xbf3460(0x1cd)]},'defaults':_0x54d0d9});_0x469c3b&&_0x5e56d8['push'](_0x55d609);}if(_0x5e56d8)for(let _0x11ed05 of _0x5e56d8){try{const _0x2d43ae=await(0x0,CheckNumber_1[_0xbf3460(0x1d6)])(_0x11ed05[_0xbf3460(0x1c6)],_0x20f7ee),_0x8f5af6=_0x2d43ae[_0xbf3460(0x1ab)][_0xbf3460(0x1c9)](/\D/g,'');_0x11ed05[_0xbf3460(0x1c6)]=_0x8f5af6,await _0x11ed05[_0xbf3460(0x1d1)]();}catch(_0x54ca41){logger_1[_0xbf3460(0x1a7)][_0xbf3460(0x1b4)]('Número\x20de\x20contato\x20inválido:\x20'+_0x11ed05[_0xbf3460(0x1c6)]);}}return _0x5e56d8;}exports[a417_0xe198cd(0x1b8)]=ImportXLSContactsService;