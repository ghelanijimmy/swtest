import React, {Component} from 'react';

class Filter extends Component {

    render(){
        return(
            <div>
                <input id={'filterInput'} placeholder={'Filter'} onChange={this.props.onFilter} value={this.props.filter}/>
                <div id={'filterOutput'}>{this.props.filter}</div>
            </div>
        );
    }
}

export default Filter;