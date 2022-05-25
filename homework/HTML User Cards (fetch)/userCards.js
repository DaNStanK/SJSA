fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let names = data.map((x) => x.name);
    let emails = data.map((x) => x.email.toLowerCase());
    let addresses = data.map(
      (x) =>
        (x = `Address: ${x.address.street} ${x.address.suite}, Town: ${x.address.city}, Zipcode: ${x.address.zipcode}`)
    );
    let websites = data.map((x) => (x = `www.${x.website}`));

    const body = document.body;

    const container = document.getElementById("container");

    for (let i = 0; i < names.length; i++) {
      console.log(addresses[i]);
      let userCard = document.createElement("div");

      userCard.classList = "cardBlock";

      let nameSurname = document.createElement("h1");
      nameSurname.textContent = `Name and Surname: ${names[i]}`;

      let userEmailAddress = document.createElement("p");
      userEmailAddress.textContent = `Email: ${emails[i]}`;
      
      let userWebSite = document.createElement("a")
      userWebSite.textContent = `Website: ${websites[i]}`;
      userWebSite.href = `${websites[i]}`;

      let userAddress = document.createElement("p");
      userAddress.textContent = addresses[i];

      userCard.append(nameSurname, userEmailAddress, userWebSite, userAddress);

      container.append(userCard);
    }
    body.append(container);
  });
