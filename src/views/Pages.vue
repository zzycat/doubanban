<template>
  <div class="pages-view">
    <header-bar @showTalion="open"></header-bar>
    <router-view></router-view>
    <talion v-show="talion" @closeTalion="close"></talion>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import Talion from './Talion'

export default {
  name: 'pages-view',
  components: { HeaderBar, Talion },
  data () {
    return {
      talion: ''
    }
  },
  methods: {
    open: function () {
      this.talion = 'open'
    },
    close: function () {
      this.talion = ''
    }
  }
}
</script>

<style scoped>

</style>
