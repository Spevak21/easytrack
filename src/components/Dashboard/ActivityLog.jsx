import styled from 'styled-components';
import PropTypes from 'prop-types';
import { formatDate } from '../../util/helpers';
import { colors, opacity } from '../../util/variables';
import Time from '../widgets/Time';

const StyledLog = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 1.2rem 1.2rem 2.8rem;

  &::before {
    content: '';
    position: absolute;
    left: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    height: 0.8rem;
    width: 0.8rem;
    background-color: ${colors.white};
    border-radius: 0.8rem;
  }

    &::after {
      content: '';
      position: absolute;
      left: 1.2rem;
      width: 1px;
      height: 100%;
      background-color: ${colors.white + opacity[25]};

      ${({first, last}) => {
        if (first) {
          return `
            top: 50%;
            height: 50%;
          `
        } else if (last) {
          return `
            top: 0;
            height: 50%;
          `
        } else {
          return `
            top: 0;
          `
        }
      }}
    }

  font-size: 1.6rem;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1.2rem;

    span {
      &.date {
        margin-left: auto;
      }
      &.priority-tag {
        width: 15.3rem;
        text-align: center;
      }
    }
  }

  .message {
    width: 100%;
  }
  
`;

function ActivityLog({ log, projectName, first, last }) {
  const [type, action] = log.action.split('-');
  console.log(type)
  console.log(action)

  let message = null;
  if (log.action === 'project-created') {
    message = `Project "${projectName}" created.`;
  } else if (log.action === 'project-modified') {
    message = `Project "${projectName}" modified.`;
  } else if (log.action === 'project-finished') {
    message = `Project "${projectName}" finished.`;
  } else if (log.action === 'project-discarded') {
    message = `Project "${projectName}" discarded.`;
  } else if (log.action === 'task-created') {
    message = `Task "${log.name}" created in project "${projectName}".`;
  } else if (log.action === 'task-modified') {
    message = `Task "${log.name}" modified in project "${projectName}".`;
  } else if (log.action === 'task-finished') {
    message = `Task "${log.name}" finished in project "${projectName}".`;
  } else if (log.action === 'task-discarded') {
    message = `Task "${log.name}" discarded in project "${projectName}".`;
  } else if (log.action === 'task-tracked') {
    message = `Task "${log.name}" modified in project "${projectName}".`;
  }

  let tagType = 'medium';
  if (action === 'finished') {
    tagType = 'low';
  } else if (action === 'discarded') {
    tagType = 'high';
  } else if (action === 'tracked') {
    tagType = 'neutral';
  }

  return (
    <StyledLog first={first} last={last}>
      <div className='top'>
        <span className={`action priority-tag ${tagType}`}>{log.action}</span>
        {log.time && <Time value={log.time}/>}
        <span className='date'>{formatDate(log.date, 'dd.mm.yyyy.')}</span>
        <span className='time'>{formatDate(log.date, 'hh:mm:ss')}</span>
      </div>
      <span className='message'>{message}</span>
    </StyledLog>
  );
}

ActivityLog.propTypes = {
  log: PropTypes.object,
  projectName: PropTypes.string,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

export default ActivityLog;