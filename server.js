'use strict';

let {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    graphql
} = require('graphql');

let faker = require('./fakedb');



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

graphql(new GraphQLSchema({query: QueryType}), query).then(result => {

    // Prints
    // {
    //   data: { hello: "world" }
    // }
    console.log(result);

});


