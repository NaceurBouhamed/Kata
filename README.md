# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Development server

Run `ng serve` or `npm start`;

## Architecture

This project is using:
- Standalone components
- Facade pattern
- Ngrx for store management.
- Bootstrap 5 for minimal styling.
- a small test was added to checker service

# Backend

run main or `mvn spring-boot:run` to run the backend.

## Architecture
this backend has a classic mvc approach with a controller advice to handle exceptions

## important!

a `Thread.sleep(128)` was added to QuizController to simulate network throttling and make spinners visible in the frontend.
