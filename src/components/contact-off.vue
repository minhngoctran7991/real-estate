<template>
    <section>
        <el-button @click="onChangeOff" size="large" type="primary">Văn Phòng Chính</el-button>
        <el-button @click="onChangeSer" size="large" type="success" >Chăm Sóc Khách Hàng</el-button>
        <div class="grid grid-cols-2 gap-[40px] mt-6" v-if="showOffice">
            <div >
                <p class="mb-6">Trung tâm BĐS Ngọc Trung,  20 ngõ 88 phố Thanh Nhàn, quận 1, TP.Hồ Chí Minh</p>
                <p>ĐT: (84) 906 35 38 38</p>
            </div>
            <div>
                <p class="mb-6 text-red-500">Tổng đài CSKH:    1900100có</p>
                <div class="h-[1px] w-[250px] bg-green-500 mb-6"></div>
                <p class="mb-6 text-red-500">Thời gian làm việc :	7:00 - 22:00 (Hàng ngày, cả Thứ Bảy và CN)</p>
                <div class="h-[1px] w-[250px] bg-green-500"></div>
            </div>
        </div>   
        <div class="grid grid-cols-2 gap-[40px] mt-6" v-if="showService">
            <p>Chúng tôi xin gửi đến Quý khách và gia đình lời chúc sức khỏe và lời cám ơn chân thành. Nhằm nâng cao chất lượng dịch vụ, đáp ứng ngày càng cao sự tin tưởng của Quý khách, chúng tôi rất hân hạnh được tiếp nhận các ý kiến về chất lượng dịch vụ của chúng tôi thông qua Bộ phận chăm sóc khách hàng</p>
            <div>
              <p class="mb-6 text-red-500">Tổng đài CSKH:     1900100có</p>
              <div class="h-[1px] w-[250px] bg-green-500 mb-6"></div>
              <p class="mb-6 text-red-500">Email: abcdefgh@gmail.com</p>
              <div class="h-[1px] w-[250px] bg-green-500 mb-6"></div>
              <p class="mb-6 text-red-500">Thời gian làm việc :	7:00 - 22:00 (Hàng ngày, cả Thứ Bảy và CN)</p>
              <div class="h-[1px] w-[250px] bg-green-500 mb-6"></div>
            </div>
        </div>
        <div class="mt-6">
            <contactCmt />
        </div>     
    </section>
</template>
<script>
import contactCmt from '@/components/contact-cmt.vue'
export default {
    components: {
        contactCmt,
    },
    data() {
        return {
          showOffice: true,
          showService: false,
        };
    
    },
    methods: {
        onChangeOff() {
            this.showOffice = true;
            this.showService = false;
        },
        onChangeSer() {
            this.showService = true;
            this.showOffice = false;
        }
    } 
}
</script>