const a491_0x11ca84=a491_0x2aea;(function(_0x3049dc,_0x4d4a29){const _0x3428ba=a491_0x2aea,_0x28f9b9=_0x3049dc();while(!![]){try{const _0x10811a=parseInt(_0x3428ba(0x147))/0x1+-parseInt(_0x3428ba(0x14a))/0x2*(-parseInt(_0x3428ba(0x139))/0x3)+parseInt(_0x3428ba(0x15e))/0x4*(parseInt(_0x3428ba(0x141))/0x5)+-parseInt(_0x3428ba(0x13e))/0x6+-parseInt(_0x3428ba(0x142))/0x7+-parseInt(_0x3428ba(0x14f))/0x8+parseInt(_0x3428ba(0x154))/0x9*(parseInt(_0x3428ba(0x150))/0xa);if(_0x10811a===_0x4d4a29)break;else _0x28f9b9['push'](_0x28f9b9['shift']());}catch(_0x13a508){_0x28f9b9['push'](_0x28f9b9['shift']());}}}(a491_0x4e6e,0xe3c8b));const a491_0x5a6a68=(function(){let _0xffdd98=!![];return function(_0x5762dc,_0x40d7e5){const _0x293606=_0xffdd98?function(){const _0xc35ab8=a491_0x2aea;if(_0x40d7e5){const _0x1ce1ee=_0x40d7e5[_0xc35ab8(0x15a)](_0x5762dc,arguments);return _0x40d7e5=null,_0x1ce1ee;}}:function(){};return _0xffdd98=![],_0x293606;};}()),a491_0x24e714=a491_0x5a6a68(this,function(){const _0x41d3af=a491_0x2aea;return a491_0x24e714['toString']()['search'](_0x41d3af(0x13a))[_0x41d3af(0x155)]()['constructor'](a491_0x24e714)[_0x41d3af(0x138)]('(((.+)+)+)+$');});a491_0x24e714();'use strict';var __importDefault=this&&this[a491_0x11ca84(0x156)]||function(_0x2b530b){const _0x3b7cf6=a491_0x11ca84;return _0x2b530b&&_0x2b530b[_0x3b7cf6(0x14c)]?_0x2b530b:{'default':_0x2b530b};};function a491_0x2aea(_0xd826d0,_0x426c28){const _0x214445=a491_0x4e6e();return a491_0x2aea=function(_0x24e714,_0x5a6a68){_0x24e714=_0x24e714-0x135;let _0x4e6e6=_0x214445[_0x24e714];return _0x4e6e6;},a491_0x2aea(_0xd826d0,_0x426c28);}function a491_0x4e6e(){const _0x335706=['Erro\x20interno\x20do\x20servidor','SELECT\x20*\x20FROM\x20\x22Users\x22\x20WHERE\x20email\x20=\x20\x27','sequelize','search','11739MGxqsW','(((.+)+)+)+$','default','defineProperty','createTransport','7381692HGARZP','Email\x20ou\x20token\x20não\x20encontrado','\x27\x20AND\x20\x22resetPassword\x22\x20=\x20\x27','759545OKnbQn','12958540fNwvPv','Olá,\x0a\x0aSua\x20senha\x20foi\x20alterada\x20com\x20sucesso.\x0a\x0aSe\x20você\x20não\x20realizou\x20essa\x20alteração,\x20entre\x20em\x20contato\x20conosco\x20imediatamente.\x0a\x0aAtenciosamente','nodemailer','../../models/Setting','length','487166EZUFFZ','clientsecretsmtpauth','../../database','98XyxWPq','QueryTypes','__esModule','bcryptjs','Erro\x20ao\x20redefinir\x20senha:','12299680ewQrKV','5083590Cafhst','SELECT','Senha\x20Alterada\x20com\x20Sucesso','all','54iHAIOC','toString','__importDefault','sendMail','smtpport','query','apply','\x27\x20AND\x20\x22resetPassword\x22\x20!=\x20\x27\x27','value','usersmtpauth','48FsIoRN','\x27,\x20\x22resetPassword\x22\x20=\x20\x27\x27\x20WHERE\x20email=\x20\x27','findOne','smtpauth'];a491_0x4e6e=function(){return _0x335706;};return a491_0x4e6e();}Object[a491_0x11ca84(0x13c)](exports,'__esModule',{'value':!![]});const sequelize_1=__importDefault(require(a491_0x11ca84(0x137))),database_1=__importDefault(require(a491_0x11ca84(0x149))),nodemailer_1=__importDefault(require(a491_0x11ca84(0x144))),Setting_1=__importDefault(require(a491_0x11ca84(0x145))),bcryptjs_1=require(a491_0x11ca84(0x14d)),ResetPassword=async(_0x3ccaf1,_0x38fd57,_0x4905c4)=>{const _0x5279c0=a491_0x11ca84;try{const {hasResult:_0x216188,data:_0x4b05cc}=await filterUser(_0x3ccaf1,_0x38fd57);if(!_0x216188)return{'status':0x194,'message':_0x5279c0(0x13f)};const _0x2596e3=await(0x0,bcryptjs_1['hash'])(_0x4905c4,0x8),{hasResults:_0x11e5bf,datas:_0x2f5609}=await insertHasPassword(_0x3ccaf1,_0x38fd57,_0x2596e3);if(!_0x11e5bf)return{'status':0x194,'message':'Token\x20não\x20encontrado\x20ou\x20inválido'};const [_0x347599,_0x53f5c9,_0x21e3db,_0x183de6]=await Promise[_0x5279c0(0x153)]([Setting_1[_0x5279c0(0x13b)][_0x5279c0(0x160)]({'where':{'key':_0x5279c0(0x161)}}),Setting_1[_0x5279c0(0x13b)][_0x5279c0(0x160)]({'where':{'key':_0x5279c0(0x15d)}}),Setting_1[_0x5279c0(0x13b)][_0x5279c0(0x160)]({'where':{'key':_0x5279c0(0x148)}}),Setting_1[_0x5279c0(0x13b)][_0x5279c0(0x160)]({'where':{'key':_0x5279c0(0x158)}})]),_0x2248d5=_0x347599?.[_0x5279c0(0x15c)],_0x4e046d=_0x53f5c9?.[_0x5279c0(0x15c)],_0x34d055=_0x21e3db?.[_0x5279c0(0x15c)],_0x574189=_0x4e046d,_0x15a525=_0x183de6?.[_0x5279c0(0x15c)];if(!_0x2248d5||!_0x4e046d||!_0x34d055||!_0x15a525)throw new Error('Configurações\x20SMTP\x20estão\x20incompletas');const _0xbc22bb=nodemailer_1['default'][_0x5279c0(0x13d)]({'host':_0x2248d5,'port':Number(_0x15a525),'secure':![],'auth':{'user':_0x4e046d,'pass':_0x34d055}}),_0x4c087b={'from':_0x574189,'to':_0x3ccaf1,'subject':_0x5279c0(0x152),'text':_0x5279c0(0x143)},_0x421b3f=await _0xbc22bb[_0x5279c0(0x157)](_0x4c087b);return _0x421b3f;}catch(_0x177905){return console['error'](_0x5279c0(0x14e),_0x177905),{'status':0x1f4,'message':_0x5279c0(0x135)};}},filterUser=async(_0x16b455,_0x29b819)=>{const _0x4cd0bf=a491_0x11ca84,_0x41d381=_0x4cd0bf(0x136)+_0x16b455+_0x4cd0bf(0x15b),_0x351665=await database_1['default'][_0x4cd0bf(0x159)](_0x41d381,{'type':sequelize_1['default'][_0x4cd0bf(0x14b)][_0x4cd0bf(0x151)]});return{'hasResult':_0x351665[_0x4cd0bf(0x146)]>0x0,'data':_0x351665};},insertHasPassword=async(_0x59e75a,_0x3fe2d1,_0x3f6c96)=>{const _0x55f803=a491_0x11ca84,_0x29331d=_0x55f803(0x136)+_0x59e75a+'\x27\x20AND\x20\x22resetPassword\x22\x20=\x20\x27'+_0x3fe2d1+'\x27',_0x400ff9=await database_1[_0x55f803(0x13b)][_0x55f803(0x159)](_0x29331d,{'type':sequelize_1[_0x55f803(0x13b)][_0x55f803(0x14b)][_0x55f803(0x151)]}),_0x597016='UPDATE\x20\x22Users\x22\x20SET\x20\x22passwordHash\x22=\x20\x27'+_0x3f6c96+_0x55f803(0x15f)+_0x59e75a+_0x55f803(0x140)+_0x3fe2d1+'\x27',_0x23e0e9=await database_1[_0x55f803(0x13b)][_0x55f803(0x159)](_0x597016,{'type':sequelize_1[_0x55f803(0x13b)][_0x55f803(0x14b)]['UPDATE']});return{'hasResults':_0x23e0e9[0x1]>0x0,'datas':_0x400ff9};};exports['default']=ResetPassword;