import express from 'express';
const router = express.Router();


import { createUser , updateUser, getAllUsers , getSingleUser, deleteUser} from '../controller/user.controller.js';



router.post('/', createUser);
router.put('/:id', updateUser);
router.get('/all', getAllUsers);
router.get('/:id', getSingleUser);
router.delete('/:id',deleteUser);


export default router;

