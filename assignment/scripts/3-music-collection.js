console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

// create an empty array called myCollection 
let myCollection = [];

//create a function named addToCollection with arguments collection, title, artist, yearPublished
function addToCollection(collection, newTitle, newArtist, yearPublished){   //take in a collection parameter (allows function to be reused to add an album to any array of album objects)
  
  
  let newAlbum = {              //take in albums title, artist, yearPublished create a new object having these properties       
    collection: collection,
    title: newTitle,
    artist: newArtist,
    yearPublished: yearPublished
  }

  collection.push(newAlbum);
  return newAlbum;
}

//add 6 albums and console.log using the functions return value
console.log('test for addToCollection function', addToCollection(myCollection, 'wasteland baby','hozier', 2018));
console.log('test for addToCollection function', addToCollection(myCollection, "A Fever You Can't Sweat Out",'Panic! At The Disco', 2005));
console.log('test for addToCollection function', addToCollection(myCollection, 'SOS','SZA', 2022));
console.log('test for addToCollection function', addToCollection(myCollection, 'Happier Than Ever','Billie Eilish', 2021));
console.log('test for addToCollection function', addToCollection(myCollection, 'At Last!','Etta James', 1960));
console.log('test for addToCollection function', addToCollection(myCollection, 'Duke Ellington & John Coltrane','Duke Elington and John Coltrane', 1963));
console.log('test for addToCollection function', addToCollection(myCollection, 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?','Billie Eilish', 2019));

//console.log myCollection array
console.log(myCollection);


//create a function named showCollection INPUTS: collection parameter 
function showCollection(collection){  
  for (let album of collection){ //SIDE EFFECTS: loop through collection
  
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`); //OUTPUTS: console.log each album's inforamtion formatted within a single string TITLE by ARTIST, published in YEARPUBLISHED                                                                        
  }
  return true;
}

console.log('Test for the showCollection function!', showCollection(myCollection));

//create a function named findByArtist INPUTS: collection, artist: string 
function findByArtist(collection, searchedArtist){
  let results = [];   //SIDE EFFECTS: create a matching array to hold any matching results if any

  //loop through the collection and add any album objects with a matching artist to the array
  for (let album of collection){
    if(searchedArtist === album.artist){
      results.push(album);
    }
  }
  return results;     //OUTPUTS: return the array with the matching results (if no results are found an empty array should be returned)

}

console.log('Test for findByArtist function, artist is Billie Eilish', findByArtist(myCollection, 'Billie Eilish'));

//STRETCH. Create a function called search that will allow for searching by artist and yearPublished
function search(collection, searchCriteria){  //INPUTS: collection and searchCriteria
  //SIDE EFFECTS: create a new array for the match results, 
  if(searchCriteria === undefined || searchCriteria.artist === undefined || searchCriteria.yearPublished === undefined){
    return myCollection;
  }
  
  let matchResults = [];

  //loop through each album of the collection, if there is a match for all criteria push into array 

  
  for (let album of collection){
    if(searchCriteria.artist === album.artist && searchCriteria.yearPublished === album.yearPublished){
      matchResults.push(album);
    } 
  } return matchResults;
}

  //OUTPUTS: return a new array of all items in the collection matching ALL of the search criteria
  //          if there is no search object or empty search object or missing artist/yearPublished data provided as input 
  //          return ALL ALBUMS from the collection being searched return collection; 



console.log('This is a test for the search function, the expected result is an array with {artist: billie eilish, yearPublish: 2021', search(myCollection, { artist: 'Billie Eilish', yearPublished: 2021 } ));
console.log('This is a test for the search function, the expected result is an empty array, searchCriteria: {artist: Ray Charles, yearPublish: 1957', search(myCollection, { artist: 'Ray Charles', yearPublished: 1957 } ));

//no search object
console.log('This is a test for the edge case with no object provided', search(myCollection));

//empty objects
console.log('This is a test for the edge case with no object provided', search(myCollection, {}));

//missing property
console.log('This is a test for the edge case with no object provided', search(myCollection, {artist: 'Billie Eilish'}));



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
