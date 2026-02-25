# Task Management App

A simple task management (Kanban-style) application built with **React**, **TypeScript**, **Zustand**, and **React Query**.  
The app allows users to manage tasks across multiple columns with full CRUD functionality and search/filtering support.

---

## Features

- **CRUD Operations**
  - **Add Task**: Create new tasks dynamically.
  - **Update Task**: Edit existing tasks using the same modal as Add.
  - **Delete Task**: Remove tasks easily with immediate UI update.

- **Search & Filtering**
  - Filter tasks by title or description using the search bar.
  - Works across all columns (`Backlog`, `In Progress`, `Review`, `Done`).

- **Columns**
  - Tasks are organized in four columns representing their status:
    - `Backlog`
    - `In Progress`
    - `In Review`
    - `Done`
  - Tasks automatically appear in the corresponding column based on their `column` property.
  - Tasks able to drag/drop in each column.

- **State Management**
  - Managed with **Zustand**.
  - Task data is persisted in local storage using `zustand/persist`.
  - `getFiltered` helper provides derived state for search filtering.

- **Data Fetching**
  - Initial tasks are fetched from a JSON server using **React Query**.
  - Supports server sync and hydration on app load.

---

## Tech Stack

- **React** – UI library
- **TypeScript** – Type safety for components and store
- **Zustand** – Lightweight state management with persistence
- **React Query** – Async data fetching and caching
- **MUI (Material UI)** – UI components for forms, buttons, modals, and layout

---


### Setup Instructions

```bash
git clone https://github.com/mohamedhesham221/todo-dashboard.git
cd todo-dashboard
```

### Install dependencies

```bash
npm install
json-server --watch db.json --port 4000
npm run dev
open browser <http://localhost:5173>
```
