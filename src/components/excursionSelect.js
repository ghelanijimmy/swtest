import React, {Component} from 'react';
import {NavLink, HashRouter} from 'react-router-dom';

class ExcursionList extends Component {
    constructor(props){
        super(props);

    }


    render(){

        const selectCountry = (options) => {
            return (
                <select id={'countryName'} onChange={destinationSelect}>
                    <option>--Select Country---</option>
                    {this.props.data.map((country, option) => (
                        <option key={country[options]}>{country[options]}</option>))}
                </select>

            )

        }

        const renderDestination = (values) => {
            this.props.data.filter(function(country){
                if(country.countryName === values){
                    console.log(country.destinations);

                    document.getElementById('destination').innerHTML = "";
                    country.destinations.filter((destination, index) => {
                        const select = document.getElementById('destination');
                        const createOption = document.createElement('option');
                        createOption.text = destination;
                        select.add(createOption);
                        return true;
                    });

                }
                return true;
            });
        }

        const destinationSelect = () => {
            setTimeout(function(){
                const countrySelect = document.getElementById('countryName');
                const values = countrySelect.options[countrySelect.selectedIndex].text;
                return (renderDestination(values));
            },100)

        }

        return(
            <div className={'excursionBox'}>

                <h1>Excursion Destination</h1>

                <div className={'excursionSelect'}>

                    {selectCountry('countryName')}

                    <select id={'destination'}>
                        <option>
                            {'Select Country First'}
                        </option>
                    </select>

                </div>
                <HashRouter>
                    <NavLink to="/excursion">GO</NavLink>
                </HashRouter>

            </div>
        );
    }
}

export default ExcursionList;