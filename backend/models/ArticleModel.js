const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    publicationDate: Date,
    tags: [String]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
