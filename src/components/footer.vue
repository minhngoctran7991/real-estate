<template>
    <section class="bg-gray-200 mt-8">
        <div class="max-w-[1140px] mx-auto flex justify-between">
           <router-link to="/trang-chu">
                <div class="flex items-center mt-8">
                    <el-icon class="ml-2 mr-2"><School /></el-icon>
                    <span class="text-xl font-semibold">NGOCTRUNG GROUP</span>
                </div>
           </router-link>
            <div class="flex pt-4">
                <div class="mr-16">
                    <p>Hotline miễn phí (24/7)</p> 
                    <p>1900100 Có</p>
                </div>
                <div>
                    <p>Chăm sóc khách hàng </p> 
                    <p>hotro@ngoctrunggroup.vn</p>
                </div>
            </div>
        </div>
        <div class="h-[1px] w-[1200px] mx-auto bg-black mt-6 mb-16"></div>
        <div class="max-w-[1140px] mx-auto grid grid-cols-5 gap-[50px] mb-6">
            <div >
                <p class="text-xl font-semibold mb-4">Liên hệ chúng tôi</p>
                <div class="flex items-center mb-4">
                    <el-icon class=" mr-2"><Location /></el-icon>
                    <p>Trung tâm BĐS Ngọc Trung, 20 ngõ 88 phố Thanh Nhàn, quận Hai Bà Trưng, TP.Hà Nội</p>
                </div>
                <div class="flex items-center mb-4">
                    <el-icon class=" mr-2"><Phone/></el-icon>
                    <p>1900100 Có</p>
                </div>
                <div class="flex items-center">
                    <el-icon class=" mr-2"><Wallet/></el-icon>
                    <p>hotro@ngoctrunggroup.vn</p>
                </div>
            </div>
            <div>
                <p class="text-xl font-semibold mb-4">Giới thiệu</p>
                <p class="mb-2"><router-link  to="/trang-chu" ><el-link :underline="false">Về NGOCTRUNG GROUP</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/trang-chu"><el-link :underline="false">Nghề nghiệp</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/trang-chu"><el-link :underline="false">Hồ sơ thương hiệu</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/trang-chu"><el-link :underline="false">Tin tức</el-link></router-link></p>
                <router-link  to="/trang-chu"><el-link :underline="false">Videos</el-link></router-link>
            </div>
            <div>
                <p class="text-xl font-semibold mb-4">Khám Phá</p>
                <p class="mb-2 "><router-link to="/quan-ly-nha" ><el-link :underline="false">Dự Án</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/quyen-han"><el-link :underline="false">Quyền Hạn</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/bai-viet"><el-link :underline="false">Thông Tin</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/nguoi-dung"><el-link :underline="false">Khách Hàng</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/lien-he"><el-link :underline="false">Liên Hệ</el-link></router-link></p>
            </div>
            <div>
                <p class="text-xl font-semibold mb-4">Điều Khoản</p>
                <p class="mb-2 "><router-link to="/trang-chu" ><el-link :underline="false">Quy chế hoạt động</el-link></router-link></p>
                <p class="mb-2 "><router-link to="/trang-chu"><el-link :underline="false">Cơ chế giải quyết tranh chấp</el-link></router-link></p>
            </div>
            <div>
                <p class="text-xl font-semibold mb-4">Nhận Tin Tức</p>
                <p class="mb-4">Đăng ký ngay để nhận thông tin từ NGOCTRUNG GROUP.vn</p>
                <el-input placeholder="Email (*):" v-model="inputEmail"></el-input>
            </div>
        </div>
    </section>
</template>