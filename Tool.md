## 提取组集合

```
var arr = [];

for (i of dreamsData) {
    arr.push(i.group)
}

[...new Set(arr)];

```

## 提取标题集合

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