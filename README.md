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

## Documentação Rápida

Nesta seção, você encontra as decisões técnicas principais, prints do Lighthouse e um mini-checklist de acessibilidade (A11y) para garantir qualidade e performance no projeto.

---

### Decisões Técnicas

- Uso de Next.js com TypeScript para robustez e escalabilidade.
- Styled-Components para estilização com tema centralizado e SSR configurado.
- Importação dinâmica (`next/dynamic`) para otimização do carregamento de componentes pesados.
- Configuração do Webpack Bundle Analyzer para análise e otimização do bundle JavaScript.
- Testes unitários com Jest e React Testing Library para componentes essenciais.

---

### Prints do Lighthouse

- First Contentful Paint (FCP): 1,0 s
- Largest Contentful Paint (LCP): 9,5 s (ponto a melhorar)
- Total Blocking Time (TBT): 1.050 ms (otimizar para reduzir bloqueios)
- Cumulative Layout Shift (CLS): 0 (excelente)
- Speed Index: 1,4 s

---

### Mini-Checklist de Acessibilidade (A11y)

- Uso de HTML semântico e atributos ARIA onde necessário.
- Contraste de cores validado para acessibilidade (nota mínima 90 no Lighthouse).
- Navegação por teclado testada e funcional.
- Componentes com foco visível e estados acessíveis.
- Testes com leitores de tela para garantir leitura correta.
- Formulários com labels associados corretamente.

---

### Itens Implementados

- Importação dinâmica (`next/dynamic`) aplicada em componentes grandes, como DiversityForm.
- Testes unitários para Header, Footer e Button/Form.
- Configuração do Webpack Bundle Analyzer para análise do bundle JavaScript.

---

### Itens Não Implementados

- Uso do `next/font` para fontes otimizadas e carregamento eficiente.
- Revisão do CSS global e styled-components para remoção de estilos não usados.
- Revisão das configurações de cache e compressão no deploy.
- Análise e otimização das tarefas que bloqueiam a thread principal.
- Uso do `next/image` com dimensões fixas e `priority` (não aplicável, pois não há imagens no projeto).

---

## Considerações Finais

Este projeto representa um compromisso com a inclusão, acessibilidade e impacto social, alinhado à missão da Lacrei Saúde. Agradeço a oportunidade de contribuir e aprender com essa experiência.

Para dúvidas ou sugestões, entre em contato.
