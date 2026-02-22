console.log("js connected");
let currentStatus = 'all';
let totalcount = document.getElementById('total');
const allCardSection = document.getElementById('allCards');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');



function calculatecount(){
    totalcount.innerText =  allCardSection.children.length
}
calculatecount()

function toggleStyle(id){
    // adding white bg for all
    allFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    rejectedFilterBtn.classList.add('bg-white', 'text-black')

    // if any button has blue then remove
    allFilterBtn.classList.remove('bg-blue-400', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-400', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-400', 'text-white')
  
    const selected = document.getElementById(id)//this is the button that clicked for filter
// change the current selected button colour
    selected.classList.remove('bg-white','text-black')
    selected.classList.add('bg-blue-400','text-white')
    

}
