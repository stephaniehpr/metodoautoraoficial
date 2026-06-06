# Método Autora — Página de vendas

Página de vendas (one-page) do **Método Autora**, da Prof.ª Dra. Stephanie Ribeiro.

O site é gerado com [Eleventy](https://www.11ty.dev/) a partir de um único arquivo de conteúdo
(`src/_data/site.json`) e publicado automaticamente no **GitHub Pages** a cada alteração.

**Site no ar:** https://metodoautora.github.io/site/

## Como editar (jeito fácil, pelo navegador)

Toda a edição de textos, fotos, ícones, preço, módulos, depoimentos e FAQ é feita por um painel
amigável, sem mexer em código:

1. Acesse **https://app.pagescms.org** e entre com sua conta do **GitHub**.
2. Autorize e abra o repositório **`metodoautora/site`**.
3. Clique em **Conteúdo do site** e edite os campos (texto, fotos, preço, etc.).
4. Clique em **Save**. Em ~1-2 minutos o site no ar é atualizado sozinho.

As fotos enviadas pelo painel vão para a pasta `src/assets/`.

## Estrutura do projeto

```
metodo-autora/
├── src/
│   ├── index.njk        → template da página (estrutura/HTML)
│   ├── styles.css       → design, cores e responsividade
│   ├── script.js        → animações e links de WhatsApp/checkout
│   ├── assets/          → imagens (fotos da professora)
│   └── _data/
│       └── site.json    → TODO o conteúdo editável da página
├── .pages.yml           → configuração do painel de edição (Pages CMS)
├── .eleventy.js         → configuração do Eleventy
└── .github/workflows/
    └── deploy.yml       → publica no GitHub Pages a cada push
```

## Rodar localmente (opcional, para desenvolvedores)

```bash
npm install
npm start
```

Abra `http://localhost:8080`. Para apenas gerar os arquivos finais:

```bash
npm run build   # gera a pasta _site/
```
