const a374_0x5f1cb5=a374_0x9344;(function(_0x16b8d7,_0x48f9da){const _0x32d0cd=a374_0x9344,_0x22f629=_0x16b8d7();while(!![]){try{const _0x4370b9=-parseInt(_0x32d0cd(0xfa))/0x1*(parseInt(_0x32d0cd(0xf7))/0x2)+-parseInt(_0x32d0cd(0xf2))/0x3*(parseInt(_0x32d0cd(0xf3))/0x4)+parseInt(_0x32d0cd(0xfd))/0x5+parseInt(_0x32d0cd(0xff))/0x6*(parseInt(_0x32d0cd(0x102))/0x7)+-parseInt(_0x32d0cd(0xea))/0x8*(parseInt(_0x32d0cd(0xf9))/0x9)+-parseInt(_0x32d0cd(0xee))/0xa*(parseInt(_0x32d0cd(0xf4))/0xb)+parseInt(_0x32d0cd(0xec))/0xc;if(_0x4370b9===_0x48f9da)break;else _0x22f629['push'](_0x22f629['shift']());}catch(_0x119682){_0x22f629['push'](_0x22f629['shift']());}}}(a374_0x4096,0xc4076));const a374_0x1e5a7c=(function(){let _0x786b63=!![];return function(_0xc38758,_0x5aeaee){const _0x467f4e=_0x786b63?function(){const _0x59ddbc=a374_0x9344;if(_0x5aeaee){const _0x28dc43=_0x5aeaee[_0x59ddbc(0x103)](_0xc38758,arguments);return _0x5aeaee=null,_0x28dc43;}}:function(){};return _0x786b63=![],_0x467f4e;};}()),a374_0x2f4a6a=a374_0x1e5a7c(this,function(){const _0x1c86d1=a374_0x9344;return a374_0x2f4a6a[_0x1c86d1(0xfb)]()['search'](_0x1c86d1(0xf6))[_0x1c86d1(0xfb)]()[_0x1c86d1(0x101)](a374_0x2f4a6a)[_0x1c86d1(0xfe)](_0x1c86d1(0xf6));});a374_0x2f4a6a();'use strict';function a374_0x4096(){const _0x15589e=['18KzHRzr','push','constructor','3382806TwHPUz','apply','8IDTpjV','__esModule','39348024jYXhZK','keys','14841390UvJFeo','stringify','__importDefault','settings','988623xvHxwk','12EeqSnK','11pOQZwB','findOrCreate','(((.+)+)+)+$','94EKkqfS','defineProperty','12315285sadPfl','26457pLGEKU','toString','default','5793820EEzHgg','search'];a374_0x4096=function(){return _0x15589e;};return a374_0x4096();}function a374_0x9344(_0x1963e1,_0x54e2d0){const _0x48407f=a374_0x4096();return a374_0x9344=function(_0x2f4a6a,_0x1e5a7c){_0x2f4a6a=_0x2f4a6a-0xea;let _0x409641=_0x48407f[_0x2f4a6a];return _0x409641;},a374_0x9344(_0x1963e1,_0x54e2d0);}var __importDefault=this&&this[a374_0x5f1cb5(0xf0)]||function(_0x6e669b){const _0x3ed283=a374_0x5f1cb5;return _0x6e669b&&_0x6e669b[_0x3ed283(0xeb)]?_0x6e669b:{'default':_0x6e669b};};Object[a374_0x5f1cb5(0xf8)](exports,a374_0x5f1cb5(0xeb),{'value':!![]});const CampaignSetting_1=__importDefault(require('../../models/CampaignSetting')),lodash_1=require('lodash'),CreateService=async(_0x20230d,_0x145484)=>{const _0x572244=a374_0x5f1cb5,_0x178fad=[];for(let _0xfca1b8 of Object[_0x572244(0xed)](_0x20230d['settings'])){const _0x159436=(0x0,lodash_1['isArray'])(_0x20230d[_0x572244(0xf1)][_0xfca1b8])||(0x0,lodash_1['isObject'])(_0x20230d['settings'][_0xfca1b8])?JSON[_0x572244(0xef)](_0x20230d[_0x572244(0xf1)][_0xfca1b8]):_0x20230d[_0x572244(0xf1)][_0xfca1b8],[_0x4a0ddf,_0x5d7844]=await CampaignSetting_1[_0x572244(0xfc)][_0x572244(0xf5)]({'where':{'key':_0xfca1b8,'companyId':_0x145484},'defaults':{'key':_0xfca1b8,'value':_0x159436,'companyId':_0x145484}});!_0x5d7844&&await _0x4a0ddf['update']({'value':_0x159436}),_0x178fad[_0x572244(0x100)](_0x4a0ddf);}return _0x178fad;};exports['default']=CreateService;