<template>
  <q-card
    flat
    bordered
    class="q-mb-xs cursor-pointer"
    @click="$emit('click', $event)"
  >
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-my-xs">{{ title }}</div>
      <div class="text-caption text-grey">
        {{ description }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
name: "NoteCard",
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>
