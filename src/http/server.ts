import fastify from 'fastify';
import cookie from '@fastify/cookie';
import websocket from '@fastify/websocket';
import { createPolls } from './routes/create-poll';
import { getPolls } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';
import { pollResults } from './ws/poll-results';


const app = fastify();

app.register(cookie, {
    secret: "my-secret",
    hook: 'onRequest',
    
});

app.register(websocket);

app.register(createPolls);
app.register(getPolls);
app.register(voteOnPoll);
app.register(pollResults);


app.listen({ port: 3333}).then(() => {
    console.log('HTTP server running!')
})
