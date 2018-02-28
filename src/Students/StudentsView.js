import React from 'react';
import {Link} from 'react-router-dom';
import StudentList from './StudentList';

export default class StudentsView extends React.Component {
  constructor (props) {
      super(props);
      this.state={
        isLoading: false,
      };
    }


      render() {
        const {isLoading} = this.state;
        if (isLoading)
          return <span>Loading student </span>

        return(
          <div>
            <StudentList />
            <Link to="/students/create" className="btn btn-lg btn-success"> Add New Student </Link>
          </div>
        )
      }
}
