import './style.css'

type Props = {
    title: string;
}

export default function Button ({title}: Props){
    return(
        <div className="container-button">
            <h3 className='title-button'>{title}</h3>
        </div>
    );
}