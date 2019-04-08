/**
* Formats text data that can function as standalone chapters or as chapters loaded by the main app
* This attempts to load folders in the ./input/ directory, read the ./input/version/info.json and
* then use a renderer found in ./tools/generators/renderername.js
*
* See options for details on running
*/


// MODULES
var fs = require('fs'),
	path = require('path'),
	rmrf = require('rimraf').sync,
	mkdirp = require('mkdirp').sync,
	bibleData = require('./data/bible_data.js'),
	bibleFormatter = require('./bible_formatter.js'),
	verseIndexer = require('./verse_indexer.js'),
	ProgressBar = require('progress'),
	strongs = require('strongs'),
	argv = require('minimist')(process.argv.slice(2));


// VARS
var
	baseOutput = path.join('app', 'content', 'lexicons', 'strongs','entries'),
	baseInput = 'input',
	createIndex = !!argv['i'],
	progressBar = null;

// parse arguments
if (argv['h']) {
	console.log('----------------\n' +
				'Generator Help\n' +
				'-v VERSION,VERSION = only some versions\n' +
				'-e VERSION,VERSION = exclude some versions\n' +
				'-i = create index\n');
	return;
}

// Generate listed texts
if (argv['v'] !== undefined) {
	convertTexts(baseInput, argv['v'].split(','));

// Generate all but listed texts
} else if (typeof argv['e'] != 'undefined') {
	var foldersToExclude = argv['e'].split(',');

	var folders = fs.readdirSync(baseInput);

	convertTexts(
		baseInput,
		folders.filter(function(name) { return foldersToExclude.indexOf(name) === -1; })
	);

// Generate all texts
} else {
	writeStrongs();
}


// Functions
function startProgress(total, label) {
	label = label || 'Progress';

	if (progressBar != null) {
		progressBar.terminate();
	}
	progressBar = new ProgressBar('[:bar] [:current/:total] :elapseds', {total: total, width: 50});
}

function updateProgress() {
	progressBar.tick();
}

function cleanFolder(folderPath) {
	mkdirp(folderPath);
	rmrf(path.join(folderPath, '*'));
}

function writeStrongs() {

	//var infoFilePath = path.join(inputPath, 'info.json'),
	var startDate = new Date();

	
	var info = {
		name: "Strongs",
		generator: "internal",
	}
		generatorName = info.generator,
		outputPath = path.join(baseOutput),
		indexOutputPath = path.join(outputPath, 'index'),
		indexLemmaOutputPath = path.join(outputPath, 'indexlemma'),
		generator = null;

	
	console.log('-----');
	console.log(info['name'],  outputPath);

	// DELETE: existing data
	cleanFolder(outputPath);

	
	// create chapters
	console.time('outputFiles');
	var entries = Object.keys(strongs);
	startProgress(entries.length, "Lexicon");
	for(var i = 0; i < entries.length; i++){
		strongs[entries[i]].outline = "<ol><li>" + strongs[entries[i]].strongs_def+"+</li><li>"+strongs[entries[i]].kjv_def+"</li></ol>";
		fs.writeFileSync(path.join(outputPath, entries[i]+'.json'), JSON.stringify(strongs[entries[i]]));
		updateProgress();
	}
	console.timeEnd('outputFiles');


	console.log('-time: ' + MillisecondsToDuration((new Date()) - startDate));

	return;
}

function convertTexts(baseInput, texts) {
	mkdirp(baseOutput);

	texts = texts === undefined ? fs.readdirSync(baseInput) : texts;

	texts.forEach(function(textFoldername) {
		convertFolder(path.join(baseInput, textFoldername));
	});
}

function MillisecondsToDuration(n) {
	var hms = "";
	var dtm = new Date();
	dtm.setTime(n);

	var h = "000" + Math.floor(n / 3600000);
	var m = "0" + dtm.getMinutes();
	var s = "0" + dtm.getSeconds();
	var cs = "0" + Math.round(dtm.getMilliseconds() / 10);

	hms = h.substr(h.length-4) + ":" + m.substr(m.length-2) + ":";
	hms += s.substr(s.length-2) + "." + cs.substr(cs.length-2);

	return hms;
}
