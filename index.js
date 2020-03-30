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
      let newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)
      let newCollection = newCollection.map(x => callback(x))
      return newCollection
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
