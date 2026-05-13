// Loyihalar bazasi
const projectsData = {
    1: {
        title: "Counter",
        desc: "Malumot",
        link: "https://counter-190310.netlify.app/",
        img: "photo_2026-05-13_15-24-34.jpg"
    },
    2: {
        title: "Royhat",
        desc: "Malumot",
        link: "https://royhat-190310.netlify.app/",
        img: "photo_2026-05-13_16-18-29.jpg"
    },
    3: {
        title: "Raqamni top",
        desc: "Malumot",
        link: "https://raqam-top-190310.netlify.app/",
        img: "photo_2026-05-13_16-23-28.jpg"
    },
    4: {
        title: "Shajara",
        desc: "Malumot",
        link: "https://shajara-2-190310.netlify.app/",
        img: "photo_2026-05-13_16-27-48.jpg"
    }
};

function openProject(id) {
    const project = projectsData[id];
    const content = document.getElementById('detailsContent');
    
    content.innerHTML = 
        `<img src="${project.img}" style="width:100%; border-radius:8px; margin-top:20px;">
        <h2 style="margin:20px 0;">${project.title}</h2>
        <p style="color:#aaa; line-height:1.6;">${project.desc}</p>
        <a href="${project.link}" target="_blank" style="display:inline-block; margin-top:20px; color:#6a3bc2; font-weight:bold;">SAYTGA O'TISH</a>`
    ;
    
    document.getElementById('detailsSidebar').classList.add('open');
}

function closeProject() {
    document.getElementById('detailsSidebar').classList.remove('open');
}