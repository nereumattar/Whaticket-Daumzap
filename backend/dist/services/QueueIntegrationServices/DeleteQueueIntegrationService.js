function a465_0x3220(_0x487609,_0x1cb1da){const _0x2fc519=a465_0x14a1();return a465_0x3220=function(_0xa4857d,_0x58fbe3){_0xa4857d=_0xa4857d-0x1b6;let _0x14a163=_0x2fc519[_0xa4857d];return _0x14a163;},a465_0x3220(_0x487609,_0x1cb1da);}function a465_0x14a1(){const _0x106ac5=['__esModule','constructor','toString','default','(((.+)+)+)+$','1756620OQJkYa','10942443UaiPAq','apply','../../errors/AppError','10078506uRqZgq','35uMxPrU','search','2266775ZUjSdz','4101024rHIwJM','93317PjiGZk','16NwzJor','defineProperty','487904WPePxe'];a465_0x14a1=function(){return _0x106ac5;};return a465_0x14a1();}const a465_0x141da6=a465_0x3220;(function(_0x4f3bfd,_0x2d5ac2){const _0x308a6c=a465_0x3220,_0x50d75b=_0x4f3bfd();while(!![]){try{const _0xd6b07b=-parseInt(_0x308a6c(0x1bd))/0x1+parseInt(_0x308a6c(0x1c6))/0x2+parseInt(_0x308a6c(0x1bc))/0x3+-parseInt(_0x308a6c(0x1c0))/0x4*(parseInt(_0x308a6c(0x1b9))/0x5)+parseInt(_0x308a6c(0x1b8))/0x6+parseInt(_0x308a6c(0x1bb))/0x7+parseInt(_0x308a6c(0x1be))/0x8*(-parseInt(_0x308a6c(0x1c7))/0x9);if(_0xd6b07b===_0x2d5ac2)break;else _0x50d75b['push'](_0x50d75b['shift']());}catch(_0x3a6193){_0x50d75b['push'](_0x50d75b['shift']());}}}(a465_0x14a1,0xd46cb));const a465_0x58fbe3=(function(){let _0x30af74=!![];return function(_0x1952c4,_0xd6f165){const _0x366b78=_0x30af74?function(){const _0x16b481=a465_0x3220;if(_0xd6f165){const _0x2286ef=_0xd6f165[_0x16b481(0x1b6)](_0x1952c4,arguments);return _0xd6f165=null,_0x2286ef;}}:function(){};return _0x30af74=![],_0x366b78;};}()),a465_0xa4857d=a465_0x58fbe3(this,function(){const _0x2c9e0a=a465_0x3220;return a465_0xa4857d[_0x2c9e0a(0x1c3)]()[_0x2c9e0a(0x1ba)](_0x2c9e0a(0x1c5))['toString']()[_0x2c9e0a(0x1c2)](a465_0xa4857d)[_0x2c9e0a(0x1ba)](_0x2c9e0a(0x1c5));});a465_0xa4857d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x57970e){const _0x50bfd1=a465_0x3220;return _0x57970e&&_0x57970e[_0x50bfd1(0x1c1)]?_0x57970e:{'default':_0x57970e};};Object[a465_0x141da6(0x1bf)](exports,a465_0x141da6(0x1c1),{'value':!![]});const QueueIntegrations_1=__importDefault(require('../../models/QueueIntegrations')),AppError_1=__importDefault(require(a465_0x141da6(0x1b7))),DeleteQueueIntegrationService=async _0x265cd5=>{const _0x432567=a465_0x141da6,_0xbf1fb2=await QueueIntegrations_1[_0x432567(0x1c4)]['findOne']({'where':{'id':_0x265cd5}});if(!_0xbf1fb2)throw new AppError_1[(_0x432567(0x1c4))]('ERR_NO_DIALOG_FOUND',0x194);await _0xbf1fb2['destroy']();};exports[a465_0x141da6(0x1c4)]=DeleteQueueIntegrationService;