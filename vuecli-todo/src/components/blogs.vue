<template>
    <div class="blogs">
        <div v-for="item in modelData" :key="item" class="modelData">
        <img :src="item.thumbnail" >
    <div class="text">
        <h3>{{item.title}}</h3>
        <span>{{item.categoryId}}</span>
        <p>{{item.content}}</p>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
           modelData: [
        {
            "id": "2",
            "categoryId": "UI developer",
            "createdAt": "2021-04-23T09:07:41.855Z",
            "title": "cross-platform",
            "thumbnail": "http://lorempixel.com/640/480/animals",
            "description": "Legacy",
            "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
        },
        {
            "id": "3",
            "categoryId": " UX developer ",
            "createdAt": "2021-04-23T14:57:39.459Z",
            "title": "Bedfordshire",
            "thumbnail": "http://lorempixel.com/640/480/transport",
            "description": "Investor",
            "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
        },
        {
            "id": "4",
            "categoryId": " UI developer ",
            "createdAt": "2021-04-23T13:31:36.828Z",
            "title": "programming application quantify",
            "thumbnail": "http://lorempixel.com/640/480/city",
            "description": "Dynamic",
            "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
        },
        {
            "id": "6",
            "categoryId": "Vue developer",
            "createdAt": "2021-04-23T21:46:59.584Z",
            "title": "Ergonomic Cotton Bacon",
            "thumbnail": "http://lorempixel.com/640/480/cats",
            "description": "Senior",
            "content": "You can't back up the driver without backing up the open-source EXE transmitter!"
        },
        {
            "id": "7",
            "categoryId": " UI developer ",
            "createdAt": "2021-04-23T18:21:17.130Z",
            "title": "Baby",
            "thumbnail": "http://lorempixel.com/640/480/technics",
            "description": "Lead",
            "content": "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!"
        },
        ]
        }
    }
}
</script>

<style>
.blogs {
    width:100%;
}
.blogs img {
    width:200px;
    height:200px;
    object-fit:cover ;
}
.blogs .modelData {
    width:70%;
    display:flex;
    margin: 0 auto;
    padding:5px;
}
.blogs .modelData .text {
    text-align: left;
    width:80%;
    padding: 0px 10px;
    color:#fff;
}
.blogs .modelData .text h3 {
    font-size:1.5rem;
    color:#fff;
}
</style>