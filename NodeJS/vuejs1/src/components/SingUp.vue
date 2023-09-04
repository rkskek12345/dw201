<template>
    <main id="main">
        <section id="content">
            <h3>스드메 회원가입</h3>
            <form>
                <div id="sing_wrap">
                    <label for="email">아이디(이메일):</label>
                    <input type="email" id="email" name="email" required><br>

                    <label for="password">비밀번호:</label>
                    <input type="password" id="password" name="password" required><br>

                    <label for="phone">연락처:</label>
                    <input type="tel" id="phone" name="phone" required><br>

                    <label for="address">신혼집 주소:</label>
                    <input type="text" id="address" name="address" required><br>

                    <label for="weddingDate">결혼 예정일:</label>
                    <input type="date" id="weddingDate" name="weddingDate"><br>

                    <input type="submit" id="bt" value="가입하기">
                </div>
            </form>
        </section>
    </main>
</template>
<script>
    export default {
        name:'SingUp',
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
#sing_wrap {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
}

#sing_wrap label {
    display: block;
    margin-bottom: 5px;
    font-weight: 800;
    color: black;
}

#sing_wrap input{
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#sing_wrap input[type="submit"] {
    font-size: 15px;
    background: rgb(214, 136, 188);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 800;
}

#sing_wrap input[type="submit"]:hover {
    background-color: #0056b3;
}
</style>