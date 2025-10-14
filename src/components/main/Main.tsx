import React from 'react'
import Button from "./../button/Button";
import { useRouter } from "next/router";
import { MainContainer } from './MainStyles';



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
