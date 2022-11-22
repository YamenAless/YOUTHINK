// const input = document.querySelector(".input")
// const sub = document.querySelector(".button")

const singlePost = document.querySelector(".single-post");
const btn = document.querySelector(".load-more");

let page = 1;
var posts = [];

const getPosts = async (pageCount) => {
  let res = await fetch(
    `https://www.wp-course.site/wp-json/youthink/posts?page=${pageCount}`
  );
  let data = await res.json();
  var info = data.data;
  posts.push(...info);
};

export const displayPosts = (data) => {
  singlePost.innerHTML = "";
  data.map((item) => {
    singlePost.innerHTML += `
      <img src="${item.thumbnail}" alt="">

        <div class="info-box">
            <h3>${item.title}</h3>
            <p>${item.excerpt}</p>
                <div class="post-info-views-data-tags">
                    <div class="views"><span class="material-symbols-outlined">visibility</span><label for="views">${item.views}</label> </div>
                    <div class="tags"><span class="material-symbols-outlined">sell</span><label for="tags">${item.tags}</label></div>
                    <div class="date"><span class="material-symbols-outlined">calendar_month</span><label for="date">${item.date}</label></div>
                </div>

        </div>
        `;
  });
};

await getPosts(page);
displayPosts(posts);

btn.addEventListener("click", async (event) => {
  if (page < 2) {
    page += 1;
    await getPosts(page);
    displayPosts(posts);
  }else if(page < 3){
    page += 1;
    await getPosts(page);
    displayPosts(posts);

  }else if(page < 4){
    page += 1;
    await getPosts(page);
    displayPosts(posts);
    btn.remove()
  }


});





// singlePost.addEventListener("click", (e) => {
//   console.log(e.composedPath() )
//  e.path.map((el) => {
//    if (el.tagName == "IMG") {window.location.href =`http://127.0.0.1:5500/singleWindow.html?slug=${el.alt}`;
//     }
//   });
// });