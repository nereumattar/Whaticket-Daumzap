function a428_0x4ad5(){const _0x2aaf47=['../../models/FilesOptions','3845808BoJCeV','toString','5486397RWPVej','__importDefault','constructor','ASC','default','findOne','options','196688xULweI','2507895AclLMz','1002VOSgnS','1512336slwPDw','__esModule','search','7070Crrafp','438908FRzJbj','../../errors/AppError','defineProperty'];a428_0x4ad5=function(){return _0x2aaf47;};return a428_0x4ad5();}const a428_0x15ab0e=a428_0x328b;(function(_0x2a9e57,_0x108265){const _0x583eea=a428_0x328b,_0x35401d=_0x2a9e57();while(!![]){try{const _0x2d9b2d=parseInt(_0x583eea(0x105))/0x1+-parseInt(_0x583eea(0x101))/0x2+parseInt(_0x583eea(0x113))/0x3+parseInt(_0x583eea(0x112))/0x4+-parseInt(_0x583eea(0x104))/0x5*(-parseInt(_0x583eea(0x100))/0x6)+-parseInt(_0x583eea(0x10b))/0x7+parseInt(_0x583eea(0x109))/0x8;if(_0x2d9b2d===_0x108265)break;else _0x35401d['push'](_0x35401d['shift']());}catch(_0xe2dc5a){_0x35401d['push'](_0x35401d['shift']());}}}(a428_0x4ad5,0x7a4ea));function a428_0x328b(_0x4ed525,_0x91aee9){const _0x5d29e7=a428_0x4ad5();return a428_0x328b=function(_0x12b142,_0x28e778){_0x12b142=_0x12b142-0x100;let _0x4ad511=_0x5d29e7[_0x12b142];return _0x4ad511;},a428_0x328b(_0x4ed525,_0x91aee9);}const a428_0x28e778=(function(){let _0x85736a=!![];return function(_0x305081,_0x43ecba){const _0x4b72af=_0x85736a?function(){if(_0x43ecba){const _0x590429=_0x43ecba['apply'](_0x305081,arguments);return _0x43ecba=null,_0x590429;}}:function(){};return _0x85736a=![],_0x4b72af;};}()),a428_0x12b142=a428_0x28e778(this,function(){const _0x458df6=a428_0x328b;return a428_0x12b142['toString']()[_0x458df6(0x103)]('(((.+)+)+)+$')[_0x458df6(0x10a)]()[_0x458df6(0x10d)](a428_0x12b142)[_0x458df6(0x103)]('(((.+)+)+)+$');});a428_0x12b142();'use strict';var __importDefault=this&&this[a428_0x15ab0e(0x10c)]||function(_0x4ec2e0){const _0x5e830e=a428_0x15ab0e;return _0x4ec2e0&&_0x4ec2e0[_0x5e830e(0x102)]?_0x4ec2e0:{'default':_0x4ec2e0};};Object[a428_0x15ab0e(0x107)](exports,a428_0x15ab0e(0x102),{'value':!![]});const Files_1=__importDefault(require('../../models/Files')),AppError_1=__importDefault(require(a428_0x15ab0e(0x106))),FilesOptions_1=__importDefault(require(a428_0x15ab0e(0x108))),ShowFileService=async(_0x5fa34a,_0x454d88)=>{const _0x25f094=a428_0x15ab0e,_0x2954b8=await Files_1['default'][_0x25f094(0x110)]({'where':{'id':_0x5fa34a,'companyId':_0x454d88},'include':[_0x25f094(0x111),{'model':FilesOptions_1[_0x25f094(0x10f)],'as':_0x25f094(0x111),'order':[['id',_0x25f094(0x10e)]]}]});if(!_0x2954b8)throw new AppError_1['default']('ERR_NO_FILE_FOUND',0x194);return _0x2954b8;};exports[a428_0x15ab0e(0x10f)]=ShowFileService;