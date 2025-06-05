import { getLocalStorageItem, setLocalStorageItem } from '../util/helpers';
import { uiActions } from './ui-slice';

export const initUI = () => {
  return (dispatch) => {
    const welcome = getLocalStorageItem('showWelcome');
    const minimized = getLocalStorageItem('minimizedHeader');
    const timeline = getLocalStorageItem('timeline');
    const data = getLocalStorageItem('trackerData');

    if (welcome === null) {
      dispatch(uiActions.setShowWelcome(true));
      dispatch(uiActions.changePage('welcome'));
      setLocalStorageItem('showWelcome', true);
    } else {
      dispatch(uiActions.setShowWelcome(welcome));
      if (welcome) {
        dispatch(uiActions.changePage('welcome'));
      } else {
        if (data?.length) {
          dispatch(uiActions.changePage('dashboard'));
        } else {
          dispatch(uiActions.changePage('projects'));
        }
      }
    }

    if (minimized === null) {
      dispatch(uiActions.setMinimized(false));
      setLocalStorageItem('minimizedHeader', false);
    } else {
      dispatch(uiActions.setMinimized(minimized));
    }

    if (timeline === null) {
      dispatch(
        uiActions.setTimeline({
          clockType: '24h',
          startAt: 8,
          endAt: 20,
          rowLabel: 'dates-short',
        })
      );
      setLocalStorageItem('timeline', {
        clockType: '24h',
        startAt: 8,
        endAt: 20,
        rowLabel: 'dates-short',
      });
    } else {
      dispatch(uiActions.setTimeline(timeline));
    }
  };
};
