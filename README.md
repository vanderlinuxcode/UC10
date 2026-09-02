# Projeto Login

Projeto educacional de uma tela de login, desenvolvido para ajudar pessoas iniciantes a entender como **HTML**, **CSS** e **JavaScript** trabalham juntos em uma página web.

## O que o projeto faz

A aplicação apresenta um formulário no qual o usuário pode:

- informar um e-mail e uma senha;
- mostrar ou ocultar a senha digitada;
- enviar o formulário;
- receber uma mensagem de sucesso ou de erro.

Para entrar, utilize as credenciais de demonstração:

```text
E-mail: usuario@teste.com
Senha: 123456
```

> **Importante:** este é um projeto apenas para estudo. As credenciais estão escritas diretamente no JavaScript e não existe servidor nem banco de dados. Esse método não deve ser usado em uma aplicação real.

## Tecnologias utilizadas

- **HTML5:** cria a estrutura da página e do formulário.
- **CSS3:** define as cores, o espaçamento, a responsividade e a aparência dos elementos.
- **JavaScript:** valida as credenciais, mostra as mensagens e controla a exibição da senha.
- **Jest:** executa os testes automatizados da função de login.

## Estrutura dos arquivos

```text
projeto-login/
├── index.html       # Estrutura da página
├── style.css        # Estilos visuais
├── login.js         # Regras e interações do login
├── login.test.js    # Testes automatizados
├── package.json     # Configuração e dependências do projeto
├── package-lock.json
└── README.md        # Documentação do projeto
```

## Como executar o projeto

### Opção simples

1. Baixe ou copie a pasta do projeto.
2. Abra a pasta no computador.
3. Dê dois cliques no arquivo `index.html`.
4. O formulário será aberto no navegador.

### Usando o Visual Studio Code

1. Abra a pasta do projeto no Visual Studio Code.
2. Abra o arquivo `index.html`.
3. Se tiver a extensão **Live Server**, clique com o botão direito no arquivo e escolha **Open with Live Server**.

O Live Server é opcional. O projeto também pode ser aberto diretamente no navegador.

## Como o código funciona

### 1. Estrutura da página

O arquivo `index.html` contém os campos de e-mail e senha, o botão **Entrar**, o botão **Mostrar** e a área usada para exibir mensagens.

### 2. Aparência

O arquivo `style.css` centraliza o formulário, estiliza o cartão de login e adapta o espaçamento para telas menores.

### 3. Validação do login

No arquivo `login.js`, a função `login(email, senha)` compara os valores digitados com as credenciais de demonstração.

- Se os dois valores estiverem corretos, a função retorna `true`.
- Se algum valor estiver incorreto, a função retorna `false`.

O JavaScript também usa `event.preventDefault()` para impedir que a página recarregue quando o formulário é enviado.

### 4. Mostrar ou ocultar a senha

Ao clicar no botão **Mostrar**, o tipo do campo muda de `password` para `text`. Ao clicar em **Ocultar**, ele volta para `password`.

## Testes automatizados

Para trabalhar com os testes, é necessário instalar o [Node.js](https://nodejs.org/) no computador.

Depois, abra um terminal dentro da pasta do projeto e execute:

```bash
npm install
```

Esse comando instala o Jest e as demais dependências registradas no `package.json`.

Para executar os testes, use:

```bash
npm test
```

Os testes do arquivo `login.test.js` verificam situações como credenciais corretas, senha incorreta e e-mail incorreto.

## Ideias para continuar aprendendo

- adicionar uma mensagem quando os campos estiverem vazios;
- criar uma opção de “lembrar-me”;
- adicionar uma página de cadastro;
- validar a força da senha;
- integrar o formulário com uma API e um banco de dados;
- melhorar os testes automatizados.

## Autor

**Prof. Hudson Neves**
# UC10
# UC10
