<template>
   <div class="empty-state">
      <img src="@/assets/images/empty_cart.svg" alt="" />
      <div class="text">
         <p class="main-text">There's nothing on your list yet?</p>
         <p class="sub-text">Maybe check your refrigerator.</p>
      </div>
   </div>
</template>

<style scoped>

.empty-state{
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 25%;
}

img{
      width: 75%;
}

.text{
      color: rgba(0,0,0,0.8);
      padding: 10px;
}
.sub-text{
      font-size: 14px;
}

</style>