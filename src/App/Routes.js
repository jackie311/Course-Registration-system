import React from 'react';
import {Route} from 'react-router-dom';
import CoursesView from '../Course/CoursesView';
import StudentsView from '../Students/StudentsView'
import LecturesView from '../Lectures/LecturesView';
import LecturesDetailView from '../Lectures/LecturesDetailView';
import CourseDetailView from '../Course/CourseDetailView';
import StudentsDetailView from '../Students/StudentsDetailView';
import LoginView from '../User/LoginView';
import SignupView from '../User/SignupView';

export default () => ((
    <div>
        <Route exact path="/" component={LoginView}/>

        <Route exact path="/courses" component={CoursesView}/>
        <Route exact path="/courses/:id" component={CourseDetailView} />

        <Route exact path="/students" component={StudentsView}/>
        <Route exact path="/students/:id" component={StudentsDetailView}/>

        <Route exact path="/lectures" component={LecturesView}/>
        <Route exact path="/lectures/:id" component={LecturesDetailView}/>
        
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignupView} />
        
    </div>
));
