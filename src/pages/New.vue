<template>
  <q-page padding>
    <Container>
      <h3>New Note</h3>
      <form @submit="submit">
        <q-input class="q-mt-sm" outlined label="Title" v-model="note.title" />

        <q-input
          v-model="note.description"
          class="q-my-sm"
          outlined
          label="Description"
          dense
        />

        <q-card flat bordered>
          <q-editor v-model="note.content" min-height="8rem" />
        </q-card>

        <div class="q-my-sm">
          <q-btn color="grey" to="/" type="reset">Cancel</q-btn>
          <q-btn class="q-ml-sm" color="positive" to="/" type="submit">Create</q-btn>
        </div>
      </form>
    </Container>
  </q-page>
</template>

<script>
import Container from "components/Container";
import {useLocalNotes} from "src/helpers";
import {reactive} from 'vue'
export default {
  name: "New",
  components: { Container },
  setup() {
    const notes = useLocalNotes()

    const note = reactive({
      title: '',
      description: '',
      content: ''
    })

    // add new note and save to localStorage
    const submit = () => {
      notes.value.unshift({
        ...note,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })

      this.router.push('/')

      // reset the form data
      note.title = ''
      note.description = ''
      note.content = ''
    }
    return { note , submit }
  }

}
</script>

<style scoped>

</style>
