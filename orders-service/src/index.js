'use strict';


import Hapi from 'hapi'
import mongoose from 'mongoose'
import {graphqlHapi, graphiqlHapi} from 'apollo-server-hapi'

import createStudentRoutes from './api/v1/student'

import schema from './graphql/schema'


//Connect to mongo instance



// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

createStudentRoutes(server);

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return '<h1>hello world</h1>';
    }
});

// Start the server
const start =  async function() {

    try {
        //Connect to mongo instance
        console.log('Connecting to database')
        await mongoose.connect('mongodb+srv://ronnyquesada:ronnyquesada@soa4id-l7ibz.mongodb.net/test?retryWrites=true',
        {useNewUrlParser:true}
    )
    
    await mongoose.connection.once('open',()=>{
        console.log('connected to database');
    })


    await server.register({
        plugin: graphiqlHapi,
        options:{
            path: '/graphiql',
            graphiqlOptions: {
                endpointURL: '/graphql'
            },
            route: {cors:true}
        }
    })

    await server.register({
        plugin: graphqlHapi,
        options:{
            path: '/graphql',
            graphqlOptions: {schema},
            route: {cors:true}
        }
    })

    console.log('starting server')
    await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();