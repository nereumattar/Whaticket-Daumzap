const a245_0x3f41bc=a245_0x2c9e;(function(_0x5ee06b,_0x79a76f){const _0x263610=a245_0x2c9e,_0x3aee1b=_0x5ee06b();while(!![]){try{const _0x5af907=-parseInt(_0x263610(0x1d9))/0x1+-parseInt(_0x263610(0x1ee))/0x2+-parseInt(_0x263610(0x1e0))/0x3+parseInt(_0x263610(0x1d3))/0x4+-parseInt(_0x263610(0x1d4))/0x5*(parseInt(_0x263610(0x1d7))/0x6)+-parseInt(_0x263610(0x1d1))/0x7*(-parseInt(_0x263610(0x1e7))/0x8)+parseInt(_0x263610(0x1df))/0x9;if(_0x5af907===_0x79a76f)break;else _0x3aee1b['push'](_0x3aee1b['shift']());}catch(_0x5cf5b5){_0x3aee1b['push'](_0x3aee1b['shift']());}}}(a245_0x55f6,0xe9a6f));const a245_0x472ce0=(function(){let _0x57cc9b=!![];return function(_0x3af5ff,_0x4644a8){const _0x512853=_0x57cc9b?function(){const _0x486000=a245_0x2c9e;if(_0x4644a8){const _0x3b5ae6=_0x4644a8[_0x486000(0x1e3)](_0x3af5ff,arguments);return _0x4644a8=null,_0x3b5ae6;}}:function(){};return _0x57cc9b=![],_0x512853;};}()),a245_0x20d12c=a245_0x472ce0(this,function(){const _0x5ebc17=a245_0x2c9e;return a245_0x20d12c[_0x5ebc17(0x1ef)]()['search'](_0x5ebc17(0x1d8))['toString']()[_0x5ebc17(0x1e6)](a245_0x20d12c)[_0x5ebc17(0x1e2)](_0x5ebc17(0x1d8));});a245_0x20d12c();function a245_0x2c9e(_0x550f17,_0xa91bfd){const _0x4a140a=a245_0x55f6();return a245_0x2c9e=function(_0x20d12c,_0x472ce0){_0x20d12c=_0x20d12c-0x1d1;let _0x55f6db=_0x4a140a[_0x20d12c];return _0x55f6db;},a245_0x2c9e(_0x550f17,_0xa91bfd);}'use strict';var __importDefault=this&&this[a245_0x3f41bc(0x1ed)]||function(_0x56f0c3){return _0x56f0c3&&_0x56f0c3['__esModule']?_0x56f0c3:{'default':_0x56f0c3};};Object[a245_0x3f41bc(0x1e5)](exports,a245_0x3f41bc(0x1d5),{'value':!![]}),exports[a245_0x3f41bc(0x1dc)]=void 0x0;const nodemailer_1=__importDefault(require(a245_0x3f41bc(0x1ec))),Setting_1=__importDefault(require(a245_0x3f41bc(0x1d2))),companyId=0x1;async function loadSmtpSettings(_0x436960){const _0x2bb662=a245_0x3f41bc,[_0x1cc9bc,_0x4339d2,_0x228201,_0x2eca8f]=await Promise[_0x2bb662(0x1e4)]([Setting_1[_0x2bb662(0x1ea)]['findOne']({'where':{'companyId':_0x436960,'key':'smtpauth'}}),Setting_1[_0x2bb662(0x1ea)]['findOne']({'where':{'companyId':_0x436960,'key':'usersmtpauth'}}),Setting_1['default'][_0x2bb662(0x1eb)]({'where':{'companyId':_0x436960,'key':_0x2bb662(0x1dd)}}),Setting_1['default'][_0x2bb662(0x1eb)]({'where':{'companyId':_0x436960,'key':'smtpport'}})]);return{'urlSmtp':_0x1cc9bc?.[_0x2bb662(0x1de)],'userSmtp':_0x4339d2?.[_0x2bb662(0x1de)],'passwordSmtp':_0x228201?.[_0x2bb662(0x1de)],'portSmtp':_0x2eca8f?.[_0x2bb662(0x1de)]};}async function SendMail(_0x3aa27d){const _0x33539a=a245_0x3f41bc,{urlSmtp:_0x1bff5f,userSmtp:_0x55fbcf,passwordSmtp:_0x8107a6,portSmtp:_0x38fc8a}=await loadSmtpSettings(companyId),_0x9ff74f=nodemailer_1[_0x33539a(0x1ea)][_0x33539a(0x1e9)]({'host':_0x1bff5f,'port':Number(_0x38fc8a),'secure':![],'auth':{'user':_0x55fbcf,'pass':_0x8107a6}});let _0x430837=_0x9ff74f[_0x33539a(0x1d6)]({'from':_0x55fbcf,'to':_0x3aa27d['to'],'subject':_0x3aa27d[_0x33539a(0x1da)],'text':_0x3aa27d[_0x33539a(0x1e1)],'html':_0x3aa27d['html']||_0x3aa27d[_0x33539a(0x1e1)]});console[_0x33539a(0x1e8)](_0x33539a(0x1db),_0x430837);}function a245_0x55f6(){const _0x31e562=['2238720rFdZqS','163985mqPtWY','__esModule','sendMail','12iBWKFu','(((.+)+)+)+$','1814185qJKmjU','subject','Message\x20sent:\x20%s','SendMail','clientsecretsmtpauth','value','27876240CXhUvp','4474545XltZQV','text','search','apply','all','defineProperty','constructor','398120iNbyIb','log','createTransport','default','findOne','nodemailer','__importDefault','1344724vmjivp','toString','189kMBfVR','../models/Setting'];a245_0x55f6=function(){return _0x31e562;};return a245_0x55f6();}exports[a245_0x3f41bc(0x1dc)]=SendMail;