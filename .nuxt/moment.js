import moment from 'moment'

import 'moment/locale/ko'

import 'moment-timezone'

moment.locale('ko')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
