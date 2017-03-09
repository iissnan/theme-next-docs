import * as $ from 'jquery';

interface Offset {
  top?: number,
  bottom?: number
}

export default (target: string, offset: Offset) => {
  $(target).affix({ offset: offset });
};
