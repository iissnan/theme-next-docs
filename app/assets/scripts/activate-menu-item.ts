import * as $ from 'jquery';

export default () => {
  let pathname = window.location.pathname;
  let menuItemSelector = `[href="${pathname}"]`;

  $('#nav')
    .find(menuItemSelector)
    .parent()
    .addClass('active');
};
