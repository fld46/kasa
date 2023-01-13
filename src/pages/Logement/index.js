import { useParams } from 'react-router-dom';
import logementListe from '../../datas/logements.json';
import Error from '../../components/Error';

function Logement() {
    const { idLogement } = useParams();
    const logement = logementListe.find((logement) => logement.id === idLogement);
    if (logement === undefined) {
        return (<Error />)
    } else {
        return (
            <div >{logement.title}</div>
        )
    }

};
export default Logement;