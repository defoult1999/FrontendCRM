<template>
    <div class="loginForm">
                    <div class="form-box">
                        <div class="form-value">
                            <form action="">
                                    <h2 class="logTitle">Войти</h2>  
                                <div class="inputbox">
                                    <input type="email" placeholder="Email">
                                </div>
                                <div class="inputbox">
                                    <input type="password" placeholder="Пароль">
                                </div>
                                <div class="logBtn">
                                    <button type="submit" style="text-decoration: none; color: white;">Войти</button>
                                </div>
                                <div class="enterBtn">
                                    <p>Ещё нет аккаунта? <router-link to="/registration">Зарегестрироваться</router-link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
</template>

<script>


export default {
    name: 'LoginField',
    data: () => ({

    }),
    validations: {

    },
    methods: {

    }
}
</script>

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
.logBtn {
    display: flex;
    justify-content: end;
    padding-right: 10px;
}
.logBtn button {
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
.logTitle {
    padding-bottom: 30px;
    font-size: 40px;
    width: 450px;
    color: rgb(19, 9, 63);
}
.enterBtn {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>