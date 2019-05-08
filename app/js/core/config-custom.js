// change any config values here
sofia.config = $.extend(sofia.config, {
	settingsPrefix: '20190508',
	enableOnlineSources: true,
	gaKey: 'UA-2999882-2',
	windows: [
		{type: 'bible', data: {textid: 'MPB', fragmentid: 'GEN_1'}},
	   {type: 'bible', data: {textid: 'heb_wlc', fragmentid: 'GN_1'}, fixed:'right'},
	   {type: 'search', data: {textid: 'eng_web', searchtext:'truth love'}}
	]
});

// add secondary, custom configuration loaded with ?custom=dbs
sofia.customConfigs = {
	"dbs": {
		customCssUrl: 'dbs.css'
	}
};
