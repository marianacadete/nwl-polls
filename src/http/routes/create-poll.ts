import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { FastifyInstance } from "fastify";

export async function createPolls(app: FastifyInstance) {
    app.post('/polls', async (request, reply) => {
        const createPollBody = z.object({
            title: z.string(),
            options: z.array(z.string())
        });

        const { title, options } = createPollBody.parse(request.body);

        const poll = await prisma.poll.create({
            data: {
                title,
                option: {
                    createMany: {
                        data: options.map((option) => {
                            return { 
                                title: option,
                            }
                        })
                    }

                }
            }
        });

    

        return reply.status(201).send({ poll: poll.id });
    });
}
