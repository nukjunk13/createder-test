<template>
<div>
    
  <div class="px-6 py-4"> 
    <div class="font-bold text-xl mb-2">{{name}}</div>
    <p class="text-gray-700 text-base">
    ติดต่อ: {{tel}}
    </p>
    <p class="text-gray-700 text-base">
      E-mail:  {{email}}
    </p>
    <div class="font-bold text-xl mb-2">รายละเอียด:  {{problem}}</div>
  </div>
</div>
</template>
<script>
export default {
    props: {
      id: {
          type:String,
          required:false
      },  
      tel: {
          type:String,
          required:true
      },
      email: {
          type:String,
          required:true
      },
      problem: {
          type:String,
          required:true
      },
      name: {
          type:String,
          required:true
      },
    }
}
</script>