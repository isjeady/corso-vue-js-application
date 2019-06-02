<template>
  <div>
    <h3>Coupon :{{selCode}}</h3>
    <input type="text" class="coupon-code" v-model="code" @input="validate">
    <p v-text="feedback"></p>
  </div>
</template>


<script>
export default {
  name: 'Coupon',
  data () {
    return {
      code: '',
      valid : false,
      //Api Call coupons
      coupons: [
                    {
                        code: '10OFF',
                        message: '10% di Sconto!',
                        discount: 10
                    },
                    {
                        code: 'FREE',
                        message: ' Corso Gratis!',
                        discount: 100
                    }
      ],
    }
  },
  computed: {
            selectedCoupon () {
                return this.coupons.find(coupon => coupon.code == this.code);
            },
            selCode () {
                if (this.valid) {
                  return this.selectedCoupon.code;
                }
            },
            message () {
                return this.selectedCoupon.message;
            },
            feedback () {
                if (this.valid) {
                    return `Coupon Riscosso: ${this.message}`;
                }
                return 'Coupon Non Valido';
            }
        },
  methods : {
    validate () {
        this.valid = !! this.selectedCoupon;

        if (this.valid) {
            this.$emit('scontoEvento', this.discount);
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.btn{
  font-size: 1em;
}
</style>
