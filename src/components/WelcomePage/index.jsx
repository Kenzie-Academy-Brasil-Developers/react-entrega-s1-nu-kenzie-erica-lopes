import './style.css'

function WelcomePage({ handleLogin }) {
  return (
    <div className="homePage">
      <div className="infos">
        <img src="./logoHome.svg" alt="logoNuKenzie" className="logoHome" />
        <h1 className="h1Home">Centralize o controle das suas finanças</h1>
        <p className="pHome">de forma rápida e segura</p>
        <button className="btnHome" onClick={handleLogin}>
          Iniciar
        </button>
      </div>
      <img src="./image.svg" alt="imagem-docs" className="imgHome" />
    </div>
  );
}
export default WelcomePage;
