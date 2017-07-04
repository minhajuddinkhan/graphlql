# graphlql

What ?

```javascript


let QueryType = new  GraphQLObjectType({
    name: 'RootQuery',
    description: 'Throne of all queries',
    fields: () => ({
        hero: {
            type: GraphQLString,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve: (root, args) => {
                let output = faker.findHeroById( args.id );

                console.log(output);
                return output
            }
        }
    })
});


let query = ` { 
                hero(id: "1")
              } `;
```              
              
