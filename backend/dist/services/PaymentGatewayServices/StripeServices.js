const a455_0x13a4c5=a455_0x3ccd;(function(_0x3aad00,_0x2b48d4){const _0x178b45=a455_0x3ccd,_0x13b709=_0x3aad00();while(!![]){try{const _0xd685e1=parseInt(_0x178b45(0xd2))/0x1+-parseInt(_0x178b45(0xcc))/0x2+parseInt(_0x178b45(0xd8))/0x3*(parseInt(_0x178b45(0xee))/0x4)+-parseInt(_0x178b45(0xe6))/0x5+parseInt(_0x178b45(0xf3))/0x6+parseInt(_0x178b45(0xe3))/0x7*(parseInt(_0x178b45(0xdb))/0x8)+-parseInt(_0x178b45(0xcd))/0x9*(parseInt(_0x178b45(0x104))/0xa);if(_0xd685e1===_0x2b48d4)break;else _0x13b709['push'](_0x13b709['shift']());}catch(_0x3aa1ab){_0x13b709['push'](_0x13b709['shift']());}}}(a455_0xeb25,0xa7770));const a455_0x3cf23c=(function(){let _0x2a2930=!![];return function(_0x6b0f30,_0x356347){const _0x11aa7b=_0x2a2930?function(){const _0x4fd04c=a455_0x3ccd;if(_0x356347){const _0x3d1bed=_0x356347[_0x4fd04c(0xeb)](_0x6b0f30,arguments);return _0x356347=null,_0x3d1bed;}}:function(){};return _0x2a2930=![],_0x11aa7b;};}()),a455_0x196d83=a455_0x3cf23c(this,function(){const _0x2ced1c=a455_0x3ccd;return a455_0x196d83[_0x2ced1c(0x101)]()['search'](_0x2ced1c(0xf8))['toString']()[_0x2ced1c(0xf0)](a455_0x196d83)[_0x2ced1c(0xd6)](_0x2ced1c(0xf8));});a455_0x196d83();'use strict';var __importDefault=this&&this[a455_0x13a4c5(0xe7)]||function(_0x1ca04b){return _0x1ca04b&&_0x1ca04b['__esModule']?_0x1ca04b:{'default':_0x1ca04b};};Object[a455_0x13a4c5(0xdd)](exports,'__esModule',{'value':!![]}),exports['stripeCheckStatus']=exports[a455_0x13a4c5(0xcf)]=exports['stripeWebhookHandler']=exports[a455_0x13a4c5(0xe0)]=void 0x0;const stripe_1=__importDefault(require(a455_0x13a4c5(0xc9))),GetSuperSettingService_1=__importDefault(require(a455_0x13a4c5(0xf7))),logger_1=require('../../utils/logger'),Invoices_1=__importDefault(require(a455_0x13a4c5(0xff))),AppError_1=__importDefault(require('../../errors/AppError')),PaymentGatewayServices_1=require(a455_0x13a4c5(0xd1)),stripe=new stripe_1[(a455_0x13a4c5(0x102))](process['env'][a455_0x13a4c5(0xf9)],{'apiVersion':a455_0x13a4c5(0x107)});async function createStripeWebhook(){const _0x4f43d2=a455_0x13a4c5;try{const _0x1cc978=await stripe[_0x4f43d2(0x103)][_0x4f43d2(0xd9)]({'url':process[_0x4f43d2(0xda)]['BACKEND_URL']+'/subscription/aa/webhook','enabled_events':['payment_intent.succeeded',_0x4f43d2(0xd7)]});return logger_1['logger'][_0x4f43d2(0xce)]({'webhookEndpoint':_0x1cc978},_0x4f43d2(0xf6)),_0x1cc978;}catch(_0x143ea2){logger_1[_0x4f43d2(0xd3)][_0x4f43d2(0xfd)]({'error':_0x143ea2},'Failed\x20to\x20create\x20webhook.');throw new AppError_1[(_0x4f43d2(0x102))]('Failed\x20to\x20create\x20webhook.',0x1f4);}}const stripeInitialize=async()=>{const _0x44bb76=a455_0x13a4c5,_0x422329=await(0x0,GetSuperSettingService_1[_0x44bb76(0x102)])({'key':'_paymentGateway'});if(_0x422329!==_0x44bb76(0xc9)){logger_1['logger'][_0x44bb76(0xf4)](_0x44bb76(0x100));return;}if(!process[_0x44bb76(0xda)]['BACKEND_URL'][_0x44bb76(0xe9)](_0x44bb76(0x105))){logger_1[_0x44bb76(0xd3)][_0x44bb76(0xf4)]('stripeInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported');return;}await createStripeWebhook();};exports[a455_0x13a4c5(0xe0)]=stripeInitialize;function a455_0x3ccd(_0x254fdd,_0x3de8a9){const _0x2a7857=a455_0xeb25();return a455_0x3ccd=function(_0x196d83,_0x3cf23c){_0x196d83=_0x196d83-0xc9;let _0xeb25c4=_0x2a7857[_0x196d83];return _0xeb25c4;},a455_0x3ccd(_0x254fdd,_0x3de8a9);}const stripeWebhookHandler=async(_0xc81adc,_0x54d643)=>{const _0x275d6f=a455_0x13a4c5,_0x292c0e=_0xc81adc['body'];try{switch(_0x292c0e[_0x275d6f(0xde)]){case _0x275d6f(0x106):const _0x5b4bb8=_0x292c0e[_0x275d6f(0xd4)][_0x275d6f(0xd0)];await(0x0,PaymentGatewayServices_1[_0x275d6f(0xe4)])(_0x5b4bb8[_0x275d6f(0xd5)]['invoiceId']);break;case'payment_intent.payment_failed':const _0x5307d2=_0x292c0e[_0x275d6f(0xd4)]['object'];logger_1['logger']['info']({'failedIntent':_0x5307d2},_0x275d6f(0xca));break;default:logger_1[_0x275d6f(0xd3)][_0x275d6f(0xcb)]({'event':_0x292c0e},_0x275d6f(0xe2));}return _0x54d643['status'](0xc8)[_0x275d6f(0x108)]({'received':!![]});}catch(_0x224b3e){return logger_1[_0x275d6f(0xd3)][_0x275d6f(0xfd)]({'error':_0x224b3e},'Error\x20handling\x20webhook\x20event.'),_0x54d643[_0x275d6f(0xfe)](0x190)['json']({'error':'Webhook\x20handler\x20failed.'});}};exports[a455_0x13a4c5(0xe5)]=stripeWebhookHandler;const stripeCreateSubscription=async(_0x2a17a6,_0x2fc19b)=>{const _0x63b829=a455_0x13a4c5,{price:_0x16f0b4,invoiceId:_0x9abb17}=_0x2a17a6[_0x63b829(0xe8)];try{const _0x30c9e2=await stripe['paymentIntents'][_0x63b829(0xd9)]({'amount':Math[_0x63b829(0xf5)](parseFloat(_0x16f0b4)*0x64),'currency':_0x63b829(0xdf),'metadata':{'invoiceId':_0x9abb17}});return await Invoices_1['default'][_0x63b829(0xe1)]({'stripePaymentIntentId':_0x30c9e2['id']},{'where':{'id':_0x9abb17}}),_0x2fc19b[_0x63b829(0x108)]({'clientSecret':_0x30c9e2[_0x63b829(0xed)],'status':_0x63b829(0xec)});}catch(_0x50fe56){logger_1['logger'][_0x63b829(0xfd)]({'error':_0x50fe56},_0x63b829(0xea));throw new AppError_1[(_0x63b829(0x102))](_0x63b829(0xea),0x190);}};exports[a455_0x13a4c5(0xcf)]=stripeCreateSubscription;const stripeCheckStatus=async _0x59e474=>{const _0x3e06f6=a455_0x13a4c5;try{const _0x4f0d8f=await Invoices_1[_0x3e06f6(0x102)][_0x3e06f6(0xf1)](_0x59e474);if(!_0x4f0d8f||!_0x4f0d8f['stripePaymentIntentId'])return logger_1[_0x3e06f6(0xd3)][_0x3e06f6(0xfd)](_0x3e06f6(0xfa)),![];const _0x5bc7f1=await stripe[_0x3e06f6(0xef)][_0x3e06f6(0xf2)](_0x4f0d8f[_0x3e06f6(0xfb)]);if(_0x5bc7f1['status']==='succeeded')return await(0x0,PaymentGatewayServices_1[_0x3e06f6(0xe4)])(_0x4f0d8f),!![];return![];}catch(_0x114335){return logger_1[_0x3e06f6(0xd3)][_0x3e06f6(0xfd)]({'error':_0x114335},_0x3e06f6(0xfc)),![];}};exports[a455_0x13a4c5(0xdc)]=stripeCheckStatus;function a455_0xeb25(){const _0x413e16=['constructor','findByPk','retrieve','2274426aJTxbv','debug','round','Webhook\x20created\x20successfully.','../SettingServices/GetSuperSettingService','(((.+)+)+)+$','STRIPE_PRIVATE','Invoice\x20not\x20found\x20or\x20missing\x20Stripe\x20PaymentIntent\x20ID.','stripePaymentIntentId','Failed\x20to\x20check\x20payment\x20status.','error','status','../../models/Invoices','stripeInitialize:\x20not\x20configured\x20for\x20Stripe.','toString','default','webhookEndpoints','230DRfLba','https://','payment_intent.succeeded','2022-11-15','json','stripe','Payment\x20failed.','warn','1455374HJmKYi','242019EBpsMc','info','stripeCreateSubscription','object','./PaymentGatewayServices','793887cvXuUf','logger','data','metadata','search','payment_intent.payment_failed','1236582kzHrvg','create','env','315960StMmZc','stripeCheckStatus','defineProperty','type','usd','stripeInitialize','update','Unhandled\x20event\x20type.','21JoCHAa','processInvoicePaid','stripeWebhookHandler','2479545ZzdBlx','__importDefault','body','startsWith','Failed\x20to\x20create\x20subscription.','apply','success','client_secret','12ddwKzV','paymentIntents'];a455_0xeb25=function(){return _0x413e16;};return a455_0xeb25();}