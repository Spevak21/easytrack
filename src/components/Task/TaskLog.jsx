import styled from 'styled-components';
import PropTypes from 'prop-types';
import { formatDate } from '../../util/helpers';
import Time from '../widgets/Time';
import { colors } from '../../util/variables';

const StyledLog = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  gap: 1.6rem;
  padding: 0.6rem 0.8rem 0.6rem 3.2rem;

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

  span {
    font-size: 1.6rem;
    white-space: nowrap;

    &:last-of-type {
      margin-left: auto;
      font-size: 1.4rem;
    }
  }
`;

function TaskLog({ log }) {
  return (
    <StyledLog>
      <span>{formatDate(log.start, 'dd.mm.yyyy.')}</span>
      <span>start: {formatDate(log.start, 'hh:mm:ss')}</span>
      <span>end: {formatDate(log.end, 'hh:mm:ss')}</span>
      <Time value={log.time} />
    </StyledLog>
  );
}

TaskLog.propTypes = {
  log: PropTypes.object,
};

export default TaskLog;
