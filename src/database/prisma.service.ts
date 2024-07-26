import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
    // FUNCÁO PARA FECHAR A CONEXÃO EM CASO DE FALHA - NÃO EXISTE NA DOCUMENTACAO ATUAL DO NESTJS
    // async enableShutdownHooks(app: INestApplication) {
    //     this.$on('beforeExit', async () => {
    //         await app.close()
    //     })
    // }
}