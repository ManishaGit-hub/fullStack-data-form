import axios from "axios"

const API_BASE_URL = "http://localhost:5050"

export const submitForm = async(formData)=>{
    const response = await axios.post(
        `${API_BASE_URL}/submit`,
        formData,
        {
            header:{
                "content-Type":"application/json",
            },
        }
    )
    return response.data
}