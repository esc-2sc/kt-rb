<template>
    <main class="wrap">
        <header class="header">
            <h1 class="logo"><a href="#"><img src="/resources/images/svg/logo-black.svg" alt="R-Brain"></a></h1>
            <navigation/>
            <div class="aside">
              <span class="user" id="userInfoPopup" @click="openUserDetailPopup">user</span>
            </div>
        </header>
        <div class="contents">
            <router-view></router-view>
        </div>

      <vx-popup ref="userDetail" positionTarget="#userInfoPopup" :horizontalOffset=0 :verticalOffset=13 close-on-outside-down>
        <div class="a-alert-message user">
          <div class="a-alert-message__label">
            <div class="a-alert-message__desc">
              <div class="user-info">
                <div class="name">홍길동<span>309309</span></div>
                <div class="email">Honggil@gmail.com</div>
              </div>
            </div>
          </div>
          <div class="a-alert-message__buttons">
            <button class="a-btn-type-1" @click="closeUserDetailPopup">로그아웃</button>
          </div>
        </div><!-- //a-alert-message -->
      </vx-popup>
    </main>
</template>

<script>
import Navigation from "@/views/layouts/Navigation";
export default {
	name: 'layout-detail',
	components: {
        Navigation,
	},
    data() {
        return {
          isUserActive:0,
        };
    },
  methods: {
    openUserDetailPopup() {
      this.isUserActive = !this.isUserActive;
      this.$refs.userDetail.open();
    },
    closeUserDetailPopup() {
      this.isUserActive = !this.isUserActive;
      this.$refs.userDetail.close();
    }
  },
};
</script>
