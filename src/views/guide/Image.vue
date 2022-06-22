<template>
    <guide-box title="Image" desc="a-img-1, a-img-2, a-img-3" :to="$options.name">

        <guide-box-item title="a-img-1">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-img-1">
                            <figure class="a-img__figure"><img src="/resources/images/temp/img_temp1.jpg" alt=""></figure>
                            <span class="a-img__label">텍스트</span>
                        </div><!-- //a-img-1 -->

                    </div>
                    <div>

                        <div class="a-img-1">
                            <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                            <span class="a-img__label">텍스트 텍스트 텍스트 텍스트 텍스트</span>
                        </div><!-- //a-img-1 -->

                    </div>
                    <div>

                        <div class="a-img-1 selected">
                            <figure class="a-img__figure"><img src="/resources/images/temp/img_temp1.jpg" alt=""></figure>
                            <span class="a-img__label">텍스트</span>
                        </div><!-- //a-img-1 -->

                    </div>
                    <div>

                        <div class="a-img-1 selected">
                            <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                            <span class="a-img__label">텍스트 텍스트 텍스트 텍스트 텍스트</span>
                        </div><!-- //a-img-1 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="a-img-2">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <div class="a-img-2">
                            <figure class="a-img__figure"><img src="/resources/images/temp/img_temp1.jpg" alt=""></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                    <div>

                        <div class="a-img-2">
                            <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                    <div>

                        <div class="a-img-2 selected">
                            <figure class="a-img__figure"><img src="/resources/images/temp/img_temp1.jpg" alt=""></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                    <div>

                        <div class="a-img-2 selected">
                            <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                </guide-table-item>
                <guide-table-item label="example 2">
                    <div>

                        <div class="a-img-2 size--small">
                            <figure class="a-img__figure"><img src="/resources/images/temp/img_temp1.jpg" alt=""></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                    <div>

                        <div class="a-img-2 size--small">
                            <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                    <div>

                        <div class="a-img-2  size--small selected">
                            <figure class="a-img__figure"><img src="/resources/images/temp/img_temp1.jpg" alt=""></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                    <div>

                        <div class="a-img-2  size--small selected">
                            <figure class="a-img__figure" style="background-image: url('/resources/images/temp/img_temp1.jpg');"></figure>
                        </div><!-- //a-img-2 -->

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>

        <guide-box-item title="a-img-3">
            <guide-table>
                <guide-table-item label="example 1">
                    <div>

                        <figure class="a-img-3"><img src="" alt=""></figure>

                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>


    </guide-box>
</template>

<script>
export default {
    name: 'guide-image',
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
