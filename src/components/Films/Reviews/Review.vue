<template>
    <div class="Review">
        <div class="review">{{allReviews.review}}</div>
    </div>
</template>

<script>
export default {
    name: "Review",
    props:{
        allReviews:{
            type:Object,
            default: () => {
            }
        }
    }
}
</script>

<style scoped>
.review {
    width: 500px;
    padding: 20px;
    font-family: Tahoma, sans-serif;
    margin-top: 20px;
    max-width: 100%;
    word-wrap: break-word;
}
@media (max-width: 768px) {
    .review {
        width: 500px;
        padding: 20px;
        font-family: Tahoma, sans-serif;
        margin-top: 20px;
        word-wrap: break-word;
    }
}
</style>
