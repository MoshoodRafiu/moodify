<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
import MainView from '../components/Dashboard/MainView.vue';
export default {
    components: {
        appMainView: MainView
    }
}
</script>