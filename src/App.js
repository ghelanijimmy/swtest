import React, { Component } from 'react';
import Header from './components/header';
import FetchInfo from './components/ajax';
import {Route, HashRouter} from 'react-router-dom';
import Excursion from './components/excursion';
import Footer from './components/footer';

import './styles/styles.css';

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
    var excursionObj;
    var countryValue = "";
    var destinationValue = "";
    const checkExist = setInterval(function(){
        const countrySelect = document.getElementById('countryName');

        if(countrySelect !== null && countrySelect.children.length > 0){
            clearInterval(checkExist);

            const destinationSelect = document.getElementById('destination');
            countryValue = countrySelect.options[countrySelect.selectedIndex].text;
            if(destinationSelect.children.length <1){
                destinationValue = "";
            }
            console.log(countryValue);
            console.log(destinationValue);

            excursionObj = {
                country: countryValue,
                destination: destinationValue
            }

            const optionsArray = [countrySelect, destinationSelect];

            optionsArray.forEach(function(option){
                option.addEventListener("change", function () {

                    setTimeout(function(){
                        countryValue = countrySelect.options[countrySelect.selectedIndex].text;
                        if(destinationSelect.children.length <1){
                            destinationValue = "";
                        } else {
                            destinationValue = destinationSelect.options[destinationSelect.selectedIndex].text;
                        }

                        excursionObj = {
                            country: countryValue,
                            destination: destinationValue || ""
                        };

                    }, 200);

                });
            });

            return excursionObj;
        }
    }, 100);
    return (
      <div className="App">
        <HashRouter>
            <div className={'appContent'}>
                <Header />
                <div>
                    <Route exact path="/" component={(props)=><FetchInfo {...props} data={this.state.response} location={props.location}/>} />
                    <Route path="/excursion" component={(props)=><Excursion {...props} destination={excursionObj} data={this.state.response} location={props.location}/>} />
                </div>
                <Footer/>
            </div>
        </HashRouter>
      </div>
    );
  }
}



export default App;
