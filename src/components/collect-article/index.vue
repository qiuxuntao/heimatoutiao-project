<template>
<van-icon
:name="value ? 'star' :'star-o' "  :class="{
    collected:value
}"/>

</template>

<script>
export default {
  name: 'CollectArticle',

  components: {},
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped lang='less'>

.van-icon {
        color: pink;
}

</style>
