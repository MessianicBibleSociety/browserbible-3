# Media Wiki Plan for Commentary

To integrate mediawiki as an external source we will need to do the follwoing:

1. Extend BrowserBible with a plugin that pulls the commentary data from media wiki as a json file.
2. Create a simplified version of mediawiki that pulls only the commentary information via iframe into browserbible.
2. Figure out a way to organize the wiki so that the json file can be retrieved.

## Extend BrowserBible (5 hours)

We need to create a plugin that is based on the browserbible media plugin so that the commentary will be loaded into an iframe and be synchronized when the user navigates through bible windows.

1. Need to load the json file from the mediawiki site (external.messianicbible.com). Ideally this should be something like commentary.json that will be formatted in the browserbible synchronization format. (3 hours)

2. The plugin will then load the iframe content. (2 hours)

3. Syncronization should be handled by the built in mechanisms


## MediaWiki (10 hours)

We need to:

1. Create mandatory template that will be on each commentary page that has the metadata for the page (2 hours)

	* Passage(s) of scripture that commentary text or article is about
	* Cross references (optional) for the commentary text or article

	Scripture references should be of a form that can be parsed by [browserbible BibleReference](app/js/bible/bible.reference.js)


2. Generate the commentary.json file that will be read by browserbible. (6 hours)

	* need to research how to do this, either through the existing mediawiki api or through a plugin (this should be more performant)

3. Create an simplified version of the commentary page that can be displayed in browserbible (2 hours for base)

	* create a skin for mediawiki that will display only the relevent content and style it appropriately for use in browserbible
	* create a subdomain external.messianicbible.com that automatically uses the skin




#### Other items to verify

* Visual Editor Integration for commentary aricles

	* need to see how the template will work
	* possibly integrate strongs references for use in commentary
	* see if we need to use the usfm plugin for commentary or just straight mediawiki syntax