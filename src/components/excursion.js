import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Filter from './filter';


class Excursion extends Component {
    // static defaultProps = {
    //     country: 'Antigua',
    //     destination: 'Antigua'
    // }
    constructor(props){
        super(props);
        this.state = {
            excursion: "",
            filter: ""
        }
        this.handleInput = () => {
            console.log('changed');
            this.setState({
                filter: document.getElementById('filterInput').value
            });
            console.log(this.state.filter);
        }
    }



    componentDidMount(){

        if(this.props.stateObj.hide === false){
            this.props.hide();
        }


        if(this.props.destination === undefined){
            fetch(`https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${encodeURIComponent(this.props.country)}/${encodeURIComponent(this.props.eDestination)}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        excursion: data,
                        country: this.props.country,
                        destination: this.props.eDestination
                    });
                });
        }else {
            fetch(`https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${encodeURIComponent(this.props.stateObj.destination.country)}/${encodeURIComponent(this.props.stateObj.destination.destination)}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        excursion: data,
                        country: this.props.stateObj.destination.country,
                        destination: this.props.stateObj.destination.destination
                    });
                });
        }

    }


    render(){

    console.log(this.props);

        return(
            <div id={'excursionAnchor'}>

                <section className={'hero'}>
                    <div className={'excursionHeroBox'}>
                        <h3>{this.state.country}</h3>
                        <p>{this.state.destination}</p>

                            <Link to={"/"} onClick={this.props.hide}>Start Over</Link>


                    </div>
                </section>
                <section className={'content'}>
                    <div className={'destinationContent'}>
                        <h2>About {this.state.destination}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid amet, cum cupiditate distinctio dolor dolores, error, et exercitationem expedita illo magni minus provident quas qui saepe velit! Autem incidunt maiores minus obcaecati odit quasi suscipit totam vitae?
                        </p>
                    </div>
                    <Filter onFilter={this.handleInput} filter={this.state.filter}/>
                    <div id={'categories'}>

                        {
                            Object.keys(this.state.excursion).map((obj, i)=> {


                                var title = this.state.excursion[obj]['categoryName'];
                                // var reg = new RegExp(this.state.filter, 'ig');
                                // var myregex = title.match(reg);
                                // console.log(myregex);

                                // if(myregex !== null){
                                    return (
                                        <div key={title} className={'category'}>
                                            <h2 key={title}>{title}</h2>
                                            <div key={title + i} className={'subCategories'}>
                                                {
                                                    Object.values(this.state.excursion[obj]['subCategories']).map((sub, subind) => {
                                                        var subCatTitle = "";
                                                        subCatTitle = sub['subCategoryName'];
                                                        return (
                                                            <div key={subCatTitle + i} className={'subCategory'}>

                                                                <h4 id={subCatTitle.replace(/ /g, "")} key={subCatTitle}>{subCatTitle}</h4>
                                                                <div key={sub['excursions']} className={'excursion'}>
                                                                    {
                                                                        Object.values(sub['excursions']).map((excursion)=> {
                                                                            let strArray = this.state.filter.split(" ");
                                                                            var regStr = "";
                                                                            strArray.forEach(function(strItem, index){
                                                                                console.log(index);
                                                                                console.log(strArray.length);
                                                                                if(index < strArray.length - 1){
                                                                                    regStr += '(?:' + strItem + ')|';
                                                                                } else {
                                                                                    regStr += '(?:' + strItem + ')';
                                                                                }

                                                                            });
                                                                            console.log(regStr);

                                                                            var reg = new RegExp(regStr, 'ig');
                                                                            var myregex = excursion['excursionName'].match(reg);
                                                                            console.log(myregex);
                                                                            if(excursion['excursionImages'] !== null){
                                                                                if(myregex !== null){
                                                                                    let excursionBox = document.querySelectorAll('.excursion');
                                                                                    excursionBox.forEach(function(eBox){
                                                                                        if(eBox.hasChildNodes()){
                                                                                            eBox.parentNode.style.display = 'initial';
                                                                                        }else {
                                                                                            eBox.parentNode.style.display = 'none';

                                                                                        }
                                                                                    });
                                                                                    return(
                                                                                        <div className={'excursionBack'} key={excursion['excursionCode']}>
                                                                                            <div>
                                                                                                <div className={'excursionImage'} style={{background: `url(https:${excursion['excursionImages']['Img4X3']})`}}>

                                                                                                </div>
                                                                                                <div className={'excursionContent'}>
                                                                                                    <h3 key={excursion['excursionName']}>
                                                                                                        {excursion['excursionName']}
                                                                                                    </h3>

                                                                                                    <p>
                                                                                                        {excursion['excursionShortDescription']}
                                                                                                    </p>

                                                                                                    <p className={'button'}>Learn More</p>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            } else {
                                                                                if(myregex !== null){
                                                                                    let excursionBox = document.querySelectorAll('.excursion');
                                                                                    excursionBox.forEach(function(eBox){
                                                                                        if(eBox.hasChildNodes()){
                                                                                            eBox.parentNode.style.display = 'initial';
                                                                                        }else {
                                                                                            eBox.parentNode.style.display = 'none';

                                                                                        }
                                                                                    });
                                                                                    return(
                                                                                        <div className={'excursionBack'} key={excursion['excursionCode']}>
                                                                                            <div>
                                                                                                <div className={'excursionImage'} style={{background: `url(https://placehold.it/400x300)`}}>

                                                                                                </div>
                                                                                                <div className={'excursionContent'}>
                                                                                                    <h3 key={excursion['excursionName']}>
                                                                                                        {excursion['excursionName']}
                                                                                                    </h3>

                                                                                                    <p>
                                                                                                        {excursion['excursionShortDescription']}
                                                                                                    </p>

                                                                                                    <p className={'button'}>Learn More</p>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            }
                                                                            return true;
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>

                                        </div>
                                    );
                                // }


                            })
                        }
                    </div>
                </section>
            </div>


        );
    }
}

Excursion.defaultProps = {
    country: 'Antigua',
    eDestination: 'Antigua'
}

export default Excursion;