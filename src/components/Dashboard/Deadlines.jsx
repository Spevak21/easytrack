import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { resetBgOnMouseLeave, trackMouse } from '../../util/helpers';
import { colors, opacity } from '../../util/variables';

import DashboardCard from './DashboardCard';
import Button from '../../UI/Button';
import List from '../../UI/List';

const StyledDeadlines = styled.div`
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
`;

function Deadlines({ className }) {
  const projects = useSelector((state) => state.projects);
  const [type, setType] = useState('projects');

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  let deadlines = [];

  if (type === 'projects') {
    deadlines = projects.reduce((acc, project) => {
      if (project.deadline !== undefined && project.status === 'active') {
        acc.push(project);
      }
      return acc;
    }, []);
  } else {
    deadlines = projects.reduce((acc, project) => {
      if (project.status === 'active') {
        project.tasks.forEach((task) => {
          if (task.deadline !== undefined && task.status === 'active') {
            acc.push(task);
          }
        });
      }
      return acc;
    }, []);
  }

  deadlines.sort((a, b) => a.deadline - b.deadline);

  const handleTypeChange = (e) => {
    if (e.target.textContent === 'P') {
      setType('projects');
    } else if (e.target.textContent === 'T') {
      setType('tasks');
    }
  };

  return (
    <StyledDeadlines
      className={`${className} box`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div className="header">
        <h2>Deadlines</h2>
        <div className="button-group" onClick={handleTypeChange}>
          <Button className={type === 'projects' ? 'active' : ''}>P</Button>
          <Button className={type === 'tasks' ? 'active' : ''}>T</Button>
        </div>
      </div>
      <hr />
      <List category={type}>
        {deadlines.length !== 0 ? (
          deadlines.map((item, i) => (
            <DashboardCard
              key={item.id}
              item={item}
              deadline
              style={{transition: `opacity .25s ${0.2 * i}s, transform .5s ${0.2 * i}s`}}
            />
          ))
        ) : (
          <p className="warning">There are no deadlines for this category</p>
        )}
      </List>
    </StyledDeadlines>
  );
}

Deadlines.propTypes = {
  className: PropTypes.string,
};

export default Deadlines;
