import React, {useState} from 'react';
import axios from "axios";
import './ContactSection.css'


 const ContactSection = () => {

    const [state, setState] = useState({
     name: "", 
      email: "",
      number: "",
      text:"",
      status: "Отправить"
    })

   

   const handleSubmit = (e) => {
        e.preventDefault();  
       console.log(state)
        axios.post('https://jsonplaceholder.typicode.com/posts', state)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    const handleChange = (e) => {
     
        setState({ ...state,
             [e.target.name]: e.target.value})
    }

    const {name, email, number, text, status} = state
    return ( 
        <div className="contacts" id="contactSection">

        <div className="form-contact">
            <div className="contact-header">
              <div className="contact-header-left">
                  <p>Контакты сервис центра</p>
                  <p className="contact-p">EVENTRA SERVICE LLC Uzbekistan, Tashkent, Bunyodkor str, 42/1 +998 (71) 276-47-46 info.uz@eventra.ru</p>
              </div>
              <div className="contact-header-right">
                  <p>Контакты дистрибьютора</p>
                  <p className="contact-p">CA Distribution cisco@ca-dc.uz</p>
              </div>
            </div>  
             <h5 className="contact-label">Обратная связь</h5>
            <form onSubmit={handleSubmit} method="POST" className="forma">
               <div>
               <input
                  type="text"
                  id="name"
                  placeholder="Ф.И.О.*"
                  value={name}
                  name='name'
                  onChange={handleChange}
                  className="input-label"
                  required
               />
               </div>
               <div>
               <input
                  type="email"
                  id="email"
                  placeholder="Email*"
                  value={email}
                  name='email'
                  onChange={handleChange}
                  className="input-label"
                  required
               />
               </div>
               <div>
               <input
                  type="number"
                  id="number"
                  placeholder="Телефон*"
                  value={number}
                  name='number'
                  onChange={handleChange}
                  className="input-label"
                  required
               />
               </div>
               <div>
               <input
                  type="text"
                  id="company"
                  placeholder="Компания*"
                  value={text}
                  name='text'
                  onChange={handleChange}
                  className="input-label"
                  required
               />
               </div>
               <button type="submit" className="submit-button">{status}</button>
               <p className="footer-p">© Cisco 2021. Все права защищены</p>
            </form>   
         </div>
        <div className="contact-map">
            <iframe 
                  title="This is a unique title"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.0519008125475!2d69.2986440935142!3d41.2906004105612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef546466e569f%3A0x7faf379d675b055d!2zQVZUTyBMSU5FINCf0JfQnCDQo9CX0JHQo9Cc!5e0!3m2!1sen!2s!4v1619351684629!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{border:2, width:"100%", height:"100%"}}
                  allowFullScreen=""
                  aria-hidden="false"
                  loading="lazy"
                  tabIndex="0"
                  ></iframe>
        </div>
     </div> 

     );
}
 
export default ContactSection