import Vuex from "vuex"
import axios from "axios"
import { startsWith } from "core-js/core/string";

const createStore=()=>{
    return new Vuex.Store({
        state:{
            //ข้อมูล
            loadData:[]
        },
        mutations:{
            //จัดการข้อมูลใน State
            setPostState(state,posts){
                state.loadData=posts
            },
            editPostState(state,editpost){
                const postIndex=state.loadData.findIndex(
                    post=>post.id == editpost.id
                )
                state.loadData[postIndex]=editpost
            }
        },
        actions:{
            //ทำงานร่วมกับ backend เรียกใช้ผ่าน conponent
            nuxtServerInit(vuexContext,context){
                return axios.get("https://createder-test-data-default-rtdb.firebaseio.com/adminAdds.json")
                .then(res=>{
                    const data=[];
                    for(const key in res.data){
                        data.push({...res.data[key],id:key})
                    }
                    vuexContext.commit("setPostState",data)
                }).catch(e=>context.error(e));
            },
            nuxtServerInitProbelm(vuexContext,context){
                return axios.get("https://createder-test-data-default-rtdb.firebaseio.com/usersContacts.json")
                .then(res=>{
                    const data=[];
                    for(const key in res.data){
                        data.push({...res.data[key],id:key})
                    }
                    vuexContext.commit("setPostState",data)
                }).catch(e=>context.error(e));
            },
            editPost(vuexContext,post){
                return axios.
                    put("https://createder-test-data-default-rtdb.firebaseio.com/adminAdds/"+post.id+".json",post)
                    .then(res=>{
                        //commit mutation
                        vuexContext.commit("editPostState",post)
                    })
            }

        },
        getters:{
            //นำ State ไปใช้งาน
            getAllPosts(state){
                return state.loadData
            }
        }
    });
};
export default createStore
