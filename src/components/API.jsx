import { useEffect } from "react";

function Api() {
  
useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    },[ ])
}

export default Api;
