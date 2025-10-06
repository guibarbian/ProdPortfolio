import BodyList from './components/BodyList'
import BodyListItem from './components/BodyListItem'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Servicos from './components/Servicos'
import Contato from './components/Contato'

const BodyComponent = () => {
  return (
    <div>
      <BodyList>
        <BodyListItem>
          <Home />
        </BodyListItem>
        <BodyListItem>
          <About />
        </BodyListItem>
        <BodyListItem>
          <Portfolio />
        </BodyListItem>
        <BodyListItem>
          <Servicos />
        </BodyListItem>
        <BodyListItem>
          <Contato />
        </BodyListItem>
      </BodyList>
    </div>
  )
}

export default BodyComponent