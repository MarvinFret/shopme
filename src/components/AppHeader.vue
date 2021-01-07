<template>
  <div class="collapse">
    <div @click="show=!show;" class="header">
      <slot name="header"></slot>
      <font-awesome-icon v-if="!show" :icon="chevronDown" size="1x" />
      <font-awesome-icon v-else :icon="chevronUp" size="1x" />
    </div>
    <transition>
      <div v-if="show" class="collapse-content">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Collapse',
  components: {FontAwesomeIcon},
  data () {
    return {
      show: false,
      chevronUp: faChevronUp,
      chevronDown: faChevronDown,
    }
  },
}
</script>
<style scoped>
header {
  font-family: 'Quicksand', cursive;
  letter-spacing: 1px;
  font-size: 18px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff8c22;
  padding-left: 22px;
}

h1 {
  cursor: pointer;
  margin: 0;
  font-size: 24px;
  color: #FFFCF9;
}
</style>
