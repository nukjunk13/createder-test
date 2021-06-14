<template>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
    <PostList :adminAdds="loadData"/>
</div>
</template>
<script>
import PostList from '@/components/post/PostList';
import axios from 'axios'
export default {
    layout: 'navbarUser',
    components:{
        PostList
    },
    data(){
      return{
        loadData:[]
      }
    },
    asyncData(context){
      return axios.get("https://createder-test-data-default-rtdb.firebaseio.com/adminAdds.json")
      .then(res=>{
        //console.log(res.data);
        const data=[];
        for(const key in res.data){
          data.push({...res.data[key],id:key})
        }
        return{
          loadData:data
        }
      });
    }
    
}
</script>