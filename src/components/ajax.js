import React, {Component} from 'react';
import ExcursionList from './excursionSelect';


class FetchInfo extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className={'hero'}>
                <ExcursionList data={this.props.data}/>
            </section>
        );
    }

}

export default FetchInfo;