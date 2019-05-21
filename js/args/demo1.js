// function information(name, sex, height, birthday, color, likes, follow, age) {
    // console.log(name, sex, height, birthday, color, likes, follow, age);
    // }
// information('雷萌萌', '女', 152, '11-3', '绿', '你懂的', ['IU'], 18);


function information(user){
    console.log(user.name)
}

let user = {"name": '雷萌萌', "sex": '女', "height": 152, "birthday": '11-3', "color": '绿', "likes": '你懂的', "follow": ['IU'], "age": 18}

information(user);