import React, {Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class LecturesDetailView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            isEditing:false,
            isSaving:false,
            error:null,
            lecture:null
        }
    }

    componentWillMount(){
        if(this.isNew()){
          this.setState({lecture: {}, isEditing: true});
          return;
        }
        this.loadLecture();
      }

    loadLecture(){
        const {id} = this.props.match.params;
        this.setState({isLoading: true});

        const lecture = {
          code: id,
          name: "MR Test"
        }

        this.setState(
          {
            lecture: lecture,
            isLoading: false
          }
        )

        // axios.get(`/api/lecture/${id}`)
        //   .then(response => {
        //     this.setState({
        //       lecture: response.data,
        //       isLoading: false
        //     });
        //   })
    }

    isNew(){
        const {id} = this.props.match.params;
        return id === "create"
    }

    renderForm(lecture){
        const lectureStore = lecture;
        return(

        <div className="card btngap bg-light mx-auto" style={{width:"50rem"}}>
            <h5 className="card-header">Lecturer Detail</h5>
            <form className="card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="inputrow">Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Code"
                    value= {this.state.lecture.code || ''}
                    name="code"
                    onChange={this.handleInputChange}
                  />

                <label className="inputrow">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value= {this.state.lecture.name || ''}
                    name="name"
                    onChange={this.handleInputChange}
                  />
                  <div className="inputrow">
                      <button type='button' className="btn btn-success btn-left-mag"
                        onClick={()=>this.handleSave()}>Save</button>
                      <Link to="/lectures" className="btn btn-secondary btn-left-mag"
                        onClick={()=>this.handleCancel(lectureStore)}>Cancel</Link>
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
            lecture: {
              ...this.state.lecture,
              [name]: value
            }
        });
    };


    handleEdit(lecture){
        this.setState(
            {
                isEditing:true
            }
        )
    }

    handleDelete(){
        // const id = this.state.lecture.code;
        // axios.delete(`/api/lecture/${id}`)
        //   .then(response =>{
        //     console.log(response);
        //   })
    }

    handleSave(){
        // const id = this.state.lecture.code;

        // if (this.isNew()){
        //   axios.post(`/api/lectures/${id}`, this.state.lecture)
        //   .then( response => {
        //     alert("Save Successfully");
        //     }
        //   )
        // }else{
        //   axios.put(`/api/lectures/${id}`, this.state.lecture)
        //   .then( response => {
        //     alert("Save Successfully");
        //     }
        //   )
        // }
    }

    handleCancel(lecture){
        this.setState({lecture})
    }

    renderDisplay(data){
    const lecture = data;
    return(
        <div className="card btngap  bg-light mx-auto " style={{maxWidth:"30rem"}}>
        <h4 className="card-header">Lecturer Detail</h4>
        <div className="card-body">
            <h4 className="card-title">Lecturer Name: {lecture.name}</h4>
            <h4 className="card-title">Lecturer ID: {lecture.code}</h4>
              {/* <h4 className="card-title">Lecturer: </h4> */}
              <p className="card-text">Lecturer Introduction.</p>

              <div className="inputrow">
                  <button className="btn btn-success btn-left-mag"
                    onClick={()=>this.handleEdit(lecture)}>Edit</button>
                  <Link to="/lectures" className="btn btn-danger btn-left-mag"
                    onClick={()=>this.handleDelete()}>Delete</Link>
              </div>
          </div>
          </div>
        )
    }

    render() {
      console.log(this.props);
      const {isLoading, isEditing, lecture} = this.state;
      if(isLoading) {
        return <h3>Loading details..</h3>
      }
        return isEditing ? this.renderForm(lecture) : this.renderDisplay(lecture)
    }

}
