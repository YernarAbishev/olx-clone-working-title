import { Link } from "react-router-dom";
import { SIGN_UP_PAGE_ROUTE } from "../utils/consts";

function LoginPage() {
    return (
        <main className="main">
            <section className="auth">
                <div className="container">
                    <h2 className="title">Қосымшаға кіру</h2>
                    <form className="auth-card">
                        <div className="form-control">
                            <label for="email" className="form-label">Сіздің электронды поштаңыз</label>
                            <input type="email" className="form-input" id="email" placeholder="Сіздің email" required />
                        </div>
                        <div className="form-control">
                            <label for="password1" className="form-label">Құпия сөз</label>
                            <input type="password" className="form-input" id="password1" placeholder="Құпия сөзді жазыңыз" required />
                        </div>
                        <div className="centered mb">
                            <button className="btn is-primary">Кіру</button>
                        </div>
                        <div className="centered mb">
                            <span className="information">Егер сізде аккаунт жоқ болса, қосымшаға <Link to={SIGN_UP_PAGE_ROUTE} className="link">тіркеліңіз</Link></span>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default LoginPage;