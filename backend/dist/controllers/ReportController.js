const a33_0x59a54=a33_0x2505;(function(_0x2b14b0,_0x2bc7e2){const _0x1dc538=a33_0x2505,_0x323e35=_0x2b14b0();while(!![]){try{const _0x2ba093=parseInt(_0x1dc538(0xf7))/0x1+-parseInt(_0x1dc538(0x11e))/0x2+parseInt(_0x1dc538(0x114))/0x3*(-parseInt(_0x1dc538(0xf9))/0x4)+parseInt(_0x1dc538(0xea))/0x5*(parseInt(_0x1dc538(0xf0))/0x6)+parseInt(_0x1dc538(0x101))/0x7*(parseInt(_0x1dc538(0xef))/0x8)+parseInt(_0x1dc538(0x115))/0x9*(-parseInt(_0x1dc538(0xfb))/0xa)+parseInt(_0x1dc538(0x10b))/0xb;if(_0x2ba093===_0x2bc7e2)break;else _0x323e35['push'](_0x323e35['shift']());}catch(_0x23ea74){_0x323e35['push'](_0x323e35['shift']());}}}(a33_0x22d0,0xee982));const a33_0x4dc11a=(function(){let _0x59287b=!![];return function(_0x2ce37d,_0x1c4a44){const _0x4a5850=_0x59287b?function(){const _0x23c0e3=a33_0x2505;if(_0x1c4a44){const _0x4e2018=_0x1c4a44[_0x23c0e3(0x11a)](_0x2ce37d,arguments);return _0x1c4a44=null,_0x4e2018;}}:function(){};return _0x59287b=![],_0x4a5850;};}()),a33_0x2c1dc0=a33_0x4dc11a(this,function(){const _0x4d6b39=a33_0x2505;return a33_0x2c1dc0[_0x4d6b39(0x121)]()[_0x4d6b39(0xe7)](_0x4d6b39(0xfd))[_0x4d6b39(0x121)]()[_0x4d6b39(0x113)](a33_0x2c1dc0)[_0x4d6b39(0xe7)](_0x4d6b39(0xfd));});a33_0x2c1dc0();function a33_0x22d0(){const _0x3bc312=['finishedAt','findOne','../models/User','status','join','1914386PxiBuz','json','22860DlOFsr','createdAt','11432390BAmnRn','defineProperty','(((.+)+)+)+$','../models/Tag','startedAt','add','7iSLohr','queue','default','../models/TicketTag','../models/Queue','push','queuedAt','profile','DESC','day','2214091MItwPB','body','toDate','user','name','minute','number','userId','constructor','591hWmkfo','9cSleFX','findAll','tag','subtract','__importDefault','apply','../models/TicketTraking','../models/Contact','ratingAt','2295236SoqOLA','sequelize','queueId','toString','between','search','N/A','../models/Whatsapp','5hHlYVL','contactId','__esModule','rated','isBetween','12586312qpXEvS','4230228dKUqiT','whatsapp'];a33_0x22d0=function(){return _0x3bc312;};return a33_0x22d0();}'use strict';var __importDefault=this&&this[a33_0x59a54(0x119)]||function(_0x2a0362){return _0x2a0362&&_0x2a0362['__esModule']?_0x2a0362:{'default':_0x2a0362};};Object[a33_0x59a54(0xfc)](exports,a33_0x59a54(0xec),{'value':!![]});function a33_0x2505(_0x3db13b,_0x529797){const _0x2cd07d=a33_0x22d0();return a33_0x2505=function(_0x2c1dc0,_0x4dc11a){_0x2c1dc0=_0x2c1dc0-0xe7;let _0x22d0b2=_0x2cd07d[_0x2c1dc0];return _0x22d0b2;},a33_0x2505(_0x3db13b,_0x529797);}const Ticket_1=__importDefault(require('../models/Ticket')),sequelize_1=require(a33_0x59a54(0x11f)),moment_1=__importDefault(require('moment/moment')),User_1=__importDefault(require(a33_0x59a54(0xf4))),Queue_1=__importDefault(require(a33_0x59a54(0x105))),TicketTag_1=__importDefault(require(a33_0x59a54(0x104))),Tag_1=__importDefault(require(a33_0x59a54(0xfe))),Whatsapp_1=__importDefault(require(a33_0x59a54(0xe9))),TicketTraking_1=__importDefault(require(a33_0x59a54(0x11b))),Contact_1=__importDefault(require(a33_0x59a54(0x11c))),ReportController={'tickets':async(_0x18a911,_0x15159b)=>{const _0x36455d=a33_0x59a54,{companyId:_0x5aecd4}=_0x18a911[_0x36455d(0x10e)];let {dateStart:_0x466d4a,dateEnd:_0xd58eda,status:_0x3ce6e1,queueId:_0x921a13}=_0x18a911[_0x36455d(0x10c)],_0x2010ce={'companyId':_0x5aecd4};_0x921a13&&(_0x2010ce[_0x36455d(0x120)]=_0x921a13);_0x3ce6e1&&(_0x2010ce[_0x36455d(0xf5)]=_0x3ce6e1);let _0x8cde84=await Ticket_1[_0x36455d(0x103)]['findAll']({'where':{..._0x2010ce,'createdAt':{[sequelize_1['Op'][_0x36455d(0x122)]]:[(0x0,moment_1[_0x36455d(0x103)])(_0x466d4a)['startOf'](_0x36455d(0x10a))[_0x36455d(0x10d)](),(0x0,moment_1[_0x36455d(0x103)])(_0xd58eda)['endOf'](_0x36455d(0x10a))[_0x36455d(0x10d)]()]}},'include':[{'model':User_1['default'],'as':_0x36455d(0x10e),'attributes':['id',_0x36455d(0x10f),_0x36455d(0x108)]},{'model':Queue_1[_0x36455d(0x103)],'as':_0x36455d(0x102),'attributes':['id',_0x36455d(0x10f)]},{'model':Whatsapp_1[_0x36455d(0x103)],'as':_0x36455d(0xf1),'attributes':['id','name']}],'attributes':['id',_0x36455d(0xfa),'status','queueId',_0x36455d(0x112),_0x36455d(0xeb)],'order':[['createdAt',_0x36455d(0x109)]]}),_0xa8eafb=[];for(let _0x3a36a3 of _0x8cde84){const _0x2d32f7=await TicketTag_1[_0x36455d(0x103)][_0x36455d(0x116)]({'attributes':['tagId'],'where':{'ticketId':_0x3a36a3['id']},'include':[{'model':Tag_1[_0x36455d(0x103)],'as':_0x36455d(0x117),'attributes':['id',_0x36455d(0x10f)]}]});var _0x7995d2=await TicketTraking_1[_0x36455d(0x103)][_0x36455d(0xf3)]({'where':{'ticketId':_0x3a36a3['id']},'attributes':[_0x36455d(0xff),_0x36455d(0x107),'ratingAt',_0x36455d(0xed),_0x36455d(0xfa),_0x36455d(0xf2)]});let _0x330deb=await Contact_1[_0x36455d(0x103)][_0x36455d(0xf3)]({'attributes':[_0x36455d(0xfa),_0x36455d(0x10f),_0x36455d(0x111)],'where':{'id':_0x3a36a3['contactId']}}),_0x349fd8=![];_0x330deb&&(_0x349fd8=(0x0,moment_1[_0x36455d(0x103)])(_0x330deb[_0x36455d(0xfa)])[_0x36455d(0xee)]((0x0,moment_1[_0x36455d(0x103)])(_0x3a36a3[_0x36455d(0xfa)])[_0x36455d(0x118)](0x1,'minute'),(0x0,moment_1['default'])(_0x3a36a3[_0x36455d(0xfa)])[_0x36455d(0x100)](0x1,_0x36455d(0x110)))),_0xa8eafb[_0x36455d(0x106)]({'id':_0x3a36a3['id'],'contactName':_0x330deb?.[_0x36455d(0x10f)]||_0x36455d(0xe8),'contactNumber':_0x330deb?.[_0x36455d(0x111)]||_0x36455d(0xe8),'createdAt':_0x3a36a3?.['createdAt'],'startedAt':_0x7995d2?.[_0x36455d(0xff)],'queuedAt':_0x7995d2?.['queuedAt'],'ratingAt':_0x7995d2?.[_0x36455d(0x11d)],'rated':_0x7995d2?.[_0x36455d(0xed)],'status':_0x3a36a3[_0x36455d(0xf5)],'user':_0x3a36a3[_0x36455d(0x10e)]?.[_0x36455d(0x10f)]||_0x36455d(0xe8),'userId':_0x3a36a3['userId'],'queue':_0x3a36a3[_0x36455d(0x102)]?.[_0x36455d(0x10f)]||_0x36455d(0xe8),'queueId':_0x3a36a3[_0x36455d(0x120)],'connection':_0x3a36a3['whatsapp']['name'],'connectionId':_0x3a36a3['whatsapp']['id'],'firstSentMessageAt':_0x7995d2?.[_0x36455d(0xfa)],'resolvedAt':_0x7995d2?.[_0x36455d(0xf2)],'isNewContact':_0x349fd8,'tags':_0x2d32f7['map'](_0x4c2274=>_0x4c2274[_0x36455d(0x117)][_0x36455d(0x10f)])[_0x36455d(0xf6)](',')});}return _0x15159b[_0x36455d(0xf8)](_0xa8eafb);}};exports[a33_0x59a54(0x103)]=ReportController;