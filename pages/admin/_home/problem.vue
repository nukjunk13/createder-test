<template>
  <div><PostProblemList :usersContacts="loadData" /></div>
</template>

<script>
import PostProblemList from '@/components/post/PostProblemList'
import axios from 'axios'
export default {
  layout: 'navbarAdmin',
  components: {
    PostProblemList
  },
  data() {
    return {
      loadData: []
    }
  },
  asyncData(context) {
    //const date = new Date().toISOString().split('T')
    return axios
      .get(`https://createder-test-data-default-rtdb.firebaseio.com/usersContacts/${date[0]}.json`)
      .then((res) => {
        //console.log(res.data);
        const data = []
        for (const key in res.data) {
          data.push({ ...res.data[key], id: key })
          console.log('Data Problem: ',data)
        }
        return {
          loadData: data
        }
      })
  }
}
</script>
