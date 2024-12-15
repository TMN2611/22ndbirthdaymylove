// Thay đổi nội dung búc thư ở đây
var letterContent ="Cảm ơn em vì đã xuất hiện ở cuộc đời anh. Cảm ơn em vì đã yêu anh và cho phép anh được yêu em. Từ khi có em cuộc sống của anh luôn đầy ắp tình yêu thương và sự vui vẻ.❤️ Em yêu ơi ❤️. Chúc em tuổi mới vui vẻ hơn nữa trưởng thành hơn nữa luôn luôn hạnh phúc luôn luôn tươi vui. Chúc em mọi điều tốt đẹp, hiện tại yêu em tương lai cũng yêu em. Mong rằng em bé sẽ cùng anh đi một chặn đường dài buồn vui sướng khổ hạnh phúc mọi thứ cùng trãi qua. Dù sau này không còn gần nhau phải yêu xa nếu đọc lại lá thư này anh mong em biết rằng a nhớ và yêu em rất nhiều. Cảm ơn em, love you 😘💕💕💕💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 
const audioCTCHT = document.querySelector('.ctcht')
// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {

        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
    audioCTCHT.play()

})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")
    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})