import { useParams } from "react-router-dom";
import MyHeroImage from "../../components/myHeroImageSec/MyHeroImage";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../functions/baseUrl";
import CareerJobDetails from "../../components/careerJobDetailsSec/CareerJobDetails";

export default function SingleCareer() {
    const {JobId} = useParams()
    const [job, setJob] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState([]);
    console.log(JobId);


    useEffect(()=>{
        const getSingleJob = async () => {
            try {
                const response = await axios.post(`${baseUrl}/get-job?t=${new Date().getTime()}`,{
                    job_id: JobId,
                } ,{
                    headers: {
                        "Content-Type": 'application/json',
                        Accept: 'application/json',
                    }
                });
                setJob(response?.data?.data?.job)
                
            } catch (error) {
                setError(error?.response?.data?.message);
            
            };
        };
        getSingleJob()
    },[setJob])    
  return (
    <>
    <MyHeroImage title={`${job?.title} job Details`} />
    <CareerJobDetails jobDetails={job}/>
    </>
  )
}
