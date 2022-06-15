<template>
    <guide-box title="Chip, Token, File" desc="Chip, Token, Label Token, Label File" :to="$options.name">
        <guide-box-item title="Chips: a-chip-1, a-chip-file, a-chip-img">
            <guide-table>
                <guide-table-item label="a-chip-1">
                    <div>

                        <div class="a-chip-1">
                            <span class="a-chip__label">텍스트</span>
                            <!-- button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button -->
                        </div><!-- //a-chip-1 -->

                        <div class="a-chip-1">
                            <span class="a-chip__label">텍스트</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-1 -->

                    </div>
                    <div>

                        <div class="a-chip-1 color--bg-1">
                            <span class="a-chip__label">텍스트</span>
                            <!-- button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button -->
                        </div><!-- //a-chip-1 -->

                        <div class="a-chip-1 color--bg-1">
                            <span class="a-chip__label">텍스트</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-1 -->

                    </div>
                    <div>

                        <div class="a-chip-1 color--bg-2">
                            <span class="a-chip__label">텍스트</span>
                            <!-- button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button -->
                        </div><!-- //a-chip-1 -->

                        <div class="a-chip-1 color--bg-2">
                            <span class="a-chip__label">텍스트</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-1 -->

                    </div>
                </guide-table-item>
                <guide-table-item label="a-chip-file">
                    <div style="padding:16px 0;">
                        <div class="a-chip-file">
                            <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                            <span class="a-chip__label">텍스트.xls</span>
                            <!-- button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button -->
                        </div><!-- //a-chip-file -->

                        <div class="a-chip-file">
                            <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                            <span class="a-chip__label">텍스트.xls</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-file -->

                    </div>
                    <div style="padding:16px;background-color: #f2f2f2;border-radius:16px;">

                        <div class="a-chip-file color--bg-white">
                            <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                            <span class="a-chip__label">텍스트.xls</span>
                            <!-- button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button -->
                        </div><!-- //a-chip-file -->

                        <div class="a-chip-file color--bg-white">
                            <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                            <span class="a-chip__label">텍스트.xls</span>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-file -->

                    </div>
                </guide-table-item>
                <guide-table-item label="a-chip-img : cover ">
                    <div>

                        <div class="a-chip-img user">
                            <figure class="a-chip__img"><img src="/resources/images/temp/img_google.png" alt=""></figure>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-img -->

                    </div>

                    <div>

                        <div class="a-chip-img">
                            <figure class="a-chip__img">
                                <div class="a-user">
                                    <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                                    <!-- span class="a-user__label">AB</span -->
                                </div><!-- //a-user -->
                            </figure>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-img -->

                    </div>


                    <div>

                        <div class="a-chip-img cover" style="width:88px;height:88px;">
                            <figure class="a-chip__img" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                        </div><!-- //a-chip-img -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Label Token">
            <guide-table>
                <guide-table-item label="Enabled">
                    <div>
                        <label-token label="텍스트"></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line"></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="Active">
                    <div>
                        <label-token label="텍스트" class="state--focus"></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line state--focus"></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="Filled">
                    <div>
                        <label-token label="텍스트" :items="sampleItems" value="홍길동"></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line" :items="sampleItems" value="홍길동"></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="Error">
                    <div>
                        <label-token label="텍스트" class="state--error" value="Error"></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line state--error" value="Error"></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="Readonly">
                    <div>
                        <label-token label="텍스트" :items="sampleItems" value="" readonly></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line" value="Readonly" readonly></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="Disabled">
                    <div>
                        <label-token label="텍스트" :items="sampleItems" value="" disabled></label-token>
                        <br><br>
                        <label-token label="텍스트" value="Disabled" disabled></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line" value="" disabled></label-token>
                        <br><br>
                        <label-token label="텍스트" class="line" value="Disabled" disabled></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="size--full">
                    <div>
                        <label-token label="텍스트" class="size--full" :items="sampleItems" value=""></label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line size--full" value=""></label-token>
                    </div>
                </guide-table-item>
                <guide-table-item label="button">
                    <div>
                        <label-token label="텍스트" class="size--full" :items="sampleItems" value="">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-token>
                    </div>
                    <div>
                        <label-token label="텍스트" class="line size--full" value="">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-token>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Label File">
            <guide-table>
                <guide-table-item label="example 1">
                    <div style="flex:none">

                        <label-file label="파일첨부">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="파일첨부" :items="sampleFileItems">
                            <div class="a-chip-file color--bg-white" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
                                <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                                <span class="a-chip__label" v-text="file.label"></span>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-file -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="파일첨부" class="size--full" :items="sampleFileItems">
                            <div class="a-chip-file color--bg-white" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
                                <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                                <span class="a-chip__label" v-text="file.label"></span>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-file -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>

                </guide-table-item>
                <guide-table-item label="example 2">
                    <div style="flex:none">

                        <label-file label="파일첨부" class="line">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="파일첨부" :items="sampleFileItems" class="line">
                            <div class="a-chip-file" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
                                <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                                <span class="a-chip__label" v-text="file.label"></span>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-file -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="파일첨부" :items="sampleFileItems" class="line size--full" >
                            <div class="a-chip-file" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
                                <span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
                                <span class="a-chip__label" v-text="file.label"></span>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-file -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                </guide-table-item>
                <guide-table-item label="example 3">
                    <div style="flex:none">

                        <label-file label="이미지 첨부" class="line">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="이미지 첨부" :items="sampleImageItems" class="line">
                            <div class="a-chip-img" v-for="(file, index) in sampleImageItems" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img"><img :src="file.src" :alt="file.label"></figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="이미지 첨부" :items="sampleImageItems" class="line size--full" >
                            <div class="a-chip-img" v-for="(file, index) in sampleImageItems" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img"><img :src="file.src" :alt="file.label"></figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                </guide-table-item>
                <guide-table-item label="example 4">
                    <div style="flex:none">

                        <label-file label="이미지 첨부" class="control">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                            <button slot="button" class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div style="flex:none">

                        <label-file label="이미지 첨부" class="control line">
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                            <button slot="button" class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="이미지 첨부" :items="sampleImageItems" class="control">
                            <div class="a-chip-img cover" v-for="(file, index) in 2" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img" :style="`background-image:url('https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')`"></figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                            <button slot="button" class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                    <div>

                        <label-file label="이미지 첨부" :items="sampleImageItems" class="control line size--full">
                            <div class="a-chip-img cover" v-for="(file, index) in 10" :key="`file-${file.label}-${index}`">
                                <figure class="a-chip__img" :style="`background-image:url('https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60')`"></figure>
                                <button class="a-chip__del"><img src="/resources/images/svg/circle-minus-fill-24.svg" class="size--12" alt=""></button>
                            </div><!-- //a-chip-img -->
                            <button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
                            <button slot="button" class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></button>
                        </label-file>

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <!-- div>
                <label class="a-input-sizer">
                    <input type="text" onInput="this.parentNode.dataset.value = this.value" placeholder="홍길동">
                </label>
                <label class="a-input-sizer">
                    <textarea onInput="this.parentNode.dataset.value = this.value" placeholder="홍길동"></textarea>
                </label>
            </div -->
    </guide-box>
</template>

<script>
export default {
    name: 'guide-token',
    components: {
    },
	data() {
		return {
		    sampleItems: [
                {label: '홍길동1', value:''},
                {label: '홍길동2', value:''},
            ],
            sampleFileItems: [
                {label: '텍스트1.xls', value:''},
                {label: '텍스트2.xls', value:''}
            ],
            sampleImageItems: [
                {label:'BMW', src: '/resources/images/temp/img_bmw.png', value:''},
                {label:'Google', src: '/resources/images/temp/img_google.png', value:''}
            ]
        };
	},
    mounted() {
    },
    methods: {
	},
};
</script>
<style scoped>
</style>
