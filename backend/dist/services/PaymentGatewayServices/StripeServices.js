function a453_0x4a95(_0x5a5ded,_0x16dfb7){const _0x2eb38c=a453_0x67c7();return a453_0x4a95=function(_0x52edfe,_0x5429ba){_0x52edfe=_0x52edfe-0xb6;let _0x67c750=_0x2eb38c[_0x52edfe];return _0x67c750;},a453_0x4a95(_0x5a5ded,_0x16dfb7);}function a453_0x67c7(){const _0x3e2fcf=['_paymentGateway','object','default','warn','stripe','succeeded','client_secret','../../utils/logger','env','error','processInvoicePaid','6218595kKKvcN','119YLQaPt','defineProperty','Webhook\x20created\x20successfully.','1495780koPVFs','webhookEndpoints','Failed\x20to\x20check\x20payment\x20status.','/subscription/aa/webhook','toString','221727sqfGsS','../../models/Invoices','startsWith','json','retrieve','__esModule','../SettingServices/GetSuperSettingService','invoiceId','search','info','stripeWebhookHandler','stripeCreateSubscription','debug','body','Error\x20handling\x20webhook\x20event.','Failed\x20to\x20create\x20webhook.','stripeInitialize:\x20not\x20configured\x20for\x20Stripe.','findByPk','stripeInitialize','STRIPE_PRIVATE','round','logger','success','stripePaymentIntentId','stripeCheckStatus','Unhandled\x20event\x20type.','__importDefault','Webhook\x20handler\x20failed.','type','../../errors/AppError','Failed\x20to\x20create\x20subscription.','479960cDkzwr','paymentIntents','150930ryKZIF','2022-11-15','1076524DWoZnG','status','BACKEND_URL','stripeInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported','(((.+)+)+)+$','./PaymentGatewayServices','payment_intent.payment_failed','data','payment_intent.succeeded','1MmKRQm','772222UtXAiy','usd'];a453_0x67c7=function(){return _0x3e2fcf;};return a453_0x67c7();}const a453_0x2f2ef6=a453_0x4a95;(function(_0x1a6643,_0x1cf158){const _0x4e2b58=a453_0x4a95,_0x5dfc5b=_0x1a6643();while(!![]){try{const _0x11d14=parseInt(_0x4e2b58(0xea))/0x1*(parseInt(_0x4e2b58(0xeb))/0x2)+parseInt(_0x4e2b58(0xbe))/0x3+-parseInt(_0x4e2b58(0xe1))/0x4+-parseInt(_0x4e2b58(0xb9))/0x5+parseInt(_0x4e2b58(0xdf))/0x6*(-parseInt(_0x4e2b58(0xb6))/0x7)+parseInt(_0x4e2b58(0xdd))/0x8+parseInt(_0x4e2b58(0xf8))/0x9;if(_0x11d14===_0x1cf158)break;else _0x5dfc5b['push'](_0x5dfc5b['shift']());}catch(_0x95561){_0x5dfc5b['push'](_0x5dfc5b['shift']());}}}(a453_0x67c7,0x34808));const a453_0x5429ba=(function(){let _0x5142f4=!![];return function(_0xf5639d,_0x90e8){const _0x2f53e2=_0x5142f4?function(){if(_0x90e8){const _0x545baa=_0x90e8['apply'](_0xf5639d,arguments);return _0x90e8=null,_0x545baa;}}:function(){};return _0x5142f4=![],_0x2f53e2;};}()),a453_0x52edfe=a453_0x5429ba(this,function(){const _0x2702fb=a453_0x4a95;return a453_0x52edfe[_0x2702fb(0xbd)]()['search'](_0x2702fb(0xe5))['toString']()['constructor'](a453_0x52edfe)[_0x2702fb(0xc6)](_0x2702fb(0xe5));});a453_0x52edfe();'use strict';var __importDefault=this&&this[a453_0x2f2ef6(0xd8)]||function(_0x1bbcb3){const _0x388a88=a453_0x2f2ef6;return _0x1bbcb3&&_0x1bbcb3[_0x388a88(0xc3)]?_0x1bbcb3:{'default':_0x1bbcb3};};Object[a453_0x2f2ef6(0xb7)](exports,'__esModule',{'value':!![]}),exports[a453_0x2f2ef6(0xd6)]=exports['stripeCreateSubscription']=exports['stripeWebhookHandler']=exports['stripeInitialize']=void 0x0;const stripe_1=__importDefault(require(a453_0x2f2ef6(0xf1))),GetSuperSettingService_1=__importDefault(require(a453_0x2f2ef6(0xc4))),logger_1=require(a453_0x2f2ef6(0xf4)),Invoices_1=__importDefault(require(a453_0x2f2ef6(0xbf))),AppError_1=__importDefault(require(a453_0x2f2ef6(0xdb))),PaymentGatewayServices_1=require(a453_0x2f2ef6(0xe6)),stripe=new stripe_1[(a453_0x2f2ef6(0xef))](process[a453_0x2f2ef6(0xf5)][a453_0x2f2ef6(0xd1)],{'apiVersion':a453_0x2f2ef6(0xe0)});async function createStripeWebhook(){const _0x14f397=a453_0x2f2ef6;try{const _0x53e9fa=await stripe[_0x14f397(0xba)]['create']({'url':process['env'][_0x14f397(0xe3)]+_0x14f397(0xbc),'enabled_events':[_0x14f397(0xe9),'payment_intent.payment_failed']});return logger_1['logger']['info']({'webhookEndpoint':_0x53e9fa},_0x14f397(0xb8)),_0x53e9fa;}catch(_0x5da0d0){logger_1[_0x14f397(0xd3)][_0x14f397(0xf6)]({'error':_0x5da0d0},_0x14f397(0xcd));throw new AppError_1[(_0x14f397(0xef))](_0x14f397(0xcd),0x1f4);}}const stripeInitialize=async()=>{const _0x3591df=a453_0x2f2ef6,_0x40e074=await(0x0,GetSuperSettingService_1[_0x3591df(0xef)])({'key':_0x3591df(0xed)});if(_0x40e074!==_0x3591df(0xf1)){logger_1[_0x3591df(0xd3)][_0x3591df(0xca)](_0x3591df(0xce));return;}if(!process['env']['BACKEND_URL'][_0x3591df(0xc0)]('https://')){logger_1[_0x3591df(0xd3)]['debug'](_0x3591df(0xe4));return;}await createStripeWebhook();};exports[a453_0x2f2ef6(0xd0)]=stripeInitialize;const stripeWebhookHandler=async(_0x491efd,_0x1cf8dd)=>{const _0x432950=a453_0x2f2ef6,_0x33d629=_0x491efd[_0x432950(0xcb)];try{switch(_0x33d629[_0x432950(0xda)]){case'payment_intent.succeeded':const _0x4ed1f0=_0x33d629[_0x432950(0xe8)][_0x432950(0xee)];await(0x0,PaymentGatewayServices_1['processInvoicePaid'])(_0x4ed1f0['metadata'][_0x432950(0xc5)]);break;case _0x432950(0xe7):const _0x2a9428=_0x33d629[_0x432950(0xe8)][_0x432950(0xee)];logger_1[_0x432950(0xd3)][_0x432950(0xc7)]({'failedIntent':_0x2a9428},'Payment\x20failed.');break;default:logger_1[_0x432950(0xd3)][_0x432950(0xf0)]({'event':_0x33d629},_0x432950(0xd7));}return _0x1cf8dd[_0x432950(0xe2)](0xc8)[_0x432950(0xc1)]({'received':!![]});}catch(_0x3af45e){return logger_1[_0x432950(0xd3)][_0x432950(0xf6)]({'error':_0x3af45e},_0x432950(0xcc)),_0x1cf8dd[_0x432950(0xe2)](0x190)[_0x432950(0xc1)]({'error':_0x432950(0xd9)});}};exports[a453_0x2f2ef6(0xc8)]=stripeWebhookHandler;const stripeCreateSubscription=async(_0x1d1ba5,_0x4ac49c)=>{const _0x731f5=a453_0x2f2ef6,{price:_0x23c8cb,invoiceId:_0x3938ae}=_0x1d1ba5['body'];try{const _0x610d2e=await stripe['paymentIntents']['create']({'amount':Math[_0x731f5(0xd2)](parseFloat(_0x23c8cb)*0x64),'currency':_0x731f5(0xec),'metadata':{'invoiceId':_0x3938ae}});return await Invoices_1[_0x731f5(0xef)]['update']({'stripePaymentIntentId':_0x610d2e['id']},{'where':{'id':_0x3938ae}}),_0x4ac49c[_0x731f5(0xc1)]({'clientSecret':_0x610d2e[_0x731f5(0xf3)],'status':_0x731f5(0xd4)});}catch(_0x1d1ba6){logger_1[_0x731f5(0xd3)][_0x731f5(0xf6)]({'error':_0x1d1ba6},_0x731f5(0xdc));throw new AppError_1['default'](_0x731f5(0xdc),0x190);}};exports[a453_0x2f2ef6(0xc9)]=stripeCreateSubscription;const stripeCheckStatus=async _0x230b4f=>{const _0x3fc59f=a453_0x2f2ef6;try{const _0x1fa256=await Invoices_1[_0x3fc59f(0xef)][_0x3fc59f(0xcf)](_0x230b4f);if(!_0x1fa256||!_0x1fa256[_0x3fc59f(0xd5)])return logger_1[_0x3fc59f(0xd3)]['error']('Invoice\x20not\x20found\x20or\x20missing\x20Stripe\x20PaymentIntent\x20ID.'),![];const _0x536157=await stripe[_0x3fc59f(0xde)][_0x3fc59f(0xc2)](_0x1fa256[_0x3fc59f(0xd5)]);if(_0x536157['status']===_0x3fc59f(0xf2))return await(0x0,PaymentGatewayServices_1[_0x3fc59f(0xf7)])(_0x1fa256),!![];return![];}catch(_0x4ad3ba){return logger_1[_0x3fc59f(0xd3)][_0x3fc59f(0xf6)]({'error':_0x4ad3ba},_0x3fc59f(0xbb)),![];}};exports[a453_0x2f2ef6(0xd6)]=stripeCheckStatus;