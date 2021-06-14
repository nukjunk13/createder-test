<template>
  <div>
    <AddForm @sendData="onSubmitted"/>
  </div>
</template>

<script>
import AddForm from '@/components/admin/AddForm';
import axios from 'axios'
export default {
  layout: 'navbarAdmin',
  components:{
    AddForm
  },
  methods:{
    onSubmitted(postData){
      axios.
      post("https://createder-test-data-default-rtdb.firebaseio.com/adminAdds.json" ,postData)
      .then(res=>{
        console.log(res);
        alert('บันทึกข้อมูลสำเร็จ');
      })
      .catch(e => {
        console.log(e);
        alert('บันทึกข้อมูลไม่สำเร็จ');
      })
    }
  }
  
}
</script>