var budgetController = (function(){

 var Expense = function(id,description,value){
     this.id =id;
     this.description = description;
     this.value = value;
      
 };
 var Income = function(id,description,value){
    this.id =id;
    this.description = description;
    this.value = value;
     
};
    var data ={
        allItems: {
            exp:[],
            inc:[]
        },

    totals:{
        exp:0,
        inc: 0
    }};

    return {
        addItem: function(type,des,val){
            var newItem,ID;
            //create new ID
            if(data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length -1].id +1;
            }
            else
            {
                ID = 0;
            }
            //create new item based on 'inc' or 'exp'
            if (type === 'exp'){
            newItem = new Expense(ID,des,val);
            }
            else if (type === 'inc'){
                newItem = new Income(ID,des,val);

            }
            data.allItems[type].push[newItem];
            return newItem;
        },
        testing:function(){
            console.log(data);
        }
    };

})();

var UIController =(function(){
    var DOMStrings = {
        inputTypes: '.add__type',
        inputDescription:'.add__description',
        inputValue:'.add__value',
        inputButton:'.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list'
    }
    return{
        getinput: function(){
            return{
            type: document.querySelector(DOMStrings.inputTypes).value, // will return inc or dec
            discription: document.querySelector(DOMStrings.inputDescription).value,
            value: document.querySelector(DOMStrings.inputValue).value
        };
    },

            addListITem: function(obj1, type){
                    //carete HTML string with placeholder text
                    if (type === 'inc'){
                    element  = DOMStrings.incomeContainer;
                    html ='<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div> </div>';
                    }
                    else if (type === 'exp')
                    {
                        element  = DOMStrings.expensesContainer;

                    html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                    }
                    //Replace placeholders with actual value
                        newHTML = html.replace('%id%',obj1.id);
                        newHTML = newHTML.replace('%description%',obj.description);
                        newHTML = newHTML.replace('%value%',obj.value);
                        document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
                //insert HTML into DOM

                        },
        getDomString : function() {
            return DOMStrings;
        }
    };
})();


var controller =(function(budgerCtrl,UICtrl){
    var setupEventListenrs = function(){
        var DOM = UIController.getDomString();

        document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(event){
    
            if(event.keyCode === 13 || event.which ===13){
                ctrlAddItem();
            }
        });
    };
    var ctrlAddItem = function() {
        var input,newItem
        //1. Get the field input data
        input = UIController.getinput();
            console.log(input);


        //2.   Add item to budget controller
        newItem =  budgerCtrl.addItem(input.type,input.discription,input.value);
        //3. Add item to UI
        UICtrl.addListITem(newItem,input.type);
        //4. Calculate Budget

        // 5. Display   the budget on UI
        console.log('It is working ')
    }
//code
   return {
       init: function(){
           console.log('Application has started.');
           setupEventListenrs();
       }
   }

})(budgetController,UIController);
controller.init();