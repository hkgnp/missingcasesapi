baseUrl = 'https://floating-forest-98452.herokuapp.com';

// Post Missing Persons
document.querySelector('#submit_btn').addEventListener('click', async () => {
  // Assign form values to variables
  let name = document.querySelector('#name').value;
  let date = document.querySelector('#date').value;
  let location = document.querySelector('#location').value;
  let details = document.querySelector('#details').value;

  // Post to db
  await axios.post(`${baseUrl}/report`, {
    name: name,
    date: date,
    location: location,
    details: details,
  });
});

// Retrieve and Delete Missing Persons
window.addEventListener('DOMContentLoaded', async () => {
  // Retrieve
  let res = await axios.get(`${baseUrl}/reports`);

  for (let p of res.data) {
    let html = `
      <div class="card mb-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" id="missingname">Name: ${p.name}</h5>
            <p class="card-text" id="missingdate">Date: ${p.date}</p>
            <p class="card-text" id="missinglocation">Location: ${p.location}</p>
            <p class="card-text" id="missingdetails">Details: ${p.details}</p>
            <p class="card-text" id="missingID">ID: ${p._id}</p>
        </div>
      </div>
    `;

    // Render
    document.querySelector('#displaycases').innerHTML += html;
  }
});

// // Function Delete
// let deletePost = async (postId) => {
//   await axios.delete(`${baseUrl}/report/${postId}`);
//   location.reload();
// };

// // Button to delete case
// document.querySelector('#delete_btn').addEventListener('click', async () => {
//   deletePost(document.querySelector('#deletecase').value);
// });

// Can also use this
document.querySelector('#delete_btn').addEventListener('click', async () => {
  let postId = document.querySelector('#deletecase').value;
  await axios.delete(`${baseUrl}/report/${postId}`);
  location.reload();
});
