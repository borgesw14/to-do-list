<template>
  <div id="app" class="container has-text-centered">
    <h1 class="title">To-Do List:</h1>
    <hr />
    <!-- Form -->
    <div class="container has-text-left">
      <div class="field">
        <label for="" class="label">Category</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Projects</option>
              <option selected>Discrete</option>
              <option>Web Dev</option>
              <option>Algo</option>
              <option>Cyber Security</option>
            </select>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control is-expanded">
          <input type="text" class="input" placeholder="Do some coding...." />
        </div>
      </div>

      <div class="field">
        <p class="control">
          <button class="button is-info">Save</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 80%;
}
</style>
