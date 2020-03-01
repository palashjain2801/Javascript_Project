var budgetController = (function(){

//code

})();

var UIController =(function(){
    var DOMStrings = {
        inputTypes: '.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputButton:'.add__btn'
    }
    return{
        getinput: function(){
            return{
            type: document.querySelector(DOMStrings.inputTypes).value, // will return inc or dec
            discription: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
        };
        },
        getDomString : function() {
            return DOMStrings;
        }
    };
})();


var controller =(function(budgerCtrl,UICtrl){
    var DOM = UIController.getDomString();
    var ctrlAddItem = function() {
        //1. Get the field input data
            var input = UIController.getinput();
            console.log(input);


        //2.   Add item to budget controller

        //3. Add item to UI

        //4. Calculate Budget

        // 5. Display the budget on UI
        console.log('It is working ')
    }
//code
    document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);
    document.addEventListener('keypress',function(event){

        if(event.keyCode === 13 || event.which ===13){
            ctrlAddItem();
        }
    });

})(budgetController,UIController);