const handleContainer = async () => {
  const res = await fetch(`
   https://openapi.programming-hero.com/api/videos/categories
   `);
  const data = await res.json();
  //   console.log(data.data);
  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleCard(${
      category.category_id
    })" class="tab text-2xl gap-4 text-center text-black rounded bg-gray-300 active:bg-red-600">${
      category?.category ? category?.category : "no data found"
    }</a> 
    `;
    tabContainer.appendChild(div);
    // console.log(div);
  });
};

const handleCard = async (categoryId) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const noData = document.getElementById("no-data");
  noData.innerHTML = "";

  const res = await fetch(`
    https://openapi.programming-hero.com/api/videos/category/${categoryId}

    `);
  const data = await res.json();

  if (data.status == true) {
    data.data.forEach((category) => {
      const div = document.createElement("div");
      //   console.log(item.authors);
      // let seconds = data.data?.others?.posted_date;
      // console.log(seconds);
      // console.log(data.data?.others?.posted_date);
      div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl ">
      <div class="relative">
      <figure>
        <img class="h-52"
          src="${category?.thumbnail}"
        />
      </figure>
      <div  class="absolute right-4 bottom-4 bg-black text-white"
      >
     ${category.others?.posted_date && show(category.others?.posted_date)}
    
      </div>
      </div>
      <div class="card-body">
        <div class="card-footer flex justify-between mt-8">
            <div class="flex  justify-center text-center items-center gap-2">
              <div >
                <div class="avatar online">
                  <div class="w-14 rounded-full flex">
                      <img
                        src="${category?.authors[0]?.profile_picture}"/>
                  </div>
                </div>
              </div>
                <div>
                  <h2 class="card-title ">
                  ${category?.title.slice(0, 20)}
                  </h2>
                </div>
          </div>
        </div>
          <div class="flex justify-center gap-2">
            <h2>${category?.authors[0]?.profile_name}</h2>
            ${
              category?.authors[0].verified
                ? `<img src="./image/fi_10629607.svg" alt="">`
                : ""
            }
            
          
          </div>
                <div class="text-center">
                  <h3>Total Views: ${category?.others?.views}</h3>
               </div>
      </div>
    </div>
    
 
          `;

      cardContainer.appendChild(div);
    });
  } else {
    fun(data.status);
  }

  //   console.log(data.data);
};

const fun = (data) => {
  if (data == false) {
    const noData = document.getElementById("no-data");
    noData.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class=" w-40 ">
    <img src="./image/Icon.png" alt="">
    <h3 class=" text-3xl">Oops!! Sorry, There <br> is no content here</h3></div>
      
  `;
    noData.appendChild(div);
  }
};
// handleCard();

const show = (seconds) => {
  parseInt.seconds;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return ` ${hours} hrs ${minutes} min ago`;
};

handleCard("1000");
// console.log(show());
handleContainer();
