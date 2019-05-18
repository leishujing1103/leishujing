前端安全
表单相关
form -> onsubmit -> url
POST data:{email:'zm@163.com',password:'123456'}

后端 登入过程有一个 sql 查找的过程
sql 语法报错，服务器出错

用户的输入不可信任
password' sql 的提前结束或多了一个' 500 编码解码
登录账号
SELECT * from users
    WHERE email = 'user@email.com'
    AND password = 'password%27'