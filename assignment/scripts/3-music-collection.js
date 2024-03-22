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

  //              loop through the collection and add any album objects with a matching artist to the array
  for (let album of collection){
    if(searchedArtist === album.artist){
      results.push(album);
    }
  }

  return results;

  //OUTPUTS: return the array with the matching results (if no results are found an empty array should be returned)

}

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
