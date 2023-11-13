<template>
    <div>
        <img :src="pic" alt="">
        <div class="card-text">
            <h4>{{ title }}</h4>
            <p>{{ cardType }}</p>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'CardComponent',
    props: {
        pic:{
            type: String,
            required: true,
            default: ""
        },
        title:{
            type: String,
            required: true,
            default: "Card-Title"
        },
        cardType:{
            type: String,
            required: false,
            default: "No type Found"
        }
        },
    }
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
    .card-text{
        background-color: hsla(104, 53%, 21%, 0.782);
        min-height: 150px;
        margin-bottom: 20px;
    }
    h4{
        text-wrap: balance;
    }

</style>