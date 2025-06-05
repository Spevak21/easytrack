import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { resetBgOnMouseLeave, trackMouse } from '../../util/helpers';
import { colors, opacity } from '../../util/variables';

import PieChart from '../widgets/PieChart';
import BarChart from '../widgets/BarChart';
import DashboardCard from './DashboardCard';
import List from '../../UI/List';

const StyledStatistics = styled.div`
  display: flex;
  gap: 1.6rem;

  .charts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .vr {
    display: none;
  }

  @container dashboard (max-width: 664px) {
    flex-direction: column;

    .charts {
      flex-direction: row;
      justify-content: space-around;
    }

    ul {
      min-height: 17.2rem;
      max-height: 35.6rem;
    }

    .vr {
      display: block;
    }

    hr {
      display: none;
    }
  }
`;

function Statistics({ className }) {
  const projects = useSelector((state) => state.projects);
  const [projectCategory, setProjectCategory] = useState('');

  const handleCategorySelect = (category) => {
    setProjectCategory(category);
  };

  const handleMouseMove = (e) => {
    trackMouse(e, colors.white + opacity[3], 'transparent');
  };

  const handleMouseOut = (e) => {
    resetBgOnMouseLeave(e, 'transparent');
  };

  const active = projects.filter((project) => project.status === 'active');
  const finished = projects.filter((project) => project.status === 'finished');
  const discarded = projects.filter((project) => project.status === 'discarded');

  let targetProjects = [...active, ...finished, ...discarded];

  if (projectCategory === 'active') {
    targetProjects = active;
  } else if (projectCategory === 'finished') {
    targetProjects = finished;
  } else if (projectCategory === 'discarded') {
    targetProjects = discarded;
  }

  return (
    <StyledStatistics
      className={`${className} box`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <div className="charts">
        <PieChart data={projects} onSelect={handleCategorySelect} />
        <hr /><span className='vr'></span>
        <BarChart projects={targetProjects} all={projectCategory === ''} />
      </div>
      <List category={projectCategory}>
        {targetProjects.map((project, i) => {
          return (
            <DashboardCard
              key={project.id}
              item={project}
              style={{transition: `opacity .25s ${0.2 * i}s, transform .5s ${0.2 * i}s`}}
            />
          );
        })}
      </List>
    </StyledStatistics>
  );
}

Statistics.propTypes = {
  className: PropTypes.string,
};

export default Statistics;
