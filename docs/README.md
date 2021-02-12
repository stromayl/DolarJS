
<center>
	<img src="img/dolarjs.png" />
</center>
<br>


# DolarJS Library Documentation
<!-- # SpringJS --> 
<small>
	A simple and lightweight  javascript library easy to learn easy to use 
</small>

## Instalation
you can include the javascript file inside  the head tag of your page
```html
<head>
...
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/mboussaid/dolarjs/src/dolar.min.js"></script>
...
</head>
```
## Select Elements
you can select on element  or more by like this :

> index.html 
```html
...
<input type="text" placeholder="email" />
<input type="password" placeholder="password" />

...
```
> script.js 

```javascript

$('input')  // select all inputs


```

if you want to select only one element you can use function at(index)

```javascript


$('input').at(0) // select input at index 0 (email input)

$('input').at(1) // select  input at index 1 (password input)


```

## Add Events 

you can add a custom event to a one or more elements
$(element).addEvent(eventName,callbackFunction)



> index.html
```html
<button>say welcome </button>
<button>say goodbye </button>

```
> script.js

```javascript
/// add a click function to the first button 
$('button').at(0).addEvent('click',function(){
	alert('welcome')
})
/// add a click function to the second button 
$('button').at(1).addEvent('click',function(){
	alert('goodbye')
})

/// You can use all code in one line
/// You can switch between selected element  by at function

$('button').at(0).addEvent('click',function(){alert('welcome')}).at(1).addEvent('click',function(){alert('goodbye')})


```


## Switch between elements 


you can switch between selected elements using change function see this example
```html
<button>say hello </button>
<input type="checkbox"/>

```
without change function

```javascript
/// add a click function to the first button 
$('button').addEvent('click',function(){
	alert('hello')
})
/// add change function to checkbox input
$('input').addEvent('click',function(){
	alert('checkbox changed')
})

```

with change function

```javascript
/// add a click function to the first button 
$('button').addEvent('click',function(){
	alert('hello')
}).change('input').addEvent('change',function(){alert('checkbox changed')})

```
change allows you to switch between selected elements so you can write all your code inline



### Hide or show or remove elements

<table>

<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
	<td>hide()</td><td>hide the element </td>
</tr>
<tr>
	<td>hideAfter(number)</td><td>hide the element after delay </td>
</tr>

<tr>
	<td>show()</td><td>show the element </td>
</tr>
<tr>
	<td>showAfter(number)</td><td>show the element after delay </td>
</tr>
<tr>
	<td>remove()</td><td>remove the element from DOM </td>
</tr>
<tr>
	<td>removeAfter(number)</td><td>remove the element from DOM after delay </td>
</tr>
</table>



example


```html

<h1>This text will hide directly (after 0s)</h1>
<h1>this text will hide after 1 second</h1>
<p style='opacity:0'>this text will be visible after 2 second and will be removed after 4 second </p>

```

```javascript

$('h1').at(0).hide()
$('h1').at(1).hideAfter(1000)
$('p').showAfter(2000).removeAfter(4000)
// or use inline syntax with at and change
$('h1').at(0).hide().at(1).hideAfter(1000).change('p').showAfter(2000).removeAfter(4000)

```




### Dealing with element attributes



<table>

<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
	<td>getAttribute('name')</td><td>returns the value of an attribute </td>
</tr>
<tr>
	<td>setAttribute('name','value')</td><td>set attribute name to value </td>
</tr>
</table>

```html

<input type="text" placeholder="password" />
<button>Hide / Show password</button>

```

```javascript

$('button').addEvent('click',()=>{
	let InputType = $('input').getAttribute('type')
	if(InputType == "text"){
		$('input').setAttribute('type','password')
	}else{
		$('input').setAttribute('type','text')
	}
})


```





### Dealing with element value



<table>

<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
	<td>getValue()</td><td>returns the value of the element </td>
</tr>
<tr>
	<td>saveValue('name')</td><td>save the element value as name </td>
</tr>
<tr>
	<td>setValue('new value') </td><td>change the value of the element  </td>
</tr>
<tr>
	<td>appendValue('new value') </td><td>add  the value to the old value of the element  </td>
</tr>
<tr>
	<td>clearValue() </td><td>clear the value of the element  </td>
</tr>
</table>
 


 > example 

```html

<input type="text" placeholder="firstname"/>
<input type="text" placeholder="lastname"/>
<input type="text"/>
<button>click</button>

```

```javascript

$('button').addEvent('click',()=>{
	let FirstName = $('input').at(0).getValue();
	let LastName = $('input').at(1).getValue();
	let message = "Welcome " + FirstName +" " + LastName;
	$('input')
	.at(2).setValue(message)
	.at(0).clearValue()
	.at(1).clearValue();

})


```
using saveValue function 
> how it works 

this function allows you to save the value with a name 


lets use the same example with the saveValue function 


