### 前端工具合集

```
##### 方法

-   克隆 clone
-   时间处理 date
-   数字格式化 number
-   字符串 json 互转 parse
-   常见正则 regexp
-   数据类型 type
-   比较json值是否相等 compare
| 方法名 | 参数  | 说明 |
| :-----| :---- | :---- |
| dateFormat|     |     |
| parseString|     |     |
| parseObject|     |     |
| parseKey|     |     |
| formatNumber|     |     |
| getType|     |     |
| checkType|     |     |
| regEx|     |     |
| regMobile|     |     |
| regEmail|     |     |
| regCard|     |     |
| clone|     |     |
| compare|     |     |

```

### 下载

```
npm install do-tool
```

### 使用

#### ES Module

```
import doTool from 'do-tool'

doTool.clone(param)
```

or
import {clone} from 'do-tool'

clone(param);

```

```

#### require

const doTool = require('do-tool')

doTool.clone()

```

```

#### browser

```
<script src="to/path/dist/umd.js"></script>
<script>
    $doing.clone(param)
</script>
```

```

```
