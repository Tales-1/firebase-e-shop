import imgs from "./images/imgs"

interface DataType {
    id:number
    type:string
    name:string
    src:string
    description:string
    price:number
}

interface DataArray extends Array<DataType>{}

const dataArray:DataArray = [
    {
        id:1,
        type:"kurta",   
        name:"Blue kurta",
        src:"",
        description:"",
        price:10.00
    },
    {
        id:2, 
        type:"kurta",
        name:"Red Kurta",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:3, 
        type:"kurta",
        name:"Grey Kurta",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:4, 
        type:"dress",
        name:"white dress",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:5, 
        type:"dress",
        name:"gold fancy dress",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:6, 
        type:"dress",
        name:"orange dress",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:7, 
        type:"casual",
        name:"Long sleeve top",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:8, 
        type:"casual",
        name:"long trousers",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:9, 
        type:"dress",
        name:"green maxi",
        src:"",
        description:"",
        price:10.00
     },
     {
        id:10, 
        type:"kurta",
        name:"fancy kurta",
        src:"",
        description:"",
        price:10.00
     }]

    
export default dataArray