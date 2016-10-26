<template>
  <div class="menu-container">
    <ul class="menu-tab-list rd-row-flex">
      <li v-for="item in menus"
        class="menu-tab-item"
        :class="{active: item.link === activeLink}">
        <router-link :to="{name: item.link}" class="rd-col-flex flex-middle">
          <i class="item-icon"
            :class="item.icon"
          ></i>
          <span class="item-desc-text">{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {name: '正在热映', icon: 'ion-ios-bookmarks', link: 'home'},
        {name: '即将上映', icon: 'ion-ios-film', link: 'comming-soon'},
        {name: '口碑榜', icon: 'ion-ios-videocam', link: 'weekly'},
        {name: '北美票房榜', icon: 'ion-closed-captioning', link: ''},
        {name: 'TOP250', icon: 'ion-videocamera', link: 'top'}
      ]
    }
  },
  props: {
    activeLink: {
      type: String,
      default: 'home'
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
  z-index: 10;
}

.menu-tab-list {

}

.menu-tab-item {
  width: 20%;
  font-size: 10px;
  text-align: center;
  a {
    color: #333;
  }
  &.active {
    a {
      color: #009dd7;
    }
  }
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
