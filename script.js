const gridAppender = async (parentElement,gridArray)=>{
    gridArray.forEach((gridDet)=>{
       const grid = document.createElement('div');
       grid.setAttribute('class','neon-eff');
       const image = document.createElement('img');
       image.src=gridDet.img
       grid.append(image);
       const txt  = document.createElement('h5');
       txt.innerText = gridDet.txt;
       grid.append(txt);
       if(gridDet.link!=""){
       grid.setAttribute("data-link",gridDet.link) 
       }
       if(gridDet.btnText!=""){
        grid.setAttribute("data-btn-text",gridDet.btnText) 
        }
       parentElement.append(grid)
})
}


const lang_frames = [
    {
        img : "./assets/techlogos/Node.js.svg",
        txt : "Node Js"
    },
    {
        img : "./assets/techlogos/React.svg",
        txt : "React"
    },
    {
        img : "./assets/techlogos/Babel.svg",
        txt : "Babel"
    },
    {
        img : "./assets/techlogos/PHP.svg",
        txt : "PHP"
    },
    {
        img : "./assets/techlogos/Bootstrap.svg",
        txt : "Bootstrap"
    },
    {
        img : "./assets/techlogos/HTML5.svg",
        txt : "HTML5"
    },
    {
        img : "./assets/techlogos/CSS3.svg",
        txt : "CSS"
    },
    {
        img : "./assets/techlogos/JavaScript.svg",
        txt : "Javascript"
    },
    {
        img : "./assets/techlogos/Python.svg",
        txt : "Python"
    },
    {
        img : "./assets/techlogos/C.svg",
        txt : "C"
    },
    {
        img : "./assets/techlogos/C++ (CPlusPlus).svg",
        txt : "C++"
    },
    {
        img : "./assets/techlogos/Java.svg",
        txt : "Java"
    },
    {
        img : "./assets/techlogos/Selenium.svg",
        txt : "Selenium"
    },
]

gridAppender(lang_frame,lang_frames);

const create_tools_det = [
    {
        img : "./assets/techlogos/Adobe Photoshop.svg",
        txt : "Photoshop"
    },
    {
        img : "./assets/techlogos/Adobe Premiere Pro.svg",
        txt : "Premier Pro"
    },
    {
        img : "./assets/techlogos/After Effects.svg",
        txt : "After Effects"
    },
    {
        img : "./assets/techlogos/Figma.svg",
        txt : "Figma"
    },
    {
        img : "./assets/techlogos/Blender.svg",
        txt : "Blender"
    },
]

gridAppender(create_tools,create_tools_det);

const platforms = [
    {
        img : "./assets/techlogos/GitHub.svg",
        txt : "Github"
    },
    {
        img : "./assets/techlogos/Cloudflare.svg",
        txt : "CloudFlare"
    },
    {
        img : "./assets/techlogos/Google Cloud.svg",
        txt : "Google Cloud"
    },
    {
        img : "./assets/techlogos/Jupyter.svg",
        txt : "Jupyter"
    },
    {
        img : "./assets/techlogos/Docker.svg",
        txt : "Docker"
    },
    {
        img : "./assets/techlogos/Visual Studio Code (VS Code).svg",
        txt : "Visual Studio Code"
    },
    {
        img : "./assets/techlogos/Firebase.svg",
        txt : "Firebase"
    },
]

gridAppender(platform_grid,platforms);

// Gallery
// Print
const print_media = [
    {
        img : "./gallery/pope/times of india.jpeg",
        txt : "Times of India News Steve's Interaction with Pope Francis"
    },
    {
        img : "./gallery/pope/indian express.jpeg",
        txt : "Indian Express News Steve's Interaction with Pope Francis"
    },
    {
        img : "./gallery/media/print/i-app-dhanam-article.jpeg",
        txt : "i-app Dhanam Article"
    },
    {
        img : "./gallery/media/print/Indian-Express-article.jpeg",
        txt : "i-app Indian Express"
    },
    {
        img : "./gallery/media/print/BigCartKeralaTheHindu.png",
        txt : "BigCart Kerala on The Hindu",
        link : "https://www.thehindu.com/news/national/kerala/bigcart-kerala-to-cover-more-districts/article32095583.ece",
        btnText : "Link to Article"
    },

]

gridAppender(print_grid,print_media);

const personalities = [
    {
        img : "./gallery/personalities/shashi-tharoor.webp",
        txt : "With Hon.MP Dr Shashi Tharoor"
    },
    {
        img : "./gallery/personalities/steve-with-rajeev-chandrashekar.jpeg",
        txt : "With Hon.Ex-Minister of State Rajeev Chandrashekar"
    },
    {
        img : "./gallery/personalities/steve-with-Ambassador-T.P-Srinivasan.jpeg",
        txt : "With Hon. Ex-Ambassador Dr.T.P Sreenivasan"
    },
    {
        img : "./gallery/personalities/steve-with-royal-family.jpg",
        txt : "With Royal Famiy of Trivandrum"
    },
    {
        img : "./gallery/personalities/hybi-eden.webp",
        txt : "With Hon.MP Hybi Eden"
    },
    {
        img : "./gallery/personalities/pj-joseph.webp",
        txt : "With Hon.Ex-Minister P.J Joseph"
    },
    {
        img : "./gallery/personalities/Prashant-Kumar-Mishra.webp",
        txt : "With Hon. Collector Prashant Kumar Mishra"
    },
    {
        img : "./gallery/personalities/worldline.webp",
        txt : "Strategic Alliance Partnership with ATOS Worldline"
    },
    {
        img : "./gallery/personalities/atom.webp",
        txt : "Strategic Alliance Partnership with ATOM"
    },
]

gridAppender(personalities_grid,personalities);

const certificates = [
    {
        img: "./gallery/certificates/Googles-digital-marketing-certificate-of-Steve.jpg",
        txt: "Google Digital Marketing Expert"
    },
    {
        img: "./gallery/certificates/Google Advanced Analytics Steve.jpg",
        txt: "Google Advanced Analytics"
    },
    {
        img: "./gallery/certificates/Steve-Sajan-Jacob-AWS-Solutions-Architect-Certificate.jpg",
        txt: "AWS Solutions Architect"
    },
    {
        img: "./gallery/certificates/Google Coursera Python Certificate -Steve.jpg",
        txt: "Google Python Certified"
    },
    {
        img: "./gallery/certificates/Steve-Information-System.jpg",
        txt: "Information Systems"
    },
    {
        img: "./gallery/certificates/Steve-Cyber-Piracy.jpg",
        txt: "Cyber Piracy"
    },
    {
        img: "./gallery/certificates/Steve-Cyber-Law.jpg",
        txt: "Cyber Law"
    },
]

gridAppender(certifcate_grid,certificates);

const gallery_images =  document.querySelectorAll('.gallery-grid>div:not(.media_element)');
gallery_images.forEach((image_ele)=>{
    image_ele.addEventListener('click',(e)=>{
        image_viewer_dialog.showModal();
        body.classList.add('modal-open');
        image_viewer_header_text.innerText = image_ele.querySelector('h5').innerText;
        image_viewer_image.src = image_ele.querySelector('img').src;
        if(image_ele.dataset.link!="undefined"){
            image_viewer_desc_btn.href = image_ele.dataset.link;
            image_viewer_desc_btn.style="display:block;";
            image_viewer_desc_btn.innerText=image_ele.dataset.btnText;
        }
        else{
            image_viewer_desc_btn.style="display:none;";
        }
    })
})

function close_popup(e){
    body.classList.remove('modal-open')
    e.parentElement.parentElement.parentElement.close();
 }