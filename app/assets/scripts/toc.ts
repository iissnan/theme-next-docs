import * as $ from 'jquery';
import affix from './affix';

export default () => {
  const SIDEBAR_SELECTOR = '.next-docs-sidebar';
  let hasSidebar = $(SIDEBAR_SELECTOR).length > 0;

  if (hasSidebar) {
    affix(SIDEBAR_SELECTOR, {
      top: $('.next-docs-sections').offset().top,
      bottom: 120
    });

    $('body').scrollspy({ target: SIDEBAR_SELECTOR });
  }
}
