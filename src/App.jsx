import logo from './assets/logo.svg'
import { Container } from './components/Container'

function App() {
  return (
    <Container>
      <aside>
        <img src={logo} alt="" />
      </aside>
      <h1>Olá, seja bem-vindo(a) ao PoupApp!</h1>
    </Container>
  )
}

export default App