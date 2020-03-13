import Vue from 'vue'

// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (process.client) {
  window.onNuxtReadyCbs = []
  window.onNuxtReady = (cb) => {
    window.onNuxtReadyCbs.push(cb)
  }
}

export function empty () {}

export function globalHandleError (error) {
  if (Vue.config.errorHandler) {
    Vue.config.errorHandler(error)
  }
}

export function interopDefault (promise) {
  return promise.then(m => m.default || m)
}

export function applyAsyncData (Component, asyncData) {
  if (
    // For SSR, we once all this function without second param to just apply asyncData
    // Prevent doing this for each SSR request
    !asyncData && Component.options.__hasNuxtData
  ) {
    return
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () { return {} }
  Component.options._originDataFn = ComponentData

  Component.options.data = function () {
    const data = ComponentData.call(this, this)
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid]
    }
    return { ...data, ...asyncData }
  }

  Component.options.__hasNuxtData = true

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data
  }
}

export function sanitizeComponent (Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component
  }
  if (!Component.options) {
    Component = Vue.extend(Component) // fix issue #6
    Component._Ctor = Component
  } else {
    Component._Ctor = Component
    Component.extendOptions = Component.options
  }
  // For debugging purpose
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file
  }
  return Component
}

export function getMatchedComponents (route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index)
      return m[prop][key]
    })
  }))
}

export function getMatchedComponentsInstances (route, matches = false) {
  return getMatchedComponents(route, matches, 'instances')
}

export function flatMapComponents (route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index))
      } else {
        delete m.components[key]
      }
      return promises
    }, [])
  }))
}

export function resolveRouteComponents (route, fn) {
  return Promise.all(
    flatMapComponents(route, async (Component, instance, match, key) => {
      // If component is a function, resolve it
      if (typeof Component === 'function' && !Component.options) {
        Component = await Component()
      }
      match.components[key] = Component = sanitizeComponent(Component)
      return typeof fn === 'function' ? fn(Component, instance, match, key) : Component
    })
  )
}

export async function getRouteData (route) {
  if (!route) {
    return
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route)
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta, ...(route.matched[index] || {}).meta }
    })
  }
}

