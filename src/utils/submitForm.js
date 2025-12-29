import axios from "axios"


export const submitForm = async(payload)=>{
    const response = await axios.post(
        /*`http://localhost:3000/server/DataSubmissionForm/submit`*/
        `https://datasavedincatalystdb-60062192979.development.catalystserverless.in/server/DataSubmissionForm/submit`,
        payload,
        {
            headers:{
                "Content-Type":"application/json",
            }
        }
    );
    return response.data;
}