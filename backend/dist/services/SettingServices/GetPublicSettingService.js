function a498_0xcc94(){const _0x3b80b1=['appName','boxRightDark','drawerIconColorLight','4TIqhVG','728814oCEFBj','key','findOne','secondaryColorDark','chatlistDark','2482805NgJCsK','boxLeftLight','default','signupUrlImage','unsplashKey','(((.+)+)+)+$','drawerIconColorDark','toString','__esModule','27JGFuxV','terms','10VoYPnl','appLogoDark','apply','2682711GoVyhs','findAll','44219NZzNTu','primaryColorLight','272pIutvd','15094mXeLOs','search','boxRightLight','84tDpCNe','85ntpBQK','4354867dPSeBs','defineProperty','appLogoLight','value','73122fEQAuU','chatlistLight'];a498_0xcc94=function(){return _0x3b80b1;};return a498_0xcc94();}const a498_0x424679=a498_0xc4eb;(function(_0x3d5d53,_0x29f3c1){const _0x74bc85=a498_0xc4eb,_0x500486=_0x3d5d53();while(!![]){try{const _0x53af4a=-parseInt(_0x74bc85(0x182))/0x1*(parseInt(_0x74bc85(0x165))/0x2)+parseInt(_0x74bc85(0x174))/0x3*(-parseInt(_0x74bc85(0x173))/0x4)+-parseInt(_0x74bc85(0x169))/0x5*(parseInt(_0x74bc85(0x16e))/0x6)+-parseInt(_0x74bc85(0x189))/0x7*(-parseInt(_0x74bc85(0x18b))/0x8)+-parseInt(_0x74bc85(0x187))/0x9+-parseInt(_0x74bc85(0x184))/0xa*(parseInt(_0x74bc85(0x16a))/0xb)+-parseInt(_0x74bc85(0x168))/0xc*(-parseInt(_0x74bc85(0x179))/0xd);if(_0x53af4a===_0x29f3c1)break;else _0x500486['push'](_0x500486['shift']());}catch(_0x502294){_0x500486['push'](_0x500486['shift']());}}}(a498_0xcc94,0x31c23));const a498_0x20645c=(function(){let _0x202b02=!![];return function(_0x230087,_0x3e4559){const _0x924f8e=_0x202b02?function(){const _0x43648f=a498_0xc4eb;if(_0x3e4559){const _0x165ba2=_0x3e4559[_0x43648f(0x186)](_0x230087,arguments);return _0x3e4559=null,_0x165ba2;}}:function(){};return _0x202b02=![],_0x924f8e;};}()),a498_0x3a2c4d=a498_0x20645c(this,function(){const _0x2e59fb=a498_0xc4eb;return a498_0x3a2c4d[_0x2e59fb(0x180)]()[_0x2e59fb(0x166)](_0x2e59fb(0x17e))[_0x2e59fb(0x180)]()['constructor'](a498_0x3a2c4d)[_0x2e59fb(0x166)](_0x2e59fb(0x17e));});a498_0x3a2c4d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x47967f){return _0x47967f&&_0x47967f['__esModule']?_0x47967f:{'default':_0x47967f};};Object[a498_0x424679(0x16b)](exports,a498_0x424679(0x181),{'value':!![]}),exports['GetAllPublicSettingsService']=void 0x0;const Setting_1=__importDefault(require('../../models/Setting')),publicSettingsKeys=[a498_0x424679(0x18a),'secondaryColorLight','primaryColorDark',a498_0x424679(0x177),a498_0x424679(0x16c),a498_0x424679(0x185),'appLogoFavicon',a498_0x424679(0x170),a498_0x424679(0x16f),a498_0x424679(0x178),a498_0x424679(0x167),a498_0x424679(0x171),a498_0x424679(0x17a),'boxLeftDark','allowSignup','privacy',a498_0x424679(0x183),'trialExpiration',a498_0x424679(0x172),a498_0x424679(0x17f),a498_0x424679(0x17d),a498_0x424679(0x17c),'customUrl'],GetAllPublicSettingsService=async _0xbd8e37=>{const _0x5bf6a=a498_0x424679;(!_0xbd8e37||_0xbd8e37<=0x0)&&(_0xbd8e37=0x1);const _0x42f679=await Setting_1[_0x5bf6a(0x17b)][_0x5bf6a(0x188)]({'where':{'key':publicSettingsKeys,'companyId':_0xbd8e37},'attributes':[_0x5bf6a(0x175),_0x5bf6a(0x16d)]});return _0x42f679;};function a498_0xc4eb(_0x23f71c,_0x101df4){const _0x4d0a69=a498_0xcc94();return a498_0xc4eb=function(_0x3a2c4d,_0x20645c){_0x3a2c4d=_0x3a2c4d-0x165;let _0xcc945f=_0x4d0a69[_0x3a2c4d];return _0xcc945f;},a498_0xc4eb(_0x23f71c,_0x101df4);}exports['GetAllPublicSettingsService']=GetAllPublicSettingsService;const GetPublicSettingService=async({key:_0x2eebd7,companyId:_0x4fbf60})=>{const _0x3b8e2e=a498_0x424679;if(!publicSettingsKeys['includes'](_0x2eebd7))return'Not\x20allowed';if(_0x4fbf60){const _0x1e2596=await Setting_1[_0x3b8e2e(0x17b)][_0x3b8e2e(0x176)]({'where':{'companyId':_0x4fbf60,'key':_0x2eebd7},'attributes':[_0x3b8e2e(0x175),_0x3b8e2e(0x16d)]});if(_0x1e2596?.[_0x3b8e2e(0x16d)])return _0x1e2596[_0x3b8e2e(0x16d)];}const _0x863457=await Setting_1[_0x3b8e2e(0x17b)][_0x3b8e2e(0x176)]({'where':{'companyId':0x1,'key':_0x2eebd7},'attributes':['key',_0x3b8e2e(0x16d)]});return _0x863457?.['value'];};exports[a498_0x424679(0x17b)]=GetPublicSettingService;