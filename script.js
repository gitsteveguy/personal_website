const gridAppender = async (parentElement, gridArray, type = "gallery") => {
  if (type == "gallery") {
    gridArray.forEach((gridDet) => {
      const grid = document.createElement("div");
      grid.setAttribute("class", "");
      const image = document.createElement("img");
      image.src = gridDet.img;
      if (Object.hasOwn(gridDet, "darkLogo")) {
        image.setAttribute("class", "cg-icon");
      }
      grid.append(image);
      const txt = document.createElement("h5");
      txt.innerText = gridDet.txt;
      grid.append(txt);
      if (gridDet.link != "") {
        grid.setAttribute("data-link", gridDet.link);
      }
      if (gridDet.btnText != "") {
        grid.setAttribute("data-btn-text", gridDet.btnText);
      }
      parentElement.append(grid);
    });
  } else if (type == "portfolio") {
    gridArray.forEach((gridDet) => {
      const portfolio_ele = document.createElement("div");
      portfolio_ele.setAttribute("class", "portfolio_element");

      const portfolio_image = document.createElement("img");
      portfolio_image.src = gridDet.image;
      portfolio_ele.append(portfolio_image);

      const title = document.createElement("h2");
      title.innerText = gridDet.name;
      portfolio_ele.append(title);

      const desc = document.createElement("p");
      desc.setAttribute("class", "subtext");
      desc.innerText = gridDet.desc;
      portfolio_ele.append(desc);

      const hasWeb = Object.hasOwn(gridDet, "website");
      const hasPlayStore = Object.hasOwn(gridDet, "playstore");
      const hasAppStore = Object.hasOwn(gridDet, "appstore");

      if (hasWeb || hasPlayStore || hasAppStore) {
        const btn_container = document.createElement("div");
        btn_container.setAttribute("class", "portfolio-btns");

        if (hasPlayStore) {
          const playstore_btn = document.createElement("a");
          playstore_btn.href = gridDet.playstore;
          playstore_btn.target = "_blank";
          const playstore_img = document.createElement("img");
          playstore_img.src = "./assets/techlogos/Google Play.svg";
          playstore_btn.append(playstore_img);
          btn_container.append(playstore_btn);
        }

        if (hasWeb) {
          const web_btn = document.createElement("a");
          web_btn.href = gridDet.website;
          web_btn.setAttribute("class", "primary-btn neon-eff");
          const icon = document.createElement("span");
          icon.setAttribute("class", "material-symbols-rounded white");
          icon.innerText = "link";
          web_btn.append(icon);
          const btn_text = document.createElement("span");
          btn_text.setAttribute("class", "portfolio_weblink_text");
          btn_text.innerText = "View";
          web_btn.append(btn_text);
          btn_container.append(web_btn);
        }

        if (hasAppStore) {
          const appstore_btn = document.createElement("a");
          appstore_btn.href = gridDet.appstore;
          appstore_btn.target = "_blank";
          const appstore_img = document.createElement("img");
          appstore_img.src = "./assets/techlogos/App Store.svg";
          appstore_btn.append(appstore_img);
          btn_container.append(appstore_btn);
        }
        portfolio_ele.append(btn_container);
      }
      parentElement.append(portfolio_ele);
    });
  }
};

