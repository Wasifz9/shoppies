import "./App.css";
import React, { Component } from "react";
import MovieCard from "./MovieCard.js";
import Nominees from "./Nominees.js";
import loading from "./Loading.gif";
import { debounce } from "lodash";
var apikey = "&apikey=316355da";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      items: [],
      isReturned: false,
      isLoaded: false,
      isFinished: false,
      value: "",
      nominations: [],
      nomineeIDs: [],
    };
    this.updateValue = this.updateValue.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNominations = this.handleNominations.bind(this);
    this.removeNominations = this.removeNominations.bind(this);
    this.returnHandler = this.returnHandler.bind(this);
    this.clearNoms = this.clearNoms.bind(this);
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?s=" + this.state.value + apikey)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  returnHandler() {
    this.setState({
      isReturned: !this.state.isReturned,
    });
  }

  updateValue(value) {
    this.setState({
      value: value,
      isLoaded: false,
    });
  }

  callAPI = debounce(() => {
    const { value } = this.state;
    fetch("https://www.omdbapi.com/?s=" + value + apikey)
      .then((res) => res.json())
      .then((json) => {
        if (!Array.isArray(json.Search)) {
          fetch("https://www.omdbapi.com/?t=" + value + apikey)
            .then((res) => res.json())
            .then((json) => {
              this.setState({
                items: json,
                isLoaded: true,
              });
            });
        } else {
          this.setState({
            items: json,
            isLoaded: true,
          });
        }
      });
  }, 750);

  handleChange = (event) => {
    const value = event.target.value;
    this.updateValue(value);
    this.callAPI();
  };

  handleNominations(nominee) {
    this.state.nominations.push(nominee);
    this.state.nomineeIDs.push(nominee.imdbID);
    this.setState({
      nominations: this.state.nominations,
      nomineeIDs: this.state.nomineeIDs,
    });
  }

  removeNominations(nominee) {
    var index = this.state.nominations.indexOf(nominee);
    this.state.nominations.splice(index, 1);
    index = this.state.nomineeIDs.indexOf(nominee.imdbID);
    this.state.nomineeIDs.splice(index, 1);
    this.setState({
      nominations: this.state.nominations,
      nomineeIDs: this.state.nomineeIDs,
    });
  }

  clearNoms() {
    this.setState({
      nominations: [],
      nomineeIDs: [],
    });
  }

  renderItems() {
    var { items } = this.state;
    if (this.state.value == "") {
      return (
        <div className="home1">
          <p
            className="resultstext animated animatedFadeInUp fadeInUp"
            style={{ textAlign: "center", fontSize: 28 }}
          >
            Start typing to find your all-time movies!
          </p>
        </div>
      );
    } else if (!this.state.isLoaded) {
      return (
        <div className="home1">
          <div class="loader"></div>
        </div>
      );
    } else if (items.Response == "False") {
      return (
        <div className="home1">
          <p
            className="resultstext animated animatedFadeInUp fadeInUp"
            style={{ textAlign: "center" }}
          >
            No results... Try another one?
          </p>
        </div>
      );
    } else if (items.hasOwnProperty("Plot") && items.Type == "movie") {
      return (
        <div id="to screenshot">
          <MovieCard
            returnHandler={this.returnHandler}
            nomineeIDs={this.state.nomineeIDs}
            handleNominations={this.handleNominations}
            info={this.state.items}
          />
        </div>
      );
    } else if (Array.isArray(items.Search)) {
      items.Search = items.Search.filter(function (item) {
        return item.Type === "movie";
      });

      return (
        <div id="to screenshot">
          <ul id="cardList" className="cardList">
            {this.state.items.Search.map((item) => (
              <MovieCard
                returnHandler={this.returnHandler}
                nomineeIDs={this.state.nomineeIDs}
                handleNominations={this.handleNominations}
                info={item}
              />
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="home1">
          <p
            className="resultstext animated animatedFadeInUp fadeInUp"
            style={{ textAlign: "center" }}
          >
            No results... Try another one?
          </p>
        </div>
      );
    }
  }

  renderDirections() {
    if (this.state.nomineeIDs.length > 4) {
      return (
        <p className="searchHeadertext" style={{ color: "white" }}>
          {" "}
          Remove to continue. <br />{" "}
        </p>
      );
    } else {
      return <p className="searchHeadertext"> Search! </p>;
    }
  }

  render() {
    var { isLoaded, isSearched, isFinished, items } = this.state;
    return (
      <div id="App" className="App">
        <div
          className={
            this.state.nomineeIDs.length > 4
              ? "invalid searchHeader"
              : "searchHeader"
          }
        >
          {this.renderDirections()}
          <input
            type="text"
            placeholder="search"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div
          className={
            this.state.isReturned
              ? "content extraspace"
              : "content"
          }
        >
          <div id="resultsPage" className="results">
            <p
              className={
                this.state.isReturned
                  ? "animated animatedFadeInUp fadeInUp"
                  : "container-fluid1"
              }
            >
              <span className="resultstext">Results:</span>
            </p>
            {this.renderItems()}
          </div>
          <div id="shortList" className="shortlist">
            <Nominees
              clearNoms={this.clearNoms}
              removeNominations={this.removeNominations}
              nominations={this.state.nominations}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
