<template>
    <div class="container" style="padding: 0 10px;">
        <h4 class="title is-size-4">수정하기</h4>
        <input class="input title-input" placeholder="제목" v-model="editedPost.title"></input>
        <b-taglist>
            <b-tag @click.native="selectTown(town.id)" :type="isSelected(town.id)" size="is-medium" :rounded="true"
                   v-for="(town, index) in towns" :key="index"
                   style="cursor: pointer;">
                {{ town.name }}
            </b-tag>
        </b-taglist>
        <div ref="quillEditor" class="quill-editor" @click="focusOnQuill"></div>
        <p class="has-text-grey-light" style="font-size: 14px;">태그는 스페이스 혹 콤마로 구분되며 최대 10개까지 사용할 수 있습니다.</p>
        <input class="input title-input" placeholder="제목"
               v-model="tags" style="margin-bottom: 5px;"></input>
        <div class="flex" style="flex-wrap: wrap;">
            <span v-for="(tag, index) in parsedTags" :key="index"
                  class="has-text-warm-red" style="font-size: 14px; margin-right: 10px;">
                #{{ tag }}
            </span>
        </div>
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
