import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/footer.css'
const Footer = () => {
    return (
        <div>
            <h2>Stopka</h2>
            <Route path='/' exact render={(props) => {
                return (
                    <p>jestes na <span>stronie glownej</span></p>
                )
            }} />


            <Route path='/:page' render={(props) => {
                return (<>
                    <p>jestes na <span>{props.match.params.page}</span></p>

                </>
                )
            }}
            /><Route path='/:page/:idProduct' exact render={(props) => {
                return (<>
                    <p>jestes na produkcie <span>{props.match.params.idProduct}</span></p>

                </>
                )
            }}
            />
        </div>
    );
}

export default Footer;