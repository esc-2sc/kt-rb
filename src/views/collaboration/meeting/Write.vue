<template>
	<div class="a-coc-write a-cme-write">
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
					<h3 class="a-form__title">회의개요</h3>
					<!-- div class="a-form__side"></div -->
				</div>
				<div class="a-form__item">
					<label-input label="회의제목" class="mini line" value=""></label-input>
				</div>
				<div class="a-form__item">
					<label-token label="주관자" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-input label="회의날짜" class="mini line" readonly value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/calendar-24.svg" class="size--16" alt=""></button>
					</label-input>
					<label-input label="회의시작 시간" class="mini line" readonly value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/clock-24.svg" class="size--16" alt=""></button>
					</label-input>
					<label-input label="회의종료 시간" class="mini line" readonly value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/clock-24.svg" class="size--16" alt=""></button>
					</label-input>
				</div>
				<div class="a-form__item">
					<label-input label="회의장소" class="mini line" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/location-24.svg" class="size--16" alt=""></button>
					</label-input>
				</div>
				<div class="a-form__item">
					<label-token label="참석자" class="line size--full" :items="sampleItems" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<label-token label="참조자" class="line size--full" value="">
						<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/people-24.svg" class="size--16" alt=""></button>
					</label-token>
				</div>
				<div class="a-form__item">
					<div class="a-label-form line mini" tabindex="0">
						<div class="a-label-form__label">작성 완료시 메일 공지</div>
						<div class="a-label-form__content">
							<label class="a-switch size--24">
								<input type="checkbox">
								<span class="icon"></span>
							</label><!-- //a-switch -->
						</div>
					</div><!-- //a-label-form -->
					<div class="a-label-form line mini" tabindex="0">
						<div class="a-label-form__label">참석자 , 참조자만 열람 하기</div>
						<div class="a-label-form__content">
							<label class="a-switch size--24">
								<input type="checkbox" checked>
								<span class="icon"></span>
							</label><!-- //a-switch -->
						</div>
					</div><!-- //a-label-form -->
				</div>
			</div><!-- //a-form__group -->
			<div class="a-form__group">
				<div class="a-form__header">
					<h3 class="a-form__title">회의 내용</h3>
					<!-- div class="a-form__side"></div -->
				</div>
				<div class="a-form__item">
					<div class="a-form__editor">
						<img src="/resources/images/temp/editor500.png" alt="">
					</div>
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
			<div class="a-form__group">
				<div class="a-form__header">
					<h3 class="a-form__title">액션 아이템</h3>
					<!-- div class="a-form__side"></div -->
				</div>
				<div class="a-form__item column">
					<div class="a-coc-action-form">
						<div class="a-coc-action-item__title">
							<div class="a-coc-action-item__title-label">
								<span class="icon"><img src="/resources/images/svg/mortar-board-blue-24.svg" class="size--16" alt=""></span>
								<span class="label">회의후에  추가적인 업무,  지시사항 등을 액션아이템에 등록하세요</span>
							</div>
							<div class="a-coc-action-item__func a-btn-popup">
								<button class="a-btn-type-1 transparent icon selected btn-add"><img src="/resources/images/svg/circle-plus-fill-24.svg" class="size--16" alt=""></button>
								<div class="a-btn-popup__layer a-list-dropdown a-list__more-popup">
									<div class="a-list-dropdown__item">
										<div class="a-list-dropdown__label">액션 아이템</div>
										<div class="a-list-dropdown__after">
											<button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/check-24.svg" alt=""></button>
										</div>
									</div>
									<div class="a-list-dropdown__item">
										<div class="a-list-dropdown__label">아젠다 + 액션 아이템</div>
										<div class="a-list-dropdown__after">
											<button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/list-ordered-24.svg" class="sv" alt=""></button>
										</div>
									</div>
								</div><!-- //a-btn-popup__layer -->
							</div><!-- //a-btn-popup -->
						</div><!-- //a-coc-action-item__title -->
					</div>
					<div class="a-coc-action-form">
						<div class="a-coc-action-item">
							<div class="a-coc-action-item__icon"><img src="/resources/images/svg/check-blue-24.svg" class="size--24" alt=""></div>
							<div class="a-coc-action-item__content">
								<div class="a-coc-action-item__form">
									<label-input label="액션 아이템" class="mini size--full a-coc-action-item__form-input" value="Google"></label-input>
									<label-input label="날짜선택" class="mini a-coc-action-item__form-date" readonly value="">
										<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/calendar-24.svg" class="size--16" alt=""></button>
									</label-input>
								</div>
								<div class="a-coc-action-item__data">
									<span class="people">
										<img src="/resources/images/svg/people-24.svg" class="size--12" alt="">
										홍길동, 하정우, 김말동
									</span>
									<span class="file">
										<img src="/resources/images/svg/file2-24.svg" class="size--12" alt="">
										하반기 보고서.doc , 하드웨어 설계.pdf
									</span>
								</div>
								<div class="a-coc-action-item__data">
									<span class="comment">
										<img src="/resources/images/svg/comment-24.svg" class="size--12" alt="">
										하반기 보고서가 작성 되면 말씀해주세요.
									</span>
								</div>
							</div>
							<div class="a-coc-action-item__func">
								<button class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/book-24.svg" class="size--16" alt=""></button>
								<button class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt=""></button>
							</div>
						</div><!-- //a-coc-action-item -->
					</div><!-- //a-coc-action-form -->
					<div class="a-coc-action-form">
						<div class="a-coc-action-item">
							<div class="a-coc-action-item__icon"><img src="/resources/images/svg/north-star-green-24.svg" class="size--24" alt=""></div>
							<div class="a-coc-action-item__content">
								<div class="a-coc-action-item__form">
									<label-input label="아젠다 " class="mini size--full" value="중소·중견기업이 R&D를 통해 성장하고, 수요기업과 공급기업이 R&D를 통해 긴밀히 협력"></label-input>
								</div>
								<div class="a-coc-action-item__data">
									<span class="people">
										<img src="/resources/images/svg/people-24.svg" class="size--12" alt="">
										홍길동, 하정우, 김말동
									</span>
									<span class="org">
										<img src="/resources/images/svg/organization-24.svg" class="size--12" alt="">
										나이키, 아디다스, 타이틀리스트
									</span>
									<span class="file">
										<img src="/resources/images/svg/file2-24.svg" class="size--12" alt="">
										하반기 보고서.doc , 하드웨어 설계.pdf
									</span>
								</div>
							</div>
							<div class="a-coc-action-item__func">
								<button class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/book-24.svg" class="size--16" alt=""></button>
								<button class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt=""></button>
							</div>
						</div><!-- //a-coc-action-item -->
						<div class="a-coc-action-item">
							<div class="a-coc-action-item__icon"><img src="/resources/images/svg/check-blue-24.svg" class="size--24" alt=""></div>
							<div class="a-coc-action-item__content">
								<div class="a-coc-action-item__form">
									<label-input label="액션 아이템" class="mini size--full a-coc-action-item__form-input" value="Google"></label-input>
									<label-input label="날짜선택" class="mini a-coc-action-item__form-date" readonly value="">
										<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/calendar-24.svg" class="size--16" alt=""></button>
									</label-input>
								</div>
								<div class="a-coc-action-item__data">
									<span class="people">
										<img src="/resources/images/svg/people-24.svg" class="size--12" alt="">
										홍길동, 하정우, 김말동
									</span>
									<span class="file">
										<img src="/resources/images/svg/file2-24.svg" class="size--12" alt="">
										하반기 보고서.doc , 하드웨어 설계.pdf
									</span>
								</div>
								<div class="a-coc-action-item__data">
									<span class="comment">
										<img src="/resources/images/svg/comment-24.svg" class="size--12" alt="">
										하반기 보고서가 작성 되면 말씀해주세요.
									</span>
								</div>
							</div>
							<div class="a-coc-action-item__func">
								<button class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/book-24.svg" class="size--16" alt=""></button>
								<button class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt=""></button>
							</div>
						</div><!-- //a-coc-action-item -->
						<div class="a-coc-action-item">
							<div class="a-coc-action-item__icon"><img src="/resources/images/svg/check-blue-24.svg" class="size--24" alt=""></div>
							<div class="a-coc-action-item__content">
								<div class="a-coc-action-item__form">
									<label-input label="액션 아이템" class="mini size--full a-coc-action-item__form-input" value="Google"></label-input>
									<label-input label="날짜선택" class="mini a-coc-action-item__form-date" readonly value="">
										<button slot="button" class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/calendar-24.svg" class="size--16" alt=""></button>
									</label-input>
								</div>
							</div>
							<div class="a-coc-action-item__func">
								<button class="a-btn-type-1 transparent icon btn-add"><img src="/resources/images/svg/book-24.svg" class="size--16" alt=""></button>
								<button class="a-btn-type-1 transparent icon btn-del"><img src="/resources/images/svg/circle-minus.svg" class="size--16" alt=""></button>
							</div>
						</div><!-- //a-coc-action-item -->
						<div class="a-coc-action-item__add">
							<button class="a-btn-type-1 transparent">
								<img src="/resources/images/svg/circle-plus-24.svg" class="icon" alt="">
								<span class="label a-color-label-2">액션 아이템 추가</span>
							</button>
						</div>
					</div><!-- //a-coc-action-form -->
				</div><!-- //a-form__item -->
			</div><!-- //a-form__group -->
		</div><!-- //a-coc-write__form -->
	</div><!-- //a-coc-write -->
</template>

<script>
import layoutDetailWritePopupInit from "@/views/collaboration/mixin/layoutDetailWritePopupInit";

export default {
	mixins: [layoutDetailWritePopupInit],
    name: 'collaboration-meeting-write',
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
	mounted() {},
	methods: {
    },
};
</script>

<style scoped>
</style>
