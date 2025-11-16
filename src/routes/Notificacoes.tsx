import ButtonWrapper from "../components/ButtonWrapper"
import Wrapper from "../components/Wrapper"

const Notificacoes = () => {
  return (
    <Wrapper>
        <h1>Notificações</h1>
        <ButtonWrapper to="/dashboard">
            Voltar ao Dashboard
        </ButtonWrapper>
    </Wrapper>
  )
}

export default Notificacoes