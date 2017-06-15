import React from 'react';
import { portalTarget } from 'react-portals';
import { CSSTransitionGroup } from 'react-transition-group';

function ModalTarget({ children }) {
  return (
    <CSSTransitionGroup
      className="modal-target"
      transitionName="modal-transition"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {children}
    </CSSTransitionGroup>
  );
}

export default portalTarget('modals')(ModalTarget);
