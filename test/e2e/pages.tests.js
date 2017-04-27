describe("E2E testing", function() {
    it("should display home page", function() {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

    it("should display home page", function() {
        browser.get('/#/home');
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    it("should display separate projects", function() {
        var idList = protractor.config.projects.idList;
        for (var i = 0; i < idList.length; i++) {
            var url = "/#/projects/" + idList[i];
            browser.get(url);
            browser.wait(function() {
                return element(by.css('.readme-content-loaded')).isPresent();
            }, 5000, 'README content was not loaded in time.');
            expect(element(by.css('.readme-content-loaded')).isPresent());
        }
    });
});
