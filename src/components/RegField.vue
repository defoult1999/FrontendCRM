<template>
    <div class="registerForm">
                    <div class="form-box">
                        <div class="form-value">
                            <form action="">
                                    <h2 class="regTitle">Регистрация</h2>  
                                <div style="display: flex; flex-direction: row;">
                                    <div class="inputbox">
                                        <input type="firstName" placeholder="Имя">
                                    </div>
                                    <div class="inputbox">
                                        <input type="secondName" placeholder="Фамилия">
                                    </div>
                                </div>
                                <div class="inputbox">
                                    <input type="email" placeholder="Email">
                                </div>
                                <div class="inputbox">
                                    <input type="password" placeholder="Пароль">
                                </div>
                                <div class="inputbox">
                                    <input type="password" placeholder="Повторите пароль">
                                </div>
                                <div class="regBtn">
                                    <button style="color: white;">Дальше</button>
                                </div>
                                <div class="enterBtn">
                                    <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
</template>

<style>
.inputbox {
    width: 100%;
    height: 50px;
    padding-right: 10px;
    margin-bottom: 20px;
}
.inputbox input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.27);
    border-radius: 10px;
    padding: 20px 45px 20px 20px;
}
.regBtn {
    display: flex;
    justify-content: end;
    padding-right: 10px;
}
.regBtn button {
    border: none;
    outline: none;
    height: 45px;
    width: 120px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    background-color: rgb(19, 9, 63);
    border-radius: 10px;    
}
.regTitle {
    padding-bottom: 30px;
    font-size: 40px;
    color: rgb(19, 9, 63);
}
.enterBtn {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>