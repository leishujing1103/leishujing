const htmlStr = '<p><em>lorm</em><strong>ipsum</strong></p>';
// lorem ipsum strip tags
// 正则  replace splice  规则
const stripHTMLTAGS = str => str.replace(/<[^>]*>/g, '');
// 范围匹配  [] 
// 取非>  ^>
// 贪婪（多次）匹配  *
// g 全局