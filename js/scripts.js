/*****************************************************************
    Asynchronous Photo Album
    Student Starter Code

    Complete each TODO.

    Requirements:
    ✔ Use async/await
    ✔ Use fetch()
    ✔ Use try/catch
    ✔ Display only the first 25 photos
******************************************************************/

// *********************************************
// TODO #1
// Select the status element
// TODO #2
// Select the photo album container
// *********************************************
const statusDiv = document.getElementById('status');
const photoAlbum = document.getElementById('photoAlbum');

// *********************************************
// TODO #3
// Create an async function named loadPhotos()
// *********************************************
async function loadPhotos() {
    try {
        // *********************************************
        // TODO #4
        // Fetch the first 25 photos from:
        // https://jsonplaceholder.typicode.com/photos?_limit=25
        // *********************************************
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=25');

        // *********************************************
        // TODO #5
        // Verify that the response was successful.
        // If not, throw an Error.
        // *********************************************
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // *********************************************
        // TODO #6
        // Convert the response into JSON.
        // *********************************************
        const photos = await response.json();

        // *********************************************
        // TODO #7
        // Remove the loading message.
        // *********************************************
        statusDiv.textContent = '';

        // *********************************************
        // TODO #8
        // Display the photos.
        // *********************************************
        displayPhotos(photos);

    } catch(e) {
        console.error(e);
        // *********************************************
        // TODO #9
        // Display a friendly error message.
        // *********************************************
        statusDiv.textContent = 'Unable to load photos at this time. Please try again later.';
    }
}

// *********************************************
// TODO #10
// Complete this function.
// Loop through the photos.
// Create a photo card.
// Append it to the page.
// *********************************************
function displayPhotos(photos) {
    // Clear existing content in album container
    photoAlbum.innerHTML = '';

    // Loop through photos, generate cards, and append
    photos.forEach(photo => {
        const card = createPhotoCard(photo);
        photoAlbum.appendChild(card);
    });
}

// *********************************************
// TODO #11
// Complete this function.
//
// Each card should contain:
//
// - Thumbnail image
// - Title
// - Album ID
//
// Return the completed card.
// *********************************************
function createPhotoCard(photo) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Create thumbnail image replacing dead placeholder URL with Picsum
    const img = document.createElement('img');
    img.src = `https://picsum.photos/seed/${photo.id}/150/150`;
    img.alt = photo.title;

    // Create title element
    const title = document.createElement('p');
    title.textContent = photo.title;

    // Create album ID element
    const albumId = document.createElement('p');
    albumId.style.fontSize = '0.8rem';
    albumId.style.color = '#666';
    albumId.textContent = `Album ID: ${photo.albumId}`;

    // Append all elements to card container
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(albumId);

    return card;
}

// *********************************************
// TODO #12
// Start the application.
// *********************************************
loadPhotos();