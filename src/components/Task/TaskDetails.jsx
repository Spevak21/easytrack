import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { resetModal, startTracking } from '../../store/data-actions';

import { colors, opacity } from '../../util/variables';
import { formatDate } from '../../util/helpers';

import Pencil from '../../assets/pencil.svg';
import CheckCircle from '../../assets/check-circle.svg';
import Ban from '../../assets/ban.svg';
import Undo from '../../assets/undo.svg';
import Trash from '../../assets/trash.svg';

import Time from '../widgets/Time';
import Button from '../../UI/Button';
import TaskLog from './TaskLog';

const StyledDetails = styled.div`
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 3.2rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      display: flex;
      gap: 0.8rem;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      gap: 1rem;

      .dates {
        display: flex;
        gap: 1.2rem;
        width: 100%;

        span {
          display: flex;
          flex-direction: column;
          margin-bottom: 0;
          line-height: 1.6rem;
          font-size: 1.4rem;
        }
      }

      .tags {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .task-description {
      font-size: 1.6rem;
      line-height: 150%;
      white-space: pre-line;
    }

    .task-logs {
      position: relative;
      display: flex;
      flex-direction: column;
      max-height: 300px;
      overflow: auto;

      & > div:nth-of-type(odd) {
        background-color: ${colors.white + opacity[3]};
      }
    }
  }
`;

function TaskDetails({ onClose }) {
  const dispatch = useDispatch();
  const tempData = useSelector((state) => state.data.tempData);
  const isTracked = useSelector((state) => state.data.trackers.some((tracker) => tracker.taskId === tempData.id));
  const isArchived = useSelector((state) => state.projects.find((project) => project.id === tempData.projectId).status !== 'active');

  const handleTrackerSet = () => {
    dispatch(startTracking(tempData));
    dispatch(resetModal());
  };

  const handleTaskEditModal = () => {
    dispatch(uiActions.setFormType('edit-task'));
    dispatch(uiActions.setActionOrigin('details'));
  };

  const handleTaskFinishModal = () => {
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('finish-task'));
    dispatch(uiActions.setActionOrigin('details'));
  };

  const handleTaskDiscardModal = () => {
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('discard-task'));
    dispatch(uiActions.setActionOrigin('details'));
  };

  const handleTaskRestoreModal = () => {
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('restore-task'));
    dispatch(uiActions.setActionOrigin('details'));
  };

  const handleTaskRemoveModal = () => {
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('remove-task'));
    dispatch(uiActions.setActionOrigin('details'));
  };

  const displayTrackers = () => {
    dispatch(uiActions.changePage('trackers'));
    dispatch(resetModal());
  };

  return (
    <StyledDetails className="form">
      <div className="card-header">
        <h2>{tempData.name}</h2>
        <div className="card-header-icons">
          {tempData.status === 'active' && (
            <>
              <img
                className="icon"
                src={Pencil}
                title="Edit task"
                alt="Pencil icon"
                onClick={handleTaskEditModal}
              />
              {isTracked ? (
                <img
                  className="icon"
                  src={import.meta.env.BASE_URL + 'stopwatch.svg'}
                  title="Go to trackers"
                  alt="Stopwatch icon"
                  onClick={displayTrackers}
                />
              ) : (
                <>
                  <img
                    className="icon"
                    src={CheckCircle}
                    title="Finish task"
                    alt="Check icon"
                    onClick={handleTaskFinishModal}
                  />
                  <img
                    className="icon"
                    src={Ban}
                    title="Discard task"
                    alt="Discard icon"
                    onClick={handleTaskDiscardModal}
                  />
                </>
              )}
            </>
          )}
          {tempData.status === 'discarded' && !isArchived && (
            <>
              <img
                className="icon"
                src={Undo}
                title="Restore task"
                alt="Undo icon"
                onClick={handleTaskRestoreModal}
              />
            </>
          )}
          {(tempData.status === 'discarded' ||
            tempData.status === 'finished') && (
            <>
              <img
                className="icon"
                src={Trash}
                title="Delete task"
                alt="Trash icon"
                onClick={handleTaskRemoveModal}
              />
            </>
          )}
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="info">
          <div className="dates">
            <span>
              <label>Created:</label>
              {formatDate(tempData.dateCreated, 'dd.mm.yyyy.')}
              <br />( {formatDate(tempData.dateCreated, 'hh:mm:ss')} )
            </span>
            {tempData.dateModified && (
              <span>
                <label>Modified:</label>{' '}
                {formatDate(tempData.dateModified, 'dd.mm.yyyy.')}
                <br />( {formatDate(tempData.dateModified, 'hh:mm:ss')} )
              </span>
            )}
            {tempData.dateFinished && (
              <span>
                <label>Finished:</label>{' '}
                {formatDate(tempData.dateFinished, 'dd.mm.yyyy.')}
                <br />( {formatDate(tempData.dateFinished, 'hh:mm:ss')} )
              </span>
            )}
            {tempData.dateDiscarded && (
              <span>
                <label>Discarded:</label>{' '}
                {formatDate(tempData.dateDiscarded, 'dd.mm.yyyy.')}
                <br />( {formatDate(tempData.dateDiscarded, 'hh:mm:ss')} )
              </span>
            )}
            {tempData.deadline && (
              <span>
                <label>Deadline: </label>
                {formatDate(tempData.deadline, 'dd.mm.yyyy.')}
                <br />( {formatDate(tempData.deadline, 'hh:mm:ss')} )
              </span>
            )}
          </div>
          <div className="tags">
            <Time value={tempData.time} title="Task track time" />
            {!isArchived && (
              <span className={`priority-tag ${tempData.priority}`} title="Task priority" >
                {tempData.priority}
              </span>
            )}
          </div>
        </div>
        <p className="task-description">{tempData.description}</p>
        <div className="task-logs">
          {tempData.trackLogs.map((log, i) => <TaskLog key={tempData.id + i} log={log} />)}
        </div>
      </div>
      <hr />
      <div className="button-group">
        <Button type="button" onClick={onClose}>
          Close
        </Button>
        {tempData.status === 'active' && !isTracked && (
          <Button
            className="active"
            type="button"
            autoFocus
            onClick={handleTrackerSet}
          >
            Start tracking
          </Button>
        )}
      </div>
    </StyledDetails>
  );
}

TaskDetails.propTypes = {
  onClose: PropTypes.func,
};

export default TaskDetails;
