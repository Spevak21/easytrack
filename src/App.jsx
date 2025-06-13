import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initData, setLocalStorageData, addTrackLog } from './store/projects-actions';
import { initUI } from './store/ui-actions';

import { getCurrentTimestamp } from './util/helpers';

import GlobalStyle from './GlobalStyle';
import Notification from './components/Notification/Notification';
import Modal from './components/Modal';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.ui.page);
  const isMinimized = useSelector((state) => state.ui.minimizedHeader);
  const projects = useSelector((state) => state.projects);
  const trackers = useSelector((state) => state.data.trackers);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      // Application initialization
      dispatch(initUI());
      dispatch(initData());
      isFirstRender.current = false;  
      return;  
    } else {
      // Sending data to localStorage
      // Not on initial render to avoid overwriting before checking localStorage
      dispatch(setLocalStorageData(projects));
    }
  }, [projects, dispatch]);

  useEffect(() => {
    const handleUnload = () => {
      trackers.forEach((tracker) => {
        let trackedTime;

        if (tracker.status === 'active') {
          trackedTime = Math.floor((getCurrentTimestamp() - tracker.refTime + tracker.trackedTime) / 1000) * 1000;
        } else if (tracker.status === 'paused') {
          trackedTime = tracker.trackedTime;
        }

        const data = {
          projectId: tracker.projectId,
          taskId: tracker.taskId,
          trackedTime: Math.floor(trackedTime / 1000) * 1000,
          startedAt: tracker.startedAt,
          endedAt: getCurrentTimestamp(),
        };

        dispatch(addTrackLog(data));
      });
    };

    window.addEventListener('unload', handleUnload);

    return () => {
      window.removeEventListener('unload', handleUnload);
    };
  }, [trackers, dispatch]);

  return (
    <>
      <GlobalStyle page={page} isMini={isMinimized} />
      <Notification />
      <Modal />
      <Header />
      <Main page={page} isMini={isMinimized} />
    </>
  );
}

export default App;
