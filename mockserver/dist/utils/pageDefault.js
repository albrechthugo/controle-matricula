"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageDefault = void 0;
var protractor_1 = require("protractor");
var PageDefault = /** @class */ (function () {
    function PageDefault() {
    }
    Object.defineProperty(PageDefault.prototype, "pageHeaderTitle", {
        get: function () {
            return protractor_1.$('.po-page-header-title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageDefault.prototype, "noDataText", {
        get: function () {
            return protractor_1.$('.po-table-no-data span');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageDefault.prototype, "showMoreButton", {
        get: function () {
            return protractor_1.$('po-table div div div po-button button.po-button.po-text-ellipsis');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PageDefault.prototype, "filter", {
        get: function () {
            return protractor_1.$('[name=model]');
        },
        enumerable: false,
        configurable: true
    });
    PageDefault.prototype.getTableLines = function () {
        return protractor_1.$$('po-table table tbody tr');
    };
    PageDefault.prototype.getTableLine = function (line) {
        return protractor_1.$$('po-table table tbody tr').get(line);
    };
    PageDefault.prototype.getTableColumnByLine = function (line, column) {
        var lineElement = this.getTableLine(line);
        return lineElement.$$('td span').get(column);
    };
    return PageDefault;
}());
exports.PageDefault = PageDefault;
