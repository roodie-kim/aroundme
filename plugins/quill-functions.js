import Vue from 'vue'

Vue.mixin({
    methods: {
        imageHandler () {
            // console.log('imageHandler')
            const input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.setAttribute('multiple', 'multiple')
            input.setAttribute('accept', 'image/*')
            input.click()
            // input 값이 변경되면 동작하는 event listener 등록
            input.onchange = async (e) => {
                // 업로드한 이미지들 처리하는 메서드 호출
                await this.uploadImageToServer(e.target.files)
            }
        },
        async uploadImageToServer (images) {
            // console.log('uploadImageToServer')
            // 업로드한 이미지가 multiple 이므로 배열 처리
            for (const image of images) {
                // checkImageSize: MAX 8MB
                if (image.size < 8000000) {
                    const formData = new FormData()
                    formData.append('image', image)
                    // image type = [‘banner_image’, ‘profile_image’, ‘post_image’]
                    formData.append('type', 'post_image')
                    const { status, data } = await this.$store.dispatch('images/postImage', formData)
                    if (status) {
                        // response 로 받은 주소 에디터에 삽입
                        const range = this.quill.getSelection()
                        this.quill.insertEmbed(range.index, 'image', data.original_url)
                    } else {
                        this.$buefy.toast.open({
                            duration: 5000,
                            message: '이미지 업로드에 실패했습니다.',
                            position: 'is-top',
                            type: 'is-danger',
                        })
                    }
                } else {
                    // 용량큰 이미지는 업로드 하지 않음
                    this.$buefy.toast.open({
                        duration: 5000,
                        message: '이미지 용량이 8메가를 초과했습니다.',
                        position: 'is-top',
                        type: 'is-danger',
                    })
                }
            }
        },
        focusOnQuill () {
            this.quill.focus()
        },
    },
    computed: {
        user () {
            return this.$store.state.user
        },
    },
})
