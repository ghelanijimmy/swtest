import React, {Component} from 'react';
import ExcursionList from './excursionSelect';


class FetchInfo extends Component {


    render(){
        return(
            <section className={'hero'}>
                <ExcursionList data={this.props.data}/>
            </section>
        );
    }

}

export default FetchInfo;