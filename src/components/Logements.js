import logementListe from '../datas/logements.json';
console.log(logementListe.find(({ id }) => id === "b9123946"));
export function Logements() {
    return (
        <ul>
            {logementListe.map((logement) => (<li key={logement.id}>{logement.title}</li>))}
        </ul>
    );
}


export default Logements;