import  React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light  bg-primary">
                <a className="navbar-brand" href="#">Présentation React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">

                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dynamique" href="#">Crud dynamique</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/" href="#">Disabled</Link>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}

export default Header;