<template>
    <div class="itemParentFlex">
        <div class="item itemOnSidebar_1">
            <div style="display: flex; justify-content: center; height: 100%;">
                <h1>user.name</h1>
            </div>
        </div>
        <div class="item itemOnSidebar_2">
            <div class="menu-items">
                <router-link to="/">
                    <button class="menuBtn">Заявки</button>
                </router-link>
                <router-link to="/campaigns">
                    <button class="menuBtn">Компании</button>
                </router-link>
                <router-link to="/chats">
                    <button class="menuBtn">Чаты</button>
                </router-link>
            </div>
        </div>
        <div class="item itemOnSidebar_3">
            <div style="display: flex; justify-content: center; height: 100%;">
                <router-link to='/login'>Выйти</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({

    })
}

</script>

<style scoped>
.itemParentFlex {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.itemOnSidebar_1 {
height: 15%;
}
.itemOnSidebar_2 {
height: 75%;
}
.itemOnSidebar_3 {
height: 10%;
}
.router-link-exact-active {
    color: white;
}
.router-link-exact-active button {
    background: linear-gradient(to right, #4C26CE, #e3e3e3);
    color: white;
}
.menuBtn {
    border: none;
    outline: none;
    background-color: transparent;
    width: 200px;
    height: 50px;
    border-radius: 10px 0px 0px 10px;
    font-size: 20px;
}
.menu-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: flex-end;
}
.menu-items > * {
    margin-top: 40px;
}
.navSidebarBtn {
    width: 200px;
    height: 50px;
    /* color: white; */
    outline: none;
    border: none;
    border-radius: 10px 0px 0px 10px;
    margin-bottom: 20px;
    background: linear-gradient(to right, #4C26CE, #e3e3e3);
}
</style>