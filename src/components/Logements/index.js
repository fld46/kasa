import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards";
import logementListe from '../../datas/logements.json';

function Logements() {
    return (
        <section className="home__products">
            {logementListe.map((logement) => {
                return (
                    <article key={logement.id}>
                        <Link to={`/logement/${logement.id}`}>
                            <Cards image={logement.cover} title={logement.title} />
                        </Link>
                    </article>
                );
            })}
        </section>

    );
};


export default Logements;