import React, { useEffect } from "react";

import './home.css';

// efeitos
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

function Home() {
    // codigos para o efeitos
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
        <section className="home">
            <div className="secContainer container">
                {/* adicionar (data-aos='fade-up') para o efeito */}
                <div className="homeText">

                    <h1 data-aos='fade-up' className="title">
                        Planeje sua viagem com Travel Dot
                    </h1>

                    <p data-aos='fade-up'   className="subTitle">
                        viaje para sua cidade fovarita respeitando o
                        meio ambiente!
                    </p>

                    <button data-aos='fade-up' data-aos-duration='2500' className="btn">
                        <Link>
                            Explorar
                        </Link>
                    </button>
                </div>

                <div className="homeCard grid">

                    <div className="locationDiv">
                        <label htmlFor='location'>Localização</label>
                        <input type='text' placeholder="Destinos dos Sonhos" />
                    </div>

                    <div className="distDiv">
                        <label htmlFor='Distância'>Distância</label>
                        <input type='text' placeholder="11/Metros" />
                    </div>
                    
                    <div className="priceDiv">
                        <label htmlFor='Valor'>Faixa de preço</label>
                        <input type='text' placeholder="$140-$500" />
                    </div>
                    
                    <button className="btn">
                        Pesquizar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home