
注释中指定额外的全局变量，false表明变量只读
/* global var1, var2 */
/* global var1:false, var2:false */

忽略 no-undef 检查
/* eslint-disable no-undef */

忽略 no-new 检查
/* eslint-disable no-new */


文件中关闭验证
/*eslint-disable */
alert('foo');
/*eslint-enable */

文件中指定规则不验证
/*eslint-disable no-alert, no-console */
alert('foo');
console.log('bar');
/*eslint-enable no-alert */
