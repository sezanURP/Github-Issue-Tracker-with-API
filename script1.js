

// main page logic starts

const loadIssues = () => {
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((response) => response.json())
    .then((data) => {
      displayIssues(data.data);
    });
};



// loadIssues();

const displayIssues = (issues) => {
  const issuesContainer = document.getElementById("issues_Container");
  issuesContainer.innerHTML = ""; // Clear previous content

  issues.forEach((issue) => {
    const issueElement = document.createElement("div");

    issueElement.innerHTML = `<div
          class="issue-card border-t-4 border-green-500 p-4 rounded-lg shadow-lg"
        >
          <div class="flex justify-between items-center">
            <span><i class="fa-regular text-green-600 fa-circle-dot"></i></span>
            <span class="p-1 rounded-full font-medium bg-red-300">${issue.priority}</span>
          </div>
          <div>
            <h3 class="text-xl font-bold mt-4">${issue.title}</h3>
            <p class="text-gray-600 text-sm mt-2">
              ${issue.description}
            </p>

            <div class="flex gap-3 mt-4">
              <span
                class="flex items-center gap-1 border border-red-500 text-red-500 bg-red-200 px-3 py-1 rounded-full text-sm "
              >
                <i class="fa-solid fa-bug"></i> BUG
              </span>

              <span
                class="flex items-center gap-1 border border-yellow-400 text-yellow-600 bg-yellow-200 px-3 py-1 rounded-full  text-sm"
              >
                <i class="fa-regular fa-circle-question"></i> HELP WANTED
              </span>
            </div>

            <div class="bg-gray-50 px-5 py-3 text-gray-500 text-sm border-t mt-5">
              <p>#${issue.id} by ${issue.author}</p>
              <p>1/15/2024</p>
            </div>


          </div>
        </div>`;
    issuesContainer.append(issueElement);
  });
};

// loadIssues();

// issue count logic

const allIssuesarray = [];

const allIssues= () => {
  url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    allIssuesarray.push(...data.data);
  });
};

allIssues();

const openTab = [];


const openIssues = () => {
  url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const oIssues = data.data;
      const openIssues = oIssues.filter((issue) => issue.status === "open");
      issueCount.innerText = `${openIssues.length} Issues`;
      openTab.push(...openIssues);
    });
 
};
openIssues();

const closedTab = [];
// console.log(closedTab);

const closedIssues = () => {
  url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cIssues = data.data;
      const closedIssues = cIssues.filter((issue) => issue.status === "closed");
      issueCount.innerText = `${closedIssues.length} Issues`;
      closedTab.push(...closedIssues);
    });
};

closedIssues();








// tab btn logic
const allBtn = document.getElementById("all-btn");
const openBtn = document.getElementById("open-btn");
const closedBtn = document.getElementById("closed-btn");

const issueCount = document.getElementById("issue_count");


function toggleStyle(id) {
  const buttons = [allBtn, openBtn, closedBtn];


  buttons.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("bg-blue-500", "text-white");
    } else {
      btn.classList.remove("bg-blue-500", "text-white");
    }
  });

  if (id === "all-btn") {
    
    
    tabBtn("all");
  } else if (id === "open-btn") {
   
    tabBtn("open");
  } else if (id === "closed-btn") {
  
    tabBtn("closed");
  }


}

//  tab logic
const tabBtn = (activeTab) => {
  if (activeTab === "all") {
  

    issueCount.innerText = `${allIssuesarray.length} Issues`;
    displayIssues(allIssuesarray);
    
  } else if (activeTab === "open") {
    
    issueCount.innerText = `${openTab.length} Issues`;
    displayIssues(openTab);
  } else if (activeTab === "closed") {
    
    issueCount.innerText = `${closedTab.length} Issues`;
    displayIssues(closedTab);
  }
};






// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
