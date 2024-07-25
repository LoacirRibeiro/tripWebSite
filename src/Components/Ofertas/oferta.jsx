import React from "react";

import './oferta.css';

// importação de imagens
import img6 from '../../Assets/image6.jpeg'
import img7 from '../../Assets/image7.jpeg'
import img8 from '../../Assets/image8.jpeg'

// importacao de icones
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md'
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

// Então, já que terminamos de estilizar cada conteúdo, 
// vamos usar também os mesmos mehos de array de alta ordem 
// (Mapa) para listar nossas ofertas

const Offers = [
    {
        id: 1,
        imgSrc: img8,
        destTitle: "Machu Picchu",
        location: "Peru",
        price: "R$ 7.452,00"
    },
    {
        id: 2,
        imgSrc: img6,
        destTitle: "Guanajuato",
        location: "Mexico",
        price: "R$ 5.379,00"
    },
    {
        id: 3,
        imgSrc: img7,
        destTitle: "Angkor wat",
        location: "Cambodia",
        price: "R$ 4.400,00"
    },
]

function Oferta() {
    return(
        <section className="offer container section">
            <div className="secContainer">

                <div className="secIntro">
                    <h2 className="secTitle">
                        Ofertas Especiais
                    </h2>
                    <p>
                        Cidades históricas a espetáculos naturais, 
                        venha conhecer o melhor do mundo!
                    </p>
                </div>

                <div className="mainContent grid">

                    {
                        Offers.map(({id, imgSrc, destTitle, location, price}) =>{
                            return(
                                <div  key={id} className="singleOffer">
                                    <div className="destImage">
                                    <img src={imgSrc} alt={destTitle} />

                                    <span className="discount">
                                        30% Off
                                    </span>
                                </div>

                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>
                                            {price}
                                        </h4>
                                        <span className="status">
                                            Para alugar
                                        </span>
                                    </div>

                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className='icon'/>
                                            <small> 2 Camas </small>
                                        </div>

                                        <div className="singleAmenity flex">
                                            <MdBathtub className='icon'/>
                                            <small> 1 Banheiro </small>
                                        </div>

                                        <div className="singleAmenity flex">
                                            <FaWifi className='icon'/>
                                            <small> Wi-Fi </small>
                                        </div>

                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className='icon'/>
                                            <small> Transporte </small>
                                        </div>
                                    </div>

                                    <div className="location flex">
                                        <MdLocationOn className='icon' />
                                        <small>
                                            450 vine #310,
                                            { location}
                                        </small>
                                    </div>

                                    <button className="btn flex">
                                        ver detalhes
                                        <BsArrowRightShort className="icon" />
                                    </button>
                            
                                </div>
                            </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default Oferta;