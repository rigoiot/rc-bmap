import Util from '../utils';
import BMapUtil from '../utils/map';
import OPTIONS from '../options/label';
import BaseOverlay from './BaseOverlay';

const getLabelOptions = (config) => ({
  position: config.position,
  content: config.content,
  styles: config.styles,
});

class TextIcon extends BaseOverlay {
  outOfRangeOpts = [];

  init(config = {}) {
    if (config.position) {
      config.position = Util.convert2BPoint(config.position);
    }
    const options = getLabelOptions(config);
    this.instance = BMapUtil.BTextIcon(options.position, options.content, options.styles);
    this.map.addOverlay(this.instance);
    // this.processOptions(config);
  }

  processOptions(config) {
    if (config.position) {
      config.position = Util.convert2BPoint(config.position);
    }
    Util.processSetOptions(this.instance, OPTIONS.SET, config);
    Util.processBooleanOptions(this.instance, OPTIONS.BOOLEAN, config);
  }
}

export default TextIcon;
