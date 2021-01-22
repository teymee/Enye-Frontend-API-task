
import './Profile.css'
import person from "./img/avatar.png";

export default function Profile(props) {




        return (
            <div className="col-xl-4 col-md-6 ">
                <div className=" card profile-card">

                        <div className="profile-image">
                            <p className= 'text-right'> Last Login : {props.lastLogin}</p>

                            <img className="rounded-circle" src={person}
                                 alt={props.alt}/>

                            <h5 className="mt-3"><strong> {props.name} {props.name2}</strong></h5>
                            <h6> <strong>E-mail : </strong> <i>{props.email}</i></h6>
                          
                            <h6> <strong>Credit Card : </strong> {props.creditCard}</h6>
                            <h6> <strong>Latitude : Longitude : </strong> {props.lat} : {props.long}</h6>
                            <a href="/#"> <strong>{props.url}</strong></a>
                            
                        </div>

                        <div className="profile-body row">
                            <div className="col-6">
                                <p > Username: {props.userName}</p>
                                <hr/>

                                <p > Phone: {props.phone}</p>
                                <hr/>
                                <p > Gender: {props.gender}</p>
                                <hr/>
                               
                               
                                <p > Credit Card Type: {props.creditCardType}</p>
                                <hr/>
                            </div>
                            <div className="col-6">
                                <p > Domain Name: {props.domain}</p>
                                <hr/>
                                <p> Mac Address: {props.mac}</p>
                                <hr/>
                                <p>Payment Method: {props.method}</p>
                                <hr/>
                               

                            </div>




                        </div>

                    </div>
                </div>


        )




}
