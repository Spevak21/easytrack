import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { getTimestamps, prepareOverlappingItems } from '../../../util/helpers';

import Bar from './Bar';

const StyledRow = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  font-size: 1.6rem;
`;

function Row({ date, timeScale, targetId, handleInfo }) {
  const projects = useSelector((state) => state.projects);

  const dayTimeFrame = getTimestamps(date, 'day');
  const start = dayTimeFrame.start + timeScale.start * 3600000;
  const end = dayTimeFrame.start + timeScale.end * 3600000;

  const items = projects.reduce((acc, project) => {
    project.tasks.forEach((task) => {
      task.trackLogs.forEach((log) => {
        if (
          (log.start > start && log.start < end) ||
          (log.end > start && log.end < end)
        ) {
          acc.push({ task, log });
        }
      });
    });
    return acc;
  }, []);

  const preparedItems = prepareOverlappingItems(items);

  return (
    <StyledRow>
      {preparedItems.flatMap((group) =>
        group.map((item, i) => (
          <Bar
            key={item.task.id + item.log.start}
            task={item.task}
            log={item.log}
            timeFrame={{ start, end }}
            targetId={targetId}
            handleInfo={handleInfo}
            overlap={item.overlaps ? i : null}
            overlapNum={item.groupSize}
          />
        ))
      )}
    </StyledRow>
  );
}

Row.propTypes = {
  date: PropTypes.string,
  timeScale: PropTypes.object,
  targetId: PropTypes.string,
  handleInfo: PropTypes.func,
};

export default Row;
