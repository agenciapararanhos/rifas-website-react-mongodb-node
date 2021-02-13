import React, { Component } from 'react';
import logo from '../352-3523235_setas-personalizadas-png.png';
// import { Container } from './styles';

export default class Landing extends Component {
  render() {
    return (
      <div className="container-fluid" id="sc1">
        <div className="jumbotron mt-5" id="jump1">
          <div className="main">
            <div className="itried">Criar meu site de rifa</div>
            {/* <div className="css">É PARANHOS</div>
            <span className="line-left"></span><div className="itworked">&amp; Transforme suas indicações em</div><span className="line-right"></span>
            <div className="hoo">m DINHEIRO!!</div>
            <div className="view"><a href="">QUERO GANHAR DINHEIRO</a></div> */}
          </div>
          {/* <div className="explanation">Você ganha a bonificação que pode ser convertida em prêmios ou dinheiro quando uma indicação sua for convertida em venda pela Segurize</div> */}

        </div>


        <div className="jumbotron mt-5" id="jump2">
<div className="bodyjump2">
          <h1 className="titles">Conheça um pouco mais sobre nós...</h1>
          <p className="paragrafo">AGÊNCIA PARANHOS TEM COMO ESSÊNCIA O TRABALHO TECNOLÓGICO, OFERECENDO UM DESENVOLVIMENTO PARA AQUELES QUE OPTAM POR VENDER SEUS PRODUTOS ONLINE (E-COMMERCE), ALÉM DE APRESENTAR SOLUÇÕES EFICAZES ÀS EMPRESAS QUE PROCURAM PROGRAMADORES E DESIGNERS ÍMPARES NO QUESITO QUALIDADE E ALTO NÍVEL.</p>
        </div>
        <br></br>
        <iframe width="75%" height="315" src="https://www.youtube.com/embed/7RUylQDHQMk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        
        </div>
        


        <div className="jumbotron mt-5" id="jump3">
          <br />  <br/>  <br/>
        <div className="container">
        <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 text-center col-xs-12 funcionamento-lateral">
          <img className="circle-img responsive-svg" src="https://segurize.com.br//static/segurize/images/cadastro.svg" />
          <h3>Está interessado em ter uma renda extra? <br />Cadastre-se gratuitamente em nossa plataforma.
          </h3>
        </div>
        <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 text-center col-xs-12 funcionamento">
          <img className="circle-img responsive-svg" src="https://segurize.com.br//static/segurize/images/indique.svg" />
          <h3>Indique os produtos e serviços da Segurize para sua rede de contatos, sua família e até você
            mesmo.</h3>
        </div>
        <div className="col-md-4 col-md-offset-0 col-sm-8 col-sm-offset-2 text-center col-xs-12 funcionamento-lateral">
          <img className="circle-img responsive-svg" src="https://segurize.com.br//static/segurize/images/ganhe.svg" />
          <h3>Para cada indicação sua concretizada em venda por nós, você receberá uma bonificação.</h3>
        </div>
      </div>        
        </div>


        <div className="jumbotron mt-5" id="jump4">
          <br />  <br/>  <br/>
        <div className="container">
    <h1>Produtos oferecidos em nossa plataforma</h1>     
    <div className="produtos">

      <img src="https://image.flaticon.com/icons/png/512/31/31307.png" alt="x"></img>
      <img src="https://img.icons8.com/ios/452/motorcycle.png" alt="x"></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Motorcycle_icon.svg/600px-Motorcycle_icon.svg.png" alt="x"></img>
      <img src="https://static.thenounproject.com/png/2303991-200.png" alt="x"></img>
    </div>
        </div>
      </div>

      <footer className="footer">
  <div className="container text-center">

    <h4>contato@agenciaparanhos.com.br</h4>
    
   
    <h6>AGÊNCIA PARANHOS TEM COMO ESSÊNCIA O TRABALHO TECNOLÓGICO, OFERECENDO UM DESENVOLVIMENTO PARA AQUELES QUE OPTAM POR VENDER SEUS PRODUTOS ONLINE (E-COMMERCE), ALÉM DE APRESENTAR SOLUÇÕES EFICAZES ÀS EMPRESAS QUE PROCURAM PROGRAMADORES E DESIGNERS ÍMPARES NO QUESITO QUALIDADE E ALTO NÍVEL.
    </h6>
    <small className="copyright">© 2021 - Desenvolvido por Agência Paranhos </small>
  </div>
</footer>

      </div>
    )
  }
}
