const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
              for (let i = 0; i < newCollection.length; i++)
              callback(newCollection[i])
            return collection
          },

    map: function(collection, callback) {
      let newArray = (Array.isArray(collection)) ? collection : Object.values(collection)
      let newCollection = newArray.map(x => callback(x))
      return newCollection
    },

    reduce: function(collection, callback, acc=0) {
      let sum = collection.reduce((acc, callback) => acc + callback, 0)
      return sum
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
