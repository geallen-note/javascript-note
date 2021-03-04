var a = {
    x:10,
    calculate: function(z) {
        return this.x + this.y + z;
    }
}

var b = {
    y: 20,
    calculate:function(z){
        return z;
    },
    __proto__:a
}

var c = {
    y: 20,
    __proto__:a
}

console.log(b.calculate(10))
