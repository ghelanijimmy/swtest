import React, { Component } from 'react';
import Header from './components/header';
import FetchInfo from './components/ajax';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Excursion from './components/excursion';

import './styles/styles.css';
import ExcursionList from "./components/excursionSelect";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            response:[]
        }
    }

    componentDidMount(){
        fetch('https://hotelinfoservice.sunwingtravelgroup.com/en/AllHotelDestinationList')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    response: data
                });
            });
    }
  render() {
    return (
      <div className="App">
        <HashRouter>
            <div>
            <Header />
            <div>
                <Route exact path="/" render={(props)=><FetchInfo {...props} data={this.state.response} />} />
                <Route path="/excursion" render={(props)=><Excursion {...props} test={"true"} />} />
            </div>
            </div>
        </HashRouter>
      </div>
    );
  }
}



export default App;
