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
                                    data: tma[4],
                                    label: 'Receitas',
                                    backgroundColor: [
                                          '#27b1bf'
                                    ],
                                    borderColor: [
                                          'var(--blue)'
                                    ],
                                    barThickness: 10,
                                    maxBarThickness: 25,
                                    borderRadius: '50'

                              },
                              {
                                    data: tma[10],
                                    label: 'Despesas',
                                    backgroundColor: [
                                          '#ff695c'
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
                                    text: 'Padaria - Relação Receitas/Despesas 2022',
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