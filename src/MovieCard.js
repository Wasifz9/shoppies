import React, {Componont} from 'react';
import './MovieCard.css';
import placeHolder from './100x150.png';
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
            show: false
        };
       this.handleInfo = this.handleInfo.bind(this);
       this.handleSelects = this.handleSelects.bind(this);
       this.revealer = this.revealer.bind(this);
       this.hider = this.hider.bind(this);
    
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
                    moreInfo: true,
            })


        });
    }
    revealer(){
        this.setState({
            show: true
        })
        
    }

    hider(){
        this.setState({
            show: false
        })
        this.props.returnHandler();
    }

    componentDidMount(){
        this.props.returnHandler();
        setTimeout(this.revealer, 10)
    }

    componentWillUnmount(){
        this.props.returnHandler();
    }
    
    handleSelects(info){
        this.props.handleNominations(info);
    }

    renderInfo(info){
        if (this.state.moreInfo == false){
            return (
                <span class = 'more' onClick = {(e) => this.handleInfo(info)}> More</span> 
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

        return (
            <div  >
                <div className = {this.state.show ? "container-fluid animated animatedFadeInUp fadeInUp":"container-fluid"}>
                    <div class="col-12 mt-3">
                        <div className = {nomineeIDs.includes(info.imdbID) ? 'selected-card card':'card'} >
                            <div class="card-horizontal" onClick = {(e) => this.handleInfo(info)}>
                                <div class="img-square-wrapper">
                                     <img class="poster" src={info.Poster} onerror="this.src='100x150.png'; console.log('notworking');"/>
                                </div>
                                <div class="card-body">
                                    <p class="card-title"> {info.Title} <br/> </p>
                                    <p className = 'highlighted1'> {info.Year} </p> 
                                </div>
                                <div class="middle">
                                        <p className = {this.state.moreInfo == false ? 'extraInfoTitle shown':'extraInfoTitle'} >
                                            <span class = 'more'> More</span> 
                                        </p>
                                        <div className = {this.state.moreInfo ? 'extraInfo shown':'extraInfo'}> 
                                            <p class="card-info" > <span className = 'highlighted'>Title:</span> {this.state.title} 
                                                                    <span className = 'highlighted'>({this.state.year})</span> <br/>  
                                                                    <span className = 'highlighted'>Director:</span> {this.state.director}   <br/> 
                                                                    <span className = 'highlighted'>Plot:</span> {this.state.plot} <br/> 
                                                                    <span className = 'highlighted'>Genre:</span> {this.state.genre} 
                                            </p>
                                        </div>

                                </div>
                            </div>
                            <div  className = {nomineeIDs.length > 4 ? 'card-footer inactive':'card-footer'}  onClick = {(e) => this.handleSelects(info)}>
                                +
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
        
    } 
}

export default MovieCard; 