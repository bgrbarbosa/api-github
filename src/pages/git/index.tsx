import './style.css';
import Result from "../../Components/result";
import { useEffect, useState } from "react";
import { UserDTO } from "../../model/user";
import * as userService from '../../services/user-service';
import UserNotFound from '../../Components/userNotFound';

type FormData = {
    name: string;
}

export default function PageGit() {

    const [formData, setFormData] = useState<FormData>({
        name: ''
    });

    const [user, setUser] = useState<UserDTO>();

    const [aux, setAux] = useState('');

    function handleSearchUser(event: any) {
        setFormData({ ...FormData, name: event.target.value })
    }

    useEffect(() => {
        searchUser;
    }, [aux]);

    function searchUser() {
        setUser(undefined)
        setAux(formData.name);
        userService.findByName(formData.name)
            .then(response => {
                setUser(response?.data);
            })
            .catch(() => {

            });
    }

    return (
        <div className="container-page-git">

            <div className="container-search">
                <h1 className="title-search">Encontre um perfil GitHub</h1>
                <input className="input-search"
                    name="name" type="text" value={formData.name}
                    placeholder="Digite o usuário do github"
                    onChange={handleSearchUser} />
                <button className="container-link" onClick={searchUser}>Encontrar</button>
            </div>
            {
                user ? <Result user={user} /> : <UserNotFound/>
            }
            
        </div>
    );
}