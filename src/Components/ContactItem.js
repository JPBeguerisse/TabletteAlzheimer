import petitFils from '../public/img/petit-fils.png';

const ContactItem = (props) => {
    //compsant qui renvoie la vue d'un proche
    
    const contact = props;
    // <Contact imgPath="/" />
 
    return ( 
        <div className="container-contactItem">
            <div className="contact-name">
                <h1>Name</h1>
            </div>
            <div className='contact-img'>
                <img src={petitFils} alt="" />
                <h5>Relation</h5>
            </div>
        </div> 
     );
}
 
export default ContactItem;