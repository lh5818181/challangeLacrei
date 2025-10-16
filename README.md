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

# Documentação Técnica do Projeto

## Documentação Rápida

Nesta seção estão as decisões técnicas principais, métricas do Lighthouse, checklist de acessibilidade e resumo do que foi implementado ou pendente.

---

## Decisões Técnicas

- **Framework:** Next.js com TypeScript para robustez e escalabilidade  
- **Estilização:** Styled-Components com tema centralizado e SSR configurado  
- **Otimização de carregamento:** importação dinâmica via `next/dynamic`  
- **Análise de bundle:** Webpack Bundle Analyzer configurado  
- **Testes:** Jest + React Testing Library para componentes essenciais

---

## Prints e Métricas do Lighthouse

- **FCP (First Contentful Paint):** 1,1 s  
- **LCP (Largest Contentful Paint):** 10,6 s — ponto a melhorar  
- **TBT (Total Blocking Time):** 2.460 ms — otimizar para reduzir bloqueios  
- **CLS (Cumulative Layout Shift):** 0 — excelente  
- **Speed Index:** 2,0 s

![Print do Lighthouse](https://raw.githubusercontent.com/lh5818181/servidor_estatico/refs/heads/main/print%20-%20lighthouse.png)  
*Resumo das métricas do Lighthouse.*

---

## Acessibilidade

### Checklist de Acessibilidade

- Navegação por teclado funcionando  
- Foco visível em elementos interativos  
- Uso correto de landmarks (`header`, `nav`, `main`, `footer`)  
- HTML semântico e atributos ARIA aplicados corretamente  
- Contraste de cores validado com Lighthouse — **nota 100**  
- Inclusão do elemento `<title>`  
- Inclusão do atributo `lang="pt-BR"` no elemento `<html>`  
- Ordem lógica de tabulação e ausência de armadilhas de foco  
- Textos alternativos adequados em imagens  
- Labels e roles ARIA revisados em controles interativos  
- Testes com leitores de tela realizados

### Print do Lighthouse — Acessibilidade (Nota 100)

![Print do Lighthouse Acessibilidade](https://raw.githubusercontent.com/lh5818181/servidor_estatico/refs/heads/main/Print%20-%20Acessibilidade.png)  
*Relatório Lighthouse mostrando nota 100 em acessibilidade.*

---

## Testes

- Testes unitários para os componentes `Header`, `Footer`, `Button`  
- Caminho dos testes: `src/tests/`  
- Frameworks utilizados: Jest + React Testing Library

### Print do Summary do Jest

![Print do Summary do Jest](https://raw.githubusercontent.com/lh5818181/servidor_estatico/refs/heads/main/print%20-%20testes.png)  
*Resumo dos testes unitários executados com Jest.*

---

## Itens Implementados

- Importação dinâmica (`next/dynamic`) aplicada em componentes grandes, como `DiversityForm`  
- Testes unitários para `Header`, `Footer` e `Button/Form`  
- Configuração do Webpack Bundle Analyzer para análise do bundle JavaScript

---

## Itens Não Implementados / Pendências

- Uso do `next/font` para fontes otimizadas  
- Revisão do CSS global e styled-components para remoção de estilos não usados  
- Revisão das configurações de cache e compressão no deploy  
- Análise e otimização das tarefas que bloqueiam a thread principal  
- Uso do `next/image` com dimensões fixas e `priority` (não aplicável, pois não há imagens no projeto)


## Considerações Finais

Este projeto representa um compromisso com a inclusão, acessibilidade e impacto social, alinhado à missão da Lacrei Saúde. Agradeço a oportunidade de contribuir e aprender com essa experiência.

Para dúvidas ou sugestões, entre em contato.
