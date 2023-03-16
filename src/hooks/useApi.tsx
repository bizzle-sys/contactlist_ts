import React from 'react'
import axios from 'axios'
import { ContactDataType } from '../interface/interface'

export const useApi = () => {
    const [data, setData] = React.useState<ContactDataType[]>()
    const [error, setError] = React.useState<boolean>(false)
    const [loading, setLoading] = React.useState<boolean>(false)

 const fetchContact = async () =>{
    setLoading(true)
    try {
        const response = await axios ({
            method: 'GET' ,
            url: process.env.REACT_APP_BASE_URL
        })
      
        setTimeout(()=>{
            setData(response.data)
        setLoading(false)
        }, 7000)
        
    }
    catch(error) {
        setError(true)
        setLoading(false)
    }
 }
 return {data, loading, error, fetchContact}
}
