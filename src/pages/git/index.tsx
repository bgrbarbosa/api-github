import { Link } from "react-router-dom";
import './style.css';
import { UserDTO } from "../../model/user";


export default function PageGit(){
    
    const user: UserDTO = {
        url: "https://api.github.com/users/acenelio",
        followers:12,
        location:"Brazil",
        name:"Nelio Alves",
        avatar_url:"https://avatars.githubusercontent.com/u/13897257?v=4"
    };
    
    return (
        <div className="container-page-git">            
            <div className="container-search">
                <h1 className="title-search">Encontre um perfil GitHub</h1>
                <input className="input-search" type="text" placeholder="Digite o usuário do github"/>
                <Link to='#' className="container-link">Encontrar</Link>
            </div>
            
            <div className="container-result">
                <div className="container-picture">
                    <img src={user.avatar_url} />
                </div>

                <div className="container-data">
                    <h1 className="title-card-data">Informações</h1>
                    <h5>Perfil: <span>{user.url}</span></h5>
                    <h5>Seguidores: <span>{user.followers}</span></h5>
                    <h5>localidade: <span>{user.location}</span></h5>
                    <h5>Nome: <span>{user.name}</span></h5>
                </div>
            </div>
        </div>
    );
}