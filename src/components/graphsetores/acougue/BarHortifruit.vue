<template>
      <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { meses, tma } from '@/dados/dadosUtil.js';

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
   
      },
      data() {
            return {
                  chartData: {

                        labels: meses,
                        datasets: [
                              {
                                    data: tma[9],
                                    label: 'Receitas',
                                    backgroundColor: [
                                          '#a9da88'
                                    ],
                                    borderColor: [
                                          'var(--blue)'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    borderRadius: '50'

                              },
                              {
                                    data: tma[3],
                                    label: 'Despesas',
                                    backgroundColor: [
                                          '#d43b2d'
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
                                    ticks: {
                                          display: true
                                    },
                                    grid: {
                                          display: false
                                    },

                              },
                              y: {
                                    ticks: {
                                          display: false
                                    },

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
                                    text: 'A??ougue - Rela????o Receitas/Despesas 2022',
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

      },
      watch:{
       
      }
}
</script>