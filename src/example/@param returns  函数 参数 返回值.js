



//参数定义
/**
 * @param {?number} argA 数字或者null
 * @param {!number} argB 数字不能为null
 * @param {number|boolean} argBa 数字或者布尔值
 * @param {Array.<MyClass>} argBclass 数组里包含类
 * @param {number} [argC=1] 可选参数, 默认1
 * @param {number=} argD=1  可选参数, 默认1
 * @param {number} argDa=1 默认1
 * @param {String} argDb=get|post  - 必填参数, 可选值域包括get和post，get是直接请求，post是提交数据
 * @param {String} [argDc=get|post]  - 非必填参数, 可选值域包括get和post，get是直接请求，post是提交数据
 * @param {*} argE 任意类型
 * @param {...number} ... 接受可变的参数, 可能是1个, 2个, 或者更多
 * @returns {number|Array} 返回数字或者数组, 这里可以描叙
 */
function funcTest(argA, argB, argBa, argBclass, argC, argD, argDa, argDb, argDc, argE){
}


/**
 * Object参数的写法
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
funcAssignA = function(employee) {
};

/**
 * 数组对象参数写法
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
funcAssignB= function(employees) {
};

/**
 * 数组对象参数写法
 * @param {Object.<string, number>} employees - The employees who are responsible for the project.
 * @param {number} employees.name - The name of an employee.
 * @param {number} employees.department - The employee's department.
 */
funcAssignC= function(employees) {
};

/**
 * @deprecated 函数停用了, 请使用新函数代替
 */
function funcOld() {

}


