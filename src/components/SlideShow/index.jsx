import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { withRouter } from 'react-router';
import Slides from '../Slides/index.jsx';
import Toolbar from '../Toolbar/index.jsx';

const SLIDES = [
  {
    type: 'title', title: 'TIW 8', visible: true, notes: '',
  },
  {
    type: 'content',
    title: 'TP 1',
    text: 'Le TP porte sur des rappels de developpement Web',
    visible: false,
    notes: 'ce transparent est caché',
  },
  {
    type: 'content',
    title: 'TP 2',
    text: "Le TP porte sur la creation d'un outil de presentation HTML",
    visible: true,
    notes: '',
  },
  {
    type: 'content', title: 'TP 3', text: 'Le TP 3', visible: true, notes: '',
  },
  {
    type: 'content', title: 'TP 4', text: 'Le TP 4', visible: true, notes: '',
  },
  {
    type: 'title', title: 'Question ?', visible: true, notes: '',
  },
];
class SlideShow extends Component {
  constructor(props) {
    super(props);
    const { page } = parseInt(this.props.match.params.page);
    this.state = { index: page - 1 || 0 };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(index) {
    this.setState({ index: parseInt(index) });
  }

  render() {
    const { index } = this.state;
    const size = SLIDES.length;
    return (
      <Container>
        <Slides slides={SLIDES} index={index} />
        <Toolbar size={size} index={index} onChangeIndex={this.changeIndex} />
      </Container>
    );
  }
}
SlideShow.propTypes = {
  index: PropTypes.number,
  match: PropTypes.shape({
    page: PropTypes.number,
  }),
};
SlideShow.defaultProps = { index: 0 };
export default withRouter(SlideShow);
