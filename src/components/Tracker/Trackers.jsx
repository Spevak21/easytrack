import { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

import Tracker from './Tracker';

const StyledTrackers = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  width: 100%;
`;

function Trackers() {
  const dispatch = useDispatch();
  const trackers = useSelector((state) => state.data.trackers);

  useEffect(() => {
    if (trackers.length === 0) {
      dispatch(uiActions.changePage('projects'));
    }
  }, [trackers, dispatch]);

  return (
    <StyledTrackers>
      {trackers.map((tracker) => (
        <Tracker key={tracker.taskId} tracker={tracker} />
      ))}
    </StyledTrackers>
  );
}

export default Trackers;
