import * as $ from 'jquery';
import affix from './affix';

export default () => {
  affix('.home #nav', {
    top: $('header').height()
  });
}
