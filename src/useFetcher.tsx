import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { prettyDOM } from "@testing-library/react";


const firebaseConfig = {
    apiKey: "AIzaSyAyzZpxTRH6K2kPwJoJIc98pIbzDf3Vfno",
    authDomain: "fir-shop-app-24b54.firebaseapp.com",
    projectId: "fir-shop-app-24b54",
    storageBucket: "fir-shop-app-24b54.appspot.com",
    messagingSenderId: "312518196401",
    appId: "1:312518196401:web:9804694fcb8d3bf9d03690"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore()

const useFetcher = () => { 
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [data,setData] = useState<object[]>([])
  const colRef = collection(db,"products")
  
  useEffect(()=>{
    getDocs(colRef)
    .then((snapshot) => {
        const products:Object[] = []
        snapshot.docs.forEach((doc) => {
          products.push({ ...doc.data()})
        })
        setData(products)
    })
    .catch(err => setError(err))
  },[])

  return {data,error,loading}
} 

export default useFetcher


// collection ref - import a function to get a reference to the collection


