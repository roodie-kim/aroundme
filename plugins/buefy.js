import Buefy from 'buefy'
import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import { faTimesCircle, faCheck, faExclamationCircle, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimesCircle, faCheck, faExclamationCircle, faPen)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
})
