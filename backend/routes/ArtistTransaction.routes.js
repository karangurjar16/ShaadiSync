const express = require('express');
const router = express.Router();
const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  getTotalDebitedAmount,
  deleteTransaction,
  getTransactionsByArtist,
  getArtistSpendingSummary
} = require('../controllers/ArtistTransaction.controller');

const {authMiddleware} = require("../middleware/authmiddleware");
const {isAdminMiddleware} = require("../middleware/adminmiddleware")

router.post('/', authMiddleware, createTransaction); // Create new transaction
router.get('/artist/myTransaction', authMiddleware, getTransactionsByArtist); // Get transactions by artist

router.get('/', authMiddleware, isAdminMiddleware, getAllTransactions); // Get all transactions

router.get('/:id', authMiddleware, getTransactionById); // Get transaction by ID

router.get('/artist/list', authMiddleware, getArtistSpendingSummary); // Get total debited amount
router.get('/total-debited-amount/amount', authMiddleware, getTotalDebitedAmount); // Get total debited amount

// router.delete('/:id', authMiddleware, deleteTransaction); // Delete transaction (No one should be able to delete transactions)

module.exports = router;
