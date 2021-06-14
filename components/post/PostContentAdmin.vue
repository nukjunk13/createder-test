<template>
<div>
 <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" :src=img alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{name}}</div>
    <p class="text-gray-700 text-base">
      {{content}}
    </p>
    <p class="text-gray-700 text-base">
      type:  {{type}}
    </p>
    <br>
    
    <div  class="font-bold text-xl mb-2">ประมาณ  {{price}} Bath.</div>
    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Edit</button>
  </div>
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
      name: {
          type:String,
          required:true
      },
      content: {
          type:String,
          required:true
      },
      img: {
          type:String,
          required:true
      },
      price: {
          type:String,
          required:true
      },
      type:{
          type:String,
          required:true
      }
    },
    methods:{

    }
}
</script>