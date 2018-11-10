import React, {Component} from 'react';

class Excursion extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(

            <section>
                {this.props.test}
            </section>

        );
    }
}

export default Excursion;