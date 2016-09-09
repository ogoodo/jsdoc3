


// 类的回掉函数写法
// 参考 http://usejsdoc.org/tags-callback.html
// 参考 https://github.com/jsdoc3/jsdoc/issues/260
// 参考: http://usejsdoc.org/tags-typedef.html
/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} Requester~Triforce
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */
/**
 * 这里是构造函数描述A class for granting wishes, powered by the Triforce.
 * @class
 * @classdesc 这里是类描述
 * @param {...Requester~Triforce} triforce - One to three {@link Requester~Triforce} objects
 * containing all three components of the Triforce.
 */
function Requester() {
	/**
	 * 类的成员变量
	 * @member {Object}
	 */
	this.point = {};
}

/**
 * 定义一个回调给Requester类使用
 * This callback is displayed as part of the Requester class.
 * @callback Requester~requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
/**
 * 类回调函数Send a request.
 * @param {Requester~requestCallback} cb - The callback that handles the response.
 */
Requester.prototype.sendA = function(cb) {
};

// 全局 回调函数写法
/**
 * This callback is displayed as a global member.
 * @callback requestCallbackGlobal
 * @param {number} responseCode
 * @param {string} responseMessage
 */
/**
 * 全局回调Send a request.
 * @param {requestCallbackGlobal} cb - The callback that handles the response.
 */
Requester.prototype.sendB = function(cb) {
};
