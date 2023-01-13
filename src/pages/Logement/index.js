import { useParams } from 'react-router-dom';
import logementListe from '../../datas/logements.json';
import Host from '../../components/Host';
import Tags from '../../components/Tags';
import Note from '../../components/Notes';
import Error from '../../components/Error';

function Logement() {
    const { idLogement } = useParams();
    const logement = logementListe.find((logement) => logement.id === idLogement);
    if (logement === undefined) {
        return (<Error />)
    } else {
        return (
            <div >
                {logement.title}
                <Host host={logement.host} />
                <Tags getTag={logement.tags} />
                <Note notes={logement.rating} />

            </div>
        )
    }

};
export default Logement;