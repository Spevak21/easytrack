import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { dataActions } from '../../store/data-slice';

import { colors, opacity, shadows } from '../../util/variables';
import { formatDate } from '../../util/helpers';

import Undo from '../../assets/undo.svg';
import Trash from '../../assets/trash.svg';

import TaskItem from '../Task/TaskItem';
import Time from '../widgets/Time';

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;

  border: 1px solid
    ${({ $status }) => {
      if ($status === 'finished') {
        return colors.valid + opacity[20];
      } else if ($status === 'discarded') {
        return colors.invalid + opacity[20];
      }
    }};
  border-radius: 0.8rem;
  cursor: pointer;

  &:hover {
    animation: 0.5s pulseShadow forwards;

    .card-header {
      &-icons {
        position: unset;

        .icon {
          opacity: 1;
        }
      }
    }
  }

  .card-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      line-height: 2.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &-icons {
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      gap: 0.8rem;

      .icon {
        opacity: 0;
      }
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.2rem;

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
    }

    .project-description {
      font-size: 1.6rem;
      line-height: 150%;
      white-space: pre-line;
    }

    .project-tasks {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      opacity: 0;
      transition: all 0.5s;

      &.show {
        opacity: 1;
      }

      .chart-nav {
        display: flex;
        flex-wrap: nowrap;
        height: 3.2rem;
        width: 100%;

        button {
          height: 100%;
          padding: 0.8rem;
          font-size: 1.6rem;
          line-height: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: ${colors.white};
          background-color: transparent;
          transition: all 0.25s ease-out;
          cursor: pointer;

          &.finished {
            background-color: ${colors.validDark + opacity[50]};
            border: 1px solid ${colors.validDark + opacity[50]};
            border-left: none;
            border-right: none;

            &.target,
            &:hover {
              background-color: ${colors.validDark + opacity[75]};
              border-color: ${colors.validDark};
              box-shadow: ${shadows.outerGlowHoverValid};
            }
          }
          &.discarded {
            background-color: ${colors.invalidDark + opacity[50]};
            border: 1px solid ${colors.invalidDark + opacity[50]};

            &.target,
            &:hover {
              background-color: ${colors.invalidDark + opacity[75]};
              border-color: ${colors.invalidDark};
              box-shadow: ${shadows.outerGlowHoverInvalid};
            }
          }

          &:first-of-type {
            border-top-left-radius: 0.8rem;
            border-bottom-left-radius: 0.8rem;
            border-right: none;
          }
          &:last-of-type {
            border-top-right-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;
            border-left: none;
          }
        }
      }
    }
  }
`;

function ArchiveCard({ project, isExpanded, onClick }) {
  const dispatch = useDispatch();
  const [tasksCategory, setTasksCategory] = useState('finished');

  const handleProjectRestoreModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('restore-project'));
    dispatch(dataActions.setTempData(project));
  };

  const handleProjectRemoveModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('remove-project'));
    dispatch(dataActions.setTempData(project));
  };

  const handleChartClick = (e) => {
    e.stopPropagation();
    if (
      e.target.className !== tasksCategory &&
      !e.target.classList.contains('target')
    ) {
      setTasksCategory(e.target.className);
    }
  };

  let totalTime;
  if (project.tasks) {
    totalTime = project.tasks.reduce(
      (total, current) => total + current.time,
      0
    );
  }

  let tasks = project.tasks;
  const finishedTasks = tasks.filter((task) => task.status === 'finished');
  const discardedTasks = tasks.filter((task) => task.status === 'discarded');

  const finishedPercentage = ((finishedTasks.length / tasks.length) * 100).toFixed(0) + '%';
  const discardedPercentage = ((discardedTasks.length / tasks.length) * 100).toFixed(0) + '%';

  const finishedText = `(${finishedTasks.length} task${finishedTasks.length > 1 ? 's' : ''}, ${finishedPercentage})`;
  const discardedText = `(${discardedTasks.length} task${discardedTasks.length > 1 ? 's' : ''}, ${discardedPercentage})`;

  if (tasksCategory === 'finished') {
    tasks = finishedTasks;
  } else if (tasksCategory === 'discarded') {
    tasks = discardedTasks;
  }

  if (tasks.length === 0) {
    if (finishedTasks.length > 0) {
      tasks = finishedTasks;
      setTasksCategory('finished');
    } else if (discardedTasks.length > 0) {
      tasks = discardedTasks;
      setTasksCategory('discarded');
    } else if (isExpanded && tasksCategory !== 'finished') {
      setTasksCategory('finished');
    }
  }

  return (
    <StyledCard
      $status={project.status}
      $isExpanded={isExpanded}
      onClick={onClick}
    >
      <div className="card-header">
        <h2>{project.name}</h2>
        <div className="card-header-icons">
          {project.status === 'discarded' && (
            <img
              className="icon"
              src={Undo}
              title="Restore project"
              alt="Restore icon"
              onClick={handleProjectRestoreModal}
            />
          )}
          <img
            className="icon"
            src={Trash}
            title="Delete project"
            alt="Trash icon"
            onClick={handleProjectRemoveModal}
          />
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="info">
          <div className="dates">
            <span>
              <label>Created:</label>
              {formatDate(project.dateCreated, 'dd.mm.yyyy.')}
              <br />( {formatDate(project.dateCreated, 'hh:mm:ss')} )
            </span>
            {project.dateFinished && (
              <span>
                <label>Finished:</label>
                {formatDate(project.dateFinished, 'dd.mm.yyyy.')}
                <br />( {formatDate(project.dateFinished, 'hh:mm:ss')} )
              </span>
            )}
            {project.dateDiscarded && (
              <span>
                <label>Discarded:</label>
                {formatDate(project.dateDiscarded, 'dd.mm.yyyy.')}
                <br />( {formatDate(project.dateDiscarded, 'hh:mm:ss')} )
              </span>
            )}
            {project.deadline && (
              <span>
                <label>Deadline: </label>
                {formatDate(project.deadline, 'dd.mm.yyyy.')}
                <br />( {formatDate(project.deadline, 'hh:mm:ss')} )
              </span>
            )}
          </div>
          <Time value={totalTime} title="Project track time" />
        </div>
        <p className="project-description">{project.description}</p>
        {isExpanded && project.tasks.length !== 0 && (
          <ul className={`project-tasks ${isExpanded ? 'show' : ''}`}>
            <div className="chart-nav" onClick={handleChartClick}>
              {finishedTasks.length !== 0 && (
                <button
                  className={`finished${
                    tasksCategory === 'finished' ? ' target' : ''
                  }`}
                  style={{ width: finishedPercentage }}
                  title={`Finished ${finishedText}`}
                >
                  Finished {finishedText}
                </button>
              )}
              {discardedTasks.length !== 0 && (
                <button
                  className={`discarded${tasksCategory === 'discarded' ? ' target' : ''}`}
                  style={{ width: discardedPercentage }}
                  title={`Discarded ${discardedText}`}
                >
                  Discarded {discardedText}
                </button>
              )}
            </div>
            {tasks.length > 0 && tasks.map((task, i) => <TaskItem key={task.id} task={task} index={i} archived={true} />)}
          </ul>
        )}
        {isExpanded && project.tasks.length === 0 && (
          <p className="warning">There are no tasks in this project.</p>
        )}
      </div>
    </StyledCard>
  );
}

ArchiveCard.propTypes = {
  project: PropTypes.object,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ArchiveCard;
