# 🍎 Fruit Jar App

**Fruit Jar App** is a simple React application built with TypeScript, Redux Toolkit, and React Query. The app allows users to browse and select fruits, add them to a jar, and view the total calories of the selected fruits. The app is developed using modern tools like Vite for fast builds and ESLint for linting.

## 🚀 Features

- Fetches fruit data from an external API.
- Displays fruits grouped by `Family`, `Order`, or `Genus` with collapsible headers.
- Two view modes: **List** and **Table**.
- Add fruits individually or by group to a "fruit jar".
- Calculates total calories of the fruits in the jar.
- Pie chart to visualize the calorie distribution of the selected fruits.
- Built with **React 18**, **Redux Toolkit**, and **React Query**.
  
## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, TypeScript
- **Data Fetching**: React Query
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **Linting**: ESLint with React and Hooks plugins
- **Testing**: Jest, React Testing Library

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GeorgeOkarskyi/fruit-jar.git
   cd fruit-jar
2. **Install dependencies:**

    ```bash
    npm install

## 🔨 Available Scripts

- **Start development server:**

  ```bash
  npm run dev
  ```
  Starts the development server using Vite with hot module replacement.

- **Build for production:**

  ```bash
  npm run build
  ```
  Builds the application for production. The vite build command is used along with TypeScript project references.

- **Lint code:**

  ```bash
  npm run lint
  ```
  Runs ESLint on the project to ensure code quality and conformity to coding standards.

- **Preview production build:**

  ```bash
  npm run preview
  ```
  Previews the production build using Vite's preview server.