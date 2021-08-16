//
//File: Everything.js 
//GUI Assignment: The javascript file for scrabble game.
//Parth Patel, UMass Lowell Computer Science, parth_patel8@student.uml.edu
//Copyright (c) 2021 by Parth Patel. All rights reserved. May be freely copied or excerpted for educational purposes with credit to the author.
//updated by PP on August 15, 2021 at 1:20PM.

//The above template/document was created by: Wenjin Zhou, UMass Lowell Computer Science, wzhou@cs.uml.edu
//Copyright (c) 2021 by Wenjin.

//Declaring possible varriables needed in here
var bestScore = 0; 
var Arrayofletters = [];


// Tiles holding code taken from Mrs.Hines file.
// Updated the File to use it with images.
// Realized could have used different file lol

var ScrabbleTiles = 
    [
        {"letter":"A", "value" : 1,  "amount" : 9,  "image":"Scrabble_Tiles/Scrabble_Tile_A_.jpg"},
        {"letter":"B", "value" : 3,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_B_.jpg" },
        {"letter":"C", "value" : 3,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_C_.jpg" },
        {"letter":"D", "value" : 2,  "amount" : 4,  "image":"Scrabble_Tiles/Scrabble_Tile_D_.jpg" },
        {"letter":"E", "value" : 1,  "amount" : 12, "image":"Scrabble_Tiles/Scrabble_Tile_E_.jpg" },
        {"letter":"F", "value" : 4,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_F_.jpg" },
        {"letter":"G",  "value" : 2,  "amount" : 3,  "image":"Scrabble_Tiles/Scrabble_Tile_G_.jpg" },
        {"letter":"H",  "value" : 4,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_H_.Ijpg" },
        {"letter":"I",  "value" : 1,  "amount" : 9,  "image":"Scrabble_Tiles/Scrabble_Tile_I_.jpg"  },
        {"letter":"J",  "value" : 8,  "amount" : 1,  "image":"Scrabble_Tiles/Scrabble_Tile_J_.jpg"  },
        {"letter":"K",  "value" : 5,  "amount" : 1,  "image":"Scrabble_Tiles/Scrabble_Tile_K_.jpg"  },
        {"letter":"L",  "value" : 1,  "amount" : 4,  "image":"Scrabble_Tiles/Scrabble_Tile_L_.jpg"  },
        {"letter":"M",  "value" : 3,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_M_.jpg"  },
        {"letter":"N",  "value" : 1,  "amount" : 6,  "image":"Scrabble_Tiles/Scrabble_Tile_N_.jpg"  },
        {"letter":"O",  "value" : 1,  "amount" : 8,  "image":"Scrabble_Tiles/Scrabble_Tile_O_.jpg"  },
        {"letter":"P",  "value" : 3,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_P_.jpg"  },
        {"letter":"Q",  "value" : 10, "amount" : 1,  "image":"Scrabble_Tiles/Scrabble_Tile_Q_.jpg"  },
        {"letter":"R",  "value" : 1,  "amount" : 6,  "image":"Scrabble_Tiles/Scrabble_Tile_R_.jpg"  },
        {"letter":"S",  "value" : 1,  "amount" : 4,  "image":"Scrabble_Tiles/Scrabble_Tile_S_.jpg"  },
        {"letter":"T",  "value" : 1,  "amount" : 6,  "image":"Scrabble_Tiles/Scrabble_Tile_T_.jpg"  },
        {"letter":"U",  "value" : 1,  "amount" : 4,  "image":"Scrabble_Tiles/Scrabble_Tile_U_.jpg"  },
        {"letter":"V",  "value" : 4,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_V_.jpg"  },
        {"letter":"W",  "value" : 4,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_W_.jpg"  },
        {"letter":"X",  "value" : 8,  "amount" : 1,  "image":"Scrabble_Tiles/Scrabble_Tile_X_.jpg"  },
        {"letter":"Y",  "value" : 4,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_Y_.jpg"  },
        {"letter":"Z",  "value" : 10, "amount" : 1,  "image":"Scrabble_Tiles/Scrabble_Tile_Z_.jpg"  },
        {"letter":" ",  "value" : 0,  "amount" : 2,  "image":"Scrabble_Tiles/Scrabble_Tile_Blank_.jpg" }
    ]
// This array will help with the everything in the board like,double score, triple score,etc
// It is simmillar to what i did with Tiles but for scrabbleboard oneline.
var ScrabbleBoard = 
    [
        {"type":"Blank","lMultiply":1, "wMultiply":1,"image": "blank.png"},
        {"type":"Blank","lMultiply":1, "wMultiply":1,"image": "blank.png"},
        {"type":"DoubleWord","lMultiply":1, "wMultiply":2,"image": "DoubleWord.png"},
        {"type":"Blank","lMultiply":1, "wMultiply":1,"image": "blank.png"},
        {"type":"Blank","lMultiply":1, "wMultiply":1,"image": "blank.png"},
        {"type":"Blank","lMultiply":1, "wMultiply":1,"image": "blank.png"},
        {"type":"DoubleLetter","lMultiply":1, "wMultiply":2,"image": "DoubleLetter.png"}   
    ]

// we will implement a function that will keep all of the other functions running

$(document).ready(function()
{
    ScrabbleBoardDisplay();
    ResetEverything();
});

// This is going to be a image of the tiles with letters
function imageOfLetter()
{
    $("#RackForLetters").empty();
    for(var i =0; i <7; ++i)
    {
        //We are going to use random number generator so tiles are random order.
        const randIndex = Math.floor(Math.random()*26);
        $("#RackForLetters").append("<img id= 'letter"+i+ "' class = 'letterTile' letter= '" + ScrabbleTiles[randIndex].letter + "' src= '" + ScrabbleTiles[randIndex].image + "' />");  
    }
}

//Displaying the line of scrabble game board 
function ScrabbleBoardDisplay()
{
    for (var i = 0; i < 7; i++)
    {
        $("#ScrabbleBoard").append("<img id = 'boardtile" + i + "'class= 'ScrabbleBoard' index = '" + i + "'type = '" + ScrabbleBoard[i].type + "'src = '" + ScrabbleBoard[i].image + "' />");
    }
}

// function to create tiles draggable
//https://greensock.com/forums/topic/12047-sortable-grid-with-draggable-tiles-demo-put-contentimages-in-tiles/
// The above website i use as a example for draggable stuff.
function tileDragable()
{
    $(".letterTile").draggable({
        snapMode: 'inner',
    });
}

// Function to make board Drop

function boardDrop()
{
    $(".ScrabbleBoard").droppable({
        accept: '.letterTile',
        drop: addLetter
    });
}

// Function to create rack drop down 

function rackDroppable()
{
    $('RackForLetters').droppable({
        accept: '.letterTile',
        drop: rackDrop,
    });
}

// This function will tell us where letter is and stores the information in array
// Had look over this on a :https://www.w3schools.com/js/js_this.asp
function addLetter(event,ui)
{
    ui.draggable.position({
        of: $(this),
    });

    const id = ui.draggable.attr('Letter');
    const type = $(this).attr('type');
    const index = $(this).attr('index')

    Arrayofletters[id] = {index,type}
    console.log(Arrayofletters[id]);
}


//Function to drop the rack

function rackDrop(event,ui)
{
    const letter = ui.draggable.attr('Letter');
    const id = ui.draggable.attr('id');

    console.log(Arrayofletters[letter]);
    delete Arrayofletters[letter];
    ui.draggable.remove();
    $("#RackForLetters").append("<img id = 'letter" + id + "'class = 'letterTile'" + letter + "'scr = 'Scrabble_Tiles/Scrabble_Tile_"+ letter + ".jpg'/>");
    tileDragable();
}

// This Function will calculate the score of the tiles

function Score()
{
    // Get the position of board and get value
    var position = [];
    var PlaceArray = new Array();
    console.log(Object.keys(Arrayofletters));

    for (const key of Object.keys(Arrayofletters))
    {
        const pos = Number(Arrayofletters[key]['index']);
        position.push(pos);
        PlaceArray[pos] = key;
    }

    position = position.sort(function(a,b)
    {
        return a-b;
    });

    // This will change scores everytime it makes a word 
    var score = TotalScore();
    if (bestScore < score)
    {
        bestScore = score;
    }

    ResetEverything();

    $("#Score").text(score);
    $("#TotalScore").text(bestScore);

}

// This function should calculate total score

function TotalScore()
{
    var score = 0;

    for (const key of Object.keys(Arrayofletters))
    {
        const tiles = Arrayofletters[key]['type'];
        const value = valueOfLetter(key);

        if (tiles == 'DoubleWord')
        {
            score += value * 2;
        }
        else if (tiles == 'DoubleLetter')
        {
            score += value * 2;
        }
        else
        {
            score += value;
        }
        return score;
    }
}

// This function should get the value of the letter
//Had help from this website learned about making variable constants to use objects values.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
function valueOfLetter(letter)
{
    const object = tiles.filter((val) => val.letter == letter)[0];
    return object.value;
}

// This function will clear everythin
function ResetEverything()
{
    Arrayofletters = [];
    imageOfLetter();
    tileDragable();
    boardDrop();
    rackDroppable()
}














