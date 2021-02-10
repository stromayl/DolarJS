const $= (function () {

	'use strict';

	/**
	 * Create the constructor
	 * @param {String} selector The selector to use
	 */
	 window.$dolar = {

	 	data:{  }
	 }
	var Constructor = function (selector) {
		this.data ={}
		if (!selector) return;
		if (selector === 'document') {
			this.elems = [document];
		} else if (selector === 'window') {
			this.elems = [window];
		} else {
			this.selector = document.querySelectorAll(selector);
			this.elems = document.querySelectorAll(selector);
		}
	};

	
	/**
	*forEach function
	 * <<Run a callback on forEach item>>
	 * @param  {Function}  The callback function to run
	 */
	Constructor.prototype.forEach = function (callback) {
		if (!callback || typeof callback !== 'function') return;
		for (var i = 0; i < this.elems.length; i++) {
			callback(this.elems[i], i);
		}
		return this;
	};

	
// =============== CSS MANIPULATION FUNCTIONS ===================== //
	/**
	*addClass function
	 * << add a className >>
	 * @param {String}  The class name 
	 */
	Constructor.prototype.addClass = function (className) {
		this.forEach(function (item) {
			item.classList.add(className);
		});
		return this;
	};
	Constructor.prototype.addClassAfter = function (className,ms) {
	
		setTimeout(()=>{
			this.addClass(className)
		}, ms);
			
	};

	/**
	*removeClass function
	 * << Remove the className >>
	 * @param {String}  The class name 
	 */
	Constructor.prototype.removeClass = function (className) {
		this.forEach(function (item) {
			item.classList.remove(className);
		});
		return this;
	};

		Constructor.prototype.removeClassAfter = function (className,ms) {
		setTimeout(()=>{

			this.removeClass(className);
		},ms);
		return this;
		
	};
	/**
	 * addCss function
	 *<< set a value to a css property >> 
	 * @param {String} the property name
	 * @param {String} the value
	 */
	Constructor.prototype.addCss = function (props,value) {
			let keys  = Object.keys(props);

			this.forEach(function (item) {
			

			keys.forEach(key=>{
			
				item.style[key] = props[key];



			})
		});
			
			return this;
	};


Constructor.prototype.addCssAfter = function (props,ms) {
	
		setTimeout(()=>{
			this.addCss(props)
		}, ms);
		return this;
	};

	/**
	 * removeCss function
	 * << remove the value of a css property >>
	 * @param {String} the property name
	 */
	Constructor.prototype.removeCss = function (prop) {
		this.forEach(function (item) {
			item.style[prop] = null;
		});
		return this;
	};


	Constructor.prototype.removeCssAfter = function (prop,ms) {
		setTimeout(()=>{
			this.removeCss(prop)
		}, ms);
		return this;
	};


			/**
	 *hide function
	 * << set opacity to 0 to show elemens >> 
	 */
	Constructor.prototype.hide = function () {
		this.forEach(el=>{

			el.style.opacity="0"
			
		})
		return this;

		
		

	};

	Constructor.prototype.hideAfter = function (ms) {
		setTimeout(()=>{
			this.hide();
		}, ms);
		return this;
		
		
	};



			/**
	 *show function
	 * << set opacity to 1 to show elemens >> 
	 */
	Constructor.prototype.show = function () {
		this.forEach(el=>{
			el.style.opacity="1"
			
		})
		return this;

		
		
	};


	Constructor.prototype.showAfter = function (ms) {
			setTimeout(()=>{
			this.show();
		}, ms);
		return this;
		

		
		
	};





			/**
	 *show function
	 * << set opacity to 1 to show elemens >> 
	 */
	Constructor.prototype.addTransition = function (val) {
		this.forEach(el=>{
			el.style.transition=val|| "all 0.4s ease 0s";
			
		})
		return this;

		
		
	};

	/**
	 * getClassList function
	 * << returns array of classNames >>
	 */
	Constructor.prototype.getClassList = function () {
		return [...this.elems[0].classList];

		
		
	};

/**
	 * addCLass function
	 * << add a className >>
	 * @param {String} The class name
	 */
	Constructor.prototype.addClass = function (c) {
		this.elems.forEach(el=>{
			el.classList.add(c)
		})

	return this;

		
		
	};

	



	/**
	 * remiveCLass function
	 * << remove a className>>
	 * @param {String} The class name
	 */
	Constructor.prototype.removeClass = function (c) {
		this.elems.forEach(el=>{
			el.classList.remove(c)
		})
		
	return this;

		
		
	};

	



/**
	 * toggleCLass function
	 * << add a className if not exist and remove it if already exist >>
	 * @param {String} The class name
	 */
	Constructor.prototype.toggleClass = function (c) {
		let classList = this.getClassList();
		let index = classList.indexOf(c);
		if(index > -1){
			this.removeClass(c)
		}else{
			this.addClass(c);
		}
	return this;

		
		
	};

// ============ DOM ELEMENTS FUNCTIONS
	/**
	 * setValue function
	 * <<set the value >>
	 * @param {String} the new value
	 */
	Constructor.prototype.setValue = function (val) {
		/// replace variables
		let sp = val.split(' ')
		let result = "";
		sp.forEach(p=>{
			if(p.startsWith('!!')){
				result+= window.$dolar.data[p.replace('!!','')]
			}else{
				result += p
			}
			result+=" "
		})
		// this.elems[0].value = result.trim();
		this.elems.forEach(el=>{
			el.value = result.trim();
		})

		return this;
		
	};

		/**
	 * getValue
	 *<< return the value of the current elemtns >>
	 */
	Constructor.prototype.getValue = function () {
		return this.elems[0].value;

		
		
	};

		/**
	 * appendValue function
	 *<< append a custom value to old value >>
	 * @param {String} the value
	 */
	Constructor.prototype.appendValue = function (val) {
		this.setValue(this.getValue()+val);
		return this;

		
		
	};

		/**
	 * clearValue function
	 * <<clear the value of elements >>
	 */
	Constructor.prototype.clearValue = function () {
		this.setValue('');
		return this;
		
		
	};



	
			/**
	 *addEvent function
	 * << add a custom event listener to elements >> 
	 *@param {String} event name
	 *@param {Function} the callback function 
	 */
	Constructor.prototype.addEvent = function (e,callback) {
		this.forEach(el=>{
			el.addEventListener(e,callback)
		})
		return this;

		
		
	};

			/**
	 *remobe function
	 * << remove elements from dom >> 
	 */
	Constructor.prototype.remove = function () {
		this.forEach(el=>{
			el.remove();
			
		})
		return this;

		
		
	};




	




	



	 
	Constructor.prototype.removeAfter = function (ms) {
		setTimeout(()=>{
this.forEach(el=>{
			el.remove();
			
		})

		}, ms);	
			return this;

		
		
	};



	/**
	 * getAttribue function
	 * << get the value of an attribute >>
	 * @param {String} The attribute name
	 */
	Constructor.prototype.getAttribute = function (a) {
		return this.elems[0].getAttribute(a)
		
		
	};
	Constructor.prototype.attr = function (a,v) {
		if(!v){
			return this.elems[0].getAttribute(a)

		}else{
			this.elems[0].setAttribute(a,v)
		}
		
		
		
	};


	/**
	 * setAttribue function
	 * << add a custom attribute >>
	 * @param {String} The attribute name
	 * @param {String} The value of this attribute
	 */
	Constructor.prototype.setAttribute = function (a,v) {
		this.elems.forEach(el=>{
			el.setAttribute(a,v);
		})
		return this;
		
		
	};


	/** at function
	 * <<switch between elements>>
	 * @param {Number} the index of the element to selec
	 */
	Constructor.prototype.at = function (i) {
		this.elems = [this.selector[i]];

		return this;

		
		
	};

	









// ========== built in custom functions

	/** addVerify function
	 * << verify value using a regular expression >>
	 *@param {regExp} the regEexp to test 
	 *@param {String} the success class to add if the value is correct
	 *@param {String} the error class to add if the value is incorrect
	 
	 */
	Constructor.prototype.addVerify = function (regExp,successClass,errorClass) {
		
		this.elems.forEach(el=>{
			el.addEventListener('keyup', ()=>{
				if(regExp.test(el.value)){
					el.classList.remove(errorClass)
					el.classList.add(successClass)
				}else{
					el.classList.remove(successClass)
					el.classList.add(errorClass)
				}

			})
			
		})
		return this;
		
		
	};

	
	Constructor.prototype.addHTML = function (html) {
		
		this.elems.forEach(el=>{
			el.innerHTML += html;
			
		})
		return this;
		
		
	};
		Constructor.prototype.addHTMLAfter = function (html,ms) {
		setTimeout(()=>{
			this.addHTML(html)
		},ms);
		return this;
		
		
	};

		Constructor.prototype.innerHTML = function (html) {
		let sp = html.split(' ')
		let result = "";
		sp.forEach(p=>{
			if(p.startsWith('!!')){
				result+= window.$dolar.data[p.replace('!!','')] 
			}else{
				result += p
			}
			result+=" "
		})
		this.elems.forEach(el=>{
			el.innerHTML = result;
			
		})
		return this;
		
		
	};

		Constructor.prototype.outerHTML = function (html) {
		let sp = html.split(' ')
		let result = "";
		sp.forEach(p=>{
			if(p.startsWith('!!')){
				result+= window.$dolar.data[p.replace('!!','')]
			}else{
				result += p
			}
			result+=" "
		})
		this.elems.forEach(el=>{
			el.outerHTML = result;
			
		})
		return this;
		
		
	};
		Constructor.prototype.outerHTMLAfter = function (html,ms) {
		setTimeout(()=>{
			this.outerHTML(html)
		},ms);
		return this;
		
		
	};

Constructor.prototype.innerHTMLAfter = function (html,ms) {
		setTimeout(()=>{
			this.innerHTML(html)
		},ms);
		return this;
		
		
	};


	Constructor.prototype.replaceText = function (text) {
		let sp = text.split(' ')
		let result = "";
		sp.forEach(p=>{
			if(p.startsWith('!!')){
				result+= window.$dolar.data[p.replace('!!','')]
			}else{
				result += p
			}
			result+=" "
		})
		this.elems.forEach(el=>{
			el.textContent = result;
			
		})
		return this;
		
		
	};

	Constructor.prototype.replaceTextAfter = function (text,ms) {
		
		setTimeout(()=>{
			this.replaceText(text)
		},ms);
		return this;
		
		
	};


Constructor.prototype.change = function (selector) {
		return new Constructor(selector);
		
	};



// save the value 
Constructor.prototype.saveValue = function (name) {

		let value = this.getValue();
		window.$dolar.data[name] = value;
		
		return this;
		
	};


	


	/**
	 * Instantiate a new constructor
	 */
	var instantiate = function (selector) {
		return new Constructor(selector);
	};

	/**
	 * Return the constructor instantiation
	 */
	return instantiate;

})();