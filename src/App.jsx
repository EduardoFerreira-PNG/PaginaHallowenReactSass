import './app.sass'
import Footer from './components/Footer'
import logo from './img/skull.png'
function App() {
 

  return (
    <div className="App">
      <main>
        <div className="container">
          <div className='texto'>
            <h1> Olá, Que tal brincarmos um pouquinho?</h1>
            <p>Você está pronto para fazer parte da noite mais
               <span> horripilante já vista?</span>
            </p>
            <p>se sim, pegue sua <span>arma! e proteja-se</span>, Afinal...</p>
            <p>vai dar<span> 3:00 da madrugada!</span></p>
          </div>
          <div className='imagem'>
            <img className='imagem__abobora' src={logo} alt="imagem abobora"/>
          </div>
          <button>BOA SORTE</button>
        </div>
      </main>
        <Footer />
    </div>
  )
}

export default App
