import InsightsMainCard from "../insightsMainCard/InsightsMainCard";
import styles from './featuredInsightsSec.module.css';
import PropTypes from "prop-types";
import { baseUrl } from "../../functions/baseUrl";
import { useFetch } from "../../hooks/useFetch";

export default function FeaturedInsightsSec({ isSingleInsight }) {
    const [currData] = useFetch(`${baseUrl}/home-blogs`);

    return (
        <div className={`section__handler`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 mb-5">
                        {
                            isSingleInsight ?
                                <div className={styles.singleInsightHeader}>
                                    <h3 className='text-center'>Explore Market Insights</h3>
                                </div>
                                :
                                <div className="header_ofSec text-start">
                                    <h3>Featured insights</h3>
                                </div>
                        }
                    </div>
                    {
                        currData?.blogs?.map(insight => (
                            <div key={insight?.id} className="col-lg-3 col-md-4">
                                <InsightsMainCard
                                    insight={insight}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

FeaturedInsightsSec.propTypes = {
    isSingleInsight: PropTypes.bool.isRequired,
};