<template>
    <main id="main">
        <section id="content">
            <h3>스드메 with 로그인</h3>
            <div class="login_wrap">
                <form name="loginf" id="loginf" method="get" action="/">
                    <input type="hidden" name="part" value="login_check">
                    <div class="login_box">
                        <div class="login_input">
                            <input type="text" name="sdmId" id="sdmId">
                            <label>ID</label>
                        </div>
                        <div class="login_input">
                            <input type="password" name="sdmPw" id="sdmPw">
                            <label>PW</label>
                        </div>
                        <div class="login_bt">
                            <a href="javascript:login();">LOGIN</a>
                        </div>
                    </div>
                </form>
                <div class="joinAfind">
                    <p class="find">아이디/비밀번호 찾기</p>
                    <p class="join"><a href="/sign">회원가입</a></p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name:'SdmLogin',
    }
</script>

<style>
#content{
    width: 1000px;
}
#content h3{
    text-align: center;
    padding-bottom: 15px;
}
.login_wrap {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
}
.login_wrap label {
    display: block;
    font-weight: 800;
    color: black;
}
.login_input{
    display: flex;
    align-items: center;
}
.login_wrap input{
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login_box .login_bt a{
    color: white;
    text-decoration: none;
    background: rgb(214, 136, 188);
    padding: 0px 5px;
    width: 30.8%;
    font-size: 15px; font-weight: 800;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
}
.joinAfind a{
    position: absolute;
    left: 450px;
    top: 353px;
    color: white;
    text-decoration: none;
    background: rgb(214, 136, 188);
    padding: 0px 5px;
    width: 11%;
    font-size: 15px; font-weight: 800;
    display: inline-block;
    border-radius: 5px;
    text-align: center;
}
</style>