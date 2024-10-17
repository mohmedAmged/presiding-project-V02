import { Table } from 'react-bootstrap';
import { baseUrl } from '../../functions/baseUrl';
import { useFetch } from '../../hooks/useFetch';
import styles from './careerJopsTable.module.css'
import { NavLink } from 'react-router-dom';
export default function CareerJopsTable() {
    const [currData] = useFetch(`${baseUrl}/all-jobs?t=${new Date().getTime()}`);
    console.log(currData);
    
  return (
    <div className={`${styles.careerJopsTable__handler}`}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className={`${styles.careerJops__header}`}>
                        all jobs
                    </h2>
                    <div className={`${styles.jobsTable_sec}`}>
                        <Table responsive>
                            <thead>
                                <tr className={`${styles.table__Header}`}>
                                    <th className={` ${styles.jopTitle}`}>
                                        job Title
                                    </th>
                                    <th className=''>job Type</th>
                                    <th className=''>Location</th>
                                    <th className=''>Department</th>
                                    <th className=''>Experiance level</th>
                                    <th className=''>Available To</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currData?.jobs?.map((row, index) => (
                                    <tr  className={`${styles.table__Body}`} key={index}>
                                        <td title={row?.title} className={`${styles.BodyJopTit}`}>
                                            <NavLink to={`job-Details/${row?.id}`} className={'nav-link'}>
                                                {row?.title}
                                            </NavLink>
                                        </td>
                                        <td title={row?.job_type}>
                                            {row?.job_type}
                                        </td>
                                        <td title={row?.country} className={`${styles.countryStyle}`}>
                                            {row?.country} <i className="bi bi-check-circle-fill"></i>
                                        </td>
                                        <td title={row?.department}>
                                            {row?.department}
                                        </td>
                                        <td title={row?.years_of_experience}>
                                            {row?.years_of_experience}
                                        </td>
                                        <td title={row?.end_date}>
                                            {row?.end_date}
                                        </td>
                                        <td className={`${styles.tableActions}`}>
                                            <button className={`${styles.applayBtn}`}>
                                                apply
                                            </button>
                                            <NavLink to={`job-Details/${row?.id}`} className={'nav-link'}>
                                                <button className={`${styles.learnBtn}`}>
                                                    Learn more
                                                </button>
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
