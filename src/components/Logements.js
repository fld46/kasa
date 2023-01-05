import logementListe from '../datas/logements.json';
console.log(logementListe);
function Logements() {
    return (
        <ul>
            <li>{logementListe.title}</li>
        </ul>
    );
}

export default Logements;