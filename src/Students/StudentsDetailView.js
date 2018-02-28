import React from 'react';
import '../styles/studentDetailView.css';
import {Link} from 'react-router-dom';


export default class StudentsDetailView extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      isLoading: false,
      isEditing:false,
      isSaving:false,
      error:null,
      students:null
    }
  }

  isNew(){
    const {id} = this.props.match.params;
    return id === "create"
  }



    componentWillMount(){
      if (this.isNew()){
        this.setState({student:{}, isEditing:true});
        return;
      }
      this.loadStudent
    }

    handleCancel(student){
        this.setState({student})
    }

    handleEdit(student){
        this.setState(
            {
                isEditing:true
            }
        )
    }

  renderDisplay(student){
    const {id} = this.props.match.params;
    return(
      <section className='studentCard-container'>
        <div className='profile-card card-shadow'>
          <div className='card-header'>
            <h1> this is student {id}</h1>
          </div>
          <div className='card-footer'>
            <div className='col-left'>
              <div className='padding'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies</p>
              </div>
            </div>
            <div className='col-right'>
              <div className='padding'>
                <div className='col-left value'>
                  <p><strong>ID</strong></p>
                  <p><strong>Name</strong></p>
                  <p><strong>Age</strong></p>
                  <p><strong>Email</strong></p>
                </div>
                <div className='col-right'>
                    <p>{id}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="inputrow">
            <div className='padding'>
              <button className="btn btn-success btn-left-mag"
                onClick={()=>this.handleEdit(student)}>Edit</button>
              <Link to="/students" className="btn btn-danger btn-left-mag"
                onClick={()=>this.handleDelete()}>Delete</Link>
            </div>
          </div>
     </section>

    )
  }

  renderForm(student){
    return(
      <div>
        <h2 style={{'text-align':'center'}}> Student Details</h2>
        <form>
          <div>
            <label className='inputrow'>Student ID</label>
            <input
              type='text'
              className='form-control'
              placeholder="student ID"
              //value={this.state.students.id}
              onChange={this.handleInputChange} />
          </div>
          <div>
            <label className='inputrow'>Student Name</label>
            <input
              type='text'
              className='form-control'
              placeholder="student Name"
              //value={this.state.students.name || ''}
              onChange={this.handleInputChange} />
          </div>
          <div>
            <label className='inputrow'>Student Email</label>
            <input
              type='text'
              className='form-control'
              placeholder="example@gmail.com"
            //  value={this.state.students.email || ''}
              onChange={this.handleInputChange} />
          </div>
          <div className="inputrow">
            <button className="btn btn-success btn-left-mag"> Submit </button>
            <button type='button' className="btn btn-light btn-left-mag">Cancel</button>
          </div>
        </form>
      </div>
    )
  }

  render(){
    const {isLoading, isEditing, student} = this.state;
    if (isLoading) {
        return <h3> loading student details ...</h3>;
    }
    return isEditing ?
      this.renderForm(student): this.renderDisplay(student)
  }
}
