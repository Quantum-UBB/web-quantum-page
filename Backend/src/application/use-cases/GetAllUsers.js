import * as UserRepository from '../../infrastructure/persistence/repositories/TypeORMUserRepository.js';

export const execute = async (requestingUser) => {
    // Only Administrators can fetch the full user list
    if (requestingUser.role !== 'Administrador') {
        throw new Error('No tienes permisos suficientes para ver la lista de usuarios. Solo Administradores.');
    }

    return await UserRepository.findAll();
};
