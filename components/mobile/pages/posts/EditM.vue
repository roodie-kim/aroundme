<template>
    <div class="container" style="padding: 0 10px;">
        <h4 class="title is-size-4">수정하기</h4>
        <b-select v-model="editedPost.board_type" class="category-select"
                  placeholder="카테고리를 선택하세요" expanded>
            <option
                v-for="board in boards"
                :value="board.cd"
                :key="board.name">
                {{ board.name }}
            </option>
        </b-select>
        <div class="flex" v-if="editedPost.board_type === 'B102'">
            <b-select v-model="editedPost.area" class="category-select" style="margin-right: 20px;"
                      placeholder="지역을 선택하세요" expanded>
                <option
                    v-for="area in areas"
                    :value="area.cd"
                    :key="area.name">
                    {{ area.name }}
                </option>
            </b-select>
            <b-select v-model="editedPost.sub_type" class="category-select"
                      placeholder="구매/판매" expanded>
                <option
                    v-for="type in subTypes"
                    :value="type.cd"
                    :key="type.name">
                    {{ type.name }}
                </option>
            </b-select>
        </div>
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
.category-select {
    width: 200px;
}
.category-select, .title-input {
    margin-bottom: 20px;
}
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
