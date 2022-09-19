<template>
      <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { meses, tma, horarios } from '@/dados/dadosUtil.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
      name: 'BarVendas',
      components: { Bar },
      props: {
            chartId: {
                  type: String,
                  default: 'bar-vendas'
            },
            datasetIdKey: {
                  type: String,
                  default: 'label'
            },
            width: {
                  type: Number,
                  default: 0
            },
            height: {
                  type: Number,
                  default: 0
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
            meusDados: Number
      },
      data() {
            return {
                  chartData: {

                        labels: horarios,
                        datasets: [
                              {
                                    data: tma[this.meusDados],
                                    label: 'Hortifruit',
                                    backgroundColor: [
                                          '#92c7a3'
                                    ],
                                    borderColor: [
                                          'var(--blue)'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    borderRadius: '50'

                              },
                              {
                                    data: tma[this.meusDados + 1],
                                    label: 'Açougue',
                                    backgroundColor: [
                                          '#e88087'
                                    ],
                                    borderColor: [
                                          'var(--blue)'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    borderRadius: '50'

                              },
                              {
                                    data: tma[this.meusDados - 1],
                                    label: 'Frente de CAixa',
                                    backgroundColor: [
                                          '#ffdabf'
                                    ],
                                    borderColor: [
                                          'var(--blue)'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    borderRadius: '50'

                              }
                        ]
                  },
                  chartOptions: {
                        responsive: true,
                        indexAxis: 'x',
                        scales: {
                              x: {
                                    grid: {
                                          display: false
                                    },

                              },
                              y: {

                                    grid: {
                                          display: false
                                    },
                              },
                        },
                        plugins: {
                              legend: {
                                    display: true
                              },
                              title: {
                                    display: true,
                                    text: 'Loja - Média de Vendas Por Hora',
                                    position: 'top',
                                    align: 'center',
                                    font: {
                                          size: '20em'
                                    }
                              },

                              tooltip: {
                                    displayColors: true
                              }
                        }
                  }
            }
      },

      methods: {
            loadMeses(max) {
                  let x = parseInt(max)
                  let valor = []
                  for (let i = 0; i <= x; i++) {
                        valor[i] = meses[i].substring(0, 3)
                  }
                  return valor
            }
      },
      watch:{
            meusDados: function(){
                  this.Chart.updateChart()
            }
      }
}
</script>