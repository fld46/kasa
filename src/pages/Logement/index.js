import { useParams } from 'react-router-dom';
import logementListe from '../../datas/logements.json';
import Host from '../../components/Host';
import Tags from '../../components/Tags';
import Note from '../../components/Notes';
import Collapse from '../../components/Collapse';
import Carousel from '../../components/Carousel';
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
                <Carousel slides={logement.pictures} />
                <Host host={logement.host} />
                <Tags getTag={logement.tags} />
                <Note notes={logement.rating} />
                <Collapse title="description" content={logement.description} />
                <Collapse title="equipements" content={logement.equipments} />
            </div>
        )
    }

};
export default Logement;