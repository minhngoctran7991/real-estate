<template>
    <section>
        <div>
            <div class="ml-6"> 
                <p class="text-4xl font-bold ">Liên Hệ</p>
                <div class="h-1 w-20 bg-green-500 mt-4 mb-6"></div>
                <el-select class="" v-model="value" placeholder="Chọn Thành Phố">
                    <el-option
                        v-for="(item, index) in citys" :key="`item${index}`" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
                <p class="mt-4 text-red-500">Tổng Đài CSKH : 1900100có</p>
                <p class="mt-4 text-red-500 mb-6">Thời gian làm việc :  <span class="font-semibold">7:00 - 22:00</span> (Hàng ngày, cả Thứ Bảy và CN)</p>
                <div class="mb-6 bg-gray-100 p-6">
                    <div class="flex items-center">
                        <img class="h-[30px] mr-4" src="@/assets/iconLocation.svg" >
                        <div>
                            <p>Trung tâm BĐS Ngọc Trung,  20 ngõ 88 phố Thanh Nhàn, quận Hai Bà Trưng, TP.Hà Nội <br>ĐT: +(84) 986 075 260</p>
                            <router-link to="/ban-do"><el-link :undeline="false">Xem Chỉ Dẫn</el-link></router-link>
                        </div>
                    </div>                    
                </div>
                <div class=" mb-6 bg-gray-100 p-6">
                    <div class="flex items-center">
                        <img class="h-[30px] mr-4" src="@/assets/iconLocation.svg" >
                        <div>
                            <p>Trung tâm BĐS Ngọc Trung,  20 ngõ 88 phố Thanh Nhàn, quận 1, TP.Hồ Chí Minh <br>ĐT: +(84) 986 075 260</p>
                            <router-link to="/ban-do"><el-link :undeline="false">Xem Chỉ Dẫn</el-link></router-link>
                        </div>
                    </div>                    
                </div>
                <div class=" bg-gray-100 p-6">
                    <div class="flex items-center">
                        <img class="h-[30px] mr-4" src="@/assets/iconLocation.svg" >
                        <div>
                            <p>Trung tâm BĐS Ngọc Trung,  20 ngõ 88 phố Thanh Nhàn, quận Sơn Trà, TP.Đà Nẵng <br>ĐT: +(84) 986 075 260</p>
                            <router-link to="/ban-do"><el-link :undeline="false">Xem Chỉ Dẫn</el-link></router-link>
                        </div> 
                    </div>
                    
                </div>
            </div> 
        </div>
    <router-view />
    </section>
</template>
<script>
  export default {
    data() {
      return {
        citys: [{
          value: 'opt1',
          label: 'Hà Nội'
        }, {
          value: 'opt2',
          label: 'Hồ Chí Minh'
        }, {
          value: 'opt3',
          label: 'Đà Nẵng'
       }]
    }
  }
}
</script>
