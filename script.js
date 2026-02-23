let interviewlist = [];
let rejectedlist = [];
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
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        nojobSection.classList.remove('hidden')
        //applied.innerText = interviewFilterBtn.innerText;
        
        //renderThriving()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
        nojobSection.classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        nojobSection.classList.remove('hidden')
        //renderStruggling()
    }

}
//
   // }
//     else if (event.target.classList.contains('rejected-btn')) {
//         const parenNode = event.target.parentNode.parentNode;

//         const parentNode = event.target.parentNode.parentNode;
//         const companyName = parentNode.querySelector('.companyName').innerText
//         const positionName = parentNode.querySelector('.positionName').innerText
//         //const deleteButton = parentNode.querySelector('delete').value
//         const locationName = parentNode.querySelector('.locationName').innerText
//         const applied = parentNode.querySelector('.applied').innerText
//         const quality = parentNode.querySelector('.quality').innerText;
//         console.log(companyName,positionName,locationName,applied,quality);

//         parentNode.querySelector('.applied').innerText = 'Interviw'

//         const cardInfo = {
//             companyName,
//             positionName,
//             locationName,
//             applied: 'rejected',
//             quality
//         }

//         const rejectedExist = rejectedlist.find(item => item.companyName == cardInfo.companyName)

//         if (!rejectedExist) {
//             rejectedlist.push(cardInfo)
//         }}
// console.log(rejectedlist)
//})
