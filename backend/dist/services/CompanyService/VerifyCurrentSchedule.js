function a398_0x4c0d(_0x291058,_0x5e39fa){const _0x374bf2=a398_0x5757();return a398_0x4c0d=function(_0x1f0476,_0x3cd000){_0x1f0476=_0x1f0476-0x10a;let _0x575737=_0x374bf2[_0x1f0476];return _0x575737;},a398_0x4c0d(_0x291058,_0x5e39fa);}const a398_0x37316a=a398_0x4c0d;(function(_0x341440,_0x1a4531){const _0x46d0ba=a398_0x4c0d,_0x2f3ada=_0x341440();while(!![]){try{const _0x12ad32=parseInt(_0x46d0ba(0x115))/0x1+-parseInt(_0x46d0ba(0x114))/0x2+-parseInt(_0x46d0ba(0x118))/0x3*(-parseInt(_0x46d0ba(0x125))/0x4)+parseInt(_0x46d0ba(0x121))/0x5+-parseInt(_0x46d0ba(0x112))/0x6+parseInt(_0x46d0ba(0x124))/0x7+-parseInt(_0x46d0ba(0x129))/0x8*(parseInt(_0x46d0ba(0x10f))/0x9);if(_0x12ad32===_0x1a4531)break;else _0x2f3ada['push'](_0x2f3ada['shift']());}catch(_0x4e3dd1){_0x2f3ada['push'](_0x2f3ada['shift']());}}}(a398_0x5757,0xe9739));const a398_0x3cd000=(function(){let _0x2da05d=!![];return function(_0xc4450b,_0x272dfb){const _0x391b8b=_0x2da05d?function(){if(_0x272dfb){const _0x3d98a9=_0x272dfb['apply'](_0xc4450b,arguments);return _0x272dfb=null,_0x3d98a9;}}:function(){};return _0x2da05d=![],_0x391b8b;};}()),a398_0x1f0476=a398_0x3cd000(this,function(){const _0x3f1013=a398_0x4c0d;return a398_0x1f0476[_0x3f1013(0x119)]()[_0x3f1013(0x11e)](_0x3f1013(0x11c))[_0x3f1013(0x119)]()[_0x3f1013(0x120)](a398_0x1f0476)[_0x3f1013(0x11e)](_0x3f1013(0x11c));});function a398_0x5757(){const _0x5232b7=['trim','isBefore','__importDefault','6705eumeLc','defineProperty','Company\x20not\x20found','8677230vxcGzL','moment','224596RzUDbN','1689639mDBhMv','long','schedules','4857yMIYtR','toString','__esModule','toLowerCase','(((.+)+)+)+$','weekdayEn','search','startTime','constructor','5308440XZVJSU','startLunchTime','findOne','5622540hLNLRU','3448slKUzF','default','hh:mm','en-US','26152WRVOoI','endTime','find'];a398_0x5757=function(){return _0x5232b7;};return a398_0x5757();}a398_0x1f0476();'use strict';var __importDefault=this&&this[a398_0x37316a(0x10e)]||function(_0x8103c4){const _0x571519=a398_0x37316a;return _0x8103c4&&_0x8103c4[_0x571519(0x11a)]?_0x8103c4:{'default':_0x8103c4};};Object[a398_0x37316a(0x110)](exports,a398_0x37316a(0x11a),{'value':!![]});const Company_1=__importDefault(require('../../models/Company')),moment_1=__importDefault(require(a398_0x37316a(0x113))),VerifyCurrentSchedule=async _0x34fc40=>{const _0x2c0310=a398_0x37316a,_0x259fa0=new Date()['toLocaleDateString'](_0x2c0310(0x128),{'weekday':_0x2c0310(0x116)})[_0x2c0310(0x10c)]()[_0x2c0310(0x11b)](),_0x4fcb14=await Company_1[_0x2c0310(0x126)][_0x2c0310(0x123)]({'where':{'id':_0x34fc40},'attributes':['id',_0x2c0310(0x117)],'raw':!![]});if(!_0x4fcb14)throw new Error(_0x2c0310(0x111));const _0x21af08=_0x4fcb14['schedules'][_0x2c0310(0x10b)](_0x570391=>_0x570391[_0x2c0310(0x11d)]['trim']()[_0x2c0310(0x11b)]()===_0x259fa0);if(!_0x21af08||!_0x21af08[_0x2c0310(0x11f)]||!_0x21af08['endTime'])return;const _0x3b1650=(0x0,moment_1['default'])(),_0x1f5b9c=(0x0,moment_1[_0x2c0310(0x126)])(_0x21af08[_0x2c0310(0x11f)],_0x2c0310(0x127)),_0x3261a5=(0x0,moment_1[_0x2c0310(0x126)])(_0x21af08[_0x2c0310(0x10a)],_0x2c0310(0x127));let _0x13f376=_0x1f5b9c[_0x2c0310(0x10d)](_0x3b1650)&&_0x3b1650[_0x2c0310(0x10d)](_0x3261a5);if(_0x13f376&&_0x21af08['startLunchTime']&&_0x21af08['endLunchTime']){const _0x5a4b7d=(0x0,moment_1[_0x2c0310(0x126)])(_0x21af08[_0x2c0310(0x122)],_0x2c0310(0x127)),_0x535afc=(0x0,moment_1[_0x2c0310(0x126)])(_0x21af08['endLunchTime'],'hh:mm');_0x13f376=!(_0x5a4b7d['isBefore'](_0x3b1650)&&_0x3b1650[_0x2c0310(0x10d)](_0x535afc));}const _0x13d894={'id':_0x4fcb14['id'],'currentWeekday':_0x259fa0,'currentSchedule':_0x21af08,'startTime':_0x21af08[_0x2c0310(0x11f)],'endTime':_0x21af08[_0x2c0310(0x10a)],'inActivity':_0x13f376};return _0x13d894;};exports[a398_0x37316a(0x126)]=VerifyCurrentSchedule;