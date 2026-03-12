export const Roles = {
    GUEST: "Invitado",
    MEMBER: "Miembro Activo",
    MODERATOR: "Moderador",
    ADMIN: "Administrador"
};

export class User {
    constructor(id, username, email, password, role = Roles.MEMBER, createdAt) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
    }
}
