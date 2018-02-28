import React from 'react';
import StudentRow from './StudentRow';
import {Link} from 'react-router-dom';

export default class StudentList extends React.Component {

      render() {
        var students=[
                {id: 1, name: "Robert", age : 21, email : "robert@gmail.com" },
                {id: 2, name: "Grace", age : 23, email : "Grace@gmail.com" },
                {id: 4, name: "Michelle", age : 22, email :"michelle@gmail.com" },
                {id: 5, name: "James", age : 23, email :"james@gmail.com" },
                {id: 6, name: "Cherry", age : 25, email :"cherry@gmail.com" },
                {id: 7, name: "Tom", age : 27, email :"tom@gmail.com" },
                {id: 8, name: "Jimmy", age : 25, email :"jimmy@gmail.com" }
            ];

        return(
          <div className="container">
            <table className= "table table-hover table-striped">
              <thead>
                  <tr>
                     <td><strong>Student ID</strong></td>
                     <td><strong>Name</strong></td>
                     <td><strong>Age</strong></td>
                     <td><strong>Email</strong></td>
                  </tr>
              </thead>
              <tbody>
                 {students.map(students => (<StudentRow  students={students}/>))}
              </tbody>

          </table>
        </div>
      )
      }

}
