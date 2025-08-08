<script setup>
import { defineProps, defineEmits, ref } from "vue";
import MultiSelect from "primevue/multiselect";

const props = defineProps({
  modelValue: Array,
  options: Array,
  optionLabel: {
    type: String,
    default: "label",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Select options",
  },
  filter: {
    type: Boolean,
    default: true,
  },
  filterBy: {
    type: String,
    default: "label",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "multi-select",
  },
});

defineEmits(["update:modelValue"]);
const internalValue = ref([...props.modelValue]);
</script>

<template>
  <div class="multi-select-wrapper">
    <label :for="id" class="multi-select-label">{{ label }}</label>
    <MultiSelect
      :id="id"
      v-model="internalValue"
      :options="options"
      :optionLabel="optionLabel"
      :placeholder="placeholder"
      :filter="filter"
      :filterBy="filterBy"
      :disabled="disabled"
      :ariaLabel="ariaLabel"
      @update:modelValue="$emit('update:modelValue', $event)"
      class="multi-select"
    />
  </div>
</template>

<style scoped>
.multi-select-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.multi-select-label {
  font-weight: bold;
}

.multi-select {
  width: 100%;
}
</style>
