<template>
  <main id="main">
      <section id="content">
          <img src="../assets/main.jpg">
      </section>
      <section id="side">
        <div class="login_bt"><a href="/login">로그인</a></div>
      </section>
  </main>
</template>

<script>

export default {
  name: 'MyHome',
}
</script>

<style>
#main img{
  width: 100%;
}
#side .login_bt{
    padding: 10px 10px;
}
#side .login_bt a{
    color: white;
    text-decoration: none;
    background: rgb(214, 136, 188);
    padding: 10px 0;
    width: 100%;
    font-size: 20px; font-weight: 800;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
}

</style>