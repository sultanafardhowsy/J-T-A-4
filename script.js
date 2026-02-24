let interviewlist = [];
let rejectedlist = [];
let mainsSectin = [];
let currentStatus = 'all';
let jobs = document.getElementById('job');
let totalcount = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
const allCardSection = document.getElementById('allCards');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');
const nojobSection = document.getElementById('nojob-section');








function calculatecount(){
    totalcount.innerText =  allCardSection.children.length
    jobs.innerText=allCardSection.children.length + ' jobs'
    interviewCount.innerText = interviewlist.length
    rejectedCount.innerText = rejectedlist.length
    
}
calculatecount()

function toggleStyle(id){
    currentStatus = id;  // update the currentStatus on button click

    // Set all buttons to white bg + black text
    allFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    rejectedFilterBtn.classList.add('bg-white', 'text-black')

    // Remove blue from all buttons
    allFilterBtn.classList.remove('bg-blue-400', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white')

    const selected = document.getElementById(id)
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-400','text-white')
    

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        if(interviewlist.length === 0){
            nojobSection.classList.remove('hidden');
        } else {
            nojobSection.classList.add('hidden');
        }
        renderInterview();
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        nojobSection.classList.add('hidden');
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        if(rejectedlist.length === 0){
            nojobSection.classList.remove('hidden');
        } else {
            nojobSection.classList.add('hidden');
        }
        renderRejected();
    }
    calculatecount();
}


    //delete button
const deleteButtons = document.querySelectorAll('.delete-btn');
console.log(deleteButtons)
deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        
        const divToDelete = event.target.closest('.informationDiv');
        if (divToDelete) {
            divToDelete.remove();
            totalcount.innerText = totalcount.innerText-1;
            jobs.innerText = totalcount.innerText + ' jobs';
        }
    });
});

// Then in your mainContainer event listener, add calls to toggleStyle with the current filter
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.closest('.card') || event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const positionName = parentNode.querySelector('.positionName').innerText;
        const locationName = parentNode.querySelector('.locationName').innerText;
        const quality = parentNode.querySelector('.quality').innerText;

        // Update the displayed status
        parentNode.querySelector('.applied').innerText = 'Interview';
        parentNode.querySelector('.applied').classList.remove('hidden');

        const cardInfo = {
            companyName,
            positionName,
            locationName,
            applied: 'interview',
            quality
        };

        // Add to interview if not already there
        const existsInInterview = interviewlist.find(item => item.companyName === companyName);
        if (!existsInInterview) {
            interviewlist.push(cardInfo);
        }

        // Remove from rejected
        rejectedlist = rejectedlist.filter(item => item.companyName !== companyName);

        calculatecount();
        jobs.innerText=totalcount.innerText - interviewCount.innerText-rejectedCount.innerText +' jobs of '+totalcount.innerText+' jobs';
        // Re-render current filter view
        toggleStyle(currentStatus);
    
    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.closest('.card') || event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;
        const positionName = parentNode.querySelector('.positionName').innerText;
        const locationName = parentNode.querySelector('.locationName').innerText;
        const quality = parentNode.querySelector('.quality').innerText;

        parentNode.querySelector('.applied').innerText = 'Rejected';
        parentNode.querySelector('.applied').classList.remove('hidden');

        const cardInfo = {
            companyName,
            positionName,
            locationName,
            applied: 'rejected',
            quality
        };

        const existsInRejected = rejectedlist.find(item => item.companyName === companyName);
        if (!existsInRejected) {
            rejectedlist.push(cardInfo);
        }

        interviewlist = interviewlist.filter(item => item.companyName !== companyName);

        calculatecount();
         jobs.innerText=totalcount.innerText -interviewCount.innerText- rejectedCount.innerText +' jobs of '+totalcount.innerText+' jobs';

        toggleStyle(currentStatus);
    }
});

// step 3  html file create
function renderInterview() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let interview of interviewlist) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'space-y-3 rounded-sm shadow-sm'
        div.innerHTML = `
        <!-- part 1 -->
            <div class="flex justify-between">
                <div>
                    <p class="companyName text-2x font-bold">${interview.companyName}</p>
                <p class="positionName text-gray-400">${interview.positionName}</p>  
                </div>
                   <div>
                    <Button class="delete" ><img src="./delete.png" alt="Delete"></Button>
                   </div>
            </div>
            

            <!-- part 2 -->
            <div class="gap-2">
                <p class="locationName text-gray-400">${interview.locationName}</p>
                <p class="applied bg-gray-200 w-30 text-center py-2 hidden">${interview.applied}</p>
                <p class="quality text-gray-500 py-4">${interview.quality}</p>
            </div>

             <div class="flex gap-5">
                <button class="interview-btn text-green-500 font-bold px-4 py-2 border-2 rounded-sm">INTERVIEW</button>
                <button class="rejected-btn text-red-500 font-bold px-4 py-2 border-2 rounded-sm">REJECTED</button>
             </div>
             `
             filterSection.appendChild(div);
             
             
    }}

    function renderRejected() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let reject of rejectedlist) {

        let div = document.createElement('div');
        div.className = 'space-y-3 rounded-sm shadow-sm'
        div.innerHTML = `
        <!-- part 1 -->
            <div class="flex justify-between">
                <div>
                    <p class="companyName text-2x font-bold">${reject.companyName}</p>
                <p class="positionName text-gray-400">${reject.positionName}</p>  
                </div>
                   <div>
                    <Button class="delete" ><img src="./delete.png" alt="Delete"></Button>
                   </div>
            </div>
            

            <!-- part 2 -->
            <div class="gap-2">
                <p class="locationName text-gray-400">${reject.locationName}</p>
                <p class="applied bg-gray-200 w-30 text-center py-2 hidden">${reject.applied}</p>
                <p class="quality text-gray-500 py-4">${reject.quality}</p>
            </div>

             <div class="flex gap-5">
                <button class="interview-btn text-green-500 font-bold px-4 py-2 border-2 rounded-sm">INTERVIEW</button>
                <button class="rejected-btn text-red-500 font-bold px-4 py-2 border-2 rounded-sm">REJECTED</button>
             </div>
             `
             filterSection.appendChild(div)
             
    }}



