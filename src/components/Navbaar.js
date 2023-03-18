import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navbaar extends Component {
  

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg  d-flex fixed-top bg-body-tertiary navbaar">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#676fae" }}
          >
            <a className="navbar-brand" href="/">
              Sky-News
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link active" aria-current="page" to="/business">
                Business
                </Link>
                <Link className="nav-link active" aria-current="page" to="/entertainment">
                Entertainment
                </Link>
                <Link className="nav-link active" aria-current="page" to="/general">
                General
                </Link>
                <Link className="nav-link active" aria-current="page" to="/health">
                Health
                </Link>
                <Link className="nav-link active" aria-current="page" to="/science">
                Science
                </Link>
                <Link className="nav-link active" aria-current="page" to="/sports">
                Sports
                </Link>
                <Link className="nav-link active" aria-current="page" to="/technology">
                Technology
                </Link>
              </div>
              <div className="navbar-collapse collapse w-150 order-3 dual-collapse2 searchbar">
                <nav className="navbar bg-body-tertiary ml-auto navbar-right">
                  <div className="container-fluid">
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-outline-success" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </nav>
              </div>
              
            </div>
          </div>
          
        </nav>
      </>
    );
  }
}
