<h1>Projeto criado junto com a JORNADA FULLSTACK da Ebac</h1>
Para escolha do nosso projeto pegamos como base o TikTok, onde iremos fazer um clone deste app.

Para preparar o ambiente de desenvolvimento, instalamos o `node` para podermos criar nosso projeto com o `react`.

Após ter instalado o `node`, partimos para a criação do nosso projeto com o `react` rodando o comando npx `create-react-app tiktok` e verificamos se tudo ocorreu certo com a instalação, rodando o servidor com o comando `npm start`.

Instalamos algumas extensões no nosso VS Code para nos auxiliar durante o projeto:

HTML CSS support
JavaScript (ES6) code snippets
Material Icon Theme
ES7+ React/Redux/React-Native snippets
Prettier - Code formatter
Começando o projeto
Para iniciarmos nosso projetos excluimos alguns arquivos que não serão necessarios, como por exemplo os arquivos `setupTests.js`, `reportWebVitals.js`, `logo.svg` e `App.test.js`.

<h2>Começando o Projeto</h2>

Após ter feito isso corrigimos alguns erros de importação e partimos para o desenvolvimento.

Começamos então preparando nossa estilização para o nosso clone e arquitetura de nosso html.

Trecho da estilização no arquivo `App.css`
![TT](https://github.com/mathdev11/CloneTT/assets/128558734/1274836e-75bd-47c5-87c7-19228316fe82)
![TT2](https://github.com/mathdev11/CloneTT/assets/128558734/a91126b2-47c2-45a2-9abb-70d3489df98a)

Trecho da arquitetura do html no arquivo `App.js`
![TT](https://github.com/mathdev11/CloneTT/assets/128558734/4eeecb6c-c2fc-497b-b712-614c2e6a4481)

<h2>Criando componente</h2>

Após estilizar e arquitetar nosso arquivo `App.js`, criamos nosso primeiro componente para a exibição de nossos videos. Dentro da pasta src criamos outra pasta chamada pages e os arquivos `video.js` e `video.css`.

Aqui vai um trecho do nosso arquivo `video.css`
![TT2](https://github.com/mathdev11/CloneTT/assets/128558734/86eddb20-7834-4fc0-af63-bc5d5d1f6ebd)

e também de nosso arquivo `video.js`
![TT3](https://github.com/mathdev11/CloneTT/assets/128558734/8ca4e357-a165-40a3-9bdc-3cf1386dba17)

Para criarmos a funcionalidade de nossos videos de _play_ e _pause_ temos que criar uma referencia, e para isso foi instanciado a variavel `videoRef` com o ReactHook `useRef` e para a funcionalidade usamos o useState com as variaves _play_ e _setPlay_.

Após ter instanciados nossa variaves de referencia e funcionalidade, criamos a função `handdleStart()`, para de fato mudarmos o estado de play e pause de nosso video.

<h2>Fazendo o footer do video</h2>

Para criamos o footer de nosso video, criamos mais um componente chamado `VideoFooter` dentro das pastas `components\footer`.

E inserimos dentro do componente `Video`
![t4](https://github.com/mathdev11/CloneTT/assets/128558734/99c914e5-55de-464b-b5f6-86d41a55852f)
![Captura de tela 2023-06-28 211210](https://github.com/mathdev11/CloneTT/assets/128558734/ee29c793-eae5-428e-ab57-d5c4e5fd7193)

A estrutura do nosso componente `VideoFooter` ficou deste jeito

![yy64](https://github.com/mathdev11/CloneTT/assets/128558734/bc3af38c-8362-4964-b2e8-d45f27278dc8)

Criamos a animação do texto saindo da direita para a esquerda com os `@keyframes` e também a imagem do vinil girando. Para alterarmos o fundo da imagem do vinil usamos o seguinte código dentro do css:
![q1](https://github.com/mathdev11/CloneTT/assets/128558734/2913ea3a-847d-42b6-8280-355ff3019271)

e assim ficou nosso arquivo `VideoFooter.css`
![q2](https://github.com/mathdev11/CloneTT/assets/128558734/390e4ee1-e842-41fd-b624-44f485d82d0d)
![q3](https://github.com/mathdev11/CloneTT/assets/128558734/6eaf99ad-3a1e-4572-8be3-818ac9060730)

<h2>Criando a SideBar do video</h2>

Começamos criando mais uma pasta dentro da pasta **components** chamada de `sidebar` seguido dos dois arquivos `VideoSideBar.js `e `VideoSideBar.css.`

Importamos alguns icones do_ Material Icons_ para a criação dos icones do nosso side bar:
![q1](https://github.com/mathdev11/CloneTT/assets/128558734/5c645502-4834-41e3-bd0d-396a9ec2a5c9)

E assim ficou a estrutura do arquivo `VideoSideBar.js`
![q2](https://github.com/mathdev11/CloneTT/assets/128558734/23288a97-713e-4745-b50b-e13d428385b1)
![q3](https://github.com/mathdev11/CloneTT/assets/128558734/88ca3420-3e35-451c-a7fa-99c4088d78a9)

Observe que usamos operadores ternarios para a exibição de icones e quantidade de likes. Criamos a função` handdleLikee()` para a aletaração dos icones "curtido" e "não curtido".

Adicionamos props ao nosso componente onde passamos diretamente do nosso App.js para o componente Video e assim para os componentes `VideoSideBar` e `VideoFooter`.

<h2>Componente App</h2>

![q1](https://github.com/mathdev11/CloneTT/assets/128558734/983eab7b-ce31-4dd3-b801-1e2c87fe0d41)

<h2>Componentes VideoSideBar e VideoFooter</h2>

![q2](https://github.com/mathdev11/CloneTT/assets/128558734/b1d883f5-2a21-4f7e-b9d0-46c67fe90c5f)

Após estes passos criamos então nossa estilização
![q3](https://github.com/mathdev11/CloneTT/assets/128558734/0866b56a-0769-43e5-b306-0e5a7ef1f592)

<h2>Conectando com o banco de dados</h2>

Com nosso front-end pronto, partimos para a criação e conexão com o banco de dados. Como escolha para o banco de dados nesse projeto foi escolhido o **Firebase**.

Optei para não mostrar o passo a passo da criação do banco de dados para não ficar muito extenso este README, mas recomendo entrar no link do [Firebase](https://firebase.google.com/docs/web/setup?hl=pt-br) e seguir a documentação para a criação do BD.

Com nosso banco de dados criado, criamos a pasta config dentro da pasta src e criamos o arquivo `firebase.js.` Por questão de segurança, não irei colocar o código da configuração do banco de dados, mas recomendo novamente para seguir a documentação do [Firebase](https://firebase.google.com/docs/web/setup?hl=pt-br).

Feito toda a criação e configuração do nosso banco de dados, iremos fazer algumas modificações dentro do `App.js`.
![q1](https://github.com/mathdev11/CloneTT/assets/128558734/b6166641-7d2d-410a-81c6-36d13d180522)
![q2](https://github.com/mathdev11/CloneTT/assets/128558734/115f3de4-ce14-4aec-9c4b-0a3e24f132d5)

Fizemos duas novas importações para conseguirmos acessar os dados do BD.
![q3](https://github.com/mathdev11/CloneTT/assets/128558734/f78df5ee-3a29-4263-bae5-2e7be3edaf01)

A primeira mudança começa com a instanciação do `useState` com está linha de código `const [videos, setVideos] = useState([]);`. Com isso conseguimos criar uma lista dos dados de nossos videos puxados do Firebase.

Logo após isto criamos a função` getVideos()` para pegarmos os dados do nosso banco de dados e passar para o `setVideos().`

Usamos o `useEffect() `para assim que atualizarmos nossa página ele já puxar todos os nossos videos e fazer a rederização com o `videos.map() `e assim passarmos toda as informações necessarias dentro do componente` <Video />`.
![q4](https://github.com/mathdev11/CloneTT/assets/128558734/d7c2f581-38f5-4a11-aa32-e011dfdd5bfb)

Fizemos algumas alterações na estilização do nosso projeto, para que fique compativel com o Mobile.

Alteração no `App.css`
![q5](https://github.com/mathdev11/CloneTT/assets/128558734/0bc16278-8398-429c-8d0b-2d1f37f83fa6)

Alteração no `VideoFooter.css`
![q6](https://github.com/mathdev11/CloneTT/assets/128558734/a3bf1fdd-e8be-4993-8e7b-6b3ea25b04b8)

Alteração no `VideoSideBar.css`
![q7](https://github.com/mathdev11/CloneTT/assets/128558734/d2b1be02-ecfe-4711-91bf-a74ad036bc65)

Após feito estas alterações, fizemos o deploy do nosso projeto.








