# API feita para a criação de uma lista de usuários favoritos do GitHub - Desafio Puma

## Link do desafio: https://github.com/jsfelix/puma-code-challenge

Nesta aplicação foram implementadas as seguintes funcionalidades: Adicionar usuarios a lista de favoritos, Listar usuarios adicionados a lista de favoritos e Remover usuarios adicionados na lista de favoritos.

## Tecnologias Utilizadas

- Node.js v18.12.1

- Postman v10.12.0

## Dependências

- Express v4.18.2

- Axios v1.4.0

- Cors v2.8.5

- Nodemon v2.0.22

## Guia 

1. É necessário clonar o repositório com o comando `git clone https://github.com/Cleberbrant/puma.git` 
2. Entrar no diretório do projeto com `cd backend (para windows)`
3. Instalar todas as dependências utilizando `npm install`
4. Recomendo instalar o nodemon, utilizando `npm install nodemon`
5. Após isso rodar a aplicação utilizando(node) `npm run start`
6. Ou se não, rodar a aplicação em dev(nodemon) utilizando `npm run dev`

## Arquitetura

Não consegui fazer uma API Restfull nativamente como deve ser feita nos padrões de hoje em dia, porém, com simplicidade foi feita uma API para conseguirmos pelo parâmetro do nosso Post, executar com o axios um Get na API do GitHub, trazendo assim os dados do Username buscado com seu respectivo HTTB Verbo. Após isso, é injetado no array users para criar a lista dos favoritos.

- Listagem dos favoritos - GET: http://localhost:5500/users/

    - Em caso de sucesso, retorna todos os usuarios cadastrados com os respectivos parâmetros em formato JSON: (username, nome, avatar e url)

- Adicionar na lista de favoritos por username - POST: http://localhost:5500/users/(Username_do_Github)

    - Em caso de sucesso, adiciona o username digitado na lista, com limite maximo de 5 usuarios, capturando seus respectivos parâmetros em formato JSON: (username, nome, avatar e url).

    - Em caso de limite excedido é retornado erro.

- Remover da lista de favoritos por username - DELETE: http://localhost:5500/users/(Username_do_Github)

    - Em caso de sucessso, remove o username digitado da lista.

## Padrão de commits

Foi utilizado o padrão Conventional Commits, sendo os mais usados:

    - chore: Atualização de tarefas que não ocasionam alteração no código de produção, mas mudanças de ferramentas, mudanças de configuração e bibliotecas.

    - feat: São adições de novas funcionalidades ou de quaisquer outras novas implantações ao código.

    - refactor: Utilizado em quaisquer mudanças que sejam executados no código, porém não alterem a funcionalidade final da tarefa impactada.

    - docs: Inclusão ou alteração somente de arquivos de documentação.

## Creditos

Essa API foi desenvolvida e documentada por Cleber Brant, no dia 08/06/2023, sendo que inicialmente em outro repositório, houve a tentativa de um projeto com mais qualidade em relação a Clean Architecture e Disign Patterns, porém, devido ao tempo, não foi possivel desta vez, porém, será continuado.
link do outro repositório: https://github.com/Cleberbrant/puma-desafio
