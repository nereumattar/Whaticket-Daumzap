const a505_0x2bc798=a505_0xb2c5;(function(_0x3c2a66,_0x40ab5d){const _0x20cb57=a505_0xb2c5,_0x3d1cdc=_0x3c2a66();while(!![]){try{const _0x169e26=parseInt(_0x20cb57(0x8d))/0x1*(parseInt(_0x20cb57(0x88))/0x2)+-parseInt(_0x20cb57(0x84))/0x3*(parseInt(_0x20cb57(0x8b))/0x4)+-parseInt(_0x20cb57(0x80))/0x5+-parseInt(_0x20cb57(0x7e))/0x6*(parseInt(_0x20cb57(0x7d))/0x7)+-parseInt(_0x20cb57(0x83))/0x8+parseInt(_0x20cb57(0x7f))/0x9+-parseInt(_0x20cb57(0x8a))/0xa*(-parseInt(_0x20cb57(0x82))/0xb);if(_0x169e26===_0x40ab5d)break;else _0x3d1cdc['push'](_0x3d1cdc['shift']());}catch(_0x43aba7){_0x3d1cdc['push'](_0x3d1cdc['shift']());}}}(a505_0xa536,0xe1bda));function a505_0xb2c5(_0x1e11bc,_0x1abf1a){const _0x2aa45a=a505_0xa536();return a505_0xb2c5=function(_0x45513b,_0x42331f){_0x45513b=_0x45513b-0x7c;let _0xa5360d=_0x2aa45a[_0x45513b];return _0xa5360d;},a505_0xb2c5(_0x1e11bc,_0x1abf1a);}const a505_0x42331f=(function(){let _0x408615=!![];return function(_0x3a02f9,_0x2af6cb){const _0x2bb11d=_0x408615?function(){const _0x453985=a505_0xb2c5;if(_0x2af6cb){const _0xa6e9d5=_0x2af6cb[_0x453985(0x90)](_0x3a02f9,arguments);return _0x2af6cb=null,_0xa6e9d5;}}:function(){};return _0x408615=![],_0x2bb11d;};}()),a505_0x45513b=a505_0x42331f(this,function(){const _0x23f75a=a505_0xb2c5;return a505_0x45513b[_0x23f75a(0x95)]()[_0x23f75a(0x89)](_0x23f75a(0x8c))[_0x23f75a(0x95)]()[_0x23f75a(0x93)](a505_0x45513b)[_0x23f75a(0x89)]('(((.+)+)+)+$');});function a505_0xa536(){const _0x40f101=['161tJgNwn','293922CpJEKz','8401590RNAfOg','3302890FUAfcN','defineProperty','121NTbSHW','7587464xBTlLy','41928fXlTiD','default','__importDefault','__esModule','31078hRkVuk','search','2869390abgpry','412ZjLYrk','(((.+)+)+)+$','65zdnJYN','update','companyId','apply','../../models/Setting','Não\x20é\x20possível\x20consultar\x20registros\x20de\x20outra\x20empresa','constructor','../../errors/AppError','toString','findOrCreate'];a505_0xa536=function(){return _0x40f101;};return a505_0xa536();}a505_0x45513b();'use strict';var __importDefault=this&&this[a505_0x2bc798(0x86)]||function(_0x3d30e3){const _0x257d84=a505_0x2bc798;return _0x3d30e3&&_0x3d30e3[_0x257d84(0x87)]?_0x3d30e3:{'default':_0x3d30e3};};Object[a505_0x2bc798(0x81)](exports,a505_0x2bc798(0x87),{'value':!![]});const AppError_1=__importDefault(require(a505_0x2bc798(0x94))),Setting_1=__importDefault(require(a505_0x2bc798(0x91))),UpdateSettingService=async({key:_0x682b4b,value:_0x5d61b2,companyId:_0x411426})=>{const _0x108424=a505_0x2bc798,[_0x113925]=await Setting_1[_0x108424(0x85)][_0x108424(0x7c)]({'where':{'key':_0x682b4b,'companyId':_0x411426},'defaults':{'key':_0x682b4b,'value':_0x5d61b2,'companyId':_0x411426}});if(_0x113925!=null&&_0x113925?.[_0x108424(0x8f)]!==_0x411426)throw new AppError_1[(_0x108424(0x85))](_0x108424(0x92));if(!_0x113925)throw new AppError_1[(_0x108424(0x85))]('ERR_NO_SETTING_FOUND',0x194);return await _0x113925[_0x108424(0x8e)]({'value':_0x5d61b2}),_0x113925;};exports['default']=UpdateSettingService;