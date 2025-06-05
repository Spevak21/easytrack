import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../../../store/data-slice';
import { uiActions } from '../../../store/ui-slice';

import { colors, opacity, shadows } from '../../../util/variables';

const StyledBar = styled.div`
  position: absolute;
  top: ${({ $overlap, $overlapNum }) => $overlap !== null ? (100 / $overlapNum) * $overlap : 0}%;
  bottom: 0;
  left: ${({ $start }) => $start + '%'};

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ $overlapNum }) => $overlapNum !== null ? 100 / $overlapNum : 100}%;
  width: ${({ $width }) => $width + '%'};
  border: 1px solid transparent;
  border-top-color: ${colors.white + opacity[10]};
  border-radius: 0.8rem;
  box-shadow: ${shadows.cardShadowSharp}, ${shadows.cardShadowSoft};
  backdrop-filter: blur(2px);
  cursor: pointer;
  overflow: hidden;

  transition: all 0.25s;

  &.start {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &.end {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.active {
    background-color: ${colors.white + opacity[3]};

    &:hover {
      box-shadow: ${shadows.fullGlowActive};
    }

    &.targeted {
      background-color: ${colors.blue3};
    }
  }

  &.finished {
    background-color: ${colors.validDark + opacity[20]};

    &:hover {
      box-shadow: ${shadows.fullGlowActiveValid};
    }

    &.targeted {
      background-color: ${colors.valid + opacity[40]};
    }
  }

  &.discarded {
    background-color: ${colors.invalidDark + opacity[20]};

    &:hover {
      box-shadow: ${shadows.fullGlowActiveInvalid};
    }

    &.targeted {
      background-color: ${colors.invalid + opacity[40]};
    }
  }

  p {
    line-height: 2.4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    pointer-events: none;
    margin-inline: 1.2rem;
  }
`;

function Bar({
  task,
  log,
  timeFrame,
  targetId,
  handleInfo,
  overlap,
  overlapNum,
}) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const targetProject = projects.find((project) => project.id === task.projectId);

  let startPosition = ((log.start - timeFrame.start) / (timeFrame.end - timeFrame.start)) * 100;
  let width = ((log.end - log.start) / (timeFrame.end - timeFrame.start)) * 100;

  let beforeStart = false;
  if (log.start < timeFrame.start) {
    startPosition = 0;
    width = ((log.end - timeFrame.start) / (timeFrame.end - timeFrame.start)) * 100;
    beforeStart = true;
  }

  let afterEnd = false;
  if (log.end > timeFrame.end) {
    width = 100 - startPosition;
    afterEnd = true;
  }

  const handleMouseEnter = () => {
    handleInfo({
      taskId: task.id,
      taskName: task.name,
      logTime: log.time,
    });
  };

  const handleMouseLeave = () => {
    handleInfo((prev) => ({
      ...prev,
      taskId: null,
    }));
  };

  const handleBarClick = () => {
    dispatch(dataActions.setTempData(task));
    dispatch(uiActions.setFormType('task-details'));
    if (targetProject.status === 'active') {
      dispatch(uiActions.changePage('projects'));
    } else {
      dispatch(uiActions.changePage('archive'));
    }
  };

  return (
    <StyledBar
      $start={startPosition}
      $width={width}
      $overlap={overlap}
      $overlapNum={overlapNum}
      className={`bar ${task.status} ${task.id === targetId ? 'targeted' : ''} ${beforeStart ? 'start' : ''} ${afterEnd ? 'end' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleBarClick}
    >
      <p>{task.name}</p>
    </StyledBar>
  );
}

Bar.propTypes = {
  task: PropTypes.object,
  log: PropTypes.object,
  timeFrame: PropTypes.object,
  targetId: PropTypes.string,
  handleInfo: PropTypes.func,
  overlap: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  overlapNum: PropTypes.number,
};

export default Bar;
