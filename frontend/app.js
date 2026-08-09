function updateTime(){
  const d = new Date();
  document.getElementById('time').textContent = d.toLocaleString();
}
function acknowledge(){
  document.getElementById('alerts').textContent = '0';
  alert('Alerts acknowledged for the prototype dashboard.');
}
updateTime();
setInterval(updateTime,1000);
