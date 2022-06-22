<template>
    <guide-box title="User" desc="Text, Image, Icon" :to="$options.name">
        <guide-box-item title="Text">
            <guide-table>
                <guide-table-item label="Large">
                    <div>
                        <div class="a-user size--large">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>999</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large online">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Medium - default">
                    <div>
                        <div class="a-user">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>99</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user online">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Small">
                    <div>
                        <div class="a-user size--small">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>9</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small online">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="Image">
            <guide-table>
                <guide-table-item label="Large">
                    <div>
                        <div class="a-user size--large">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>999</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large online">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Medium - default">
                    <div>
                        <div class="a-user">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>99</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user online">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Small">
                    <div>
                        <div class="a-user size--small">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>9</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small online">
                            <figure class="a-user__image" style="background-image:url('/resources/images/temp/img_man.jpg')"></figure>
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
        <guide-box-item title="Icon : icon--person / icon--org">
            <guide-table>
                <guide-table-item label="Large">
                    <div>
                        <div class="a-user size--large icon--person">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large icon--person">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>999</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large online icon--person">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Medium - default">
                    <div>
                        <div class="a-user icon--person">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user icon--person">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>99</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user online icon--person">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Small">
                    <div>
                        <div class="a-user size--small icon--person">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small icon--person">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>9</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small online icon--person">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
            </guide-table>
            <br><br>
            <guide-table>
                <guide-table-item label="Large">
                    <div>
                        <div class="a-user size--large icon--org">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large icon--org">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>999</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--large online icon--org">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Medium - default">
                    <div>
                        <div class="a-user icon--org">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user icon--org">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>99</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user online icon--org">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
                <guide-table-item label="Small">
                    <div>
                        <div class="a-user size--small icon--org">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small icon--org">
                            <span class="a-user__label">AB</span>
                            <span class="a-user__badge"><em>9</em></span>
                        </div>
                    </div>
                    <div>
                        <div class="a-user size--small online icon--org">
                            <span class="a-user__label">AB</span>
                        </div>
                    </div>
                </guide-table-item>
            </guide-table>
        </guide-box-item>
    </guide-box>
</template>

<script>
export default {
    name: 'guide-user',
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
