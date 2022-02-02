import { useState } from 'react'
import { Container } from "./listarStyled";

import { toast } from 'react-toastify';

export default function AtividadeBox(props) {

    const alterarTitulo = () => {
        props.onUpdate(props.index)
        toast.success('🗿 Produto Alterado')
    }

    const removeAtividade = () => {
        let titulo = props.info.titulo 
        props.onRemove(props.index)
        toast.success('🗿 Atividade ' + titulo + ' Removida')
    }

    return (
        <Container>
            <div className="informacoes"> 
                <div className="nome-atividade"> Nome da Atividade: {props.info.titulo} </div>
                <div className="concluido"> Status da Atividade: {props.info.concluido} </div>
            </div>
            <div className="opcoes"> 
                <input className="input"
                        onChange={alterarTitulo} 
                />
                <button className="botao-alterar" onClick={alterarTitulo} > Alterar </button> 
                <button className="botao-excluir" onClick={removeAtividade} > Excluir </button>
            </div>
        </Container>
    )
}