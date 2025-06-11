import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { colors, opacity } from '../../util/variables';
import {
  generateID,
  getCurrentTimestamp,
  getTimestamps,
  resetBgOnMouseLeave,
  trackMouse,
} from '../../util/helpers';

import Time from '../widgets/Time';
import Button from '../../UI/Button';
import { uiActions } from '../../store/ui-slice';

const StyledActivity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    h2 {
      font-size: 1.6rem;
    }

    .button-group {
      display: flex;

      button {
        padding-inline: 0.8rem;
        border-radius: 0;

        &:first-of-type {
          border-top-left-radius: 0.8rem;
          border-bottom-left-radius: 0.8rem;
        }

        &:last-of-type {
          border-top-right-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
        }
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    height: 100%;

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 0;
      height: 2.2rem;

      label {
        margin-bottom: 0;

        @starting-style {
          opacity: 0;
          transform: translateX(-1rem);
        }
      }

      span {
        text-transform: lowercase;
        font-size: 1.6rem;

        @starting-style {
          opacity: 0;
          transform: translateX(1rem);
        }
      }
    }
  }

  .history {
    justify-self: flex-end;
  }
`;

function Activity({ className }) {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  const [timePeriod, setTimePeriod] = useState('day');

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  const timeFrame = getTimestamps(getCurrentTimestamp(), timePeriod);

  const totalTimeTracked = projects.reduce((acc, project) => {
    project.tasks.forEach((task) => {
      task.trackLogs.forEach((log) => {
        if (log.start > timeFrame.start && log.start < timeFrame.end) {
          acc += log.time;
        }
      });
    });
    return acc;
  }, 0);

  const projectsCreated = projects.reduce((acc, project) => {
    if (project.dateCreated > timeFrame.start && project.dateCreated < timeFrame.end) {
      acc++;
    }
    return acc;
  }, 0);

  const projectsFinished = projects.reduce((acc, project) => {
    if (project.dateFinished > timeFrame.start && project.dateFinished < timeFrame.end) {
      acc++;
    }
    return acc;
  }, 0);

  const projectsDiscarded = projects.reduce((acc, project) => {
    if (project.dateDiscarded > timeFrame.start && project.dateDiscarded < timeFrame.end) {
      acc++;
    }
    return acc;
  }, 0);

  const tasksCreated = projects.reduce((acc, project) => {
    project.tasks.forEach((task) => {
      if (task.dateCreated > timeFrame.start && task.dateCreated < timeFrame.end) {
        acc++;
      }
    });
    return acc;
  }, 0);

  const tasksFinished = projects.reduce((acc, project) => {
    project.tasks.forEach((task) => {
      if (task.dateFinished > timeFrame.start && task.dateFinished < timeFrame.end) {
        acc++;
      }
    });
    return acc;
  }, 0);

  const tasksDiscarded = projects.reduce((acc, project) => {
    project.tasks.forEach((task) => {
      if (task.dateDiscarded > timeFrame.start && task.dateDiscarded < timeFrame.end) {
        acc++;
      }
    });
    return acc;
  }, 0);

  const handlePeriodChange = (e) => {
    if (e.target.textContent === 'D') {
      setTimePeriod('day');
    } else if (e.target.textContent === 'W') {
      setTimePeriod('week');
    } else if (e.target.textContent === 'M') {
      setTimePeriod('month');
    } else if (e.target.textContent === 'Y') {
      setTimePeriod('year');
    }
  };

  const handleActivityHistoryModal = () => {
    dispatch(uiActions.setFormType('activity-details'));
  }

  return (
    <StyledActivity
      className={`${className} box`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div className="header">
        <h2>Activity</h2>
        <div className="button-group" onClick={handlePeriodChange}>
          <Button className={timePeriod === 'day' ? 'active' : ''}>D</Button>
          <Button className={timePeriod === 'week' ? 'active' : ''}>W</Button>
          <Button className={timePeriod === 'month' ? 'active' : ''}>M</Button>
          <Button className={timePeriod === 'year' ? 'active' : ''}>Y</Button>
        </div>
      </div>
      <hr />
      <div className="body">
        <span>
          <label style={{ transition: `all .1s .05s ease-out` }}>
            Time tracked
          </label>
          <Time
            value={totalTimeTracked}
            style={{ transition: `all .1s .05s ease-out` }}
            key={generateID()}
          />
        </span>
        <span>
          <label style={{ transition: `all .1s .1s ease-out` }}>
            Projects created
          </label>
          <span
            style={{ transition: `all .1s .1s ease-out` }}
            key={generateID()}
          >
            {projectsCreated}
          </span>
        </span>
        <span>
          <label style={{ transition: `all .1s .15s ease-out` }}>
            Projects finished
          </label>
          <span
            style={{ transition: `all .1s .15s ease-out` }}
            key={generateID()}
          >
            {projectsFinished}
          </span>
        </span>
        <span>
          <label style={{ transition: `all .1s .2s ease-out` }}>
            Projects discarded
          </label>
          <span
            style={{ transition: `all .1s .2s ease-out` }}
            key={generateID()}
          >
            {projectsDiscarded}
          </span>
        </span>
        <span>
          <label style={{ transition: `all .1s .25s ease-out` }}>
            Tasks created
          </label>
          <span
            style={{ transition: `all .1s .25s ease-out` }}
            key={generateID()}
          >
            {tasksCreated}
          </span>
        </span>
        <span>
          <label style={{ transition: `all .1s .3s ease-out` }}>
            Tasks finished
          </label>
          <span
            style={{ transition: `all .1s .3s ease-out` }}
            key={generateID()}
          >
            {tasksFinished}
          </span>
        </span>
        <span>
          <label style={{ transition: `all .1s .35s ease-out` }}>
            Tasks discarded
          </label>
          <span
            style={{ transition: `all .1s .35s ease-out` }}
            key={generateID()}
          >
            {tasksDiscarded}
          </span>
        </span>
      </div>
      <Button className="history" onClick={handleActivityHistoryModal}>History</Button>
    </StyledActivity>
  );
}

Activity.propTypes = {
  className: PropTypes.string,
};

export default Activity;
