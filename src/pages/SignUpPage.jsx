import { Link } from "react-router-dom"
import { LOGIN_PAGE_ROUTE } from "../utils/consts";


function SignUpPage() {
    return (
        <main className="main">
            <section className="auth">
                <div className="container">
                    <h2 className="title">Қосымшаға тіркелу</h2>
                    <form className="auth-card">
                        <div className="form-control">
                            <label for="name" className="form-label">Аты</label>
                            <input type="text" className="form-input" id="name" placeholder="Сіздің атыңыз" required />
                        </div>
                        <div className="form-control">
                            <label for="lastname" className="form-label">Тегі</label>
                            <input type="text" className="form-input" id="lastname" placeholder="Сіздің тегіңіз" required />
                        </div>
                        <div className="form-control">
                            <label for="email" className="form-label">Электронды пошта</label>
                            <input type="email" className="form-input" id="email" placeholder="Сіздің email" required />
                        </div>
                        <div className="form-control">
                            <label for="phone" className="form-label">Телефон нөмірі</label>
                            <input type="text" className="form-input" id="phone" placeholder="+7 ___-___-__-__" required />
                        </div>
                        <div className="form-control">
                            <label for="password1" className="form-label">Құпия сөз</label>
                            <input type="password" className="form-input" id="password1" placeholder="6 символдан көп құпия сөзді жазыңыз" required />
                        </div>
                        <div className="form-control">
                            <label for="password2" className="form-label">Құпия сөзді растау</label>
                            <input type="password" className="form-input" id="password2" placeholder="Құпия сөзіңізді растаңыз" required />
                        </div>
                        <div className="mt centered mb">
                            <Link to={LOGIN_PAGE_ROUTE} className="btn is-primary">Тіркелу</Link>
                        </div>
                        <div className="centered mb">
                            <span className="information">Егер сізде аккаунт бар болса, қосымшаға <Link to={LOGIN_PAGE_ROUTE} className="link">кіріңіз</Link></span>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default SignUpPage;