import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from '../Slide/index.jsx';

class Slides extends Component {
  render() {
    const { index, slides } = this.props;
    return <Slide slide={slides[index]} />;
  }
}
Slides.propTypes = {
  index: PropTypes.number,
  slide: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
};
Slides.defaultProps = { index: 0 };
export default Slides;
