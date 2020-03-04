<template>
    <div class="container" style="padding: 0 10px;">
        <h4 class="title is-size-4">새글쓰기</h4>
        <b-select v-model="post.board_type" class="category-select"
                  placeholder="카테고리를 선택하세요" expanded>
            <option
                v-for="board in boards"
                :value="board.cd"
                :key="board.name">
                {{ board.name }}
            </option>
        </b-select>
        <input class="input title-input" placeholder="제목" v-model="post.title"></input>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <div class="button-outer">
            <button class="button is-primary button-submit" @click="submit">
                <strong>등록하기</strong>
            </button>
        </div>
    </div>
</template>

<script>
import Create from '../../../desktop/pages/posts/Create'
export default {
    extends: Create,
}
</script>

<style scoped>
.category-select {
    width: 200px;
}
.title-input, .category-select {
    margin-bottom: 20px;
}
.quill-editor {
    margin-bottom: 10px;
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
</style>
