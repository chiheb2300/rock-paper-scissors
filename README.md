# rock-paper-scissors
This is a rock paper scissors game made using very simple HTML (just some buttons) and JS.

How does the script work?

The "computer" makes a choice according to the result of the function: Math.floor(Math.random() * 3 + 1);
To every result, which could be either 1, 2 or 3, matches a choice (1 => rock; 2 => paper; 3 => scissors).
This could be done just by using the Math.Random function, an example of this way would have been:
```
<< SCRIPT BELOW >>
var computerChoice;
if(Math.random() < 0.33){
    computerChoice = "rock";
    }
    else if(Math.random() < 0.33){
    computerChoice = "paper";
    }
    else{
    computerChoice = "scissors";
    };
<< END SCRIPT >>
```

The user chooses by pressing a button on the page; 
