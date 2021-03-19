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
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
}

img{
      width: 75%;
      max-width: 650px;
}

.text{
      color: rgba(0,0,0,0.8);
      padding: 10px;
      font-size: 18px;
}
.sub-text{
      font-size: 16px;
}

</style>