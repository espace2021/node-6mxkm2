import express from 'express';

import { getCategories, getCategorieByID, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categories.js';

const router = express.Router();
/**
 * @route   GET /api/categories
 * @desc    Get All categories
 * @access  Public
 */
router.get('/', getCategories);


router.post('/', createCategorie);
router.get('/:id', getCategorieByID);
router.patch('/:id', updateCategorie);
router.delete('/:id', deleteCategorie);


export default router;