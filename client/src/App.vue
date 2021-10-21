<template>
  <div id="app" class="container has-text-centered">
    <h1 class="title">To-Do List:</h1>
    <hr />
    <!-- Form -->
    <div class="container has-text-left">
      <div class="field has-addons">
        <p class="control">
          <span class="select">
            <select v-model="category">
              <option disabled value="">Select Category</option>
              <option>Projects</option>
              <option>Discrete</option>
              <option>Web Dev</option>
              <option>Algo</option>
              <option>Cyber Security</option>
            </select>
          </span>
        </p>
        <div class="control is-expanded">
          <input
            type="text"
            class="input"
            placeholder="Do some coding...."
            v-model="description"
          />
        </div>
        <p class="control">
          <button class="button is-info" @click="saveItem">Save</button>
        </p>
      </div>
      <div class="field"></div>
    </div>
    <hr />
    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <div class="columns">
        <p class="column is-narrow">
          <span class="tag is-primary">
            {{ i + 1 }}
          </span>
        </p>
        <p class="column">
          {{ item.description }}
        </p>
        <p class="column is-narrow">
          <span>{{ item.category }}</span>
        </p>
        <div class="column is-narrow">
          <span class="icon has-text-info" @click="removeItem(item, i)">
            <i class="material-icons">delete</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      items: [],
      description: "",
      category: "",
    };
  },
  async mounted() {
    const response = await axios.get("api/toDoListItems/");
    this.items = response.data;
  },
  methods: {
    async saveItem() {
      const response = await axios.post("api/toDoListItems/", {
        description: this.description,
        category: this.category,
      });
      this.items.push(response.data);
      this.description = "";
      this.category = "";
    },
    async removeItem(item, i) {
      await axios.delete("api/toDOListItems/" + item._id);
      this.items.splice(i, 1);
    },
  },
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 80%;
}
.icon {
  cursor: pointer;
}
</style>
