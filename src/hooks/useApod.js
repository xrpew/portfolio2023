import { useEffect, useState } from "react"



export const useApod = () => {
    const [ picture, setPicture ] = useState({})

    useEffect(() => {
      fetch('https://api.nasa.gov/planetary/apod?api_key=i2W75eg7ZUMs07KKB62Zc7PfN54ycBSlyEDoow4A')
        .then(res=>res.json())
        .then(data=>{
          setPicture(data)
        })
        
    }, [])

    return { picture }

}

