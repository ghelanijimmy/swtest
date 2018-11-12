import React, {Component} from 'react';
import {HashRouter, NavLink} from 'react-router-dom';



class Excursion extends Component {
    // static defaultProps = {
    //     country: 'Antigua',
    //     destination: 'Antigua'
    // }
    constructor(props){
        super(props);
        this.state = {
            excursion: ""
        }
    }


    componentDidMount(){
        if(this.props.destination === undefined){
            fetch(`https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${this.props.country}/${this.props.eDestination}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        excursion: data,
                        country: this.props.country,
                        destination: this.props.eDestination
                    });
                });
        }else {
            fetch(`https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${this.props.destination.country}/${this.props.destination.destination}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        excursion: data,
                        country: this.props.destination.country,
                        destination: this.props.destination.destination
                    });
                });
        }

    }

    render(){

        return(
            <div>

                <section className={'hero'}>
                    <div className={'excursionHeroBox'}>
                        <h1>{this.state.country}</h1>
                        <p>{this.state.destination}</p>
                        <HashRouter>
                            <NavLink to={"/"}>Start Over</NavLink>
                        </HashRouter>
                    </div>
                </section>
                <section className={'content'}>
                    {/*<div className={'categoryTitle'}>*/}
                        {/*<h1>Excursions</h1>*/}
                    {/*</div>*/}
                    <div id={'categories'}>

                        {
                            Object.keys(this.state.excursion).map((obj, i)=> {


                                var title = this.state.excursion[obj]['categoryName'];

                                return (
                                    <div key={title} className={'category'}>
                                        <h2 key={title}>{title}</h2>
                                        <div key={title + i} className={'subCategories'}>
                                            {
                                                Object.values(this.state.excursion[obj]['subCategories']).map((sub) => {
                                                    var subCatTitle = "";
                                                    subCatTitle = sub['subCategoryName'];
                                                    return (
                                                        <div key={subCatTitle + i} className={'subCategory'}>
                                                            <h4 key={subCatTitle}>{subCatTitle}</h4>
                                                            <div key={sub['excursions']} className={'excursion'}>
                                                            {
                                                                Object.values(sub['excursions']).map((excursion)=> {
                                                                    return(
                                                                        <div className={'excursionBack'} key={excursion['excursionCode']} style={{background: `url(${excursion['excursionImages']['Img4X3']})`}}>
                                                                            <div>
                                                                                <h3 key={excursion['excursionName']}>
                                                                                    {excursion['excursionName']}
                                                                                </h3>

                                                                                <p>
                                                                                    {excursion['excursionShortDescription']}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    )
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

                            })
                        }
                    </div>
                </section>
                {/*<pre>{JSON.stringify(this.state.excursion, null, 2)}</pre>*/}
            </div>


        );
    }
}

Excursion.defaultProps = {
    country: 'Antigua',
    eDestination: 'Antigua'
}

export default Excursion;