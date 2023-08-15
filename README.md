<h1 align="center">
   Teste frontend - Uhuu
</h1>
<p align="center">
   <img width="200px" alt="Imagem demonstrativa Uhuu" src="https://github.com/WelltonQ/IgniteFeed/assets/12499627/bb455e80-b3dd-402c-8059-0c661a761291" />
</p>
<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-executar">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-autor">Autor</a>
</p>

## :page_facing_up: Descrição

O desafio proposto consiste em criar uma aplicação usando a API de filmes gratuita themoviedb em sua versão 3. Possui duas páginas: Home e Movie. 
- A página Home é responsável por listar todos os filmes populares do dia, incluindo funcionalidades como filtros através do gênero selecionado e paginação para encontrar novos filmes. É possível clicar no filme para ser direcionado para a página de Movie.
- A página Movie consiste em todos os detalhes sobre o filme selecionado, contém informações como título, data de lançamento, gêneros, duração, avaliação dos usuários, sinopse e equipe. Além disso, existe a seção do elenco original com foto e nome de cada, seção trailer com o vídeo e seção recomendações listando os filmes recomendados para o usuário.
- A aplicação está responsiva para uso mobile, tablet e desktop.

## 🌍 Acesse pelo navegador
- https://filmes-tmdb-uhuu.vercel.app

## 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias

- [React.js](https://pt-br.reactjs.org/)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/ptbr/docs/intro/)
- [TMDB](https://www.themoviedb.org/?language=pt-BR/)

## :closed_book: Executar

### Clone este repositório.

```bash
## Frontend

# Entre na pasta
$ cd Test-tmdb

# Instale as dependências
$ yarn

# Execute aplicação
$ yarn dev

```
## 💾 Variáveis de Ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis de ambiente ao seu `.env`:

```bash
VITE_API_KEY=api_key=b5e87953700c598f59d927b45069a554
VITE_API=https://api.themoviedb.org/3/
VITE_IMG=https://image.tmdb.org/t/p/w500/
```

Obs: A key `VITE_API_KEY=api_key` é a key que foi gerada na API TMDB, essa key ficará disponível temporariamente, depois irei alterar. Sugiro que faça o cadastro gratuito no site [TMDB](https://www.themoviedb.org/?language=pt-BR) e gere uma nova key.

---

## :man: Autor

✔ By [Wellton Quirino](https://www.linkedin.com/in/welltonquirino/)
