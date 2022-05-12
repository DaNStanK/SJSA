const books = [
  {
    name: "Crime and punishment",
    author: "Fyodor Dostoyevsky",
    year: 1887,
    read: true,
  },
  {
    name: "Harry Potter",
    author: "J.K Rowling",
    year: 2000,
    read: false,
  },
  {
    name: "The art of war",
    author: "Sun Tzu",
    year: 200,
    read: false,
  },
  {
    name: "The Hobbit",
    author: "J.R.R Tolkien",
    year: 1910,
    read: true,
  },
];

const body = document.body;

const h1 = document.createElement("h1");
h1.textContent = "List of books:";
body.append(h1);

const button = document.createElement("button");
button.textContent = "CLICK TO SEE THE LIST!";
body.append(button);

button.onclick = function () {
  const ul = document.createElement("ul");

  for (let i = 0; i < books.length; i++) {
    let liName = document.createElement("li");
    liName.textContent = "Name: " + books[i].name;
    liName.setAttribute("class", "name");

    let ulSubb = document.createElement("ul");
    ulSubb.setAttribute("class", "ul");

    let liAuthor = document.createElement("li");
    liAuthor.textContent = "Author: " + books[i].author;


    let liYear = document.createElement("li");
    liYear.textContent = "Year: " + books[i].year;

    ulSubb.append(liAuthor, liYear);
    liName.append(ulSubb);
    ul.append(liName);
  }

  button.append(ul);
};
