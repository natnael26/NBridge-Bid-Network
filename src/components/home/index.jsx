import React from 'react'
import styles from './Home.module.css'

import sample from '../../assests/images/sample_company.jpg'
function Index() {
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Easiest material machinery and labour pricing for bidders technical and financial document</h1>
                <div className={styles.paragraph}>
                   
                    <p>Register as client to break down bid, as supplier for proforma fill,as tender engineer for cost breakdown, or as freelancer for diffrent tasks</p>
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://res.cloudinary.com/almpo/image/upload/v1637241441/special/banner_izy4xm.png" alt="invoicing-app"/>
                </div>
            </section>

            <section className={styles.hero}>
                <h1>Tenders Category</h1>
                </section>
                <div className={`row ${styles.tender_category}`}>
                    <div className='col-3 col-offset-1'>
                    <div className={`card ${styles.tender}`}>
                    <img className={styles.sample_img} src={sample} alt="" />
                    <div className="row">
                        <div className={`col-12 ${styles.cent}`}>
                            <h3>Construction</h3>
                        </div>
                        
                    </div>
                 </div>
                    </div>

                    <div className='col-3 col-offset-1'>
                    <div className={`card ${styles.tender}`}>
                    <img className={styles.sample_img} src={sample} alt="" />
                    <div className="row">
                        <div className={`col-12 ${styles.cent}`}>
                            <h3>Furniture</h3>
                        </div>
                        
                    </div>
                 </div>
                    </div>

                    <div className='col-3 col-offset-1'>
                    <div className={`card ${styles.tender}`}>
                    <img className={styles.sample_img} src={sample} alt="" />
                    <div className="row">
                        <div className={`col-12 ${styles.cent}`}>
                            <h3>Electrical and Electro-mechanical</h3>
                        </div>
                        
                    </div>
                 </div>
                    </div>
                </div>
                 
            
        </div>
    )
}

export default Index