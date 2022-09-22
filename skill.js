import React from 'react';
import Photo4 from './e.jpg';
import Photo3 from './d.jpg';

const Skill= () => {

    return(
        <div>
        <div class="card">
  
        <div class="view overlay">
         
          <a>
            <div class="mask rgba-white-slight"></div>
            <img class="card-img-top" src={Photo3} height={280} width={200} alt="Card image cap"/>
          </a>
        </div>
      
         
        <div class="card-share">
      
          <div class="social-reveal">
      
             
            <a type="button" class="btn-floating btn-fb mt-0 mx-1"><i class="fab fa-facebook-f"></i></a>
             
            <a type="button" class="btn-floating btn-tw mt-0 mx-1"><i class="fab fa-twitter"></i></a>
             
            <a type="button" class="btn-floating btn-gplus mt-0 mx-1"><i class="fab fa-google-plus-g"></i></a>
      
          </div>
      
          
          <a class="btn-floating btn-action share-toggle indigo ml-auto mr-4 float-right"><i class="fas fa-share-alt"></i></a>
      
        </div>
      
         
        <div class="card-body">
      
           
          <h4 class="card-title">PLC Programming</h4>
          <hr/>
           
          <p class="card-text">Coding for PLC and drives , exclusively Siemens S-400, Allen Bradely, Delta, Schinder
            </p>
          <button class="btn btn-indigo btn-rounded btn-md">Read more</button>
      
        </div>
      </div>
      <div>
        <div class="card">
  
  <div class="view overlay">
   
    <a>
      <div class="mask rgba-white-slight"></div>
      <img class="card-img-top" src={Photo4} height={280} width={200} alt="Card image cap"/>
    </a>
  </div>

   
  <div class="card-share">

    <div class="social-reveal">

       
      <a type="button" class="btn-floating btn-fb mt-0 mx-1"><i class="fab fa-facebook-f"></i></a>
       
      <a type="button" class="btn-floating btn-tw mt-0 mx-1"><i class="fab fa-twitter"></i></a>
       
      <a type="button" class="btn-floating btn-gplus mt-0 mx-1"><i class="fab fa-google-plus-g"></i></a>

    </div>

    
    <a class="btn-floating btn-action share-toggle indigo ml-auto mr-4 float-right"><i class="fas fa-share-alt"></i></a>

  </div>

   
  <div class="card-body">

     
    <h4 class="card-title">Web App Development</h4>
    <hr/>
     
    <p class="card-text">Web App development using ReactJS
      </p>
    <button class="btn btn-indigo btn-rounded btn-md">Read more</button>

  </div>
</div>
      </div>
      </div>
    )

}

export default Skill;