var current_window = chrome.app.window.current();
//app控件
document.getElementById('minimize').onclick = function(){
    current_window.minimize();
}
document.getElementById('maximize').onclick = function(){
    current_window.maximize();
    this.style.display = 'none';
    document.getElementById('restore').style.display = 'block';
}
document.getElementById('restore').onclick = function(){
    current_window.restore();
    this.style.display = 'none';
    document.getElementById('maximize').style.display = 'block';
}

document.getElementById('close').onclick = function(){
    current_window.close();
}