import * as C from './App.Styles'
import { NavBar } from './components/NavBar';
import { Products } from './components/ProductsItens';
import { Footer } from './components/Footer';
import { MainModal } from './components/Modal';

function App() {


  return (
    <C.Container>
      <NavBar />
      <MainModal />
      <Products />
      <Footer />
    </C.Container>

  );
}

export default App;
