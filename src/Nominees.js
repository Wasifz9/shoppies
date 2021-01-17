import React from 'react';
import './Nominees.css'
import html2canvas from 'html2canvas';
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
    }
    clearHandler(){
        this.props.clearNoms();
    }
    saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
          link.href = uri;
          link.download = filename;

          //Firefox requires the link to be in the body
          document.body.appendChild(link);

          //simulate click
          link.click();

          //remove the link when done
          document.body.removeChild(link);
        } else {
          window.open(uri);
        }
      }

    screenShot(){
        html2canvas(document.getElementById('shortList')).then(function(canvas) {
            console.log(canvas);    
            var uri = canvas.toDataURL();
            var filename =  'canvas.png';
            var link = document.createElement('a');
            if (typeof link.download === 'string') {
              link.href = uri;
              link.download = filename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            } else {
              window.open(uri);
            }
        });
        
    }
    

 

   

    render(){
        var nominations = this.props.nominations;
        return(
            <div className = 'Nominee'>
                <button className = {this.state.isOpen ? 'opnbtn selected-opnbtn':'opnbtn'} onClick = {(e)=>this.openHandler()}><span> Favourites ({nominations.length})</span> </button>
                
                
                <div className = {this.state.isOpen ? 'nominationItems show ': 'nominationItems'}> 
                <div className = 'actionButtons'> 
                            <button className = 'Sharebtn' onClick = {() => this.screenShot()}> SHARE </button> 
                            <button className = 'Clearbtn' onClick = {() => this.clearHandler()}> CLEAR </button>
                </div>
                    {nominations.map(nominee => 
                    <ul id = 'faveList' className = 'faveList'> 
                        <li className  = 'faveListItem animated animatedFadeInUp fadeInUp'>
                                {nominee.Title}<br/> 
                                ({nominee.Year}) <br/>
                                <button className = 'rmvbtn' onClick = {() => this.removeHandler(nominee)}> remove </button>        
                            <div className = 'divider'></div> 
                        </li>
                    </ul>)}
  
                  
                </div>
                
                
            </div>
        );
    }
}

export default Nominees; 
