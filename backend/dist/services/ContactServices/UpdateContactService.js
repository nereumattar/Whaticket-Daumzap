function a425_0x5106(_0x4587c4,_0x20f64d){const _0x1b33ca=a425_0x57da();return a425_0x5106=function(_0x2d9e0b,_0x1d5a9e){_0x2d9e0b=_0x2d9e0b-0x9f;let _0x57da2f=_0x1b33ca[_0x2d9e0b];return _0x57da2f;},a425_0x5106(_0x4587c4,_0x20f64d);}const a425_0x2fce1d=a425_0x5106;(function(_0x17fbde,_0x6df00d){const _0x544cf4=a425_0x5106,_0x348666=_0x17fbde();while(!![]){try{const _0x60d61a=-parseInt(_0x544cf4(0xa6))/0x1+-parseInt(_0x544cf4(0xb4))/0x2*(parseInt(_0x544cf4(0xa3))/0x3)+-parseInt(_0x544cf4(0xaf))/0x4+parseInt(_0x544cf4(0xab))/0x5+parseInt(_0x544cf4(0xa5))/0x6*(-parseInt(_0x544cf4(0xa9))/0x7)+-parseInt(_0x544cf4(0xa8))/0x8*(parseInt(_0x544cf4(0xad))/0x9)+parseInt(_0x544cf4(0xac))/0xa;if(_0x60d61a===_0x6df00d)break;else _0x348666['push'](_0x348666['shift']());}catch(_0x15e7b5){_0x348666['push'](_0x348666['shift']());}}}(a425_0x57da,0xb257b));const a425_0x1d5a9e=(function(){let _0x2878d9=!![];return function(_0x4b231d,_0x23c09b){const _0x3901ea=_0x2878d9?function(){const _0x354dba=a425_0x5106;if(_0x23c09b){const _0x1f4146=_0x23c09b[_0x354dba(0xb5)](_0x4b231d,arguments);return _0x23c09b=null,_0x1f4146;}}:function(){};return _0x2878d9=![],_0x3901ea;};}()),a425_0x2d9e0b=a425_0x1d5a9e(this,function(){const _0x522ee7=a425_0x5106;return a425_0x2d9e0b[_0x522ee7(0xbc)]()[_0x522ee7(0xbe)]('(((.+)+)+)+$')[_0x522ee7(0xbc)]()[_0x522ee7(0xb7)](a425_0x2d9e0b)['search'](_0x522ee7(0xbf));});a425_0x2d9e0b();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4ceebb){const _0x2926cd=a425_0x5106;return _0x4ceebb&&_0x4ceebb[_0x2926cd(0xae)]?_0x4ceebb:{'default':_0x4ceebb};};function a425_0x57da(){const _0x33634c=['1139918tDfSBt','update','10066224QRSmUC','3590391AIqqMm','number','4635500dTIvoa','45696570XlcnLT','9TVwSeS','__esModule','3845904kPrMLp','profilePicUrl','reload','default','companyId','652GcJUkd','apply','map','constructor','findOne','upsert','extraInfo','findIndex','toString','../../models/ContactCustomField','search','(((.+)+)+)+$','name','Não\x20é\x20possível\x20alterar\x20registros\x20de\x20outra\x20empresa','all','email','3504lGdhBU','../../models/Contact','12fXJtwz'];a425_0x57da=function(){return _0x33634c;};return a425_0x57da();}Object['defineProperty'](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),Contact_1=__importDefault(require(a425_0x2fce1d(0xa4))),ContactCustomField_1=__importDefault(require(a425_0x2fce1d(0xbd))),UpdateContactService=async({contactData:_0x3d9136,contactId:_0x2596a6,companyId:_0x496af6})=>{const _0x13dcef=a425_0x2fce1d,{email:_0x1887d7,name:_0x7d8b68,number:_0x49c91d,extraInfo:_0xab4e9d,disableBot:_0x512431}=_0x3d9136,_0x3c794e=await Contact_1[_0x13dcef(0xb2)][_0x13dcef(0xb8)]({'where':{'id':_0x2596a6},'attributes':['id','name','number',_0x13dcef(0xa2),_0x13dcef(0xb3),_0x13dcef(0xb0)],'include':[_0x13dcef(0xba)]});if(_0x3c794e?.[_0x13dcef(0xb3)]!==_0x496af6)throw new AppError_1[(_0x13dcef(0xb2))](_0x13dcef(0xa0));if(!_0x3c794e)throw new AppError_1[(_0x13dcef(0xb2))]('ERR_NO_CONTACT_FOUND',0x194);return _0xab4e9d&&(await Promise[_0x13dcef(0xa1)](_0xab4e9d[_0x13dcef(0xb6)](async _0x4a28cb=>{const _0x41e7e1=_0x13dcef;await ContactCustomField_1[_0x41e7e1(0xb2)][_0x41e7e1(0xb9)]({..._0x4a28cb,'contactId':_0x3c794e['id']});})),await Promise[_0x13dcef(0xa1)](_0x3c794e[_0x13dcef(0xba)][_0x13dcef(0xb6)](async _0x7ffeb1=>{const _0x39ed0d=_0x13dcef,_0x500dcf=_0xab4e9d[_0x39ed0d(0xbb)](_0x207bb7=>_0x207bb7['id']===_0x7ffeb1['id']);_0x500dcf===-0x1&&await ContactCustomField_1[_0x39ed0d(0xb2)]['destroy']({'where':{'id':_0x7ffeb1['id']}});}))),await _0x3c794e[_0x13dcef(0xa7)]({'name':_0x7d8b68,'number':_0x49c91d,'email':_0x1887d7,'disableBot':_0x512431}),await _0x3c794e[_0x13dcef(0xb1)]({'attributes':['id',_0x13dcef(0x9f),_0x13dcef(0xaa),_0x13dcef(0xa2),_0x13dcef(0xb0)],'include':[_0x13dcef(0xba)]}),_0x3c794e;};exports['default']=UpdateContactService;