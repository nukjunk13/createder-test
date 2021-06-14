<template>
<div class="bg-indigo-400 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    
  <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <form @submit="onSubmit" class="form bg-white p-6 my-10 relative">
                <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px"><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
                <h3 class="text-2xl text-gray-900 font-semibold">Add Product</h3>
                <div class="flex space-x-5 mt-3">
                    <input required type="text" placeholder="Name of tree" class="border p-2  w-1/2" v-model="form.name">
                    <input required type="text" pattern="[0-9]{1,}" placeholder="Price" class="border p-2 w-1/2" v-model="form.price">
                </div>
                <input required type="text" placeholder="IMG (URL)" class="border p-2 w-full mt-3" v-model="form.img">

<br><br>
<div class="relative inline-flex">
    <h1>type</h1>&nbsp;
  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select class="required border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none" v-model="form.type">
    <option>indoor tree</option>
    <option>outdoor tree</option>
    <option>captus</option>
  </select>
</div>

                
                <textarea required cols="10" rows="3" placeholder="Content" class="border p-2 mt-3 w-full" v-model="form.content"></textarea>
                <input type="submit" value="Submit" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">
                
            </form>
            {{form}}
  </div>
  </div>
</div>
</template>

<script>
export default {
  layout: 'navbarAdmin',
  data(){
    return{
      form:{
        name:"",
        price:"",
        img:"",
        content:"",
        type:"",
      }
    }
  },
  methods:{
    onSubmit(evt){
        evt.preventDefault();
        this.$emit('sendData',this.form);
        this.$router.push('/admin/home/add');
        //console.log(this.form);
    }
  }
  
}
</script>