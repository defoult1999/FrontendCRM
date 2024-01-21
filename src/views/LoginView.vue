<template>
    <div id="loginPage">
        <div class="GridOnAllPage">
            <div class="item item_1" style="background-image: url(https://catherineasquithgallery.com/uploads/posts/2021-02/1612170583_27-p-fon-gradient-sinii-fioletovii-33.jpg); border-radius: 0px 40px 40px 00px;">
                <div class="sideWithImg">
                    <h2 style="color: white;"><strong>Добро пожаловать!</strong></h2>
                    <h5 style="color: white;">Один клик, чтобы полностью перейти на цифровой формат</h5>
                </div>
            </div>
            <div class="item item_2">
                <login-field></login-field>
            </div>
        </div>
    </div>
</template>

<script>
import LoginField from '@/components/LoginField.vue'

export default {
        components: {
        LoginField
    }
}
</script>

<style scoped>
    .GridOnAllPage {
        display: grid;
        grid-template-columns: 50% 50%;
        height: 100%;
        width: 100%;
    }
    #loginPage {
        width: 100%;
        height: 100%;
    }
    .sideWithImg {
        margin-left: 25%;
        margin-right: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .item_2 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

</style>