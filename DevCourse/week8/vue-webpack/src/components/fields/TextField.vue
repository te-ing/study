<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      :value="modelValue"
      type="text" 
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
import fieldMixin from './mixin'
export default {
  mixins: [fieldMixin]
}
</script>