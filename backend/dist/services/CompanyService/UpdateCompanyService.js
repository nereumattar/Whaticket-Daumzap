const a397_0xefeae8=a397_0x5955;(function(_0x404767,_0x530fc1){const _0x2f11d4=a397_0x5955,_0x3c47e1=_0x404767();while(!![]){try{const _0x2974ef=-parseInt(_0x2f11d4(0x17c))/0x1*(parseInt(_0x2f11d4(0x16a))/0x2)+parseInt(_0x2f11d4(0x165))/0x3*(parseInt(_0x2f11d4(0x164))/0x4)+-parseInt(_0x2f11d4(0x179))/0x5+parseInt(_0x2f11d4(0x16c))/0x6+parseInt(_0x2f11d4(0x16b))/0x7*(parseInt(_0x2f11d4(0x175))/0x8)+parseInt(_0x2f11d4(0x166))/0x9*(-parseInt(_0x2f11d4(0x174))/0xa)+-parseInt(_0x2f11d4(0x16f))/0xb*(-parseInt(_0x2f11d4(0x176))/0xc);if(_0x2974ef===_0x530fc1)break;else _0x3c47e1['push'](_0x3c47e1['shift']());}catch(_0x29636c){_0x3c47e1['push'](_0x3c47e1['shift']());}}}(a397_0x31b6,0x3d6f2));const a397_0x472dc5=(function(){let _0x336dab=!![];return function(_0x14783e,_0x50c789){const _0x27a826=_0x336dab?function(){const _0x1a368f=a397_0x5955;if(_0x50c789){const _0x84b76f=_0x50c789[_0x1a368f(0x168)](_0x14783e,arguments);return _0x50c789=null,_0x84b76f;}}:function(){};return _0x336dab=![],_0x27a826;};}()),a397_0x21989d=a397_0x472dc5(this,function(){const _0x1a08b3=a397_0x5955;return a397_0x21989d[_0x1a08b3(0x163)]()[_0x1a08b3(0x173)](_0x1a08b3(0x17b))['toString']()['constructor'](a397_0x21989d)['search'](_0x1a08b3(0x17b));});a397_0x21989d();'use strict';function a397_0x31b6(){const _0x5c8449=['2sQFekl','57372BdXtlx','761760UnqpRz','__importDefault','update','132AFEnBe','../../models/Company','default','defineProperty','search','10zuUGgp','248RoKANm','578760luRXuh','campaignsEnabled','../../models/Setting','933710DyzZFw','ERR_NO_COMPANY_FOUND','(((.+)+)+)+$','488639owHtPS','toString','573508iLTSCZ','9wIVdDb','4166208BduJFU','__esModule','apply','findOrCreate'];a397_0x31b6=function(){return _0x5c8449;};return a397_0x31b6();}var __importDefault=this&&this[a397_0xefeae8(0x16d)]||function(_0x1b57d7){return _0x1b57d7&&_0x1b57d7['__esModule']?_0x1b57d7:{'default':_0x1b57d7};};Object[a397_0xefeae8(0x172)](exports,a397_0xefeae8(0x167),{'value':!![]});const AppError_1=__importDefault(require('../../errors/AppError')),Company_1=__importDefault(require(a397_0xefeae8(0x170))),Setting_1=__importDefault(require(a397_0xefeae8(0x178))),UpdateCompanyService=async _0x5652ee=>{const _0x4f2521=a397_0xefeae8,_0x1cd40a=await Company_1['default']['findByPk'](_0x5652ee['id']),{name:_0x37d88e,phone:_0x47f39b,email:_0x56892e,status:_0x29dd42,planId:_0x3ae08a,campaignsEnabled:_0x229ce4,dueDate:_0x2dbfcf,recurrence:_0x750bc0}=_0x5652ee;if(!_0x1cd40a)throw new AppError_1[(_0x4f2521(0x171))](_0x4f2521(0x17a),0x194);await _0x1cd40a[_0x4f2521(0x16e)]({'name':_0x37d88e,'phone':_0x47f39b,'email':_0x56892e,'status':_0x29dd42,'planId':_0x3ae08a,'dueDate':_0x2dbfcf,'recurrence':_0x750bc0});if(_0x5652ee[_0x4f2521(0x177)]!==undefined){const [_0x147e12,_0x78512e]=await Setting_1[_0x4f2521(0x171)][_0x4f2521(0x169)]({'where':{'companyId':_0x1cd40a['id'],'key':'campaignsEnabled'},'defaults':{'companyId':_0x1cd40a['id'],'key':_0x4f2521(0x177),'value':''+_0x229ce4}});!_0x78512e&&await _0x147e12[_0x4f2521(0x16e)]({'value':''+_0x229ce4});}return _0x1cd40a;};function a397_0x5955(_0x5aac6b,_0x901bab){const _0x1941b2=a397_0x31b6();return a397_0x5955=function(_0x21989d,_0x472dc5){_0x21989d=_0x21989d-0x163;let _0x31b666=_0x1941b2[_0x21989d];return _0x31b666;},a397_0x5955(_0x5aac6b,_0x901bab);}exports['default']=UpdateCompanyService;