const middleware = {}

middleware['authorized'] = require('../middleware/authorized.js')
middleware['authorized'] = middleware['authorized'].default || middleware['authorized']

middleware['guest'] = require('../middleware/guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
