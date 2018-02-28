import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default function CourseCard(props){
    //const data = props.data;
    return(
        
        // <div className="col-sm-4">
            // <div className="card">
            // <div className="card-body">
            //     <h4 className="card-title">Course Name</h4>
            //     <h4 className="card-title">Course ID</h4>
            //     <h4 className="card-title">Lecturer</h4>
            //     <p className="card-text">Course Description.</p>
            //     <Link to="/courses/1" className="btn btn-primary">More details</Link>
            // </div>
            // </div>
        // </div>
        <div className="col-md-3 col-sm-3">
            <div className="card cardgap ">
                <div className="card-body">
                    <h6 className="card-title">Name: {props.course.name}</h6>
                    <h6 className="card-title">ID: {props.course.id}</h6>
                    <h6 className="card-title">Lecturer:{props.course.lecturer}</h6>
                    <p className="card-text">Course Description.{props.course.des}</p>
                    <Link to={`/courses/${props.course.id}`} className="btn btn-primary">More details</Link>
                </div>
            </div>

        </div>
        

    );
}

// export default function CourseCard(props){
//     const num = props.num;
//     var i=0;
//     var items = [];
//     while (i < num){
//             i++; 
//             items.push(<Singlecard/>); 
//         } 
//     return(<div className = "row">{items}</div>)     
    
             
    
// }