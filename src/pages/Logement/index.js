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
            <main className='singleProduct'>
                <Carousel slides={logement.pictures} />
                <div className="singleproduct__content">
                    <div className="singleproduct__informations">
                        <h1 className="singleproduct__title">{logement.title}</h1>
                        <p className="singleproduct__location">{logement.location}</p>
                        <div className="singleproduct__tags">
                            {logement.tags.map((tag, index) => (
                                <Tags key={index} getTag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="singleproduct__rating-and-host">
                        <Note notes={logement.rating} />
                        <Host host={logement.host} />
                    </div>
                </div>
                <div className="singleproduct__dropdowns">
                    <Collapse title="description" content={logement.description} />
                    <Collapse title="équipement" content={logement.equipments} />
                </div>
            </main>
        )
    }

};
export default Logement;