const a243_0xf03f4b=a243_0x144e;(function(_0x1b0ba8,_0x4baf78){const _0xaec849=a243_0x144e,_0x176595=_0x1b0ba8();while(!![]){try{const _0x1dd060=parseInt(_0xaec849(0x96))/0x1*(-parseInt(_0xaec849(0x8d))/0x2)+-parseInt(_0xaec849(0x7b))/0x3+-parseInt(_0xaec849(0x86))/0x4+parseInt(_0xaec849(0x98))/0x5*(parseInt(_0xaec849(0x8c))/0x6)+parseInt(_0xaec849(0x80))/0x7+-parseInt(_0xaec849(0x93))/0x8+parseInt(_0xaec849(0x7c))/0x9;if(_0x1dd060===_0x4baf78)break;else _0x176595['push'](_0x176595['shift']());}catch(_0xcba7f1){_0x176595['push'](_0x176595['shift']());}}}(a243_0x31f5,0x8af9d));const a243_0x4ada43=(function(){let _0x29d576=!![];return function(_0x471fbb,_0x116e3d){const _0x3ae081=_0x29d576?function(){const _0x9c26a0=a243_0x144e;if(_0x116e3d){const _0x2feee9=_0x116e3d[_0x9c26a0(0x91)](_0x471fbb,arguments);return _0x116e3d=null,_0x2feee9;}}:function(){};return _0x29d576=![],_0x3ae081;};}()),a243_0x55e7e5=a243_0x4ada43(this,function(){const _0x2fbcde=a243_0x144e;return a243_0x55e7e5[_0x2fbcde(0x92)]()[_0x2fbcde(0x87)]('(((.+)+)+)+$')['toString']()[_0x2fbcde(0x7e)](a243_0x55e7e5)[_0x2fbcde(0x87)]('(((.+)+)+)+$');});a243_0x55e7e5();'use strict';function a243_0x144e(_0x264d7b,_0x31ad25){const _0x4d12fe=a243_0x31f5();return a243_0x144e=function(_0x55e7e5,_0x4ada43){_0x55e7e5=_0x55e7e5-0x7b;let _0x31f508=_0x4d12fe[_0x55e7e5];return _0x31f508;},a243_0x144e(_0x264d7b,_0x31ad25);}var __importDefault=this&&this[a243_0xf03f4b(0x8f)]||function(_0x387120){return _0x387120&&_0x387120['__esModule']?_0x387120:{'default':_0x387120};};Object[a243_0xf03f4b(0x81)](exports,a243_0xf03f4b(0x94),{'value':!![]}),exports[a243_0xf03f4b(0x82)]=void 0x0;const nodemailer_1=__importDefault(require('nodemailer')),Setting_1=__importDefault(require(a243_0xf03f4b(0x85))),companyId=0x1;async function loadSmtpSettings(_0x57a80b){const _0x38a424=a243_0xf03f4b,[_0x5039e5,_0x140509,_0x1ad51c,_0x49e43b]=await Promise[_0x38a424(0x83)]([Setting_1['default'][_0x38a424(0x95)]({'where':{'companyId':_0x57a80b,'key':_0x38a424(0x97)}}),Setting_1[_0x38a424(0x8e)][_0x38a424(0x95)]({'where':{'companyId':_0x57a80b,'key':_0x38a424(0x88)}}),Setting_1['default'][_0x38a424(0x95)]({'where':{'companyId':_0x57a80b,'key':_0x38a424(0x7f)}}),Setting_1[_0x38a424(0x8e)]['findOne']({'where':{'companyId':_0x57a80b,'key':_0x38a424(0x8b)}})]);return{'urlSmtp':_0x5039e5?.[_0x38a424(0x89)],'userSmtp':_0x140509?.['value'],'passwordSmtp':_0x1ad51c?.[_0x38a424(0x89)],'portSmtp':_0x49e43b?.[_0x38a424(0x89)]};}async function SendMail(_0x294543){const _0xd520fe=a243_0xf03f4b,{urlSmtp:_0xf7867f,userSmtp:_0xb0b068,passwordSmtp:_0x1c05d8,portSmtp:_0x4e0c7}=await loadSmtpSettings(companyId),_0x56eb07=nodemailer_1[_0xd520fe(0x8e)][_0xd520fe(0x90)]({'host':_0xf7867f,'port':Number(_0x4e0c7),'secure':![],'auth':{'user':_0xb0b068,'pass':_0x1c05d8}});let _0x4ea0f9=_0x56eb07['sendMail']({'from':_0xb0b068,'to':_0x294543['to'],'subject':_0x294543[_0xd520fe(0x8a)],'text':_0x294543[_0xd520fe(0x99)],'html':_0x294543['html']||_0x294543[_0xd520fe(0x99)]});console[_0xd520fe(0x7d)](_0xd520fe(0x84),_0x4ea0f9);}function a243_0x31f5(){const _0x42ebe2=['__importDefault','createTransport','apply','toString','5652440DwiZfm','__esModule','findOne','5AvcxnN','smtpauth','5dRuRVg','text','825828pEtfuk','6337260XSoPrj','log','constructor','clientsecretsmtpauth','3705751DQFgop','defineProperty','SendMail','all','Message\x20sent:\x20%s','../models/Setting','1019628wKXCvp','search','usersmtpauth','value','subject','smtpport','4724250oNOCQK','85970LQrNZm','default'];a243_0x31f5=function(){return _0x42ebe2;};return a243_0x31f5();}exports[a243_0xf03f4b(0x82)]=SendMail;