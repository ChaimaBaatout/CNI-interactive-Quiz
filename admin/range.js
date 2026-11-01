module.exports = (req, res, next) => {
    res.header('Content-Range', 'Enseignants 0-20/20')
    next()
}