
const menuNames:Array<{name:string,url:string, id?:number,route?:string}> = [
    {
        name:"Home",
        url:"/",
    },
    {
        name:"Catalogue",
        url:"collection",
    },
    {   
        id:1,
        name:"Kurtas",
        url:"collection/kurtas",
    },
    {   
        id:2,
        name:"Casual",
        url:"collection/casual",
    },
    {   
        id:3,
        name:"Dresses",
        url:"collection/dresses",
    },
    {
        name:"Contact-us",
        url:"contact-us",
    },
]


export {menuNames}