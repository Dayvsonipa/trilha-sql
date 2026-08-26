# SQL do Zero ao Avançado — versão Vercel

Portal educacional de MySQL criado pelo Professor Dayvson, com dez trilhas, atividades práticas, correções, desafios e o projeto evolutivo LevelUp Store.

## Este é o pacote correto para a Vercel

Esta versão foi adaptada para o padrão Next.js reconhecido automaticamente pela Vercel. Ela não utiliza a configuração Vinext/Cloudflare do pacote original.

Não procure um `index.html`: em projetos Next.js, a página inicial é `app/page.tsx`. A Vercel transforma essa estrutura no site durante a publicação.

## Parte 1 — Enviar ao GitHub

1. Extraia o ZIP no computador.
2. Entre em [github.com](https://github.com).
3. Crie um repositório chamado `sql-do-zero-ao-avancado`.
4. Mantenha a branch `main`.
5. Dentro do repositório, clique em **Add file → Upload files**.
6. Arraste todos os arquivos e pastas que estão dentro da pasta extraída.
7. Confirme que aparecem `app`, `public`, `package.json` e `README.md`.
8. Clique em **Commit changes**.

Não envie o ZIP fechado e não envie o pacote reservado do professor.

## Parte 2 — Publicar na Vercel

1. Entre em [vercel.com](https://vercel.com).
2. Escolha **Continue with GitHub**.
3. Autorize a Vercel a acessar o repositório.
4. Clique em **Add New → Project**.
5. Localize `sql-do-zero-ao-avancado` e clique em **Import**.
6. Em **Framework Preset**, confirme `Next.js`.
7. Deixe **Root Directory** em branco.
8. Não é necessário cadastrar variáveis de ambiente.
9. Clique em **Deploy**.
10. Ao final, use o endereço terminado em `.vercel.app`.

## Atualizações futuras

Depois da conexão entre GitHub e Vercel, cada alteração enviada à branch `main` produzirá uma nova publicação automaticamente.

## Executar no computador — opcional

Pré-requisito: Node.js 22.

```bash
npm install
npm run dev
```

## Conteúdo

- Trilhas 00 a 09
- Atividades com correção após a tentativa
- Projeto LevelUp Store
- Arquivos SQL e guias para download
- Tema claro ou escuro na página inicial
- Layout responsivo para computadores e celulares

## Material reservado

Gabaritos, rubricas e planejamentos docentes não estão neste pacote público. Mantenha o ZIP do professor em armazenamento privado.
