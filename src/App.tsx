import { useState, useEffect } from "react";
import { productURL } from "./Api/Api";
import * as C from './App.Styles'

async function App() {

  const [products, setProducts] = useState<any>([])
  const [data, setData] = useState(0)

  useEffect(( ) => {

  },[] )

  
  return (
      <C.Container>
      <C.h1>Loja virtual</C.h1>

      </C.Container>
    
  );
}

export default App;
