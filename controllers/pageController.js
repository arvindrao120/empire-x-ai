export const renderHome = (req, res) => {
    res.render("login");
};

export const renderProfile = (req, res) => {
    if (!req.user && !req.isAuthenticated()) {
        return res.redirect("/");
    }
    res.render("profile", { user: req.user });
};
