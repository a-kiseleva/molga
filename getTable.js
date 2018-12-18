var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/gists/public', false);
xhr.send();
if (xhr.status != 200) {
} else {
    var gotJsonData = (xhr.responseText);
}

let myData = [];

gotJsonData = JSON.parse(gotJsonData.toLowerCase());

function gettingRelevantData(data) {
    data.forEach(function (key) {
            let fileName = key.files;
            for (key in fileName) {
                let newObj = {
                    filename: fileName[key]['filename'],
                    language: fileName[key]['language'],
                    raw_url: fileName[key]['raw_url']
                };
                myData.push(newObj);
            }
        }
    )
}

function displayData(obj) {
    for (let sortedKey in obj) {
        var allData;
        allData += '<tr><td>' + obj[sortedKey].filename + '</td>'
            + '<td>' + obj[sortedKey].language + '</td>' +
            '<td><a href="' + obj[sortedKey].raw_url + '">' + "url" + '</a></td></tr>';
    }
    $('#fetchedData').append(allData);
}

gettingRelevantData(gotJsonData);


displayData(myData);