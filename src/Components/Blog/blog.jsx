import React from "react";

import './blog.css';
import { BsArrowRightShort } from "react-icons/bs";

// importação de imagens
import img from '../../Assets/image2.png'
import img2 from '../../Assets/image3.png'
import img3 from '../../Assets/image9.png'
import img4 from '../../Assets/image10.png'
import { Link } from "react-router-dom";


// então pessoal, aqui também vamos usar o método Map para exibir postagens

const posts = [
    {
        id: 1,
        postImage: img,
        title: 'Bela Marrocos, vamos viajar',
        desc: 'O Reino de Marrocos é um país muçulmano no oeste do norte da África, com costas no Oceano Atlântico e no Mar Mediterrâneo',
    },
    {
        id: 2,
        postImage: img2,
        title: 'momentos românticos sob a Torre Eiffel',
        desc: 'com vastas áreas de deserto a leste e o rico vale do rio Nilo no seu coração, é o local de uma das primeiras e maiores civilizações do mundo',
    },
    {
        id: 3,
        postImage: img3,
        title: 'vamos ter uma aventura fora da Tunísia',
        desc: 'A Tunísia é um pequeno país árabe no Norte de África que representa tanto a aspiração de liberdade como a luta contra o terrorismo que assola a região',
    },
    {
        id: 4,
        postImage: img4,
        title: 'Melhor País da África Oriental',
        desc: 'Quando o Quénia reivindicou a sua independência do Reino Unido em 1963, os líderes da recém-formada república promoveram um sentimento de unidade nacional com o lema',
    },
]

function Blog() {
    return(
        <div className="blog container section">
            <div className="secContainer">

                <div className="secIntro">
                    <h2 className="secTitle">
                        Nosso melhor blog!
                    </h2>
                    <p>
                        Uma visão da experiência incrível no mundo
                    </p>
                </div>

                <div className="mainContainer grid">
                    {
                        posts.map(({id, postImage, title, desc}) =>{
                            return(
                                <div  key={id} className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title}></img>
                                    </div>

                                    <div className="postDetails">
                                        <h3>
                                            {title} 
                                        </h3> 
                                        <p>
                                            {desc}
                                        </p>
                                    </div>

                                    <Link to='/' className="flex">
                                        Mais informações
                                        <BsArrowRightShort className="icon" />
                                    </Link>
                                    
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Blog;