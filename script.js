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
