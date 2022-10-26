import './app.sass'
import Footer from './components/Footer'
import logo from './img/skull.png'
function App() {
 

  return (
    <div className="App">
      <h1 id='logo'>HALL<b>OWEN</b></h1>
      <main>
        <div className="container">
          <div className='texto'>
            <h2> Olá, Que tal brincarmos um pouquinho?</h2>
            <p>Você está pronto para fazer parte da noite mais
               <span> horripilante já vista?</span>
            </p>
            <p>se sim, pegue sua <span>arma! e proteja-se</span>, Afinal...</p>
            <p>vai dar<b> 3:00 da madrugada!</b></p>
          <button>BOA SORTE</button>
          </div>
          <div className='imagem'>
            <img className='imagem__abobora' src={logo} alt="imagem abobora"/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
