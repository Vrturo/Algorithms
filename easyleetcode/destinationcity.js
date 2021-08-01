var destCity = function(paths) {
  
    // return destination city 
    // it is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city 
    // set object to empty object
    // run through it once to get the last destination 

/**
 * @param {string[][]} paths
 * @return {string}
 */

// in : out 
// to/from
// Loop through the paths and find which one is unique 
// unique destination city

var destCity = function(trips) {
    const citiesVisited = {};
     
     for (let i = 0; i < trips.length - 1; i++){
         const currentTrip = trips[i]
         
         for (let j = 0; j < currentTrip.length; j++){
             const currentCity = currentTrip[j]
              citiesVisited[currentCity] = true;
         }
         
     } 
     
     
     const lastTrip = trips[trips.length-1]
     if(!citiesVisited[lastTrip[lastTrip.length-1]])         return lastTrip[lastTrip.length-1];
     
     const firstCityName = lastTrip[0];
     if(!citiesVisited[firstCityName]) return firstCityName;
             
         
 
 }
 
 
 // {
     
 //     Lima : true,
 //         New York : true,
 //             London: true,
 // }