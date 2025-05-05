import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoMain from "/src/assets/images/icons/logomain-sm.png";
import EyeSlash from "/src/assets/images/icons/eye-slash.svg";
import TopNav from  "../../components/OnboardTopNav/TopVav";
import "./BVNForm.css";


export default function  BVNForm() {
    const navigate = useNavigate();
    const [bvn, setBvn] = useState("");
    const [showBVN, setShowBVN] = useState(false);
    const [error, setError] = useState('');


const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{11}$/.test(bvn)) {
        setError("BVN must be 11 digits long.");
        return;
    }

    setError('');


navigate("/",);
    
};

return (
    <section className="bvn-form-container">
        <nav>
            <TopNav />
        </nav>    

<main className="bvn-container">

<div className="logo">
            <img src={LogoMain} alt="Logo"/>
        </div>

        <h1 className="welcome-text">
            Hey, there!
        </h1>
        <p className="welcome-sub-text">
            Fill in your details
        </p>

        <form onSubmit={handleSubmit} className="bvn-form">
            <label htmlFor="bvn">BVN</label>
            <div className="bvn-input-wrapper">
                <input

                    type={showBVN ? "text" : "password"}
                    id="bvn"
                    value={bvn}
                    onChange={(e) => setBvn(e.target.value)}
                    placeholder="Enter your BVN"
                    required 

                />
                <button

                    type="button"
                    className="toggle-visibility"
                    onClick={() => setShowBVN((prev) => !prev)}

                    >
                        {showBVN ?(
                            <img src={EyeSlash} alt="Hide BVN"/>
                        ) : "Show"}
                </button>
            </div>
            {error && <p className="error-message">{error}</p>}

            
            <button type="submit" className="continue-btn">Continue</button>
        </form>

        <footer className="footer-links">
        <a href="#">Privacy</a> · <a href="#">Terms</a>
        </footer>
</main>
    </section>
);

}