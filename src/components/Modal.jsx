import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { resetModal } from '../store/data-actions';

import { colors, opacity, shadows } from '../util/variables';
import { resetBgOnMouseLeave, trackMouse } from '../util/helpers';

import TaskDetails from './Task/TaskDetails';
import Confirmation from './Confirmation';
import TimelineSettings from './Dashboard/Timeline/TimelineSettings';
import AddEditForm from './Project/AddEditForm';
import ActivityHistory from './Dashboard/ActivityHistory';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 28, 73, 0.5);
  backdrop-filter: blur(20px);
  z-index: 1;
`;
const StyledModal = styled.div`
  &.fixed {
    position: fixed;
  }

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${shadows.cardShadowSharp}, ${shadows.cardShadowSoft};
  z-index: 2;
  min-width: 50rem;
  max-width: 90%;
  max-height: 90%;
  margin: auto;
  background-clip: padding-box;

  &.history {
    height: calc(100% - 3.2rem);
    width: calc(100% - 3.2rem);
    max-width: unset;
    max-height: unset;
  }
`;

function Modal() {
  const dispatch = useDispatch();
  const formType = useSelector((state) => state.ui.formType);
  const confirmationType = useSelector((state) => state.ui.confirmationType);
  const actionOrigin = useSelector((state) => state.ui.actionOrigin);

  const handleModalClose = useCallback(() => {
    if (formType !== null) {
      if (actionOrigin === 'details') {
        dispatch(uiActions.setFormType('task-details'));
        dispatch(uiActions.setActionOrigin(null));
      } else {
        dispatch(resetModal());
      }
    }
  }, [formType, actionOrigin, dispatch]);

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  let modalContent;

  if (
    formType === 'new-project' ||
    formType === 'edit-project' ||
    formType === 'new-task' ||
    formType === 'edit-task'
  ) {
    modalContent = <AddEditForm onClose={handleModalClose} />;
  } else if (formType === 'task-details') {
    modalContent = <TaskDetails onClose={handleModalClose} />;
  } else if (formType === 'timeline-settings') {
    modalContent = <TimelineSettings onClose={handleModalClose} />;
  } else if (formType === 'activity-details') {
    modalContent = <ActivityHistory onClose={handleModalClose} />;
  } else if (formType === 'confirmation') {
    modalContent = <Confirmation type={confirmationType} onClose={handleModalClose} />;
  }

  const isOpen = formType !== null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleModalClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleModalClose, dispatch]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <Backdrop onClick={handleModalClose} />
      <StyledModal
        className={`box fixed ${formType === 'activity-details' ? 'history' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseOut}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {modalContent}
      </StyledModal>
    </>,
    document.getElementById('modal')
  );
}

export default Modal;
