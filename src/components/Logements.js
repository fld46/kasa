import logementListe from '../datas/logements.json';
console.log(logementListe);
function Logements() {
    return (
        <ul>
            {logementListe.map((logement) => (<li key={logement.id}>{logement.title}</li>))}

        </ul>
    );
}

export default Logements;