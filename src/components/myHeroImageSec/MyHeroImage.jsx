import PropTypes from 'prop-types';
import styles from './myHeroImage.module.css'
export default function MyHeroImage({title, subTit}) {
  return (
    <div className={`${styles.heroImage__handler}`}>
        <div  className={`${styles.overlay}`}></div>
        <div className="container">
            <div className={`${styles.heroImage__text}`}>
                <h2>
                    {title}
                </h2>
                <p>
                    {subTit}
                </p>
            </div>
        </div>
    </div>
  )
}
MyHeroImage.propTypes = {
    title: PropTypes.string.isRequired,
    subTit: PropTypes.string,
};