let websiteNameInput = document.getElementById("websiteNameInput");
let websiteURL = document.getElementById("websiteURLInput");
let webSiteInfo = [];
let currentIndex = 0;

if (localStorage.getItem("website") != null) {
  webSiteInfo = JSON.parse(localStorage.getItem("website"));
  displayWebsite();
}

// Clear Inputs

function clearForm() {
  websiteNameInput.value = "";
  websiteURL.value = "";
}
// Add Website

function addWebsite() {
  if (validateWebsiteURL() == true) {
    let website = {
      websiteName: websiteNameInput.value,
      websiteURL: websiteURL.value,
    };
    webSiteInfo.push(website);
    localStorage.setItem("website", JSON.stringify(webSiteInfo));
    console.log(webSiteInfo);
    displayWebsite();
    clearForm();
  } else {
    window.alert("Invalid URL");
  }
}

// Display Data

function displayWebsite() {
  let website = ``;
  for (i = 0; i < webSiteInfo.length; i++) {
    website += `<tr>
        <td>${i}</td>
        <td>${webSiteInfo[i].websiteName}</td>
        <td id="URL">${webSiteInfo[i].websiteURL}</td>
        
        <td><button class="btn btn-sm btn-info" onclick="websiteInfo(${i})" >Update</button></td>
        <td><button onclick="deleteWebsite(${i})"class="btn btn-sm btn-danger">Delete</button></td>
        <td><a class="btn btn-sm btn-primary" target="_blank" href="${webSiteInfo[i].websiteURL}">Visit</a></td>
        </tr>`;
  }
  document.getElementById(`tableBody`).innerHTML = website;
}

// Delete data

function deleteWebsite(deletedIndex) {
  webSiteInfo.splice(deletedIndex, 1);
  localStorage.setItem("website", JSON.stringify(webSiteInfo));
  displayWebsite();
}

// Validate websiteURL

function validateWebsiteURL() {
  let regex = /[A-Z][a-z]/;
  let regex2 = /^(ftp|http|https):(\/\/)/;
  if (
    regex.test(websiteNameInput.value) == true &&
    regex2.test(websiteURLInput.value) == true
  ) {
    return true;
  } else {
    return false;
  }
}

// Get Website Info

function websiteInfo(Index) {
  currentIndex = Index;
  let currentSite = webSiteInfo[Index];
  websiteNameInput.value = currentSite.websiteName;
  websiteURLInput.value = currentSite.websiteURL;
  addBtn.innerHTML = "Update";
}

// Update Website URL

function updateWebsite() {
  let website = {
    websiteName: websiteNameInput.value,
    websiteURL: websiteURL.value,
  };
  webSiteInfo[currentIndex] = website;
  localStorage.setItem("website", JSON.stringify(webSiteInfo));
  displayWebsite();
  clearForm();
  addBtn.innerHTML = "Submit";
}

// Submit Button

addBtn.onclick = function () {
  if (addBtn.innerHTML == "Submit") {
    addWebsite();
  } else {
    updateWebsite();
  }
};

// Search on Websites

function searchUrl(term) {
  let website = ``;
  for (i = 0; i < webSiteInfo.length; i++) {
    if (
      webSiteInfo[i].websiteURL.toLowerCase().includes(term.toLowerCase()) ==
      true
    )
      website += `<tr>
            <td>${i}</td>
            <td>${webSiteInfo[i].websiteName}</td>
            <td id="URL">${webSiteInfo[i].websiteURL}</td>

            <td><button onclick="deleteWebsite(${i})"class="btn btn-sm btn-danger">Delete</button></td>
            <td><a class="btn btn-sm btn-primary" target="_blank" href="${webSiteInfo[i].websiteURL}">Visit</a></td>
            <td><button class="btn btn-sm btn-info">Update</button></td>
            </tr>`;
  }
  document.getElementById(`tableBody`).innerHTML = website;
}
