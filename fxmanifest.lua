game 		 'rdr3'
fx_version 	 'cerulean'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'
author 	     'ALTITUDE-DEV.COM'
description  'infinitycore Clothes module sync with skin and core'
version 	 '1.0.0'
infinitycore_dev 	    'Shepard & iireddev'


ui_page "html/core.html"

files {
    'html/fonts/*.eot',
	'html/fonts/*.ttf',
	'html/fonts/*.woff',
	'html/fonts/*.woff2',
    'html/vendor/*.css',
    'html/core.html',
    'html/core.js',
    'html/design/*.png',
    'html/design/*.jpg',
    'html/*.css'
}

client_scripts {
    'config.lua',
	'clothes.lua',
	'core.lua',
    'cl_shops.lua'
}

server_scripts {
	'@oxmysql/lib/MySQL.lua',
    'config.lua',
	'server.lua'
}

exports {
	'LoadOutfit'
}