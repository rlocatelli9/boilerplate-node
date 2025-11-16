import type { FastifyInstance } from 'fastify'
import { usersData } from '@/app/mock-data'

export default async function appRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    return usersData
  })
}
