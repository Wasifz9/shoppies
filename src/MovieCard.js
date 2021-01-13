import React, {Componont} from 'react';
import './MovieCard.css';
var apikey = '&apikey=316355da'

class MovieCard extends React.Component{
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            title: '',
            director: '',
            plot:'',
            year:'',
            genre: '',
            moreInfo: false,
            selected: false,
            
        };
       this.handleInfo = this.handleInfo.bind(this);
       this.handleSelects = this.handleSelects.bind(this);
      }

    handleInfo(info){
        fetch('https://www.omdbapi.com/?t=' + info.Title + apikey)
        .then(res => res.json())
        .then(json => {
                this.setState({
                    title: json.Title,
                    director:json.Director,
                    plot: json.Plot,
                    year: json.Year,
                    genre: json.Genre,
                    moreInfo: true
            })
        });
    }

    handleSelects(info){
        this.props.handleNominations(info);
    }

    renderInfo(info){
        if (this.state.moreInfo == false){
            return (
                <p>
                    <span class = 'more' onClick = {(e) => this.handleInfo(info)}> More</span> 
                </p>
            );
        }else{
            return(
                <div> 
                <p class="card-info" >Title: {this.state.title} ({this.state.year}) </p>
                <p class="card-info"> Director: {this.state.director} </p>
                <p class="card-info"> Plot: {this.state.plot} </p>
                <p class="card-info"> Genre: {this.state.genre} </p>
                </div>
            );
        }
    }

    
    render(){
        const info = this.props.info; 
        const nomineeIDs = this.props.nomineeIDs;
       /* fetch('http://www.omdbapi.com/?t=' + info.Title + apikey)
        .then(res => res.json())
        .then(json => {
            info = json; 
        });*/

        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mt-3">
                        <div className = {nomineeIDs.includes(info.imdbID) ? 'selected-card':'card'} >
                            <div class="card-horizontal">
                                <div class="img-square-wrapper">
                                    <img class="" src={info.Poster} alt="Card image cap"></img>
                                </div>
                                <div class="card-body">
                                    <p class="card-title"> {info.Title} ({info.Year}) </p>
                                    {/* <p class="card-text">{info.Plot}</p>*/}
                                </div>
                                <div class="middle">
                                        {this.renderInfo(info)}
                                </div>
                            </div>
                            <div  className = {nomineeIDs.length > 4 ? 'card-footer inactive':'card-footer'}  onClick = {(e) => this.handleSelects(info)}>
                                <p> ADD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
        
    } 
}

export default MovieCard; 