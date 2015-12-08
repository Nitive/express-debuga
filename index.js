var path = require('path')

var debuga = function(options) {
	return function (req, res, next) {
		options = options || {}
		options.favicon = options.favicon || 'debug.ico'
		if (req.path === '/favicon.ico') {
			res.sendFile(path.join(__dirname, options.favicon))
		} else {
			next()
		}
	}
}

module.exports = debuga
