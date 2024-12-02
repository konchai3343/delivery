<template>
    <div>
        <div class="logo">
            <h1>GoMeal<span class="text-yellow-500">.</span></h1>
        </div>
      
        <Nav class="menu-item">
            <ul>
            <li
                v-for="i in item"
                :key="i.id"
                :class="{ active: $route.path === i.route }"
                class="list-item"
            >
                <NuxtLink :to="i.route">
                <i :class="i.icon"></i>
                <a>{{ i.label }}</a>
                </NuxtLink>
            </li>
            </ul>
        </Nav>
        <Card class="advert mt-5 mb-5">
            <template #title>
                <span class="text-lg">Upgrade your Account to Get Free Voucher</span>
            </template>
            <template #footer>
                <Button class="bg-white text-color" label="Upgrade" />
            </template>
        </Card>
    </div>
</template>
  
<script>
  import items from "../assets/navigation";
  
  export default {
    data() {
      return {
        item: items,
      };
    },
  };
</script>
  
<style scoped>
    h1 {
        text-align: center;
        margin-bottom: 40px;
    }
  
    .menu-item li {
        list-style: none;
    }

    .menu-item a {
        margin-left: 20px;
        text-decoration: none;
        color: inherit;
    }
  
    .list-item {
        margin-top: 10px;
        border-radius: 15px;
        width: 80%;
        height: 54px;
        display: flex;
        align-items: center;
        transition: background-color 0.2s ease;
    }

    .list-item:hover,
    .list-item.active {
        background-color: #F8B602;
    }

    .advert {
        position: relative;
        width: 80%;
        margin: auto;
        background-color: #f8b602;
    }

    .advert::before {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100px; /* ขนาดความกว้าง */
        height: 100px; /* ขนาดความสูง */
        background-color: #eeeeee; /* สีของวงกลม */
        border-radius: 100% 0 0 0; /* ทำให้เป็น 1/4 วงกลม */
        opacity: 0.5
        /* teeee */
    }


</style>
  