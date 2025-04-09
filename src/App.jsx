import React, { Component } from "react";
import "./App.css";
import question from "./components/question.jsx";
import qbank from "./components/question-bank.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionbank: qbank,
      currques: 0,
      selectedopt: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  };

  checkAnswer = () =>{
    const{questionbank , currques , selectedopt , score }=this.state;
    if(selectedopt===questionbank[currques].answer){
      this.setState((prevState)=>({score:prevState.score + 1}));
    }
  };

  







}// end of class
