document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('button').addEventListener('click',onClick,false)
    var text = document.getElementById('text').value
    chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,text)
    })

},false)