var githubUsername = "julierich1211";
var url = "https://api.github.com/users/"+githubUsername;
$.get(url).then(function(data){
    drawProfile(data);
})
function drawProfile(data) {
    document.body.innerHTML = [
        '<h1>',
        data.name,
        '</h1>',
        '<h2> blog:',
        data.blog,
        '</h2>',
        '<h2>',
        data.email,
        '</h2>',
        '<h2>',
        data.location,
        '</h2>',
        '<h2>',
        data.avatar_url,
        '</h2>',
        '<h2>',
        data.html_url,
        '</h2>',
        '<h2>',
        data.repos_url,
        '</h2>',
        '<h2>',
        data.events_url,
        '</h2>',

    ].join('')
}






