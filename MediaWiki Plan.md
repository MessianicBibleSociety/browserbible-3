# Media Wiki Plan for Commentary

## In Progress:

1. Create an simplified version of the commentary page that can be displayed in browserbible (2 hours for base) (in progress) (3 hours)

	* create a skin for mediawiki that will display only the relevent content and style it appropriately for use in browserbible
	* create a subdomain external.messianicbible.com that automatically uses the skin

2. Article Editing (???):

	* need to come up with a better way to edit the CommentaryMeta and CrossReference templates
	* possibly integrate strongs references for use in commentary

3. User login and Editing Permissions: (3 hours)

	* Setup user group for commentary editors that allow members to edit article but they need to be approved by Gabizon
	* add terms of use and copyright acceptance

4. Notifications: 

	* Editors need to be notified by email when a comment is made or a new article is posted.



To integrate mediawiki as an external source we will need to do the follwoing:


1. We need to have a way for the editors of the commentary to enter the scripture references that each commentary page is about. These links then need to be generated in media wiki as a json file. 

2. Create an alternate page that uses the text of the commentary but is styled appropriately for browserbible.

3. We need to create a plugin for browserbible to use the json data from mediawiki to display the commentary articles. Browser bible automatically uses the json file to synchronize any of the bible versions with the commentary window.






## Extend BrowserBible (5 hours + 1 hour for testing)

We need to create a plugin that is based on the browserbible media plugin so that the commentary will be loaded into an iframe and be synchronized when the user navigates through bible windows.

1. Need to load the json file from the mediawiki site (external.messianicbible.com). Ideally this should be something like commentary.json that will be formatted in the browserbible synchronization format. (3 hours) (completed)

2. The plugin will then load the iframe content. (2 hours) (completed)

3. Syncronization should be handled by the built in mechanisms - Need to experiment more with syncoronization and accordian mechanism

4. Add introduction page and table of contents


## MediaWiki (10 hours + 2 hours for testing)

We need to:

1. Create mandatory template that will be on each commentary page that has the metadata for the page (2 hours) (completed)

	* Passage(s) of scripture that commentary text or article is about
	* Cross references (optional) for the commentary text or article

	Scripture references should be of a form that can be parsed by [browserbible BibleReference](app/js/bible/bible.reference.js)


2. Generate the commentary.json file that will be read by browserbible. (6 hours) (completed)

	* need to research how to do this, either through the existing mediawiki api or through a plugin (this should be more performant)

3. Create an simplified version of the commentary page that can be displayed in browserbible (2 hours for base) (in progress)

	* create a skin for mediawiki that will display only the relevent content and style it appropriately for use in browserbible
	* create a subdomain external.messianicbible.com that automatically uses the skin




#### Other items to verify

* Visual Editor Integration for commentary aricles

	* need to come up with a better way to edit the CommentaryMeta and CrossReference templates
	* possibly integrate strongs references for use in commentary
	* see if we need to use the usfm plugin for commentary or just straight mediawiki syntax