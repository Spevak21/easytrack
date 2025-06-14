import { useState } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { getCurrentTimestamp, getTimestamps } from '../../util/helpers';
import Button from '../../UI/Button';
import ActivityLog from './ActivityLog';
import { colors, opacity } from '../../util/variables';
import List from '../../UI/List';
import Time from '../widgets/Time';

const StyledActivityHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
  padding: 2.4rem;

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

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    height: 100%;

    .history-card {
      padding-bottom: 2.4rem;
      border-bottom: 1px solid ${colors.blue4 + opacity[30]};
      h2 {
        margin-bottom: 1.2rem;
      }

      .logs {
        li {
          &.total-time {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: ${colors.blue5 + opacity[75]} !important;
            font-size: 1.6rem;
            padding: 1.2rem 1.2rem 1.2rem 2.8rem;
          }

          &:nth-of-type(odd) {
            background-color: ${colors.white + opacity[3]};
          }

          &:nth-of-type(even) {
            background-color: ${colors.white + opacity[5]};
          }

          &:first-of-type {
            border-top-left-radius: 0.8rem;
            border-top-right-radius: 0.8rem;
          }

          &:last-of-type {
            border-bottom-left-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;
          }
        }
      }
    }

  }
  .button-group {
    display: flex;
    justify-content: flex-end;
  }
`;

function ActivityHistory({ onClose }) {
  const projects = useSelector((state) => state.projects);
  const [timePeriod, setTimePeriod] = useState('day');

  const timeFrame = getTimestamps(getCurrentTimestamp(), timePeriod);

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

  const affectedProjects = []
  projects.forEach((project) => {
    const projectData = {
      name: project.name,
      id: project.id,
      history: [],
    }

    if (project.dateCreated > timeFrame.start) {
      projectData.history.push({date: project.dateCreated, action: 'project-created'});
    }
    
    if (project.dateModified > timeFrame.start) {
      projectData.history.push({date: project.dateModified, action: 'project-modified'});
    }
    
    if (project.dateFinished > timeFrame.start) {
      projectData.history.push({date: project.dateFinished, action: 'project-finished'});
    }
    
    if (project.dateDiscarded > timeFrame.start) {
      projectData.history.push({date: project.dateDiscarded, action: 'project-discarded'});
    }

    project.tasks.forEach((task) => {
      if (task.dateCreated > timeFrame.start) {
        projectData.history.push({date: task.dateCreated, action: 'task-created', name: task.name});
      }
      
      if (task.dateModified > timeFrame.start) {
        projectData.history.push({date: task.dateModified, action: 'task-modified', name: task.name});
      }
      
      if (task.dateFinished > timeFrame.start) {
        projectData.history.push({date: task.dateFinished, action: 'task-finished', name: task.name});
      }
      
      if (task.dateDiscarded > timeFrame.start) {
        projectData.history.push({date: task.dateDiscarded, action: 'task-discarded', name: task.name});
      }

      task.trackLogs.forEach((log) => {
        if (log.start > timeFrame.start) {
          projectData.history.push({date: log.start, action: 'task-tracked', name: task.name, time: log.time});
        }
      })
    })

    if (projectData.history.length) {
      projectData.history.sort((a, b) => a.date - b.date);
      affectedProjects.push(projectData);
    }
  });

  return (
    <StyledActivityHistory>
      <div className="header">
        <h2>Activity history</h2>
        <div className="button-group" onClick={handlePeriodChange}>
          <Button className={timePeriod === 'day' ? 'active' : ''} title="Day">
            D
          </Button>
          <Button
            className={timePeriod === 'week' ? 'active' : ''}
            title="Week"
          >
            W
          </Button>
          <Button
            className={timePeriod === 'month' ? 'active' : ''}
            title="Month"
          >
            M
          </Button>
          <Button
            className={timePeriod === 'year' ? 'active' : ''}
            title="Year"
          >
            Y
          </Button>
        </div>
      </div>
      <hr />
      <List category={timePeriod}>
        {affectedProjects.length ? (
          affectedProjects.map((project) => {
            let totalTime = 0;
            if (project.history.some((obj) => Object.hasOwn(obj, 'time'))) {
              totalTime = project.history.reduce((total, current) => {
                if (current.time) {
                  return total + current.time;
                } else {
                  return total;
                }
              }, 0);
            }

            return (
              <div className="history-card" key={project.id}>
                <h2>{project.name}</h2>
                <div className="logs">
                  {project.history.map((log, i, array) => {
                    return (
                      <ActivityLog
                        key={project.id + `-${i}`}
                        log={log}
                        projectName={project.name}
                        first={i === 0}
                        last={i === array.length - 1}
                      />
                    );
                  })}
                  {totalTime ? (
                    <li className="total-time">
                      <span>Total time tracked:</span>{' '}
                      <Time value={totalTime} />
                    </li>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="warning">No data for the current time period.</p>
        )}
      </List>
      <hr />
      <div className="button-group">
        <Button type="button" onClick={onClose}>
          Close
        </Button>
      </div>
    </StyledActivityHistory>
  );
}

ActivityHistory.propTypes = {
  onClose: PropTypes.func,
};

export default ActivityHistory