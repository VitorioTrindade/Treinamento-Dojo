import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "setTitulo": 
            return {...state, titulo: action.titulo}
        case "setDescricao": 
            return {...state, descricao: action.descricao}
        case "setConcluido": 
            return {...state, concluido: action.concluido}
        case "setAtividades": 
            return {...state, atividades: [...state.atividades, action.atividades]}
        case "setAtividadeTitulo": 
            return {
                ...state, 
                atividades: state.atividades.map((item, idx) => {
                    return idx === item.index ? {...item, titulo: action.titulo} : item
                })
            }
        case "removeAtividade": 
            return {
                    ...state, 
                    atividades: state.atividades.filter((item, index) => index !== action.index)
            }
        default:
            break;
    }
}

const estadoInicial = {
    titulo: '',
    descricao: '',
    concluido: false,
    atividades: []
}

const AtividadeContext = createContext();

export default function AtividadeContextProvider(props) {
    const [ atividadeState, setAtividadeState ] = useReducer(reducer, estadoInicial);
    return ( 
        <AtividadeContext.Provider value={{ atividadeState, setAtividadeState }}> 
            { props.children } 
        </AtividadeContext.Provider>
    );
}

export function UseAtividadeContext() {
    const context = useContext( AtividadeContext )
    const { atividadeState, setAtividadeState } = context
    return {
        atividadeState,
        setTitulo: (titulo) => setAtividadeState({type: 'setTitulo', titulo}), 
        setDescricao: ( descricao ) => setAtividadeState({ type: 'setDescricao', descricao}),
        setConcluido: ( concluido ) => setAtividadeState({type: 'setConcluido', concluido}),
        setAtividades: ( atividades ) => setAtividadeState({type: 'setAtividades', atividades}),
        setAtividadeTitulo: ( index, titulo ) => setAtividadeState({type: 'setAtividadeTitulo', index, titulo}),
        removeAtividade: ( index ) => setAtividadeState({type: 'removeAtividade', index})
    }
}