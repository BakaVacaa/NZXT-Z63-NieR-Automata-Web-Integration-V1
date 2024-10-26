import {get_cookie } from './util.js'

const VIEWSTATE = parseInt(get_cookie('viewstate')) || 640

// Set dimensions
/*document.documentElement.style.width = VIEWSTATE + 'px'
document.documentElement.style.height = VIEWSTATE + 'px'*/
document.body.style.width = VIEWSTATE + 'px'
document.body.style.height = VIEWSTATE + 'px'

// Temps update
window.nzxt = {
    v1: {
        onMonitoringDataUpdate: (data) => {
            const { cpus, gpus} = data // https://github.com/NZXTCorp/web-integrations-types/blob/main/v1/index.d.ts
            update_cpu_gpu(cpus[0].load, gpus[0].load, cpus[0].temperature, gpus[0].temperature)

        }
    }
}

const cpu_temp = document.getElementById('cpu-gpu')
function update_cpu_gpu (cpu_load, gpu_load, cpus_temp, gpus_temp) {
    cpu_temp.innerHTML = `CPU:[${(cpu_load * 100).toFixed(1)}% @ ${Math.round(cpus_temp)}C] </br> GPU:[${(gpu_load * 100).toFixed(1)}% @ ${Math.round(gpus_temp)}C]`
}
