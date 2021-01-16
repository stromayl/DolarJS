$ = {
   reg:{
    isEmail:function(val){
        return /^(\w+)@(\w+)\.(\w+)$/.test(val)
    }
    ,
    isPhone:function(val){
        return /^\d{10}$/.test(val)
    }
    ,
    isCodePostal:function(val){
        return /^\d{5}$/.test(val)

    }
    ,
    isId:function(val){
        return /^#\w+$/.test(val)
    }
    ,
    isClass:function(val){
        return /^#\w+$/.test(val)
    }
   }
}
