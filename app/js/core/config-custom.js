// change any config values here
sofia.config = $.extend(sofia.config, {
	settingsPrefix: '20190507',
	enableOnlineSources: true,
	gaKey: 'UA-2999882-2',
	windows: [
		{type: 'bible', data: {textid: 'eng_kjv', fragmentid: 'JN1_1'}, fixed:'right'},
		{type: 'bible', data: {textid: 'eng_web', fragmentid: 'JN1_1'}},
		{type: 'search', data: {textid: 'grc_wh', searchtext:'truth love'}}
	]
});

// add secondary, custom configuration loaded with ?custom=dbs
sofia.customConfigs = {
	"dbs": {
		customCssUrl: 'dbs.css'
	}
};
