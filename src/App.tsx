import './App.css'
import { FaApple } from "react-icons/fa";
import { PiMagnifyingGlassBold, PiBagBold } from "react-icons/pi";

function App() {

  return (
    <div>
      <header>
        <nav>
          <ul className='flex gap-10 justify-center m-3 align-text-center'>
            <li className='align-text-center'><FaApple className="text-1xl" /></li>
            <li>Loja</li>
            <li>Mac</li>
            <li>IPad</li>
            <li>IPhone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>Tv e Casa</li>
            <li>Entreterimento</li>
            <li>Acessórios</li>
            <li>Suporte</li>
            <li><PiMagnifyingGlassBold className="w-4 h-7 text-gray-700 hover:text-black transition" /></li>
            <li><PiBagBold className="w-4 h-7 text-gray-700 hover:text-black transition" /></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default App
