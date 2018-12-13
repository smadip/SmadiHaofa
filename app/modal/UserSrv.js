
app.factory("userSrv", function ($q, $http) {

    var activeUser = null;

    function User(plainUser) {
        this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.roleId = plainUser.roleId;
    }

    function login(email, pwd) {
        var async = $q.defer();

        var loginURL = "http://my-json-server.typicode.com/smadip/SmadiHaofa/users?email=" +
            email + "&pwd=" + pwd;
        $http.get(loginURL).then(function (response) {
            if (response.data.length > 0) {
                // success login
                activeUser = new User(response.data[0]);
                async.resolve(activeUser);
            } else {
                // invalid email or password
                async.reject("invalid email or password")
            }
        }, function (error) {
            async.reject(error);
        });

        return async.promise;
    }

    function isRoleAllow(roleId) {
        if (roleId == 3) return true;
        if (roleId == 2) {
            if (activeUser != null) {
                if (activeUser.roleId == 2) return true;
            }
            return false;
        }
        if (roleId == 1) {
            if (activeUser != null) {
                if (activeUser.roleId == 1) return true;
            }
            return false;
        }
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function isAdminLoggedIn() {
        var active = activeUser ? true : false;
        return active && activeUser.roleId == 1 ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function getActiveUser() {
        return activeUser;
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveUser: getActiveUser,
        isAdminLoggedIn: isAdminLoggedIn,
        isRoleAllow:isRoleAllow
    }
})