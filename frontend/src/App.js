import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import Message from './components/Message';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route
              path="*"
              element={
                <Message variant='danger'>There's nothing here!</Message>
              }
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
