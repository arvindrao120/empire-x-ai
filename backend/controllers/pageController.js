export const renderHome = (req, res) => {
    res.render("login");
};

export const renderProfile = (req, res) => {
    if (!req.user && !req.isAuthenticated()) {
        return res.redirect("/");
    }
    // Render the EJS view and explicitly pass the user object
    res.render("profile", { user: req.user });
};
