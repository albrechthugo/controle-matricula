import { ElementFinder, $$, $, ElementArrayFinder} from 'protractor';

export abstract class PageDefault {

  get pageHeaderTitle(): ElementFinder {
    return $('.po-page-header-title');
  }

  get noDataText(): ElementFinder {
    return $('.po-table-no-data span');
  }

  get showMoreButton(): ElementFinder {
    return $('po-table div div div po-button button.po-button.po-text-ellipsis');
  }

  get filter(): ElementFinder {
    return $('[name=model]');
  }

  getTableLines(): ElementArrayFinder {
    return $$('po-table table tbody tr');
  }
  getTableLine(line: number): ElementFinder {
    return $$('po-table table tbody tr').get(line);
  }

  getTableColumnByLine(line: number, column: number): ElementFinder {
    const lineElement = this.getTableLine(line);
    return lineElement.$$('td span').get(column);
  }
}
