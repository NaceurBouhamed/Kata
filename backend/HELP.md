# Getting Started

run main or `mvn spring-boot:run` to run the backend.

## Architecture
this backend has a classic mvc approach with a controller advice to handle exceptions

## important!

a `Thread.sleep(128)` was added to QuizController to simulate network throttling and make spinners visible in the frontend.