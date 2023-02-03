
import Banner from "../../components/Mainbanner";
import aboutData from "../../datas/logements.json";
import Collapse from "../../components/Collapse";
import imageBanner from "../../assets/banner.png";

const About = () => {
    // Switch to display content in the dropdown by title
    const content = (title) => {
        switch (title) {
            case "fiability":
                return aboutData.fiability;
            case "respect":
                return aboutData.respect;
            case "service":
                return aboutData.service;
            case "sécurity":
                return aboutData.security;
            default:
                console.log("default");
                break;
        }
    };


    return (<section className="about">
        <Banner image={imageBanner} />
        <div className="about__dropdowns">
            <Collapse title="fiabilité" content={content("fiability")} />
            <Collapse title="respect" content={content("respect")} />
            <Collapse title="service" content={content("service")} />
            <Collapse title="sécurité" content={content("sécurity")} />
        </div>
    </section>)
}

export default About