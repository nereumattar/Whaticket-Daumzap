const a499_0x44716f=a499_0x53d8;function a499_0x53d8(_0x2ed31a,_0x2f2357){const _0x2db8d7=a499_0x51f0();return a499_0x53d8=function(_0x37fbe1,_0x2dff37){_0x37fbe1=_0x37fbe1-0x6c;let _0x51f097=_0x2db8d7[_0x37fbe1];return _0x51f097;},a499_0x53d8(_0x2ed31a,_0x2f2357);}(function(_0x3e12e6,_0x3f4e85){const _0x1e3d39=a499_0x53d8,_0x133e87=_0x3e12e6();while(!![]){try{const _0x33ecbe=-parseInt(_0x1e3d39(0x6c))/0x1+-parseInt(_0x1e3d39(0x8f))/0x2*(parseInt(_0x1e3d39(0x7c))/0x3)+-parseInt(_0x1e3d39(0x73))/0x4+parseInt(_0x1e3d39(0x6d))/0x5+-parseInt(_0x1e3d39(0x75))/0x6*(parseInt(_0x1e3d39(0x88))/0x7)+-parseInt(_0x1e3d39(0x95))/0x8+parseInt(_0x1e3d39(0x91))/0x9;if(_0x33ecbe===_0x3f4e85)break;else _0x133e87['push'](_0x133e87['shift']());}catch(_0x6284a){_0x133e87['push'](_0x133e87['shift']());}}}(a499_0x51f0,0x8a6c0));function a499_0x51f0(){const _0x451eb8=['(((.+)+)+)+$','allowSignup','customUrl','4301400HKSGky','appLogoFavicon','2082CZrBax','key','__esModule','drawerIconColorLight','boxRightDark','appLogoLight','unsplashKey','1533nvaxBq','search','secondaryColorDark','value','chatlistLight','GetAllPublicSettingsService','__importDefault','includes','findOne','appName','boxRightLight','../../models/Setting','20293nTXlQz','constructor','chatlistDark','privacy','toString','signupUrlImage','trialExpiration','284HnqJZk','defineProperty','28159416sVCCvd','apply','appLogoDark','secondaryColorLight','4927288tSDnWN','primaryColorLight','findAll','30320QHjDAF','1191240JhMQGK','boxLeftDark','default'];a499_0x51f0=function(){return _0x451eb8;};return a499_0x51f0();}const a499_0x2dff37=(function(){let _0x55bde9=!![];return function(_0x31bdd0,_0x44326b){const _0x29e1f5=_0x55bde9?function(){const _0x417aad=a499_0x53d8;if(_0x44326b){const _0x7148ee=_0x44326b[_0x417aad(0x92)](_0x31bdd0,arguments);return _0x44326b=null,_0x7148ee;}}:function(){};return _0x55bde9=![],_0x29e1f5;};}()),a499_0x37fbe1=a499_0x2dff37(this,function(){const _0x4e8c6e=a499_0x53d8;return a499_0x37fbe1['toString']()[_0x4e8c6e(0x7d)]('(((.+)+)+)+$')[_0x4e8c6e(0x8c)]()[_0x4e8c6e(0x89)](a499_0x37fbe1)['search'](_0x4e8c6e(0x70));});a499_0x37fbe1();'use strict';var __importDefault=this&&this[a499_0x44716f(0x82)]||function(_0x510134){const _0x4f0aaf=a499_0x44716f;return _0x510134&&_0x510134[_0x4f0aaf(0x77)]?_0x510134:{'default':_0x510134};};Object[a499_0x44716f(0x90)](exports,'__esModule',{'value':!![]}),exports[a499_0x44716f(0x81)]=void 0x0;const Setting_1=__importDefault(require(a499_0x44716f(0x87))),publicSettingsKeys=[a499_0x44716f(0x96),a499_0x44716f(0x94),'primaryColorDark',a499_0x44716f(0x7e),a499_0x44716f(0x7a),a499_0x44716f(0x93),a499_0x44716f(0x74),a499_0x44716f(0x85),a499_0x44716f(0x80),a499_0x44716f(0x8a),a499_0x44716f(0x86),a499_0x44716f(0x79),'boxLeftLight',a499_0x44716f(0x6e),a499_0x44716f(0x71),a499_0x44716f(0x8b),'terms',a499_0x44716f(0x8e),a499_0x44716f(0x78),'drawerIconColorDark',a499_0x44716f(0x7b),a499_0x44716f(0x8d),a499_0x44716f(0x72)],GetAllPublicSettingsService=async _0xc1fb28=>{const _0x28d887=a499_0x44716f;(!_0xc1fb28||_0xc1fb28<=0x0)&&(_0xc1fb28=0x1);const _0x5d822c=await Setting_1[_0x28d887(0x6f)][_0x28d887(0x97)]({'where':{'key':publicSettingsKeys,'companyId':_0xc1fb28},'attributes':[_0x28d887(0x76),_0x28d887(0x7f)]});return _0x5d822c;};exports[a499_0x44716f(0x81)]=GetAllPublicSettingsService;const GetPublicSettingService=async({key:_0x4d29a5,companyId:_0x594a36})=>{const _0x2104ab=a499_0x44716f;if(!publicSettingsKeys[_0x2104ab(0x83)](_0x4d29a5))return'Not\x20allowed';if(_0x594a36){const _0x18caea=await Setting_1['default'][_0x2104ab(0x84)]({'where':{'companyId':_0x594a36,'key':_0x4d29a5},'attributes':[_0x2104ab(0x76),'value']});if(_0x18caea?.[_0x2104ab(0x7f)])return _0x18caea[_0x2104ab(0x7f)];}const _0xd1fc61=await Setting_1[_0x2104ab(0x6f)][_0x2104ab(0x84)]({'where':{'companyId':0x1,'key':_0x4d29a5},'attributes':[_0x2104ab(0x76),'value']});return _0xd1fc61?.[_0x2104ab(0x7f)];};exports['default']=GetPublicSettingService;