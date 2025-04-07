// src/components/Imagem.jsx
import React from 'react';
import IuryPort from '../assets/image/Iury-Port.png'; // Caminho relativo à pasta src
import '../assets/styles/Image.css';
import SocialLinks from '../components/SocialLink';


const Imagem = () => {
    return (
      <div className="imagem-container">
        <img src={IuryPort} alt="Iury" className="imagem" />
        
        <div className="texto">
            <h1 > Iury Giovanny.. </h1>

            <p >Quem sou eu?</p>
            <p > Eu sou Iury Giovanny, um homem de 31 anos que se destaca pela minha energia contagiante e personalidade acolhedora. Nascido sob o signo de Libra, valorizo a harmonia e o equilíbrio, buscando sempre manter uma atmosfera de paz ao meu redor. Minha natureza extrovertida faz com que eu seja o centro das atenções em qualquer encontro social, sempre pronto para compartilhar uma palavra gentil e um sorriso sincero.
            </p>

            <p >Como um trabalhador dedicado, me entrego de corpo e alma a tudo o que faço. Minha habilidade de comunicação é uma das minhas maiores virtudes, permitindo-me conectar facilmente com pessoas de diferentes origens e personalidades. No ambiente de trabalho, sou aquele colega que motiva a equipe, promove um ambiente de camaradagem e ainda mantém o foco nos objetivos.</p>

            <p >Na minha vida pessoal, sou o amigo que todos querem ter por perto. Minha empatia e capacidade de ouvir fazem de mim um confidente nato. Valorizo os momentos de convivência e estou sempre disposto a oferecer apoio ou uma palavra de incentivo. Minha presença traz leveza e alegria, e minha risada é verdadeiramente contagiante.</p>

            <p >Além de ser extrovertido e comunicativo, tenho uma mente curiosa e aberta, sempre buscando aprender e crescer. Vejo a vida como uma jornada cheia de descobertas e não temo enfrentar desafios. Minha determinação e otimismo me impulsionam a seguir em frente, mesmo diante das adversidades.</p>
            <SocialLinks />
        </div>  
      </div>
    );
  };

export default Imagem;
