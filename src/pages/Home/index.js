import React from "react";
import Mainbanner from "../../components/Mainbanner";
import image from "../../assets/banner.png";
import Liste from "../../components/Logements";



const slogan = "Chez vous, partout et ailleurs";
function Home() {
  return <main className="main">
    <Mainbanner image={image} title={slogan} />
    <Liste />
  </main>

}

export default Home