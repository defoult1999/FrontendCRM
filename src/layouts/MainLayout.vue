<template>
    <div id="main-layout">
        <div class="GridOnHomePage">
            <div class="item item_1">
                <SidebarField/>
            </div>
            <div class="item item_2" style="background-color: #e3e3e3; border-radius: 0px 0px 0px 10px;">
                <div>
                    <button style="border: none; outline: none; margin-right: 20px; background-color: white; height: 50px; width: 180px; border-radius: 10px">Создать заявку</button>
                </div>
            </div>
            <div class="item item_3">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarField from '@/components/SidebarField.vue'

export default {
    name: 'main-layout',
    components: {
        SidebarField
    }
    
}
</script>

<style scoped>
#main-layout {
    height: 100%;
    width: 100%;
}
.GridOnHomePage {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 10% 90%;
  height: 100%;
  width: 100%;
}
.item {
  height: 100%;
  width: 100%;
}
.item_1 {
    grid-row: 1/3;
}
.item_2 {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    align-items: center;
}
</style>