<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your notes</h3>
        <q-btn round color="positive" icon="add" to="/new"></q-btn>
      </div>
      <NoteCard
        v-for="({ title, description }, index) in notes"
        :key="index"
        :title="title"
        :description="description"
        @click="$router.push(`/note/${index}`)"
      />

      <div v-if="notes.length === 0" style="opacity: 0.3" class="text-h5 flex flex-center">
        You have not created any notes.
      </div>

    </Container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Container from "components/Container";
import NoteCard from "components/NoteCard";
import { useLocalNotes } from "src/helpers";
// import { userRouter } from 'vue-router'

export default defineComponent({
  components: { NoteCard, Container},
  name: 'PageIndex',
  setup() {
    //grab all the notes from localStorage
    const notes = useLocalNotes()
    // to redirect a user to a notes pages when a note is clicked
    // const router = userRouter()
    return { notes }
  }
})
</script>
