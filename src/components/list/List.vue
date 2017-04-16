<template>
    <div>
        <h2>errr</h2>
        <h2>{{ listdata[0].title }}</h2>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['listdata'])
        }
    }
</script>

<style>

</style>
