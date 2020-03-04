<template>
    <div class="container" style="padding: 0 10px;">
        <h4 class="title is-size-4">수정하기</h4>
        <input class="input title-input" placeholder="제목" v-model="editedPost.title"></input>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <div class="button-outer">
            <button class="button is-primary button-submit" @click="submit">
                <strong>수정하기</strong>
            </button>
        </div>
    </div>
</template>

<script>
import Edit from '../../../desktop/pages/posts/Edit'
export default {
    extends: Edit,
}
</script>

<style scoped>
.title-input {
    margin-bottom: 20px;
}
.button-outer {
    padding: 20px 0 0;
    display: flex;
    justify-content: flex-end;
}
.button-submit {
    min-width: 120px;
}
.title-input {
    padding: 12px 15px;
    margin-bottom: 20px;
}
.quill-editor {
    margin-bottom: 10px;
}
</style>
