<script setup>
    const props = defineProps({
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "100%"
        }
    });
</script>
<template>
    <div>
        <img src="/images/logo-footer.png" alt=""
            :style ="{ width: props.width, height: props.height }"
            class="object-contain" />
        
            
    </div>
</template>