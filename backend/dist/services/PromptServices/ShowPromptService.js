const a464_0x2ae14f=a464_0x4e57;(function(_0x1db1d9,_0x255725){const _0x33dbec=a464_0x4e57,_0x57c31b=_0x1db1d9();while(!![]){try{const _0x25c5d7=parseInt(_0x33dbec(0x19e))/0x1+-parseInt(_0x33dbec(0x1a8))/0x2*(parseInt(_0x33dbec(0x1b0))/0x3)+-parseInt(_0x33dbec(0x1a4))/0x4+-parseInt(_0x33dbec(0x19d))/0x5+parseInt(_0x33dbec(0x1aa))/0x6+parseInt(_0x33dbec(0x1a9))/0x7*(parseInt(_0x33dbec(0x1a5))/0x8)+parseInt(_0x33dbec(0x1a3))/0x9*(parseInt(_0x33dbec(0x19c))/0xa);if(_0x25c5d7===_0x255725)break;else _0x57c31b['push'](_0x57c31b['shift']());}catch(_0x4dae6c){_0x57c31b['push'](_0x57c31b['shift']());}}}(a464_0x1e7e,0x3e8fd));const a464_0x17e790=(function(){let _0x485d5d=!![];return function(_0x1663a9,_0x509cc4){const _0x523efb=_0x485d5d?function(){const _0xa09d59=a464_0x4e57;if(_0x509cc4){const _0x3fb2f4=_0x509cc4[_0xa09d59(0x1a0)](_0x1663a9,arguments);return _0x509cc4=null,_0x3fb2f4;}}:function(){};return _0x485d5d=![],_0x523efb;};}()),a464_0x3c81bb=a464_0x17e790(this,function(){const _0x11ac78=a464_0x4e57;return a464_0x3c81bb['toString']()['search'](_0x11ac78(0x1a2))['toString']()[_0x11ac78(0x19b)](a464_0x3c81bb)['search'](_0x11ac78(0x1a2));});function a464_0x1e7e(){const _0x1078a7=['151581jGPEwu','default','constructor','4992310IBqYia','2177910BMPwTv','169616vTdWtQ','defineProperty','apply','../../models/Prompt','(((.+)+)+)+$','9DHNqsR','7808FrZPID','8MMeWYJ','../../models/Queue','../../errors/AppError','16lXgZsg','970361KtQzey','1743198ftGLoE','__importDefault','__esModule','findOne','ERR_NO_PROMPT_FOUND','queue'];a464_0x1e7e=function(){return _0x1078a7;};return a464_0x1e7e();}a464_0x3c81bb();'use strict';var __importDefault=this&&this[a464_0x2ae14f(0x1ab)]||function(_0x48d134){const _0x6b1a3c=a464_0x2ae14f;return _0x48d134&&_0x48d134[_0x6b1a3c(0x1ac)]?_0x48d134:{'default':_0x48d134};};function a464_0x4e57(_0x58749d,_0x22c5a4){const _0x23fbc9=a464_0x1e7e();return a464_0x4e57=function(_0x3c81bb,_0x17e790){_0x3c81bb=_0x3c81bb-0x19a;let _0x1e7e9c=_0x23fbc9[_0x3c81bb];return _0x1e7e9c;},a464_0x4e57(_0x58749d,_0x22c5a4);}Object[a464_0x2ae14f(0x19f)](exports,a464_0x2ae14f(0x1ac),{'value':!![]});const AppError_1=__importDefault(require(a464_0x2ae14f(0x1a7))),Prompt_1=__importDefault(require(a464_0x2ae14f(0x1a1))),Queue_1=__importDefault(require(a464_0x2ae14f(0x1a6))),ShowPromptService=async({promptId:_0xd667bf,companyId:_0x227941})=>{const _0x49bd3f=a464_0x2ae14f,_0x11e0e3=await Prompt_1[_0x49bd3f(0x19a)][_0x49bd3f(0x1ad)]({'where':{'id':_0xd667bf,'companyId':_0x227941},'include':[{'model':Queue_1[_0x49bd3f(0x19a)],'as':_0x49bd3f(0x1af)}]});if(!_0x11e0e3)throw new AppError_1[(_0x49bd3f(0x19a))](_0x49bd3f(0x1ae),0x194);return _0x11e0e3;};exports[a464_0x2ae14f(0x19a)]=ShowPromptService;