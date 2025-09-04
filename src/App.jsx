import { Routes,Route } from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrderPage } from './pages/OrderPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css'
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='checkout' element={<CheckoutPage/>}/>
      <Route path='orders' element={<OrderPage/>}></Route>
      <Route path='tracking' element={<TrackingPage/>}></Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App