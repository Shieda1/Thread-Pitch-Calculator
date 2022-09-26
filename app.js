// https://www.omnicalculator.com/construction/thread-pitch

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const threadpitchRadio = document.getElementById('threadpitchRadio');
const threadlengthRadio = document.getElementById('threadlengthRadio');
const totalnumberofthreadsRadio = document.getElementById('totalnumberofthreadsRadio');

let threadpitch;
let threadlength = v1;
let totalnumberofthreads = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

threadpitchRadio.addEventListener('click', function() {
  variable1.textContent = 'Thread length';
  variable2.textContent = 'Total number of threads';
  threadlength = v1;
  totalnumberofthreads = v2;
  result.textContent = '';
});

threadlengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Thread pitch';
  variable2.textContent = 'Total number of threads';
  threadpitch = v1;
  totalnumberofthreads = v2;
  result.textContent = '';
});

totalnumberofthreadsRadio.addEventListener('click', function() {
  variable1.textContent = 'Thread pitch';
  variable2.textContent = 'Thread length';
  threadpitch = v1;
  threadlength = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(threadpitchRadio.checked)
    result.textContent = `Thread pitch = ${computethreadpitch().toFixed(2)}`;

  else if(threadlengthRadio.checked)
    result.textContent = `Thread length = ${computethreadlength().toFixed(2)}`;

  else if(totalnumberofthreadsRadio.checked)
    result.textContent = `Total number of threads = ${computetotalnumberofthreads().toFixed(2)}`;
})

// calculation

function computethreadpitch() {
  return Number(threadlength.value) / Number(totalnumberofthreads.value);
}

function computethreadlength() {
  return Number(threadpitch.value) * Number(totalnumberofthreads.value);
}

function computetotalnumberofthreads() {
  return Number(threadlength.value) / Number(threadpitch.value);
}