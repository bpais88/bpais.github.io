import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       courseurl: '',
       category: '',
      //  salary: '',
      //  hobby: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);

    axios.post('https://sheet.best/api/sheets/d99b86b4-fde5-40cf-b961-6fbec8f73a8e', this.state)
    .then(response => {
      console.log(response);
    })
  }
  
  render() {
    const { courseurl, category, /*contributorname, hobby*/ } = this.state;
    return (
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Course Url</label>
            <input placeholder='Enter the course url' type="text" name = "courseurl" value = {courseurl} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input placeholder='Enter the category "stock" or "crypto" ' type="text" name = "category" value = {category} onChange={this.changeHandler}/>
          </Form.Field>
          {/* <Form.Field>
            <label></label>
            <input placeholder='Enter your salary' type="number" name = "salary" value = {salary} onChange={this.changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your hobby' type="text" name = "hobby" value = {hobby} onChange={this.changeHandler}/>
          </Form.Field> */}
          
          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}