<template>
    <div id="regPage">
        <div class="GridOnAllPage">
            <div class="item item_1">
                <reg-field></reg-field>
            </div>
            <div class="item item_2" style="background-image: url(https://catherineasquithgallery.com/uploads/posts/2021-02/1612170583_27-p-fon-gradient-sinii-fioletovii-33.jpg); border-radius: 40px 0px 0px 40px;">
                <div class="sideWithImg">
                    <h2 style="color: white;"><strong>Создай свой аккаунт!</strong></h2>
                    <h5 style="color: white;">Один клик, чтобы полностью перейти на цифровой формат</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import RegField from '@/components/RegField.vue'

export default {
        components: {
        RegField
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
    #regPage {
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
    .item_1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

</style>