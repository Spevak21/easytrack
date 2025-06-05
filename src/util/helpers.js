import { v4 as uuidv4 } from 'uuid';

export const setLocalStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getLocalStorageItem = (name) => {
  const item = localStorage.getItem(name);

  if (item) {
    return JSON.parse(item);
  } else {
    console.warn('Custom error: Could not find the item in localStorage.');
    return null;
  }
};

export const deepClone = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone);
  }

  const clonedObject = {};

  for (const key in value) {
    if (Object.hasOwn(value, key)) {
      clonedObject[key] = deepClone(value[key]);
    }
  }
  return clonedObject;
};

export const generateID = function () {
  return uuidv4();
};

export const getCurrentTimestamp = function () {
  const date = new Date();
  return formatDate(date, 'ms');
};

export const formatTimer = (value) => {
  if (!value && value !== 0) {
    return;
  }

  if (value === 0) {
    return '0s';
  }

  let valueInSeconds = value / 1000;
  let days = Math.floor(valueInSeconds / 86400);
  let hours = Math.floor((valueInSeconds % 86400) / 3600);
  let minutes = Math.floor((valueInSeconds % 3600) / 60);
  let seconds = Math.floor(valueInSeconds % 60);

  return `${days !== 0 ? days + 'd ' : ''}${hours !== 0 ? hours + 'h ' : ''}${minutes !== 0 ? minutes + 'm ' : ''}${seconds !== 0 ? seconds + 's' : ''}`;
};

export const formatDate = (value, type) => {
  if (!value && value !== 0) {
    return;
  }

  if (value === 0) {
    return '0s';
  }

  const date = new Date(value);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  if (type === 'dd.mm.yyyy.(hh:mm:ss)') {
    // datetime
    return `${day}.${month}.${year}. (${hours}:${minutes}:${seconds})`;
  }

  // For valid value format feed
  if (type === 'yyyy-mm-ddThh:mm:ss') {
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  if (type === 'dd.mm.yyyy.') {
    return `${day}.${month}.${year}.`;
  }

  if (type === 'hh:mm:ss') {
    return `${hours}:${minutes}:${seconds}`;
  }

  if (type === 'ms') {
    const newDate = new Date(date);
    return newDate.getTime();
  }

  if (type === 'yyyy-mm-dd') {
    return `${year}-${month}-${day}`;
  }

  console.log('invalid format in formatDate function');
};

export const getTimestamps = (value, type) => {
  const date = new Date(value);

  if (type === 'day') {
    // Set to start of the day (00:00:00.000)
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));

    // Set to end of the day (23:59:59.999)
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    return {
      start: startOfDay.getTime(),
      end: endOfDay.getTime(),
    };
  }

  if (type === 'week') {
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();

    // Calculate the offset to Monday (assuming Monday is the start of the week)
    const startOffset = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek; // Adjust for Sunday being 0
    const endOffset = startOffset + 6;

    // Get the start of the week (Monday at 00:00:00.000)
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() + startOffset);
    startOfWeek.setHours(0, 0, 0, 0);

    // Get the end of the week (Sunday at 23:59:59.999)
    const endOfWeek = new Date(date);
    endOfWeek.setDate(date.getDate() + endOffset);
    endOfWeek.setHours(23, 59, 59, 999);

    return {
      start: startOfWeek.getTime(),
      end: endOfWeek.getTime(),
    };
  }

  if (type === 'month') {
    // Get the first day of the month (1st at 00:00:00.000)
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    startOfMonth.setHours(0, 0, 0, 0);

    // Get the last day of the month (last day at 23:59:59.999)
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    endOfMonth.setHours(23, 59, 59, 999);

    return {
      start: startOfMonth.getTime(),
      end: endOfMonth.getTime(),
    };
  }

  if (type === 'year') {
    const year = date.getFullYear();

    // Get the first day of the year (January 1st at 00:00:00.000)
    const startOfYear = new Date(year, 0, 1);
    startOfYear.setHours(0, 0, 0, 0);

    // Get the last day of the year (December 31st at 23:59:59.999)
    const endOfYear = new Date(year, 11, 31);
    endOfYear.setHours(23, 59, 59, 999);

    return {
      start: startOfYear.getTime(),
      end: endOfYear.getTime(),
    };
  }
};

export const trackMouse = (e, innerColor, outerColor) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  e.currentTarget.style.setProperty('--x', `${x}%`);
  e.currentTarget.style.setProperty('--y', `${y}%`);
  e.currentTarget.style.setProperty('--inner-color', innerColor);
  e.currentTarget.style.setProperty('--outer-color', outerColor);
};

export const resetBgOnMouseLeave = (e, defaultColor) => {
  e.currentTarget.style.setProperty('--x', '50%');
  e.currentTarget.style.setProperty('--y', '50%');
  e.currentTarget.style.setProperty('--inner-color', defaultColor);
  e.currentTarget.style.setProperty('--outer-color', defaultColor);
};

export const formatNumber = (number, decimals = 1) => {
  let result = number - Math.floor(number) !== 0;

  if (result) {
    return +number.toFixed(decimals);
  } else {
    return number;
  }
};

export const prepareOverlappingItems = (items) => {
  const graph = new Map();
  const visited = new Set();

  // Step 1: Build overlap graph
  for (let i = 0; i < items.length; i++) {
    const a = items[i].log;
    for (let j = i + 1; j < items.length; j++) {
      const b = items[j].log;
      if (a.start < b.end && b.start < a.end) {
        if (!graph.has(i)) graph.set(i, []);
        if (!graph.has(j)) graph.set(j, []);
        graph.get(i).push(j);
        graph.get(j).push(i);
      }
    }
  }

  // Step 2: DFS to find overlap groups
  let groupCount = 0;
  const indexToGroup = {};
  const groups = [];

  function dfs(index, groupLabel, groupArray) {
    visited.add(index);
    indexToGroup[index] = groupLabel;
    groupArray.push(index);
    const neighbors = graph.get(index) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, groupLabel, groupArray);
      }
    }
  }

  for (let i = 0; i < items.length; i++) {
    if (!visited.has(i)) {
      const groupLabel = `G${++groupCount}`;
      const groupIndexes = [];
      dfs(i, groupLabel, groupIndexes);
      groups.push(groupIndexes);
    }
  }

  // Step 3: Map groupIndexes to real items and annotate
  const annotatedGroups = groups.map((groupIndexes) => {
    const groupSize = groupIndexes.length;
    return groupIndexes.map((index) => {
      const original = items[index];
      const overlap = groupSize > 1;
      return {
        ...original,
        overlaps: overlap,
        overlapGroup: overlap ? indexToGroup[index] : null,
        groupSize: groupSize,
      };
    });
  });

  return annotatedGroups;
};

export const sortByPriority = (array) => {
  const priorityOrder = {
    high: 0,
    medium: 1,
    low: 2,
  };

  return array.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );
};
