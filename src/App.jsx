import React , {Component} from "react";
import "./App.css";
import question from "./components/question.jsx";
import qbank from "./components/question-bank.jsx";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      questionbank : qbank,
      currques : 0,
      selectedopt:"",
      score :0,
      quizEnd : false,
    };
  }

  
}