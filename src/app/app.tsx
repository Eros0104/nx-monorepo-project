import { Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import { Cart } from "@store/cart"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NxWelcome title="store" />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
