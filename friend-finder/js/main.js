// Your code here...
window.onload = function()
{
    var xhr = new XMLHttpRequest();
    var friendMenu = document.querySelector(".friends")
    var friendsButton = friendMenu.firstChild;
    var contentDiv = this.document.querySelector(".content");
    var friends;
    var friend;

    friendsButton.onclick = friendsOnClick;

    function friendsOnClick(evt)
    {
        friendMenu.classList.add("pure-menu-selected");

        xhr.onload = xhrFriendsOnLoad;
        xhr.open('GET', '/friends/friends.json', true);
        xhr.send(null);
    }

    function xhrFriendsOnLoad()
    {
        if(xhr.status == 200)
        {
            friends = JSON.parse(xhr.responseText);
            friends.sort(function(a,b)
            {
                var x = a.firstName.toLowerCase();
                var y = b.firstName.toLowerCase();
                if(x < y) {return -1;}
                if(x > y) {return 1;}
                return 0;
            })

            GenerateFriendList();
        }
        else
        {
            console.log(xhr.status);
        }
    }

    function GenerateFriendList()
    {
        while(contentDiv.firstChild)
        {
            contentDiv.removeChild(contentDiv.firstChild);
        }

        var menuDiv;
        var friendsSpan;
        var friendsSpanText;
        var menuList;

        var menuDivClass = "pure-menu custom-restricted-width";
        var friendsSpanClass = "pure-menu-heading";
        var friendsSpanTextContent = "Friends";
        var menuListClass = "pure-menu-list";
        var listItemClass = "pure-menu-item";
        var hrefLink = "#";
        var linkClass = "pure-menu-link";

        menuDiv = document.createElement("div");
        menuDiv.className = menuDivClass;

        friendsSpan = document.createElement("span");
        friendsSpan.className = friendsSpanClass;

        friendsSpanText = document.createTextNode(friendsSpanTextContent);

        menuList = document.createElement("ul");
        menuList.className = menuListClass;

        friends.forEach(function(item)
        {
            var listItem;
            var friendLink;
            var friendLinkText;
            var dataid = item.id;
            var friendLinkTextContent = `${item.firstName} ${item.lastName}`;

            listItem = document.createElement("li");
            listItem.className = listItemClass;
            friendLink = document.createElement("a");
            friendLink.setAttribute("href", hrefLink);
            friendLink.className = linkClass;
            friendLink.setAttribute("data-id", dataid);
            friendLinkText = document.createTextNode(friendLinkTextContent);
            
            friendLink.onclick = individualFriendOnClick;

            friendLink.appendChild(friendLinkText);
            listItem.appendChild(friendLink);
            menuList.appendChild(listItem);
        });
        
        friendsSpan.appendChild(friendsSpanText);
        menuDiv.appendChild(friendsSpan);
        menuDiv.appendChild(menuList);
        contentDiv.appendChild(menuDiv);
    }

    function individualFriendOnClick(evt)
    {
        var id = evt.currentTarget.dataset.id;
        xhr.onload = xhrIndividualFriendsOnLoad;
        xhr.open('GET', `/friends/${id}.json`, true);
        xhr.send(null);
    }

    function xhrIndividualFriendsOnLoad()
    {
        if(xhr.status == 200)
        {
            friend = JSON.parse(xhr.responseText);
            GenerateFriendPage();
        }
        else
        {
            console.log(xhr.status);
        }
    }

    function GenerateFriendPage()
    {
        while(contentDiv.firstChild)
        {
            contentDiv.removeChild(contentDiv.firstChild);
        }

        var friendDiv;
        var identityDiv;
        var bioP;
        var bioPText;
        var friendImg;
        var nameH2;
        var nameH2Text;
        var infoUl;
        var emailLi;
        var emailText;
        var emailLabelSpan;
        var emailLabelText;
        var hometownLi;
        var hometownText;
        var hometownLabelSpan;
        var hometownLabelText;

        var friendDivClass = "friend";
        var identityDivClass = "identity";
        var friendImgClass = "photo";
        var friendImgSrc = `img/${friend.avatar}`;
        var nameH2Class = "name";
        var emailLabelSpanClass = "label";
        var hometownLabelSpanClass = "label";
        var bioPClass = "bio";
        
        var nameH2TextContent = `${friend.firstName} ${friend.lastName}`;
        var emailTextContent = ` ${friend.email}`;
        var emailLabelTextContent = "email:";
        var hometownTextContent = ` ${friend.hometown}`;
        var hometownLabelTextContent = "hometown:";
        var bioPTextContent = friend.bio ? friend.bio : "bio";
        
        
        friendDiv = document.createElement("div");
        friendDiv.className = friendDivClass;

        identityDiv = document.createElement("div");
        identityDiv.className = identityDivClass;

        bioP = document.createElement("p");
        bioP.className = bioPClass;
        bioPText = document.createTextNode(bioPTextContent);

        friendImg = document.createElement("img");
        friendImg.className = friendImgClass;
        friendImg.setAttribute("src", friendImgSrc);

        nameH2 = document.createElement("h2");
        nameH2.className = nameH2Class;
        nameH2Text = document.createTextNode(nameH2TextContent);

        infoUl = document.createElement("ul");

        emailLi = document.createElement("li");
        emailText = document.createTextNode(emailTextContent);
        emailLabelSpan = document.createElement("span");
        emailLabelSpan.className = emailLabelSpanClass;
        emailLabelText = document.createTextNode(emailLabelTextContent);

        hometownLi = document.createElement("li");
        hometownText = document.createTextNode(hometownTextContent);
        hometownLabelSpan = document.createElement("span");
        hometownLabelSpan.className = hometownLabelSpanClass;
        hometownLabelText = document.createTextNode(hometownLabelTextContent);

        friendDiv.appendChild(identityDiv);
        friendDiv.appendChild(bioP);
        identityDiv.appendChild(friendImg);
        identityDiv.appendChild(nameH2);
        identityDiv.appendChild(infoUl);
        nameH2.appendChild(nameH2Text);
        infoUl.appendChild(emailLi);
        infoUl.appendChild(hometownLi);
        emailLi.appendChild(emailLabelSpan);
        emailLi.appendChild(emailText);
        emailLabelSpan.appendChild(emailLabelText);
        hometownLi.appendChild(hometownLabelSpan);
        hometownLi.appendChild(hometownText);
        hometownLabelSpan.appendChild(hometownLabelText);
        bioP.appendChild(bioPText);

        contentDiv.appendChild(friendDiv);
    }
}