<template>
	<div class="a-coc-write a-cac-write">
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

						<div class="a-tooltip right--middle theme--dark dark--gray nowrap">
							<div class="a-tooltip__label">발행전 미리보기</div>
						</div><!-- //a-tooltip -->
					</button>
					<button class="a-btn-type-2 line btn-out">
						<span class="icon"><img src="/resources/images/svg/sign-out-24.svg" class="size--16" alt=""></span>
						<span class="label">나가기</span>

						<div class="a-tooltip right--middle theme--dark dark--gray">
							<div class="a-tooltip__label">
								<span class="a-color-point-1-1">걱정하지 마세요.</span><br>
								회의록은 자동 저장 되어<br>
								언제든지 다시 작성 할 수 있습니다
							</div>
						</div><!-- //a-tooltip -->
					</button>
					<button class="a-btn-type-2 line btn-del">
						<span class="icon"><img src="/resources/images/svg/trash-24.svg" class="size--16" alt=""></span>
						<span class="label">삭제</span>

						<div class="a-tooltip right--middle theme--dark dark--gray nowrap">
							<div class="a-tooltip__label">
								<span class="a-color-point-3-1">저장한 내용이 전부 삭제됩니다</span>
							</div>
						</div><!-- //a-tooltip -->
					</button>
				</div><!-- //a-coc-write__func -->
			</div><!-- //a-coc-write__func-area -->
			<div class="a-form__group">
				<div class="a-form__header">
					<h3 class="a-form__title">액션 아이템 정보</h3>
					<!-- div class="a-form__side"></div -->
				</div>
				<div class="a-form__item">
					<label-input label="액션 아이템 제목" class="mini line" value=""></label-input>
				</div>
				<div class="a-form__item">
					<label-token label="담당자" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-input label="완료일" class="mini line" readonly value="2021/03/03">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/calendar-24.svg" class="size--16" alt=""></button>
					</label-input>
					<div class="a-label-form line mini" tabindex="0">
						<div class="a-label-form__label">진행현황</div>
						<div class="a-label-form__content">
							<div class="a-tab-3">
								<button selected>진행중</button>
								<button>재진행</button>
							</div><!-- //a-tab-2 -->
						</div>
					</div><!-- //a-label-form -->
				</div>
				<div class="a-form__item">
					<label-textarea label="내용" class="line size--full" value=""></label-textarea>
				</div>
				<div class="a-form__item">
					<label-token label="발의자" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-token label="관련인" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-token label="거래선" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/organization-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
			</div><!-- //a-form__group -->
			<div class="a-form__group">
				<div class="a-form__header">
					<h3 class="a-form__title">첨부파일</h3>
					<!-- div class="a-form__side"></div -->
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
    name: 'collaboration-actionitem-write',
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
