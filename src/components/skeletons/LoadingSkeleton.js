import React from "react";
import SkeletonElements from "./SkeletonElements";
import "./../Profile.css";


export default function LoadingSkeleton() {
  return (

    <div className="col-xl-4 col-md-6 ">

<div className="skeleton-card">

<div className="shimmer-wrapper">
<div className="shimmer"></div>
</div>
 <div className="skeleton-body ">
 <div className="image-body ">
      <SkeletonElements type="image"/>
       </div>
          
            
            <div className="text-body justify-content-center">
                  
              <SkeletonElements type="title" /> 
              </div>
              <div className="text-title justify-content-center">
              <SkeletonElements type="subtitle" />  <br/>
            
            </div>

            <div className="container">
            <div className="row text-p">

               
               <div className="col-6">
               <SkeletonElements type="text" /> <br/>
               <SkeletonElements type="text" /> <br/>
               <SkeletonElements type="text" /> <br/>
               <SkeletonElements type="text" /> <br/>   
               </div>
                
               <div className="col-6">
               <SkeletonElements type="text" /> <br/>
               <SkeletonElements type="text" /> <br/>
               <SkeletonElements type="text" /> <br/>
               <SkeletonElements type="text" /> <br/>   
               </div>
               </div>
            </div>
            

           
          </div>
        </div>
      

    </div>

    
     
  );
}
