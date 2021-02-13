import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';

class Navbar extends Component {

    logout(e) {
        e.preventDefault();
        localStorage.removeItem('utoken');
        this.props.history.push('/');
    }

  render() {

    const loginRegLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="btn btn-dark">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    CRIAR RIFA
                </Link>
            </li>
        </ul>
    )

    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="btn btn-dark">
                    Perfil
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={this.logout.bind(this)} className="nav-link">
                    Sair
                </a>
            </li>
        </ul>
    )

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
            <a className="navbar-brand" href="#"><img className="logoparanhos" src="https://agenciaparanhos.com.br/assets/img/brand-light.png" alt="Paranhos"></img></a>
            <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1"
            aria-controls="navbar1"
            aria-expanded="false"
            aria-label="Navegação">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                </ul>
                
                {localStorage.utoken ? userLink : loginRegLink}
            </div>
            {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </nav>
    )
  }
}

export default withRouter(Navbar);