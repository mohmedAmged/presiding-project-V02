import PropTypes from 'prop-types';
import styles from './careerJobDetails.module.css'
import { useEffect, useState } from 'react';
import MyLoader from '../myLoaderSec/MyLoader';
export default function CareerJobDetails({jobDetails}) {
    console.log(jobDetails);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, [loading]);
  return (
    <>
        {
            jobDetails?.length === 0 && loading ? 
            <MyLoader />
            :
            <div className={`${styles.careerJobDetails_handler}`}>
                <div className="container">
                    <div className="row">
                        <div className="co-12">
                            <div className={`${styles.JobDetails_action}`}>
                                <button className={`${styles.applayBtn}`}>
                                    apply
                                </button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className={`${styles.JobDetails_allInfo}`}>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        Description
                                    </h3>
                                    <p>
                                        {jobDetails?.description}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        department
                                    </h3>
                                    <p>
                                        {jobDetails?.department}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                        managment level
                                    </h3>
                                    <p>
                                        {jobDetails?.managment_level}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    education
                                    </h3>
                                    <p>
                                        {jobDetails?.education}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    travel requirment
                                    </h3>
                                    <p>
                                        {jobDetails?.travel_requirment}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    responsabilities
                                    </h3>
                                    <p>
                                        {jobDetails?.key_responsabilities}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    years of experience
                                    </h3>
                                    <p>
                                        {jobDetails?.years_of_experience}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    job type
                                    </h3>
                                    <p>
                                        {jobDetails?.job_type}
                                    </p>
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    languages
                                    </h3>
                                    {
                                        jobDetails?.languages?.map((el)=>(
                                            <p key={el?.id}>
                                                {el?.name}
                                            </p>
                                        ))
                                    }
                                </div>
                                <div className={`${styles.JobDetails_singleInfo}`}>
                                    <h3>
                                    skills
                                    </h3>
                                    {
                                        jobDetails?.skills?.map((el)=>(
                                            <p key={el?.id}>
                                                {el?.name}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
    
  )
}
CareerJobDetails.propTypes = {
    jobDetails: PropTypes.object,
};
