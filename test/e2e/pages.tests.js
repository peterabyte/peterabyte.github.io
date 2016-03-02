describe("E2E testing", function() {
    it("should display home page", function() {
        browser.get('/');
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

    it("should display home page", function() {
        browser.get('/#/home');
        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    it("should display home page with specific welcome code", function() {
        var typeList = protractor.config.welcomeCode.typeList;
        for (var i = 0; i < typeList.length; i++) {
            var url = '/#/home/' + typeList[i];
            browser.get(url);
            browser.wait(function() {
                return element(by.css('.welcome-code-loaded')).isPresent();
            }, 5000, 'Welcome code was not loaded in time.');
            expect(element(by.css('.welcome-code-loaded')).isPresent());
        }
    });

    it("should display projects page", function() {
        browser.get('/#/projects');
        browser.wait(function() {
            var idList = protractor.config.projects.idList;
            var allDescriptionsLoaded = true;
            for (var i = 0; i < idList.length; i++) {
                allDescriptionsLoaded = allDescriptionsLoaded &&
                    element(by.css('.' + idList[i] + '-content-loaded')).isPresent();
            }
            return allDescriptionsLoaded;
        }, 5000, 'Project descriptions were not loaded in time.');
        expect(browser.getLocationAbsUrl()).toMatch("/projects");
    });

    it("should display support page", function() {
        browser.get('/#/support');
        expect(browser.getLocationAbsUrl()).toMatch("/support");
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

    it("should click through the menu links", function() {
        var menu = element(by.css("#homepage-navbar"));

        var menuItem = element(by.css("a[data-menu-item='home']"));
        menu.click();
        menuItem.click();
        expect(browser.getLocationAbsUrl()).toMatch("/home");

        var menuItem = element(by.css("a[data-menu-item='projects']"));
        menu.click();
        menuItem.click();
        expect(browser.getLocationAbsUrl()).toMatch("/projects");

        var menuItem = element(by.css("a[data-menu-item='support']"));
        menu.click();
        menuItem.click();
        expect(browser.getLocationAbsUrl()).toMatch("/support");
    });
});
