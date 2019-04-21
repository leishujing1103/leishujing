// 对象 林 gaodeMap 
const googleMap = {
    show () {
        console.log('开始渲染GOOGLE地图');
    }
}
const baiduMap = {
    // 为互换做准备
    show () {
        console.log('开始渲染百度地图');
    }
}
const gaodeMap = {
    // 为互换做准备
    show () {
        console.log('开始渲染高德地图');
    }
}
const sosoMap = {
    // 为互换做准备
    // show () {
    //     console.log('开始渲染搜搜地图');
    //}
}
/**
 * 
 * @param {object} map 
 */
const renderMap = (map) => {
    // map 检测 方法一
    // if (map.show && typeof map.show === 'function') {
    // map.show();
    // }
    
    // map 检测 方法二
    if (map.show && map.show instanceof Function) {
        map.show();
    }

    // googleMap.show();
    // 分支太多
    // if (type === 'baidu')
    //     baiduMap.show();
    // else if (type === 'google')       
    //     googleMap.show()
    // else if (type === 'gaode')
       
}

renderMap(googleMap);
renderMap(baiduMap);
renderMap(gaodeMap);
renderMap(sosoMap);