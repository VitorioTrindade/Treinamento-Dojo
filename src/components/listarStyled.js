import styled from "styled-components";

const Container = styled.div`
    padding: 2em;
    border-radius: 20px;
    background: #141414;

    margin-bottom: 2em;

    .informacoes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .descricao {
        margin: 0em 2em;
    }

    .opcoes {
        display: flex;
        justify-content: center;
        margin-top: 2em;
    }

    .opcoes :nth-child(2) {
        margin: 0em 1em 0em 2em;
    }

    .input {
        outline: none;
        border-radius: 15px;
        border: none;

        padding: .5em 1em;
        height: 2em;
        width: 17.2em;
    }

    .botao-alterar,
    .botao-excluir {
        background-color: #642764;
        color: white;
        border: 1px solid white;
        padding: 1em 3em;

        outline: none;
        border-radius: 15px;
        font-family: 'Roboto', sans-serif;
    }
`

export { Container };