<h1 align="center">Resume Builder</h1>
<h3 align="center">A Group Project</h3>

- 🔭 **Resume Builder**
GitHub Repo: https://github.com/Agusienka/resume-builder.git



#Description:
User be able to build a resume using our best template. User be able to add goal to it. Than user should register using some basic information and than user can add education, experience, and references. Once it is submit it will show a resume.


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>



#Available Scripts:

 `cd` into `backend` and run `npm install` to install dependencies for the API.
 `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

In separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.
or `cd` into resume-builder, and run `npm run client` would run the APP.


#DATABSE:

MONGODB

### API: http://localhost:5000/login
 
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    |                         | Login page                                 |
| GET    | /users                              | log-in page                         |
| POST   | /'/api/users/'                           | login/Log-out/Register                      |
| GET    | /Education/: Education                   | Education          |
| POST   | '/api/educations/'                          | Details about a Education                      |
| PUT    | '/api/educations/'                    | Update a Education                 |
| DELETE | /education/                   | Delete a education                 |
| GET    | /Experience/: Experience                   | Experience          |
| POST   | '/api/Experience/'                          | Details about a Experience                      |
| PUT    | '/api/Experience/'                    | Update a Experience                 |
| DELETE | /Experience/                   | Delete a Experience                 |
| GET    | /extras/: extras                  | extras          |
| POST   | '/api/extras/'                          | Details about a extras                      |
| PUT    | '/api/extras/'                    | Update a extras                 |
| DELETE | /extras/                   | Delete a extras                 |
| GET    | /goals/: goals                 | goals         |
| POST   | '/api/goals/'                          | Details about a goals                      |
| PUT    | '/api/goals/'                    | Update a goals                 |
| DELETE | /goals/                   | Delete a goals                 |
| GET    | /personals/: personals                 | personals         |
| POST   | '/api/personals/'                          | Details about a personals                      |
| PUT    | '/api/personals/'                    | Update a personals                 |
| DELETE | /personals/                   | Delete a personals                 |


### App (http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Dashboard.jsx`                 | Dashboard page |
| /log-in              | `login.jsx`     |  user  login  |
| /Register              | `Register.jsx`  | Details of a users information   |
| /Education          | `EducationForm.jsx`  | Details of a Education  |
| /Experience      | `Experience.jsx`  | Details of a Experience |
| /extra | `extra.jsx` | extra information  |
| /goal | `goal.jsx` | creating a goals  |
| /personal | `personal.jsx` | Adding personal information  |


#Acknowledgement:

This project was inspired by job serach and trying to make best resume using diffrent tempaltes. We used You Tube tutorial to make this project. 
Many thanks to our instructor who helped us whenever we are stuck.