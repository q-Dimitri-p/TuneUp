<template>
  <div class="container mt-2">
    <div v-for="(task, index) in tasks" :key="index">
      <b-card :title="task.subject">
        <b-card-text>{{ task.description }}</b-card-text>
        <b-button variant="outline-secondary" class="m-2" @click="edit(index)">Edit</b-button>
        <b-button variant="outline-danger" class="m-2" @click="remove(task, index)">Delete</b-button>
      </b-card>
    </div>
    <b-modal ref="modalRemove" hide-footer title="Exclusion">
      <div class="d-block text-center">
        You are about to delete {{ taskSelected.subject }}
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <b-button variant="outline-secondary" class="m-2" @click="hideModal">Cancel</b-button>
        <b-button variant="outline-danger" class="m-2" @click="confirmRemove(task, index)">Delete anyway</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "List",

  data() {
    return {
      tasks: [],
      taskSelected: []
    }
  },
  created() {
    this.tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
  },
  methods: {
    edit(index) {
      this.$router.push({ name: "form", params: { index } });
    },
    remove(task, index) {
      this.taskSelected = task;
      this.taskSelected.index = index;
      this.$refs.modalRemove.show();
    },
    hideModal() {
      this.$refs.modalRemove.hide();
    },
    confirmRemove() {
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.hideModal();
    }
  }
}

</script>

