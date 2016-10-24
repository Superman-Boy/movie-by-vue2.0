<template>
  <div class="menu-container">
    <ul class="menu-tab-list rd-row-flex">
      <li v-for="item in menus" class="menu-tab-item rd-col-flex flex-middle">
        <i class="item-icon"
          :class="item.icon"
        ></i>
        <span class="item-desc-text">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {name: '正在热映', icon: 'ion-ios-bookmarks'},
        {name: '即将上映', icon: 'ion-ios-film'},
        {name: '口碑榜', icon: 'ion-ios-videocam'},
        {name: '北美票房榜', icon: 'ion-closed-captioning'},
        {name: 'TOP250', icon: 'ion-videocamera'}
      ]
    }
  }
}
</script>

<style scoped>
@import '../assets/css/ionicicon';
.menu-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  font-size: 12px;
  background: #fff;
  border-top: 1px solid #ccc;
}

.menu-tab-list {

}

.menu-tab-item {
  width: 20%;
  font-size: 10px;
  text-align: center;
  .item-icon {
    font-size: 20px;
    width: 30px;
    height: 20px;
  }
  .item-desc-text {
    font-size: 10px;
  }
}
</style>
