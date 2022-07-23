<script setup lang="ts">
//for axios testing
import { jyRequest } from './service'
console.log(process.env.NODE_ENV) //for environments testing
jyRequest
    .request<any>({
        url: '/get',
        method: 'get',
        params: {
            name: 'test'
        }
    })
    .then(res => {
        console.log(res)
    })
</script>

<template>
    <div>app1</div>
</template>

<style scoped></style>
