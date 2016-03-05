var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.responseFilter = function(req, res) {
    // If cookie is set, no cookie line is needed
    if(req.cookies.cookiesAccepted == 'true') {
        return res;
    }

    // Set up model and view
    var view = resolve('cookie-line.html');
    var siteConfig = portal.getSiteConfig();

    var model = {
        intro: siteConfig['cookie-line-text-intro'],
        acceptButton: siteConfig['cookie-line-text-accept'],
        readMoreButton: siteConfig['cookie-line-text-read-more'],
        readMoreLink: portal.pageUrl({id: siteConfig['cookie-line-link'] })
    };

    // Render HTML to append
    var html = thymeleaf.render(view, model);

    // Append HTML to bottom of body
    var bodyEnd = res.pageContributions.bodyEnd;
    if(!bodyEnd) {
        res.pageContributions.bodyEnd = [];
    }
    else if(typeof(bodyEnd) === 'string') {
        res.pageContributions.bodyEnd = [ bodyEnd ];
    }

    res.pageContributions.bodyEnd.push(html);

    return res;
}
