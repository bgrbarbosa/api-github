import { UserDTO } from "../../model/user";
import './style.css';

type Props = {
    user: UserDTO;
}

export default function Result({user}: Props) {

    return (
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
    );
}