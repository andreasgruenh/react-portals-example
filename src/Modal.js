import React, { Component } from 'react';
import { portal } from 'react-portals';
import './Modal.css';

class Modal extends Component {
  componentDidMount() {
    this._updateChild();
  }
  componentDidUpdate() {
    this._updateChild();
  }
  componentWillUnmount() {
    this.props.updateChild(null);
  }
  render() {
    return null;
  }
  _updateChild() {
    const node = (
      <div className="modal" key={this.props.childId}>
        <div className="modal-backdrop" onClick={this.props.onBackDropClick} />
        <div className="modal-dialog">
          {this.props.children}
        </div>
      </div>
    );
    this.props.updateChild(node);
  }
}

export default portal('modals', 'updateChild', 'childId')(Modal);
