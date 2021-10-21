import prismaClient from "../prisma";

class GetLast3MessagesService {
    async execute() {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: 'desc',
            },
            include: {
                user: true
            }
        })
        return messages
    }
}

export { GetLast3MessagesService }
//busca as 3 últimas mensagens enviadas, funcionando como:
// SELECT TOP 3 * FROM MESSAGES ORDER BY 'CREATED AT' DESC
