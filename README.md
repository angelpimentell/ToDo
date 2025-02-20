# ToDo Application

## Overview
The **ToDo Application** is a full-stack web application built with **C# ASP.NET Core** for the backend and **Angular** for the frontend. The application allows users to manage their daily tasks efficiently by adding, updating, deleting, and marking tasks as completed.

## Features
- Create, update, delete, and list tasks
- Mark tasks as completed/incomplete
- Responsive UI built with Angular Material
- Simple RESTful API for task management

## Technologies Used
### Backend:
- C#
- ASP.NET Core Web API

### Frontend:
- Angular
- TypeScript
- Angular

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- .NET SDK (latest version)
- Node.js and npm
- Angular CLI

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository-url.git
   cd todo-backend
   ```
2. Install dependencies:
   ```sh
   dotnet restore
   ```
3. Run the API:
   ```sh
   dotnet run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd todo.client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular application:
   ```sh
   ng serve
   ```
4. Open the application in your browser

## API Endpoints
### Tasks
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task

## Contributing
If you would like to contribute to this project, follow these steps:
1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push the branch and create a pull request

## License
This project is licensed under the MIT License.

## Contact
For any issues or inquiries, please contact [your-email@example.com].

