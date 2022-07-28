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
            <p class="text-3xl font-bold">Bán nhà phố Cự Lộc : 38M2*5, Ngõ thông thoáng</p>
            <p class="text-3xl font-bold">5.8 tỷ</p>
        </div>
        <div class="flex justify-between">
            <div class="flex items-center ml-6">
                <el-icon class="ml-2 mr-2"><Location  /></el-icon>
                <span class="text-large ">Phường Nhân Chính, Quận Thanh Xuân, Thành phố Hà Nội</span>
            </div>
            <div class="flex opacity-60 mb-4">
                <p class="mr-4">152.63triệu/m2</p>
                <p>45m2</p>
            </div>
        </div>
        <div class="flex justify-between">
            <div class="flex">
                <div class="flex items-center ml-6 opacity-60">
                    <el-icon class="ml-2 mr-2"><Crop  /></el-icon>
                    <span class="text-large ">45 m2</span>
                </div>
                <div class="flex items-center ml-6 opacity-60">
                    <el-icon class="ml-2 mr-2"><Stopwatch /></el-icon>
                    <span class="text-large  ">Hướng Đông Bắc </span>
                </div>
                <div class="flex items-center ml-6 opacity-60">
                    <el-icon class="ml-2 mr-2"><Date  /></el-icon>
                    <span class="text-large ">Năm xây dựng: 2018</span>
                </div>
            </div>
            <div>
                <p class="mb-2"><span class="text-large font-semibold">Ước tính trả góp:</span> 26.83 triệu/tháng</p>
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
        <div class="ml-6 mb-8">TRUNG TÂM THANH XUÂN - NGÕ THÔNG - NHÀ ĐẸP - LÔ GÓC - NỘI THẤT 5* - DỌN ĐẾN CHỈ Ở.<br>Chủ nhà có lộc chuyển nhà to hơn nay có nhu cầu bán nhà phố Cự Lộc, quận Thanh Xuân, 38m*5 tầng, 3PN, 5 tỷ 8, có thương lượng.<br>+ Vị trí trung tâm quận Thanh Xuân, tiếp giáp nhiều quận lớn Hà Đông,Đống Đa, Cầu Giấy, Từ Liêm…<br>+ Giao thông thuận tiện thông thương với nhiều phố lớn Nguyễn Trãi, Quan Nhân, Vũ trọng Phụng, Nguỵ Như, Nguyên Ngọc Vũ, Chính Kinh, Nhân Hoà... di chuyển đi đâu đều rất thuận lợi.<br>+ Tiện ích , ngõ nông gần phố, lô góc, Ba Gác tránh Xe máy, gần nhiều trường ĐH lớn : ĐH Y HN, ĐH Thuỷ Lợi, ĐH Công Đoàn, ĐH KHTN, ĐH Xã Hội Và Nhân Văn...<br>+ Thiết kế khung cột BTCT:<br>Nhà 5 tầng mới lô góc 2 thoáng vĩnh viễn.<br>- Tầng 1: PK + bếp.<br>- Tầng 2, 3, 4: Mỗi phòng 1 ngủ rộng + WC.<br>- Tầng 5: Phòng thờ + sân phơi.<br>- Giá trào: 5 tỷ 8, có thương lượng.<br>- Sổ đỏ chính chủ vuông đẹp, sẵn sàng giao dịch.<br>- Liên hệ: 0359793895,Ms Hạnh để được tư vấn pháp lý và xem nhà miễn phí.</div>
        <div class="ml-6 mb-8"> 
            <p class="text-xl font-semibold  mt-6 mb-4">ĐẶC ĐIỂM BẤT ĐỘNG SẢN</p>
            <div class="h-[1px] w-[100px] bg-orange-500 "></div>
        </div>
        <div class="ml-6 grid grid-cols-2 gap-[50px]">
            <p><span class="font-semibold">Loại hình:</span> Nhà Phố</p>
            <p><span class="font-semibold">Diện tích:</span> 45 m²</p>
            <p><span class="font-semibold">Năm xây dựng:</span> 2020</p>
            <p><span class="font-semibold">Loại công trình:</span> Nhà tầng</p>
            <p><span class="font-semibold">Số tầng:</span> 4 tầng</p>
            <p><span class="font-semibold">Hướng ban công:</span> ---</p>
            <p><span class="font-semibold">Hướng nhà</span> Đông Bắc</p>
            <p><span class="font-semibold">Nội thất:</span> Nội thất cơ bản</p>
            <p><span class="font-semibold">Số phòng ngủ:</span> ---</p>
            <p><span class="font-semibold">Pháp lý:</span> Sổ đỏ lâu dài</p>
            <p><span class="font-semibold">Số phòng tắm:</span> ---</p>
            <p><span class="font-semibold">Tiện ích:</span> gần chợ, bệnh viện, các trường học, công viên</p>
        </div>
        <div class="mt-8">
            <div class=" bg-white text-left text-orange-500">Quý vị đang xem nội dung tin mua nhà <span class="font-semibold">"Bán nhà phố Cự Lộc : 38M2*5, Ngõ thông thoáng" - Mã tin 10313371.</span> Mọi thông tin, nội dung liên quan tới tin mua nhà này là do người đăng tin đăng tải và chịu trách nhiệm. Cenhomes.vn luôn cố gắng để các thông tin được hữu ích nhất cho Quý vị tuy nhiên Cenhomes.vn không đảm bảo và không chịu trách nhiệm về bất kỳ thông tin, nội dung nào liên quan tới tin mua nhà này. Trường hợp phát hiện nội dung tin đăng không chính xác, Quý vị hãy thông báo và cung cấp thông tin cho Ban quản trị Cenhomes.vn theo <span class="font-semibold">Hotline 1900100 Có</span> để được hỗ trợ nhanh và kịp thời nhất.</div>
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