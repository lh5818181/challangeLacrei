import React from 'react'
import styled from "styled-components";
import Button from "./Button";
import { useRouter } from "next/router";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.25rem;
        margin-bottom: 2rem;
    }
`;


export default function Main() {
    const router = useRouter();

    const handleStart = () => {
        router.push('/diversity');
    };

    return (
        <MainContainer>
            <h1>Bem-vindo à Lacrei Saúde</h1>
            <p>Projeto voluntário Front-end com foco em acessibilidade e inclusão.</p>
            <Button ariaLabel="Começar cadastro" onClick={handleStart}>Começar cadastro</Button>
        </MainContainer>
    );
}
