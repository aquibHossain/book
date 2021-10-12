const loadData=async()=> {
   const searchText=document.getElementById("searchText");
   if(searchText.value===""){
    const result= document.getElementById("result")
    result.innerHTML=`
    <h4 class="text-center text">Please Enter Your Book Name</h4>
    `
    const displayBooks=document.getElementById("displayBooks")
    displayBooks.textContent=""
   }
   else{
    const url=`https://openlibrary.org/search.json?q=${searchText.value}`
    searchText.value="";
    const response=await fetch(url)
    const data=await response.json()
   displayData(data);
   
   }
}

const displayData=(data)=>{
  console.log(data);
    const result= document.getElementById("result")
    result.textContent=""
    const displayBooks=document.getElementById("displayBooks")
    displayBooks.textContent=""
  if (data.numFound===0) {
    result.innerHTML=`
    <h4 class="text-center text">No Result Found</h4>
    `
  }
  else{
   
    result.innerHTML=`
    <h4 class="text-center text">Result Found:${data.numFound}</h4>
    `
   
    data.docs.forEach(element => {
        const div=document.createElement("div")
         
        // if there is no cover 
        if (element.cover_i==undefined) {}
        else{
          div.innerHTML=`
        <div class="card h-100">
          <img src="https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
            <h6>${element.author_name?element.author_name:""}</h6>
            <p class="card-text">Publisher:${element.publisher} <br>
            Publish Year:${element.first_publish_year}</p>
          </div>
        </div>
        `
        div.classList.add("col")
        displayBooks.appendChild(div)
        }
       
    });
   
  }
   
   
}