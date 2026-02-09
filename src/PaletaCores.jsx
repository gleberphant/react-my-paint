import { useState } from "react"
function PaletaCores() {
    const [currentColor, setCurrentColor] = useState('black')

    const desenhaPaletaCores = function () {
        const paleta = ['red', 'orange', 'yellow', 'olive', 'green', 'lime', 'purple', 'fuchsia', 'blue', 'aqua', 'navy', 'teal', 'white', 'black', 'silver', 'maroon']
        return paleta.map(function (cor) {
            return <button key={cor} style={{ backgroundColor: cor }} onClick={() => { setCurrentColor(cor) }} > &nbsp; </button>
        })
    }
    //
    return (
        <><div>
            { desenhaPaletaCores() }
            <p>CorSelecionada {currentColor}</p>
        </div>
        </>
    )
}

export default PaletaCores