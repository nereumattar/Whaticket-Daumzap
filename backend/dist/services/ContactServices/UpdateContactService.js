const a423_0x43400f=a423_0x4cc7;(function(_0x3b9bb0,_0x59c9a9){const _0x120e5c=a423_0x4cc7,_0x1d1539=_0x3b9bb0();while(!![]){try{const _0x6a2b54=-parseInt(_0x120e5c(0xe4))/0x1+parseInt(_0x120e5c(0xfa))/0x2*(parseInt(_0x120e5c(0xeb))/0x3)+parseInt(_0x120e5c(0xea))/0x4*(-parseInt(_0x120e5c(0xf2))/0x5)+-parseInt(_0x120e5c(0x103))/0x6*(-parseInt(_0x120e5c(0xf7))/0x7)+parseInt(_0x120e5c(0xe7))/0x8+parseInt(_0x120e5c(0xf1))/0x9+parseInt(_0x120e5c(0xfc))/0xa*(-parseInt(_0x120e5c(0xe3))/0xb);if(_0x6a2b54===_0x59c9a9)break;else _0x1d1539['push'](_0x1d1539['shift']());}catch(_0x573312){_0x1d1539['push'](_0x1d1539['shift']());}}}(a423_0x2a22,0xece07));const a423_0x4a2d54=(function(){let _0x3bca87=!![];return function(_0x45f785,_0x4b164c){const _0x218cc9=_0x3bca87?function(){const _0xe56b86=a423_0x4cc7;if(_0x4b164c){const _0x4e4c1d=_0x4b164c[_0xe56b86(0xff)](_0x45f785,arguments);return _0x4b164c=null,_0x4e4c1d;}}:function(){};return _0x3bca87=![],_0x218cc9;};}()),a423_0x294a36=a423_0x4a2d54(this,function(){const _0x558b82=a423_0x4cc7;return a423_0x294a36[_0x558b82(0xef)]()['search'](_0x558b82(0xf5))[_0x558b82(0xef)]()[_0x558b82(0xf6)](a423_0x294a36)[_0x558b82(0xfe)](_0x558b82(0xf5));});function a423_0x2a22(){const _0x17d5c6=['ERR_NO_CONTACT_FOUND','reload','toString','__esModule','3338118cOLGln','90810NPjFqV','../../errors/AppError','map','(((.+)+)+)+$','constructor','2378789nomgPR','default','destroy','5674wQHTCN','email','140FOdijp','number','search','apply','companyId','profilePicUrl','all','12wzvnGr','name','2457279QVotRT','122387OJYKRf','findIndex','extraInfo','11906584mdBPDK','findOne','../../models/ContactCustomField','4nUwcNC','1797TuEzdZ','defineProperty'];a423_0x2a22=function(){return _0x17d5c6;};return a423_0x2a22();}function a423_0x4cc7(_0x4595ba,_0x20c2ce){const _0x1acd52=a423_0x2a22();return a423_0x4cc7=function(_0x294a36,_0x4a2d54){_0x294a36=_0x294a36-0xe2;let _0x2a223d=_0x1acd52[_0x294a36];return _0x2a223d;},a423_0x4cc7(_0x4595ba,_0x20c2ce);}a423_0x294a36();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x18e38d){const _0x39ab16=a423_0x4cc7;return _0x18e38d&&_0x18e38d[_0x39ab16(0xf0)]?_0x18e38d:{'default':_0x18e38d};};Object[a423_0x43400f(0xec)](exports,a423_0x43400f(0xf0),{'value':!![]});const AppError_1=__importDefault(require(a423_0x43400f(0xf3))),Contact_1=__importDefault(require('../../models/Contact')),ContactCustomField_1=__importDefault(require(a423_0x43400f(0xe9))),UpdateContactService=async({contactData:_0x375450,contactId:_0x55d25f,companyId:_0x484fed})=>{const _0x5898b2=a423_0x43400f,{email:_0x4a7e8a,name:_0x2a643e,number:_0x355302,extraInfo:_0x2b6f9c,disableBot:_0x206de6}=_0x375450,_0x4fb084=await Contact_1[_0x5898b2(0xf8)][_0x5898b2(0xe8)]({'where':{'id':_0x55d25f},'attributes':['id','name',_0x5898b2(0xfd),_0x5898b2(0xfb),_0x5898b2(0x100),_0x5898b2(0x101)],'include':[_0x5898b2(0xe6)]});if(_0x4fb084?.[_0x5898b2(0x100)]!==_0x484fed)throw new AppError_1[(_0x5898b2(0xf8))]('Não\x20é\x20possível\x20alterar\x20registros\x20de\x20outra\x20empresa');if(!_0x4fb084)throw new AppError_1[(_0x5898b2(0xf8))](_0x5898b2(0xed),0x194);return _0x2b6f9c&&(await Promise[_0x5898b2(0x102)](_0x2b6f9c[_0x5898b2(0xf4)](async _0x1f03d=>{const _0x5925f3=_0x5898b2;await ContactCustomField_1[_0x5925f3(0xf8)]['upsert']({..._0x1f03d,'contactId':_0x4fb084['id']});})),await Promise[_0x5898b2(0x102)](_0x4fb084[_0x5898b2(0xe6)][_0x5898b2(0xf4)](async _0x3cfe0e=>{const _0x15480b=_0x5898b2,_0x337505=_0x2b6f9c[_0x15480b(0xe5)](_0x460d0=>_0x460d0['id']===_0x3cfe0e['id']);_0x337505===-0x1&&await ContactCustomField_1[_0x15480b(0xf8)][_0x15480b(0xf9)]({'where':{'id':_0x3cfe0e['id']}});}))),await _0x4fb084['update']({'name':_0x2a643e,'number':_0x355302,'email':_0x4a7e8a,'disableBot':_0x206de6}),await _0x4fb084[_0x5898b2(0xee)]({'attributes':['id',_0x5898b2(0xe2),_0x5898b2(0xfd),_0x5898b2(0xfb),_0x5898b2(0x101)],'include':[_0x5898b2(0xe6)]}),_0x4fb084;};exports[a423_0x43400f(0xf8)]=UpdateContactService;