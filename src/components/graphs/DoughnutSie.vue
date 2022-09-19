<template>
      <Doughnut :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { meses, dataDia } from '@/dados/dadosUtil.js';


ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
      name: 'DoughnutChart',
      components: { Doughnut },
      props: {
            chartId: {
                  type: String,
                  default: 'bar-chart'
            },
            datasetIdKey: {
                  type: String,
                  default: 'label'
            },
            width: {
                  type: Number,
                  default: 500
            },
            height: {
                  type: Number,
                  default: 500
            },
            cssClasses: {
                  default: '',
                  type: String
            },
            styles: {
                  type: Object,
                  default: () => { }
            },
            plugins: {
                  type: Object,
                  default: () => { }
            },
            myDate: {
                  default: () =>{ },
                  type: Object,
            }
      },
      data() {
            return {
                  data: dataDia(),
                  chartData: {
                        labels: ['Açougue', 'Frios', 'Hortfruit', 'Bebidas', 'Padaria', 'Higiene'],
                        datasets: [{
                              label: 'vendas loja',
                              data: [54, 50, 100, 26, 48, 35],
                              backgroundColor: [
                                    '#fe4365',
                                    '#fc9d9a',
                                    '#f9cdad',
                                    '#c8c8a9',
                                    '#83af9b',
                                    '#47667b'
                              ],
                              hoverOffset: 2
                        }]
                  },
                  chartOptions: {
                        radius: '90%',
                        responsive: true,
                        layout: {
                              padding: 0
                        },
                        plugins: {
                              legend: {
                                    position: 'left'
                              },
                              title: {
                                    display: true,
                                    text: `Loja - Vendas Mês (${meses[dataDia().mes]}/${dataDia().ano})`,
                                    position: 'top',
                                    align: 'start',
                                    font: {
                                          size: '20em'
                                    }
                              },
                        }
                  }
            }
      },

      methods: {
             addData(){
                  if (!this.myDate) {
           
                        this.data =  new Date(dataDia().ano, dataDia().mes, dataDia().dia)       
                  } 
                 
            }

      },
       mounted(){
             this.addData()

            

      },
      watch:{
            myDate: async function(){
                  await this.Chart


            }
      }
}
</script>