<template>
  <header id="header">
      <div class="logo"><a href="/"><img src="./assets/logo.jpg"></a></div>
      <nav class="nav">
          <ul class="menuList">
              <li class="menu"><a href="/studio">스튜디오</a></li>
              <li class="menu"><a href="/dress">드레스</a></li>
              <li class="menu"><a href="/makeup">메이크업</a></li>
              <li class="menu"><a href="/wedding">예식장</a></li>
              <li class="menu"><a href="/qs">Q&A</a></li>
          </ul>
      </nav>
  </header>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app{
    width: 1000px;
    margin: 0 auto;
    position: relative;
}
#header{
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#header .logo{width: 150px;}
#header .logo img{width: 100%;}
#header .nav{width: 850px;}
#header .nav .menuList{
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 20px;
}
#header .nav .menuList .menu a{
    color: black;
    text-decoration: none;
    font-weight: 800;
}
#main{
    display: grid;
    grid-template-columns: 4fr 1fr;
}
#side{
    text-align: center;
}
#side a{
    text-decoration: none;
    background: rgb(214, 136, 188);
    border-radius: 5px;
    color: white;
    font-size: 15px;
}

</style>
