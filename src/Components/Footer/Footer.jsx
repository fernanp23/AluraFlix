import styled from "styled-components";
import Logotipo from "../Logotipo/Logo";
import github_icon from "../../assets/img/github_icon.png";
import linkedin_icon from "../../assets/img/linkedin_icon.png";


const Footer = styled.footer`
    padding-bottom: 6rem;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 3px solid #2A7AE4;
    padding: 1.5rem 0 3.5rem 0;
    margin-top: 5rem;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    }
`;


const PieDePagina = () => {
    return (
        <Footer>
            <Logotipo footer={true} />
            <a href="https://github.com/fernanp23">
                <img src={github_icon} alt="GitHub Logo" />
            </a> <br/>
            <a href="https://linkedin.com/in/fernando-pena-rua">
            <img src={linkedin_icon} alt="Linkedin Logo" />
            </a>
                <h1>Desarrollado por Fernando Peña</h1>
        </Footer>
    )
}

export default PieDePagina;