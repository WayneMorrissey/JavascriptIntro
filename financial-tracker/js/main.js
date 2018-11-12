// Enter JavaScript for the exercise here...

window.onload = function()
{
    var form = document.querySelector("form");
    var fields = form.querySelectorAll(".frm-control");
    var messageElm = form.querySelector(".error");
    var table = document.querySelector(".transactions");
    var debitTotalElm = table.querySelector(".debits");
    var creditTotalElm = table.querySelector(".credits");
    var messages = [];

    form.onsubmit = function(evt)
    {
        evt.preventDefault();
        messages = [];
        setMessages();

        var valid;
        valid = validateItems(fields);
        if(valid)
        {
            var row,
                description,
                descriptionText,
                type,
                typeText,
                currency,
                currencyText,
                btn,
                btnIcon;

            var rowclass = form.elements.type.value,
                currencyClass = "amount",
                btnClass = "tools",
                iconClass = "delete fa fa-trash-o";

            row = document.createElement("tr");
            row.setAttribute("class", rowclass);

            description = document.createElement("td");
            descriptionText = document.createTextNode(form.elements.description.value);

            type = document.createElement("td");
            typeText = document.createTextNode(form.elements.type.value);

            currency = document.createElement("td");
            currency.setAttribute("class", currencyClass);
            currencyText = document.createTextNode(`$${parseFloat(form.elements.currency.value).toFixed(2)}`);

            btn = document.createElement("td");
            btn.setAttribute("class", btnClass);

            btnIcon = document.createElement("i");
            btnIcon.setAttribute("class", iconClass);

            description.appendChild(descriptionText);
            type.appendChild(typeText);
            currency.appendChild(currencyText);
            btn.appendChild(btnIcon);
            row.appendChild(description);
            row.appendChild(type);
            row.appendChild(currency);
            row.appendChild(btn);
            table.appendChild(row);

            btn.addEventListener("click", deleteItem);

            calculateTotals();
        }
        else
        {
            setMessages();
        }
    }

    function validateItems(fields)
    {
        var valid = true;
        fields.forEach(function(field)
        {
            switch(field.name)
            {
                case "type":
                    if(field.value === "")
                    {
                        messages.push("You must select a type");
                        valid = false;
                    }
                    break;
                case "currency":
                    if(field.value < 0)
                    {
                        messages.push("Currency cannot be a negative number");
                        valid = false;
                    }
                    break;
                default:
                    break;
            }
        })
        return valid;
        
    }

    function setMessages()
    {
        messageElm.childNodes.forEach(function(node)
        {
            messageElm.removeChild(node);
        })

        messages.forEach(function(text)
        {
            var message = document.createElement("p");
            var messageText = document.createTextNode(text);
            message.appendChild(messageText);
            messageElm.appendChild(message);
        })
    }

    function deleteItem(evt)
    {
        var result = confirm("Are you sure you want to delete this transaction?");
        if(result)
        {
            table.removeChild(evt.currentTarget.parentElement);
            calculateTotals();
        }
    }

    function calculateTotals()
    {
        var debitTotal = 0;
        var creditTotal = 0;
        var rows = table.querySelectorAll("tr");
        rows.forEach(function(row)
        {
            if(row.classList.contains("debit"))
            {
                debitTotal += parseFloat(row.children[2].textContent.substring(1));
            }
            else if(row.classList.contains("credit"))
            {
                creditTotal += parseFloat(row.children[2].textContent.substring(1));
            }
        })
        debitTotalElm.removeChild(debitTotalElm.firstChild);
        creditTotalElm.removeChild(creditTotalElm.firstChild);
        var debitText = document.createTextNode(`$${debitTotal.toFixed(2)}`);
        var creditText = document.createTextNode(`$${creditTotal.toFixed(2)}`);
        debitTotalElm.appendChild(debitText);
        creditTotalElm.appendChild(creditText);
    }
}