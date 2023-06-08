const axios = require('axios');
const { response } = require('express');

module.exports = {
    async pesquisarPerfilGitHub(req, res){
        const { name } = req.params;

        await axios.get('https://api.github.com/users/'+ name).then(function(resposta){
            console.log(resposta.data);
        }).catch((err) => {
            res.json({msg: "Perfil nao encontrado! " + err});
        })
    }
}