import { useEffect, useRef, useState } from 'react';
import styles from './contact-form.module.css';
import Notification from '../ui/notification'; 

const ContactForm = () => {
   const emailRef = useRef();
   const nameRef = useRef();
   const messageRef = useRef();
   const [reqStatus, setReqStatus] = useState();
   const [error, setError] = useState();

   useEffect(() => {
       let timer;
       if (reqStatus === 'success' || reqStatus === 'error') {
          timer = setTimeout(() => {
            setReqStatus(null);
            setError(null);
         }, 300);
       }

       return () => clearTimeout(timer);
   }, [reqStatus]);

   const handleFormSubmit = async (event) => {
       // prevent browser default, which reloads the page
       event.preventDefault();
    
       const email = emailRef.current.value;
       const name = nameRef.current.value;
       const message = messageRef.current.value;

       setReqStatus('pending');
       try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                email,
                name,
                message
                })
            });
    
            if(!response.ok) {
                throw new Error(response.message || 'Something went wrong');
            }
            const resData = await response.json();
          
            setReqStatus('success');

        } catch(err) {
            console.log(err);
            setError(err.message);
            setReqStatus('error');
        }
   }; 

   let notification;
   if (reqStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message',
            message: 'Processing sending message, please wait'
        }
    } 
   if (reqStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success',
            message: 'Message Submitted Successfully'
        }
    } 

   if (reqStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error',
            message: error
        }
    } 

   return (
     <section className={styles.contact}>
       <h2>How can I help you</h2>
       <form className={styles.form}>
           <div className={styles.controls}>
               <div className={styles.control}>
                   <label htmlFor='email'>Email</label>
                   <input type='email' id='email' required ref={emailRef}/>
               </div>
               <div className={styles.control}>
                   <label htmlFor='name'>Name</label>
                   <input type='text' id='name' required ref={nameRef}/>
               </div>
           </div>
           <div className={styles.control}>
               <label htmlFor='message'>Message</label>
               <textarea id='message' rows='5' ref={messageRef}></textarea>
           </div>
           <div className={styles.actions}>
               <button onClick={handleFormSubmit}>Send Message</button>
           </div>
       </form>
        {
            notification ? <Notification status={notification.status} title={notification.title} message={notification.message} /> : null
        } 
     </section>
   );
};

export default ContactForm;