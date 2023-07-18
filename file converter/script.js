var fileLink = document.getElementById('file-link');
var fileInput = document.getElementById('file-input');

fileLink.addEventListener('click', function () {
    fileInput.style.display = 'inline';
    fileInput.focus();
});

const fileConverterHeading = document.getElementById('fileConverter');
fileConverterHeading.addEventListener('click', function () {
    location.reload();
});

const textarea = document.querySelector("textarea"),
    fileNameInput = document.querySelector(".input-group input"),
    selectMenu = document.querySelector(".save select"),
    saveBtn = document.querySelector(".save-btn")

selectMenu.addEventListener("change", () => {

    let selectedOpt = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerHTML = `save As ${selectedOpt.split(" ")[0]} File`;
})


saveBtn.addEventListener("click", () => {
    // The Blob object represents a blob, which is a file-like object of immutable, raw data; they can be read as text or binary data, 
    // or converted into a ReadableStream so its methods can be used for processing the data.
    //  const blob = new Blob(blobContent, Mime-types);
    const blob = new Blob([textarea.value], {
        type: selectMenu.value
    })

    // the URL.createObjectURL() function is used to generate a URL for a Blob created from an image file    const fileYrl = URL.createObjectURL(blob)
    const fileUrl = URL.createObjectURL(blob);

    //  In web development, the <a> element is commonly used to create hyperlinks or clickable links on a webpage. By creating a new <a> element using document.createElement('a'), you can dynamically generate a link element programmatically.
    const link = document.createElement('a')

    // these lines of code set the filename, URL, and simulate a click event on a link element to initiate a file download or navigate to a specific URL.
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
    console.log(blob)
})

// saveBtn.addEventListener('click',()=>{
//   console.log(textarea.value)
// })
