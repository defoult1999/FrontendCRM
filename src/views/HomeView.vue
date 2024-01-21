<template>
  <HelloWorld></HelloWorld>
  <div class="itemParentOnHome">
    <div class="itemOnHome item_1">
      <h1>Заявки</h1>
    </div>
    <div class="itemOnHome item_2">
      <div class="application-title" style="background-color: white; margin: 20px; border-radius: 10px; height: 30px;">
        <div class="applicationItem_1"><h6>Id</h6></div>
        <div class="applicationItem_2"><h6>Компания</h6></div>
        <div class="applicationItem_3"><h6>Статус</h6></div>
        <div class="applicationItem_4"><h6>Направление</h6></div>
        <div class="applicationItem_5"><h6>Создатель</h6></div>
        <div class="applicationItem_6"><h6>Время создания</h6></div>
        <div class="applicationItem_7"><h6>Мастер</h6></div>
        <div class="applicationItem_8"><h6>Адрес</h6></div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
#home {
        width: 100%;
        height: 100%;
    }
.itemParentOnHome {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.item_1 {
  height: 10%;
}
.item_2 {
  background-color: #e3e3e3;
  height: 90%;
  border-radius: 10px 0 0 0;
}
.application-title {
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 1fr;
}
</style>