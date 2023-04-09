{
"targets":
    [
	{
		"target_name":"electron-addtoDesktop",
		"sources":["lib/addtoDesktop.cpp"],
		"include_dirs":[
			"<!@(node -p \"require('node-addon-api').include\")",
		],
		"dependencies":[
		"<!(node -p \"require('node-addon-api').gyp\")"
		],
		"cflags!":["-fno-exceptions"],
		"cflags_cc!":["-fno-exceptions"],
		'defines':['NAPI_DISABLE_CPP_EXCEPTIONS']
	}
	]
}