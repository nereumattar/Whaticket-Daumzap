const a396_0x51d87e=a396_0x4596;function a396_0x4596(_0x1ff37f,_0x39f0c8){const _0x1118fc=a396_0x10e9();return a396_0x4596=function(_0x2464a6,_0x4a003a){_0x2464a6=_0x2464a6-0x1b8;let _0x10e9d4=_0x1118fc[_0x2464a6];return _0x10e9d4;},a396_0x4596(_0x1ff37f,_0x39f0c8);}(function(_0x49a842,_0x162e9a){const _0x48d251=a396_0x4596,_0x4f2dd6=_0x49a842();while(!![]){try{const _0x11d8e9=-parseInt(_0x48d251(0x1c9))/0x1+-parseInt(_0x48d251(0x1c2))/0x2+-parseInt(_0x48d251(0x1c0))/0x3*(-parseInt(_0x48d251(0x1c4))/0x4)+parseInt(_0x48d251(0x1cc))/0x5+-parseInt(_0x48d251(0x1c6))/0x6+-parseInt(_0x48d251(0x1b8))/0x7*(-parseInt(_0x48d251(0x1cb))/0x8)+parseInt(_0x48d251(0x1bb))/0x9;if(_0x11d8e9===_0x162e9a)break;else _0x4f2dd6['push'](_0x4f2dd6['shift']());}catch(_0x1d9550){_0x4f2dd6['push'](_0x4f2dd6['shift']());}}}(a396_0x10e9,0x747d9));const a396_0x4a003a=(function(){let _0x4a2bea=!![];return function(_0x4f5ed3,_0x5e9999){const _0xee84c4=_0x4a2bea?function(){if(_0x5e9999){const _0x41734a=_0x5e9999['apply'](_0x4f5ed3,arguments);return _0x5e9999=null,_0x41734a;}}:function(){};return _0x4a2bea=![],_0xee84c4;};}()),a396_0x2464a6=a396_0x4a003a(this,function(){const _0x2de996=a396_0x4596;return a396_0x2464a6[_0x2de996(0x1ba)]()[_0x2de996(0x1c8)](_0x2de996(0x1c3))[_0x2de996(0x1ba)]()[_0x2de996(0x1c7)](a396_0x2464a6)['search']('(((.+)+)+)+$');});a396_0x2464a6();'use strict';function a396_0x10e9(){const _0x111776=['21CArvJK','../../models/Setting','1541860sMRcrI','(((.+)+)+)+$','341648KRzFPA','default','5716200MGEodx','constructor','search','534318jrqajo','defineProperty','105584mIyLIF','1389825uRnjjo','../../errors/AppError','ERR_NO_COMPANY_FOUND','56QJyCYx','findByPk','toString','15782940hNFOdK','campaignsEnabled','__esModule','__importDefault','update'];a396_0x10e9=function(){return _0x111776;};return a396_0x10e9();}var __importDefault=this&&this[a396_0x51d87e(0x1be)]||function(_0x33f1c6){const _0x56becf=a396_0x51d87e;return _0x33f1c6&&_0x33f1c6[_0x56becf(0x1bd)]?_0x33f1c6:{'default':_0x33f1c6};};Object[a396_0x51d87e(0x1ca)](exports,a396_0x51d87e(0x1bd),{'value':!![]});const AppError_1=__importDefault(require(a396_0x51d87e(0x1cd))),Company_1=__importDefault(require('../../models/Company')),Setting_1=__importDefault(require(a396_0x51d87e(0x1c1))),UpdateCompanyService=async _0x29fc99=>{const _0x1046ad=a396_0x51d87e,_0x3d3051=await Company_1[_0x1046ad(0x1c5)][_0x1046ad(0x1b9)](_0x29fc99['id']),{name:_0x162e1e,phone:_0x52510d,email:_0x1d6941,status:_0x571501,planId:_0x4944b4,campaignsEnabled:_0x307135,dueDate:_0x111a0f,recurrence:_0x551193}=_0x29fc99;if(!_0x3d3051)throw new AppError_1[(_0x1046ad(0x1c5))](_0x1046ad(0x1ce),0x194);await _0x3d3051['update']({'name':_0x162e1e,'phone':_0x52510d,'email':_0x1d6941,'status':_0x571501,'planId':_0x4944b4,'dueDate':_0x111a0f,'recurrence':_0x551193});if(_0x29fc99[_0x1046ad(0x1bc)]!==undefined){const [_0x51d923,_0x546a4b]=await Setting_1['default']['findOrCreate']({'where':{'companyId':_0x3d3051['id'],'key':'campaignsEnabled'},'defaults':{'companyId':_0x3d3051['id'],'key':_0x1046ad(0x1bc),'value':''+_0x307135}});!_0x546a4b&&await _0x51d923[_0x1046ad(0x1bf)]({'value':''+_0x307135});}return _0x3d3051;};exports[a396_0x51d87e(0x1c5)]=UpdateCompanyService;