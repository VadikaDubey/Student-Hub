async function loadRecentNotices() { 
    const response = await fetch("/Student-Hub/backend/data/notices.json");
    const notices = await response.json();

    notices.sort(
    (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );

    const noticesContainerRecent = document.getElementById("notices-container-recents");
    const recentNotices = notices.slice(0, 1); // Get the most recent notice, can change number here

    recentNotices.forEach(notice => {
        const noticePoint = document.createElement("li");
        noticePoint.textContent = notice.name;
        noticesContainerRecent.appendChild(noticePoint);
    });

}

loadRecentNotices();