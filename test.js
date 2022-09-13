let obj = {
    first_name: "Kim",
        sayHello() {
        console.log("hello", this.first_name)
    }
}
// log obj
console.log(obj)

test = ["test"]

for(i in test){
    console.log("Type:" ,typeof i)
}