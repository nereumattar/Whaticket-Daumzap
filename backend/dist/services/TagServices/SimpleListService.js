function a509_0x4b57(_0x3fd4c5,_0x200ad7){const _0x211121=a509_0x23ed();return a509_0x4b57=function(_0x279307,_0x3000bb){_0x279307=_0x279307-0x1ef;let _0x23edd9=_0x211121[_0x279307];return _0x23edd9;},a509_0x4b57(_0x3fd4c5,_0x200ad7);}const a509_0x8cf4c2=a509_0x4b57;function a509_0x23ed(){const _0x4ce92f=['constructor','__esModule','sequelize','180zYypgs','366267ojBmmZ','17601nouQmw','17332KyqRfu','3410hSGwvc','default','2096tEercQ','ASC','findAll','name','../../models/Tag','search','(((.+)+)+)+$','15770tMLGxX','7029DBWNAv','330093PUIoAr','122LWisQV','toString','like','705872vPabmI','defineProperty'];a509_0x23ed=function(){return _0x4ce92f;};return a509_0x23ed();}(function(_0x33c20d,_0x59b1a5){const _0x1a05d3=a509_0x4b57,_0x1bc90c=_0x33c20d();while(!![]){try{const _0x5ebacd=parseInt(_0x1a05d3(0x202))/0x1+-parseInt(_0x1a05d3(0x1f9))/0x2*(-parseInt(_0x1a05d3(0x203))/0x3)+-parseInt(_0x1a05d3(0x1ef))/0x4*(-parseInt(_0x1a05d3(0x205))/0x5)+-parseInt(_0x1a05d3(0x201))/0x6*(-parseInt(_0x1a05d3(0x204))/0x7)+parseInt(_0x1a05d3(0x1fc))/0x8+-parseInt(_0x1a05d3(0x1f8))/0x9+-parseInt(_0x1a05d3(0x1f6))/0xa*(parseInt(_0x1a05d3(0x1f7))/0xb);if(_0x5ebacd===_0x59b1a5)break;else _0x1bc90c['push'](_0x1bc90c['shift']());}catch(_0x3704f7){_0x1bc90c['push'](_0x1bc90c['shift']());}}}(a509_0x23ed,0x30be8));const a509_0x3000bb=(function(){let _0x8ea1f1=!![];return function(_0x443fa5,_0x39612f){const _0x88d62c=_0x8ea1f1?function(){if(_0x39612f){const _0x20879c=_0x39612f['apply'](_0x443fa5,arguments);return _0x39612f=null,_0x20879c;}}:function(){};return _0x8ea1f1=![],_0x88d62c;};}()),a509_0x279307=a509_0x3000bb(this,function(){const _0x21aed9=a509_0x4b57;return a509_0x279307['toString']()[_0x21aed9(0x1f4)](_0x21aed9(0x1f5))[_0x21aed9(0x1fa)]()[_0x21aed9(0x1fe)](a509_0x279307)[_0x21aed9(0x1f4)](_0x21aed9(0x1f5));});a509_0x279307();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2c662a){const _0x4947cb=a509_0x4b57;return _0x2c662a&&_0x2c662a[_0x4947cb(0x1ff)]?_0x2c662a:{'default':_0x2c662a};};Object[a509_0x8cf4c2(0x1fd)](exports,a509_0x8cf4c2(0x1ff),{'value':!![]});const sequelize_1=require(a509_0x8cf4c2(0x200)),Tag_1=__importDefault(require(a509_0x8cf4c2(0x1f3))),ListService=async({companyId:_0x4be8b6,searchParam:_0x54a8de})=>{const _0x12556e=a509_0x8cf4c2;let _0x2bfa27={};_0x54a8de&&(_0x2bfa27={[sequelize_1['Op']['or']]:[{'name':{[sequelize_1['Op'][_0x12556e(0x1fb)]]:'%'+_0x54a8de+'%'}},{'color':{[sequelize_1['Op'][_0x12556e(0x1fb)]]:'%'+_0x54a8de+'%'}}]});const _0x14b6eb=await Tag_1[_0x12556e(0x206)][_0x12556e(0x1f1)]({'where':{..._0x2bfa27,'companyId':_0x4be8b6},'order':[[_0x12556e(0x1f2),_0x12556e(0x1f0)]]});return _0x14b6eb;};exports['default']=ListService;