// const maxBal = 80

// if(maxBal < 81){
//     console.log("O'qishga kirdingiz");
// }else{
//     console.log("O'qishga kirmadingiz");
// }




        // let ball = prompt("Iltimos, ballingizni kiriting:");
        //     ball = Number(ball);
        //     if (ball >= 80) {
        //         alert("Tabriklaymiz! Siz o'qishga kirdingiz.");
        //     } else if (ball < 80 && ball >= 0) {
        //         alert("Afsuski, siz o'qishga kirmadingiz.");
           
        //     }
    

            // let ball = prompt(" Ballingizni kiriting:");
            // ball = Number(ball);
            // if (ball >= 80) {
            //     alert("Tabriklaymiz! Siz o'qishga kirdingiz.");
            // } else

            //  if (ball < 80) {
            //     alert("Afsuski, siz o'qishga kirmadingiz.");
            //  }





 
            // let random1 = Math.floor(Math.random() * 100) + 1;
            // let random2 = Math.floor(Math.random() * 100) + 1;
            // let random3 = Math.floor(Math.random() * 100) + 1;
            
            // // Har bir random sonni 2 ga ko'paytirish
            // let multiplied1 = random1 * 2;
            // let multiplied2 = random2 * 2;
            // let multiplied3 = random3 * 2;
            
            // // Har bir random sonni 2 ga bo'lish va qoldig'ini hisoblash
            // let divided1 = random1 / 2;
            // let divided2 = random2 / 2;
            // let divided3 = random3 / 2;
            
            // let remainder1 = random1 % 2;
            // let remainder2 = random2 % 2;
            // let remainder3 = random3 % 2;
            
            // // Natijalarni alert yordamida chiqarish
            // alert(`
            // Random sonlar: ${random1}, ${random2}, ${random3}
            
            // 1. ${random1} * 2 = ${multiplied1}
            // 2. ${random2} * 2 = ${multiplied2}
            // 3. ${random3} * 2 = ${multiplied3}
            
            // 1. ${random1} / 2 = ${divided1.toFixed(2)} (Qoldiq: ${remainder1})
            // 2. ${random2} / 2 = ${divided2.toFixed(2)} (Qoldiq: ${remainder2})
            // 3. ${random3} / 2 = ${divided3.toFixed(2)} (Qoldiq: ${remainder3})
            // `);











//             let randomNumber = Math.floor(Math.random() * 100) + 1;

//     // Natijani tekshirish va alert chiqarish
//         if (randomNumber % 2 === 0) {
//     alert(`
//          Random son: ${randomNumber} (Bu juft son)
//      Bu son 2 ga bo'linadi.
//     `);
//     } else {
//     alert(`
//     Random son: ${randomNumber} (Bu toq son)
//     Bu son 2 ga bo'linmaydi.
//    `);
// }














// // Boshlang'ich alert
// if (confirm("Sizda hozir random sonlar chiqishini boshlidi")) {
//     // Random sonni yaratish
//     let randomNumber = Math.floor(Math.random() * 100) + 1;

//     // Random sonni ko'rsatish
//     alert(`Random orqali chiqqan son: ${randomNumber}`);

//     // Davomini tasdiqlash
//     if (confirm("Biz random sonni 2 ga ko'paytirmoqchi va bo'lmoqchimiz!")) {
//         // 2 ga ko'paytirish
//         let multiplied = randomNumber * 2;

//         // 2 ga bo'lish
//         let dividedByTwo = multiplied / 2;

//         // 3 ga bo'lish qoldig'ini hisoblash
//         let remainderByThree = multiplied % 3;

//         // Natijalarni chiqarish
//         alert(`
//         Random orqali chiqqan son: ${randomNumber}.
//         Biz uni 2 ga ko'paytirib: ${multiplied} sonini oldik.
//         Bu sonni 2 ga bo'lsak: ${dividedByTwo} sonini oldik.
//         Va shu sonni 3 ga bo'lgandagi qoldiq: ${remainderByThree} sonini oldik.
//         `);
//     } else {
//         alert("Amal bekor qilindi.");
//     }
// } else {
//     alert("Amalni boshlash bekor qilindi.");
// }



















// // Boshlang'ich alert
// if (confirm("Sizda hozir random sonlar chiqishini boshladik")) {
//     // Random sonni yaratish
//     let randomNumber = 22; // Random sonni 22 qilib o'rnatamiz

//     // Random sonni ko'rsatish
//     alert(`Random orqali chiqqan son: ${randomNumber}`);

//     // Davomini tasdiqlash
//     if (confirm("Biz random sonni 2 ga ko'paytirmoqchi va bo'lmoqchimiz!")) {
//         // 2 ga ko'paytirish
//         let multiplied = randomNumber * 2;

//         // 2 ga bo'lish
//         let dividedByTwo = multiplied / 2;

//         // 3 ga bo'lish qoldig'ini hisoblash
//         let remainderByThree = multiplied % 3;

//         // Natijalarni chiqarish
//         alert(`
//         Random orqali chiqqan son: ${randomNumber}.
//         Biz uni 2 ga ko'paytirib: ${multiplied} sonini chiqardik.
//         Bu sonni 2 ga bo'lsak: ${dividedByTwo} sonini chiqardik.
//         Va shu sonni 3 ga bo'lgandagi qoldiq: ${remainderByThree} sonini chiqardik.
//         `);
//     } else {
//         alert("Amal bekor qilindi.");
//     }
// } else {
//     alert("Amalni boshlash bekor qilindi.");
// }




















if (confirm("Sizda hozir random sonlar chiqishini boshladik")) {
    let randomNumber = 22; 
    alert(`Random orqali chiqqan son: ${randomNumber}`);
    if (confirm("Biz random sonni 2 ga ko'paytirmoqchi va bo'lmoqchimiz!")) {
        let multiplied = randomNumber * 2;
        let dividedByTwo = multiplied / 2;
        let remainderByThree = multiplied % 3;
        alert(`
        Random orqali chiqqan son: ${randomNumber}.
        Biz uni 2 ga ko'paytirib: ${multiplied} sonini chiqardik.
        Bu sonni 2 ga bo'lsak: ${dividedByTwo} sonini chiqardik.
        Va shu sonni 3 ga bo'lgandagi qoldiq: ${remainderByThree} sonini chiqardik.
        `);
    } else {
        alert("Amal bekor qilindi.");
    }
} else {
    alert("Amalni boshlash bekor qilindi.");
}
