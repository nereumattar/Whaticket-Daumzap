function a100_0x44c3(_0x2df6b8,_0x9faecc){const _0x1c4255=a100_0x5a5a();return a100_0x44c3=function(_0x237f0f,_0x152a53){_0x237f0f=_0x237f0f-0xc2;let _0x5a5ada=_0x1c4255[_0x237f0f];return _0x5a5ada;},a100_0x44c3(_0x2df6b8,_0x9faecc);}const a100_0x1c7a32=a100_0x44c3;(function(_0x2a80ec,_0x5a76bf){const _0x8ef3a9=a100_0x44c3,_0x2176c1=_0x2a80ec();while(!![]){try{const _0xe0f39f=-parseInt(_0x8ef3a9(0xc5))/0x1*(-parseInt(_0x8ef3a9(0xc4))/0x2)+-parseInt(_0x8ef3a9(0xcc))/0x3+-parseInt(_0x8ef3a9(0xc9))/0x4+parseInt(_0x8ef3a9(0xd7))/0x5+-parseInt(_0x8ef3a9(0xca))/0x6*(-parseInt(_0x8ef3a9(0xc3))/0x7)+parseInt(_0x8ef3a9(0xc2))/0x8+-parseInt(_0x8ef3a9(0xd8))/0x9*(-parseInt(_0x8ef3a9(0xc8))/0xa);if(_0xe0f39f===_0x5a76bf)break;else _0x2176c1['push'](_0x2176c1['shift']());}catch(_0x2e7a0d){_0x2176c1['push'](_0x2176c1['shift']());}}}(a100_0x5a5a,0x7375b));const a100_0x152a53=(function(){let _0x1da160=!![];return function(_0x2ddbd3,_0x53e755){const _0x14dbc6=_0x1da160?function(){const _0x2eceac=a100_0x44c3;if(_0x53e755){const _0x56a1e1=_0x53e755[_0x2eceac(0xd2)](_0x2ddbd3,arguments);return _0x53e755=null,_0x56a1e1;}}:function(){};return _0x1da160=![],_0x14dbc6;};}()),a100_0x237f0f=a100_0x152a53(this,function(){const _0xd02039=a100_0x44c3;return a100_0x237f0f[_0xd02039(0xd5)]()[_0xd02039(0xd6)](_0xd02039(0xc7))[_0xd02039(0xd5)]()[_0xd02039(0xce)](a100_0x237f0f)[_0xd02039(0xd6)](_0xd02039(0xc7));});a100_0x237f0f();'use strict';Object['defineProperty'](exports,a100_0x1c7a32(0xd0),{'value':!![]});function a100_0x5a5a(){const _0x317cd4=['1118510AMNrJr','155907ejWmvu','INTEGER','264032GScuxn','7SYZqdn','649954zKsiTD','1yvFphE','TicketTraking','(((.+)+)+)+$','430PdPkIW','2668652vhCojV','2635830kKwZWp','Whatsapps','1877373OHsLPJ','DATE','constructor','Companies','__esModule','DataTypes','apply','SET\x20NULL','sequelize','toString','search'];a100_0x5a5a=function(){return _0x317cd4;};return a100_0x5a5a();}const sequelize_1=require(a100_0x1c7a32(0xd4));module['exports']={'up':_0x68035a=>{const _0x2fed89=a100_0x1c7a32;return _0x68035a['createTable'](_0x2fed89(0xc6),{'id':{'type':sequelize_1[_0x2fed89(0xd1)][_0x2fed89(0xd9)],'autoIncrement':!![],'primaryKey':!![],'allowNull':![]},'ticketId':{'type':sequelize_1[_0x2fed89(0xd1)][_0x2fed89(0xd9)],'references':{'model':'Tickets','key':'id'},'onDelete':_0x2fed89(0xd3)},'companyId':{'type':sequelize_1[_0x2fed89(0xd1)][_0x2fed89(0xd9)],'references':{'model':_0x2fed89(0xcf),'key':'id'},'onDelete':_0x2fed89(0xd3)},'whatsappId':{'type':sequelize_1['DataTypes'][_0x2fed89(0xd9)],'references':{'model':_0x2fed89(0xcb),'key':'id'},'onDelete':'SET\x20NULL','allowNull':!![]},'userId':{'type':sequelize_1[_0x2fed89(0xd1)]['INTEGER'],'references':{'model':'Users','key':'id'},'onDelete':_0x2fed89(0xd3),'allowNull':!![]},'createdAt':{'type':sequelize_1[_0x2fed89(0xd1)]['DATE'],'allowNull':!![]},'updatedAt':{'type':sequelize_1[_0x2fed89(0xd1)][_0x2fed89(0xcd)],'allowNull':!![]},'queuedAt':{'type':sequelize_1[_0x2fed89(0xd1)]['DATE'],'allowNull':!![]},'startedAt':{'type':sequelize_1[_0x2fed89(0xd1)]['DATE'],'allowNull':!![]},'finishedAt':{'type':sequelize_1['DataTypes'][_0x2fed89(0xcd)],'allowNull':!![]}});},'down':_0x53d38c=>{const _0x50888e=a100_0x1c7a32;return _0x53d38c['dropTable'](_0x50888e(0xc6));}};