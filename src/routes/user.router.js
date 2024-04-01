import { Router } from 'express';

import { getUsers, putUser, postUser, deleteUser } from '../controllers/user.controller.js';

export const router = Router();


router.get('/', getUsers );

router.put('/:id', putUser );

router.post('/', postUser );

router.delete('/', deleteUser);