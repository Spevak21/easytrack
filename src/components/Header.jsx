import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/ui-slice';
import { exportData, importData } from '../store/projects-actions';

import { colors, opacity, shadows } from '../util/variables';
import {
  resetBgOnMouseLeave,
  setLocalStorageItem,
  trackMouse,
} from '../util/helpers';

import logoFull from '../assets/logo-full.svg';
import logoSymbol from '../assets/logo-symbol.svg';
import house from '../assets/house.svg';
import folder from '../assets/folder.svg';
import archive from '../assets/archive.svg';
import importIcon from '../assets/import.svg';
import exportIcon from '../assets/export.svg';

import ToggleButton from '../UI/ToggleButton';
import { dataActions } from '../store/data-slice';

const StyledHeader = styled.header`
  // variables used by trackMouse() /helpers.js
  --inner-color: ${colors.blue2};
  --outer-color: ${colors.blue2};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 24rem;
  padding: 3.2rem 1.6rem;
  color: ${colors.text};
  background: radial-gradient(
    circle at var(--x, 50%) var(--y, 50%),
    var(--inner-color) 0,
    var(--outer-color) 35rem
  );

  isolation: isolate;
  z-index: 1000;
  transition: left 0.5s ease-out;

  &.hidden {
    left: -24rem;
  }

  .edge {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 12px;
    background: transparent;
    cursor: url(${import.meta.env.BASE_URL + 'arrow-left.svg'}), auto;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 2px;
      background: linear-gradient(
        to bottom,
        ${colors.blue5 + opacity[25]} 0%,
        ${colors.blue5 + opacity[50]} 51%,
        ${colors.blue5 + opacity[25]} 100%
      );
    }
  }

  .logo {
    cursor: pointer;
    height: 4.8rem;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    height: 100%;

    li {
      display: flex;
      gap: 1.6rem;
      align-items: center;
      border-radius: 0.8rem;
      font-size: 2.4rem;
      padding: 0.8rem 1.6rem;
      text-shadow: ${shadows.shadowSmall};
      box-shadow: ${shadows.innerShadowImprinted};
      z-index: 2;

      cursor: pointer;
      transition: all 0.25s ease-out, padding 0s;

      &:hover {
        background-color: rgba(0, 64, 167, 0.5);
        box-shadow: ${shadows.fullGlowHover};
      }

      &.active {
        background-color: ${colors.blue3};
        box-shadow: ${shadows.fullGlowActive};
        z-index: 1;
      }

      &.inactive {
        opacity: 0.15;
        pointer-events: none;
      }

      img {
        filter: drop-shadow(${shadows.shadowSmall});
      }
    }
  }

  .nav-footer {
    margin-top: auto;

    hr {
      margin-bottom: 1.6rem;
    }

    .import-export {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      div {
        display: flex;
        gap: 1.6rem;
        align-items: center;
        border-radius: 0.8rem;
        font-size: 1.6rem;
        padding: 0.8rem 1.6rem;
        text-shadow: ${shadows.shadowSmall};
        box-shadow: ${shadows.innerShadowImprinted};

        cursor: pointer;
        transition: all 0.25s ease-out;

        &:hover {
          background-color: rgba(0, 64, 167, 0.5);
          box-shadow: ${shadows.fullGlowHover};
        }
      }
    }

    .toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.6rem;
    }
  }

  &.mini {
    width: fit-content;

    &.hidden {
      left: -8rem;
    }

    nav ul li,
    .nav-footer .import-export div {
      padding-inline: 1.2rem;
    }

    .edge {
      cursor: url(${import.meta.env.BASE_URL + 'arrow-right.svg'}), auto;
    }
  }
`;

function Header() {
  const dispatch = useDispatch();
  const showWelcome = useSelector((state) => state.ui.showWelcome);
  const isMinimized = useSelector((state) => state.ui.minimizedHeader);
  const page = useSelector((state) => state.ui.page);
  const projects = useSelector((state) => state.projects);
  const trackers = useSelector((state) => state.data.trackers);

  const toggleShowWelcome = () => {
    dispatch(uiActions.setShowWelcome(!showWelcome));
    setLocalStorageItem('showWelcome', !showWelcome);
  };

  const handleChangePage = (label) => {
    dispatch(uiActions.changePage(label));
    dispatch(dataActions.setTempData(null));
  };

  const handleMouseMove = (e) => {
    trackMouse(e, '#052354', colors.blue2);
  };

  const handleMouseLeave = (e) => {
    resetBgOnMouseLeave(e, colors.blue2);
  };

  const handleLogoClick = () => {
    dispatch(uiActions.changePage('welcome'));
  };

  const handleResize = () => {
    dispatch(uiActions.setMinimized(!isMinimized));
    setLocalStorageItem('minimizedHeader', !isMinimized);
  };

  const handleDataImport = () => {
    dispatch(importData());
  };

  const handleDataExport = () => {
    dispatch(exportData());
  };

  return (
    <StyledHeader
      className={`${isMinimized ? 'mini' : ''} ${page === 'welcome' || !page ? 'hidden' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isMinimized ? (
        <img
          src={logoSymbol}
          className="logo"
          alt="Logo Easy Track"
          onClick={handleLogoClick}
        />
      ) : (
        <img
          src={logoFull}
          className="logo"
          alt="Logo Easy Track"
          onClick={handleLogoClick}
        />
      )}
      <nav>
        <ul>
          <li
            className={`${page === 'dashboard' ? 'active' : ''} ${projects.length ? '' : 'inactive'}`}
            onClick={() => handleChangePage('dashboard')}
          >
            <img src={house} alt="House icon" />
            {!isMinimized && 'Dashboard'}
          </li>
          <li
            className={page === 'projects' ? 'active' : ''}
            onClick={() => handleChangePage('projects')}
          >
            <img src={folder} alt="Folder icon" />
            {!isMinimized && 'Projects'}
          </li>
          <li
            className={`${page === 'trackers' ? 'active' : ''} ${trackers.length ? '' : 'inactive'}`}
            onClick={() => handleChangePage('trackers')}
          >
            <img src={import.meta.env.BASE_URL + 'stopwatch.svg'} alt="Stopwatch icon" />
            {!isMinimized && 'Trackers'}
          </li>
          <li
            className={`${page === 'archive' ? 'active' : ''} ${projects.filter((project) => project.status !== 'active').length ? '' : 'inactive'}`}
            onClick={() => handleChangePage('archive')}
          >
            <img src={archive} alt="Archive icon" />
            {!isMinimized && 'Archive'}
          </li>
        </ul>
      </nav>
      <div className="nav-footer">
        <hr />
        <div className="import-export">
          <div onClick={handleDataExport}>
            <img src={exportIcon} alt="Export icon" />
            {!isMinimized && <p>Export Data</p>}
          </div>
          <div onClick={handleDataImport}>
            <img src={importIcon} alt="Import icon" />
            {!isMinimized && <p>Import Data</p>}
          </div>
        </div>
        <div className="toggle">
          {!isMinimized && <p>Welcome screen:</p>}
          <ToggleButton state={showWelcome} onClick={toggleShowWelcome} />
        </div>
      </div>
      <div className="edge" onClick={handleResize} />
    </StyledHeader>
  );
}

export default Header;
