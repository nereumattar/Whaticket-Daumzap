const a450_0x450a5d=a450_0x140a;(function(_0x3ee409,_0x58407f){const _0x210e56=a450_0x140a,_0x3b905e=_0x3ee409();while(!![]){try{const _0x495826=parseInt(_0x210e56(0x147))/0x1+parseInt(_0x210e56(0x172))/0x2*(-parseInt(_0x210e56(0x146))/0x3)+parseInt(_0x210e56(0x136))/0x4+parseInt(_0x210e56(0x14f))/0x5*(-parseInt(_0x210e56(0x16b))/0x6)+parseInt(_0x210e56(0x130))/0x7*(parseInt(_0x210e56(0x138))/0x8)+-parseInt(_0x210e56(0x161))/0x9*(parseInt(_0x210e56(0x16a))/0xa)+parseInt(_0x210e56(0x148))/0xb;if(_0x495826===_0x58407f)break;else _0x3b905e['push'](_0x3b905e['shift']());}catch(_0x12f56c){_0x3b905e['push'](_0x3b905e['shift']());}}}(a450_0x214a,0x91658));function a450_0x214a(){const _0x497a7d=['env','value','/subscription/aa/webhook','pixConfigWebhook\x20error:','../../models/Company','2178812kMTPyB','txId','16IaDWgy','pixConfigWebhook','json','apply','company','body','txid','_paymentGateway','defineProperty','update','(((.+)+)+)+$','_efiCertFile','error','efiWebhook:\x20Invoice\x20not\x20found\x20or\x20already\x20paid','12sEESDo','681399NVsKKc','12463836JCWIgy','pix','efiPollCheckStatus:\x20Invoice\x20','info','efiInitialize','efiCreateSubscription\x20error','default','80ntPeNo','Error\x20getting\x20detail\x20of\x20txid','../SettingServices/GetSuperSettingService','webhookUrl','toString','__importDefault','path','status','processInvoicePaid','efi','_efiClientId','#Fatura:','startsWith','efiInitialize:\x20fail\x20to\x20verify\x20current\x20webhook','stringify','./PaymentGatewayServices','_efiPixKey','efiInitialize:\x20webhook\x20correto\x20já\x20instalado','145566CqCsbI','Recebido\x20valor\x20menor','../../utils/logger','efiWebhook','open','reload','../../models/Invoices','findByPk','Invoice\x20not\x20found','560lHybAb','135858WUPZrd','../../../private/','efiCheckStatus','processInvoiceExpired','then','debug','logger','547714CQxyxO','constructor','pt-br','pixDetailWebhook','BACKEND_URL','../../errors/AppError','findOne','__esModule','original','\x20already\x20paid,\x20finishing\x20polling','teste_webhook','sdk-node-apis-efi','pixCopiaECola','toLocaleString','nome','efiInitialize:\x20','webhook_nao_encontrado','paid','valor','Problema\x20encontrado,\x20entre\x20em\x20contato\x20com\x20o\x20suporte!','pixCreateImmediateCharge','efiInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported','2099391iYezRo'];a450_0x214a=function(){return _0x497a7d;};return a450_0x214a();}const a450_0x1839fb=(function(){let _0xbf987a=!![];return function(_0x5589e9,_0x5c9ea8){const _0x45a4a0=_0xbf987a?function(){const _0x431885=a450_0x140a;if(_0x5c9ea8){const _0x30b73c=_0x5c9ea8[_0x431885(0x13b)](_0x5589e9,arguments);return _0x5c9ea8=null,_0x30b73c;}}:function(){};return _0xbf987a=![],_0x45a4a0;};}()),a450_0x549463=a450_0x1839fb(this,function(){const _0x8a7350=a450_0x140a;return a450_0x549463[_0x8a7350(0x153)]()['search'](_0x8a7350(0x142))[_0x8a7350(0x153)]()[_0x8a7350(0x173)](a450_0x549463)['search'](_0x8a7350(0x142));});a450_0x549463();'use strict';var __importDefault=this&&this[a450_0x450a5d(0x154)]||function(_0x4f0080){return _0x4f0080&&_0x4f0080['__esModule']?_0x4f0080:{'default':_0x4f0080};};Object[a450_0x450a5d(0x140)](exports,a450_0x450a5d(0x179),{'value':!![]}),exports['efiCreateSubscription']=exports['efiCheckStatus']=exports[a450_0x450a5d(0x164)]=exports['efiInitialize']=void 0x0;const sdk_node_apis_efi_1=__importDefault(require(a450_0x450a5d(0x125))),path_1=__importDefault(require(a450_0x450a5d(0x155))),GetSuperSettingService_1=__importDefault(require(a450_0x450a5d(0x151))),logger_1=require(a450_0x450a5d(0x163)),Invoices_1=__importDefault(require(a450_0x450a5d(0x167))),Company_1=__importDefault(require(a450_0x450a5d(0x135))),AppError_1=__importDefault(require(a450_0x450a5d(0x177))),PaymentGatewayServices_1=require(a450_0x450a5d(0x15e)),webhookUrl=process[a450_0x450a5d(0x131)][a450_0x450a5d(0x176)]+a450_0x450a5d(0x133);async function getEfiOptions(){const _0x13a67d=a450_0x450a5d,_0x4b4fda=path_1['default']['join'](__dirname,_0x13a67d(0x16c)+await(0x0,GetSuperSettingService_1['default'])({'key':_0x13a67d(0x143)}));return{'sandbox':![],'client_id':await(0x0,GetSuperSettingService_1[_0x13a67d(0x14e)])({'key':_0x13a67d(0x159)}),'client_secret':await(0x0,GetSuperSettingService_1['default'])({'key':'_efiClientSecret'}),'pix_cert':_0x4b4fda,'validateMtls':![]};}const newEfiPayInstance=async()=>{const _0x261287=a450_0x450a5d,_0xf7f2b5=await getEfiOptions();return new sdk_node_apis_efi_1[(_0x261287(0x14e))](_0xf7f2b5);},createWebHook=async _0x5a4161=>{const _0x5c649c=a450_0x450a5d,_0x221018={'chave':await(0x0,GetSuperSettingService_1['default'])({'key':_0x5c649c(0x15f)})},_0x5683a8={'webhookUrl':webhookUrl};return _0x5a4161[_0x5c649c(0x139)](_0x221018,_0x5683a8)[_0x5c649c(0x16f)](_0x13d6a7=>{const _0x5d5331=_0x5c649c;logger_1['logger'][_0x5d5331(0x14b)]({'result':_0x13d6a7},'pixConfigWebhook\x20ok');},_0x269096=>{const _0x508d64=_0x5c649c;logger_1['logger'][_0x508d64(0x144)]({'result':_0x269096},_0x508d64(0x134));});},efiInitialize=async()=>{const _0x362f4a=a450_0x450a5d,_0x5b3d32=await(0x0,GetSuperSettingService_1[_0x362f4a(0x14e)])({'key':_0x362f4a(0x13f)});if(!webhookUrl[_0x362f4a(0x15b)]('https://')){logger_1[_0x362f4a(0x171)][_0x362f4a(0x170)](_0x362f4a(0x12f));return;}try{if(_0x5b3d32===_0x362f4a(0x158)){const _0x24c12d=await getEfiOptions(),_0x5676c0=new sdk_node_apis_efi_1[(_0x362f4a(0x14e))](_0x24c12d),_0x24943e={'chave':await(0x0,GetSuperSettingService_1[_0x362f4a(0x14e)])({'key':'_efiPixKey'})};_0x5676c0[_0x362f4a(0x175)](_0x24943e)[_0x362f4a(0x16f)](_0x28794e=>{const _0x30f909=_0x362f4a;_0x28794e?.[_0x30f909(0x152)]!==webhookUrl?createWebHook(_0x5676c0):logger_1['logger'][_0x30f909(0x170)]({'result':_0x28794e},_0x30f909(0x160));},_0x53eeb2=>{const _0x1a8737=_0x362f4a;_0x53eeb2?.[_0x1a8737(0x128)]===_0x1a8737(0x12a)?createWebHook(_0x5676c0):logger_1[_0x1a8737(0x171)][_0x1a8737(0x144)](_0x53eeb2,_0x1a8737(0x15c));});}}catch(_0x4f0532){logger_1[_0x362f4a(0x171)][_0x362f4a(0x144)](_0x4f0532,_0x362f4a(0x129));}};exports[a450_0x450a5d(0x14c)]=efiInitialize;const efiWebhook=async(_0x19f696,_0x510b3b)=>{const _0x4a2044=a450_0x450a5d,{evento:_0x2c5678}=_0x19f696['body'];if(_0x2c5678===_0x4a2044(0x124))return _0x510b3b[_0x4a2044(0x13a)]({'ok':!![]});return _0x19f696['body'][_0x4a2044(0x149)]&&await Promise['all'](_0x19f696[_0x4a2044(0x13d)]['pix']['map'](async _0x2d694b=>{const _0x2122f8=_0x4a2044;logger_1['logger']['debug'](_0x2d694b,'Processando\x20pagamento');const _0x39b0b1=await Invoices_1[_0x2122f8(0x14e)][_0x2122f8(0x178)]({'where':{'txId':_0x2d694b['txid'],'status':_0x2122f8(0x165)},'include':[{'model':Company_1[_0x2122f8(0x14e)],'as':_0x2122f8(0x13c)}]});if(!_0x39b0b1){logger_1[_0x2122f8(0x171)][_0x2122f8(0x170)](_0x2122f8(0x145));return;}const _0x388300=parseFloat(_0x2d694b[_0x2122f8(0x12c)]);if(_0x388300<_0x39b0b1[_0x2122f8(0x132)]){logger_1[_0x2122f8(0x171)][_0x2122f8(0x170)](_0x2122f8(0x162));return;}await(0x0,PaymentGatewayServices_1[_0x2122f8(0x157)])(_0x39b0b1);})),_0x510b3b[_0x4a2044(0x13a)]({'ok':!![]});};exports[a450_0x450a5d(0x164)]=efiWebhook;function a450_0x140a(_0x424995,_0x5380ce){const _0x348bb8=a450_0x214a();return a450_0x140a=function(_0x549463,_0x1839fb){_0x549463=_0x549463-0x123;let _0x214a75=_0x348bb8[_0x549463];return _0x214a75;},a450_0x140a(_0x424995,_0x5380ce);}const efiCheckStatus=async(_0x3197cd,_0xf72036=null)=>{const _0x1b94a1=a450_0x450a5d;try{!_0xf72036&&(_0xf72036=await newEfiPayInstance());const _0x40ecb4=await _0xf72036['pixDetailCharge']({'txid':_0x3197cd[_0x1b94a1(0x137)]});if(_0x40ecb4[_0x1b94a1(0x156)]!=='CONCLUIDA')return![];const {pix:_0x1d121b}=_0x40ecb4,_0x74b78=parseFloat(_0x1d121b[0x0][_0x1b94a1(0x12c)]);if(_0x74b78>=_0x3197cd[_0x1b94a1(0x132)])return await(0x0,PaymentGatewayServices_1[_0x1b94a1(0x157)])(_0x3197cd),!![];return![];}catch(_0x2bc5da){logger_1['logger'][_0x1b94a1(0x144)](_0x2bc5da,_0x1b94a1(0x150));}return![];};exports[a450_0x450a5d(0x16d)]=efiCheckStatus;const efiPollCheckStatus=async(_0x23c912,_0x5a44c2,_0x253b6b=0xa,_0x57ea7c=0x7530)=>{let _0x4a28c3=0x0;async function _0x406b6c(){const _0x145179=a450_0x140a;await _0x5a44c2['reload']();if(_0x5a44c2['status']===_0x145179(0x12b)){logger_1[_0x145179(0x171)][_0x145179(0x170)](_0x145179(0x14a)+_0x5a44c2['id']+_0x145179(0x123));return;}const _0xc35b34=await(0x0,exports[_0x145179(0x16d)])(_0x5a44c2,_0x23c912);if(_0xc35b34)return;_0x4a28c3+=0x1;if(_0x4a28c3>=_0x253b6b){(0x0,PaymentGatewayServices_1[_0x145179(0x16e)])(_0x5a44c2);return;}await new Promise(_0x30e655=>setTimeout(_0x30e655,_0x57ea7c)),await _0x406b6c();}return _0x406b6c();},efiCreateSubscription=async(_0x3e4c1b,_0x5ed5e0)=>{const _0x93c34a=a450_0x450a5d,{price:_0x57336f,invoiceId:_0x12e150}=_0x3e4c1b[_0x93c34a(0x13d)],_0x366a6b=parseFloat(_0x57336f),_0x4560d6={'calendario':{'expiracao':0x12c},'valor':{'original':_0x366a6b[_0x93c34a(0x127)](_0x93c34a(0x174),{'minimumFractionDigits':0x2})['replace'](',','.')},'chave':await(0x0,GetSuperSettingService_1[_0x93c34a(0x14e)])({'key':_0x93c34a(0x15f)}),'solicitacaoPagador':_0x93c34a(0x15a)+_0x12e150},_0x4b91f9=await getEfiOptions();try{const _0x3ef727=await Invoices_1[_0x93c34a(0x14e)][_0x93c34a(0x168)](_0x12e150);if(!_0x3ef727)throw new Error(_0x93c34a(0x169));await(0x0,exports['efiInitialize'])();const _0x15883c=new sdk_node_apis_efi_1[(_0x93c34a(0x14e))](_0x4b91f9),_0x5aeaa7=await _0x15883c[_0x93c34a(0x12e)]([],_0x4560d6);return await _0x3ef727[_0x93c34a(0x141)]({'txId':_0x5aeaa7[_0x93c34a(0x13e)],'payGw':_0x93c34a(0x158),'payGwData':JSON[_0x93c34a(0x15d)](_0x5aeaa7)}),await _0x3ef727[_0x93c34a(0x166)](),efiPollCheckStatus(_0x15883c,_0x3ef727),_0x5ed5e0[_0x93c34a(0x13a)]({'qrcode':{'qrcode':_0x5aeaa7[_0x93c34a(0x126)]},'valor':{'original':_0x4560d6[_0x93c34a(0x12c)][_0x93c34a(0x17a)]}});}catch(_0x270f54){logger_1[_0x93c34a(0x171)]['error']({'efiOptions':_0x4b91f9,'error':_0x270f54},_0x93c34a(0x14d));throw new AppError_1['default'](_0x93c34a(0x12d),0x190);}};exports['efiCreateSubscription']=efiCreateSubscription;