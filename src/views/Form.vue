<template>
  <div class="container mt-2">
    <b-form>
      <b-form-group label="Title" label-for="subject">
        <b-form-input id="subject" v-model="form.subject" type="text" placeholder="Wash car" required
          autocomplete="off"></b-form-input>
      </b-form-group>

      <b-form-group label="Description" label-for="description">
        <b-form-textarea id="description" v-model="form.description" type="text" placeholder="I need to wash my car"
          required autocomplete="off"></b-form-textarea>
      </b-form-group>
      <b-button @click="saveTask" class="m-2" type="submit" variant="outline-primary">Save</b-button>

    </b-form>
  </div>
</template>

<script>
import toastMixin from "@/mixins/toastMixin.js";
export default {
  name: "Form",

  mx: [toastMixin],

  data() {
    return {
      form: {
        subject: "",
        description: ""
      },
      methodSave: "new"
    }
  },

  created() {
    if (this.$route.params.index === 0 || this.$route.params.index !== undefined) {
      this.methodSave = "update";
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.form = tasks[this.$route.params.index]
    }
  },

  methods: {
    saveTask() {
      if (this.methodSave === "update") {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.showToast("success", "Success", "Updated!");
        this.$router.push({ name: "list" });
        return;
      }
      let tasks = (localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.showToast("success", "Success", "Created!");
      this.$router.push({ name: "list" });
    }
  }
}

</script>
