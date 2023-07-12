import React, { Component } from 'react';
import { StyledModal, StyledOverlay } from './styled';

export default class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClickOverlay = (event) => {
    if(event.target === event.currentTarget) {
      this.props.onCloseModal();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <StyledOverlay onClick={this.handleClickOverlay}>
        <StyledModal>
          <button onClick={this.props.onCloseModal} className="close-btn">
            &times;
          </button>
          <h2>Modal window</h2>
          {/* <Book id={this.props.modalData.id} title={this.props.modalData.title} /> */}
          <pre>{JSON.stringify(this.props.modalData, null, 2)}</pre>
        </StyledModal>
      </StyledOverlay>
    );
  }
}
