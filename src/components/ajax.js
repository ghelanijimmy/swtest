import React, {Component} from 'react';
import ExcursionList from './excursionSelect';
import {withRouter} from 'react-router-dom';

const FetchInfo= (props) => {
    return(
        <section className={'hero'}>
            <ExcursionList data={props.data} location={props.location}/>
        </section>
    )
}

export default withRouter(FetchInfo);