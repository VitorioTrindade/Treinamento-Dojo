import styled from "styled-components";

const Container = styled.div`

    .informacoes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .opcoes {
        margin: 2em 0em;
    }

    .opcoes :nth-child(2) {
        margin: 0em 1em 0em 2em;
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