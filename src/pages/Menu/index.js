import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaLaptop } from 'react-icons/fa';

export default function Menu() {
  return (
        <section>
        <span>
            
            <FaLaptop size={50} />

        </span>

        <span>
            
            <ul>
                    <li>
                        <Link className="style-link" to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link className="style-link" to="/portfolio">Portfólio</Link>
                    </li>
                    <li>
                        <Link className="style-link" to="/quemsomos">Quem Somos</Link>
                    </li>
            </ul>
            
        </span>
        </section>

    );
}