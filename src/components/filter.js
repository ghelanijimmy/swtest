import React, {Component} from 'react';

class Filter extends Component {

    

    render(){
        // console.log(this.props.filter);
        const checkChecked=(id, e)=>{
            console.log(e.target.checked)
            console.log(id)
        }
        const inputBox=(filter)=>{
            function rafAsync(){
                return new Promise(resolve=>{
                    requestAnimationFrame(resolve);
                });
            }

            async function checkElement(){
                while(document.getElementById('filterInput')===null){
                    await rafAsync()
                }
                return true;
            }

            checkElement().then((element)=>{
                let inputBox = document.getElementById('filterInput');
                
                if(inputBox.value == ""){
                    // return(
                    //     'Type to Filter Excursions'
                    // )
                    document.getElementById('filterOutput').innerHTML = 'Type to Filter Excursions';
                } else {
                    document.getElementById('filterOutput').innerHTML = `<span id="filterLabel">Filtering for: </span> ${filter}`;
                }
            })
                
            
            // if(document.getElementById('filterInput').value == null){
            //     return("Type to Filter Excursion")
            // }else {
            //     return(
            //         <span id={'filterLabel'}>Filtering for: </span>
            //     )
            // }
        }
        // if(this.props.filter === ""){
            return(
                <div className={'filterBox'}>
                    <input id={'filterInput'} placeholder={'Filter'} onChange={this.props.onFilter} value={this.props.filter}/>
                    <div id={'filterOutput'}>{inputBox(this.props.filter)}</div>
                    <div className={'filterCheckBoxes'}>
                    {
                        Object.keys(this.props.titles).map((obj, i)=> {
                            var title = this.props.titles[obj]['categoryName'];
                            var titleNoSpace = this.props.titles[obj]['categoryName'].replace(/(?:[^a-zA-Z0-9])/g, "");
                            return(
                                <span key={titleNoSpace}>
                                    <input type="checkbox" id={titleNoSpace} name={title} value={title} onChange={(e)=>checkChecked(titleNoSpace, e)} />{title}<br />
                                </span>
                            )
                        })
                    }
                    </div>
                </div>
            );
        // }else {
        //     return (
        //         <div className={'filterBox'}>
        //             <input id={'filterInput'} placeholder={'Filter'} onChange={this.props.onFilter} value={this.props.filter}/>
        //             <div id={'filterOutput'}><span id={'filterLabel'}>Filtering For: </span>{this.props.filter}</div>
        //             <div className={'filterCheckBoxes'}>
        //             {
        //                 Object.keys(this.props.titles).map((obj, i)=> {
        //                     var title = this.props.titles[obj]['categoryName'];
        //                     var titleNoSpace = this.props.titles[obj]['categoryName'].replace(/(?:[^a-zA-Z0-9])/g, "");
        //                     return(
        //                         <span>
        //                             <input type="checkbox" id={titleNoSpace} name={title} value={title} onChange={(e)=>checkChecked(titleNoSpace, e)} />{title}<br />                                    
        //                         </span>
        //                     )
        //                 })
        //             }
        //             </div>
        //         </div>
        //     )
        // }
    }
}

export default Filter;