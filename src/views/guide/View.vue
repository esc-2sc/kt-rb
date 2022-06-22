<template>
    <guide-box title="View" desc="a-view-1" :to="$options.name">
	    <guide-box-item title='class="a-view a-view-wing"'>

		    <div class="a-view a-view-wing">
			    <div class="a-view__container"><div class="a-view__container-inner">
				    <div class="a-view__side-l">
					    side content
				    </div><!-- //a-view__side-l -->
				    <div class="a-view__contents" style="background-color: rgba(255,0,0,.1)">
					    content
				    </div><!-- //a-view__contents -->
				    <div class="a-view__side-r none"></div><!-- //a-view__side-l -->
			    </div></div><!-- //a-view__container -->
			    <div class="a-view__container dark"><div class="a-view__container-inner">
				    <div class="a-view__side-l none"></div><!-- //a-view__side-l -->
				    <div class="a-view__contents" style="background-color: rgba(255,0,0,.1)">
					    content
				    </div><!-- //a-view__contents -->
				    <div class="a-view__side-r none"></div><!-- //a-view__side-l -->
			    </div></div><!-- //a-view__container -->
		    </div>

	    </guide-box-item>
        <guide-box-item title='class="a-view a-view-1"'>
	        <div class="a-view a-view-1" style="background-color: rgba(255,0,0,.1)">
		        <div class="a-view__container"><div class="a-view__container-inner">
			        <div class="a-view__contents">
			            <div class="a-view__group">
				        <div class="a-view__header">
					        <div class="a-view__title">
						        <span class="icon"><img src="/resources/images/icon/icon_airplane.png" alt=""></span>
						        <span class="label">Title</span>
					        </div>
					        <!-- div class="a-view__func"></div -->
				        </div><!-- //a-view__header -->
				        <div class="a-view__content">
					        <div class="a-view__row space--1">
						        <div class="a-view__col">
							        <div class="a-view__col-label">Label Text</div>
							        <div class="a-view__col-content">
								        Content
							        </div>
						        </div>
					        </div><!-- //a-view__row -->
					        <div class="a-view__row">
						        <div class="a-view__col">
							        <div class="a-view__col-label">Label Text</div>
							        <div class="a-view__col-content">
								        Content
							        </div>
						        </div>
						        <div class="a-view__col">
							        <div class="a-view__col-label">Label Text</div>
							        <div class="a-view__col-content">
								        Content
							        </div>
						        </div>
					        </div><!-- //a-view__row -->
					        <div class="a-view__row column">
						        <div class="a-view__col space--0">
							        <div class="a-view__col-label">Label Text</div>
							        <div class="a-view__col-content">
								        Content
							        </div>
						        </div>
					        </div><!-- //a-view__row -->
					        <div class="a-view__row column">
						        <div class="a-view__col">
							        <div class="a-view__col-label">Label Text</div>
							        <div class="a-view__col-content">
								        Content
							        </div>
						        </div>
						        <div class="a-view__col">
							        <div class="a-view__col-label">Label Text</div>
							        <div class="a-view__col-content">
								        Content
							        </div>
						        </div>
					        </div><!-- //a-view__row -->
				        </div><!-- //a-view__content -->
				        </div><!-- //a-view__group -->
				        <div class="a-view__group">
					        <div class="a-view__header">
						        <div class="a-view__title-sub">
							        <span class="icon"><img src="/resources/images/icon/icon_bag.png" alt=""></span>
							        <span class="label">Title Sub</span>
						        </div>
						        <!-- div class="a-view__func"></div -->
					        </div><!-- //a-view__header -->
					        <div class="a-view__content">
						        <div class="a-view__row space--2">
							        <div class="a-view__col">
								        <div class="a-view__col-label">Label Text</div>
								        <div class="a-view__col-content">
									        Content
								        </div>
							        </div>
						        </div><!-- //a-view__row -->
						        <div class="a-view__row">
							        <div class="a-view__col">
								        <div class="a-view__col-label">Label Text</div>
								        <div class="a-view__col-content">
									        Content
								        </div>
							        </div>
							        <div class="a-view__col">
								        <div class="a-view__col-label">Label Text</div>
								        <div class="a-view__col-content">
									        Content
								        </div>
							        </div>
						        </div><!-- //a-view__row -->
						        <div class="a-view__row column">
							        <div class="a-view__col">
								        <div class="a-view__col-label">Label Text</div>
								        <div class="a-view__col-content">
									        Content
								        </div>
							        </div>
							        <div class="a-view__col">
								        <div class="a-view__col-label">Label Text</div>
								        <div class="a-view__col-content">
									        Content
								        </div>
							        </div>
						        </div><!-- //a-view__row -->
					        </div><!-- //a-view__content -->
				        </div><!-- //a-view__group -->
			        </div>
		        </div></div><!-- //a-view-1 -->
	        </div>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-view',
    components: {
    },
	data() {
		return {
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
