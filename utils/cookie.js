import Cookies from 'js-cookie'

export const setToken = (key, token) => {
    if (process.server) return
    Cookies.set(key, token, { expires: 365 })
}

export const unsetToken = (key) => {
    if (process.server) return
    Cookies.remove(key)
}

export const getTokenFromCookie = (req, key) => {
    if (!req.headers.cookie) return
    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`))
    if (!jwtCookie) return null
    return jwtCookie.split('=')[1]
}

export const getTokenFromLocalStorage = (key) => {
    if (Cookies.get(key)) {
        return Cookies.get(key)
    }
    return null
}
