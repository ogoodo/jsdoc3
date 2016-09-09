


/**
 * @type {number}
 * @const
 */
var FOO = 1;

/**
 * @const {number}
 */
var FOO_B = 1;

/**
 * @type {(string|Array)}
 */
var varSimple = '';

// object写法

/**
 * 推荐使用这种写法
 * @type {Object}
 * @property {number} myObjB.a 变量a的说明
 * @property {string} myObjB.b 变量b的说明
 * @property {Object} myObjB.c 变量c的说明
 */
var varObjB = {
    a: 1,
    b: '',
    c: {},
}

/**
 * 复杂对象写法
 * @type {Object}
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var varConfig = {
    defaults: {
        players: 1,
        level:   'beginner',
        treasure: {
            gold: 0
        }
    }
};

/**
 * 定义一个类型PropertiesHash
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 * @property {number} age - your age.
 */
/**
 * 用类型定义注释变量, 如果多个变量共用同一个类型比较方便
 * @type {PropertiesHash}
 */
var varProps;

/**
 * 定义回调函数
 * @callback myCallback
 * @param {number} x - 数字参数
 * @param {string} str - 字符串参数
 */
 /**
  * 说明怎么写回调函数变量
  * @type {myCallback}
  */
 var varCallback;

