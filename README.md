# 🧠 Teste de Estágio 

## Instruções
- Realize o git clone deste repositório
- Responda as perguntas no próprio Readme.md
- Suba o código no repositório
- Insira a mensagem retornada do servidor
- Nos envie o link do seu repositório

### Parte 1 – Conceito

Pesquise e explique com suas palavras:

- O que são WebSockets?
  __É uma tecnologia que permite criar uma conexão bidirecional e contínua do usuário com um servidor
  
- Como funcionam?
  __É iniciado, através de uma requisição HTTP, uma conexão entre o usuário e o servidor (handshake) e após ser aceita são realizadas as trocas de informações. A conexão pode ser finalizada por qualquer um dos lados
  
- Quando é melhor usar WebSockets em vez de uma API REST tradicional?
  __Quando for necessário uma coonexão em tempo real, como para chats de conversa, e que o recebimento e envio de mensagens tenha que ser rápido e feito em uma conexão contínua. APIs REST são melhores quando a comunicação é mais simples, como para fazer um cadastro de usuário

### Parte 2 – Prática

Você deve criar um pequeno script que se conecta ao **servidor WebSocket** que criamos e descobrir **qual mensagem ele está enviando**.

#### ✅ O que você deve fazer:
1. Criar um pequeno código na linguagem que preferir
2. Estabelecer a conexão com o servidor WebSocket
3. Ler a mensagem recebida
   
    __Mensagem: "Olá mundo! LTIS 2025"
  
URL do servidor: websocket-fh6l.onrender.com

### Parte 3 - 🔎 Desafio teórico: Comunicação em tempo real entre usuários
Você precisa projetar um sistema simples de mensagens em tempo real para usuários logados.

---

#### 🧩 Cenário

O sistema permite que usuários escolham um **nome de usuário** ao entrar.

As mensagens podem ser:

- **Públicas**: todos os usuários conectados recebem.
- **Privadas**: enviadas para um **usuário específico** (por exemplo: `/msg joao oi`).

Outros requisitos:

- Um mesmo usuário pode estar conectado em **vários dispositivos ou abas ao mesmo tempo**.
- Se um usuário **cair e voltar**, ele deve continuar recebendo as mensagens normalmente.

---

#### ❓ Sua tarefa (teórica)

1. Que tipo de tecnologia de comunicação você usaria para esse cenário?
   __WebSocket, já que existe comunicação bidirecional em tempo real entre o servidor e os clientes

2. Como garantiria o envio correto para:
   - Todos os usuários?
     __Através do Broadcasting, quando um usuário envia uma mensagem pública, o servidor envia essa mensagem para todos os outros usuários conectados.
     
   - Apenas um usuário específico?
     __Usando o identificador de cada usuário (nesse caso o nome), e mantendo um mapa (hash table) que associa esse identificador a um socket WebSocket específico. permitindo que o servidor envie a mensagem apenas para o socket do usuário escolhido.
     
   - Todas as sessões abertas de um mesmo usuário?
     __Quando o usuário se conecta, o servidor tem que armazenar todas as conexões WebSocket ativas para esse usuário. Fazendo com que quando o servidor receber uma mensagem destinada a esse usuário, ele pode enviar para todos os sockets WebSocket associados a esse usuário. Isso garante que todas as sessões abertas (em diferentes dispositivos ou abas) recebam as mensagens corretamente.
     
3. Existe alguma ferramenta ou biblioteca que facilitaria esse tipo de comunicação?  
   Se sim, **qual?** E **por quê?**
   __Sim, o Socket.io, ele é uma biblioteca parecida com o WebSocket, que permite criar salas para troca de mensagens, permite a reconexão de usuários e também tem gerenciamento de enventos, o que facilita a aplicação. Além de que a API do Socket.IO torna o desenvolvimento mais rápido e robusto, por conta de sua facilidade.



---

#### 🎯 Objetivo

Entender se você consegue identificar os desafios da comunicação em tempo real e pensar em soluções viáveis e escaláveis para eles.


## Boa sorte! 💻
