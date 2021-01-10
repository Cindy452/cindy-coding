import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Contact extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject:'',
        message: ''
      }
  }
submitEmail(e){
  e.preventDefault();
  this.props.history.push('/submit');
  axios({
    method: "POST", 
    url:"/sendemail", 
    data:  this.state
  }).then((response)=>{
    if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
    }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
    }
  })
}
resetForm(){
  this.setState({name: '', email: '', subject:'', message: ''})
}
  render () {
    return (
      <div>
     <h1>Contact Me</h1>
         <form id= "contact-form" onSubmit={this.submitEmail.bind(this)} method='POST'>

        <div className="form-group">
        <label htmlFor="name">Name</label>
       <input type="text" className="form-control" placeholder="full name" required minLength="3" maxLength="100" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
       </div>

       <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email</label>
         <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="email@example.com" required name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
        </div>

       <div className="form-group">
       <label htmlFor="name">Subject</label>
       <input type="text" className="form-control" placeholder="subject" required name="subject" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
       </div>

       <div className="form-group">
       <label htmlFor="name">Message</label>
       <textarea className="form-control" rows="5" name="message" placeholder="tell me about your experience..." required value={this.state.message} onChange={this.onMsgChange.bind(this)} ></textarea>
       </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      
      </form>
    </div>

    )
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
}

onEmailChange(event) {
    this.setState({email: event.target.value})
}

onSubjectChange(event) {
    this.setState({subject: event.target.value})
}

onMsgChange(event) {
    this.setState({message: event.target.value})
}


}
export default withRouter(Contact);