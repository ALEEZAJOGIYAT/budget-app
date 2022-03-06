import{
    ADD_USER_DATA
} from './actions-types'

export const login=(data)=>{
 return{
     type:ADD_USER_DATA,
     payload:{
         id: new Date().getTime().toString(),
         data:data
     }
 }
}