import {getCookie} from 'func.js';
        
var isLogin = getCookie("isLogin");
var id= getCookie("id");

document.write(isLogin+" "+ id);