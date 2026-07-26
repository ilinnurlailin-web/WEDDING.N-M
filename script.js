// ===============================
// Ambil nama tamu dari URL
// Contoh:
// ?to=Bapak%20Ahmad
// ===============================

const params = new URLSearchParams(window.location.search);
const tamu = params.get("to");

if (tamu) {
    document.getElementById("namaTamu").innerHTML = decodeURIComponent(tamu);
}

// ===============================
// Tombol Buka Undangan
// ===============================

function bukaUndangan() {

    document.querySelector(".cover").style.display = "none";
    document.getElementById("undangan").style.display = "block";

    document.body.style.overflow = "auto";

    const musik = document.getElementById("musik");

    musik.play().catch(() => {
        console.log("Autoplay diblokir browser.");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ===============================
// Countdown
// ===============================

const target = new Date("August 22, 2026 08:00:00").getTime();

setInterval(function () {

    const sekarang = new Date().getTime();

    const selisih = target - sekarang;

    if (selisih <= 0) {

        document.getElementById("hari").innerHTML = 0;
        document.getElementById("jam").innerHTML = 0;
        document.getElementById("menit").innerHTML = 0;
        document.getElementById("detik").innerHTML = 0;

        return;

    }

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));

    const jam = Math.floor(
        (selisih % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const menit = Math.floor(
        (selisih % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const detik = Math.floor(
        (selisih % (1000 * 60))
        / 1000
    );

    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

},1000);

// ===============================
// Efek muncul saat scroll
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach((el)=>{

    observer.observe(el);

});

// ===============================
// Musik
// ===============================

window.addEventListener("click",()=>{

    const musik = document.getElementById("musik");

    musik.play().catch(()=>{});

},{once:true});