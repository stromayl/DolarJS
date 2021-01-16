# DolarJS
Simple  and Minimal Javascript  Framework
# How to use
## Input Verification

### available verification functions 
<table>
  <tr>
    <th>function</th>
    <th>description</th>
  </tr>
  <tr>
    <td>isEmail</td>
    <td>verify that email is correct </td>
  </tr>
    <tr>
    <td>isPhone</td>
    <td>verify that the phone number is correct </td>
  </tr>
   <tr>
    <td>isCodePostal</td>
    <td>verify that the postal code is correct </td>
  </tr>
  
  
  </table>

> Example : Email Verification
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

> Using other functions :
```javascript 
let isValidEmail = $.reg.isEmail("email@gmail.com");
let isValidPhone = $.reg.isPhone("0612345678");
let isCodePostal = $.reg.isCodePostal("23456");
```


[![Mohamed Boussaid's DEV Community Profile](https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg)](https://dev.to/mboussaid)
