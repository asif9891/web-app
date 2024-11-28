import { useEffect } from "react"


function Converter(currency){
    const [data, setdata] = useEffect({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/${currency}`)
        .then((res)=>{res.json()})
        .then((res)=> setdata(res[currency]))
        console.log(data)
    },[currency])
     console.log(data)
     return data
}

export default converter 