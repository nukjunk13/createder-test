<template>
    <div class="grid grid-cols-3 gap-4">
        <div>
            <PostProblem 
            v-for="usersContact in usersContacts"
            :key="usersContact.id"
            :id="usersContact.id"
            :tel="usersContact.tel"
            :name="usersContact.name"
            :email="usersContact.email"
            :problem="usersContact.problem"
        />
        </div>
    </div>
</template>
<script>
import PostProblem from '@/components/post/PostProblem';
export default {
    components:{
        PostProblem
    },
    props:{
        usersContacts:{
            type:Array,
            required:true
        }
    }
}
</script>