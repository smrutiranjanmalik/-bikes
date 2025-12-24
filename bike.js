let Youramount =null ;
let searchbike = ""


let suzukidetails = [

    Name = "bike suzuki",
    model = "model 2017",
    milage = "milage 50",
    warenty = "warenty 2 year"

];

let herodetails = [

    Name = "bike hero",
    model = "model 2022",
    milage = "milage 70",
    warenty = "warenty 2 year"

]

let tvsdetails = [

    Name = "bike tvs",
    model = "model 2020",
    milage = "milage 68",
    warenty = "warenty 2 year"

]

if (Youramount >= 100000) {
    console.log(` yourbike mach : ${suzukidetails}`);

}

else if (Youramount >= 70000 && Youramount <= 100000) {
    console.log(`yourbike mach : ${herodetails}`);

}

else if (Youramount >= 50000 && Youramount <= 70000) {
    console.log(`yourbike mach : ${tvsdetails}`);

}


else if (searchbike === "suzuki") {
    console.log(`${suzukidetails}`);

}

else if (searchbike === "hero") {
    console.log(`${herodetails}`);

}

else if (searchbike === "tvs") {
    console.log(`${tvsdetails}`);

}

else {
    console.log("plese enter valid value");
}