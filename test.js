let obj = {
    first_name: "Kim",
        sayHello() {
        console.log("hello", this.first_name)
    }
}

console.log(obj)

obj.sayHello()