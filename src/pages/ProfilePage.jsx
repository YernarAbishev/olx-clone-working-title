import userAvatar from "../assets/images/user/avatar.png";

function ProfilePage() {
    return (
        <main class="main">
            <section class="profile">
                <div class="container">
                    <h2 class="title">Жеке кабинет</h2>
                    <div class="profile-card">
                        <div class="profile-data">
                            <img src={userAvatar} alt="Avatar" class="profile-avatar" />
                            <ul class="profile-content">
                                <li class="profile-content__item">Аты: test</li>
                                <li class="profile-content__item">Тегі: test</li>
                                <li class="profile-content__item">Email: test@mail.com</li>
                            </ul>
                        </div>
                        <div class="profile-number">Телефон: +7 777 777 77 77</div>
                        <div class="profile-action">
                            <button class="btn is-primary">Менің тақталарым</button>
                            <button class="btn is-primary">Тақтаны қосу</button>
                            <button class="btn is-danger">Шығу</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProfilePage;