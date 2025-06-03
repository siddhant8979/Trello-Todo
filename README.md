# Trello Todo Board

This project is a Trello-style Todo board application that allows users to manage tasks visually. It utilizes the DummyJSON Todos API for fetching and updating todos.

## Features

- Create, read, update, and delete todos.
- Drag-and-drop functionality for task between pending to completed.
- Responsive design for a seamless user experience.

## Project Structure

```
trello-todo-board
├── public
│   └── favicon.ico
├── src
│   ├── api
│   │   └── todos.js
│   ├── components
│   │   ├── Board.js
│   │   ├── Column.js
│   │   ├── TaskCard.js
│   │   └── AddTaskForm.js
│   ├── hooks
│   │   └── useTodos.js
│   ├── styles
│   │   └── globals.css
│   ├── App.js
│   └── index.js
├── package.json
└── .gitignore
```

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd trello-todo-board
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Approach

The application is built using React and leverages hooks for state management. The `useTodos` custom hook encapsulates the logic for interacting with the DummyJSON Todos API, providing a clean interface for the components.

## Trade-offs and Improvements

- The current implementation does not include user authentication. Future improvements could involve adding user accounts and persistent storage for todos.
- Error handling can be enhanced to provide better feedback to users in case of API failures.
- The drag-and-drop functionality  between pending to completed todo list can be optimized for better performance and user experience.

## License

This project is open-source and available under the MIT License.