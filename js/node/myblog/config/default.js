module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000  //有效期
    },
    mongodb: 'mongodb://localhost:27017/myblog'
}