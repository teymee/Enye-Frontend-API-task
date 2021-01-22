
import './Profile.css'
import person from "./img/avatar.png";

export default function Profile(props) {




        return (
            <div className="col-xl-4 col-md-6 ">
                <div className=" card profile-card">

                        <div className="profile-image">
                            <p className= 'text-right'> <strong>Last Login :</strong> {props.lastLogin}</p>

                            <img className="rounded-circle" src={person}
                                 alt={props.alt}/>

                            <h5 className="mt-3"><strong> {props.name} {props.name2}</strong></h5>
                            <h6> <strong>E-mail : </strong> <i>{props.email}</i></h6>
                          
                            <h6> <strong>Credit Card : </strong> {props.creditCard}</h6>
                            <h6> <strong>Latitude-Longitude : </strong> {props.lat} : {props.long}</h6>
                            <a href="/#"> <strong>{props.url}</strong></a>
                            
                        </div>

                        <div className="profile-body row">
                            <div className="col-6">
                                <p > <strong>Username : </strong> {props.userName}</p>
                                <hr/>

                                <p><strong> Phone:</strong> {props.phone}</p>
                                <hr/>
                                <p > <strong> Gender: </strong> {props.gender}</p>
                                <hr/>
                               
                               
                                <p >  <strong> Credit Card Type: </strong> {props.creditCardType}</p>
                                <hr/>
                            </div>

                            <div className="col-6">
                                <p ><strong> Domain Name: </strong> {props.domain}</p>
                                <hr/>
                                <p> <strong>Mac Address:</strong>  {props.mac}</p>
                                <hr/>
                                <p> <strong>Payment Method:</strong> {props.method}</p>
                                <hr/>
                               

                            </div>




                        </div>

                    </div>
                </div>


        )




}
