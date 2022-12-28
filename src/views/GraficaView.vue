<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card border border-dark">
                <div class="card-header bg-dark"></div>
                <div class="card-body">
                    <Bar :chart-options="chartOptions" :chart-data="chartData"></Bar>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import axios from 'axios'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default{
    components: {Bar},
    props: {
        chartId: {
        type: String,
        default: 'bar-chart'
        }
    },
    data(){
        return{
            etiquetas:[],valores:[],chartData:[],
            chartOptions: {
                responsive: true
            }
        }
    },
    async mounted(){
        const totales = await axios.get('http://laraproducts.run/api/totales');
        totales.data.map((row)=>(
            this.etiquetas.push(row.producto),
            this.valores.push(row.total)
        ))
        this.chartData = {
            labels: this.etiquetas,
            datasets:[
                {label:'Productos',data: this.valores, backgroundColor: 
                ['#0dcaf0','#6610f2','#fd7e14','#ffc107'] }
            ]
        }
    }

}

</script>