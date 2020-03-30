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

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
              if (predicate(collection[i]) === true) {
                return collection[i];
              }
            }
    },

    filter: function(collection, predicate) {
      const result = collection.filter(x => predicate(x))
      return result
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
