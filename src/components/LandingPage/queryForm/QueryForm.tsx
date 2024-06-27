import React from 'react';
import styles from './QueryForm.module.css';
import CustomInput from '../common/customInput/CustomInput';

const QueryForm: React.FC  = () => {
  return (
    <div className={`${styles.sectionWrapper}`}>
        <div className='container'>
<form className={`${styles.formWrapper}`}>
    <h2 className={`${styles.topHeading}`}>Send Us Your Query</h2>
<div className={`row ${styles.formFields}`}>
    <div className='col-6'>
    <CustomInput className='mb-4' type="text" placeholder="Full Name" />
    </div>
    <div className='col-6'>
    <CustomInput className='mb-4' type="text" placeholder="Phone Number" />
    </div>
    <div className='col-12'>
    <CustomInput type="text" placeholder="Message" />
    </div>
    <div className='col-12'>
    <button className={`btn btn-primary w-100 ${styles.CustomButton}`}>Submit</button>
    </div>

</div>
</form>
        </div>
        
    </div>
  )
}

export default QueryForm