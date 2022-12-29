import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#2ed12d",
}


const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.form`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
`;

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;    
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }
`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    /* display: none; */
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    /* opacity: 0; */
`;

const ContenedorTerminos = styled.div`
    grid-column: span 2;
    
    input {
        margin-right: 10px;

    }
`;

const ContenedorBotonCentrado = styled.div`
    display: flex;
    justify-content: column;    
    align-items: center;
    grid-column: span 2;
`;

const Boton = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30px;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0px 30px rgba(163,163,163, 1);
    }
`;

export {Formulario, Label, GrupoInput, Input, IconoValidacion, LeyendaError, ContenedorTerminos, ContenedorBotonCentrado, Boton};