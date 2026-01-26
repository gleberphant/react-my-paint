import { useRef, useState } from "react"

// //let mousePress = false

// const setMousePress = function (value){
//     mousePress=value
// }

function Canvas () {

  const [color, setColor] = useState('black')
  const [drawMode, setDrawMode] = useState('point')
  const [pointPos, setPointPos] = useState({ x: 0.0, y: 0.0 })
  const [mousePress, setMousePress] = useState(false)
  const myCanvasRef = useRef(null)
  
  
  // método - Clicas drawMode on
  const canvasMouseDown = function (e) {
    setMousePress(true)
    draw(e)
  }

  // método - drawMode off
  const canvasMouseUp = function () {
    setMousePress(false)
  }

  const canvasMouseMove = function (e){
    // atualizar posição do mouse
    const rect = e.target.getBoundingClientRect()
    
    setPointPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
    
    //se mouse pressionado então desenha
    if (mousePress) { draw(e) }
  }
  // método draw
  const draw = function (e) {
    const myCanvas = e.target
    const context = myCanvas.getContext('2d')
    context.fillStyle = color

    // preenche tela
    if (drawMode == 'fill') {
      context.fillRect(0, 0, myCanvas.width, myCanvas.height)
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
  const fillModeOn = () => {
    setDrawMode('fill')
  }

  // MODO preencher
  const pointModeOn = () => {
    setDrawMode('point')
  }

  // Restart canvas
  const resetCanvas = function () {
    const context = myCanvasRef.current.getContext('2d')
    context.fillStyle = 'white'
    context.fillRect(0, 0, myCanvasRef.current.width, myCanvasRef.current.height)

  }


  // render
  return (
    <>
      <br></br>
      <button onClick={resetCanvas} > RESET </button>

      <button onClick={pointModeOn} > PONTO  </button>

      <button onClick={fillModeOn} > PREENCHER  </button>

      <button style={{ backgroundColor: 'red' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp; </button>
      <button style={{ backgroundColor: 'orange' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp; </button>
      <button style={{ backgroundColor: 'yellow' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp; </button>

      <button style={{ backgroundColor: 'olive' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp; </button>
      <button style={{ backgroundColor: 'green' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'lime' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>

      <button style={{ backgroundColor: 'purple' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'fuchsia' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'blue' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>

      <button style={{ backgroundColor: 'aqua' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'navy' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'teal' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'white' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>

      <button style={{ backgroundColor: 'black' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'silver' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>
      <button style={{ backgroundColor: 'maroon' }} onClick={(e) => { setDrawColor(e.target.style.backgroundColor) }} > &nbsp;</button>

      <br></br>
      <canvas ref={myCanvasRef} style={{ border: '1px solid white', backgroundColor: 'white' }} width='800' height='600'
        onMouseDown={(e) => { canvasMouseDown(e)}}
        onMouseMove={(e) => { canvasMouseMove(e) }}
        onMouseUp={canvasMouseUp}

      ></canvas>

      <p> X: {pointPos.x.toFixed(0)}, Y: {pointPos.y.toFixed(0)} Mouse Press :{String(mousePress)} DrawMode: {drawMode} Cor :{color}</p>
    </>
  )
}

export default Canvas