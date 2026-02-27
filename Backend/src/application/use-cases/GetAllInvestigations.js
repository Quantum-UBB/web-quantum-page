import * as repository from '../../infrastructure/persistence/repositories/TypeORMInvestigationRepository.js';
import { Roles } from '../../domain/entities/User.js';

export const execute = async (requesterUser) => {
    // Si es Admin o Moderador, ver todo. Si es invitado o miembro, solo lo publicado.
    const canSeeHidden = requesterUser.role === Roles.ADMIN || requesterUser.role === Roles.MODERATOR;
    const filter = canSeeHidden ? {} : { publicada: true };

    return await repository.getAll(filter);
};