const portfolio = [
  {
    name: "BigCart Kerala",
    image: "./gallery/portfolio/bigcartkerala-portfolio.png",
    desc: "Hyper Local e-Commerce Platform.",
    website: "https://portfolio.stevesajanjacob.com/bigcartkerala",
  },
  {
    name: "Kerala CSC VLE",
    image: "./gallery/portfolio/Kerala-CSC-Portfolio-image.png",
    desc: "Member Management & Services Platform.",
    website: "https://portfolio.stevesajanjacob.com/keralacsc",
    playstore:
      "https://play.google.com/store/apps/details?id=com.keralacsc.twa",
  },
  {
    name: "UPM Technical Services",
    image: "./gallery/portfolio/upmtechservices-portfolio.png",
    desc: "Handyman Services Platform.",
    website: "https://portfolio.stevesajanjacob.com/upmservices/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.upmtechservices.twa",
    appstore: "https://apps.apple.com/us/app/upm-tech-services/id6670204211",
  },
  {
    name: "e-Sahai",
    image: "./gallery/portfolio/esahai_portfolio.png",
    desc: "Handyman Services Platform.",
    website: "https://portfolio.stevesajanjacob.com/esahai",
  },
  {
    name: "BigCart Abu Dhabi",
    image: "./gallery/portfolio/Bigcart-Abudhabi-portfolio.png",
    desc: "Hyper Local e-Commerce Platform.",
    website: "https://portfolio.stevesajanjacob.com/bigcartabudhabi/",
    playstore:
      "https://play.google.com/store/apps/details?id=com.bigcartabudhabi.twa",
  },
  {
    name: "African Digital Business Summit",
    image: "./gallery/portfolio/ADBS-Portfolio-image.png",
    desc: "Event Management Platform.",
    website: "https://portfolio.stevesajanjacob.com/adbs/",
  },
  {
    name: "Ezimart Qatar",
    image: "./gallery/portfolio/ezimartonline-portfolio.png",
    desc: "Multivendor e-Commerce Platform.",
    website: "https://portfolio.stevesajanjacob.com/ezimart/",
  },
  {
    name: "Fishbar",
    image: "./gallery/portfolio/fishbar-portfolio.png",
    desc: "Delivery Tech e-Commerce Platform.",
    website: "https://portfolio.stevesajanjacob.com/fishbar/",
    playstore: "https://play.google.com/store/apps/details?id=in.fishbar.twa",
    appstore: "https://apps.apple.com/us/app/fish-bar/id1618020502",
  },
  {
    name: "Matsyafed Freshmeen",
    image: "./gallery/portfolio/matsyafed-freshmeen.png",
    desc: "Delivery Tech e-Commerce Platform.",
    website: "https://matsyafedfreshmeen.com/",
  },
  {
    name: "Venad Farms",
    image: "./gallery/portfolio/venad-farms-portfolio.png",
    desc: "Delivery Tech e-Commerce Platform.",
    website: "https://portfolio.stevesajanjacob.com/venadfarms/",
    playstore:
      "https://play.google.com/store/apps/details?id=in.venadfarms.twa",
  },
  {
    name: "Pinkshopz",
    image: "./gallery/portfolio/pinkshopz-portfolio.png",
    desc: "B2B2C Platform.",
    website: "https://portfolio.stevesajanjacob.com/pinkshopz/",
  },
  {
    name: "IronBoy",
    image: "./gallery/portfolio/ironboy-portfolio.png",
    desc: "Services Delivery Platform.",
    website: "https://portfolio.stevesajanjacob.com/ironboy/",
    playstore: "https://play.google.com/store/apps/details?id=in.ironboy.twa",
  },
  {
    name: "The Snake Park",
    image: "./gallery/portfolio/snakepark-portfolio.png",
    desc: "Information & Services Platform.",
    website: "https://portfolio.stevesajanjacob.com/snakepark/",
  },
  {
    name: "Hug a Mug Cafe - Tanzania",
    image: "./gallery/portfolio/hugamug-portfolio.png",
    desc: "Resto-Bar Services & Booking Platform",
    website: "https://hugamug.tz/",
  },
  {
    name: "Shinshiva Ayurveda",
    image: "./gallery/portfolio/shinshiva-portfolio.png",
    desc: "Resort Management Platform",
    website: "https://portfolio.stevesajanjacob.com/shinshiva/",
  },
  {
    name: "Kavitha Family Salon",
    image: "./gallery/portfolio/kavitha-family-salon-portfolio.png",
    desc: "Information & Services Platform",
    website: "https://kavithasfamilysalon.com/",
  },
  {
    name: "Ezi Group Ltd",
    image: "./gallery/portfolio/ezigroupltd-portfolio.png",
    desc: "Business Services Platform",
    website: "https://ezigroupltd.co.tz/",
  },
];

gridAppender(portfolio_grid, portfolio, "portfolio");

const lang_frames = [
  {
    img: "./assets/techlogos/Node.js.svg",
    txt: "Node Js",
  },
  {
    img: "./assets/techlogos/React.svg",
    txt: "React",
  },
  {
    img: "./assets/techlogos/Babel.svg",
    txt: "Babel",
  },
  {
    img: "./assets/techlogos/PHP.svg",
    txt: "PHP",
  },
  {
    img: "./assets/techlogos/Bootstrap.svg",
    txt: "Bootstrap",
  },
  {
    img: "./assets/techlogos/HTML5.svg",
    txt: "HTML5",
  },
  {
    img: "./assets/techlogos/CSS3.svg",
    txt: "CSS",
  },
  {
    img: "./assets/techlogos/JavaScript.svg",
    txt: "Javascript",
  },
  {
    img: "./assets/techlogos/Python.svg",
    txt: "Python",
  },
  {
    img: "./assets/techlogos/C.svg",
    txt: "C",
  },
  {
    img: "./assets/techlogos/C++ (CPlusPlus).svg",
    txt: "C++",
  },
  {
    img: "./assets/techlogos/Java.svg",
    txt: "Java",
  },
  {
    img: "./assets/techlogos/Selenium.svg",
    txt: "Selenium",
  },
];

