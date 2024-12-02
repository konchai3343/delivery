<template>
    <div class="flex surface-ground justify-content-between">
        <div class="bg-white max-h-screen side-nav">
            <SideNav />
        </div>
        <div class="max-h-screen m-2 w-7">
            <NuxtPage />
        </div>
        <div class="bg-white max-h-screen cart">
            <User />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {}
    }
}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }

    .side-nav {
        width: 335px;
    }

    .cart {
        width: 400px;
    }
</style>