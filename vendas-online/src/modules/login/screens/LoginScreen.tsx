import { Backgroundimg, ContainerLogin, LimtedContainer, LogoImage, ContainerLoginScreen } from "../styles/loginScreen.styles"

export const LoginScreen = () => {
    return (
        <div>
            <ContainerLoginScreen>
                <Backgroundimg src='./login.png' />
                <ContainerLogin>
                    <LimtedContainer>
                        <LogoImage src="./logo.png" />
                    </LimtedContainer>
                </ContainerLogin>
            </ContainerLoginScreen>

        </div>
    )
}

export default LoginScreen