gridAppender(lang_frame, lang_frames);

const create_tools_det = [
  {
    img: "./assets/techlogos/Adobe Photoshop.svg",
    txt: "Photoshop",
  },
  {
    img: "./assets/techlogos/Adobe Premiere Pro.svg",
    txt: "Premier Pro",
  },
  {
    img: "./assets/techlogos/After Effects.svg",
    txt: "After Effects",
  },
  {
    img: "./assets/techlogos/Figma.svg",
    txt: "Figma",
  },
  {
    img: "./assets/techlogos/Blender.svg",
    txt: "Blender",
  },
];

gridAppender(create_tools, create_tools_det);

const platforms = [
  {
    img: "./assets/techlogos/GitHub.svg",
    txt: "Github",
    darkLogo: "true",
  },
  {
    img: "./assets/techlogos/Cloudflare.svg",
    txt: "CloudFlare",
  },
  {
    img: "./assets/techlogos/Google Cloud.svg",
    txt: "Google Cloud",
  },
  {
    img: "./assets/techlogos/Jupyter.svg",
    txt: "Jupyter",
  },
  {
    img: "./assets/techlogos/Docker.svg",
    txt: "Docker",
  },
  {
    img: "./assets/techlogos/Visual Studio Code (VS Code).svg",
    txt: "Visual Studio Code",
  },
  {
    img: "./assets/techlogos/Firebase.svg",
    txt: "Firebase",
  },
];

gridAppender(platform_grid, platforms);

// Gallery
// Print
const print_media = [
  {
    img: "./gallery/media/magazines/business_insights/business_magazine_preview.jpg",
    txt: "Business Insights Magazine Article",
    link: "./gallery/media/magazines/business_insights/BUSINESS INSIGHT - FEB 2023 - ISSUE 04-36-37.pdf",
    btnText: "View PDF",
  },
  {
    img: "./gallery/pope/times of india.jpeg",
    txt: "Times of India News Steve's Interaction with Pope Francis",
  },
  {
    img: "./gallery/pope/indian express.jpeg",
    txt: "Indian Express News Steve's Interaction with Pope Francis",
  },
  {
    img: "./gallery/media/print/i-app-dhanam-article.jpeg",
    txt: "i-app Dhanam Article",
  },
  {
    img: "./gallery/media/print/Indian-Express-article.jpeg",
    txt: "i-app Indian Express",
  },
  {
    img: "./gallery/media/print/BigCartKeralaTheHindu.png",
    txt: "BigCart Kerala on The Hindu",
    link: "https://www.thehindu.com/news/national/kerala/bigcart-kerala-to-cover-more-districts/article32095583.ece",
    btnText: "Link to Article",
  },
];

gridAppender(print_grid, print_media);

const personalities = [
  {
    img: "./gallery/personalities/shashi-tharoor.webp",
    txt: "With Hon.MP Dr Shashi Tharoor",
  },
  {
    img: "./gallery/personalities/steve-with-rajeev-chandrashekar.jpeg",
    txt: "With Hon.Ex-Minister of State Rajeev Chandrashekar",
  },
  {
    img: "./gallery/personalities/steve-with-Ambassador-T.P-Srinivasan.jpeg",
    txt: "With Hon. Ex-Ambassador Dr.T.P Sreenivasan",
  },
  {
    img: "./gallery/personalities/steve-with-royal-family.jpg",
    txt: "With Royal Famiy of Trivandrum",
  },
  {
    img: "./gallery/personalities/hybi-eden.webp",
    txt: "With Hon.MP Hybi Eden",
  },
  {
    img: "./gallery/personalities/pj-joseph.webp",
    txt: "With Hon.Ex-Minister P.J Joseph",
  },
  {
    img: "./gallery/personalities/Prashant-Kumar-Mishra.webp",
    txt: "With Hon. Collector Prashant Kumar Mishra",
  },
  {
    img: "./gallery/personalities/worldline.webp",
    txt: "Strategic Alliance Partnership with ATOS Worldline",
  },
  {
    img: "./gallery/personalities/atom.webp",
    txt: "Strategic Alliance Partnership with ATOM",
  },
];

gridAppender(personalities_grid, personalities);

