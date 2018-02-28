import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LectureCard from './LectureCard'
export default class LecturesView extends Component {

    constructor(props) {
		super(props);
		this.state = {
      isLoading: false,
      lectures:[
        {
          id:"1",
          name:"Mr J"
        },
        {
          id:"2",
          name:"Ms Lee"
        },
        {
          id:"3",
          name:"Dr Chan"
        },
        {
          id:"4",
          name:"Mr Haha"
        },
        {
          id:"5",
          name:"Ms Lucy"
        },
        {
          id:"6",
          name:"Dr do"
        },{
          id:"7",
          name:"YOYO"
        }
      ]
	    
		};
  }
  
  componentWillMount(){
    this.loadLectures();
  }

  loadLectures(){
      // this.setState({isLoading:true});
      // axios.get(`/api/lectures`)
      //   .then(
      //     response=>{
      //       this.setState({
      //         lectures: response.data,
      //         isLoading: false
      //       });
      //     });
  }
  

    render(){
        const {isLoading} = this.state;
        if(isLoading)
        return <h3 style={{color:'Red'}}> LecturesView </h3>;

        else{
            const item = this.state.lectures.map(lecture => 
                <LectureCard lecture={lecture} key={lecture.id} />
            );

            return(
            <div>
                <h3 style={{color:'Red'}}> lecturesView </h3>
                <Link to="/lectures/create" className="btn btn-md btn-success btngap">Add new lecture</Link>
                <div className="card" ><ul class="list-group list-group-flush">{item}</ul></div>
            </div>
            );
        } 
    }   
  
}
