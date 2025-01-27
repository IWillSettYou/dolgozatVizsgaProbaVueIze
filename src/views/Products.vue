<template>
    <section>
        <div class="products">
            <DataTable :value="products">
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="price" header="Price"></Column>
                <!--Edit button is here btw, nice primeVue, I hope they gc-->
            </DataTable>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
// TOASTS DOESN'T WORK

const products = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://localhost:5000/api/products');
        products.value = response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
</script>

<style scoped>
.products {
    margin: 20px;
}
</style>
