import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/39145510?s=460&u=4bfc3afd47f57022280a049f854345a1e7429ee8&v=4" alt="" />
                <div>
                    <strong> Mabi Germano </strong>
                    <span>Desenvolvimento de software</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet
                        <br /><br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula sodales sapien, eu gravida elit lacinia sed. Maecenas cursus ac nibh non sollicitudin.
                        Fusce feugiat efficitur dui, eu luctus nisi hendrerit in.
                    </p>

            <footer>
                <p>
                    Preço/hora
                           <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;