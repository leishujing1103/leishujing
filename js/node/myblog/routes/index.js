module.exports = function(app) {
    app.get('/',function(req, res) {   // 传入一个方法
        res.redirect('/')   // 发出一个跳转
    });

    app.use('/signup', require('./signup'))
    app.use('/signin', require('./signin'))
    app.use('/signout', require('./signout'))  //退出
    app.use('/posts', require('./post'))   //跳转到posts
    app.use('/comments', require('./comments'))
}