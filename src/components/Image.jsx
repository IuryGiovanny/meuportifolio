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
            <p > Iury Giovanny é um homem de 31 anos que se destaca por sua energia contagiante e personalidade acolhedora. Nascido sob o signo de Libra, ele valoriza a harmonia e o equilíbrio, buscando sempre manter uma atmosfera de paz ao seu redor. Sua natureza extrovertida faz com que seja o centro das atenções em qualquer encontro social, sempre pronto para compartilhar uma palavra gentil e um sorriso sincero.
            </p>

            <p >Como um trabalhador dedicado, Iury se entrega de corpo e alma a tudo que faz. Sua habilidade de comunicação é uma de suas maiores virtudes, permitindo-lhe conectar-se facilmente com pessoas de diferentes origens e personalidades. No ambiente de trabalho, ele é aquele colega que motiva a equipe, promove um ambiente de camaradagem e ainda mantém o foco nos objetivos.
            </p>

            <p >Na vida pessoal, Iury é o amigo que todos querem ter por perto. Sua empatia e capacidade de ouvir fazem dele um confidente nato. Ele valoriza os momentos de convivência e está sempre disposto a oferecer apoio ou uma palavra de incentivo. Sua presença traz leveza e alegria, e sua risada é verdadeiramente contagiante.
            </p>

            <p >Além de ser extrovertido e comunicativo, Iury possui uma mente curiosa e aberta, sempre buscando aprender e crescer. Ele vê a vida como uma jornada cheia de descobertas e não teme enfrentar desafios. Sua determinação e otimismo o impulsionam a seguir em frente, mesmo diante das adversidades.</p>
            <SocialLinks />
        </div>  
      </div>
    );
  };

export default Imagem;
