<template>
  <div>
    <form @submit.prevent class="global-rounded-form mdl-shadow--2dp">
      <h3>Add a new Product</h3>

      <div class="global-rounded-form-input">
        <i class="uil uil-scenery"></i>
        <input type="url" name="img" id v-model="img" placeholder="img (url only)" required />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-label"></i>
        <input type="text" name="name" id v-model="name" placeholder="name" required />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-tag"></i>
        <input type="text" name="description" id v-model="description" placeholder="description" required />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-clock-two"></i>
        <input type="text" name="price" id v-model="time_start" placeholder="price" required/>
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-clock-nine"></i>
        <input type="text" name="categoria" id v-model="time_end" placeholder="category" required/>
      </div>
      <!--global floating input-->    
      <br />
      <br />
            <button class="global-button" v-on:click="addProduct">Add new product</button>
      <br />
      <br />
    </form>
  </div>
</template>

<script>
export default {};
</script>