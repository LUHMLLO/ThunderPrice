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
        <input
          type="text"
          name="description"
          id
          v-model="description"
          placeholder="description"
          required
        />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-clock-two"></i>
        <input
          type="text"
          name="schedule"
          id
          v-model="time_start"
          placeholder="start hour"
          required
        />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-clock-nine"></i>
        <input
          type="text"
          name="schedule_end"
          id
          v-model="time_end"
          placeholder="end hour"
          required
        />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-phone-alt"></i>
        <input type="text" name="phone" id v-model="phone" placeholder="phone" required />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-envelope-alt"></i>
        <input type="text" name="email" id v-model="email" placeholder="email" required />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-map-pin-alt"></i>
        <input type="text" name="location" id v-model="location" placeholder="location" required />
      </div>
      <!--global floating input-->

      <div class="global-rounded-form-input">
        <i class="uil uil-video"></i>
        <input
          type="text"
          name="video"
          id
          v-model="video"
          placeholder="video about this service (url only)"
          required
        />
      </div>
      <!--global floating input-->

      <br />
      <br />
            <button class="global-button" v-on:click="addService">Add new service</button>
      <br />
      <br />
    </form>
  </div>
</template>

<script>
export default {};
</script>