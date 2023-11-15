# Task Management Dashboard

## Overview

The **Task Management Dashboard** is a React-based web application that empowers users to efficiently manage their tasks. The application offers features for creating, updating, marking tasks as completed, and filtering tasks based on their status. It is designed with a responsive layout to ensure a seamless user experience across both mobile and desktop devices.

## Getting Started

1. **Clone the Repository:**
 ```bash
   git clone https://github.com/vasanth-selvaraj/task_mgmt.git
   cd task-management-dashboard
```
2. **Install Dependencies:**
```bash
npm install
```
3. **Run the Application:**
```bash
npm start
```

The application will be accessible at `http://localhost:3000` in your web browser.

## Project Structure:

```
src/
  components/
    - Resusable components needed for the Application.
  context/
    - Containes contexts to eliminate prop drilling.
  layout/
    - Contains the layout file where pages components will be passed as children and rendered. It has the commen elemets for the App like Navbar.
  Pages/
    - It has the different pages that the application will have
  Validation/
    - conatins form validation function
  App.js - Main application component with all the routes
```

## Data Persistence and Local Storage:

### Implementation:
Tasks are persisted using local storage to save data between sessions.

### Loading Previous Tasks:
Previously saved tasks are loaded when the application is reopened.

### Clear Completed Tasks:
A feature allows users to clear all completed tasks in one click.
