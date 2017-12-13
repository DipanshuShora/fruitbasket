import React from 'react';
let fruit_search=null;
export class FruitSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {fruitsearch:''};
        this.fruitsearching = this.fruitsearching.bind(this);
    }
    fruitsearching(e){
        this.setState({fruitsearch:e.target.value});
    }
    render(){
        fruit_search=this.state.fruitsearch.split(" - ");
        return(
            <div>
                <input type="text" onChange={this.fruitsearching} value={this.state.fruitsearch} />
            </div>
        );
    }
}