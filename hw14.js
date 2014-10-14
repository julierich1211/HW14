var githubUsername = "julierich1211";
var url = "https://api.github.com/users/"+githubUsername;
$.get(url).then(function(data){
    drawProfile(data);
})
function drawProfile(data) {
    document.body.innerHTML = [
        '<div class = name> ',
        data.name,
        '</div>',
        '<div class = blog> Read My Blog: ',
        data.blog,
        '</div>',
        '<div class = email> Email Me: ',
        data.email,
        '</div>',
        '<div class = location> I am in: ',
        data.location,
        '</div>',
        '<div class = avatar>',
        data.avatar_url,
        '</div>',
        '<div class = links>',
        data.html_url,
        '</div>',
        '<div class = repo> See My Work: ',
        data.repos_url,
        '</div>',
        '<div class = events>',
        data.events_url,
        '</div>'

    ].join('')
}






