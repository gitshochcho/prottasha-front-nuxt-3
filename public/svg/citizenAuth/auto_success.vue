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
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
            <circle cx="45" cy="45" r="45" fill="#CDDFE9"/>
            <path d="M40.6333 56.387C39.9871 56.387 39.3733 56.1285 38.921 55.6762L29.7779 46.5332C28.841 45.5962 28.841 44.0455 29.7779 43.1085C30.7148 42.1716 32.2656 42.1716 33.2025 43.1085L40.6333 50.5393L57.2394 33.9332C58.1763 32.9962 59.7271 32.9962 60.664 33.9332C61.601 34.8701 61.601 36.4209 60.664 37.3578L42.3456 55.6762C41.8933 56.1285 41.2794 56.387 40.6333 56.387Z" fill="#2695D7"/>
        </svg>
    </div>
</template>