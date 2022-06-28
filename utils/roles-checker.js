const rolesChecker = user => {
    return {
        isAdmin: user?.role === 'ADMIN',
        isEditor: user?.role === 'EDITOR'
    }
}

module.exports = { rolesChecker }