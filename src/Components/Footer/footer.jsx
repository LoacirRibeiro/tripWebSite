import React from "react";

import "./footer.css";

import { BiSwim } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <Link>
              <h1 className="flex">
                <BiSwim className="icon" />
                Dot
              </h1>
            </Link>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Informações</span>
          <li>
            <Link>
              Home 
            </Link>
          </li>
          <li>
            <Link>
              Explore 
            </Link>
          </li>
          <li>
            <Link>
              Viagens 
            </Link>
          </li>
          <li>
            <Link>
              Blog 
            </Link>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Links úteis</span>
          <li>
            <Link>
              Destination 
            </Link>
          </li>
          <li>
            <Link>
              Suporte
            </Link>
          </li>
          <li>
            <Link>
              Viagens & Condições 
            </Link>
          </li>
          <li>
            <Link>
              Privacidade 
            </Link>
          </li>
        </div>
      
        <div className="footerLinks">
            <span className="linkTitle">
                Contatos
            </span>
            <span className="phone"> +55 (63) 9 8419-9781</span>
            <span className="email"> loacir.bueno@tjto.jus.br</span>
        </div>    
      </div>
    </div>
  );
}

export default Footer;
