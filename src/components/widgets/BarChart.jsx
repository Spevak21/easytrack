import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, opacity } from '../../util/variables';

const StyledBarChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex-grow: 1;
  max-height: 20rem;
  width: 20rem;
  max-width: 20rem;

  p {
    width: 100%;
    text-align: center;
  }
  .values-container {
    display: flex;
    gap: 0.8rem;

    span {
      font-size: 1.6rem;
      text-align: center;
      width: 100%;
    }
  }

  .bars-container {
    display: flex;
    align-items: flex-end;
    gap: 0.8rem;
    height: 100%;
    border-bottom: 1px dashed ${colors.white + opacity[5]};
    border-top: 1px dashed ${colors.white + opacity[5]};

    .bar {
      width: 100%;
      border-top-left-radius: 0.8rem;
      border-top-right-radius: 0.8rem;
      transform-origin: center 100%;
      transition: all 1s;

      @starting-style {
        transform: scaleY(0);
      }

      &.active {
        height: ${({$active, $part}) => $active * $part + '%'};
        background: linear-gradient(to top, ${colors.blue5 + opacity[40]}, ${colors.blue5});
        border-top-left-radius: ${({$active}) => $active === 0 ? '0':'.4'}rem;
        border-top-right-radius: ${({$active}) => $active === 0 ? '0':'.4'}rem;
      }
      &.finished {
        height: ${({$finished, $part}) => $finished * $part + '%'};
        background: linear-gradient(to top, ${colors.validDark + opacity[40]}, ${colors.validDark});
        border-top-left-radius: ${({$finished}) => $finished === 0 ? '0':'.4'}rem;
        border-top-right-radius: ${({$finished}) => $finished === 0 ? '0':'.4'}rem;
      }
      &.discarded {
        height: ${({$discarded, $part}) => $discarded * $part + '%'};
        background: linear-gradient(to top, ${colors.invalidDark + opacity[40]}, ${colors.invalidDark});
        border-top-left-radius: ${({$discarded}) => $discarded === 0 ? '0':'.4'}rem;
        border-top-right-radius: ${({$discarded}) => $discarded === 0 ? '0':'.4'}rem;
      }
    }
  }
`;

function BarChart({ projects, all }) {
  const taskCounts = projects.reduce(
    (acc, project) => {
      project.tasks.forEach((task) => {
        if (task.status in acc) {
          acc[task.status] += 1;
        } else {
          acc[task.status] = 1;
        }
      });
      return acc;
    },
    { active: 0, finished: 0, discarded: 0 }
  );

  let countPart = 0;
  if (taskCounts.active || taskCounts.finished || taskCounts.discarded) {
    countPart = 100 / Math.max(taskCounts.active, taskCounts.finished, taskCounts.discarded);
  }

  return (
    <StyledBarChart
      $active={taskCounts.active}
      $finished={taskCounts.finished}
      $discarded={taskCounts.discarded}
      $part={countPart}
    >
      <p>{all ? 'All' : 'Category'} tasks</p>
      <div className="values-container">
        <span>{taskCounts.active}</span>
        <span>{taskCounts.finished}</span>
        <span>{taskCounts.discarded}</span>
      </div>
      <div className="bars-container">
        <div className="bar active"></div>
        <div className="bar finished"></div>
        <div className="bar discarded"></div>
      </div>
    </StyledBarChart>
  );
}

BarChart.propTypes = {
  projects: PropTypes.array,
  all: PropTypes.bool,
};

export default BarChart;
