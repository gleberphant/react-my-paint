import { useRef, useState } from "react"

// //let mousePress = false

// const setMousePress = function (value){
//     mousePress=value
// }

function Canvas() {

  const [color, setColor] = useState('black')
  const [drawMode, setDrawMode] = useState('point')
  const [pointPos, setPointPos] = useState({ x: 0.0, y: 0.0 })
  const [mousePress, setMousePress] = useState(false)
  const myCanvasRef = useRef(null)


  // método - Clicas drawMode on
  const canvasMouseDown = function () {
    setMousePress(true)
    draw()
  }

  // método - drawMode off
  const canvasMouseUp = function () {
    setMousePress(false)
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
    if (mousePress) { draw() }
  }
  // método draw
  const draw = function () {
    const myCanvas = myCanvasRef.current
    const context = myCanvas.getContext('2d')
    context.fillStyle = color

    // preenche tela
    if (drawMode == 'fill') {
      //context.fillRect(0, 0, myCanvas.width, myCanvas.height)
      myCanvas.style.backgroundColor = color
      return
    }
    // desenha ponto
    if (drawMode == 'point') {
      context.fillRect(pointPos.x, pointPos.y, 10, 10)
      return
    }
  }
  // mudar cor
  const setDrawColor = function (drawColor) {
    setColor(drawColor)
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
  const paleta = ['red', 'orange', 'yellow', 'olive', 'green', 'lime', 'purple', 'fuchsia', 'blue', 'aqua', 'navy', 'teal', 'white', 'black', 'silver', 'maroon']


  // render
  return (
    <>
      <br></br>
      <button onClick={resetCanvas} > RESET </button>

      <button onClick={pointModeOn} > PONTO  </button>

      <button onClick={fillModeOn} > PREENCHER  </button>

      {
        paleta.map(cor => (<button key={cor} style={{ backgroundColor: cor }} onClick={() => setDrawColor(cor)} > &nbsp; </button>))
      }

      <br></br>
      <canvas ref={myCanvasRef} style={{ border: '1px solid white' }} width='800' height='600'
        onMouseDown={canvasMouseDown}
        onMouseMove={(e) => { canvasMouseMove(e) }}
        onMouseUp={canvasMouseUp}
      ></canvas>

      <p> X: {pointPos.x.toFixed(0)}, Y: {pointPos.y.toFixed(0)} Mouse Press :{String(mousePress)} DrawMode: {drawMode} Cor :{color}</p>
    </>
  )
}

export default Canvas