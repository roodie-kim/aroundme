import moment from 'moment'

import 'moment/locale/ko'

moment.locale('ko')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
