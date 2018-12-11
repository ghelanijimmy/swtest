import React, { Component } from 'react';
import Header from './components/header';
import FetchInfo from './components/ajax';
import {Route, HashRouter} from 'react-router-dom';
// import Excursion from './components/excursion';
import Footer from './components/footer';

import './styles/styles.css';
import 'antd/dist/antd.css';
import Excursion from "./components/excursion";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: [],
            hide: false
        };

    }


    componentDidMount(){
        fetch('https://hotelinfoservice.sunwingtravelgroup.com/en/AllHotelDestinationList')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.setState({
                    response: data
                });
            });
    }




  render() {
      const stateObj = (obj) => {
          this.setState({
              destination: obj
          });
      };
      const hideMe = () => {
          this.setState({
              hide: !this.state.hide
          })
      }
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

                        console.log(countryValue);
                        console.log(destinationValue);

                        excursionObj = {
                            country: countryValue,
                            destination: destinationValue || ""
                        };

                        stateObj(excursionObj);


                    }, 200);

                });

            });
        }

    }, 100);
// console.log(this.state);
    return (

      <div className="App">
        <HashRouter>
            <div className={'appContent'}>
                <Header />
                <div className={'mainContent'}>
                    <FetchInfo data={this.state.response} hidden={this.state.hide}/>
                    <Route path="/excursion" render={(props)=><Excursion {...props} data={this.state.response} stateObj={this.state} destination={excursionObj} hide={hideMe}/>} />
                </div>
                <Footer/>
            </div>
        </HashRouter>
      </div>
    );
  }
}



export default App;
