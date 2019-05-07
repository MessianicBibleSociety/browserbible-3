// change any config values here
sofia.config = $.extend(sofia.config, {
	enableOnlineSources: true,
	gaKey: 'UA-2999882-2'
});

// add secondary, custom configuration loaded with ?custom=dbs
sofia.customConfigs = {
	"dbs": {
		customCssUrl: 'dbs.css'
	}
};
