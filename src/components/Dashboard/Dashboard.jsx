import styled from 'styled-components';

import Deadlines from './Deadlines';
import Statistics from './Statistics';
import Activity from './Activity';
import Timeline from './Timeline/Timeline';

const StyledDashboard = styled.section`
  container-name: dashboard;
  container-type: inline-size;

  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    .item {
      padding: 1.6rem;
      height: calc((100vh - 6.5rem) / 2);

      &-4 {
        min-width: 90rem;
      }
    }

    .first-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1.6rem;
      
      .item {
        height: calc((100vh - 6.5rem) / 2);
        flex: 1 0;

        &-1 {
          width: 55%;
          min-width: 66.4rem;
        }

        &-2 {
          width: 22.5%;
          min-width: 30rem;
        }

        &-3 {
          width: 22.5%;
          min-width: 30rem;
        }
      }
    }
    
    @container dashboard (max-width: 1287px) {
      .first-row .item {
        &-3 {
          height: 30rem;
        }
      }
    }

    @container dashboard (max-width: 1024px) {
      overflow-x: auto;
    }

    @container dashboard (max-width: 979px) {
      .first-row .item {
        &-1 {
          height: 41.6rem;
        }
        
        &-2 {
          height: 30rem;
        }
      }
    }

    @container dashboard (max-width: 664px) {
      .first-row .item {
        height: fit-content;
        min-width: 45rem;

        &-2, &-3 {
          height: 30rem;
        }
      }
    }
    @container dashboard (max-width: 615px) {
      .first-row .item {
        &-2 {
          height: fit-content;
        }
      }
    }
  }
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <div className='dashboard'>
        <div className='first-row'>
          <Statistics className="item item-1" />
          <Activity className="item item-2" />
          <Deadlines className="item item-3" />
        </div>
        <Timeline className="item item-4" />
      </div>
    </StyledDashboard>
  );
}

export default Dashboard;
