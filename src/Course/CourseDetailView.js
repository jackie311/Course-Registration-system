import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CourseDetailView extends Component{
  constructor(props) {
		  super(props);
			this.state = {
        isLoading:false,
        isEditing:false,
        isSaving:false,
        error:null,
        course:null
      }
  }

    componentWillMount(){
      if(this.isNew()){
        this.setState({course: {}, isEditing: true});
        return;
      }
      this.loadCourse();
    }

    loadCourse(){
      const {id} = this.props.match.params;
      this.setState({isLoading: true});

      const course = {
        code: id,
        name: "Web development"
      }

      this.setState(
        {
          course: course,
          isLoading: false
        }
      )

      // axios.get(`/api/cpurses/${id}`)
      //   .then(response => {
      //     this.setState({
      //       course: response.data,
      //       isLoading: false
      //     });
      //   })
    }

    isNew(){
      const {id} = this.props.match.params;
      return id === "create"
    }

    renderForm(course){
      const courseStore = course;
      return(
        
      <div className="card btngap bg-light mx-auto" style={{width:"50rem"}} >
          <h5 className="card-header">Course Detail</h5>
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="inputrow">Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Code"
                  value= {this.state.course.code || ''}
                  name="code"
                  onChange={this.handleInputChange}
                />

              <label className="inputrow">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value= {this.state.course.name || ''}
                  name="name"
                  onChange={this.handleInputChange}
                />
                <div className="inputrow">
                    <button type='button' className="btn btn-success btn-left-mag" 
                      onClick={()=>this.handleSave()}>Save</button>
                    <Link to="/courses" className="btn btn-secondary btn-left-mag"
                      onClick={()=>this.handleCancel(courseStore)}>Cancel</Link>
                </div>
            </div>
          </form>
      </div>

      )
    }

    handleInputChange = (event) => {
        const target = event.target;
        const {name, value} = target;
        this.setState({
          course: {
            ...this.state.course,
            [name]: value
          }
        });
      };

    
      handleEdit(course){
        this.setState(
          {
            isEditing:true
          }
        )
      }

      handleDelete(){
        // const id = this.state.course.code;
        // axios.delete(`/api/course/${id}`)
        //   .then(response =>{
        //     console.log(response);
        //   })
      }

      handleSave(){
        // const id = this.state.course.code;

        // if (this.isNew()){
        //   axios.post(`/api/courses/${id}`, this.state.course)
        //   .then( response => {
        //     alert("Save Successfully");
        //     }
        //   )  
        // }else{
        //   axios.put(`/api/courses/${id}`, this.state.course)
        //   .then( response => {
        //     alert("Save Successfully");
        //     }
        //   )
        // }
      }

      handleCancel(course){
        this.setState({course})
      }

    renderDisplay(data){  
     const course = data;
      return(
        <div className="card btngap bg-light mx-auto " style={{maxWidth:"30rem"}}>
          <h4 class="card-header ">Course Detail</h4>
          <div className="card-body">
              <h4 className="card-title">Course Name:  {course.name}</h4>
              <h4 className="card-title">Course ID:  {course.code}</h4>
              <h4 className="card-title">Lecturer:  </h4>
              <p className="card-text">Course Description.</p>
              
              <div className="inputrow">
                  <button className="btn btn-success btn-left-mag" 
                    onClick={()=>this.handleEdit(course)}>Edit</button>
                  <Link to="/courses" className="btn btn-danger btn-left-mag"
                    onClick={()=>this.handleDelete()}>Delete</Link>
              </div>
          </div>
        </div>
      )
    }

  render() {
    console.log(this.props);
    const {isLoading, isEditing, course} = this.state;
    if(isLoading) {
      return <h3>Loading details..</h3> 
    }
      return isEditing ? this.renderForm(course) : this.renderDisplay(course)
  }
  
}
