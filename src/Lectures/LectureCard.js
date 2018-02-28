import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default function LectureCard(props){
    //const data = props.data;
    return(
        
             <li class="list-group-item">
                {props.lecture.id} {props.lecture.name}
                <Link to={`/lectures/${props.lecture.id}`} className="btn btn-primary btn-sm float-right">
                    Details
                </Link>
            </li>
     

    );
}
