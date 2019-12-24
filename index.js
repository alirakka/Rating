const display = document.getElementById("display");
const displayNewText = document.getElementById("myForm");
const A = [];
let displaytext = "";

document.getElementById("btn1").addEventListener("click", e => {
  e.preventDefault();
  const movieName = document.getElementById("container1").value;
  const rating = document.querySelector('input[name="rating"]:checked').value;
  const review = document.getElementById("container").value;
  const B = {
    movieName: movieName,
    rating: rating,
    review: review
  };
  console.log(B);
  A.push(B);
  A.forEach(B => {
    displaytext =
      displaytext +
      `<tr>
        <td>${B.movieName}</td>
        <td>${B.rating}</td>
        <td>${B.review}</td>
      </tr>`;
  });
  displayNewText.innerHTML = `  <div class="display2">
                                  <p style="margin-top: 50px;">Thanks for your review</p>
                                  </div>
                                  <div>
                                  <a class="btn btn-info" onclick="displayMovieList()">Check Reviews</a>
                                  </div>
                               
                              `;
});

const displayMovieList = () => {
  document.getElementById("tableData").style.display = "block";
  displayNewText.style.display = "none";
  display.innerHTML = displaytext;
};
