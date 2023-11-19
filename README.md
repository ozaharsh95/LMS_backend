
# Backend Task 🚀:

## Features :

+ Authorised User can perform Create,Read,Update,Delete operation using REST apis


## API endpoints :

1. login
+ `POST  : /api/auth/login` : To Authenticate a User
2. getAllAssignments
+ `GET   : /api/assignment/` : To retreive all assignments 
3. getAssignmentById
+ `GET   : /api/assignment/:id` : To retreive assignments by using ID
4. deleteAssignment
+ `DELETE : /api/assignment/:id` : To delete assignment by it id.
5. insertAssignment
+ `POST : /api/assignment/` : To insert assignment by passing JSON object
6. updateAssignment :
+ `PUT : /api/assignment/:id` : To update assignment by id

## API Documentation :

[API_DOCUMENTATION](https://documenter.getpostman.com/view/30344212/2s9YJhvyvi)

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- Express.js: [Documentation](https://expressjs.com/)
- MySQL: [Download](https://dev.mysql.com/downloads/mysql/)
- Visual Studio Code (or your preferred code editor): [Download](https://code.visualstudio.com/)
- Postman (for testing API endpoints): [Download](https://www.postman.com/)
- Docker: [Download](https://www.docker.com/get-started)
# Directory Structure :
```sh

folder/
┣ controllers/
┃ ┣ assignment.controller.js
┃ ┗ login.controller.js
┣ node_modules/
┣ services/
┃ ┣ assignment.services.js
┃ ┗ login.service.js
┣ auth.js
┣ db.js
┣ index.js
┣ package-lock.json
┣ package.json
┣ sql.sql
┗ sql.txt

```