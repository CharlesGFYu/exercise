module.exports = {
	// eslint默认配置可以上对应官网查看,也可以进入node_modules里查看默认配置,例如node_modules/eslint-config-airbnb-base/rules/
	// eslint: https://eslint.org/docs/rules/
	// eslint-plugin-react: https://github.com/yannickcr/eslint-plugin-react
	// eslint-plugin-jsx-a11y: https://github.com/evcohen/eslint-plugin-jsx-a11y
	// eslint-plugin-import: https://github.com/benmosher/eslint-plugin-import
	// airbnb: https://github.com/airbnb/javascript
	extends: 'airbnb',
	parser: 'babel-eslint',
	rules: {
		'linebreak-style': 0,                       // 不关心换行符是\n还是\r\n
		'no-plusplus': 0,                           // 允许自增自减: i++、i--
		'no-underscore-dangle': 0,                  // 允许下划线变量
		'class-methods-use-this': 0,                // class里的方法必须用this，太麻烦
		'no-script-url': 0,                         // 允许a标签用href="javascript:;"的写法
		'no-console': 0,                            // 允许使用console
		'no-alert': 0,                              // 允许使用alert
		'comma-dangle': 0,                          // 不要求对象中出现结尾逗号
		'max-len': ['error', 100, 2, {              // 每行长度限制100, 但不限制url、注释、正则表达式、字符串、模板的长度
			ignoreUrls: true,
			ignoreComments: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],
		'react/jsx-filename-extension': 0,          // 不关心js的扩展名
		"react/prefer-stateless-function": 0,       // 太严,react组件不一定要写成纯函数的形式
		'react/jsx-one-expression-per-line': 0,     // jsx每行都必须是个表达式，会很麻烦，比如：<p>哈哈</p>必须写成<p>{'哈哈'}</p>
		'jsx-a11y/anchor-is-valid': 0               // 允许a标签用onClick
	},
	env: {
		browser: true
	}
};
