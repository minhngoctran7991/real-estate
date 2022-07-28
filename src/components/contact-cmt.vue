<template>
    <p class="mb-6">Mọi thắc mắc, ý kiến đóng góp xin vui lòng gửi về email: chamsockhachhang@bdsngoctrung.com.vn</p>
    <div class="grid grid-cols-2 gap-x-[16px] gap-y-[10px] mb-4">
        <el-select class="" v-model="value" placeholder="Những vấn đề tổng quát">
            <el-option
                v-for="(option, index) in options" :key="`opt${index}`" :label="option.label" :value="option.value">
            </el-option>
        </el-select>
        <el-input placeholder="Họ và Tên:" v-model="inputName"></el-input>
        <el-input placeholder="Email (*):" v-model="inputEmail"></el-input>
        <el-input placeholder="Điện Thoại:" v-model="inputPhone"></el-input>
    </div>
    <div class="mb-4">
        <el-input placeholder="Tiêu Đề:" v-model="inputtitle"></el-input>
    </div>
    <div class="mb-6">
        <el-input type="textarea" :rows="5" placeholder="Nội Dung:" v-model="inputcmt"></el-input>
    </div>
    <p class="mr-4  text-2xl font-bold ">Đánh giá sự hài lòng của bạn</p>
    <el-rate v-model="value1" :texts="['Tồi Tệ','Thất Vọng','Bình Thường','Tốt','Tuyệt Vời']" show-text></el-rate>      
   
    
</template>
<script>
  export default {
    data() {
      return {
        value1: null,
        
        options: [{
          value: 'opt1',
          label: 'Chăm Sóc Khách Hàng'
        }, {
          value: 'opt2',
          label: 'Tuyển Dụng'
        }, {
          value: 'opt3',
          label: 'Kinh Doanh'
       },
       {
          value: 'opt4',
          label: 'Đầu Tư'
        },
        {
          value: 'opt5',
          label: 'Mua Bán/Cho Thuê'
        },
       ],
       inputName: '',
       inputEmail: '',
       inputPhone: '',
       inputtitle: '',
       inputcmt: '',
    }
  }
}
</script>