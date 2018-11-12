import React, {Component} from 'react';
import {HashRouter, NavLink, withRouter, Link, Redirect} from 'react-router-dom';



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
        console.log(this.props.destination);
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
            fetch(`https://hotelinfoservice.sunwingtravelgroup.com/1/en/excursionsCountryDestination/${encodeURIComponent(this.props.destination.country)}/${encodeURIComponent(this.props.destination.destination)}`)
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

                            <Link to={"/"}>Start Over</Link>

                    </div>
                </section>
                <section className={'content'}>
                    <div className={'destinationContent'}>
                        <h2>About {this.state.destination}</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aliquid amet, cum cupiditate distinctio dolor dolores, error, et exercitationem expedita illo magni minus provident quas qui saepe velit! Autem incidunt maiores minus obcaecati odit quasi suscipit totam vitae?
                        </p>
                    </div>
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
                                                                                    <a className={'button'}>Learn More</a>
                                                                                </div>
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

export default withRouter(Excursion);