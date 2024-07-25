import React, { useState } from "react";
import { BiSwim } from 'react-icons/bi'

import './navbar.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";


   

function Navbar() {

    // código para alternar/mostrar a barra de navegação
    const [active, setActive] = useState('navBar')
    const showNav = () =>{
        setActive("navBar activeNavbar")
    }

    // codigo para remover navBar
    const removeNav = () =>{
        setActive("navBar")
    }

    // código para adicionar cor de fundo ao cabeçalho
    const[transparent, setTransparent] = useState('header')
    const addbg = () => {
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener("scroll", addbg)
    
    return(
        <section className="navBarSection">
            {/* trocar <div className="header"> por {transparent} */}
            <div className={transparent}>

                <div className="logoDiv">
                    <Link to='/' className="logo">
                        <h1 className="flex"><BiSwim className="icon"/>
                            Dot
                        </h1>
                    </Link>
                </div>
{/* trocar <div className="navBar"> por <div className={active}> */}
                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <Link to='/' className="navLink">
                                Home
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to='/' className="navLink">
                                Produtos
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to='/' className="navLink">
                                Recursos
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to='/' className="navLink">
                                Contato
                            </Link>
                        </li>

                        <li className="navItem">
                            <Link to='/blog' className="navLink">
                                Blog
                            </Link> 
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <Link to='/' >
                                    Login
                                </Link>
                            </button>
                            <button className="btn ">
                                <Link to='/' >
                                    Inscreva-se
                                </Link>
                            </button>
                        </div>
                    </ul>
{/* adicionar onClick={removeNav} */}
                    <div  onClick={removeNav}className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
{/* adicionar onClick={showNav} */}
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </div>
        </section>
    );
}

export default Navbar;