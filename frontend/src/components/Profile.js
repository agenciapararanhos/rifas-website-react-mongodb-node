import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import { decode } from 'jsonwebtoken';


class Profile extends Component {
    constructor() {
        super();

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            createdAt: '',
            codindication: ''
        }
    }

    componentDidMount() {
        const token = localStorage.utoken;

        try {
            const decoded = jwt_decode(token);
            this.setState({
                first_name: decoded.first_name,
                last_name: decoded.last_name,
                email: decoded.email,
                createdAt: decode.createdAt,
                codindication: decoded.codindication
            })
        } catch(e) {
            console.log('error: ' + e);
            this.props.history.push('/');
        }
        
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="jumbotron mt-5" id="perfiljump1">
                    <div className="col-sm-8 mx-auto" id="bodyperfiljum">
                        <h1 className="text-center">Perfil</h1>
                  

                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nome</td>
                                <td>{this.state.first_name}</td>
                            </tr>

                            <tr>
                                <td>Sobrenome</td>
                                <td>{this.state.last_name}</td>
                            </tr>

                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Cod.</td>
                                <td>{this.state.codindication}</td>
                            </tr>
                         
                        </tbody>

                    </table>
                </div>  </div>
            </div>
        )
    }
}

export default Profile;