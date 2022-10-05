import * as C from './App.Styles'
import { NavBar } from './components/NavBar';
import { Products } from './components/ProductsItens';
import { Footer } from './components/Footer';

function App() {


  return (
    <C.Container>
      <NavBar />
      <Products />
      <Footer />
    </C.Container>

  );
}

export default App;
