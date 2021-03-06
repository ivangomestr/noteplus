import {
  AuthenticationContainer,
  ButtonContainer,
  Container,
  LoginContainer,
  Logo,
  SignUpContainer,
  Title,
  UserNameContainer,
} from "./style";
import logoImg from "../../assets/logo.svg";

export const SignUpPage = () => {
  return (
    <Container>
      <SignUpContainer>
        <Logo>
          <img src={logoImg} alt="Logo" />
          <h2>DailyMirror</h2>
        </Logo>

        <Title>
          <h2>Increver-se</h2>
          <p>Crie sua conta.</p>
        </Title>

        <UserNameContainer>
          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="Sobrenome" />
        </UserNameContainer>

        <AuthenticationContainer>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
        </AuthenticationContainer>

        <ButtonContainer>
          <button>Inscrever-se</button>
        </ButtonContainer>

        <LoginContainer>
          <p>Já tem uma conta?</p>
          <button>Entrar</button>
        </LoginContainer>
      </SignUpContainer>
    </Container>
  );
};
