const a502_0x4953eb=a502_0x2a0d;(function(_0x29eb33,_0x1fbdae){const _0x31756c=a502_0x2a0d,_0x54108c=_0x29eb33();while(!![]){try{const _0x4a5a99=-parseInt(_0x31756c(0xab))/0x1*(-parseInt(_0x31756c(0xb1))/0x2)+-parseInt(_0x31756c(0xa9))/0x3*(-parseInt(_0x31756c(0x9b))/0x4)+-parseInt(_0x31756c(0xaf))/0x5+parseInt(_0x31756c(0xa7))/0x6+parseInt(_0x31756c(0x9f))/0x7+-parseInt(_0x31756c(0xaa))/0x8*(-parseInt(_0x31756c(0xa4))/0x9)+-parseInt(_0x31756c(0xa5))/0xa*(parseInt(_0x31756c(0xa0))/0xb);if(_0x4a5a99===_0x1fbdae)break;else _0x54108c['push'](_0x54108c['shift']());}catch(_0x4b8de0){_0x54108c['push'](_0x54108c['shift']());}}}(a502_0x1ba0,0x30d03));const a502_0x435dc3=(function(){let _0x21419b=!![];return function(_0x2cfc5d,_0x32eb00){const _0x5db337=_0x21419b?function(){const _0x3c325f=a502_0x2a0d;if(_0x32eb00){const _0x336f2e=_0x32eb00[_0x3c325f(0xb0)](_0x2cfc5d,arguments);return _0x32eb00=null,_0x336f2e;}}:function(){};return _0x21419b=![],_0x5db337;};}()),a502_0xc79c0c=a502_0x435dc3(this,function(){const _0xeb3453=a502_0x2a0d;return a502_0xc79c0c[_0xeb3453(0x9c)]()[_0xeb3453(0xb2)]('(((.+)+)+)+$')['toString']()['constructor'](a502_0xc79c0c)[_0xeb3453(0xb2)](_0xeb3453(0xa8));});function a502_0x2a0d(_0xbbb518,_0x5cf444){const _0x4fb296=a502_0x1ba0();return a502_0x2a0d=function(_0xc79c0c,_0x435dc3){_0xc79c0c=_0xc79c0c-0x9b;let _0x1ba087=_0x4fb296[_0xc79c0c];return _0x1ba087;},a502_0x2a0d(_0xbbb518,_0x5cf444);}a502_0xc79c0c();'use strict';var __importDefault=this&&this[a502_0x4953eb(0xa3)]||function(_0x23be33){const _0x2874ec=a502_0x4953eb;return _0x23be33&&_0x23be33[_0x2874ec(0xae)]?_0x23be33:{'default':_0x23be33};};function a502_0x1ba0(){const _0x156ab6=['2679859vIYBBv','77kDvtic','../../errors/AppError','../../models/Setting','__importDefault','63RWMkcX','786820cFQYZS','companyId','665268KsLjUF','(((.+)+)+)+$','393KECYLT','87336uKehQH','44XwrVsR','default','update','__esModule','1308610QmPZzX','apply','8392cNGuef','search','7868VopCgC','toString','ERR_NO_SETTING_FOUND','findOrCreate'];a502_0x1ba0=function(){return _0x156ab6;};return a502_0x1ba0();}Object['defineProperty'](exports,'__esModule',{'value':!![]});const AppError_1=__importDefault(require(a502_0x4953eb(0xa1))),Setting_1=__importDefault(require(a502_0x4953eb(0xa2))),UpdateSettingService=async({key:_0xa2a0d5,value:_0x25a30c,companyId:_0x5904ce})=>{const _0x2d86bb=a502_0x4953eb,[_0x38da52]=await Setting_1[_0x2d86bb(0xac)][_0x2d86bb(0x9e)]({'where':{'key':_0xa2a0d5,'companyId':_0x5904ce},'defaults':{'key':_0xa2a0d5,'value':_0x25a30c,'companyId':_0x5904ce}});if(_0x38da52!=null&&_0x38da52?.[_0x2d86bb(0xa6)]!==_0x5904ce)throw new AppError_1[(_0x2d86bb(0xac))]('Não\x20é\x20possível\x20consultar\x20registros\x20de\x20outra\x20empresa');if(!_0x38da52)throw new AppError_1[(_0x2d86bb(0xac))](_0x2d86bb(0x9d),0x194);return await _0x38da52[_0x2d86bb(0xad)]({'value':_0x25a30c}),_0x38da52;};exports[a502_0x4953eb(0xac)]=UpdateSettingService;