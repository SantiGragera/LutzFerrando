import React from 'react'
import Main from "./Components/Main/Main"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initFirebase } from './firebase/config'
import LdsContainer from './Components/LentesDeSol/LdsContainer';
import Accesorios from './Components/Accesorios/Accesorios';
import Nosotros from './Components/Nosotros/Nosotros';
import CartView from './Components/CartView/CartView';
import ItemDetailLr from './Components/ItemDetailLr/ItemDetailLr';
import ItemDetailAcc from './Components/ItemDetailAcc/ItemDetailAcc';
import DetailContainerLds from './Components/DetailContainerLds/DetailContainerLds';
import { CartContextProvider } from './Components/context/CartContex';
import LrContainer from './Components/LentesRecetados/lrContainer';

initFirebase();

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/lentesdesol' element={<LdsContainer />}/>
          <Route path='/lentes' element={<LrContainer />} />
          <Route path='/accesorios' element={<Accesorios />} />
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/cart' element={<CartView />} />
          <Route path='/detailLds/:pid' element={<DetailContainerLds />} />
          <Route path='/detailLr/:pid' element={<ItemDetailLr />} />
          <Route path='/detailAccesorios/:pid' element={<ItemDetailAcc />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
