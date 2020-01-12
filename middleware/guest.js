// 로그인 되어있을 경우 메인 페이지로 이동

export default function ({ store, redirect }) {
    if (store.getters.isAuthenticated) {
        return redirect('/')
    }
}
