import React, {Component} from 'react';

class Filter extends Component {

    render(){
        console.log(this.props.filter);
        if(this.props.filter === ""){
            return(
                <div className={'filterBox'}>
                    <input id={'filterInput'} placeholder={'Filter'} onChange={this.props.onFilter} value={this.props.filter}/>
                    <div id={'filterOutput'}>{this.props.filter}</div>
                </div>
            );
        }else {
            return (
                <div className={'filterBox'}>
                    <input id={'filterInput'} placeholder={'Filter'} onChange={this.props.onFilter} value={this.props.filter}/>
                    <div id={'filterOutput'}><span id={"filterLabel"}>Filtering for: </span>{this.props.filter}</div>
                </div>
            )
        }
    }
}

export default Filter;