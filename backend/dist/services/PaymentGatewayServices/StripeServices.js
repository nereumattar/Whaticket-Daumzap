const a452_0x4a4c2c=a452_0x2602;(function(_0x4515c8,_0xf410ae){const _0x515c71=a452_0x2602,_0x4888cb=_0x4515c8();while(!![]){try{const _0x2cc278=parseInt(_0x515c71(0x13e))/0x1*(parseInt(_0x515c71(0x102))/0x2)+parseInt(_0x515c71(0x11d))/0x3+-parseInt(_0x515c71(0x121))/0x4+-parseInt(_0x515c71(0x12a))/0x5+-parseInt(_0x515c71(0x128))/0x6+parseInt(_0x515c71(0x11c))/0x7+parseInt(_0x515c71(0x137))/0x8;if(_0x2cc278===_0xf410ae)break;else _0x4888cb['push'](_0x4888cb['shift']());}catch(_0x354d1b){_0x4888cb['push'](_0x4888cb['shift']());}}}(a452_0x2b10,0x3e603));const a452_0xfcee1b=(function(){let _0x45b02e=!![];return function(_0x377023,_0x59d526){const _0x33f2fe=_0x45b02e?function(){const _0x30b51e=a452_0x2602;if(_0x59d526){const _0x1f2e84=_0x59d526[_0x30b51e(0x131)](_0x377023,arguments);return _0x59d526=null,_0x1f2e84;}}:function(){};return _0x45b02e=![],_0x33f2fe;};}()),a452_0x4c2d31=a452_0xfcee1b(this,function(){const _0x19156c=a452_0x2602;return a452_0x4c2d31[_0x19156c(0x129)]()[_0x19156c(0x10c)](_0x19156c(0x118))['toString']()[_0x19156c(0x12b)](a452_0x4c2d31)[_0x19156c(0x10c)](_0x19156c(0x118));});a452_0x4c2d31();'use strict';function a452_0x2602(_0x31b5c3,_0x5e302f){const _0x457338=a452_0x2b10();return a452_0x2602=function(_0x4c2d31,_0xfcee1b){_0x4c2d31=_0x4c2d31-0x100;let _0x2b10cf=_0x457338[_0x4c2d31];return _0x2b10cf;},a452_0x2602(_0x31b5c3,_0x5e302f);}var __importDefault=this&&this[a452_0x4a4c2c(0x124)]||function(_0x1a4442){const _0x42608b=a452_0x4a4c2c;return _0x1a4442&&_0x1a4442[_0x42608b(0x125)]?_0x1a4442:{'default':_0x1a4442};};Object['defineProperty'](exports,a452_0x4a4c2c(0x125),{'value':!![]}),exports['stripeCheckStatus']=exports[a452_0x4a4c2c(0x133)]=exports[a452_0x4a4c2c(0x110)]=exports['stripeInitialize']=void 0x0;const stripe_1=__importDefault(require(a452_0x4a4c2c(0x116))),GetSuperSettingService_1=__importDefault(require('../SettingServices/GetSuperSettingService')),logger_1=require('../../utils/logger'),Invoices_1=__importDefault(require(a452_0x4a4c2c(0x108))),AppError_1=__importDefault(require('../../errors/AppError')),PaymentGatewayServices_1=require(a452_0x4a4c2c(0x111)),stripe=new stripe_1[(a452_0x4a4c2c(0x127))](process[a452_0x4a4c2c(0x10f)]['STRIPE_PRIVATE'],{'apiVersion':a452_0x4a4c2c(0x135)});async function createStripeWebhook(){const _0x301077=a452_0x4a4c2c;try{const _0x1af23a=await stripe[_0x301077(0x11e)][_0x301077(0x12e)]({'url':process[_0x301077(0x10f)][_0x301077(0x13c)]+_0x301077(0x132),'enabled_events':['payment_intent.succeeded','payment_intent.payment_failed']});return logger_1[_0x301077(0x11f)][_0x301077(0x123)]({'webhookEndpoint':_0x1af23a},'Webhook\x20created\x20successfully.'),_0x1af23a;}catch(_0x2646eb){logger_1[_0x301077(0x11f)][_0x301077(0x115)]({'error':_0x2646eb},_0x301077(0x106));throw new AppError_1[(_0x301077(0x127))](_0x301077(0x106),0x1f4);}}const stripeInitialize=async()=>{const _0x4c97f1=a452_0x4a4c2c,_0x46c730=await(0x0,GetSuperSettingService_1[_0x4c97f1(0x127)])({'key':_0x4c97f1(0x126)});if(_0x46c730!==_0x4c97f1(0x116)){logger_1[_0x4c97f1(0x11f)]['debug'](_0x4c97f1(0x13b));return;}if(!process[_0x4c97f1(0x10f)][_0x4c97f1(0x13c)][_0x4c97f1(0x112)]('https://')){logger_1['logger']['debug'](_0x4c97f1(0x107));return;}await createStripeWebhook();};exports[a452_0x4a4c2c(0x101)]=stripeInitialize;const stripeWebhookHandler=async(_0x241639,_0x4dc9e9)=>{const _0x483c4a=a452_0x4a4c2c,_0x58f9b6=_0x241639['body'];try{switch(_0x58f9b6[_0x483c4a(0x12d)]){case _0x483c4a(0x13d):const _0x19990b=_0x58f9b6[_0x483c4a(0x10e)][_0x483c4a(0x105)];await(0x0,PaymentGatewayServices_1['processInvoicePaid'])(_0x19990b[_0x483c4a(0x120)]['invoiceId']);break;case _0x483c4a(0x122):const _0x29270c=_0x58f9b6[_0x483c4a(0x10e)][_0x483c4a(0x105)];logger_1['logger'][_0x483c4a(0x123)]({'failedIntent':_0x29270c},_0x483c4a(0x10d));break;default:logger_1['logger'][_0x483c4a(0x117)]({'event':_0x58f9b6},_0x483c4a(0x10b));}return _0x4dc9e9[_0x483c4a(0x138)](0xc8)[_0x483c4a(0x139)]({'received':!![]});}catch(_0xfbcc97){return logger_1[_0x483c4a(0x11f)][_0x483c4a(0x115)]({'error':_0xfbcc97},_0x483c4a(0x12c)),_0x4dc9e9[_0x483c4a(0x138)](0x190)[_0x483c4a(0x139)]({'error':_0x483c4a(0x104)});}};exports[a452_0x4a4c2c(0x110)]=stripeWebhookHandler;const stripeCreateSubscription=async(_0x5ee86c,_0x2ca9c7)=>{const _0xdea135=a452_0x4a4c2c,{price:_0x476ebf,invoiceId:_0x3e2b85}=_0x5ee86c[_0xdea135(0x136)];try{const _0x192794=await stripe[_0xdea135(0x11b)][_0xdea135(0x12e)]({'amount':Math[_0xdea135(0x113)](parseFloat(_0x476ebf)*0x64),'currency':_0xdea135(0x109),'metadata':{'invoiceId':_0x3e2b85}});return await Invoices_1['default'][_0xdea135(0x10a)]({'stripePaymentIntentId':_0x192794['id']},{'where':{'id':_0x3e2b85}}),_0x2ca9c7[_0xdea135(0x139)]({'clientSecret':_0x192794['client_secret'],'status':_0xdea135(0x12f)});}catch(_0x4ef337){logger_1[_0xdea135(0x11f)]['error']({'error':_0x4ef337},_0xdea135(0x100));throw new AppError_1['default']('Failed\x20to\x20create\x20subscription.',0x190);}};function a452_0x2b10(){const _0x5c12f3=['stripe','warn','(((.+)+)+)+$','succeeded','Failed\x20to\x20check\x20payment\x20status.','paymentIntents','3188080zjCyOB','1026786GsUofr','webhookEndpoints','logger','metadata','1023528BaQaOU','payment_intent.payment_failed','info','__importDefault','__esModule','_paymentGateway','default','2935596vGfMBG','toString','2430020YbZylc','constructor','Error\x20handling\x20webhook\x20event.','type','create','success','Invoice\x20not\x20found\x20or\x20missing\x20Stripe\x20PaymentIntent\x20ID.','apply','/subscription/aa/webhook','stripeCreateSubscription','retrieve','2022-11-15','body','2909968uRNMtu','status','json','findByPk','stripeInitialize:\x20not\x20configured\x20for\x20Stripe.','BACKEND_URL','payment_intent.succeeded','65039tOdlSQ','Failed\x20to\x20create\x20subscription.','stripeInitialize','10LPKWzN','stripePaymentIntentId','Webhook\x20handler\x20failed.','object','Failed\x20to\x20create\x20webhook.','stripeInitialize:\x20only\x20SSL\x20webhooks\x20are\x20supported','../../models/Invoices','usd','update','Unhandled\x20event\x20type.','search','Payment\x20failed.','data','env','stripeWebhookHandler','./PaymentGatewayServices','startsWith','round','processInvoicePaid','error'];a452_0x2b10=function(){return _0x5c12f3;};return a452_0x2b10();}exports['stripeCreateSubscription']=stripeCreateSubscription;const stripeCheckStatus=async _0x3f4642=>{const _0x37561d=a452_0x4a4c2c;try{const _0x404079=await Invoices_1[_0x37561d(0x127)][_0x37561d(0x13a)](_0x3f4642);if(!_0x404079||!_0x404079[_0x37561d(0x103)])return logger_1[_0x37561d(0x11f)][_0x37561d(0x115)](_0x37561d(0x130)),![];const _0x3abf2e=await stripe[_0x37561d(0x11b)][_0x37561d(0x134)](_0x404079[_0x37561d(0x103)]);if(_0x3abf2e[_0x37561d(0x138)]===_0x37561d(0x119))return await(0x0,PaymentGatewayServices_1[_0x37561d(0x114)])(_0x404079),!![];return![];}catch(_0x15da10){return logger_1[_0x37561d(0x11f)][_0x37561d(0x115)]({'error':_0x15da10},_0x37561d(0x11a)),![];}};exports['stripeCheckStatus']=stripeCheckStatus;