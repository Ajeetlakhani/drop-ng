/**
 * Setting up protractor and selenium
 *  Install JDK:  http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
 * 	npm install -g protractor
 * 	webdriver-manager update
 *
 * Starting webdriver
 * 	webdriver-manager start
 *
 * Starting the tests
 *  protractor protractor.config.js
 */

describe('[e2e] drop-ng: close action example', function () {
     it('should appear when parent button is clicked and close when parent button clicked again', function() {
       browser.get('/example/close-action');

       // check drop doesn't exist
       expect(element(by.css('.drop-open')).isPresent()).toBe(false);

       // click the parent button
       element(by.css('.drop-target')).click();

       // check drop does exist
       expect(element(by.css('.drop-open')).isPresent()).toBe(true);

       //Annoying but this fails if we don't put a sleep here first. Protractor doesn't seem to automatically wait for the drop animation to complete.
       browser.sleep(300);

       element(by.id('closeElement')).click();

       // check drop doesn't exist
       expect(element(by.css('.drop-open')).isPresent()).toBe(false);
     });
 });
