import React from 'react';
import {Link} from 'react-router-dom';

// import { Button, ButtonGroup } from 'react-bootstrap';

export default function TopNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
        <ul className="navbar-nav ">
          <li className="nav-item" >
            <Link to="/courses" className="nav-link">Courses</Link>
          </li>
          <li className="nav-item">
            <Link to="/students" className="nav-link">Students</Link>
          </li>
          <li className="nav-item">
            <Link to="/lectures" className="nav-link">Lectures</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className=" btn btn-primary btnLR" to="/login">Log In</Link>
            </li>
            <li className="nav-item">
                <Link className=" btn btn-info " to="/signup">Sign up</Link>
            </li>
        </ul>


      </nav>
  </div>
  );
// import {LinkContainer} from 'react-router-bootstrap';
// import {Button, ButtonGroup} from 'reactstrap';

// export default function TopNav() {
//     return (
//         <ButtonGroup>
//             <LinkContainer to ="/courses">
//                 <Button color="success">COURSE
//                 </Button></LinkContainer>

//             <LinkContainer to ="/students">
//                 <Button color="success">STUDENT
//                 </Button></LinkContainer>

//             <LinkContainer to ="/lectures">
//                 <Button color="success">LECTURES
//                 </Button></LinkContainer>

//         </ButtonGroup>
//     );
}
