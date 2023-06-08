const express = require('express')
const cors = require('cors')
const axios = require('axios');


const app = express()

app.listen(5500, () => console.log('Rodando na porta 5500'))

app.use(cors())

app.use(express.json())

let users = [{
}]

// Listo os usuarios favoritos
app.route('/users').get((req, res) => res.json({
  users
}))

function verificarUsername(users, username) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return true; // O username foi encontrado no array users
      }
    }
    return false; // O username não foi encontrado no array users
  }

// Adicio um usuario a lista de favoritos
app.route('/users/:username').post((req, res) => {
  const userName = req.params.username

  if(verificarUsername(users, userName) === false){
    if(users.length <= 5){
        //const lastId = users[users.length + 1].id
        function usuarioGitHub(){
        return axios.get(`https://api.github.com/users/${userName}`)
        }

        dados = usuarioGitHub();

        dados.then(function(resposta){
            
            users.push({
                username: resposta.data.login,
                nome: resposta.data.name,
                avatar: resposta.data.avatar_url,
                url: resposta.data.html_url
            })
        })
        res.status(201).json('Usuario adicionado')
        }else{
            res.status(400).json('Voce so pode adicionar 5 usuarios a lista de favoritos')
        }
    }else{
        res.status(400).json('Voce nao pode adicionar o mesmo usuario a lista')
    }
})

// Deleto um usuario dos favoritos
app.route('/users/:username').delete((req, res) => {
  const userName = req.params.username

  users = users.filter(user => (user.username) !== (userName))

  res.json('Usuario deletado')
})