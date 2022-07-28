<template>
  <div class="grid grid-cols-2 gap-[60px] pt-6 max-w-[1140px]">
    <infoContact />
    <contactOff />
  </div>
</template>
<script>
import infoContact from '@/components/infoContact.vue'
import contactOff from '@/components/contact-off.vue'
  export default {
    components: {
        infoContact,
        contactOff,
        // contactCmt,
    },
    data() {
      return {
        
    }
  }
}
</script>
