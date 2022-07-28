<template>   
    <el-container>
        <el-aside class="max-w-[200px] h-screen bg-aside">
            <div class="mx-auto">
                <img class="w-[100px] h-[100px] mx-auto " src="./assets/iconHouse.svg"/>
                <p class="font-bold text-center text-[#409EFF]">BĐS NGOC TRUNG GROUP </p>
            </div>
            <router-link class="block" to="/quan-ly-nha">
                <div class="flex items-center ml-2 mt-4">
                    <el-icon class="ml-2 mr-2"><School /></el-icon>
                    <el-link :underline="false">Dự Án</el-link>
                </div>
            </router-link>
            <router-link class="block" to="/bai-viet">
                <div class="flex items-center ml-2 mt-4">
                    <el-icon class="ml-2 mr-2"><Document /></el-icon>
                    <el-link :underline="false">Thông Tin</el-link>
                </div>
            </router-link>
            <router-link class="block" to="/nguoi-dung">
                <div class="flex items-center ml-2 mt-4">
                    <el-icon class="ml-2 mr-2"><User /></el-icon>
                    <el-link :underline="false">Khách Hàng</el-link>
                </div>
            </router-link>
            <router-link class="block" to="/quyen-han">
                <div class="flex items-center ml-2 mt-4">
                    <el-icon class="ml-2 mr-2"><Star /></el-icon>
                    <el-link :underline="false">Quyền Hạn</el-link>
                </div>
            </router-link>
            <router-link class="block" to="/lien-he">
                <div class="flex items-center ml-2 mt-4">
                    <el-icon class="ml-2 mr-2"><Phone /></el-icon>
                    <el-link :underline="false">Liên Hệ</el-link>
                </div>
            </router-link>
        </el-aside>
        <el-container>
            <router-view />
            <el-header></el-header>
            <el-main></el-main>
            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>
<style>
.bg-aside{
    background-color: #C0C4CC ;
}

</style>
<script>
export default {
    data(){
        return{
        }
    }}
</script>