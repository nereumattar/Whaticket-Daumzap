var a488_0x3c6d2e=a488_0x20ea;(function(_0x132685,_0x256a66){var _0xdafef5=a488_0x20ea,_0x405e3a=_0x132685();while(!![]){try{var _0x3601e4=-parseInt(_0xdafef5(0xba))/0x1*(parseInt(_0xdafef5(0xa9))/0x2)+parseInt(_0xdafef5(0xb3))/0x3+-parseInt(_0xdafef5(0xa5))/0x4*(-parseInt(_0xdafef5(0xb0))/0x5)+parseInt(_0xdafef5(0xbb))/0x6*(-parseInt(_0xdafef5(0xc5))/0x7)+-parseInt(_0xdafef5(0xa7))/0x8*(parseInt(_0xdafef5(0xa3))/0x9)+-parseInt(_0xdafef5(0xbc))/0xa+parseInt(_0xdafef5(0xc1))/0xb;if(_0x3601e4===_0x256a66)break;else _0x405e3a['push'](_0x405e3a['shift']());}catch(_0x56060f){_0x405e3a['push'](_0x405e3a['shift']());}}}(a488_0x3aad,0xa94f7));function a488_0x3aad(){var _0x1aca44=['4315244qegLet','\x20\x20\x20with\x20\x20\x20traking\x20as\x20(\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20c.name\x20\x22companyName\x22,\x20\x20\x20\x20\x20\x20\x20u.name\x20\x22userName\x22,\x20\x20\x20\x20\x20\x20\x20u.online\x20\x22userOnline\x22,\x20\x20\x20\x20\x20\x20\x20w.name\x20\x22whatsappName\x22,\x20\x20\x20\x20\x20\x20\x20ct.name\x20\x22contactName\x22,\x20\x20\x20\x20\x20\x20\x20ct.number\x20\x22contactNumber\x22,\x20\x20\x20\x20\x20\x20\x20(t.\x22status\x22\x20=\x20\x27closed\x27)\x20\x22finished\x22,\x20\x20\x20\x20\x20\x20\x20(tt.\x22userId\x22\x20is\x20null\x20and\x20tt.\x22finishedAt\x22\x20is\x20null\x20and\x20t.\x22status\x22\x20=\x20\x27pending\x27)\x20\x22pending\x22,\x20\x20\x20\x20\x20\x20\x20coalesce((\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27day\x27,\x20age(tt.\x22finishedAt\x22))\x20*\x2024\x20*\x2060)\x20+\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27hour\x27,\x20age(tt.\x22finishedAt\x22,\x20tt.\x22startedAt\x22))\x20*\x2060)\x20+\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27minutes\x27,\x20age(tt.\x22finishedAt\x22,\x20tt.\x22startedAt\x22)))\x20\x20\x20\x20\x20\x20\x20),\x200)\x20\x22supportTime\x22,\x20\x20\x20\x20\x20\x20\x20coalesce((\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27day\x27,\x20age(\x20tt.\x22queuedAt\x22,\x20tt.\x22startedAt\x22))\x20*\x2024\x20*\x2060)\x20+\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27hour\x27,\x20age(tt.\x22queuedAt\x22,\x20tt.\x22startedAt\x22))\x20*\x2060)\x20+\x20\x20\x20\x20\x20\x20\x20\x20\x20(date_part(\x27minutes\x27,\x20age(tt.\x22queuedAt\x22,\x20tt.\x22startedAt\x22)))\x20\x20\x20\x20\x20\x20\x20),\x200)\x20\x22waitTime\x22,\x20\x20\x20\x20\x20\x20\x20t.status,\x20\x20\x20\x20\x20\x20\x20tt.*,\x20\x20\x20\x20\x20\x20\x20ct.\x22id\x22\x20\x22contactId\x22\x20\x20\x20\x20\x20from\x20\x22TicketTraking\x22\x20tt\x20\x20\x20\x20\x20left\x20join\x20\x22Companies\x22\x20c\x20on\x20c.id\x20=\x20tt.\x22companyId\x22\x20\x20\x20\x20\x20left\x20join\x20\x22Users\x22\x20u\x20on\x20u.id\x20=\x20tt.\x22userId\x22\x20\x20\x20\x20\x20left\x20join\x20\x22Whatsapps\x22\x20w\x20on\x20w.id\x20=\x20tt.\x22whatsappId\x22\x20\x20\x20\x20\x20left\x20join\x20\x22Tickets\x22\x20t\x20on\x20t.id\x20=\x20tt.\x22ticketId\x22\x20\x20\x20\x20\x20left\x20join\x20\x22Contacts\x22\x20ct\x20on\x20ct.id\x20=\x20t.\x22contactId\x22\x20\x20\x20\x20\x20--\x20filterPeriod\x20\x20\x20),\x20\x20\x20counters\x20as\x20(\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20(select\x20avg(\x22supportTime\x22)\x20from\x20traking\x20where\x20\x22supportTime\x22\x20>\x200)\x20\x22avgSupportTime\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20avg(\x22waitTime\x22)\x20from\x20traking\x20where\x20\x22waitTime\x22\x20>\x200)\x20\x22avgWaitTime\x22,\x20\x20\x20\x20\x20\x20\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(distinct\x20\x22id\x22)\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20status\x20like\x20\x27open\x27\x20and\x20t.\x22companyId\x22\x20=\x20?\x20\x20\x20\x20\x20\x20\x20)\x20\x22supportHappening\x22,\x20\x20\x20\x20\x20\x20\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(distinct\x20\x22id\x22)\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20\x22Tickets\x22\x20t\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20status\x20like\x20\x27pending\x27\x20and\x20t.\x22companyId\x22\x20=\x20?\x20\x20\x20\x20\x20\x20\x20)\x20\x22supportPending\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20finished)\x20\x22supportFinished\x22,\x20\x20\x20\x20\x20\x20\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20count(leads.id)\x20from\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ct1.id,\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20count(tt1.id)\x20total\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20tt1\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Tickets\x22\x20t1\x20on\x20t1.id\x20=\x20tt1.\x22ticketId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22Contacts\x22\x20ct1\x20on\x20ct1.id\x20=\x20t1.\x22contactId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20group\x20by\x201\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20having\x20count(tt1.id)\x20=\x201\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20leads\x20\x20\x20\x20\x20\x20\x20)\x20\x22leads\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27)\x20\x22tickets\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27nps\x27)\x20\x22waitRating\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20\x22rated\x22\x20=\x20false)\x20\x22withoutRating\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20count(id)\x20from\x20traking\x20where\x20\x22status\x22\x20=\x20\x27closed\x27\x20and\x20\x22rated\x22\x20=\x20true)\x20\x22withRating\x22,\x20\x20\x20\x20\x20\x20\x20(((select\x20count(id)\x20from\x20traking\x20where\x20\x22rated\x22\x20=\x20true)*\x20100)\x20/\x20nullif((select\x20count(id)\x20from\x20traking),0))\x20\x22percRating\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20>\x208\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsPromotersPerc\x22,\x20\x20\x20\x20\x20\x20\x20(select\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20in\x20(7,8)\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsPassivePerc\x22,\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=\x20true\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20<\x207\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsDetractorsPerc\x22,\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20sum(nps.promoter)\x20-\x20sum(nps.detractor)\x20from\x20(\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20promoter\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20,0\x20detractor\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20tt\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=true\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.\x22rate\x22\x20>\x208\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20union\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200,(100*count(tt.*))/NULLIF((select\x20count(*)\x20total\x20from\x20traking\x20tt\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20where\x20rated=\x20true),0)\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20from\x20traking\x20\x20tt\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20inner\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22ticketId\x22\x20=\x20tt.\x22ticketId\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20where\x20tt.rated\x20=true\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20and\x20ur.rate\x20<\x207))\x20nps\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20)\x20\x22npsScore\x22\x20\x20\x20),\x20\x20\x20attedants\x20as\x20(\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20u1.id,\x20\x20\x20\x20\x20\x20\x20u1.\x22name\x22,\x20\x20\x20\x20\x20\x20\x20u1.\x22online\x22,\x20\x20\x20\x20\x20\x20\x20avg(t.\x22waitTime\x22)\x20\x22avgWaitTime\x22,\x20\x20\x20\x20\x20\x20\x20avg(t.\x22supportTime\x22)\x20\x22avgSupportTime\x22,\x20\x20\x20\x20\x20\x20\x20count(t.\x22id\x22)\x20\x22tickets\x22,\x20\x20\x20\x20\x20\x20\x20round(coalesce(avg(ur.\x22rate\x22),\x200),2)\x20\x22rating\x22,\x20\x20\x20\x20\x20\x20\x20coalesce(count(ur.\x22id\x22),\x200)\x20\x22countRating\x22\x20\x20\x20\x20\x20from\x20\x22Users\x22\x20u1\x20\x20\x20\x20\x20\x20\x20left\x20join\x20traking\x20t\x20on\x20t.\x22userId\x22\x20=\x20u1.id\x20\x20\x20\x20\x20\x20\x20left\x20join\x20\x22UserRatings\x22\x20ur\x20on\x20ur.\x22userId\x22\x20=\x20t.\x22userId\x22\x20and\x20ur.\x22ticketId\x22\x20=\x20t.\x22ticketId\x22\x20\x20\x20\x20\x20where\x20u1.\x22companyId\x22\x20=\x20?\x20\x20\x20\x20\x20group\x20by\x201,\x202\x20\x20\x20\x20\x20order\x20by\x20u1.\x22name\x22\x20\x20\x20\x20\x20)\x20\x20\x20\x20\x20select\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20coalesce(jsonb_build_object(\x27counters\x27,\x20c.*)->>\x27counters\x27,\x20\x27{}\x27)::jsonb\x20from\x20counters\x20c)\x20counters,\x20\x20\x20\x20\x20\x20\x20\x20\x20(select\x20coalesce(json_agg(a.*),\x20\x27[]\x27)::jsonb\x20from\x20attedants\x20a)\x20attendants;\x20','1928eCsFQe','SELECT','112nKWtdB','apply','sequelize','default','get','where\x20tt.\x22companyId\x22\x20=\x20?','replace','5zrMBxN','push','getOwnPropertyDescriptor','1203966knoIcA','search','create','toString','__importDefault','(((.+)+)+)+$','call','23004xOInMY','12XtZWCy','6337450IdNkpT','date_to','defineProperty','\x2023:59:59','--\x20filterPeriod','36752815nuuZXD','constructor','__setModuleDefault','__importStar','4012393FKhRaY','lodash','writable','date_from','query','__esModule','days','has','../../database','39564QGRKnz','hasOwnProperty'];a488_0x3aad=function(){return _0x1aca44;};return a488_0x3aad();}var a488_0x361671=(function(){var _0x462674=!![];return function(_0x38f1d7,_0x3546bb){var _0x298333=_0x462674?function(){var _0x276984=a488_0x20ea;if(_0x3546bb){var _0x3570fb=_0x3546bb[_0x276984(0xaa)](_0x38f1d7,arguments);return _0x3546bb=null,_0x3570fb;}}:function(){};return _0x462674=![],_0x298333;};}()),a488_0x4ac31e=a488_0x361671(this,function(){var _0x2ba2cc=a488_0x20ea;return a488_0x4ac31e[_0x2ba2cc(0xb6)]()[_0x2ba2cc(0xb4)](_0x2ba2cc(0xb8))['toString']()[_0x2ba2cc(0xc2)](a488_0x4ac31e)[_0x2ba2cc(0xb4)](_0x2ba2cc(0xb8));});a488_0x4ac31e();'use strict';var __createBinding=this&&this['__createBinding']||(Object[a488_0x3c6d2e(0xb5)]?function(_0x98813b,_0x4dd17a,_0x16ec67,_0x39b286){var _0x59e638=a488_0x3c6d2e;if(_0x39b286===undefined)_0x39b286=_0x16ec67;var _0x472315=Object[_0x59e638(0xb2)](_0x4dd17a,_0x16ec67);(!_0x472315||(_0x59e638(0xad)in _0x472315?!_0x4dd17a[_0x59e638(0x9f)]:_0x472315[_0x59e638(0x9c)]||_0x472315['configurable']))&&(_0x472315={'enumerable':!![],'get':function(){return _0x4dd17a[_0x16ec67];}}),Object[_0x59e638(0xbe)](_0x98813b,_0x39b286,_0x472315);}:function(_0x52e32b,_0x4869ab,_0x4a6515,_0x566a26){if(_0x566a26===undefined)_0x566a26=_0x4a6515;_0x52e32b[_0x566a26]=_0x4869ab[_0x4a6515];}),__setModuleDefault=this&&this[a488_0x3c6d2e(0xc3)]||(Object[a488_0x3c6d2e(0xb5)]?function(_0x239b61,_0x8c669e){var _0x1c5bba=a488_0x3c6d2e;Object[_0x1c5bba(0xbe)](_0x239b61,'default',{'enumerable':!![],'value':_0x8c669e});}:function(_0x4ae07e,_0x167c19){var _0x68b09=a488_0x3c6d2e;_0x4ae07e[_0x68b09(0xac)]=_0x167c19;}),__importStar=this&&this[a488_0x3c6d2e(0xc4)]||function(_0x3bb7ea){var _0x3418bf=a488_0x3c6d2e;if(_0x3bb7ea&&_0x3bb7ea[_0x3418bf(0x9f)])return _0x3bb7ea;var _0x36ef43={};if(_0x3bb7ea!=null){for(var _0x31b885 in _0x3bb7ea)if(_0x31b885!==_0x3418bf(0xac)&&Object['prototype'][_0x3418bf(0xa4)][_0x3418bf(0xb9)](_0x3bb7ea,_0x31b885))__createBinding(_0x36ef43,_0x3bb7ea,_0x31b885);}return __setModuleDefault(_0x36ef43,_0x3bb7ea),_0x36ef43;},__importDefault=this&&this[a488_0x3c6d2e(0xb7)]||function(_0x1a2596){return _0x1a2596&&_0x1a2596['__esModule']?_0x1a2596:{'default':_0x1a2596};};Object[a488_0x3c6d2e(0xbe)](exports,a488_0x3c6d2e(0x9f),{'value':!![]});const sequelize_1=require(a488_0x3c6d2e(0xab)),_=__importStar(require(a488_0x3c6d2e(0x9b))),database_1=__importDefault(require(a488_0x3c6d2e(0xa2)));async function DashboardDataService(_0x2d82d8,_0x6a71f4){var _0x2907b2=a488_0x3c6d2e;const _0x244324=_0x2907b2(0xa6);let _0x275e5e=_0x2907b2(0xae);const _0x171637=[_0x2d82d8];_[_0x2907b2(0xa1)](_0x6a71f4,_0x2907b2(0xa0))&&(_0x275e5e+='\x20and\x20tt.\x22createdAt\x22\x20>=\x20(now()\x20-\x20\x27?\x20days\x27::interval)',_0x171637[_0x2907b2(0xb1)](parseInt((''+_0x6a71f4[_0x2907b2(0xa0)])[_0x2907b2(0xaf)](/\D/g,''),0xa)));_['has'](_0x6a71f4,_0x2907b2(0x9d))&&(_0x275e5e+='\x20and\x20tt.\x22createdAt\x22\x20>=\x20?',_0x171637['push'](_0x6a71f4[_0x2907b2(0x9d)]+'\x2000:00:00'));_[_0x2907b2(0xa1)](_0x6a71f4,_0x2907b2(0xbd))&&(_0x275e5e+='\x20and\x20tt.\x22createdAt\x22\x20<=\x20?',_0x171637[_0x2907b2(0xb1)](_0x6a71f4[_0x2907b2(0xbd)]+_0x2907b2(0xbf)));_0x171637[_0x2907b2(0xb1)](_0x2d82d8),_0x171637[_0x2907b2(0xb1)](_0x2d82d8),_0x171637['push'](_0x2d82d8);const _0x2b8683=_0x244324[_0x2907b2(0xaf)](_0x2907b2(0xc0),_0x275e5e),_0xcb1995=await database_1[_0x2907b2(0xac)][_0x2907b2(0x9e)](_0x2b8683,{'replacements':_0x171637,'type':sequelize_1['QueryTypes'][_0x2907b2(0xa8)],'plain':!![]});return _0xcb1995;}function a488_0x20ea(_0x192a62,_0x4622dd){var _0x4908ca=a488_0x3aad();return a488_0x20ea=function(_0x4ac31e,_0x361671){_0x4ac31e=_0x4ac31e-0x9b;var _0x3aadd6=_0x4908ca[_0x4ac31e];return _0x3aadd6;},a488_0x20ea(_0x192a62,_0x4622dd);}exports[a488_0x3c6d2e(0xac)]=DashboardDataService;