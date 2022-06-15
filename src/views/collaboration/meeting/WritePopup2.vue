<template>
	<div class="a-popup theme--gray a-coc-popup__write">
		<div class="a-popup__header">
			<div class="a-popup__title">오늘의 아젠다</div>
			<div class="a-popup__func">
				<button class="a-btn-type-1 icon transparent"><img src="/resources/images/svg/x-24.svg" class="size--16" alt="Close"></button>
			</div>
		</div>
		<div class="a-popup__body">

			<div class="a-form-1">
				<div class="a-form__content">
					<div class="a-form__item">
						<label-token label="담당자" class="size--full" :items="sampleItems" value="홍길동">
							<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
						</label-token>
					</div>
					<div class="a-form__item">
						<label-file label="파일첨부" class="size--full" :items="sampleFileItems">
							<div class="a-chip-file color--bg-white" v-for="(file, index) in sampleFileItems" :key="`file-${file.label}-${index}`">
								<span class="a-chip__icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--24" alt=""></span>
								<span class="a-chip__label" v-text="file.label"></span>
								<button class="a-chip__del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--12" alt=""></button>
							</div><!-- //a-chip-file -->
							<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/file2-24.svg" class="size--16" alt=""></button>
						</label-file>
					</div>
				</div>
			</div><!-- //a-form-1 -->

		</div>
		<div class="a-popup__buttons">
			<div class="a-popup__buttons-l">
				<button class="a-btn-type-1 line">
					<img src="/resources/images/svg/trash-24.svg" class="icon" alt="">
					<span class="label">부가정보 삭제</span>
				</button>
			</div>
			<div class="a-popup__buttons-r">
				<button class="a-btn-type-1 transparent">닫기</button>
				<button class="a-btn-type-1">
					<img src="/resources/images/svg/check-white-24.svg" class="icon" alt="">
					<span class="label">저장하기</span>
				</button>
			</div>
		</div>
	</div><!-- //a-popup -->
</template>

<script>
export default {
    name: 'collaboration-meeting-write-popup-2',
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
        };
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
