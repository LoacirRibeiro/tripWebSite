import React from "react";

import "./popular.css";
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";

// importação de imagens
import img2 from "../../Assets/image2.jpeg";
import img5 from "../../Assets/image5.jpeg";
import img7 from "../../Assets/image7.jpeg";
import img9 from "../../Assets/image9.jpeg";

// então, agora vamos usar um método de array de alta ordem para exibir todos os destinos usando
//  Map para isso precisamos listar todos os destinos em um array "Data" e depois chamaremos
//  cada destino por índice/id

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "méxico",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambódia",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: img9,
    destTitle: "Taj Mahal",
    location: "Índia",
    grade: "CULTURAL RELAX",
  },
];

function Popular() {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Destinos Populares</h2>
            <p>
              Locais históricos e espetáculos naturais, venha conhecer o que há
              de melhor no mundo!
            </p>
          </div>

          <div className="iconsDiv">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({id, imgSrc, destTitle, location, grade}) => {
            return (
              <div className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="" />

                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>
                      {location}
                    </p>

                    <BsArrowRightShort className="icon" />
                  </div>
                </div>

                <div className="destFooter">
                  <div className="number">0{id}</div>

                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Popular;
