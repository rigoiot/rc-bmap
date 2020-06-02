import PropTypes from 'prop-types';
import BaseOverlay from '../BaseOverlay';
import { TextIcon as BTextIcon } from '../../../core';

class TextIcon extends BaseOverlay {
  static contextTypes = {
    getMapInstance: PropTypes.func,
    centralizedUpdates: PropTypes.func,
  };

  componentDidMount() {
    const { context, props } = this;
    const { children, ...resetProps } = props;
    this.config = { ...this.config, ...resetProps };
    this.mapInstance = context.getMapInstance();
    const overlay = this.getRealOverlay();
    this.overlay = overlay;
    this.instance = overlay.instance;

    context.centralizedUpdates({
      name: 'textIcon',
      data: this.instance,
    });
  }

  componentDidUpdate() {
    const { context } = this;
    const { children, ...resetProps } = this.props;
    this.config = { ...this.config, ...resetProps };
    this.overlay.repaint({ ...this.config });

    context.centralizedUpdates({
      name: 'textIcon',
      data: this.overlay.instance,
    });
  }

  getRealOverlay = () => new BTextIcon(this.config, this.mapInstance);
}

export default TextIcon;
