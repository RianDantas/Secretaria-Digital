import { useNavigate } from "react-router-dom"

const Botao = () => {


    const redi = useNavigate()
    function clicou(){
        redi("/op")
    }
    return (
        <button onClick={clicou}>clique</button>
    )
}

export default Botao