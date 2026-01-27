import { useRef } from "react"

function PaletaCores({ callBackSetColor }) {


    const currentColor = useRef('black')

    const setCurrentColor = function (cor) {
        currentColor.current = cor
    }

    const changeColor = function (cor) {
        setCurrentColor(cor)
        if (typeof callBackSetColor === 'function') callBackSetColor(cor)
    }

    const desenhaPaletaCores = function () {
        const paleta = ['red', 'orange', 'yellow', 'olive', 'green', 'lime', 'purple', 'fuchsia', 'blue', 'aqua', 'navy', 'teal', 'white', 'black', 'silver', 'maroon']
        return paleta.map(function (cor) {
            return <button key={cor} style={{ backgroundColor: cor }} onClick={() => { changeColor(cor) }} > &nbsp; </button>
        })
    }
    //
    return (
        <><div>
            {desenhaPaletaCores()}


        </div>
        </>
    )
}

export default PaletaCores