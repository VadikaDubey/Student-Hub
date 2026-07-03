async function loadClubs() { 
    const response = await fetch("/Student-Hub/backend/data/clubs.json");
    const clubs = await response.json();

    const clubsContainer = document.getElementById("clubs-container");
    clubs.forEach(club => {
        const clubDiv = document.createElement("div");

        const clubName = document.createElement("h2");
        clubName.textContent = club.name;
        clubDiv.appendChild(clubName);

        const clubDescription = document.createElement("p");
        clubDescription.textContent = club.description;
        clubDiv.appendChild(clubDescription);

        const clubEnd = document.createElement("hr");
        clubDiv.appendChild(clubEnd);

        clubsContainer.appendChild(clubDiv);
    });

}

loadClubs();
