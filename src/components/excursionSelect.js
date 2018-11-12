import React, {Component} from 'react';
import {NavLink, HashRouter, withRouter, Link} from 'react-router-dom';

class ExcursionList extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.setState({
            selectCountry: "",
        })
    }


    render(){

        const selectCountry = (options) => {
            return (
                <select id={'countryName'} onChange={destinationSelect}>
                    <option>--SELECT COUNTRY--</option>
                    {this.props.data.map((country, option) => (
                        <option key={country[options]}>{country[options]}</option>))}
                </select>

            )

        }

        const destinationSelect = () => {
            setTimeout(function(){
                const countrySelect = document.getElementById('countryName');
                const values = countrySelect.options[countrySelect.selectedIndex].text;
                return (renderDestination(values));
            },100)

        }

        const renderDestination = (values) => {
            this.props.data.filter(function(country){
                if(country.countryName === values){
                    // console.log(country.destinations);

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

        return(
            <div className={'excursionBox'}>

                <h1>Excursion Destination</h1>

                <div className={'excursionSelect'}>

                    {selectCountry('countryName')}

                    <select id={'destination'}>

                    </select>

                </div>

                    <Link to="/excursion">GO</Link>

            </div>
        );
    }
}

export default ExcursionList;