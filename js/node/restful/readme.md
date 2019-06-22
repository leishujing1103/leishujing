- json 格式是标准的数据交换
- 前后端开发  /api  json格式来交流
- 全栈 fullstack

- restful 一切皆资源
  暴露资源
- 设计良好的URL
  /posts  拿到所有的文章
  /posts/:id
  /comments
  /comments/:id
  /post/1/comments 某篇文章的所有评论

HTTP 动词
GET  查询
加一条评论  增加一个资源   
POST 提交一个表单到 /comments
DELETE 动词  /posts/2
PUT 修改  /comments/2  body 最美不过下雨天，是与你...
PUT 把全新的所有的内容，去替换掉旧的内容
PATCH 只要传递更新的字段，局部

- restful 考点
  认为一切皆资源，URL是唯一定位自愿的符号，他有一定的设计原则
  HTTP动词是web资源的状态转换动词

操作              SQL方法              HTTP动词
CREATE            INSERT               POST
READ              SELECT               GET
UPDATE            UPDATE               PUT/PATCH
DELETE            DELETE               DELETE