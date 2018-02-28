import React, {Component} from 'react';
import axios from 'axios';
import CourseCard from './CourseCard.js';
import {Link} from 'react-router-dom';
// import CourseDataStore from './CourseDataStore';

export default class CoursesView extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      courses:[
        {
          id:"1",
          name:"c#"
        },
        {
          id:"2",
          name:"web"
        },
        {
          id:"3",
          name:"web"
        },
        {
          id:"4",
          name:"web"
        },
        {
          id:"5",
          name:"web"
        },
        {
          id:"6",
          name:"web"
        },{
          id:"7",
          name:"web"
        }
      ]
      // num: 1
    };
  }
  
  componentWillMount(){
    this.loadCourses();
  }

  loadCourses(){
      // this.setState({isLoading:true});
      // axios.get(`/api/courses`)
      //   .then(
      //     response=>{
      //       this.setState({
      //         courses: response.data,
      //         isLoading: false
      //       });
      //     });
  }
  

  render(){
    const {isLoading} = this.state;
    if(isLoading)
      return <h3 style={{color:'Red'}}> CoursesView </h3>;

    else{
        const item = this.state.courses.map(course => <CourseCard course={course} key={course.id} />);
        return(
          <div>
              <h3 style={{color:'Red'}}> CoursesView </h3>
              <Link to="/courses/create" className="btn btn-md btn-success btngap">Add new course</Link>
              <div className="row">{item}</div>
          </div>
        );
    }    
  }

    


//  render(){ 
//    return (
//     <div>
//       <h3 style={{color:'Red'}}> CoursesView </h3>
//       <span>LLLL</span>
//       <CourseCard num = {this.state.num}/>
      
//       <Link to="/courses/create" className="btn btn-lg btn-success">Add new course</Link>
        
//     </div>
    
//     );
//   }
  
//   addcourse(){
//   // alert("hhh");
//   const num= this.state.num+1;
//   this.setState({num});
// }

}

