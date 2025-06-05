import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { dataActions } from '../../store/data-slice';
import { uiActions } from '../../store/ui-slice';

import { colors, opacity } from '../../util/variables';
import { formatDate, getCurrentTimestamp } from '../../util/helpers';

import CircularProgress from '../widgets/CircularProgress';
import Time from '../widgets/Time';

const StyledDashboardCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;
  border: 1px solid
    ${({ $type }) => {
      if ($type === 'active') {
        return colors.white + opacity[10];
      } else if ($type === 'finished') {
        return colors.valid + opacity[20];
      } else if ($type === 'discarded') {
        return colors.invalid + opacity[20];
      }
    }};
  border-radius: 0.8rem;
  background-color: transparent;
  cursor: pointer;
  ${({ $deadline }) => (!$deadline ? 'min-width: 40rem;' : '')}

  @starting-style {
    opacity: 0;
    transform: translateY(1rem);
  }

  &:hover {
    animation: 0.5s gloss forwards;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
  }

  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

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

  .info {
    display: flex;
    gap: 1.6rem;

    .tasks,
    .progress {
      & > div {
        display: flex;
      }

      label {
        white-space: nowrap;
      }
    }
  }
`;

function DashboardCard({ item, deadline = false, style }) {
  const dispatch = useDispatch();

  let deadlineStyle,
    activeTasks,
    finishedTasks,
    discardedTasks,
    activeTasksPerc,
    finishedTasksPerc,
    discardedTasksPerc,
    progressPerc;

  if (deadline) {
    if (item.deadline - getCurrentTimestamp() < 259200000) {
      deadlineStyle = 'yellow';
    }
    if (item.deadline < getCurrentTimestamp()) {
      deadlineStyle = 'red';
    }
  } else if (!deadline && item.tasks.length) {
    const totalTasks = item.tasks.length;
    activeTasks = item.tasks.filter((task) => task.status === 'active').length;
    finishedTasks = item.tasks.filter((task) => task.status === 'finished').length;
    discardedTasks = item.tasks.filter((task) => task.status === 'discarded').length;

    activeTasksPerc = (activeTasks / totalTasks) * 100;
    finishedTasksPerc = (finishedTasks / totalTasks) * 100;
    discardedTasksPerc = (discardedTasks / totalTasks) * 100;
    progressPerc = (finishedTasks / (activeTasks + finishedTasks)) * 100;

    if (finishedTasksPerc === 0) {
      progressPerc = 0;
    }
  }

  let timeValue;
  if (item?.tasks) {
    timeValue = item.tasks.reduce((total, current) => total + current.time, 0);
  } else {
    timeValue = item.time;
  }

  const handleCardClick = () => {
    if (Object.hasOwn(item, 'projectId')) {
      dispatch(dataActions.setTempData(item));
      dispatch(uiActions.setFormType('task-details'));
      dispatch(uiActions.changePage('projects'));
    } else {
      if (item.status === 'active') {
        dispatch(dataActions.setTempData(item));
        dispatch(uiActions.changePage('projects'));
      } else {
        dispatch(dataActions.setTempData(item));
        dispatch(uiActions.changePage('archive'));
      }
    }
  };

  return (
    <StyledDashboardCard
      $type={item.status}
      $deadline={deadline}
      style={style}
      onClick={handleCardClick}
    >
      <div className="card-header">
        <h2>{item.name}</h2>
        {!deadline && <Time value={timeValue} />}
      </div>
      <hr />
      <div className="card-body">
        {deadline ? (
          <span className={deadlineStyle}>
            {formatDate(item.deadline, 'dd.mm.yyyy.')} (
            {formatDate(item.deadline, 'hh:mm:ss')})
          </span>
        ) : (
          <div className="info">
            <div className="tasks">
              <label>Tasks progress (by category)</label>
              <div>
                <CircularProgress
                  size={80}
                  percentage={activeTasksPerc}
                  number={activeTasks}
                  color={colors.blue5}
                />
                <CircularProgress
                  size={80}
                  percentage={finishedTasksPerc}
                  number={finishedTasks}
                  color={colors.validDark}
                />
                <CircularProgress
                  size={80}
                  percentage={discardedTasksPerc}
                  number={discardedTasks}
                  color={colors.invalidDark}
                />
              </div>
            </div>
            <span className="vr" />
            <div className="progress">
              <label>Total progress</label>
              <div>
                <CircularProgress
                  size={80}
                  percentage={progressPerc}
                  color={colors.white + opacity[80]}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledDashboardCard>
  );
}

DashboardCard.propTypes = {
  item: PropTypes.object,
  deadline: PropTypes.bool,
  style: PropTypes.object,
};

export default DashboardCard;
