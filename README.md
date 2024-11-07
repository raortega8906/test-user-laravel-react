<div align="center">
  <a href="https://es.react.dev" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="100"/>
  </a>
  <a href="https://laravel.com" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" width="100"/>      
  </a>
</div>

# Project Under Construction

This is a test project with a React-based frontend and a Laravel API backend, currently under development.

## Project Overview
This app provides a basic CRUD interface using Laravel for backend functionality and React for the frontend.

## Installation Requirements

For running this project, ensure the following are installed on your system:
- PHP
- MySQL
- Composer
- Node.js
- A web server (Apache or Nginx)

## Setup Instructions

1. Clone the repository:
  ```bash
  git clone https://github.com/raortega8906/test-user-laravel-react.git
  ```

2. Navigate to the backend and install dependencies:

  ```bash
  cd back
  composer install
  ```

3. Set up the environment file:

  ```bash
  cp .env.example .env
  php artisan key:generate
  ```

4. Configure database credentials in .env and run migrations:

  ```bash
  php artisan migrate
  php artisan serve
  ```

5. Set up the frontend:
   
  ```bash
  cd ../front
  npm install
  npm start
  ```

Visit localhost:3000 to view the project.

## License
This project is open-source.
