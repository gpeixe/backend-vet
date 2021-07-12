# Backend Clínica Veterinária
Trabalho final da disciplina de TC2 no IFSP - São Carlos

## Rotas relacionadas a autenticação:

### Cadastro (Sign Up): 
[POST] https://backend-tc2-peixe.glitch.me/api/signup (A senha cadastrada é criptografada com a biblioteca bcrypt antes de ser registrada no banco de dados)

Parâmetros obrigatórios em JSON no body da requisição:

 {
  "name": "Nome para cadastrar",
	"email": "Email para utilizar no login", 
	"password": "Senha para utilizar no login",
  "passwordConfirmation": "Confirmação da senha"
}

### Login:

Parâmetros obrigatórios em JSON no body da requisição:

 {
  "email": "Email utilizado no cadastro",
  "password": "Senha utilizada no cadastro"
}

[POST]  https://backend-tc2-peixe.glitch.me/api/login

## Rotas relacionadas aos pets (todas as rotas precisam do header x-access-token setado com o token retornado na rota de login):

###  Listagem de todos os pets cadastrados na clínica: 
[GET] https://backend-tc2-peixe.glitch.me/api/pets

### Cadastrar um pet na clínica:
[POST]  https://backend-tc2-peixe.glitch.me/api/pets

Parâmetros obrigatórios em JSON no body da requisição:

 {
	"name": "Nome do pet", 
	"age": 15, 
	"color": "Cor do pet", 
	"breed": "Raça do pet", 
	"weight": 0.300, 
	"owner": "Dono do pet", 
	"description": "Descrição do pet", 
	"petPhotoUrl": "URL da foto do pet"
}

### Atualizar um pet da clínica:
[PUT] https://backend-tc2-peixe.glitch.me/api/pets/:id

Parâmetros que podem ser alterados em JSON no body da requisição:

 {
	"name": "Nome do pet", 
	"age": 15, 
	"color": "Cor do pet", 
	"breed": "Raça do pet", 
	"weight": 0.300, 
	"owner": "Dono do pet", 
	"description": "Descrição do pet", 
	"petPhotoUrl": "URL da foto do pet"
}

### Deletar um pet da clínica:
[DELETE] https://backend-tc2-peixe.glitch.me/api/pets/:id