export async function setContext (app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: process.static,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {"npm_config_save_dev":"","npm_config_legacy_bundling":"","npm_config_dry_run":"","npm_package_dependencies__fortawesome_fontawesome_svg_core":"^1.2.26","npm_config_viewer":"man","npm_config_only":"","npm_config_commit_hooks":"true","npm_config_browser":"","npm_package_gitHead":"792de60197ec21ec7ae73cfcab36095b77ba20f7","npm_config_also":"","npm_config_sign_git_commit":"","npm_config_rollback":"true","TERM_PROGRAM":"iTerm.app","NODE":"/usr/local/Cellar/node/13.8.0/bin/node","npm_config_usage":"","npm_config_audit":"true","npm_package_dependencies_buefy":"^0.8.9","INIT_CWD":"/Users/hkahn/Documents/vue/aroundme","npm_config_globalignorefile":"/usr/local/etc/npmignore","SHELL":"/bin/bash","TERM":"xterm-256color","npm_config_shell":"/bin/bash","npm_config_maxsockets":"50","npm_config_init_author_url":"","npm_package_dependencies_nuxt_device_detect":"^1.1.5","npm_config_shrinkwrap":"true","npm_config_parseable":"","npm_config_metrics_registry":"https://registry.npmjs.org/","npm_package_devDependencies__nuxtjs_moment":"^1.6.0","TMPDIR":"/var/folders/6c/gn_jhl0563n8fwhftqwknby40000gn/T/","npm_config_timing":"","npm_config_init_license":"ISC","npm_package_dependencies__nuxtjs_axios":"^5.9.3","npm_package_scripts_lint":"eslint --ext .js,.vue --ignore-path .gitignore .","npm_config_if_present":"","TERM_PROGRAM_VERSION":"3.3.2","npm_package_scripts_dev":"nuxt","npm_config_sign_git_tag":"","npm_config_init_author_email":"","npm_config_cache_max":"Infinity","npm_package_dependencies_quill":"^1.3.7","npm_config_preid":"","npm_config_long":"","npm_config_local_address":"","npm_config_git_tag_version":"true","npm_config_cert":"","TERM_SESSION_ID":"w1t0p0:909DEAE8-C7D1-448C-92D8-114079542A1F","npm_config_registry":"https://registry.npmjs.org/","npm_config_noproxy":"","npm_config_fetch_retries":"2","npm_package_private":"true","npm_package_scripts_generate":"nuxt generate","npm_config_versions":"","npm_config_message":"%s","npm_config_key":"","npm_package_readmeFilename":"README.md","npm_package_description":"My fantastic Nuxt.js project","USER":"hkahn","npm_package_dependencies__nuxtjs_dotenv":"^1.4.1","npm_config_globalconfig":"/usr/local/etc/npmrc","npm_config_prefer_online":"","npm_config_logs_max":"10","npm_config_always_auth":"","SSH_AUTH_SOCK":"/private/tmp/com.apple.launchd.qHHXquReWv/Listeners","npm_package_devDependencies_eslint":"^6.8.0","__CF_USER_TEXT_ENCODING":"0x1F5:0x0:0x0","npm_execpath":"/usr/local/lib/node_modules/npm/bin/npm-cli.js","npm_config_global_style":"","npm_config_cache_lock_retries":"10","npm_config_update_notifier":"true","npm_config_cafile":"","npm_package_author_name":"hkahn","npm_config_heading":"npm","npm_config_audit_level":"low","npm_config_searchlimit":"20","npm_config_read_only":"","npm_config_offline":"","npm_config_fetch_retry_mintimeout":"10000","npm_config_json":"","npm_config_access":"","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"build\"],\"original\":[\"run\",\"build\"]}","npm_package_dependencies__fortawesome_free_solid_svg_icons":"^5.12.0","PATH":"/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/hkahn/Documents/vue/aroundme/node_modules/.bin:/Users/hkahn/.yarn/bin:/Users/hkahn/.config/yarn/global/node_modules/.bin:~/.composer/vendor/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin","npm_config_allow_same_version":"","npm_config_https_proxy":"","npm_config_engine_strict":"","npm_config_description":"true","_":"/Users/hkahn/Documents/vue/aroundme/node_modules/.bin/nuxt","npm_config_userconfig":"/Users/hkahn/.npmrc","npm_config_init_module":"/Users/hkahn/.npm-init.js","npm_config_cidr":"","PWD":"/Users/hkahn/Documents/vue/aroundme","npm_config_user":"","npm_config_node_version":"13.8.0","npm_package_dependencies_node_sass":"^4.13.1","npm_package_dependencies__nuxtjs_sitemap":"^2.0.1","npm_lifecycle_event":"build","npm_config_save":"true","npm_config_ignore_prepublish":"","npm_config_editor":"vi","npm_config_auth_type":"legacy","npm_package_name":"aroundme","npm_config_tag":"latest","npm_config_script_shell":"","ITERM_PROFILE":"local","npm_config_progress":"true","npm_config_global":"","npm_config_before":"","npm_package_dependencies__nuxtjs_google_gtag":"^1.0.4","npm_package_scripts_start":"nuxt start","npm_package_scripts_build":"nuxt build","npm_config_searchstaleness":"900","npm_config_optional":"true","npm_config_ham_it_up":"","XPC_FLAGS":"0x0","npm_config_save_prod":"","npm_config_force":"","npm_config_bin_links":"true","npm_package_dependencies_vee_validate":"^3.2.1","npm_package_dependencies__fortawesome_vue_fontawesome":"^0.1.9","npm_config_searchopts":"","npm_config_node_gyp":"/usr/local/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js","npm_config_depth":"Infinity","npm_config_sso_poll_frequency":"500","npm_config_rebuild_bundle":"true","npm_package_version":"1.0.0","XPC_SERVICE_NAME":"0","npm_config_unicode":"true","COLORFGBG":"15;0","HOME":"/Users/hkahn","SHLVL":"2","npm_config_fetch_retry_maxtimeout":"60000","npm_config_tag_version_prefix":"v","npm_config_strict_ssl":"true","npm_config_sso_type":"oauth","npm_config_scripts_prepend_node_path":"warn-only","npm_config_save_prefix":"^","npm_config_loglevel":"notice","npm_config_ca":"","LC_TERMINAL_VERSION":"3.3.2","npm_config_save_exact":"","npm_config_group":"20","npm_config_fetch_retry_factor":"10","npm_config_dev":"","npm_package_devDependencies_babel_eslint":"^10.0.1","npm_config_version":"","npm_config_prefer_offline":"","npm_config_cache_lock_stale":"60000","npm_package_dependencies_js_cookie":"^2.2.1","npm_config_otp":"","npm_config_cache_min":"10","ITERM_SESSION_ID":"w1t0p0:909DEAE8-C7D1-448C-92D8-114079542A1F","npm_config_searchexclude":"","npm_config_cache":"/Users/hkahn/.npm","npm_package_dependencies_sass_loader":"^8.0.2","LOGNAME":"hkahn","npm_lifecycle_script":"nuxt build","npm_config_color":"true","npm_config_proxy":"","npm_config_package_lock":"true","npm_package_devDependencies_eslint_plugin_nuxt":"^0.5.0","LC_CTYPE":"UTF-8","npm_config_package_lock_only":"","npm_config_fund":"true","npm_config_save_optional":"","npm_package_dependencies_sass":"^1.24.4","npm_config_ignore_scripts":"","npm_config_user_agent":"npm/6.14.1 node/v13.8.0 darwin x64","npm_package_devDependencies__nuxtjs_eslint_config":"^1.0.1","npm_package_dependencies_fibers":"^4.0.2","npm_config_cache_lock_wait":"10000","npm_config_production":"","npm_package_dependencies_nuxt":"^2.11.0","LC_TERMINAL":"iTerm2","npm_config_send_metrics":"","npm_config_save_bundle":"","npm_config_umask":"0022","npm_config_node_options":"","npm_config_init_version":"1.0.0","npm_package_dependencies__fortawesome_free_regular_svg_icons":"^5.12.0","npm_config_init_author_name":"","npm_config_git":"git","npm_config_scope":"","npm_config_unsafe_perm":"true","npm_config_tmp":"/var/folders/6c/gn_jhl0563n8fwhftqwknby40000gn/T","npm_config_onload_script":"","npm_package_devDependencies__nuxtjs_eslint_module":"^1.0.0","npm_node_execpath":"/usr/local/Cellar/node/13.8.0/bin/node","npm_config_link":"","npm_config_format_package_lock":"true","npm_config_prefix":"/usr/local","COLORTERM":"truecolor","NODE_ENV":"production","HOST":"127.0.0.1","PORT":"3000","CURRENT_ENV":"production","COOKIE_KEY":"jwt","OG_URL":"http://localhost:3000","SEO_IMAGE_PATH":"https://philgdpublic.s3.ap-northeast-2.amazonaws.com/seo/Philgd_Logo_Square.png","SPACE_API":"https://api.philgd.com","GOOGLE_ANALYTICS_ID":"UA-159427258-1","_AXIOS_BASE_URL_":"https://api.philgd.com"}
    }
    // Only set once
    if (context.req) {
      app.context.req = context.req
    }
    if (context.res) {
      app.context.res = context.res
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return
      }
      app.context._redirected = true
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {}
        path = status
        pathType = typeof path
        status = 302
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        })
      } else {
        path = formatUrl(path, query)
        if (process.server) {
          app.context.next({
            path,
            status
          })
        }
        if (process.client) {
          // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
          window.location.replace(path)

          // Throw a redirect error
          throw new Error('ERR_REDIRECT')
        }
      }
    }
    if (process.server) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn)
    }
    if (process.client) {
      app.context.nuxtState = window.__NUXT__
    }
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ])

  if (context.route) {
    app.context.route = currentRouteData
  }

  if (context.from) {
    app.context.from = fromRouteData
  }

  app.context.next = context.next
  app.context._redirected = false
  app.context._errored = false
  app.context.isHMR = false
  app.context.params = app.context.route.params || {}
  app.context.query = app.context.route.query || {}
}

