<template>
  <div class="setores">
    <header class="uk-section uk-flex uk-flex-column uk-text-left">
      <h2 class="uk-margin-remove-bottom">Setores</h2>
      <span class="uk-text-muted">{{'Informações sobre setores, ' + hoje().dia + ' de '+ myMes[hoje().mes] + ' de '+
      hoje().ano
      }}</span>
    </header>

    <section class="uk-section uk-padding-remove">
      <ul class="uk-flex-center"  uk-tab>
        <li class="uk-active"><a href="#hortifruti">Hortifruit</a></li>
        <li><a href="#">Padaria</a></li>
        <li><a href="#acougue">Açougue</a></li>
        <li><a href="#">Bebidas</a></li>
        <li><a href="#">Higiene</a></li>
      </ul>
      <ul class="uk-switcher" >
        <li><hortifruti-sie /></li>
        <li><padaria-sie /> </li>
        <li> <acougue-sie /> </li>
        <li> <bebidas-sie /> </li>
        <li> <higiene-sie /> </li>
      </ul>
      
    </section>

  </div>
</template>

<script>
import { caixas, meses, dataDia } from '@/dados/dadosUtil';
import HortifrutiSie from '@/components/tabulacao/HortifruitSie.vue'
import PadariaSie from '@/components/tabulacao/PadariaSie.vue'
import AcougueSie from '@/components/tabulacao/AcougueSie.vue';
import BebidasSie from '@/components/tabulacao/BebidasSie.vue';
import HigieneSie from '@/components/tabulacao/HigieneSie.vue';
export default {

  name: 'SetoresView',
  components:{
    HortifrutiSie,
    PadariaSie,
    AcougueSie,
    BebidasSie,
    HigieneSie
  },
  computed: {
    dadosCaixa() {
      return caixas
    },
    myMes() {
      return meses
    },
    hoje() {
      return dataDia
    }
  }
}
</script>

<style>

</style>