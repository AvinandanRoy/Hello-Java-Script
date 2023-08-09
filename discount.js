/*
1 ) if ticket < 100 --------100taka
2 ) if ticket > 100  but less than 200 ------first hundred ---100 taka   rest will be 90 taka
3 ) if ticket > 200  first hundred --- 100 taka 
    101---200 -----90 taka
    200+=============== 70 taka
*/

function ticketPrice(numberOfTicket){
    if(numberOfTicket < 100){
        return numberOfTicket*100;
    }
    else if(numberOfTicket < 200 && numberOfTicket > 100){
        return (100*100)+(numberOfTicket-100)*90;
    }
    else if(numberOfTicket > 200 ){
        return (100*100)+(100* 90)+(numberOfTicket-200)*70;
    }
}
let ticket = 290 ;
let result = ticketPrice(ticket);
console.log("Your Total bill is :",result)

