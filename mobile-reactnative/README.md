
<h1 align="center">NLW Heat - React Native</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">
  <img src="https://img.shields.io/static/v1?label=NLW&message=Heat&color=8257E5&labelColor=000000" alt="NLW Heat" />
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/docs/intro/)

## 🚀 Como executar

> Obs.: Nesse projeto temos autenticação via OAuth com o GitHub toda feita no backend. Alem disso, o backend é responsável por trazer os dados do banco SqLite, que serão renderizados. [Acesse aqui o backend-node](https://github.com/marciobezerrajr/NLW-Heat/tree/main/backend-node.)

- Clone o repositório e acesse a pasta;
- Faça uma copia do arquivo `.env.example` para `.env` e preencha com as suas credenciais do GitHub;
- Instale as dependências com `yarn`;
- Inicie o servidor do backend via `yarn dev`.
- Inicie a aplicação com o comando `Expo Start. - Você pode iniciar a aplicação através de um emulador android ou pode realizar o download do Expo Go para seu smartphone e fazer  leitura do qrcode gerado com o smartphone para começar a rodar a aplicação.

Obs: Caso tenha problema paga rodar a aplicação com o Expo Go,através da rede Lan ou da Local, provavelmente o problema se trada do firewall, então é só liberar a porta na qual o expo startou (no meu caso porta 19000 e 19001) nos protocolos TCP e UDP e ser feliz :D

A aplicação pode ser acessada normalmente em [`localhost:19000`](http://localhost:19000). Mas é só conferir na página aberta após rodar `expo start`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ♥ by Rocketseat 👋🏻 &nbsp;[Participe da nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
