<template>
  <ContactForm @sendData="onSubmitted" />
</template>

<script>
import ContactForm from '@/components/users/ContactForm'
import axios from 'axios'
export default {
  layout: 'navbarUser',
  components: {
    ContactForm
  },
  methods: {
    onSubmitted(postData) {
      const date = new Date().toISOString().split('T')
      //const day = date.toLocaleDateString();
      console.log('Day',date[0]);
      axios
        .post(`https://createder-test-data-default-rtdb.firebaseio.com/usersContacts/${date[0]}.json`, postData)
        .then((res) => {
          console.log(res)
          alert('บันทึกข้อมูลสำเร็จ')
        })
        .catch((e) => {
          console.log(e)
          alert('บันทึกข้อมูลไม่สำเร็จ')
        })
    }
  }
}
</script>
