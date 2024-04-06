import { Link } from "react-router-dom";
import './style.css'
export default function HomePage() {
    return (
        <div className="container-home">
            <h1 className="title">Desafio Github API</h1>
            <h5 className="sub-title">DevSuperior - Escola de programação</h5>
            <Link className="container-link" to="/pagegit">
                Entrar
            </Link>
        </div>
    );
}