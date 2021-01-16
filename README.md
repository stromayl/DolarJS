# DolarJS
Simple  and Minimal Javascript  Framework
# How to use
### Input Verification
> Email Verification
```html
<!--- include javascript file --->
<head>
  <script src="dolarjs.js"></script>
</head>
```
```javascript 
let email = "mohamed@yahoo.com" ;
let isValidEmail = $.reg.isEmail(email);
if(isValidEmail){
alert("your email is correct :-) ");
}else{
alert("error please enter a correct email !!");
}

```

<ul>
  <li>isEmail</li>
  <li>isPhone</li>
</ul>
