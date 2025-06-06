import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { dataActions } from '../../store/data-slice';
import { startTracking } from '../../store/data-actions';

import { colors, opacity, shadows } from '../../util/variables';

import CheckCircle from '../../assets/check-circle.svg';
import Ban from '../../assets/ban.svg';
import Undo from '../../assets/undo.svg';
import Trash from '../../assets/trash.svg';
import PlayCircle from '../../assets/play-circle.svg';

import Time from '../widgets/Time';

const StyledTaskItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem 2.4rem 1.6rem 1.6rem;
  border: 1px ${({$isTracked}) => $isTracked ? 'dashed' : 'solid'} ${({ $status }) => {
    if ($status === 'active') {
      return colors.white + opacity[10];
    } else if ($status === 'finished') {
      return colors.valid + opacity[20];
    } else if ($status === 'discarded') {
      return colors.invalid + opacity[20];
    }
  }};
  border-radius: 0.8rem;
  background-color: transparent;
  transition: all 0.25s ease-out;
  overflow: hidden;
  opacity: ${({ $initial }) => ($initial ? 0 : 1)};
  z-index: 1;
  cursor: pointer;

  ${({ $initial, $delay, $status }) => {
    if ($initial) {
      if ($status === 'active') {
        return `animation: .75s ease-in-out ${$delay}ms popIn forwards, .75s ease-in-out ${$delay}ms highlighter forwards;`;
      } else if ($status === 'finished') {
        return `animation: .75s ease-in-out ${$delay}ms popIn forwards, .75s ease-in-out ${$delay}ms highlighterGreen forwards;`;
      } else if ($status === 'discarded') {
        return `animation: .75s ease-in-out ${$delay}ms popIn forwards, .75s ease-in-out ${$delay}ms highlighterRed forwards;`;
      }
    } else {
      return `&:hover { animation: .5s pulseShadow forwards}`;
    }
  }}

  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0.4rem);
    right: 6.4rem;
    height: 80%;
    aspect-ratio: 1/1;
    transform: translateY(-50%);
    background-image: url(${import.meta.env.BASE_URL + 'stopwatch.svg'});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
    filter: blur(5px);

    ${({ $isTracked }) => {
      if ($isTracked) {
        return 'opacity: .1';
      }
    }}
  }

  &:hover {
    padding-right: 6.4rem;

    .options {
      padding: 1.6rem 1.2rem;
      width: 4.8rem;
      box-shadow: ${({ $status }) => {
        if ($status === 'active') {
          return shadows.fullGlowActive;
        } else if ($status === 'finished') {
          return shadows.fullGlowActiveValid;
        } else if ($status === 'discarded') {
          return shadows.fullGlowActiveInvalid;
        }
      }};

      .icon {
        opacity: 1;
      }
    }
  }

  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p {
    font-size: 1.6rem;
    line-height: 150%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .tags {
    display: flex;
    gap: 1.2rem;
  }

  .options {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    width: 0;
    padding: 0.4rem;
    background-color: ${({ $status }) => {
      if ($status === 'active') {
        return colors.blue5 + opacity[75];
      } else if ($status === 'finished') {
        return colors.validDark + opacity[75];
      } else if ($status === 'discarded') {
        return colors.invalidDark + opacity[75];
      }
    }};
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    transition: all 0.25s ease-out;

    .icon {
      transition: color 0.25s, opacity 0.25s 0.25s;
      opacity: 0;
    }
  }
`;

function TaskItem({ archived = false, task, index }) {
  const dispatch = useDispatch();
  const trackers = useSelector((state) => state.data.trackers);

  const [initialRender, setInitialRender] = useState(true);

  const handleTaskDetailsModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('task-details'));
    dispatch(dataActions.setTempData(task));
  };

  const handleTaskFinishModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('finish-task'));
    dispatch(dataActions.setTempData(task));
  };

  const handleTaskDiscardModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('discard-task'));
    dispatch(dataActions.setTempData(task));
  };

  const handleStartTimer = (e) => {
    e.stopPropagation();
    dispatch(startTracking(task));
  };

  const handleTaskRestoreModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('restore-task'));
    dispatch(dataActions.setTempData(task));
  };

  const handleTaskRemoveModal = (e) => {
    e.stopPropagation();
    dispatch(uiActions.setFormType('confirmation'));
    dispatch(uiActions.setConfirmationType('remove-task'));
    dispatch(dataActions.setTempData(task));
  };

  const displayTrackers = (e) => {
    e.stopPropagation();
    dispatch(uiActions.changePage('trackers'));
  };

  // Delay on entering animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialRender(false);
    }, index * 250 + 1000);

    return () => clearTimeout(timer);
  }, [index]);

  const isTracked = trackers.some((tracker) => tracker.taskId === task.id);

  return (
    <StyledTaskItem
      $initial={initialRender}
      $delay={index * 250 + 250}
      $isTracked={isTracked}
      $status={task.status}
      onClick={handleTaskDetailsModal}
    >
      <h2>{task.name}</h2>
      <div className="tags">
        <Time value={task.time} />
        {!archived && (
          <span className={`priority-tag ${task.priority}`}>
            {task.priority}
          </span>
        )}
      </div>
      <p>{task.description}</p>

      <div className="options">
        {task.status === 'active' &&
          !archived &&
          (isTracked ? (
            <img
              className="icon"
              src={import.meta.env.BASE_URL + 'stopwatch.svg'}
              alt="Stopwatch icon"
              onClick={displayTrackers}
            />
          ) : (
            <>
              <img
                className="icon"
                src={PlayCircle}
                alt="Play icon"
                onClick={handleStartTimer}
              />
              <img
                className="icon"
                src={CheckCircle}
                alt="Check icon"
                onClick={handleTaskFinishModal}
              />
              <img
                className="icon"
                src={Ban}
                alt="Discard icon"
                onClick={handleTaskDiscardModal}
              />
            </>
          ))}
        {task.status === 'discarded' && !archived && (
          <img
            className="icon"
            src={Undo}
            alt="Undo icon"
            onClick={handleTaskRestoreModal}
          />
        )}
        {(task.status === 'discarded' || task.status === 'finished') && (
          <img
            className="icon"
            src={Trash}
            alt="Trash icon"
            onClick={handleTaskRemoveModal}
          />
        )}
      </div>
    </StyledTaskItem>
  );
}

TaskItem.propTypes = {
  archived: PropTypes.bool,
  task: PropTypes.object,
  index: PropTypes.number,
};

export default TaskItem;
