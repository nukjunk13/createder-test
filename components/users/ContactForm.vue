<template>
<div class="bg-indigo-400 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    
  <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
            <form @submit="onSubmit" class="form bg-white p-6 my-10 relative">
                <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px"><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
                <h3 class="text-2xl text-gray-900 font-semibold">Let us call you!</h3>
                <p class="text-gray-600">Contact</p>
                <p class="text-gray-600">phone number: 06-5752-2323</p>
                <p class="text-gray-600">E-mail: cck_61_38@windowslive.com</p>
                <div class="flex space-x-5 mt-3">
                    <input required type="name" placeholder="Your Name" class="border p-2  w-1/2" v-model="form.name">
                    <input required type="tel" pattern="[0-9]{10}" placeholder="Your phone number" class="border p-2 w-1/2" v-model="form.tel">
                </div>
                <input required type="email" placeholder="Your Email" class="border p-2 w-full mt-3" v-model="form.email">
                <textarea required cols="10" rows="3" placeholder="Tell us about your problem" class="border p-2 mt-3 w-full" v-model="form.problem"></textarea>
                <input type="submit" value="Submit" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">
                
            </form>
            {{form}}
  </div>
  </div>
</div>
</template>

<script>
export default {
  layout: 'navbarUser',
  data(){
    return{
      form:{
        name:"",
        tel:"",
        email:"",
        problem:""
      }
    }
  },
  methods:{
    onSubmit(evt){
        evt.preventDefault();
        this.$emit('sendData',this.form);
        this.$router.push('/');
        //console.log(this.form);
    }
  }
  
}
</script>