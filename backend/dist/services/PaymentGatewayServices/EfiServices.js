function a450_0x30dc(_0x596e27,_0x4664fc){const _0xe9505=a450_0x4495();return a450_0x30dc=function(_0x13b5eb,_0x264010){_0x13b5eb=_0x13b5eb-0x105;let _0x449562=_0xe9505[_0x13b5eb];return _0x449562;},a450_0x30dc(_0x596e27,_0x4664fc);}function a450_0x4495(){const _0x1da240=['startsWith','196766uKLqxx','pixCreateImmediateCharge','_efiClientId','efiInitialize','search','then','defineProperty','220420iSsSgG','webhookUrl','error','efiInitialize:\x20','efiCreateSubscription','map','Processando\x20pagamento','_efiPixKey','info','debug','\x20already\x20paid,\x20finishing\x20polling','efiWebhook','json','Problema\x20encontrado,\x20entre\x20em\x20contato\x20com\x20o\x20suporte!','Recebido\x20valor\x20menor','pixCopiaECola','../../../private/','sdk-node-apis-efi','apply','../SettingServices/GetSuperSettingService','reload','body','#Fatura:','https://','pixDetailWebhook','pixDetailCharge','_efiCertFile','_efiClientSecret','processInvoicePaid','BACKEND_URL','path','default','1514550CTddmT','teste_webhook','pixConfigWebhook\x20ok','CONCLUIDA','efi','logger','16BgJiPB','processInvoiceExpired','./PaymentGatewayServices','env','../../utils/logger','__esModule','/subscription/aa/webhook','60579ourYbE','1045686NhBfiY','valor','efiWebhook:\x20Invoice\x20not\x20found\x20or\x20already\x20paid','efiInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported','(((.+)+)+)+$','join','original','Invoice\x20not\x20found','pix','Error\x20getting\x20detail\x20of\x20txid','622875jiNKHu','status','efiCheckStatus','efiInitialize:\x20fail\x20to\x20verify\x20current\x20webhook','_paymentGateway','update','findByPk','1091212bClbJR','company','txid','14ngukgX','pixConfigWebhook'];a450_0x4495=function(){return _0x1da240;};return a450_0x4495();}const a450_0x31a39b=a450_0x30dc;(function(_0x3450f9,_0x4fc0e9){const _0x444c42=a450_0x30dc,_0x56e7ed=_0x3450f9();while(!![]){try{const _0x119b23=parseInt(_0x444c42(0x114))/0x1+parseInt(_0x444c42(0x11b))/0x2+parseInt(_0x444c42(0x107))/0x3+-parseInt(_0x444c42(0x10e))/0x4+parseInt(_0x444c42(0x13b))/0x5+parseInt(_0x444c42(0x149))/0x6*(-parseInt(_0x444c42(0x111))/0x7)+-parseInt(_0x444c42(0x141))/0x8*(parseInt(_0x444c42(0x148))/0x9);if(_0x119b23===_0x4fc0e9)break;else _0x56e7ed['push'](_0x56e7ed['shift']());}catch(_0x32c837){_0x56e7ed['push'](_0x56e7ed['shift']());}}}(a450_0x4495,0x2c99c));const a450_0x264010=(function(){let _0x54108a=!![];return function(_0x34312e,_0x3ea8a2){const _0x2c98ef=_0x54108a?function(){const _0x398afd=a450_0x30dc;if(_0x3ea8a2){const _0x2b734b=_0x3ea8a2[_0x398afd(0x12d)](_0x34312e,arguments);return _0x3ea8a2=null,_0x2b734b;}}:function(){};return _0x54108a=![],_0x2c98ef;};}()),a450_0x13b5eb=a450_0x264010(this,function(){const _0x1915fd=a450_0x30dc;return a450_0x13b5eb['toString']()[_0x1915fd(0x118)](_0x1915fd(0x14d))['toString']()['constructor'](a450_0x13b5eb)['search'](_0x1915fd(0x14d));});a450_0x13b5eb();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x198f41){return _0x198f41&&_0x198f41['__esModule']?_0x198f41:{'default':_0x198f41};};Object[a450_0x31a39b(0x11a)](exports,a450_0x31a39b(0x146),{'value':!![]}),exports[a450_0x31a39b(0x11f)]=exports[a450_0x31a39b(0x109)]=exports['efiWebhook']=exports[a450_0x31a39b(0x117)]=void 0x0;const sdk_node_apis_efi_1=__importDefault(require(a450_0x31a39b(0x12c))),path_1=__importDefault(require(a450_0x31a39b(0x139))),GetSuperSettingService_1=__importDefault(require(a450_0x31a39b(0x12e))),logger_1=require(a450_0x31a39b(0x145)),Invoices_1=__importDefault(require('../../models/Invoices')),Company_1=__importDefault(require('../../models/Company')),AppError_1=__importDefault(require('../../errors/AppError')),PaymentGatewayServices_1=require(a450_0x31a39b(0x143)),webhookUrl=process[a450_0x31a39b(0x144)][a450_0x31a39b(0x138)]+a450_0x31a39b(0x147);async function getEfiOptions(){const _0x354d4f=a450_0x31a39b,_0x22d4b2=path_1['default'][_0x354d4f(0x14e)](__dirname,_0x354d4f(0x12b)+await(0x0,GetSuperSettingService_1['default'])({'key':_0x354d4f(0x135)}));return{'sandbox':![],'client_id':await(0x0,GetSuperSettingService_1['default'])({'key':_0x354d4f(0x116)}),'client_secret':await(0x0,GetSuperSettingService_1[_0x354d4f(0x13a)])({'key':_0x354d4f(0x136)}),'pix_cert':_0x22d4b2,'validateMtls':![]};}const newEfiPayInstance=async()=>{const _0x55c44e=a450_0x31a39b,_0x30fba0=await getEfiOptions();return new sdk_node_apis_efi_1[(_0x55c44e(0x13a))](_0x30fba0);},createWebHook=async _0x3b8389=>{const _0x20e6fa=a450_0x31a39b,_0x4e3463={'chave':await(0x0,GetSuperSettingService_1[_0x20e6fa(0x13a)])({'key':_0x20e6fa(0x122)})},_0x4c3b60={'webhookUrl':webhookUrl};return _0x3b8389[_0x20e6fa(0x112)](_0x4e3463,_0x4c3b60)[_0x20e6fa(0x119)](_0x151794=>{const _0x40203d=_0x20e6fa;logger_1[_0x40203d(0x140)][_0x40203d(0x123)]({'result':_0x151794},_0x40203d(0x13d));},_0x23a17a=>{const _0x36d227=_0x20e6fa;logger_1[_0x36d227(0x140)][_0x36d227(0x11d)]({'result':_0x23a17a},'pixConfigWebhook\x20error:');});},efiInitialize=async()=>{const _0x17d261=a450_0x31a39b,_0x23da12=await(0x0,GetSuperSettingService_1[_0x17d261(0x13a)])({'key':_0x17d261(0x10b)});if(!webhookUrl[_0x17d261(0x113)](_0x17d261(0x132))){logger_1[_0x17d261(0x140)][_0x17d261(0x124)](_0x17d261(0x14c));return;}try{if(_0x23da12===_0x17d261(0x13f)){const _0x5a3676=await getEfiOptions(),_0x1eaaad=new sdk_node_apis_efi_1['default'](_0x5a3676),_0x19e5ac={'chave':await(0x0,GetSuperSettingService_1[_0x17d261(0x13a)])({'key':_0x17d261(0x122)})};_0x1eaaad[_0x17d261(0x133)](_0x19e5ac)['then'](_0x38a1c1=>{const _0x40b112=_0x17d261;_0x38a1c1?.[_0x40b112(0x11c)]!==webhookUrl?createWebHook(_0x1eaaad):logger_1['logger'][_0x40b112(0x124)]({'result':_0x38a1c1},'efiInitialize:\x20webhook\x20correto\x20já\x20instalado');},_0xaab468=>{const _0x5683f5=_0x17d261;_0xaab468?.['nome']==='webhook_nao_encontrado'?createWebHook(_0x1eaaad):logger_1[_0x5683f5(0x140)][_0x5683f5(0x11d)](_0xaab468,_0x5683f5(0x10a));});}}catch(_0x38a414){logger_1[_0x17d261(0x140)][_0x17d261(0x11d)](_0x38a414,_0x17d261(0x11e));}};exports[a450_0x31a39b(0x117)]=efiInitialize;const efiWebhook=async(_0x1065a8,_0x14e7e0)=>{const _0x4f6012=a450_0x31a39b,{evento:_0xace366}=_0x1065a8['body'];if(_0xace366===_0x4f6012(0x13c))return _0x14e7e0['json']({'ok':!![]});return _0x1065a8[_0x4f6012(0x130)][_0x4f6012(0x105)]&&await Promise['all'](_0x1065a8[_0x4f6012(0x130)]['pix'][_0x4f6012(0x120)](async _0x505e23=>{const _0x36ac0f=_0x4f6012;logger_1['logger']['debug'](_0x505e23,_0x36ac0f(0x121));const _0x38ff2f=await Invoices_1[_0x36ac0f(0x13a)]['findOne']({'where':{'txId':_0x505e23[_0x36ac0f(0x110)],'status':'open'},'include':[{'model':Company_1[_0x36ac0f(0x13a)],'as':_0x36ac0f(0x10f)}]});if(!_0x38ff2f){logger_1['logger']['debug'](_0x36ac0f(0x14b));return;}const _0x1ec2dd=parseFloat(_0x505e23['valor']);if(_0x1ec2dd<_0x38ff2f['value']){logger_1[_0x36ac0f(0x140)][_0x36ac0f(0x124)](_0x36ac0f(0x129));return;}await(0x0,PaymentGatewayServices_1[_0x36ac0f(0x137)])(_0x38ff2f);})),_0x14e7e0[_0x4f6012(0x127)]({'ok':!![]});};exports[a450_0x31a39b(0x126)]=efiWebhook;const efiCheckStatus=async(_0x109712,_0x2e3f84=null)=>{const _0x48d94c=a450_0x31a39b;try{!_0x2e3f84&&(_0x2e3f84=await newEfiPayInstance());const _0x247a0a=await _0x2e3f84[_0x48d94c(0x134)]({'txid':_0x109712['txId']});if(_0x247a0a['status']!==_0x48d94c(0x13e))return![];const {pix:_0x22f240}=_0x247a0a,_0x5048f9=parseFloat(_0x22f240[0x0][_0x48d94c(0x14a)]);if(_0x5048f9>=_0x109712['value'])return await(0x0,PaymentGatewayServices_1[_0x48d94c(0x137)])(_0x109712),!![];return![];}catch(_0x43551f){logger_1[_0x48d94c(0x140)][_0x48d94c(0x11d)](_0x43551f,_0x48d94c(0x106));}return![];};exports['efiCheckStatus']=efiCheckStatus;const efiPollCheckStatus=async(_0x4a2e23,_0x4e4a5c,_0x2cc066=0xa,_0x4ed58e=0x7530)=>{let _0x370dd8=0x0;async function _0x4d2403(){const _0x272359=a450_0x30dc;await _0x4e4a5c[_0x272359(0x12f)]();if(_0x4e4a5c[_0x272359(0x108)]==='paid'){logger_1[_0x272359(0x140)][_0x272359(0x124)]('efiPollCheckStatus:\x20Invoice\x20'+_0x4e4a5c['id']+_0x272359(0x125));return;}const _0xd3d569=await(0x0,exports[_0x272359(0x109)])(_0x4e4a5c,_0x4a2e23);if(_0xd3d569)return;_0x370dd8+=0x1;if(_0x370dd8>=_0x2cc066){(0x0,PaymentGatewayServices_1[_0x272359(0x142)])(_0x4e4a5c);return;}await new Promise(_0x5d5345=>setTimeout(_0x5d5345,_0x4ed58e)),await _0x4d2403();}return _0x4d2403();},efiCreateSubscription=async(_0x1f92db,_0x59aa51)=>{const _0x2f604a=a450_0x31a39b,{price:_0x20cfd0,invoiceId:_0x2f86aa}=_0x1f92db[_0x2f604a(0x130)],_0x491082=parseFloat(_0x20cfd0),_0x1c2d71={'calendario':{'expiracao':0x12c},'valor':{'original':_0x491082['toLocaleString']('pt-br',{'minimumFractionDigits':0x2})['replace'](',','.')},'chave':await(0x0,GetSuperSettingService_1[_0x2f604a(0x13a)])({'key':_0x2f604a(0x122)}),'solicitacaoPagador':_0x2f604a(0x131)+_0x2f86aa},_0x2a7bbf=await getEfiOptions();try{const _0x1c3d9b=await Invoices_1[_0x2f604a(0x13a)][_0x2f604a(0x10d)](_0x2f86aa);if(!_0x1c3d9b)throw new Error(_0x2f604a(0x150));await(0x0,exports[_0x2f604a(0x117)])();const _0xb28f81=new sdk_node_apis_efi_1[(_0x2f604a(0x13a))](_0x2a7bbf),_0x9ab272=await _0xb28f81[_0x2f604a(0x115)]([],_0x1c2d71);return await _0x1c3d9b[_0x2f604a(0x10c)]({'txId':_0x9ab272[_0x2f604a(0x110)],'payGw':'efi','payGwData':JSON['stringify'](_0x9ab272)}),await _0x1c3d9b[_0x2f604a(0x12f)](),efiPollCheckStatus(_0xb28f81,_0x1c3d9b),_0x59aa51[_0x2f604a(0x127)]({'qrcode':{'qrcode':_0x9ab272[_0x2f604a(0x12a)]},'valor':{'original':_0x1c2d71[_0x2f604a(0x14a)][_0x2f604a(0x14f)]}});}catch(_0x49d708){logger_1[_0x2f604a(0x140)][_0x2f604a(0x11d)]({'efiOptions':_0x2a7bbf,'error':_0x49d708},'efiCreateSubscription\x20error');throw new AppError_1[(_0x2f604a(0x13a))](_0x2f604a(0x128),0x190);}};exports[a450_0x31a39b(0x11f)]=efiCreateSubscription;