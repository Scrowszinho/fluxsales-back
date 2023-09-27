import databaseSource from './prisma.providers';

export const DatabaseProvider = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    return databaseSource();
  },
};
