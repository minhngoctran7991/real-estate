<template>
    <div class="bg-green-300 h-[80px] w-full flex ">
        <div class="mr-4 ml-4">
            <p class="font-bold">Loại hình BĐS</p>
            <el-cascader :options="houseType" :props="{ multiple: true, checkStrictly: true }" placeholder="Loại hình"></el-cascader>
        </div>
        <div class="mr-4">
            <p class="font-bold">Khu Vực</p>
            <el-cascader :options="city" :props="{ multiple: true, checkStrictly: true }" placeholder="Tỉnh/Thành Phố"></el-cascader>
        </div>
        <div class="mr-4">
            <p class="font-bold">Mức Giá</p>
            <el-cascader :options="price" :props="{ multiple: true, checkStrictly: true }" placeholder="Khoảng mức giá"></el-cascader>
        </div>
        <div>
            <p class="font-bold">Diện Tích</p>
            <el-cascader v-model="value" :options="houseArea" :props="{ multiple: true, checkStrictly: true, label: `value` }" placeholder="Diện tích">
                <template v-slot="{ node, data }">
                    <span v-html="data.label"></span>
                </template>
            </el-cascader>
        </div>
    </div>

</template>
<script>
  export default {
    data() {
      return {
        value: [],
        houseType: [{
          value: 'chung-cu',
          label: 'Chung Cư',
        }, {
          value: 'chung-cu-mini',
          label: 'Chung Cư Mini',
          }, {
          value: 'nha-dat',
          label: 'Nhà Đất',
        }, {
          value: 'biet-thu',
          label: 'Biệt Thự',
        }, {
          value: 'tap-the',
          label: 'Tập Thể',
        },
        ],
        city: [{
          value: 'ha-noi',
          label: 'Hà Nội',
            children: [{
                value: 'hoan-kiem',
                label: 'Hoàn Kiếm',
                },{
                value: 'hai-ba-trung',
                label: 'Hai Bà Trưng'
                }, {
                value: 'dong-da',
                label: 'Đống Đa'
                }, {
                value: 'tay-ho',
                label: 'Tây Hồ'
                }, {
                value: 'cau-giay',
                label: 'Cầu Giấy'
                }]
        },{
          value: 'da-nang',
          label: 'Đà Nẵng',
            children: [{
                value: 'son-tra',
                label: 'Sơn Trà',
                },{
                value: 'cam-khe',
                label: 'Cẩm Khê'
                }, {
                value: 'hai-chau',
                label: 'Hải Châu'
                },]
        },{
          value: 'ho-chi-minh',
          label: 'Hồ Chí Minh',
            children: [{
                value: 'quan-1',
                label: 'Quận 1',
                },{
                value: 'quan-2',
                label: 'Quận 2'
                }, {
                value: 'quan-go-vap',
                label: 'Quận Gò Vấp'
                },]
        },
        ],
        price: [{
            value: 'thoa-thuan',
            label: 'Thảo Thuận',
        },{
            value: '<=1-ty',
            label: '<= 1 tỷ>',
        },{
            value: '<2-ty',
            label: '1-2 tỷ',
        },{
            value: '<3-ty',
            label: '2-3 tỷ',
        },{
            value: '<5-ty',
            label: '3-5 tỷ',
        },{
            value: '<7-ty',
            label: '5-7 tỷ',
        },{
            value: '<10-ty',
            label: '7-10 tỷ',
        },{
            value: '<20-ty',
            label: '10-20 tỷ',
        },{
            value: '<30-ty',
            label: '20-30 tỷ',
        },
        ],
        houseArea: [{
            value: '<30m2',
            label: '<p>>30m<sup>2</sup></p>',
        }
        ,{
            value: '30m2-50m2',
            label: '<p>30m<sup>2</sup>-50m<sup>2</sup></p>',
        },{
            value: '50m2-70m2',
            label: '<p>50m<sup>2</sup>-70m<sup>2</sup></p>',
        },{
            value: '70m2-100m2',
            label: '<p>70m<sup>2</sup>-100m<sup>2</sup></p>',
        },{
            value: '100m2-150m2',
            label: '<p>100m<sup>2</sup>-150m<sup>2</sup></p>',
        },{
            value: '150m2-300m2',
            label: '<p>150m<sup>2</sup>-300m<sup>2</sup></p>',
        },{
            value: '300m2-500m2',
            label: '<p>300m<sup>2</sup>-500m<sup>2</sup></p>',
        },{
            value: '>=500m2',
            label: '<p>>=500m<sup>2</sup></p>',
        },
        ],
      };
    },
  };
</script>
<style scoped>
</style>>
