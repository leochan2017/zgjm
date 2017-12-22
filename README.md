# 微信小程序: 周公解梦境


# 扫码体验
![QR CODE](https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/logo/gh_54e23eb8715a_258.jpg?raw=true)


# 界面截图
### 首页
![截图1](https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/%E6%88%AA%E5%9B%BE/1.png?raw=true)

### 结果页
![截图2](https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/%E6%88%AA%E5%9B%BE/2.png?raw=true)

### 类别页1
![截图3](https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/%E6%88%AA%E5%9B%BE/3.png?raw=true)

### 类别页2
![截图4](https://github.com/leochan2017/zgjm/blob/master/%E7%B4%A0%E6%9D%90/%E6%88%AA%E5%9B%BE/4.png?raw=true)


# 下面的忽略，作者用。。。

### 提取组集合

```
var arr = [];

for (i of dreamsData) {
	arr.push(i.group)
}

[...new Set(arr)];

```

### 提取标题集合

```

var groupArr = [];

for (i of dreamsData) {
    groupArr.push(i.group);
}

groupArr = [...new Set(groupArr)];

var bigTiteList = [];

for (itemGroup of groupArr) {
    var itemTitleList = [];
    for (j of dreamsData) {
        if (j.group == itemGroup) {
            itemTitleList.push(j.title);
        }
    }

    itemTitleList = [...new Set(itemTitleList)];

    bigTiteList.push(itemTitleList);
}

bigTiteList = [...new Set(bigTiteList)];

JSON.stringify(bigTiteList);

```
