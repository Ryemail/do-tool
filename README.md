## 方法总结

### 方法

| 方法名       | 参数类型                  | 参数说明                                                                     |
| ------------ | ------------------------- | ---------------------------------------------------------------------------- |
| dateFormat   | (date,string)             |                                                                              |
| arrayToTree  | string                    | 解析传入的 url 组成 object 并返回                                            |
| parseEqual   | (object,object)           | 检测两个对象值是否相等                                                       |
| parseQuery   | string                    | 将 url 地址解析为 json                                                       |
| parseObject  | object                    | 将 object 地址解析为 url                                                     |
| parseKeys    | (object,string)           | 第一个参数为 object,第二个参数为 string，例如'a.b.c',则返回 object[c]的值    |
| formatNumber | (string,'number'/'digit') | string 为传入的值，number/digit 为格式类型                                   |
| getType      | any                       | 返回传入参数的数据类型                                                       |
| checkType    | (any)(string)             | any 为传入的数据，string 为要检验的数据格式，如 checkType('ruany')('string') |
| regEx        | \_                        | regEx 为一个 json 对象，内含手机号、email、身份证号正则                      |
| regMobile    | any                       | 匹配是否是符合手机号规则                                                     |
| regEmail     | any                       | 匹配是否是符 emial 规则                                                      |
| regCard      | any                       | 匹配是否是符合身份证规则                                                     |
| clone        | any                       | 返回传入参数的复制体                                                         |
| compare      | (object,object)           | 比较两个 json 的值是否相等                                                   |

### 下载

```
npm install do-tool
```

### 使用

#### 1.ES Module

```
import doTool from 'do-tool'

doTool.clone(param)
```

#### or

```
import {clone} from 'do-tool'

clone(param)
```

#### 2.require

```
const doTool = require('do-tool')

doTool.clone()
```

#### 3.browser

```
请确保文件文件引入地址正确
<script src="to/path/dist/umd.js"></script>
<script>
    $doing.clone(param)
</script>
```
