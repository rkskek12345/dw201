<template>
    <main id="main">
            <section id="content">
                <div id="qsList">
                    <div class="qsTitle">
                        <h2>문의</h2>
                        <a href="javascript:questionWrite()">문의하기</a>
                    </div>
                    <div class="search_wrap">
                        <input type="text" name="word" id="word">
                    </div>
                    <div class="qsList_box">
                        <table>
                            <thead>
                                <th>번호</th><th>제목</th><th>작성자</th>
                                <th>작성일</th><th class="ans">답변</th>
                            </thead>
                            <tbody id="qs">
                                <tr v-for="q in qdata" :key="q.id" >
                                    <td>{{ q.id }}</td>
                                    <td>{{ q.title }}</td>
                                    <td>{{ q.writer }}</td>
                                    <td>{{ q.date }}</td>
                                    <td class="ans">{{ q.to }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section id="side">
                <div class="login_bt"><a href="/login">로그인</a></div>
            </section>
        </main>
</template>


<script>
import data from '@/assets/question.json';
const qdata= data;
export default {
    data(){
        return { qdata,};
    },
    name:'QuestionWeb',
}
</script>

<style>
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
.qsTitle{
    display: flex;
    justify-content: space-between;
}
.qsTitle a{
    text-decoration: none;
    color: white;
    background: black;
    width: 100px;
    padding: 5px 0;
    font-size: 15px; font-weight: 800;
    border-radius: 5px;
    text-align: center;
}
.qsList_box table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    margin-top: 15px;
}
#qs tr td{
    text-align: center;
    padding: 5px;
}
#qsList .qsList_box .ans{width:80px;}
#qsList .qsList_box .ans .bi-r-square-fill{color:#ef7a7a;}

#qsModal{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0; left: 0;
}
#qsModal .modalBackground{
    position: absolute;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.3);
}
#qsModal .qsInputBox{
    position: absolute;
    background: #eee;
    width: 600px;
    padding: 50px 80px;
    border-radius: 10px;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.qsInput{
    display: flex;
    align-items: center;
}
.qsInput label{width: 20%; font-size: 17px; opacity: 0.4;} 
#title{
    height: 30px; font-size: 17px; padding: 3px 15px;
    width: 80%; border: 0; border-radius: 5px;
    order: 2;
}
#title:focus + label{opacity: 1; font-weight: 800;}
#qsContent{
    order: 2; resize: none; width: 80%; height: 300px; border: 0;
    padding: 3px 10px; font-size: 17px;
}
#qsContent:focus + label{opacity: 1; font-weight: 800;}
.qsRegBt{
    
}
.qsRegBt a{
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    background: black;
    color: white;
    border-radius: 5px;
}
</style>