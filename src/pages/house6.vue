<template>
    <section class="max-w-[1140px] mb-6">
        <div>
            <img src="" alt="">
        </div>
        <div class="flex justify-between p-6">
            <div>
                <router-link class="mr-2" to="/trang-chu"><el-link :underline="false">Trang Chủ</el-link></router-link>
                <router-link class="mr-2" to="/quan-ly-nha"><el-link :underline="false">/<span class="ml-2 text-large font-semibold">Dự Án</span></el-link></router-link>
                <router-link class="mr-2" to="/bai-viet"><el-link :underline="false">/<span class="ml-2 text-large font-semibold">Thông tin</span></el-link></router-link>
                <router-link class="mr-2" to="/nguoi-dung"><el-link :underline="false">/<span class="ml-2 text-large font-semibold">Khách hàng</span></el-link></router-link>
                <router-link class="mr-2" to="/quyen-han"><el-link :underline="false">/<span class="ml-2 text-large font-semibold">Quyền Hạn</span></el-link></router-link>
                <router-link class="mr-2" to="/lien-he"><el-link :underline="false">/<span class="ml-2 text-large font-semibold">Liên Hệ</span></el-link></router-link>
            </div>
            <div class="flex">
                <div class="flex items-center mr-6">
                        <el-icon class="ml-2 mr-2"><Document-checked /></el-icon>
                        <el-link :underline="false">Lưu</el-link>
                </div>
                <div class="flex items-center">
                        <el-icon class="ml-2 mr-2"><Position /></el-icon>
                        <el-link :underline="false">Chia Sẻ</el-link>
                </div>
            </div>
        </div>
        <div class="ml-6 mb-4 flex justify-between">
            <p class="text-3xl font-bold">(CỰC HIẾM) Ô TÔ ĐỖ CỬA - NGÕ SIÊU NÔNG</p>
            <p class="text-3xl font-bold">6 tỷ</p>
        </div>
        <div class="flex justify-between">
            <div class="flex items-center ml-6">
                <el-icon class="ml-2 mr-2"><Location  /></el-icon>
                <span class="text-large ">Phường Vĩnh Phúc, Quận Ba Đình, Thành phố Hà Nội </span>
            </div>
            <div class="flex opacity-60 mb-4">
                <p class="mr-4">145 triệu/m2</p>
                <p>55 m2</p>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center ml-6 opacity-60">
                    <el-icon class="ml-2 mr-2"><Crop  /></el-icon>
                    <span class="text-large ">55 m2</span>
                </div>
                <div class="flex items-center ml-6 opacity-60">
                    <el-icon class="ml-2 mr-2"><Stopwatch /></el-icon>
                    <span class="text-large  ">Hướng Đông Nam </span>
                </div>
                <div class="flex items-center ml-6 opacity-60">
                    <el-icon class="ml-2 mr-2"><Date  /></el-icon>
                    <span class="text-large ">Năm xây dựng: 2022</span>
                </div>
            </div>
            <div>
                <p class="mb-2"><span class="text-large font-semibold">Ước tính trả góp:</span> 23.13 triệu/tháng</p>
                <div class="flex items-center">
                    <el-icon class="ml-2 mr-2"><Coin  /></el-icon>
                    <p class="mr-2 text-blue-500 text-large font-semibold"><router-link to="/trang-chu"><el-link :underline="false">Dịch vụ hỗ trợ tài chính</el-link></router-link></p>
                </div>
            </div>
        </div>
        <div class="ml-6 mb-8"> 
            <p class="text-xl font-semibold  mt-6 mb-4">THÔNG TIN MÔ TẢ</p>
            <div class="h-[1px] w-[100px] bg-orange-500 "></div>
        </div>
        <div class="ml-6 mb-8">(CỰC HIẾM) Ô TÔ ĐỖ CỬA - NGÕ SIÊU NÔNG - 40M2 - Chỉ 5 TỶ.<br>+ Trung tâm Ba Đình, Khu vực cực HIẾM nhà bán.<br>+ 40m2 - 5 tầng - 3 ngủ khép kín - Giá 5 Tỷ.<br>+ Ngõ Ô TÔ thoáng đẹp, Thông các ngả, khu dân chí cao.<br>+ Nhà xây mới hiện đại đầy đủ công năng.<br>+ Vị trí trung tâm, gần chợ, bệnh viện, trường học...<br>+ Sổ đỏ cất két, sẵn sàng giao dịch.<br>LIÊN HỆ EM VIỆT ĐỂ ĐƯỢC HỖ TRỢ MIỄN PHÍ.</div>
        <div class="ml-6 mb-8"> 
            <p class="text-xl font-semibold  mt-6 mb-4">ĐẶC ĐIỂM BẤT ĐỘNG SẢN</p>
            <div class="h-[1px] w-[100px] bg-orange-500 "></div>
        </div>
        <div class="ml-6 grid grid-cols-2 gap-[50px]">
            <p><span class="font-semibold">Loại hình:</span> Nhà Phố</p>
            <p><span class="font-semibold">Diện tích:</span> 55 m²</p>
            <p><span class="font-semibold">Năm xây dựng:</span> 2022</p>
            <p><span class="font-semibold">Loại công trình:</span> Nhà tầng</p>
            <p><span class="font-semibold">Số tầng:</span> 6 tầng</p>
            <p><span class="font-semibold">Hướng ban công:</span> ---</p>
            <p><span class="font-semibold">Hướng nhà</span> Đông Nam</p>
            <p><span class="font-semibold">Nội thất:</span> Nội thất cơ bản</p>
            <p><span class="font-semibold">Số phòng ngủ:</span> ---</p>
            <p><span class="font-semibold">Pháp lý:</span> Sổ đỏ lâu dài</p>
            <p><span class="font-semibold">Số phòng tắm:</span> ---</p>
            <p><span class="font-semibold">Tiện ích:</span> gần chợ, bệnh viện, các trường học, công viên</p>
        </div>
        <div class="mt-8">
            <div class=" bg-white text-left text-orange-500">Quý vị đang xem nội dung tin mua nhà <span class="font-semibold">"(CỰC HIẾM) Ô TÔ ĐỖ CỬA - NGÕ SIÊU NÔNG" - Mã tin 10313371.</span> Mọi thông tin, nội dung liên quan tới tin mua nhà này là do người đăng tin đăng tải và chịu trách nhiệm. Cenhomes.vn luôn cố gắng để các thông tin được hữu ích nhất cho Quý vị tuy nhiên Cenhomes.vn không đảm bảo và không chịu trách nhiệm về bất kỳ thông tin, nội dung nào liên quan tới tin mua nhà này. Trường hợp phát hiện nội dung tin đăng không chính xác, Quý vị hãy thông báo và cung cấp thông tin cho Ban quản trị Cenhomes.vn theo <span class="font-semibold">Hotline 1900100 Có</span> để được hỗ trợ nhanh và kịp thời nhất.</div>
        </div>
    </section>  
    <footerTest />
</template>
<script>
import footerTest from '@/components/footer.vue'
  export default {
    components: {
        footerTest,
    },
    data() {
      return {
        
    }
  }
}
</script>