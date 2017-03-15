# is_two_b

[![NPM Version][npm-image]][npm-url]

Check if something is 'bb'.orz



   ///////////////     ///////////_\\
               //      ||           \\
              //       ||           ||
             //        ||           ||
            //         ||           ||
           //          ||           //
          //           ||/////////_\\
         //            ||           \\
        //             ||            ||
       //              ||            ||
      //               ||            ||
     //                ||            ||
    //                 ||            ||
   ///////////////     ||/////////////

## Install
```bash
npm install is_two_b --save
```

## Usage
```javascript
var is2b = require('is_two_b');
is2b('bb').two_b(); // true
```

### 非严格模式
```javascript
is2b('b6s').unstrict().two_b(); // true
is2b('b6s').two_b(); // false
```

### 支持格式
```javascript
// String
is2b('bb').two_b(); // true

// Array
is2b(['b','b']).two_b(); // true
```

### 多语言输出
```javascript
// 原生输出
is2b('b6s').unstrict().log('pure').two_b(); // true
// 英语
is2b('b6s').unstrict().log('English').two_b(); // Congratulations, it's two B!
// 粤语
is2b('bs').unstrict().log('Cantonese').two_b(); // 对唔住，唔系两个b！
// 文言文
is2b('bs').unstrict().log('Classical_Chinese').two_b(); // 悲兮，非二b！
//韩语
is2b('b6s').unstrict().log('Korea').two_b(); // 축하해, 두 개의 b!
...
```

**支持多国语言（不断添加）**
* 英语 -- English
* 中文 -- Chinese
* 文言文 -- Classical_Chinese
* 中文繁体 -- Chinese_Traditional
* 粤语 -- Cantonese
* 韩语 -- Korea
* 法语 -- French
* 德语 -- German
* 日语 -- Japanese
* 意大利语 -- Italian
* 俄语 -- Russian
* 泰语 -- Thai
* 阿拉伯语 -- Arabic
* 芬兰语 -- Finnish

## [MIT](./LICENSE)
[npm-image]: https://img.shields.io/npm/v/is_two_b.svg
[npm-url]: https://npmjs.org/package/is_two_b
