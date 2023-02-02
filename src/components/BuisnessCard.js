import GlassCard from "./GlassCard";
import "./css/businessCard.css";

const BusinessCard = (props) => {
    return (
        <GlassCard>
            <div className="category">
                <div className="property">
                    <h3>Name</h3>
                    <p>Markus A. R. Johansen</p>
                </div>
                <div className="property">
                    <h3>Phone</h3>
                    <p>+47 934 00 000</p>
                </div>
                <div className="property">
                    <h3>Email</h3>
                    <p>markusarj@gmail.com</p>
                </div>
                <div className="property">
                    <h3>Adress</h3>
                    <p>Clara Holsts Veg 23, Trondheim 7046, Norway</p>
                </div>
                <div className="property">
                    <h3>Homepage</h3>
                    <p>www.johansen.tech</p>
                </div>
                <div className="property">
                    <h3>Current Work</h3>
                    <p>Developer internship at NAV IT</p>
                </div>
            </div>
        </GlassCard>
    );
};

export default BusinessCard;