import { createStore } from "redux";

const INITAIAL_VALUE= {
 counter:0,
 privacy:false
}

const Counterreducer=(store=INITAIAL_VALUE,action) => {
   
    if(action.type==="INREAMENT"){
        return {...store,counter:store.counter+1}
    }

   else  if(action.type==="DECREMENT"){
        return {...store,counter:store.counter-1}
    }

    else  if(action.type==="Add"){
        return {...store,counter:store.counter+Number(action.payload.num)}
    }
    
    else  if(action.type==="SUBSTRACT"){
        return {...store,counter:store.counter-Number(action.payload.num)}
    }


    else  if(action.type==="PRIVACY"){
        return {...store,counter:store.counter,privacy:!store.privacy}
    }
    return store
    
}
const counterstore=createStore(Counterreducer);


export default counterstore


