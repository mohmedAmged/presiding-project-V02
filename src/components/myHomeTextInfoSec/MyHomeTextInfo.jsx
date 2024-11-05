import './myHomeTextInfo.css';
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

export default function MyHomeTextInfo() {
    const scrollRef = useRef(null);
    const isInView = useInView(scrollRef, { once: true });

    return (
        <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.8 }}
            style={{ margin: '0 auto' }}
        >
            <div className='myHomeTextInfo__handler'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="myTextItem__content">
                                <div className="text_quote">
                                    <h5>
                                        “We’re in the middle of an exciting time as our company grows. Let’s use this as an opportunity to be proactive and work towards our long-term goals!”
                                    </h5>
                                </div>
                                <div className="text_sign">
                                    <p>
                                        Yazan Abdulkhaleq <span>- CEO</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
