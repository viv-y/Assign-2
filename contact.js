import React from 'react';
import './contact.css';
import Photo from './photo9.webp';

const Contact= () => {

    return(
        <div>
             
        <div class="container d-flex justify-content-center mt-100">
         <div class="row">
             <div class="col-md-6">
                <div class="card">
                    <div class="card-body text-center">



                    <img class="card-img-top" src={Photo} height={200} width={200} alt="Card image cap"/>


                       
                      <h4>Contact Me</h4>
                      <p>Drop us a mail on vivekyadav475@gmail.com or  Call on 9773807608 </p>

                      <button class="btn btn-out btn-square"> CONTACT NOW</button>
                        
                           

                    </div>
                </div>
             </div>
         </div>
        </div>


        </div>
    )

}

export default Contact;