export function middlewareSeries (promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve()
  }
  return promisify(promises[0], appContext)
    .then(() => {
      return middlewareSeries(promises.slice(1), appContext)
    })
}

export function promisify (fn, context) {
  let promise
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise((resolve) => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err)
        }
        data = data || {}
        resolve(data)
      })
    })
  } else {
    promise = fn(context)
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise
  }
  return Promise.resolve(promise)
}

// Imported from vue-router
export function getLocation (base, mode) {
  let path = decodeURI(window.location.pathname)
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '')
  }
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
export function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

export function getQueryDiff (toQuery, fromQuery) {
  const diff = {}
  const queries = { ...toQuery, ...fromQuery }
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true
    }
  }
  return diff
}

export function normalizeError (err) {
  let message
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2)
    } catch (e) {
      message = `[${err.constructor.name}]`
    }
  } else {
    message = err.message || err
  }
  return {
    ...err,
    message,
    statusCode: (err.statusCode || err.status || (err.response && err.response.status) || 500)
  }
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  const tokens = []
  let key = 0
  let index = 0
  let path = ''
  const defaultDelimiter = (options && options.delimiter) || '/'
  let res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0]
    const escaped = res[1]
    const offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    const next = str[index]
    const prefix = res[2]
    const name = res[3]
    const capture = res[4]
    const group = res[5]
    const modifier = res[6]
    const asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    const partial = prefix != null && next != null && next !== prefix
    const repeat = modifier === '+' || modifier === '*'
    const optional = modifier === '?' || modifier === '*'
    const delimiter = res[2] || defaultDelimiter
    const pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g
  return encodeURI(str).replace(re, (c) => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURIComponentPretty(str, true)
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    let path = ''
    const data = obj || {}
    const options = opts || {}
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      const value = data[token.name || 'pathMatch']
      let segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */
function formatUrl (url, query) {
  let protocol
  const index = url.indexOf('://')
  if (index !== -1) {
    protocol = url.substring(0, index)
    url = url.substring(index + 3)
  } else if (url.startsWith('//')) {
    url = url.substring(2)
  }

  let parts = url.split('/')
  let result = (protocol ? protocol + '://' : '//') + parts.shift()

  let path = parts.filter(Boolean).join('/')
  let hash
  parts = path.split('#')
  if (parts.length === 2) {
    [path, hash] = parts
  }

  result += path ? '/' + path : ''

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query)
  }
  result += hash ? '#' + hash : ''

  return result
}

/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */
function formatQuery (query) {
  return Object.keys(query).sort().map((key) => {
    const val = query[key]
    if (val == null) {
      return ''
    }
    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&')
    }
    return key + '=' + val
  }).filter(Boolean).join('&')
}
