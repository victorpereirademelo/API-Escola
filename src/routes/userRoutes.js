import express from "express";

import UserController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = express.Router();

// Não deveria existir
// router.get('/', UserController.index); // Lista Usuários
// router.get('/:id', UserController.show); // Lista Usuário

// Deve existir
router.post('/', loginRequired, UserController.create);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;

/*
* index/read -> lista todos os usuários -> GET
* store/create -> cria um novo usuário -> POST
* delete -> apaga um usuário -> DELETE
* show -> mostra um usuário -> GET
* update -> atualiza um usuário -> PATCH ou PUT
*/