// articleRoutes.js

const express = require('express');
const router = express.Router();
const Article = require('../models/ArticleModel');

// Get All Articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Article by Id
router.get('/:id', getArticle, (req, res) => {
    res.json(res.article);
});

// Create New Article
router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content,
        publicationDate: req.body.publicationDate,
        tags: req.body.tags
    });
    try {
        const newArticle = await article.save();
        res.status(201).json(newArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update Article
router.put('/:id', getArticle, async (req, res) => {
    if (req.body.title != null) {
        res.article.title = req.body.title;
    }
    if (req.body.content != null) {
        res.article.content = req.body.content;
    }
    if (req.body.publicationDate != null) {
        res.article.publicationDate = req.body.publicationDate;
    }
    if (req.body.tags != null) {
        res.article.tags = req.body.tags;
    }
    try {
        const updatedArticle = await res.article.save();
        res.json(updatedArticle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Article
router.delete('/:id', getArticle, async (req, res) => {
    try {
        await res.article.remove();
        res.json({ message: 'Article deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getArticle(req, res, next) {
    let article;
    try {
        article = await Article.findById(req.params.id);
        if (article == null) {
            return res.status(404).json({ message: 'Article not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.article = article;
    next();
}

module.exports = router;
