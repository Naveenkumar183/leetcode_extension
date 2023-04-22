var contextList=["selection","link","image","page"];

for(i=0;i<contextList.length;i++){
    var context=contextList[i];
    var titlex="twitter toolkit:share this "+context+" on your twitter portfolio";
    chrome.contextMenus.create({title:titlex,contexts:[context],onclick:myfunction,id:context});
}


//in chrome we have selection,lnk,image,page 
function myfunction(data){
   switch(data.menuItemId){
    case 'selection':
        chrome.windows.create({url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText),type:"panel"});
        break;
    case 'link'  :
        chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl),type:"panel"});
        break;
    case 'image':
        chrome.windows.create({url:"https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl),type:"panel"});
        break;
     case 'page':
        chrome.windows.create({url:"https://twitter.com/intent/tweet?text=MyPage"}) ;
        break;
}   
}