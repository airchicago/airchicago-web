import LogoSvg from './assets/air_logo.svg';
import Calendar from './Calendar';

function App() {
  return (
    <main className="app">
      <img src={LogoSvg} alt="Activists in Resistance Logo" className="logo" />
      <h1>Activists in Resistance</h1>
      <h2>~ Under Construction ~</h2>
      <Calendar />
    </main>
  )
}

export default App