const certificates = [
  {
    img: "./gallery/certificates/IBM Generative AI Applications.jpg",
    txt: "IBM Certified in Generative AI: Applications",
  },
  {
    img: "./gallery/certificates/IBM Generative AI Prompt Engineering Basics.jpg",
    txt: "IBM Certified in Generative AI: Prompt Engineering Basics",
  },
  {
    img: "./gallery/certificates/IBM Intro to AI.jpg",
    txt: "IBM Certified in Introduction to Artificial Intelligence",
  },
  {
    img: "./gallery/certificates/IBM Intro to SE .jpg",
    txt: "IBM Certified in Introduction to Software Engineering",
  },
  {
    img: "./gallery/certificates/IBM - HTML CSS & Javascript.jpg",
    txt: "IBM Certified in Introduction to HTML, CSS & JavaScript",
  },
  {
    img: "./gallery/certificates/Googles-digital-marketing-certificate-of-Steve.jpg",
    txt: "Google Digital Marketing Expert",
  },
  {
    img: "./gallery/certificates/Google Advanced Analytics Steve.jpg",
    txt: "Google Advanced Analytics",
  },
  {
    img: "./gallery/certificates/Steve-Sajan-Jacob-AWS-Solutions-Architect-Certificate.jpg",
    txt: "AWS Solutions Architect",
  },
  {
    img: "./gallery/certificates/Google Coursera Python Certificate -Steve.jpg",
    txt: "Google Python Certified",
  },
  {
    img: "./gallery/certificates/Steve-Information-System.jpg",
    txt: "Information Systems",
  },
  {
    img: "./gallery/certificates/Steve-Cyber-Piracy.jpg",
    txt: "Cyber Piracy",
  },
  {
    img: "./gallery/certificates/Steve-Cyber-Law.jpg",
    txt: "Cyber Law",
  },
];

gridAppender(certifcate_grid, certificates);

const sessions = [
  {
    img: "./gallery/sessions/Savinova Lecture.jpeg",
    txt: "Talk on Roadmap to Young Technopreneur",
  },
  {
    img: "./gallery/sessions/Replit.jpeg",
    txt: "Workshop on Online & AI Based IDEs",
  },
  {
    img: "./gallery/sessions/Quantum-Computing.jpeg",
    txt: "Talk on Quantum Computing for Computer Society of India",
  },
  {
    img: "./gallery/sessions/Business Conference.jpeg",
    txt: "Talk on AI Integration in Banking Services at Banking Conclave",
  },
];

gridAppender(sessions_grid, sessions);

const gallery_images = document.querySelectorAll(
  ".gallery-grid>div:not(.media_element,.portfolio_element)"
);
gallery_images.forEach((image_ele) => {
  image_ele.addEventListener("click", (e) => {
    image_viewer_dialog.showModal();
    body.classList.add("modal-open");
    image_viewer_header_text.innerText =
      image_ele.querySelector("h5").innerText;
    image_viewer_image.src = image_ele.querySelector("img").src;
    if (image_ele.dataset.link != "undefined") {
      image_viewer_desc_btn.href = image_ele.dataset.link;
      image_viewer_desc_btn.style = "display:block;";
      image_viewer_desc_btn.innerText = image_ele.dataset.btnText;
    } else {
      image_viewer_desc_btn.style = "display:none;";
    }
  });
});

function close_popup(e) {
  body.classList.remove("modal-open");
  e.parentElement.parentElement.parentElement.close();
}

//  Theme
const root = document.querySelector(":root");
var theme = window.localStorage.getItem("theme");

if (theme === null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    window.localStorage.setItem("theme", "dark");
    theme = "dark";
  } else {
    window.localStorage.setItem("theme", "light");
    theme = "light";
  }
}
if (theme !== null) {
  root.style.setProperty("color-scheme", theme);
  themetoggler.innerText = theme + "_mode";
  if (theme === "dark") {
    body.classList.add("darkbg");
  } else {
    body.classList.remove("darkbg");
  }
}

const toggletheme = () => {
  if (theme === null) {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      theme = "dark";
      window.localStorage.setItem("theme", "dark");
      body.classList.add("darkbg");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "light";
      window.localStorage.setItem("theme", "light");
      body.classList.remove("darkbg");
    }
  } else if (theme !== null) {
    if (theme === "light") {
      theme = "dark";
      window.localStorage.setItem("theme", "dark");
      body.classList.add("darkbg");
    } else if (theme === "dark") {
      theme = "light";
      window.localStorage.setItem("theme", "light");
      body.classList.remove("darkbg");
    }
  }
  themetoggler.innerText = theme + "_mode";
  root.style.setProperty("color-scheme", theme);
};

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu-link");
window.onscroll = () => {
  var current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.href.includes(current)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};
