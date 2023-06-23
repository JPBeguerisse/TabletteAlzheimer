import ContactItem from "./ContactItem";
import { NavLink } from 'react-router-dom';

const ContactList = (props) => {
    //composant qui afffiche la liste des proches
    const contacts = props;

    //faire une boucle pour avoir tous les contacts et les envoyer chacun dans contactItem pour les afficher
    return ( 
        <div className="container-contactList">
            <NavLink to="/contact/details/1"> {/*affiche la page details de la note au clique*/}
                <ContactItem/>
            </NavLink>
            <NavLink to="/contact/details/1"> {/*affiche la page details de la note au clique*/}
                <ContactItem/>
            </NavLink>
            <NavLink to="/contact/details/1"> {/*affiche la page details de la note au clique*/}
                <ContactItem/>
            </NavLink>
            <NavLink to="/contact/details/1"> {/*affiche la page details de la note au clique*/}
                <ContactItem/>
            </NavLink>
        </div>
     );
}
 
export default ContactList;