define(['jquery'], function ($) {
    "use strict";

    window.util = {
        errorHandler: {
            mainErrorContainerId: 'errorContainer',

            getContainer: function () {
                return $('#' + this.mainErrorContainerId);
            },

            reset: function () {
                var container = this.getContainer();
                container.addClass('visually-hidden');
                container.find('#errorItemList').empty();
            },

            error: function (msg) {
                console.error(msg);
                var container = this.getContainer(),
                    errorItem = $('<li class="errorItem">' + msg + '</li>');
                container.find('#errorItemList').append(errorItem);
                container.removeClass('visually-hidden');
            }
        }
    };

    return window.util;
});
