# EasyTrack

**EasyTrack** is a lightweight time and project management desktop web app built with React, styled-components, and Redux. It runs entirely in the browser and stores all data using `localStorage`.

---

## 🚀 Getting Started

When you open the app for the first time, you'll be greeted by a **Welcome screen**. After clicking the call-to-action (CTA) button:

- If there’s **no existing data**, you’ll be taken to the **Projects** page.
- If there’s **existing data**, you’ll be directed to the **Dashboard**.

> You can disable the Welcome screen using a toggle switch in the bottom-left corner of the sidebar. If enabled, the Welcome screen will appear every time the app reloads.

---

## Core Features

### 🗂 Projects

- Create new projects with:
  - Name
  - Description
  - Deadline (optional)
  - Priority
- Projects can be:
  - Edited
  - **Finished**
  - **Discarded**

---

### ✅ Tasks

- Each project can contain multiple tasks, each with:
  - Name
  - Description
  - Deadline (optional)
  - Priority
- Tasks can be:
  - Edited
  - **Finished**
  - **Discarded**
  - **Tracked**

---

### ⏱ Trackers

Once a task is being tracked, the **Trackers** page becomes available.

- Displays a list of currently **active trackers** (tasks being tracked).
- Each tracker can be:
  - **Paused**
  - **Stopped**
- When tracking is stopped, a **track log** is created and added to the task’s data.

---

### 📊 Dashboard

The **Dashboard** becomes available after at least one project is created. It gives a high-level overview of your project and task progress through four widgets:

---

#### 📈 1. Statistics Widget

- Displays general statistics including:
  - Total number of **projects** and **tasks**
  - Percentage breakdown of:
    - **Active / Finished / Discarded Projects**
    - **Active / Finished / Discarded Tasks**

---

#### 🔄 2. Activity Widget

- Shows activity history such as:
  - Number of projects/tasks **created**, **finished**, or **discarded**
  - **Total time tracked** across all tasks in all projects
- You can filter data by:
  - **Day**
  - **Week**
  - **Month**
  - **Year**
- Includes a **History** button to see detailed logs of actions per project and time filter.

---

#### 🗓️ 3. Deadline Widget

- Displays **upcoming or overdue deadlines**
- You can switch between viewing **project deadlines** or **task deadlines**

---

#### 🕒 4. Timeline Widget

- Weekly timeline view of **task tracking activity**
- **X-axis:** Time of day (0–24 or a custom range like 8–17)
- **Y-axis:** Days of the week (Monday to Sunday)
- Visualizes each `trackLog` as a bar:
  - Width is proportional to the tracked time relative to the chosen X-axis time range
  - Clicking on a bar navigates to the associated task details
- Timeline can be scrolled **forward or backward by weeks** with no limit

---

These dashboard widgets give you insight into both **productivity trends** and **time allocation**, helping you make more informed decisions.

---

### 🗄 Archive

- Becomes available once at least one project is **finished** or **discarded**.
- Archived content includes:
  - **Discarded Projects** – can be **restored**
  - **Finished Projects** – **cannot be restored**
- Discarded **tasks**:
  - Remain within the active project, marked and sorted as "discarded"
  - Can be **retrieved** unless finished
  - Are **not** moved to the archive
- Discarded projects and tasks can be **permanently deleted**.

Once at least one project is finished or discarded, the **Archive** page becomes available.

---

## 🔔 Notifications

- Get notified on:
  - Any data modification (create, update, delete)
  - Upcoming or overdue deadlines when the app is first opened

---

## 📤 Import / Export

Since EasyTrack is a **frontend-only** app with **no backend**, all data is stored in the browser’s `localStorage`.

To transfer data between browsers or devices, you can:

- **Export** your data as a `.json` file
- **Import** it back into the app later

> Import/Export buttons are located at the bottom of the sidebar.

The test data file EasyTrackTestData.json is included in the root of the repository to provide a quick preview of the app’s data display. (download and import)

---

## 🛠 Built With

- [React](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [Redux](https://redux.js.org/)
- Browser `localStorage`

---

## 📌 Note

This project is intended for personal or small-scale usage. Because it does not use a database or cloud storage, your data is tied to the browser you're using. Be sure to regularly export your data to prevent accidental loss.

