// let queryString = new URLSearchParams(window.location.href.split("?")[1])
const singlePost1 = document.querySelector(".single-post")
var slug = queryString.get("slug")
var posts = []

    const getPosts = async () =>{
        let res = await fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`)
        let data = await res.json() 
        var info = data.data
        posts.push(info)
    }
  
    await getPosts()
        const dispalySinglePost = (data)=>{
        singlePost1.innerHTML =""
        data.map(item => {
        singlePost1.innerHTML +=`
        <img src="${item.thumbnail}"alt="${item.slug}">

        <div class="info-box">
            <h3>${item.title}</h3>
            <p>${item.excerpt}</p>
                <div class="post-info-views-data-tags">
                    <div class="views"><span class="material-symbols-outlined">visibility</span><label for="views">${item.views}</label> </div>
                    <div class="tags"><span class="material-symbols-outlined">sell</span><label for="tags">${item.tags}</label></div>
                    <div class="date"><span class="material-symbols-outlined">calendar_month</span><label for="date">${item.date}</label></div>
                </div>
        </div>
        `
    })
}


   dispalySinglePost(posts)