<template>
    <div class="grid grid-cols-3 gap-4">
        <div>
            <PostContentAdmin 
            v-for="addminAdd in adminAdds"
            :key="addminAdd.id"
            :id="addminAdd.id"
            :content="addminAdd.content"
            :img="addminAdd.img"
            :name="addminAdd.name"
            :price="addminAdd.price"
            :type="addminAdd.type"

        />
        </div>
    </div>
</template>
<script>
import PostContentAdmin from '@/components/post/PostContentAdmin';
export default {
    components:{
        PostContentAdmin
    },
    props:{
        adminAdds:{
            type:Array,
            required:true
        }
    }
}
</script>