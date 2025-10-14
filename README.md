# Projeto Voluntariado Front-end - Lacrei Saúde

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Front-end na Lacrei Saúde. O objetivo principal foi criar duas páginas web interativas, acessíveis, responsivas e performáticas, alinhadas à identidade visual e missão da Lacrei Saúde.

---

## Tecnologias Utilizadas

- Next.js com TypeScript
- Styled-Components para estilização com tema
- React Testing Library e Jest para testes unitários

---

## Estrutura do Projeto

- **src/components/**: Componentes reutilizáveis, incluindo Header, Footer, Button e DiversityForm.
- **src/pages/**: Páginas da aplicação, incluindo `diversity.tsx` e `confirmation.tsx`.
- **src/styles/**: Arquivos de tema e estilos globais.
- **src/tests/**: Testes unitários para componentes principais.

---

## Como Rodar o Projeto Localmente

1. Clone o repositório:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Rode o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

4. Acesse no navegador:

    ```
    http://localhost:3000
    ```

---

## Como Rodar os Testes

Execute:

```bash
npm run test
```

Os testes cobrem os componentes Header, Footer, Button e DiversityForm, garantindo a funcionalidade e acessibilidade.

---

## Como Fazer Build e Deploy

Build da aplicação:

```bash
npm run build
```

Start para produção local:

```bash
npm start
```

Deploy:

O deploy foi realizado na plataforma Vercel, que oferece integração contínua e preview deploys automáticos.

**Link do deploy:** [INSIRA AQUI O LINK DO DEPLOY]

---

## Proposta de Rollback

**Rollback simples:**  
Na Vercel, é possível restaurar uma versão anterior da aplicação diretamente pelo painel de deploys, selecionando o deploy desejado e clicando em "Rollback".

**Rollback funcional:**  
Utilizamos Preview Deploys para validar cada alteração antes de promover para produção, garantindo que versões estáveis estejam sempre disponíveis.

---

## Justificativas Técnicas e Visuais

- **Acessibilidade:** Uso de HTML semântico, atributos ARIA, contraste de cores validado com Lighthouse (nota mínima 90), e testes com leitores de tela.
- **Responsividade:** Abordagem mobile-first com adaptação fluida para diferentes tamanhos de tela.
- **Performance:** Lazy loading de imagens e otimização do bundle para garantir nota mínima 80 no Lighthouse.
- **Estilização:** Styled-Components com tema centralizado para manter consistência visual conforme o Marsha Design System.
- **Testes:** Cobertura de componentes essenciais para garantir estabilidade e qualidade.

---

## Considerações Finais

Este projeto representa um compromisso com a inclusão, acessibilidade e impacto social, alinhado à missão da Lacrei Saúde. Agradeço a oportunidade de contribuir e aprender com essa experiência.

Para dúvidas ou sugestões, entre em contato.