# Task Management API

This is a RESTful API for a task management system built with Node.js and Express.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete
- Basic authentication
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the server, run:

```
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Endpoints

- GET /tasks: Retrieve all tasks
- GET /tasks/{id}: Retrieve a specific task by ID
- POST /tasks: Create a new task
- PUT /tasks/{id}: Update an existing task
- DELETE /tasks/{id}: Delete a task
- PATCH /tasks/{id}/complete: Mark a task as complete

## Authentication

All endpoints require authentication. Include the following header in your requests:

```
X-API-Key: your-secret-api-key
```

## Testing

To run the unit tests, use the following command:

```
npm test
```

## Design Decisions and Assumptions

1. In-memory data store: For simplicity, I used an in-memory data store. In a production environment, this should be replaced with a persistent database.

2. Authentication: I implemented a basic API key authentication. In a real-world scenario, this should be replaced with a more robust authentication system (e.g., JWT).

3. Error handling: I implemented basic error handling for input validation and not found errors. This can be extended to handle more specific error cases.

4. Date handling: I assumed that dates are provided in ISO 8601 format (YYYY-MM-DD).

5. Status enum: I limited the task status to three values: "pending", "in_progress", and "completed".

6. ID generation: I used UUID v4 for generating unique task IDs.

7. Timestamps: Created_at and updated_at timestamps are automatically managed by the API.

## Future Improvements

1. Implement pagination for the GET /tasks endpoint
2. Add user management and multi-user support
3. Implement more comprehensive input validation and sanitization
4. Add logging for better debugging and monitoring
5. Implement rate limiting to prevent abuse
6. Add OpenAPI/Swagger documentation for better API discoverability
