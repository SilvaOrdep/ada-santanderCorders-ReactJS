import React from "react";
import "./styles/App.css";

import { Navbar } from "./components/navBar/Navbar";
import { Article } from "./components/Article/Article";
import { Contador } from "./components/Counter/Contador";


import artcImg1 from './images/batman.jpg';
import artcImg2 from './images/mcdog.jpg';
import artcImg3 from './images/noser.png';

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Contador />

        <section id="articleSection">
          <Article 
          title="Batman" provider="Cavaleiro do Brasileirão" description="Batman vai em uma jornada pela serie A do campeonato brasileiro de futebol o Brasileirão, enfrentando diversos desafios como o grande papão, Paysandu, seu maior inimigo nas fases de grupo da libertadores."
          thumbnail={artcImg1}
          />

          <Article
          title="McLovin Dog" provider="Multiverso Mclovin superbad" description="Superbad - É Hoje é um dos filmes de comédia mais amados dos últimos anos. Um dos fatores que contribwuiu para a popularidade do filme foi McLovin, interpretado por Christopher Mintz-Plasse."
          thumbnail={artcImg2}
          />
          
          <Article 
          title="Noser" provider="Multiverso noser e seu vilão Lugoses" description="'Noser' é uma figura que surgiu como um meme na internet, misturando as características de um macaco e um corvo. A imagem mostra um animal com o corpo de um corvo e a cabeça de um chimpanzé. "
          thumbnail={artcImg3}
          />
          
          <Article 
          title="Batman" provider="Cavaleiro do Brasileirão" description="Batman vai em uma jornada pela serie A do campeonato brasileiro de futebol o Brasileirão, enfrentando diversos desafios como o grande papão, Paysandu, seu maior inimigo nas fases de grupo da libertadores."
          thumbnail={artcImg1}
          />
        </section>
        
      </>
    );
  }
}

export default App;
