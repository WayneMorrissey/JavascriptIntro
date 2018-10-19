'use strict'
window.addEventListener("load", function(e){
    // const inputFields = document.getElementsByTagName('input')
    const formItems = Array.from(document.querySelectorAll('input'));
    

    const fieldData = formItems.map(function(elem, index)
    {
           console.log(elem.value)
    })

    this.document.querySelector('form').addEventListener("submit", function(e)
    {
        e.preventDefault();
        console.clear();
        console.log("start validation");

        const validatedItems = formItems.map(function(elm, index)
        {
            console.log(`\telement type: ${elm.type} \n\n`);
            let anItem;
            switch(elm.type)
            {
                case "text":
                    anItem = validateTextItems(elm, index);
                    break;
                case "number":
                    anItem = validateNumberItems(elm,  index);
                    break;
                case "tel":
                    anItem = validateTelItems(elm, index);
                    break;
                default:
                    break;
            }
            return anItem;
        })
        validatedItems.forEach(function(validObj)
        {
            if(validObj.isValid)
            {
                console.log("is valid");
                validObj.item.value = validObj.message
            }
            else
            {
                console.log("display message");
                validObj.item.value = validObj.message
            }
        })
    })

    function validateTextItems(elm, index)
    {
        console.log(`\t\tChecking...`);
        let checkingObj = 
        {
            id:index,
            message:"",
            isValid:false
        }

        if(elm.value === "")
        {
            checkingObj.isValid = false;
            checkingObj.message = "Please fill out this form."
        }
        else if(elm.value.includes(" "))
        {
            checkingObj.isValid = false;
            checkingObj.message = "A space cannot be included"
        }
        else
        {
            checkingObj.isValid = true;
        }

        return checkingObj;
    }

      
});