// Loyihalar bazasi
const projectsData = {
    1: {
        title: "HEADSHOT CYBERSPORT",
        desc: "Bu loyiha kiber-sport markazi uchun maxsus yaratilgan...",
        link: "https://example.com/project1",
        img: "photo_2026-04-06_18-20-30.jpg"
    },
    2: {
        title: "NOTIX APP",
        desc: "Eslatmalarni boshqarish uchun qulay mobil ilova dizayni...",
        link: "https://example.com/project2",
        img: "project2.jpg"
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