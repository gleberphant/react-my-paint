import Menu from './components/menu/Menu'
import Canvas from './components/canvas/Canvas'
import Footer from './components/foot/Foot'
import './App.css'


export default function App() {
  return (
    <div>
      <Menu titulo="REACT PAINT" />
      <Canvas />
      <Footer />
    </div >
  )
}