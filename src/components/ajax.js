import React from 'react';
import ExcursionList from './excursionSelect';



const FetchInfo = (props) => {
    if(props.hidden === true){
        return(
            ""
        )
    }else {
        return(
            <section className={'hero'}>
                <ExcursionList data={props.data}  hide={props.hide}/>
            </section>
        )
    }
    // return(
    //     <section className={'hero'}>
    //         <ExcursionList data={props.data}  hide={props.hide}/>
    //     </section>
    // )

}

export default FetchInfo;