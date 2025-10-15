# Projeto Voluntariado Front-end - Lacrei Saúde

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Front-end na Lacrei Saúde. O objetivo principal é criar páginas web interativas, acessíveis, responsivas e performáticas, alinhadas à identidade visual e missão da Lacrei Saúde.

## Tecnologias Utilizadas

- **Next.js** com **TypeScript**
- **Styled-Components** para estilização com tema
- **React Testing Library** e **Jest** para testes unitários

## Estrutura do Projeto

- `src/components/`: Componentes reutilizáveis, incluindo `Header`, `Footer`, `Button` e `DiversityForm`.
- `src/pages/`: Páginas da aplicação, como `diversity.tsx` e `confirmation.tsx`.
- `src/styles/`: Arquivos de tema e estilos globais.
- `src/tests/`: Testes unitários para componentes principais.

## Como Rodar o Projeto Localmente

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

## Como Rodar os Testes

Execute:

```bash
npm run test
```

Os testes cobrem os componentes `Header`, `Footer`, `Button` e `DiversityForm`, garantindo funcionalidade e acessibilidade.

## Como Fazer Build e Deploy

Build da aplicação:

```bash
npm run build
```

Start para produção local:

```bash
npm start
```

**Deploy:**  
O deploy foi realizado na plataforma Vercel, que oferece integração contínua e preview deploys automáticos.

Link do deploy: [https://challange-lacrei.vercel.app/](https://challange-lacrei.vercel.app/)

## Proposta de Rollback

Rollback simples:

Na Vercel, é possível restaurar uma versão anterior da aplicação diretamente pelo painel de deploys, selecionando o deploy desejado e clicando em "Rollback".

## Justificativas Técnicas e Visuais

### Acessibilidade

- Navegação por teclado funcionando  
- Foco visível em elementos interativos  
- Uso correto de landmarks (header, nav, main, footer)  
- Uso de HTML semântico, atributos ARIA, contraste de cores validado com Lighthouse (nota 100)  
- Inclusão do elemento `<title>` para melhorar a semântica e acessibilidade  
- Inclusão do atributo `lang="pt-BR"` no elemento `<html>` para definir o idioma da página  
- Revisão e correção de roles ARIA e labels para controles interativos  
- Garantia de ordem lógica de tabulação e ausência de armadilhas de foco  
- Textos alternativos adequados em imagens  

#### Print do Lighthouse - Acessibilidade (Nota 100)
![Print do Lighthouse Acessibilidade](https://raw.githubusercontent.com/lh5818181/servidor_estatico/refs/heads/main/Print%20-%20Acessibilidade.png)  
*Relatório Lighthouse mostrando nota 100 em acessibilidade.*

---

### Testes

- Testes unitários para os componentes `Header`, `Footer`, `Button`  
- Paths dos testes disponíveis em `src/tests/`  

#### Print do Summary do Jest

![Print do Summary do Jest](https://raw.githubusercontent.com/lh5818181/servidor_estatico/refs/heads/main/print%20-%20testes.png)  
*Resumo dos testes unitários executados com Jest.*

---

## Considerações Finais

Este projeto representa um compromisso com a inclusão, acessibilidade e impacto social, alinhado à missão da Lacrei Saúde. Agradeço a oportunidade de contribuir e aprender com essa experiência.

Para dúvidas ou sugestões, entre em contato.
