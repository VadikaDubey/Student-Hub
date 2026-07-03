async function loadNotices() { 
    const response = await fetch("/Student-Hub/backend/data/notices.json");
    const notices = await response.json();

    const noticesContainer = document.getElementById("notices-container");
    notices.forEach(notice => {
        const noticeDiv = document.createElement("div");

        const noticeName = document.createElement("h2");
        noticeName.textContent = notice.name;
        noticeDiv.appendChild(noticeName);

        const noticeDescription = document.createElement("p");
        noticeDescription.textContent = notice.description;
        noticeDiv.appendChild(noticeDescription);

        const noticeEnd = document.createElement("hr");
        noticeDiv.appendChild(noticeEnd);

        noticesContainer.appendChild(noticeDiv);
    });

}

loadNotices();