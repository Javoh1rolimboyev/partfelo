// Loyihalar bazasi
const projectsData = {
    1: {
        title: "Counter",
        desc: "Malumot",
        link: "https://counter-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/counter",
        img: "photo_2026-05-13_15-24-34.jpg"
    },
    2: {
        title: "Royhat",
        desc: "Malumot",
        link: "https://royhat-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/royhat",
        img: "photo_2026-05-13_16-18-29.jpg"
    },
    3: {
        title: "Raqamni top",
        desc: "Malumot",
        link: "https://raqam-top-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/raqam-top",
        img: "photo_2026-05-13_16-23-28.jpg"
    },
    4: {
        title: "Shajara",
        desc: "Malumot",
        link: "https://shajara-2-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/shajara-2",
        img: "photo_2026-05-13_16-27-48.jpg"
    },
     5: {
        title: "Isiqlik olchash",
        desc: "Malumot",
        link: "https://isiqlik-olchash.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/isiqlik-olchash",
        img: "photo_2026-05-12_19-23-03.jpg"
    },
    6: {
        title: "Kalkulyator",
        desc: "Malumot",
        link: "https://kalkulyator-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/kalkulyator",
        img: "photo_2026-05-12_18-44-03.jpg"
    },
    7: {
        title: "Lampa",
        desc: "Malumot",
        link: "https://lampa-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/lampa",
        img: "photo_2026-05-12_18-47-21.jpg"
    },
    8: {
        title: "Login",
        desc: "Malumot",
        link: "https://login-page-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/login-page",
        img: "photo_2026-05-12_19-25-36.jpg"
    },
     9: {
        title: "Teskari soz",
        desc: "Malumot",
        link: "https://teskari-soz-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/teskari-soz",
        img: "photo_2026-05-12_19-26-22.jpg"
    },
     10: {
        title: "Oila shajara",
        desc: "Malumot",
        link: "https://oila-shajarasi.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/oila.shajarasi",
        img: "photo_2026-05-12_19-28-01.jpg"
    },
     11: {
        title: "Test",
        desc: "Malumot",
        link: "https://test-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/test",
        img: "photo_2026-05-12_19-29-11.jpg"
    },
     12: {
        title: "Ism familya",
        desc: "Malumot",
        link: "https://ism-familya-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/ism-familya",
        img: "photo_2026-05-12_19-30-09.jpg"
    },
     13: {
        title: "Tugilgan kun",
        desc: "Malumot",
        link: "https://tugilgan-kun-190310.netlify.app/",
        link1: "https://github.com/Javoh1rolimboyev/tuglgan-kun",
        img: "photo_2026-05-12_19-30-50.jpg"
    }
};

function openProject(id) {
    const project = projectsData[id];
    const content = document.getElementById('detailsContent');
    
    content.innerHTML = 
        `<img src="${project.img}" style="width:100%; border-radius:8px; margin-top:20px;">
        <h2 style="margin:20px 0;">${project.title}</h2>
        <p style="color:#aaa; line-height:1.6;">${project.desc}</p>
        <a href="${project.link}" target="_blank" style="display:inline-block; margin-top:20px; color:#6a3bc2; font-weight:bold;">SAYTGA O'TISH</a>
        <a href="${project.link1}" target="_blank" style="display:block; margin-top:20px; color:#6a3bc2; font-weight:bold;"> KODNI KORISH</a>`
    ;
    
    document.getElementById('detailsSidebar').classList.add('open');
}

function closeProject() {
    document.getElementById('detailsSidebar').classList.remove('open');
}