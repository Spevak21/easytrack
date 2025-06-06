import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { dataActions } from '../../store/data-slice';

import { colors, opacity, shadows } from '../../util/variables';
import {
  formatDate,
  getCurrentTimestamp,
  resetBgOnMouseLeave,
  sortByPriority,
  trackMouse,
} from '../../util/helpers';

import Pencil from '../../assets/pencil.svg';
import FilePlus from '../../assets/file-plus.svg';
import CheckCircle from '../../assets/check-circle.svg';
import Ban from '../../assets/ban.svg';

import TaskItem from '../Task/TaskItem';
import Time from '../widgets/Time';

const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2.4rem;
  cursor: pointer;
  background-clip: padding-box;

  &::after {
    content: '';
    position: absolute;
    top: 6rem;
    right: 12rem;
    height: 10rem;
    aspect-ratio: 1/1;
    background-image: url(${import.meta.env.BASE_URL + 'stopwatch.svg'});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    filter: blur(5px);
    z-index: -1;
    opacity: 0;
    transition: all 0.5s ease-out;

    ${({ $taskTracked, $isExpanded }) => {
      if ($taskTracked && !$isExpanded) {
        return `
        opacity: 0.1;
        transform: translateY(-2rem);
        `;
      }
    }}
  }

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

          &.yellow {
            color: ${colors.warning};
          }
          &.red {
            color: ${colors.invalid};
          }
        }
      }

      .tags {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

          &.active {
            background-color: ${colors.blue5 + opacity[50]};
            border: 1px solid ${colors.blue5 + opacity[50]};

            &.target,
            &:hover {
              background-color: ${colors.blue5 + opacity[75]};
              border-color: ${colors.blue5};
              box-shadow: ${shadows.outerGlowHover};
            }
          }
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

function ProjectCard({ project, isExpanded, onClick }) {
  const dispatch = useDispatch();
  const taskTracked = useSelector((state) => state.data.trackers.some((tracker) => tracker.projectId === project.id));
  const [tasksCategory, setTasksCategory] = useState('active');

  const handleProjectEditModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('edit-project'));
    dispatch(dataActions.setTempData(project));
  };

  const handleProjectFinishModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('finish-project'));
    dispatch(dataActions.setTempData(project));
  };

  const handleProjectDiscardModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('discard-project'));
    dispatch(dataActions.setTempData(project));
  };

  const handleTaskAddModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('new-task'));
    dispatch(dataActions.setTempData(project.id));
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

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  let totalTime;
  if (project.tasks) {
    totalTime = project.tasks.reduce(
      (total, current) => total + current.time,
      0
    );
  }

  let tasks = project.tasks;
  const activeTasks = tasks.filter((task) => task.status === 'active');
  const finishedTasks = tasks.filter((task) => task.status === 'finished');
  const discardedTasks = tasks.filter((task) => task.status === 'discarded');

  const activePercentage = ((activeTasks.length / tasks.length) * 100).toFixed(0) + '%';
  const finishedPercentage = ((finishedTasks.length / tasks.length) * 100).toFixed(0) + '%';
  const discardedPercentage = ((discardedTasks.length / tasks.length) * 100).toFixed(0) + '%';

  const activeText = `(${activeTasks.length} task${activeTasks.length > 1 ? 's' : ''}, ${activePercentage})`;
  const finishedText = `(${finishedTasks.length} task${finishedTasks.length > 1 ? 's' : ''}, ${finishedPercentage})`;
  const discardedText = `(${discardedTasks.length} task${discardedTasks.length > 1 ? 's' : ''}, ${discardedPercentage})`;

  if (tasksCategory === 'active') {
    tasks = activeTasks;
  } else if (tasksCategory === 'finished') {
    tasks = finishedTasks;
  } else if (tasksCategory === 'discarded') {
    tasks = discardedTasks;
  }

  if (tasks.length === 0) {
    if (activeTasks.length > 0) {
      tasks = activeTasks;
      setTasksCategory('active');
    } else if (finishedTasks.length > 0) {
      tasks = finishedTasks;
      setTasksCategory('finished');
    } else if (discardedTasks.length > 0) {
      tasks = discardedTasks;
      setTasksCategory('discarded');
    } else if (isExpanded && tasksCategory !== 'active') {
      setTasksCategory('active');
    }
  }

  const sortedTasks = sortByPriority(tasks);

  let deadlineStyle = '';
  if (project.deadline - getCurrentTimestamp() < 259200000) {
    deadlineStyle = 'yellow';
  }
  if (project.deadline < getCurrentTimestamp()) {
    deadlineStyle = 'red';
  }

  return (
    <StyledCard
      className="box"
      $isExpanded={isExpanded}
      $taskTracked={taskTracked}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div className="card-header">
        <h2>{project.name}</h2>
        <div className="card-header-icons">
          <img
            className="icon"
            src={Pencil}
            alt="Pencil icon"
            onClick={handleProjectEditModal}
          />
          <img
            className="icon"
            src={FilePlus}
            alt="Add file icon"
            onClick={handleTaskAddModal}
          />
          {!taskTracked && (
            <>
              <img
                className="icon"
                src={CheckCircle}
                alt="Check icon"
                onClick={handleProjectFinishModal}
              />
              <img
                className="icon"
                src={Ban}
                alt="Discard icon"
                onClick={handleProjectDiscardModal}
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
              {formatDate(project.dateCreated, 'dd.mm.yyyy.')}
              <br />( {formatDate(project.dateCreated, 'hh:mm:ss')} )
            </span>
            {project.dateModified && (
              <span>
                <label>Modified:</label>
                {formatDate(project.dateModified, 'dd.mm.yyyy.')}
                <br />( {formatDate(project.dateModified, 'hh:mm:ss')} )
              </span>
            )}
            {project.deadline && (
              <span className={deadlineStyle}>
                <label>Deadline: </label>
                {formatDate(project.deadline, 'dd.mm.yyyy.')}
                <br />( {formatDate(project.deadline, 'hh:mm:ss')} )
              </span>
            )}
          </div>
          <div className="tags">
            <Time value={totalTime} />
            <span className={`priority-tag ${project.priority}`}>
              {project.priority}
            </span>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        {isExpanded && project.tasks.length !== 0 && (
          <ul className={`project-tasks ${isExpanded ? 'show' : ''}`}>
            <div className="chart-nav" onClick={handleChartClick}>
              {activeTasks.length !== 0 && (
                <button
                  className={`active${tasksCategory === 'active' ? ' target' : ''}`}
                  style={{ width: activePercentage }}
                  title={`Active ${activeText}`}
                >
                  Active {activeText}
                </button>
              )}
              {finishedTasks.length !== 0 && (
                <button
                  className={`finished${tasksCategory === 'finished' ? ' target' : ''}`}
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
            {tasks.length > 0 &&
              sortedTasks.map((task, i) => (
                <TaskItem key={task.id} task={task} index={i} />
              ))}
          </ul>
        )}
        {isExpanded && project.tasks.length === 0 && (
          <p className="warning">
            There are no tasks in this project yet, please create a task.
          </p>
        )}
      </div>
    </StyledCard>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  isExpanded: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ProjectCard;
