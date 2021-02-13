import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import { decode } from 'jsonwebtoken';


class Criarrifa extends Component {
    constructor() {
        super();

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            createdAt: '',
            codindication: ''
        }
    }

    componentDidMount() {
      

        const token = localStorage.utoken;

        try {
            const decoded = jwt_decode(token);
            this.setState({
                first_name: decoded.first_name,
                last_name: decoded.last_name,
                email: decoded.email,
                createdAt: decode.createdAt,
                codindication: decoded.codindication
            })
        } catch(e) {
            console.log('error: ' + e);
            this.props.history.push('/');
        }
        
    }

    render() {
        return (
            
            <div className="container-fluid">
                 <header id="header1"> <div class="container text-center">
    <h1>Nova Rifa</h1>
  </div></header>
                 <link rel="stylesheet" href="https://botanarifa.com.br/clock/compiled/flipclock.css"></link>
                 <link href="https://fonts.googleapis.com/css?family=Allura" rel="stylesheet"></link>
                     <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'></link>
                     <link rel="stylesheet" href="https://botanarifa.com.br/timeline/style.css"></link>
                    
 
                 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <div className="jumbotron mt-5" id="perfiljump1">
              
                <form action method="post" id="formCriarRifa">
  <input type="hidden" name="tipo" defaultValue="Rifa" />
  <section className="timeline">
    <div className="container">
      <div className="timeline-item">
        <div className="timeline-img" />
        <div className="timeline-content js--fadeInLeft">
          <h2>Categoria Prêmio</h2>
          <blockquote>
            Em qual categoria se encaixa o prêmio da sua Rifa?
          </blockquote>
          <p>
            <select name="categoria_premio" required>
              <option value>Selecione uma Categoria</option>
              <option value={1}>Veículos</option><option value={2}>Imóveis</option><option value={3}>Utensílios</option><option value={4}>Eletrônicos</option><option value={5}>Celulares</option><option value={6}>Serviços</option><option value={7}>Hobbies</option><option value={8}>Esportes</option><option value={9}>Beleza</option><option value={10}>Agro</option><option value={11}>Infantil</option><option value={12}>Outros</option><option value={13}>Arte</option><option value={14}>Filantropia</option><option value={15}>Formandos          </option></select>
          </p>
        </div>
      </div> 
      <div className="timeline-item">
        <div className="timeline-img" />
        <div className="timeline-content js--fadeInRight">
          <h2>Valor</h2>
          <blockquote>
            Por quanto vai vender cada Bilhete de sua Rifa?
          </blockquote>
          <select name="valor" required>
            <option value={0}>Grátis</option>
            <option value={1}>R$ 1,00</option><option value={2}>R$ 2,00</option><option value={3}>R$ 3,00</option><option value={4}>R$ 4,00</option><option value={5}>R$ 5,00</option><option value={6}>R$ 6,00</option><option value={7}>R$ 7,00</option><option value={8}>R$ 8,00</option><option value={9}>R$ 9,00</option><option value={10}>R$ 10,00</option><option value={15}>R$ 15,00</option><option value={20}>R$ 20,00</option><option value={25}>R$ 25,00</option><option value={30}>R$ 30,00</option><option value={35}>R$ 35,00</option><option value={40}>R$ 40,00</option><option value={45}>R$ 45,00</option><option value={50}>R$ 50,00</option><option value={60}>R$ 60,00</option><option value={70}>R$ 70,00</option><option value={80}>R$ 80,00</option><option value={90}>R$ 90,00</option><option value={100}>R$ 100,00</option><option value={110}>R$ 110,00</option><option value={120}>R$ 120,00</option><option value={130}>R$ 130,00</option><option value={140}>R$ 140,00</option><option value={150}>R$ 150,00</option><option value={160}>R$ 160,00</option><option value={170}>R$ 170,00</option><option value={180}>R$ 180,00</option><option value={190}>R$ 190,00</option><option value={200}>R$ 200,00</option>        </select>
        </div>
      </div> 
      <div className="timeline-item">
        <div className="timeline-img" />
        <div className="timeline-content js--fadeInRight">
          <h2>Números</h2>
          <blockquote>
            Você quer uma Rifa com quantos números?
          </blockquote>
          <select name="numeros" required>
            <option value={100}>100 Números (00 à 99)</option><option value={200}>200 Números (000 à 199)</option><option value={300}>300 Números (000 à 299)</option><option value={400}>400 Números (000 à 399)</option><option value={500}>500 Números (000 à 499)</option><option value={600}>600 Números (000 à 599)</option><option value={700}>700 Números (000 à 699)</option><option value={800}>800 Números (000 à 799)</option><option value={900}>900 Números (000 à 899)</option><option value={1000}>1000 Números (000 à 999)</option><option value={1500}>1500 Números (0000 à 1499)</option><option value={2000}>2000 Números (0000 à 1999)</option><option value={2500}>2500 Números (0000 à 2499)</option><option value={3000}>3000 Números (0000 à 2999)</option><option value={3500}>3500 Números (0000 à 3499)</option><option value={4000}>4000 Números (0000 à 3999)</option><option value={4500}>4500 Números (0000 à 4499)</option><option value={5000}>5000 Números (0000 à 4999)</option><option value={6000}>6000 Números (0000 à 5999)</option><option value={7000}>7000 Números (0000 à 6999)</option><option value={8000}>8000 Números (0000 à 7999)</option><option value={9000}>9000 Números (0000 à 8999)</option><option value={10000}>10000 Números (0000 à 9999)</option>        </select>
        </div>
      </div> 
      <div className="timeline-item">
        <div className="timeline-content js--fadeInRight">
          <p align="justify">
            <input type="checkbox" name="aceite1" defaultValue="aceito" required /> Eu sou Responsável pela Rifa<br />
            <input type="checkbox" name="aceite2" defaultValue="aceito" required /> Receberei os pagamentos das Rifas em minhas contas ou terceiros informados por mim.<br />
            <input type="checkbox" name="aceite3" defaultValue="aceito" required /> Caso eu cancele a Rifa, devolverei o dinheiro aos compradores<br />
            <input type="checkbox" name="aceit4" defaultValue="aceito" required /> Após o sorteio, entregarei o prêmio ao vencedor<br />
            {/*
      <input type="checkbox" name="aceite5" value="aceito" required> Estou ciente que se eu optar por utilizar o gateway de pagamento do Botanarifa, o dinheiro será disponibilizado 30 dias após a transação.<br>*/}
            <input type="text" name="nome" defaultValue="Ewerson breda teixeira" placeholder="Nome Completo" required />
            <input type="text" maxLength={14} name="cpf" defaultValue={28266746842} placeholder="CPF" required />
            <button type="submit" id="bt-criar" className="bt-azul" style={{padding: '20px', fontSize: '22px', fontWeight: 'bolder', width: '100%'}}>
              Criar Rifa
            </button>
          </p>
        </div>
      </div> 
      <div className="timeline-item">
        <div className="timeline-content js--fadeInLeft">
          <p align="center"><br />
            <a href="../../../dashboard" className="bt-azul" style={{padding: '20px', fontSize: '22px', fontWeight: 'bolder', backgroundColor: 'grey'}}>
              Cancelar
            </a>
          </p>
        </div>
      </div> 
    </div>
  </section>
</form>
</div>
                </div>
        )
    }
}

export default Criarrifa;