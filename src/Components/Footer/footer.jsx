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
            <Link to='/' >
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
            <Link to='/' >
              Home 
            </Link>
          </li>
          <li>
            <Link to='/' >
              Explore 
            </Link>
          </li>
          <li>
            <Link to='/' >
              Viagens 
            </Link>
          </li>
          <li>
            <Link to='/blog' >
              Blog 
            </Link>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Links úteis</span>
          <li>
            <Link to='/' >
              Destination 
            </Link>
          </li>
          <li>
            <Link to='/' >
              Suporte
            </Link>
          </li>
          <li>
            <Link to='/' >
              Viagens & Condições 
            </Link>
          </li>
          <li>
            <Link to='/' >
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
