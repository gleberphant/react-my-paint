import { useRef, useState } from "react"
import PaletaCores from "../paletacores/PaletaCores"


function Canvas() {

  const [color, setColor] = useState('black')
  const [pointPos, setPointPos] = useState({ x: 0.0, y: 0.0 })

  const [drawMode, setDrawMode] = useState('point')
  const mousePress = useRef(false)
  const myCanvasRef = useRef(null)


  // método - Clicas drawMode on
  const canvasMouseDown = function () {
    mousePress.current = true
    //setMousePress(true)
    draw()
  }

  // método - drawMode off
  const canvasMouseUp = function () {
    mousePress.current = false
    //setMousePress(false)
  }

  const canvasMouseMove = function (e) {
    // atualizar posição do mouse
    const myCanvas = myCanvasRef.current
    const rect = myCanvas.getBoundingClientRect()

    setPointPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })

    //se mouse pressionado então desenha
    if (mousePress.current) { draw() }
  }
  // método draw
  const draw = function () {
    const myCanvas = myCanvasRef.current
    const context = myCanvas.getContext('2d')
    context.fillStyle = color

    // preenche tela
    if (drawMode == 'fill') {
      myCanvas.style.backgroundColor = color
      return
    }
    // desenha ponto
    if (drawMode == 'point') {
      context.fillRect(pointPos.x, pointPos.y, 10, 10)
      return
    }
  }


  // MODO preencher
  const fillModeOn = function () {
    setDrawMode('fill')
  }

  // MODO preencher
  const pointModeOn = function () {
    setDrawMode('point')
  }

  // Restart canvas
  const resetCanvas = function () {
    const myCanvas = myCanvasRef.current
    const context = myCanvas.getContext('2d')

    myCanvas.style.backgroundColor = 'white'
    context.fillStyle = 'white'
    context.clearRect(0, 0, myCanvasRef.current.width, myCanvasRef.current.height)

  }
  // render
  return (
    <>
      <br></br>
      <button onClick={resetCanvas} > RESET </button>

      <button onClick={pointModeOn} > PONTO  </button>

      <button onClick={fillModeOn} > PREENCHER  </button>


      <br></br>
      <PaletaCores callBackSetColor={setColor} />


      <br></br>
      <canvas ref={myCanvasRef} style={{ border: '1px solid white', backgroundColor: 'white' }} width='800' height='600'
        onMouseDown={canvasMouseDown}
        onMouseMove={(e) => { canvasMouseMove(e) }}
        onMouseUp={canvasMouseUp}
      ></canvas>

      <p> X: {pointPos.x.toFixed(0)}, Y: {pointPos.y.toFixed(0)} DrawMode: {drawMode} Cor :{color}</p>
    </>
  )
}

export default Canvas