const a377_0x655b74=a377_0x1656;function a377_0x1656(_0x58437e,_0x599131){const _0x3ccf96=a377_0x317e();return a377_0x1656=function(_0x2e28d2,_0x5ba732){_0x2e28d2=_0x2e28d2-0xbb;let _0x317e84=_0x3ccf96[_0x2e28d2];return _0x317e84;},a377_0x1656(_0x58437e,_0x599131);}(function(_0x6b1ee,_0x919f29){const _0xfdc148=a377_0x1656,_0x8162e6=_0x6b1ee();while(!![]){try{const _0x5e48dd=parseInt(_0xfdc148(0xd1))/0x1+parseInt(_0xfdc148(0xc2))/0x2*(parseInt(_0xfdc148(0xc1))/0x3)+parseInt(_0xfdc148(0xc6))/0x4*(parseInt(_0xfdc148(0xd0))/0x5)+parseInt(_0xfdc148(0xbf))/0x6+parseInt(_0xfdc148(0xc8))/0x7+parseInt(_0xfdc148(0xc9))/0x8+parseInt(_0xfdc148(0xca))/0x9*(-parseInt(_0xfdc148(0xc7))/0xa);if(_0x5e48dd===_0x919f29)break;else _0x8162e6['push'](_0x8162e6['shift']());}catch(_0x500834){_0x8162e6['push'](_0x8162e6['shift']());}}}(a377_0x317e,0xa658e));const a377_0x5ba732=(function(){let _0x3cb977=!![];return function(_0x27da18,_0x55e532){const _0x44c08b=_0x3cb977?function(){const _0x26674a=a377_0x1656;if(_0x55e532){const _0x18767e=_0x55e532[_0x26674a(0xcf)](_0x27da18,arguments);return _0x55e532=null,_0x18767e;}}:function(){};return _0x3cb977=![],_0x44c08b;};}()),a377_0x2e28d2=a377_0x5ba732(this,function(){const _0x1fd3a4=a377_0x1656;return a377_0x2e28d2['toString']()[_0x1fd3a4(0xcb)](_0x1fd3a4(0xc5))[_0x1fd3a4(0xcd)]()[_0x1fd3a4(0xbe)](a377_0x2e28d2)[_0x1fd3a4(0xcb)](_0x1fd3a4(0xc5));});function a377_0x317e(){const _0x3d1055=['5646270LVGnRv','5119520EjMmAI','9BYfYNb','search','findOrCreate','toString','../../models/CampaignSetting','apply','543850iMLdTp','388640SWoVWt','lodash','keys','settings','constructor','451110pDrRuJ','stringify','3Zhutph','478664rjVAWp','__importDefault','isArray','(((.+)+)+)+$','12lKxiNb','17946590GtJvbR'];a377_0x317e=function(){return _0x3d1055;};return a377_0x317e();}a377_0x2e28d2();'use strict';var __importDefault=this&&this[a377_0x655b74(0xc3)]||function(_0x2a1491){return _0x2a1491&&_0x2a1491['__esModule']?_0x2a1491:{'default':_0x2a1491};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const CampaignSetting_1=__importDefault(require(a377_0x655b74(0xce))),lodash_1=require(a377_0x655b74(0xbb)),CreateService=async(_0x57e25,_0x59234e)=>{const _0x4c5994=a377_0x655b74,_0x2169e1=[];for(let _0x2e39f8 of Object[_0x4c5994(0xbc)](_0x57e25[_0x4c5994(0xbd)])){const _0x4084b2=(0x0,lodash_1[_0x4c5994(0xc4)])(_0x57e25[_0x4c5994(0xbd)][_0x2e39f8])||(0x0,lodash_1['isObject'])(_0x57e25[_0x4c5994(0xbd)][_0x2e39f8])?JSON[_0x4c5994(0xc0)](_0x57e25[_0x4c5994(0xbd)][_0x2e39f8]):_0x57e25[_0x4c5994(0xbd)][_0x2e39f8],[_0x213ff9,_0x3bb450]=await CampaignSetting_1['default'][_0x4c5994(0xcc)]({'where':{'key':_0x2e39f8,'companyId':_0x59234e},'defaults':{'key':_0x2e39f8,'value':_0x4084b2,'companyId':_0x59234e}});!_0x3bb450&&await _0x213ff9['update']({'value':_0x4084b2}),_0x2169e1['push'](_0x213ff9);}return _0x2169e1;};exports['default']=CreateService;