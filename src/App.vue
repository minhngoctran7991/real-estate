<template>   
    <el-container>
        <el-aside class="max-w-[200px] h-screen bg-violet-300">
            <div class="flex justify-center items-center">
                <img class="w-[100px] h-[100px]" src="./assets/iconHouse.svg"/>
                <p class="font-bold">BẤT ĐỘNG SẢN NGỌC TRUNG</p>
            </div>
            <router-link class="block hover:bg-violet-400 mt-2" to="/quan-ly-nha">
                <div class="flex items-center">
                    <el-icon class="ml-2 mr-2"><School /></el-icon>
                    <span class="text-large font-semibold">Dự Án</span>
                </div>
            </router-link>
            <router-link class="block hover:bg-violet-400 mt-2" to="/bai-viet">
                <div class="flex items-center">
                    <el-icon class="ml-2 mr-2"><Document /></el-icon>
                    <span class="text-large font-semibold">Bài Viết</span>
                </div>
            </router-link>
            <router-link class="block hover:bg-violet-400 mt-2" to="/nguoi-dung">
                <div class="flex items-center">
                    <el-icon class="ml-2 mr-2"><User /></el-icon>
                    <span class="text-large font-semibold">Khách Hàng</span>
                </div>
            </router-link>
            <router-link class="block hover:bg-violet-400 mt-2" to="/quyen-han">
                <div class="flex items-center">
                    <el-icon class="ml-2 mr-2"><Star /></el-icon>
                    <span class="text-large font-semibold">Quyền Hạn</span>
                </div>
            </router-link>
            <router-link class="block hover:bg-violet-400 mt-2" to="/lien-he">
                <div class="flex items-center">
                    <el-icon class="ml-2 mr-2"><Phone /></el-icon>
                    <span class="text-large font-semibold">Liên Hệ</span>
                </div>
            </router-link>
        </el-aside>
        <el-container style="background-image: url(./assets/bg-index.jpg)">
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>
<script>
export default {
    data(){
        return{
        }
    }}
</script>