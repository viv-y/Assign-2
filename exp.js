import React from 'react';
import Download from './download.jpg';
import Photo from './A.jpg';
import Photo1 from './b.jpg';


const Exp= () => {

    return(
       <div>
           <section class="dark">
	<div class="container py-4">
		 

		<article class="postcard dark blue">
			<a class="postcard__img_link" href="#">
				 
			</a>
			 
		</article>
		<article class="postcard dark red">
			<a class="postcard__img_link" href="#">
      <img class="postcard__img" src={Photo} height={200} width={400} alt="Card image cap"/>
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title red">Assistant Manager at RINL(Visakhapatnam)</h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i><h4>Feb 2018 to Mar 2020</h4>
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Worked in Electrical Maintenance section of Raw Material Handling Plant(RMHP) , primary responsibility included upgarding the then infra through Automation specially programmable logic controller(PLC) and drive control</div>
				 
			</div>
		</article>
    <hr/>
		<article class="postcard dark green">
			<a class="postcard__img_link" href="#">
      <img class="postcard__img" src={Photo1} height={200} width={400} alt="Card image cap"/>
			</a>
			<div class="postcard__text">
				<h1 class="postcard__title green"> SDO-UPPCL(PVVNL)</h1>
				<div class="postcard__subtitle small">
					<time datetime="2020-05-25 12:00:00">
						<i class="fas fa-calendar-alt mr-2"></i><h4>July 2020 till Date</h4>
					</time>
				</div>
				<div class="postcard__bar"></div>
				<div class="postcard__preview-txt">Worked as Sub Divisional Officer at EDSD-IV Chaudharpur under EDD-1 Moradabad, primary responsibility included Supply Maintenance for nearly 35000 consumers, revenue collection , implementing govt policies on ground,ongoing projects monitoring and Admin role for subordinate staff</div>
				 
			</div>
		</article>
		 
	</div>
</section>

 
       </div>
       
        
    )

}

export default Exp;