fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => {
    console.log(data);
    const newArray = data.map((item) => {
        return `
        <div class = "flags-item">
            <img src="${item.flag}">
            <h2>${item.name}</h2>
        </div>
        `
    })

    const htmls = newArray.join('');
    const flags = document.querySelector("#flags");
    flags.innerHTML = htmls;
        
})