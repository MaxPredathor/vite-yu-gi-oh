<template>
    <div>
        <img :src="pic" alt="">
        <div class="card-text d-flex flex-column justify-content-between">
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

        &:hover{
            transform: scale(200%);
            transition: all 0.3s ease;
        }
    }
    .card-text{
        background-color: hsla(104, 53%, 21%, 0.8);
        min-height: 100px;
        margin-bottom: 20px;
        border-radius: 0 0 0.3em 0.3em;
        color: black;
        font-weight: 500;
        text-align: center;
    }
    h4{
        text-wrap: balance;
        color: white;
    }

</style>