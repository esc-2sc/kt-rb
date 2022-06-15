<template>
	<div class="a-coc-write a-mail-write">
		<div class="a-coc-write__form a-form-2">
			<div class="a-coc-write__func-area">
				<div class="a-coc-write__func">
					<button class="a-btn-type-2 btn-send">
						<span class="icon a-bg-point-1"><img src="/resources/images/svg/paper-airplane-fill-tilt-white-24.svg" class="size--16" alt=""></span>
						<span class="label">발행</span>
					</button>
					<button class="a-btn-type-2 line btn-preview">
						<span class="icon"><img src="/resources/images/svg/eye-24.svg" class="size--16" alt=""></span>
						<span class="label">미리보기</span>
					</button>
					<button class="a-btn-type-2 line btn-cancel">
						<span class="icon"><img src="/resources/images/svg/x-24.svg" class="size--16" alt=""></span>
						<span class="label">취소</span>
					</button>
				</div><!-- //a-coc-write__func -->
			</div><!-- //a-coc-write__func-area -->
			<div class="a-form__group">
				<div class="a-form__header">
					<h3 class="a-form__title">메일작성</h3>
					<!-- div class="a-form__side"></div -->
				</div>
				<div class="a-form__item">
					<label-input label="회의 제목" class="mini line" value=""></label-input>
				</div>
				<div class="a-form__item">
					<label-token label="받는사람" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/checklist-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-token label="참조" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/checklist-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-token label="숨은참조" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/checklist-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<div class="a-form__editor">
						<img src="/resources/images/temp/editor800.png" alt="">
					</div>
				</div>
				<div class="a-form__item">
					<label-file label="파일첨부" :items="sampleFileItems" class="line">
						<div class="a-chip-file" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
							<span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
							<span class="a-chip__label" v-text="file.label"></span>
							<button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
						</div><!-- //a-chip-file -->
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
					</label-file>
				</div>
			</div><!-- //a-form__group -->
		</div><!-- //a-coc-write__form -->
	</div><!-- //a-coc-write -->
</template>

<script>
import layoutDetailWritePopupInit from "@/views/collaboration/mixin/layoutDetailWritePopupInit";

export default {
	mixins: [layoutDetailWritePopupInit],
	name: 'mail-write',
	data() {
		return {
			sampleFileItems: [
				{label: '텍스트1.xls', value:''},
				{label: '텍스트2.xls', value:''}
			],
		};
	},
	mounted() {},
	methods: {
	},
};
</script>

<style scoped>
</style>
