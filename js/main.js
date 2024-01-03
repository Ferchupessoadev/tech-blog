// header con ocultamiento inteligente.

const header = document.querySelector("header");
let currentScroll = window.scrollY;
let scrollOld = currentScroll;
document.addEventListener("scroll", () => {
    scrollOld = currentScroll;
    currentScroll = window.scrollY;
    if (currentScroll > scrollOld && currentScroll >= 128) {
        header.classList.add("toggle-header");
    } else if (scrollOld > currentScroll) {
        header.classList.remove("toggle-header");
    }
})


// fetch api de articulos 

// STRUCT HTML
// <div class="card-grid" >
//     <img src="" alt="">
//         <div class="container-data-article">
//             <p class="article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
//                 assumenda dolorum
//                 veritatis iste illo reprehenderit. Officia exercitationem quidem beatae porro?</p>
//             <p class="article-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, porro
//                 repellendus
//                 asperiores quis facere aut iusto iure cum. Commodi totam reprehenderit earum nisi impedit?
//                 Illum reiciendis, fugit labore aperiam</p>
//         </div>
//     </div>


const containerGrid = document.querySelector(".container-cards");

// function showPost(posts) {
//     for (let i = 0; i < 10; i++) {
//         containerGrid.innerHTML += `
//         <div class="card-grid relative">
//            <img src="./img/img-1.jpg" class="w-full h-52 bg-co" alt="post tech - blog">
//                <div class="container-data-article flex flex-col gap-2">
//                     <p class="article-title text-white text-[1.2em] h-[10%]">${posts[i].title}</p>
//                     <p class="article-description text-white text-[.9em] overflow-hidden h-[80%]">${posts[i].body}</p>
//                     <button class="px-4 py-2 rounded-md w-max bg-[var(--color-secondary)] h-[10%] text-center text-white">Leer más</button>
//                     </div>
//              </div>
//         `
//     }
// }

// const post = fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(posts => {
//         showPost(posts);
//     })