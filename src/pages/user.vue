<template>
<section class="max-w-[1140px] pt-6">
    <p class="text-violet-400 text-3xl ml-4">Danh sách thành viên</p>
    <div>
        <el-table :data="userData" borderstyle="width: 100%">
            <el-table-column prop="userName" label="User Name"></el-table-column>
            <el-table-column prop="phoneNumber" label="Telephone Number"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="role" label="Role"></el-table-column>
        </el-table>
    </div>
</section>
</template>
<script>
export default {
    data() {
      return {
        userData: [{
          userName: 'Sun',
          phoneNumber: '0986075260',
          email: 'abcd@gmail.com',
          role: 'admin',
        }, {
          userName: 'Moon',
          phoneNumber: '0986075260',
          email: 'abcdefgh@gmail.com',
          role: 'saler',
        }, 
        ],
      }
    }
  }

</script>
