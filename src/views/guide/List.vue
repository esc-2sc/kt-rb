<template>
    <guide-box title="List" desc="a-list-1, a-list-2, a-list-3, a-list-4, Dropdown List," :to="$options.name">
        <guide-box-item title="a-list-4">
            <guide-table>
                <guide-table-item label="example 1">

                    <div class="a-list-4">
                        <!-- div class="a-list__header"></div -->
                        <div class="a-list__body">
                            <div class="a-list__item">
                                <div class="a-list__item-row">
                                    <div class="a-list__item-l">
                                        a-list__item-l
                                    </div>
                                    <div class="a-list__item-r">
                                        a-list__item-r
                                    </div>
                                </div>
                                <div class="a-list__item-row">
                                    <div class="a-list__item-l">
                                        a-list__item-l
                                    </div>
                                    <div class="a-list__item-r">
                                        a-list__item-r
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="a-list-1">
            <guide-table>
                <guide-table-item label="example 1">

                    <div class="a-list-1">
                        <div class="a-list__body">
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="icon"><img src="/resources/images/svg/file/file_xls.svg" alt=""></div>
                                    <div class="subject">
                                        <span class="subject-label">제목 텍스트</span>
                                    </div>
                                    <div class="label name-team">
                                        <span class="name">홍길동</span>
                                        <span class="team a-color-label-2">Design Group</span>
                                    </div>
                                    <div class="label date a-color-label-2">05/10/2019</div>
                                </div>
                                <div class="a-list__item-r">
                                    <div class="a-list__buttons">
                                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-24.svg" alt=""></button>
                                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/tertiary.svg" alt=""></button>
                                    </div>
                                </div>
                            </div><!-- //a-list__item -->
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="icon"><img src="/resources/images/svg/file/file_xls.svg" alt=""></div>
                                    <div class="subject">
                                        <span class="subject-label">제목 텍스트<br>제목 텍스트</span>
                                    </div>
                                    <div class="label name-team">
                                        <span class="name">홍길동</span>
                                        <span class="team a-color-label-2">Design Group</span>
                                    </div>
                                    <div class="label date a-color-label-2">05/10/2019</div>
                                </div>
                                <div class="a-list__item-r">
                                    <div class="a-list__buttons">
                                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-24.svg" alt=""></button>
                                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/tertiary.svg" alt=""></button>
                                    </div>
                                </div>
                            </div><!-- //a-list__item -->
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="icon"><img src="/resources/images/svg/file/file_xls.svg" alt=""></div>
                                    <div class="subject nowrap">
                                        <span class="subject-label">제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트</span>
                                    </div>
                                    <div class="label name-team">
                                        <span class="name">홍길동</span>
                                        <span class="team a-color-label-2">Design Group</span>
                                    </div>
                                    <div class="label date a-color-label-2">05/10/2019</div>
                                </div>
                                <div class="a-list__item-r">
	                                <div class="a-list__buttons">
		                                <div class="a-btn-popup state--hover">
			                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/file2-24.svg" alt=""></button>
			                                <div class="a-btn-popup__layer a-list-dropdown a-list__file-popup">
				                                <div class="a-list-dropdown__item">
					                                <div class="a-list-dropdown__before">
						                                <span class="icon"><img src="/resources/images/svg/file/file_pdf.svg" class="size--16" alt=""></span>
					                                </div>
					                                <div class="a-list-dropdown__label nowrap">경영 보고서.pdf</div>
					                                <div class="a-list-dropdown__after">
						                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-gray-24.svg" alt=""></button>
					                                </div>
				                                </div>
				                                <div class="a-list-dropdown__item">
					                                <div class="a-list-dropdown__before">
						                                <span class="icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--16" alt=""></span>
					                                </div>
					                                <div class="a-list-dropdown__label nowrap">하반기 휴가계획.xls</div>
					                                <div class="a-list-dropdown__after">
						                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-gray-24.svg" alt=""></button>
					                                </div>
				                                </div>
				                                <div class="a-list-dropdown__item">
					                                <button class="a-list-dropdown__item-button a-color-point-1">모두 받기</button>
				                                </div>
			                                </div><!-- //a-btn-popup__layer -->
		                                </div><!-- //a-btn-popup -->

		                                <div class="a-btn-popup">
			                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/tertiary.svg" alt=""></button>
			                                <div class="a-btn-popup__layer a-list-dropdown a-list__more-popup">
				                                <div class="a-list-dropdown__item">
					                                <div class="a-list-dropdown__label">공유하기</div>
					                                <div class="a-list-dropdown__after">
						                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/share-android-gray-24.svg" alt=""></button>
					                                </div>
				                                </div>
				                                <div class="a-list-dropdown__item">
					                                <div class="a-list-dropdown__label">삭제하기</div>
					                                <div class="a-list-dropdown__after">
						                                <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/trash-gray-24.svg" class="sv" alt=""></button>
					                                </div>
				                                </div>
			                                </div><!-- //a-btn-popup__layer -->
		                                </div><!-- //a-btn-popup -->
	                                </div><!-- //a-list__buttons -->
                                </div>
                            </div><!-- //a-list__item -->
	                        <div class="a-list__item">
		                        <div class="a-list__item-l">
			                        <div class="icon"><img src="/resources/images/svg/file/file_xls.svg" alt=""></div>
			                        <div class="subject nowrap">
				                        <span class="subject-label">제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트제목 텍스트</span>
			                        </div>
			                        <div class="label name-team">
				                        <span class="name">홍길동</span>
				                        <span class="team a-color-label-2">Design Group</span>
			                        </div>
			                        <div class="label date a-color-label-2">05/10/2019</div>
		                        </div>
		                        <div class="a-list__item-r">
			                        <div class="a-list__buttons">
				                        <div class="a-btn-popup">
					                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/file2-24.svg" alt=""></button>
					                        <div class="a-btn-popup__layer a-list-dropdown a-list__file-popup">
						                        <div class="a-list-dropdown__item">
							                        <div class="a-list-dropdown__before">
								                        <span class="icon"><img src="/resources/images/svg/file/file_pdf.svg" class="size--16" alt=""></span>
							                        </div>
							                        <div class="a-list-dropdown__label nowrap">경영 보고서.pdf</div>
							                        <div class="a-list-dropdown__after">
								                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-gray-24.svg" alt=""></button>
							                        </div>
						                        </div>
						                        <div class="a-list-dropdown__item">
							                        <div class="a-list-dropdown__before">
								                        <span class="icon"><img src="/resources/images/svg/file/file_xls.svg" class="size--16" alt=""></span>
							                        </div>
							                        <div class="a-list-dropdown__label nowrap">하반기 휴가계획.xls</div>
							                        <div class="a-list-dropdown__after">
								                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/circle-download-gray-24.svg" alt=""></button>
							                        </div>
						                        </div>
						                        <div class="a-list-dropdown__item">
							                        <button class="a-list-dropdown__item-button a-color-point-1">모두 받기</button>
						                        </div>
					                        </div><!-- //a-btn-popup__layer -->
				                        </div><!-- //a-btn-popup -->

				                        <div class="a-btn-popup">
					                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/tertiary.svg" alt=""></button>
					                        <div class="a-btn-popup__layer a-list-dropdown a-list__more-popup">
						                        <div class="a-list-dropdown__item">
							                        <div class="a-list-dropdown__label">공유하기</div>
							                        <div class="a-list-dropdown__after">
								                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/share-android-gray-24.svg" alt=""></button>
							                        </div>
						                        </div>
						                        <div class="a-list-dropdown__item">
							                        <div class="a-list-dropdown__label">삭제하기</div>
							                        <div class="a-list-dropdown__after">
								                        <button class="a-btn-type-1 transparent icon"><img src="/resources/images/svg/trash-gray-24.svg" class="sv" alt=""></button>
							                        </div>
						                        </div>
					                        </div><!-- //a-btn-popup__layer -->
				                        </div><!-- //a-btn-popup -->
			                        </div><!-- //a-list__buttons -->
		                        </div>
	                        </div><!-- //a-list__item -->
                        </div><!-- //a-list__body -->
                    </div><!-- //a-list-1 -->

                </guide-table-item>
                <guide-table-item label="example 2">

                    <div class="a-list-1">
                        <div class="a-list__header">
                            <div class="a-list__header-title">Title</div>
                        </div><!-- //a-list__header -->
                        <div class="a-list__body">
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="subject">
                                        <span class="subject-label a-color-label-2">제목 텍스트</span>
                                    </div>
                                </div>
                                <div class="a-list__item-r">
                                    <div class="label date a-color-label-3">2021.02.04 목요일</div>
                                    <span class="a-badge-1 a-bg-point-1">긍정</span>
                                </div>
                            </div><!-- //a-list__item -->
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="subject">
                                        <span class="subject-label a-color-label-2">제목 텍스트</span>
                                    </div>
                                </div>
                                <div class="a-list__item-r">
                                    <div class="label date a-color-label-3">2021.02.04 목요일</div>
                                    <span class="a-badge-1">중립</span>
                                </div>
                            </div><!-- //a-list__item -->
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="subject">
                                        <span class="subject-label a-color-label-2">제목 텍스트</span>
                                    </div>
                                </div>
                                <div class="a-list__item-r">
                                    <div class="label date a-color-label-3">2021.02.04 목요일</div>
                                    <span class="a-badge-1 a-bg-point-3">부정</span>
                                </div>
                            </div><!-- //a-list__item -->
                        </div><!-- //a-list__body -->
                        <div class="a-list__footer">
                            <button class="a-btn-type-1 transparent">더보기</button>
                        </div><!-- //a-list__footer -->
                    </div><!-- //a-list-1 -->

                </guide-table-item>
                <guide-table-item label="example 3">

                    <div class="a-list-1">
                        <div class="a-list__header">
                            <div class="a-list__header-title">Title</div>
                            <div class="a-list__header-func">
                                <button class="a-btn-type-1 transparent icon btn-modify"><img src="/resources/images/svg/pencil-24.svg" alt=""></button>
                            </div>
                        </div><!-- //a-list__header -->
                        <div class="a-list__body">
                            <div class="a-list__item-row">
                                <div class="a-list__item-label">
                                    <span class="label a-color-label-3">텍스트</span>
                                    <p class="desc">내용 텍스트</p>
                                </div>
                                <div class="a-list__item-label">
                                    <span class="label a-color-label-3">텍스트</span>
                                    <p class="desc">내용 텍스트</p>
                                </div>
                            </div>
                            <div class="a-list__item-row">
                                <div class="a-list__item-label">
                                    <span class="label a-color-label-3">텍스트</span>
                                    <p class="desc">내용 텍스트</p>
                                </div>
                            </div>
                            <div class="a-list__item-row">
                                <div class="a-list__item-label">
                                    <span class="label a-color-label-3">텍스트</span>
                                    <p class="desc">내용 텍스트</p>
                                </div>
                                <div class="a-list__item-label">
                                    <span class="label a-color-label-3">텍스트</span>
                                    <p class="desc">내용 텍스트</p>
                                </div>
                            </div>
                        </div><!-- //a-list__body -->
                    </div><!-- //a-list-1 -->

                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="a-list-2">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-list-2">
                            <div class="a-list__item">
                                <div class="a-list__item-header">
                                    <div class="subject">제목 텍스트</div>
                                </div>
                                <div class="a-list__item-body">
                                    <div class="label desc">설명 텍스트</div>
                                    <div class="label date-count a-color-label-3">
                                        <span class="date">최근 2021.6.23</span>
                                        <span class="count">누적 24건</span>
                                    </div>
                                </div>
                                <div class="a-list__item-side">
                                    <span class="logo"><img src="/resources/images/svg/logo/nike.png" alt=""></span>
                                </div>
                            </div>
                        </div><!-- //a-list-2 -->

                    </div>
                </guide-table-item>
                <guide-table-item label="example 2">
                    <div>

                        <div class="a-list-2">
                            <div class="a-list__item">
                                <div class="a-list__item-header">
                                    <div class="subject">제목 텍스트</div>
                                    <div class="label date a-color-label-3">2021.05.01~2021.05.10 </div>
                                </div>
                                <div class="a-list__item-body">
                                    <div class="user">
                                        <div class="a-user">
                                            <span class="a-user__label">AB</span>
                                        </div><!-- //a-user -->
                                        <div class="name-team">
                                            <span class="name">홍길동</span>
                                            <span class="team a-color-label-2">Design Group</span>
                                        </div>
                                    </div>
                                    <div class="location">
                                        <span class="icon"><img src="/resources/images/svg/location-gray-24.svg" alt=""></span>
                                        <span class="a-color-label-3">877 Americana Way, Glendale, CA 91210 미국</span>
                                    </div>
                                </div>
                                <div class="a-list__item-side">
                                    <button class="a-btn-type-1 transparent icon size--large"><img src="/resources/images/svg/file-gray-24.svg" alt=""></button>
                                </div>
                            </div>
                        </div><!-- //a-list-2 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="a-list-3">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-list-3">
                            <div class="a-list__item">
                                <div class="a-list__item-l">
                                    <div class="title a-color-label-2">제목 텍스트</div>
                                    <div class="label position a-color-label-2">Marketing manager</div>
                                    <div class="label team a-color-label-3">
                                        <span class="icon"><img src="/resources/images/svg/git-fork-gray-24.svg" alt=""></span>
                                        Global Sales &amp; Biz.development
                                    </div>
                                </div>
                                <div class="a-list__item-r">
                                    <div class="a-user size--large">
                                        <span class="a-user__label">AB</span>
                                    </div><!-- //a-user -->
                                </div>
                            </div><!-- //a-list__item -->
                        </div><!-- //a-list-3 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="a-list-4">
            <guide-table>
                <guide-table-item label="example 1">

                    <div class="a-list-4">
                        <!-- div class="a-list__header"></div -->
                        <div class="a-list__body">
                            <div class="a-list__item">

                            </div>
                        </div>
                    </div>

                </guide-table-item>
            </guide-table>
        </guide-box-item>

	    <guide-box-item title="Dropdown List Group : header, body, footer">
		    <guide-table>
			    <guide-table-item label="Group">
				    <div>

					    <div class="a-list-dropdown nowrap">
						    <div class="a-list-dropdown__header">
							    <div class="a-list-dropdown__title">최근 참석자</div>
						    </div>
						    <div class="a-list-dropdown__body">
							    <div class="a-list-dropdown__item">
								    <div class="a-list-dropdown__label">Menu option 1 Menu option 1 Menu option 1  Menu option 1 </div>
							    </div>
							    <div class="a-list-dropdown__item selected">
								    <div class="a-list-dropdown__label">Menu option 2</div>
							    </div>
							    <div class="a-list-dropdown__item disabled">
								    <div class="a-list-dropdown__label">Menu option 3</div>
							    </div>
						    </div>
						    <div class="a-list-dropdown__footer">
							    <button class="a-list-dropdown__item-button a-color-point-1">텍스트</button>
						    </div>
					    </div>

				    </div>
				    <div>

					    <div class="a-list-dropdown nowrap">
						    <div class="a-list-dropdown__body">
							    <div class="a-list-dropdown__item">
								    <div class="a-list-dropdown__label">Menu option 1 Menu option 1 Menu option 1  Menu option 1 </div>
							    </div>
							    <div class="a-list-dropdown__item">
								    <div class="a-list-dropdown__label">Menu option 2</div>
							    </div>
							    <div class="a-list-dropdown__item">
								    <div class="a-list-dropdown__label">Menu option 3</div>
							    </div>
						    </div>
					    </div>

				    </div>
			    </guide-table-item>
		    </guide-table>
	    </guide-box-item>

        <guide-box-item title="Dropdown List - Text, Checkbox">
            <guide-table>
                <guide-table-item :label="labelHtml1">
                    <div>
                        <div class="a-list-dropdown nowrap">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__label">Menu option 1 Menu option 1 Menu option 1  Menu option 1 </div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__label">Menu option 2</div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__label">Menu option 3</div>
                            </div>
                            <div class="a-list-dropdown__item">
                                <button class="a-list-dropdown__item-button a-color-point-1">텍스트</button>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                    <div>
                        <ul class="a-list-dropdown">
                            <li>
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                </div>
                                <div class="a-list-dropdown__label">Menu option 1</div>
                            </li>
                            <li class="selected">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                </div>
                                <div class="a-list-dropdown__label">Menu option 2</div>
                            </li>
                            <li class="disabled">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                </div>
                                <div class="a-list-dropdown__label">Menu option 3</div>
                            </li>
                        </ul><!-- //a-list-dropdown -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Dropdown List - Button">
            <guide-table>
                <guide-table-item :label="labelHtml1">
                    <div>
                        <div class="a-list-dropdown">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__label">Menu option 1</div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__label">Menu option 2</div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__label">Menu option 3</div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                    <div>
                        <ul class="a-list-dropdown">
                            <li>
                                <div class="a-list-dropdown__label">Menu option 1</div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </li>
                            <li class="selected">
                                <div class="a-list-dropdown__label">Menu option 2</div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </li>
                            <li class="disabled">
                                <div class="a-list-dropdown__label">Menu option 3</div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </li>
                        </ul><!-- //a-list-dropdown -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Dropdown List - Avatar, Checkbox, Button">
            <guide-table>
                <guide-table-item :label="labelHtml1">
                    <div>
                        <ul class="a-list-dropdown">
                            <li>
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 1</div>
                            </li>
                            <li class="selected">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 2</div>
                            </li>
                            <li class="disabled">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 3</div>
                            </li>
                        </ul><!-- //a-list-dropdown -->
                    </div>
                    <div>
                        <div class="a-list-dropdown">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 1</div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 2</div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 3</div>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                </guide-table-item>

                <guide-table-item :label="labelHtml1">
                    <div>
                        <ul class="a-list-dropdown">
                            <li>
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 1</div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </li>
                            <li class="selected">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 2</div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </li>
                            <li class="disabled">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 3</div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </li>
                        </ul><!-- //a-list-dropdown -->
                    </div>
                    <div>
                        <div class="a-list-dropdown">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                    <div class="a-user">AB</div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 1</div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 2</div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__before">
                                    <label class="a-checkbox single">
                                        <input type="checkbox">
                                        <span class="label"></span>
                                    </label><!-- //a-checkbox -->
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">Menu option 3</div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="Dropdown List - Members">
            <guide-table>
                <guide-table-item :label="labelHtml1">
                    <div>
                        <div class="a-list-dropdown">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                </guide-table-item>
                <guide-table-item :label="labelHtml1">
                    <div>
                        <div class="a-list-dropdown">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                                <div class="a-list-dropdown__after">
                                    <button><img src="/resources/images/svg/check-green-24.svg" class="size--16" alt="Check"></button>
                                </div>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                    <div>
                        <div class="a-list-dropdown">
                            <div class="a-list-dropdown__item">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item selected">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </div>
                            <div class="a-list-dropdown__item disabled">
                                <div class="a-list-dropdown__before">
                                    <div class="a-user">
                                        <span class="a-user__label">AB</span>
                                    </div>
                                </div>
                                <div class="a-list-dropdown__label">
                                    <span class="label">James CEO</span>
                                    <span class="email">jamespaul@gmail.com</span>
                                </div>
                                <div class="a-list-dropdown__after">
                                    <button class="btn-del"><img src="/resources/images/svg/circle-minus-gray.svg" class="size--16" alt="Del"></button>
                                </div>
                            </div>
                        </div><!-- //a-list-dropdown -->
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-select',
    components: {
    },
	data() {
		return {
		    labelHtml1: `
                <span class="g-label">Enabled</span>
                <span class="g-label">Hover / Active</span>
                <span class="g-label">Disabled</span>`
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
