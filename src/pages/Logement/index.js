import { useParams } from 'react-router-dom';
import logementListe from '../../datas/logements.json';

function Logement() {
    const { idLogement } = useParams();
    const logement = logementListe.find((logement) => logement.id === idLogement);

    return (

        <div >{logement.title}</div>

    )
};
export default Logement;