```javascript

$('button').addEvent('click',()=>{
 $('input').at(0).saveValue('firstname') /// save the value as firstname
$('input').at(1).saveValue('lastname') /// save the value as lasttname
/// the !!firstname and !!lastname well be replaced with thier values 
	$('input')
	.at(2).setValue('Welcome !!firstname !!lastname') 
	.at(0).clearValue()
	.at(1).clearValue();
	//// the !!firstname will be replaced with the value of the firstname
	//// the !!lastname will be replaced with the value of the lastname
	/// you can save the value with any name you want 
	//and when you need to call it add `!!` befor it to replace it with the value 


})


```

you can also use the inline code


```javascript

$('button').addEvent('click',()=>{
 $('input')
 .at(0).saveValue('firstname')
 .at(1).saveValue('lastname')
 .at(2).setValue('Welcome !!firstname !!lastname')
 .at(0).clearValue()
 .at(1).clearValue();

})


```


### Dealing with element content 




<table>

<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
	<td>innerHTML(html)</td><td>replace the inside html of the element </td>
</tr>
<tr>
	<td>innerHTMLAfter(html,number) </td>replace the inside html of the element after a delay<td> </td>
</tr>
<tr>
	<td>outerHTML(html)</td><td>replace the element by a custom html code </td>
</tr>
<tr>
	<td>outerHTMLAfter(html,number) </td><td>replace the element by a custom html code after a delay</td>
</tr>
<tr>
	<td>replaceText(text)</td><td>replace the text Content of the element </td>
</tr>
<tr>
	<td>replaceTextAfter(text,number) </td><td>replace the text Content of the element after a delay </td>
</tr>
</table>
 

  > example 

```html

<button>click</button>

```

```javascript

$('button').addEvent('click',()=>{
	
	
	 $('button')
	 .replaceText('welcome !!!')
	 .replaceTextAfter('Back !!!',2000)
	 .outerHTMLAfter('<h1>hello world </h1>',4000);

})


```


### Dealing with element classNames



<table>

<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
	<td>addClass(class)</td><td>add class to element</td>
</tr>
<tr>
	<td>addClassAfter(class,number)</td><td>add class to element after a delay</td>
</tr>
<tr>
	<td>removeClass(class)</td><td>remove class from the element</td>
</tr>
<tr>
	<td>removeClassAfter(class,number)</td><td>remove class from the element after a delay</td>
</tr>
<tr>
	<td>toggleClass(class)</td><td>remove class from the element if already exist and add it if not</td>
</tr>

</table>
 


note you can pass  your custom css as an object but you need to use camelcase insteade of kababcase , so you need to use backgroundColor instead of background-color , and borderRadius insead of border-radius .


   > example 

```css
.blue{
	color:blue;
}

```
```html
<h1>hello world </h1>
<button>add class </button>
<button>remove class </button>
<button>toggle (add/remove)</button>
```

```javascript

$('button')
.at(0).addEvent('click',()=>{$('h1').addClass('blue')})
.at(1).addEvent('click',()=>{$('h1').removeClass('blue')})
.at(2).addEvent('click',()=>{$('h1').toggleClass('blue')})


```


### Dealing with elements Styles



<table>

<tr>
<th>Function</th>
<th>Description</th>
</tr>
<tr>
	<td>addCss({prop:'value'})</td><td>add css to element</td>
</tr>
<tr>
	<td>addCssAfter({prop:'value'},number)</td><td>add css to element after a delay</td>
</tr>
<tr>
	<td>removeCss(prop)</td><td>remove css from the element</td>
</tr>
<tr>
	<td>removeCssAfter(prop,number)</td><td>remove css from the element after a delay</td>
</tr>

<tr>
	<td>addTransition()</td><td>add a transition effect to the element</td>
</tr>
</table>
 



   > example 


note : you can call  addTransition function to add a transition effect while adding the css 
this function will add a transition property with the default value of 'all 0.4s ease 0s' 
you can change it by passing the transition value as a parameter like this addTransition('color 0.6s ease-in 0s');
```html
<h1>hello world </h1>
<button>add css without addTransition </button>
<button>add css with addTransition </button>


```

```javascript

$('button').at(0).addEvent('click',()=>{
	$('h1').addCss(
	{
		backgroundColor: 'blue' ,
		color: 'white'
	})

}).at(1).addEvent('click',()=>{

	/// add a custom ransition
	$('h1').addTransition('background-color 0.6s ease-in-out 0s').addCss(
	{
		backgroundColor: 'green' ,
		color: 'white'
	})

})



```

### addVerify function

this function allows you to add a keyup event handler and each time when you change the value this function checks if the value of the input match the regular expression if true then add your custom success classname else add your custom error classname 
> syntax 

```javascript

...addVerify(regExp,successClass , errorClass);

```
> example 



create a success and error classNames 
```css
.success{
	backgroud:green;
	color:#fff;
}
.error{
	backgroud:red;
	color:#fff;
}


```

```html
<input type="password" placeholder="password" />


```


```javascript
/// check if the length of the input is 8 at least
$('input').addVerify(/^\w{8,}$/,'success','error');

/// example for email 
$('input[type="email"]').addVerify(/^\w+@\w+.\w+$/,'success','error');

/// example for phone number
$('input').addVerify(/^(+2126|06)\d{8}$/,'success','error');

/// example for url 
$('input').addVerify(/^(http:\/\/|https:\/\/)\w+.\w+\.\w+/,'success','error');


```
