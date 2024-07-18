import React from "react";

import './sobre.css';

// imagens
import img3 from '../../Assets/customer.jpg'
import img2 from '../../Assets/mountain.jpg'
import img from '../../Assets/climbing.png'

// videos
import video from '../../Assets/video.mp4'

function Sobre() {
    return(
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">
                    Caminhadas
                </h2>

                <div className="mainContent container grid">
                    <div className="singleItem">
                        <img src={img2} alt=''></img>

                        <h3>100+ Montanhas </h3>

                        <p>
                            Pesquisas mostram que a oportunidade de romper 
                            com os ritmos normais da vida diária reduz o estresse 
                            e melhora a saúde e o bem-estar
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img3} alt=''></img>

                        <h3>1000+ Caminhadas </h3>

                        <p>
                            Pesquisas mostram que a oportunidade de romper 
                            com os ritmos normais da vida diária reduz o estresse 
                            e melhora a saúde e o bem-estar
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src={img} alt=''></img>

                        <h3>2000+ Clientes </h3>

                        <p>
                            Pesquisas mostram que a oportunidade de romper 
                            com os ritmos normais da vida diária reduz o estresse 
                            e melhora a saúde e o bem-estar
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">
                        
                        <div className="cardText">
                            <h2>Maravilhosa experiência!</h2>
                            <p>
                                A subclassificação da aventura é baseada em 
                                uma média igualmente ponderada de cinco países.
                            </p>
                        </div>

                        <div className="cardVideo">
                            <video src={video} autoPlay loop muted type='video/mp4'></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;