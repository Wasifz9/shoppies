import React from 'react';
import './Nominees.css'
class Nominees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.openHandler = this.openHandler.bind(this);
    };
    
    openHandler(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    removeHandler(nominee){
        this.props.removeNominations(nominee);
        this.render()
    }

    render(){
        var nominations = this.props.nominations;
        return(
            <div className = 'Nominee'>
                <button className = {this.state.isOpen ? 'selected-opnbtn':'opnbtn'} onClick = {(e)=>this.openHandler()}><span> Favourites ({nominations.length})</span> </button>
                
                
                <div className = {this.state.isOpen ? 'nominationItems show': 'nominationItems'}> 
                <p>
                    {nominations.map(nominee => 
                    <ul> 
                        <li className>
                                {nominee.Title}<br/> 
                                ({nominee.Year}) <br/>
                                <button className = 'rmvbtn' onClick = {() => this.removeHandler(nominee)}> remove </button>        
                            <div className = 'divider'></div> 
                        </li>
                    </ul>)}
                    </p>
                </div>
                
                
            </div>
        );
    }
}

export default Nominees; 
