import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3em 4em;
    width: 100vw;

    background-color: #010101;
    color: white;
    font-family: 'Roboto', sans-serif;

    .titulo {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 1em;
    }

    .titulo-inserir {
        margin-bottom: 1em;
        font-size: 2em;
        font-weight: bold;
    }

    .inserir {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom 3em;
    }

    .inserir input:nth-child(2) {
        margin: 0em 3em 0em 1em;
    }

    .input-nome,
    .input-descricao {
        outline: none;
        border-radius: 15px;
        border: none;

        padding: .5em 1em;
        height: 2em;
        width: 17.2em;
    }

    .input-descricao {
        width: 28em;
    }

    .botao-inserir {
        background-color: #642764;
        color: white;
        border: 1px solid white;
        padding: 1em 3em;

        outline: none;
        border-radius: 15px;
        font-family: 'Roboto', sans-serif;
    }

    .carousel-container {
        width: 100%;
        height: 100%;
    }
`

export { Container };