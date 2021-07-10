### General info
ComunicAção API is a student REST API made to show frequency students. 

#### The student Object 🍵
| Properties | Description | Type  |
|:----------- |:---------------|:--------|
|nome| the student name | String| 
|nascimento| the description | String | 
|responsaveis|responsaveis associated with the student  |String | 
|telefone|time to send a message | Number | 
|comments|any comments posted about the student |Array of String | 

#### Routes ⚡
| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /student      | GET                  | Displays all student
| /student      | POST               | Creates a new student
| /student      | DELETE            | Deletes all student
|/student/:name| GET     | Displays a specific student, given its name
|/student/:name| POST  | Adds a comment to a specific student, given its name
|/student/:name| DELETE | Deletes a specific student, given its name
	
### Technologies
Project is created with:
<p>
<img src="https://img.shields.io/badge/-MongoDB%20-1AA121?style=for-the-badge&logo=mongodb&logoColor=green">
<img src="https://img.shields.io/badge/-Expressjs%20-%23323330?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/-Nodejs%20-%23323330?style=for-the-badge&logo=Node.js&logoColor=green">
</p>

* Node version: 12.14.1
* Express version: 4.17.1
* Mongoose version: 5.9.25 
* MongoDB Atlas

## Arquitetura

        Arquitetura MVC
        |
        \--📂 crud-api-comunicacao
            |   README.md  
            |   .env
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   **server.js**
            \--📂 node_modules
            \--📂src
                |📂---controller
                |    **student.js**
                |
                📂---data
                |   **database.js**
                |
                📂---models
                |       **student.js**
                |
                📂---public
                |       **student.js
                         tyle.css**
                |       
                |
                📂---routes
                |       **index.js
                        student.js**

#### 👉 Deployed at: https://crud-api-comunicacao-students/herokuapp.com
> Note: heroku can load the page. Please let me know if you find any bugs or errors at anaisateodoro@hotmail.com


### Setup
To run this project locally, clone repo and execute in command prompt:

```
$ cd crud-api-comunicacao
$ npm install
$ npm start or nodemon server.js
```

### Next Steps
- Populate send message (Twilo)
- Make a simple auth using jsonwebtoken this API 
- Make better style css
	
# crud-comunicacao-students
