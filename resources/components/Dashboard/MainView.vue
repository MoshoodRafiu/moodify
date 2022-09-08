<template>
    <div class="main-view">
        <app-left-bar/>
        <div class="content">
        </div>
        <app-right-bar/>
    </div>
</template>

<script>
import LeftBar from './LeftBar.vue';
import RightBar from './RightBar.vue';
export default {
    name: 'MainView',
    components: {
        appLeftBar: LeftBar,
        appRightBar: RightBar,
    }
}
</script>