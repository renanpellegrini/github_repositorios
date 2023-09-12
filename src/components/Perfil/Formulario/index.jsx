import { useState } from "react"

const Formulario = () => {

    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')

    const alteraNome = (evento) => {
        setNome (estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá, {nome}. Você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá, {nome}. Você não foi aprovado</p>
            )
        }
    } 

    return (
        <form>
            <input type='text' placeholder="Seu nome" onChange={alteraNome}></input>
            <input type='number' placeholder="Nota matéria A" onChange={evento=> setMateriaA(parseInt(evento.target.value))}></input>
            <input type='number' placeholder="Nota matéria B" onChange={evento=> setMateriaB(parseInt(evento.target.value))}></input>
            <input type='number' placeholder="Nota matéria C" onChange={evento=> setMateriaC(parseInt(evento.target.value))}></input>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario