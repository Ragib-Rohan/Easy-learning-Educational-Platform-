import './App.css';
import * as React from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";

//Components
import HomePage from './Ppages/HomePage/HomePage';
import NewsFeed from './Ppages/NewsFeed/NewsFeed';
import ProfilePage from './Ppages/ProfilePage/ProfilePage';
import SignUpPage from './Ppages/SignUpPage/SignUpPage';
import StudentsPage from './Ppages/StudentsPage/StudentsPage';
import TeachersPage from './Ppages/TeachersPage/TeachersPage';
import LoginPage from './Ppages/LoginPage/LoginPage';
import Navbar from './Ppages/Navbar/Navbar';

import StudnetForm from "./Ppages/SignUpPage/signupComponent/StudnetForm";
import TeacherForm from "./Ppages/SignUpPage/signupComponent/TeacherForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/NewsFeed" component={NewsFeed}/>
          <Route exact path="/StudentsPage" component={StudentsPage}/>
          <Route exact path="/TeachersPage" component={TeachersPage}/>
          <Route exact path="/ProfilePage" component={ProfilePage}/>
          <Route exact path="/LoginPage" component={LoginPage}/>
          <Route exact path="/SignupPage" component={SignUpPage}/>
          

          <Route exact path="/studentForm" component={StudnetForm}/>
          <Route exact path="/teacherForm" component={TeacherForm}/>
 
        </Switch>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
