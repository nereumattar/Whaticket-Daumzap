const a408_0x442d73=a408_0x1dfc;(function(_0xa2e3ba,_0x45031a){const _0x3299a8=a408_0x1dfc,_0x578f92=_0xa2e3ba();while(!![]){try{const _0x1d8f73=parseInt(_0x3299a8(0x156))/0x1*(parseInt(_0x3299a8(0x153))/0x2)+-parseInt(_0x3299a8(0x143))/0x3*(-parseInt(_0x3299a8(0x148))/0x4)+parseInt(_0x3299a8(0x130))/0x5+parseInt(_0x3299a8(0x140))/0x6+parseInt(_0x3299a8(0x142))/0x7+parseInt(_0x3299a8(0x131))/0x8*(parseInt(_0x3299a8(0x145))/0x9)+parseInt(_0x3299a8(0x138))/0xa*(-parseInt(_0x3299a8(0x132))/0xb);if(_0x1d8f73===_0x45031a)break;else _0x578f92['push'](_0x578f92['shift']());}catch(_0x5e7f4e){_0x578f92['push'](_0x578f92['shift']());}}}(a408_0x52b0,0x7d0d2));const a408_0x739c6f=(function(){let _0x307ac5=!![];return function(_0x20d73c,_0x1937b4){const _0xaa962f=_0x307ac5?function(){if(_0x1937b4){const _0x404a7f=_0x1937b4['apply'](_0x20d73c,arguments);return _0x1937b4=null,_0x404a7f;}}:function(){};return _0x307ac5=![],_0xaa962f;};}()),a408_0xa6dcc0=a408_0x739c6f(this,function(){const _0x3ff06d=a408_0x1dfc;return a408_0xa6dcc0['toString']()[_0x3ff06d(0x134)](_0x3ff06d(0x14f))[_0x3ff06d(0x133)]()[_0x3ff06d(0x12c)](a408_0xa6dcc0)[_0x3ff06d(0x134)]('(((.+)+)+)+$');});a408_0xa6dcc0();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x35da8a){const _0x55d69b=a408_0x1dfc;return _0x35da8a&&_0x35da8a[_0x55d69b(0x12f)]?_0x35da8a:{'default':_0x35da8a};};Object[a408_0x442d73(0x154)](exports,a408_0x442d73(0x12f),{'value':!![]}),exports['ImportContacts']=void 0x0;const lodash_1=require(a408_0x442d73(0x128)),xlsx_1=__importDefault(require('xlsx')),lodash_2=require(a408_0x442d73(0x128)),ContactListItem_1=__importDefault(require(a408_0x442d73(0x13f))),CheckNumber_1=__importDefault(require(a408_0x442d73(0x127))),logger_1=require(a408_0x442d73(0x13d));async function ImportContacts(_0x2e0333,_0x40bd10,_0x19317b){const _0x235751=a408_0x442d73,_0x1fc910=xlsx_1['default'][_0x235751(0x12d)](_0x19317b?.[_0x235751(0x139)]),_0x200946=(0x0,lodash_1[_0x235751(0x136)])(Object[_0x235751(0x13c)](_0x1fc910[_0x235751(0x13a)])),_0x4548be=xlsx_1[_0x235751(0x150)]['utils'][_0x235751(0x14c)](_0x200946,{'header':0x0}),_0x76ba2f=_0x4548be['map'](_0x10fe4=>{const _0x3ff81c=_0x235751;let _0x4deb39='',_0x4b9437='',_0x162f8b='';return((0x0,lodash_2['has'])(_0x10fe4,_0x3ff81c(0x147))||(0x0,lodash_2['has'])(_0x10fe4,_0x3ff81c(0x149)))&&(_0x4deb39=_0x10fe4[_0x3ff81c(0x147)]||_0x10fe4[_0x3ff81c(0x149)]),((0x0,lodash_2['has'])(_0x10fe4,_0x3ff81c(0x13b))||(0x0,lodash_2['has'])(_0x10fe4,_0x3ff81c(0x135))||(0x0,lodash_2[_0x3ff81c(0x129)])(_0x10fe4,'Numero')||(0x0,lodash_2[_0x3ff81c(0x129)])(_0x10fe4,_0x3ff81c(0x126)))&&(_0x4b9437=_0x10fe4['numero']||_0x10fe4[_0x3ff81c(0x135)]||_0x10fe4['Numero']||_0x10fe4[_0x3ff81c(0x126)],_0x4b9437=(''+_0x4b9437)[_0x3ff81c(0x155)](/\D/g,'')),((0x0,lodash_2[_0x3ff81c(0x129)])(_0x10fe4,_0x3ff81c(0x146))||(0x0,lodash_2['has'])(_0x10fe4,_0x3ff81c(0x12e))||(0x0,lodash_2[_0x3ff81c(0x129)])(_0x10fe4,'Email')||(0x0,lodash_2[_0x3ff81c(0x129)])(_0x10fe4,_0x3ff81c(0x12a)))&&(_0x162f8b=_0x10fe4[_0x3ff81c(0x146)]||_0x10fe4[_0x3ff81c(0x12e)]||_0x10fe4[_0x3ff81c(0x152)]||_0x10fe4['E-mail']),{'name':_0x4deb39,'number':_0x4b9437,'email':_0x162f8b,'contactListId':_0x2e0333,'companyId':_0x40bd10};}),_0x8aec91=[];for(const _0x289ccd of _0x76ba2f){const [_0x3da295,_0x1f15e8]=await ContactListItem_1['default'][_0x235751(0x14d)]({'where':{'number':''+_0x289ccd[_0x235751(0x14e)],'contactListId':_0x289ccd['contactListId'],'companyId':_0x289ccd[_0x235751(0x137)]},'defaults':_0x289ccd});_0x1f15e8&&_0x8aec91[_0x235751(0x151)](_0x3da295);}if(_0x8aec91)for(let _0x11d07f of _0x8aec91){try{const _0x4c9ca4=await(0x0,CheckNumber_1[_0x235751(0x150)])(_0x11d07f[_0x235751(0x14e)],_0x40bd10);_0x11d07f['isWhatsappValid']=_0x4c9ca4[_0x235751(0x144)];const _0xe3dd3e=_0x4c9ca4['jid'][_0x235751(0x155)](/\D/g,'');_0x11d07f['number']=_0xe3dd3e,await _0x11d07f[_0x235751(0x141)]();}catch(_0x4457b6){logger_1[_0x235751(0x14b)][_0x235751(0x14a)](_0x235751(0x13e)+_0x11d07f[_0x235751(0x14e)]);}}return _0x8aec91;}function a408_0x52b0(){const _0x2bd4d4=['8nfRRNH','Nome','error','logger','sheet_to_json','findOrCreate','number','(((.+)+)+)+$','default','push','Email','206hIHprR','defineProperty','replace','7787ZtyfYm','Número','../WbotServices/CheckNumber','lodash','has','E-mail','ImportContacts','constructor','readFile','e-mail','__esModule','4131985VtdQnt','8wmQWCX','11SssyOO','toString','search','número','head','companyId','33878690sEKXki','path','Sheets','numero','values','../../utils/logger','Número\x20de\x20contato\x20inválido:\x20','../../models/ContactListItem','5365656GfbzUh','save','3963246riTYtJ','826923zzknxH','exists','2338965LDGwSe','email','nome'];a408_0x52b0=function(){return _0x2bd4d4;};return a408_0x52b0();}function a408_0x1dfc(_0x59f145,_0x3eb186){const _0x1f8d61=a408_0x52b0();return a408_0x1dfc=function(_0xa6dcc0,_0x739c6f){_0xa6dcc0=_0xa6dcc0-0x126;let _0x52b075=_0x1f8d61[_0xa6dcc0];return _0x52b075;},a408_0x1dfc(_0x59f145,_0x3eb186);}exports[a408_0x442d73(0x12b)]=ImportContacts;