import { Container } from './styled';
import { UseAtividadeContext } from "../../context"
import  AtividadeBox from '../../components/listarAtividades'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CarouselConfig } from '../config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {

    const {
        atividadeState: {titulo, descricao, concluido, atividades},
        setTitulo,
        setDescricao,
        setConcluido,
        setAtividades,
        setAtividadeTitulo,
        removeAtividade
    } = UseAtividadeContext();



    const inserir = () => {
        let obj = {
            titulo,
            descricao,
            concluido: false
        }

        if (titulo === '') {
            return toast.error('Não é possível adicionar uma atividade sem nome.')
        }

        if (descricao === '') {
            return toast.error('Não é possível adicionar uma atividade sem descricao.')
        }

        if (titulo.length > 30) {
            return toast.error('Insira um nome menor do que 30 caracteres.')
        }

        if (descricao.length > 50) {
            return toast.error('Insira uma descrição menor do que 50 caracteres.')
        }
        
        setAtividades(obj)
        toast.success('Atividade Inserida')
    }

    const OnChangeAtividadeTitulo = (index) =>
          (event) => { 
              setAtividadeTitulo(index, event.target.value)
          }

    const OnPressRemoveAtividade = (index) => removeAtividade(index)

    return(
        <Container>
            <ToastContainer />
            <div className="titulo"> Atividades </div>
            <div className="box-infos">
                {atividades.map((item, index) => {
                    return <AtividadeBox index={index}
                        info={item}
                        onUpdate={OnChangeAtividadeTitulo}
                        onRemove={OnPressRemoveAtividade} 
                    />
                })}
            </div>
            <div className="titulo-inserir"> Inserir </div>
            <div className="inserir">
                <input className="input-nome" onChange={e => setTitulo(e.target.value)} value={titulo} placeholder='Nome da Atividade'/>
                <input className="input-descricao" onChange={e => setDescricao(e.target.value)} value={descricao} placeholder='Descrição' />
                <button className="botao-inserir" onClick={inserir}> Inserir Atividade </button>
            </div> 
        </Container>
    )
}