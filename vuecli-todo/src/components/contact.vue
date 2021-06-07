<template>
  <div>
      <h2>{{title}}</h2>
      <p class="contact">{{text}}</p>
  </div>
</template>

<script>
export default {
    name:"contact",
    data: () => {
        return {
            title: "Lorem Ipsum",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        }
    }
}
</script>

<style>
h2 {
    font-size:2.5rem;
    color:#fff;
}
.contact {
    color:#fff;
    width:65%;
    text-align: center;
    margin: 0 auto;
}
</style>