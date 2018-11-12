// Enter JavaScript for the exercise here...

window.onload = function()
{
    var form = document.querySelector("form");
    var fields = form.querySelectorAll(".frm-control");
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

}