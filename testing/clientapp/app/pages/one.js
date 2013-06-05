var PageView = require('pages/base'),
    templates = require('templates');


module.exports = PageView.extend({
    template: templates.pages.one,
    render: function () {
        this.basicRender();
        return this;
    }
});
