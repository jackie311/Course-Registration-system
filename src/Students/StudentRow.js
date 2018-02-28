import React from 'react';
import {Link} from 'react-router-dom';

export default class StudentRow extends React.Component {
    render(){
      return (
              <tr>
                <td className = 'studentTd'> {this.props.students.id}</td>
                <td className = 'studentTd'> {this.props.students.name}</td>
                <td className = 'studentTd'> {this.props.students.age}</td>
                <td className = 'studentTd'> {this.props.students.email}</td>
                <td className = 'studentTd'>
                    < Link to={`/students/${this.props.students.id}`} className="btn btn-info">Details</Link>
                </td>
              </tr>
      );
    }
}
