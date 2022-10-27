import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { prototype } from "events";



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
  const [error,setError] = useState(null)
  const [data,setData] = useState<object[]>([])
  const [loading,setLoading] = useState(true)
  const colRef = collection(db,"products")

  useEffect(()=>{
    const fetchData = async() => { 
      try{
        const snapshot = await getDocs(colRef)
        const products:Object[] = []
        snapshot.docs.forEach((doc)=>{
          products.push({...doc.data(),id:doc.id})
        })
        setData(products)
      } catch (error){
        console.error(error)
      } finally{
        setLoading(false)
      }
    }
    fetchData()
  },[])
  return {data, loading}
} 

export default useFetcher


// collection ref - import a function to get a reference to the collection


